# Configurando CORS (Cross-Origin Resource Sharing) no Azure Blob Storage

O **CORS** (Cross-Origin Resource Sharing) é um mecanismo de segurança que permite ou restringe requisições feitas de um domínio diferente do domínio que hospeda o recurso. Em outras palavras, se um site (por exemplo, `https://meusite.com`) precisa carregar recursos (imagens, fontes, scripts, etc.) de outro domínio (por exemplo, `https://minha-storage.blob.core.windows.net`), o navegador verifica se o servidor (a conta de armazenamento do Azure) está configurado para permitir essa requisição.

## 1. O que é Preflight?

O navegador, ao detectar uma requisição **cross-origin** (entre diferentes domínios), muitas vezes faz uma requisição de **preflight** (`OPTIONS`) antes da requisição principal (`GET`, `POST`, etc.). Essa requisição serve para perguntar ao servidor: 
> “Você permite que o domínio `https://meusite.com` acesse este recurso usando esses métodos e cabeçalhos?”

Se o servidor não estiver configurado para responder de forma adequada, o navegador **bloqueia** a requisição principal.

## 2. Tempo de Cache (Access-Control-Max-Age)

Na resposta à requisição de preflight, o servidor pode incluir o cabeçalho `Access-Control-Max-Age`, que indica **por quanto tempo** o navegador pode “lembrar” ou **cachear** o resultado dessa verificação. 

- **Sem cache ou com `max-age` baixo**: O navegador terá que refazer o preflight a cada nova requisição, aumentando o número de requisições e, consequentemente, o tempo de carregamento.
- **Com `max-age` alto**: O navegador “lembra” que a origem é permitida por mais tempo, economizando requisições de pré-verificação. Em contrapartida, se você mudar as configurações de CORS no servidor, os usuários só verão a mudança depois que o cache expirar.

### Exemplo

Se configurarmos `Access-Control-Max-Age: 3600`, o navegador não fará nova requisição de pré-verificação por 1 hora (3600 segundos) para o mesmo tipo de requisição (mesmos métodos, mesmos cabeçalhos).

## 3. Configurando CORS no Azure Blob Storage

Existem várias formas de configurar as regras de CORS no Azure Blob Storage:

### 3.1. Via Portal do Azure

1. Abra sua **Storage Account** no [Portal do Azure](https://portal.azure.com).
2. No menu lateral, procure por **“Compartilhamento de recursos”** ou **“Resource Sharing (CORS)”** dentro de **Blob service**.
3. Clique em **Adicionar** (Add) e configure:
   - **Allowed origins (Origens permitidas)**: Por exemplo, `https://meusite.com` ou `*` para liberar qualquer domínio.
   - **Allowed methods (Métodos permitidos)**: Normalmente `GET, OPTIONS` (ou outros métodos que você precise).
   - **Allowed headers (Cabeçalhos permitidos)**: Geralmente `*` para facilitar, mas pode especificar cabeçalhos exatos.
   - **Exposed headers (Cabeçalhos expostos)**: Se quiser expor algum cabeçalho específico à aplicação, ou `*`.
   - **Max age**: Tempo em segundos para o navegador manter o cache do preflight (por exemplo, `3600`).

### 3.2. Via CLI

Caso prefira usar a linha de comando (Azure CLI), execute:

```bash
az storage cors add \
  --methods GET OPTIONS HEAD \
  --origins https://meusite.com \
  --services b \
  --allowed-headers "*" \
  --exposed-headers "*" \
  --max-age 3600 \
  --account-name <NOME_DA_SUA_STORAGE_ACCOUNT>
```

## Configuração e Considerações Adicionais para CORS no Azure Blob Storage

- **`--services b`**: Indica que estamos configurando para Blob.
- **`--methods GET OPTIONS HEAD`**: Permite esses métodos.
- **`--origins https://meusite.com`**: Permite que esse domínio acesse os recursos.
- **`--max-age 3600`**: Configura 1 hora de cache para o preflight.

> **Dica**: Se já existir alguma configuração de CORS e você quiser sobrescrevê-la, pode ser necessário limpar as regras existentes com `az storage cors clear` antes de adicionar as novas regras com `az storage cors add`.

### 3.3. Via SDK

Também é possível configurar CORS usando bibliotecas de código para .NET, Node.js, Python, etc. As bibliotecas oferecem métodos para definir as regras de CORS diretamente no código, caso você queira automatizar tudo.

### 4. Conclusão

Para que suas fontes, imagens ou scripts sejam carregados sem erro de CORS a partir do Azure Blob Storage:

- **Defina as regras de CORS adequadas**: Configure corretamente as origens, métodos e cabeçalhos permitidos.
- **Ajuste o tempo de cache (`Access-Control-Max-Age`)**: Configure o tempo de cache do preflight de acordo com a necessidade de performance e flexibilidade de atualização.
- **Teste as configurações**: Verifique se o navegador está recebendo os cabeçalhos corretos e que as requisições são permitidas.

Com esses ajustes, você evita erros de “Blocked by CORS policy” e garante uma melhor experiência para os usuários que consomem recursos hospedados no Azure Blob Storage.
