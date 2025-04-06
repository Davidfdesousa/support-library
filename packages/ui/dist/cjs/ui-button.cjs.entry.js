'use strict';

var index = require('./index-ZM7tSxEp.js');

const uiButtonCss = ":host{display:inline-block}button{all:unset;cursor:pointer;border-radius:4px;padding:0.5rem 1rem;font-weight:600;font-family:inherit;transition:background 0.2s ease}button.default{background:#e0e0e0;color:#000}button.primary{background:#005eff;color:#fff}button.secondary{background:red;color:#fff}button.sm{font-size:0.75rem;padding:0.25rem 0.5rem}button.md{font-size:1rem;padding:0.5rem 1rem}button.lg{font-size:1.25rem;padding:0.75rem 1.5rem}button:disabled{opacity:0.6;cursor:not-allowed}";

const UiButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.type = 'button';
        this.variant = 'default';
        this.size = 'md';
        this.disabled = false;
    }
    render() {
        return (index.h("button", { key: 'fac8d9c354621983b6b1418eef4389e6e7f1e43f', type: this.type, class: `btn ${this.variant} ${this.size}`, disabled: this.disabled }, index.h("slot", { key: '45bc89b27c994ca0473082ae00355afda03170ba' })));
    }
};
UiButton.style = uiButtonCss;

exports.ui_button = UiButton;
//# sourceMappingURL=ui-button.entry.cjs.js.map

//# sourceMappingURL=ui-button.cjs.entry.js.map