# Documentação: Deploy com Azure Blob Storage e GitHub Actions

Esta documentação descreve como:

- Criar e configurar dois containers (um para o Storybook e outro para a build do projeto) na sua Storage Account;
- Obter as chaves de acesso necessárias no Portal do Azure;
- Criar um Service Principal para autenticação no Azure via GitHub Actions;
- Configurar os secrets do GitHub;
- Configurar um workflow do GitHub Actions para fazer o build e o upload dos arquivos para os containers.

---

## 1. Configuração dos Containers na Storage Account

### 1.1. Acesse o Portal do Azure

1. Entre no [Portal do Azure](https://portal.azure.com/) com sua conta.

### 1.2. Selecione a Storage Account

1. No menu lateral, clique em **"Storage Accounts"**.
2. Selecione a Storage Account que você está usando (por exemplo, `cdnexamples`).

### 1.3. Crie os Containers

1. No menu lateral da Storage Account, em **"Armazenamento de dados"**, clique em **"Containers"**.
2. **Para criar o container do Storybook:**
   - Clique em **"+ Container"**.
   - Defina o nome como `storybook`.
   - Em **Nível de acesso público**, selecione **Blob** (permitindo acesso aos arquivos, mas não à listagem do container).
   - Clique em **"Criar"**.
3. **Para criar o container para o projeto (CDN):**
   - Repita o processo e defina o nome como `cdn`.
   - Configure o **Nível de acesso** como **Blob**.
   - Clique em **"Criar"**.

---

## 2. Obtenção das Chaves de Acesso no Portal do Azure

### 2.1. Obter a Storage Account Key

1. Na sua Storage Account (`cdnexamples`), navegue até **"Chaves de acesso"** (ou **"Access keys"**).
2. Copie o valor de **Key1** (ou Key2, se preferir). Essa chave será usada para que o GitHub Actions possa autenticar e fazer upload dos arquivos.

---

## 3. Criação do Service Principal (SP)

Para que o GitHub Actions possa interagir com o Azure, você precisará de um Service Principal.

### 3.1. Use o Azure CLI para Criar o SP

Abra o **Azure CLI** (ou PowerShell) e execute (lembre-se de substituir os placeholders):

```bash
az ad sp create-for-rbac --name "github-actions-sp" --role contributor --scopes "/subscriptions/<SUBSCRIPTION_ID>/resourceGroups/<RESOURCE_GROUP_NAME>" --sdk-auth
```

- <SUBSCRIPTION_ID>: Identificador da sua assinatura.
- <RESOURCE_GROUP_NAME>: Nome do resource group onde está a Storage Account.

```json
{
  "clientId": "00000000-0000-0000-0000-000000000000",
  "clientSecret": "xxxx-xxxx-xxxx-xxxx",
  "subscriptionId": "11111111-1111-1111-1111-111111111111",
  "tenantId": "22222222-2222-2222-2222-222222222222",
  ...
}
```

Esse JSON deverá ser usado como secret no GitHub.

<em>Observação para PowerShell:</em>

> Se estiver usando PowerShell, use backticks (<code>`</code>) para quebrar linha, ou rode o comando em uma única linha.

---

## 4. Configuração dos Secrets no GitHub

### 4.1. Configurar o Secret AZURE_CREDENTIALS

1. No repositório do GitHub, vá em Settings > Security > Secrets and variables > Actions.
2. Clique em "New repository secret".
3. Nome: AZURE_CREDENTIALS.
4. Valor: Cole o JSON completo que você obteve ao criar o Service Principal.
5. Salve.


### 4.2. Configurar o Secret AZURE_STORAGE_KEY
1. Ainda em Settings > Secrets and variables > Actions, clique em "New repository secret".
2. Nome: AZURE_STORAGE_KEY.
3. Valor: Cole a Storage Account Key que você copiou do Portal do Azure.
4. Salve.

---

## 5. Configuração do Workflow no GitHub Actions
Crie ou edite o arquivo do workflow (por exemplo, .github/workflows/deploy.yml) conforme o exemplo abaixo:

```yaml
name: Deploy to Azure Storage (Storybook e Projeto)

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      # Checkout do repositório
      - name: Checkout
        uses: actions/checkout@v2

      # Configuração do ambiente Node.js
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '20'

      # Instalação das dependências
      - name: Install dependencies
        run: npm install

      # Build do Storybook (gera a pasta "storybook-static")
      - name: Build Storybook
        run: npm run build-sb

      # Build do projeto (gera a pasta "dist")
      - name: Build Projeto
        run: npm run build

      # Login no Azure usando o Service Principal
      - name: Login Azure
        uses: azure/login@v1
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}

      # Upload dos arquivos do Storybook para o container "storybook"
      - name: Upload Storybook to Blob
        uses: azure/cli@v1
        with:
          inlineScript: |
            az storage blob upload-batch \
              --account-name cdnexamples \
              --destination storybook \
              --source storybook-static \
              --pattern "*"
        env:
          AZURE_STORAGE_KEY: ${{ secrets.AZURE_STORAGE_KEY }}

      # Upload dos arquivos do projeto para o container "cdn"
      - name: Upload Project Dist to Blob (CDN)
        uses: azure/cli@v1
        with:
          inlineScript: |
            az storage blob upload-batch \
              --account-name cdnexamples \
              --destination cdn \
              --source dist \
              --pattern "*"
        env:
          AZURE_STORAGE_KEY: ${{ secrets.AZURE_STORAGE_KEY }}


```


#### Explicação dos passos do Workflow
1. Checkout, Setup Node e Install dependencies:
- Clona o repositório e configura o ambiente Node.js.

2. Build Storybook e Build Projeto:
- Executa os comandos para gerar os builds.
O Storybook gera a pasta storybook-static e o build do projeto gera a pasta dist.

3. Login no Azure:
- Realiza a autenticação usando o Service Principal configurado no secret AZURE_CREDENTIALS.

4. Upload dos Arquivos:

- A etapa "Upload Storybook to Blob" envia os arquivos da pasta storybook-static para o container storybook.
- A etapa "Upload Project Dist to Blob (CDN)" envia os arquivos da pasta dist para o container cdn.
- O parâmetro --destination define o nome do container de destino.
- A variável de ambiente AZURE_STORAGE_KEY é usada para autenticação no comando CLI.

Após o deploy, os arquivos ficarão acessíveis nas seguintes URLs (assumindo que os containers estejam com acesso público):

- Storybook:

```bash
https://cdnexamples.blob.core.windows.net/storybook/index.html

```

- Projeto (CDN):
Por exemplo, para um arquivo main.js:

```bash
https://cdnexamples.blob.core.windows.net/cdn/main.js

```

---

## Conclusão
Com esses passos, você configurou:

- A criação e configuração dos containers na Storage Account;
- A obtenção e configuração das chaves de acesso e do Service Principal;
- A definição dos secrets no GitHub;
- Um workflow de GitHub Actions que automatiza o build e o upload dos arquivos para os containers.

Dessa forma, cada push na branch main acionará o workflow, atualizando os arquivos do Storybook e do seu projeto diretamente na Azure Storage.

Caso tenha dúvidas ou precise ajustar configurações (como o nível de acesso dos containers ou endpoints customizados), você pode sempre revisar as configurações diretamente no Portal do Azure.