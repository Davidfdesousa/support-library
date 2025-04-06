"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Button = function (_a) {
    var children = _a.children, className = _a.className, appName = _a.appName;
    return ((0, jsx_runtime_1.jsx)("button", { className: className, onClick: function () { return alert("Hello from your ".concat(appName, " app!")); }, children: children }));
};
exports.Button = Button;
