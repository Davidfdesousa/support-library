const fs = require('fs');
const path = require('path');

// Diretório das fontes TTF
const fontsDir = path.resolve(__dirname, '../src/assets');
const outputDir = path.resolve(__dirname, '../dist');

// Cria o diretório de saída, se não existir
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Função para gerar CSS
const generateCSS = (fontName) => `
@font-face {
  font-family: '${fontName}';
  src: url('./${fontName}.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
`;

// Ler diretório e gerar arquivos CSS
fs.readdir(fontsDir, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    if (path.extname(file) === '.ttf') {
      const fontName = path.basename(file, '.ttf');
      const cssContent = generateCSS(fontName);
      fs.copyFileSync(path.join(fontsDir, file), path.join(outputDir, file));
      fs.writeFileSync(path.join(outputDir, `${fontName}.css`), cssContent);
    }
  });
});
