"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var Button = function (_a) {
    var children = _a.children, className = _a.className, appName = _a.appName;
    return (React.createElement("button", { className: className, onClick: function () { return alert("Hello from your ".concat(appName, " app!")); } }, children));
};
exports.Button = Button;
