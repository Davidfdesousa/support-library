"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = Card;
function Card(_a) {
    var className = _a.className, title = _a.title, children = _a.children, href = _a.href;
    return (React.createElement("a", { className: className, href: "".concat(href, "?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo\""), rel: "noopener noreferrer", target: "_blank" },
        React.createElement("h2", null,
            title,
            " ",
            React.createElement("span", null, "->")),
        React.createElement("p", null, children)));
}
