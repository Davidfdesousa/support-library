const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const storybookDir = path.join(rootDir, "storybook-static");

const fontsDist = path.join(rootDir, "packages/fonts/dist");
const tokensDist = path.join(rootDir, "packages/tokens/dist");

const targetFonts = path.join(storybookDir, "cdn/fonts");
const targetTokens = path.join(storybookDir, "cdn/tokens");

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`⚠️ Diretório não encontrado: ${src}`);
    return;
  }

  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(dest, { recursive: true });
  fs.cpSync(src, dest, { recursive: true });

  console.log(`📦 Copiado de ${src} para ${dest}`);
}

console.log("🔄 Copiando arquivos CDN para storybook-static...");
copyDir(fontsDist, targetFonts);
copyDir(tokensDist, targetTokens);
console.log("✅ Finalizado.");
