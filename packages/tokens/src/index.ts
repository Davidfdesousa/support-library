import './styles.css';

let tokens: any;

(async () => {
  try {
    // Adicione o sufixo .js para o import dinâmico funcionar
    //@ts-ignore
    tokens = await import('../dist/js/tokens.js');
    console.log('Tokens carregados:', tokens);
  } catch (err) {
    console.warn('Tokens ainda não foram gerados. Rode `yarn build:tokens`.');
  }
})();
