"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import 'button-style.css';
export const Button = ({ children, className, appName }) => {
    return (_jsx("button", { className: `btn, ${className}`, onClick: () => alert(`Hello from your ${appName} app!`), children: children }));
};
