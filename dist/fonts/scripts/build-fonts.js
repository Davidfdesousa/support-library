"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
// Diretório das fontes TTF
var fontsDir = path_1.default.resolve(__dirname, '../assets');
var outputDir = path_1.default.resolve(__dirname, '../../dist');
// Cria o diretório de saída, se não existir
if (!fs_1.default.existsSync(outputDir)) {
    fs_1.default.mkdirSync(outputDir, { recursive: true });
}
// Função para gerar CSS
var generateCSS = function (fontName) { return "\n@font-face {\n  font-family: '".concat(fontName, "';\n  src: url('./").concat(fontName, ".ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n"); };
// Ler diretório e gerar arquivos CSS
fs_1.default.readdir(fontsDir, function (err, files) {
    if (err)
        throw err;
    files.forEach(function (file) {
        if (path_1.default.extname(file) === '.ttf') {
            var fontName = path_1.default.basename(file, '.ttf');
            var cssContent = generateCSS(fontName);
            fs_1.default.copyFileSync(path_1.default.join(fontsDir, file), path_1.default.join(outputDir, file));
            fs_1.default.writeFileSync(path_1.default.join(outputDir, "".concat(fontName, ".css")), cssContent);
        }
    });
});
