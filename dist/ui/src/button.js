"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var Button = function (_a) {
    var children = _a.children, className = _a.className, appName = _a.appName;
    return (react_1.default.createElement("button", { className: className, onClick: function () { return alert("Hello from your ".concat(appName, " app!")); } }, children));
};
exports.Button = Button;
