import { p as proxyCustomElement, H, h } from './index.js';

const uiButtonCss = ":host{display:inline-block}button{all:unset;cursor:pointer;border-radius:4px;padding:0.5rem 1rem;font-weight:600;font-family:inherit;transition:background 0.2s ease}button.default{background:#e0e0e0;color:#000}button.primary{background:#005eff;color:#fff}button.secondary{background:#ffa726;color:#fff}button.sm{font-size:0.75rem;padding:0.25rem 0.5rem}button.md{font-size:1rem;padding:0.5rem 1rem}button.lg{font-size:1.25rem;padding:0.75rem 1.5rem}button:disabled{opacity:0.6;cursor:not-allowed}";

const UiButton$1 = /*@__PURE__*/ proxyCustomElement(class UiButton extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.type = 'button';
        this.variant = 'default';
        this.size = 'md';
        this.disabled = false;
    }
    render() {
        return (h("button", { key: '0c99e9fc93f298be0c3f7b07f5493ba62c163af4', type: this.type, class: `btn ${this.variant} ${this.size}`, disabled: this.disabled }, h("slot", { key: '888d19ed64e2ba98f8815b2adea4d0040fea7b95' })));
    }
    static get style() { return uiButtonCss; }
}, [1, "ui-button", {
        "type": [1],
        "variant": [1],
        "size": [1],
        "disabled": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ui-button"];
    components.forEach(tagName => { switch (tagName) {
        case "ui-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, UiButton$1);
            }
            break;
    } });
}

const UiButton = UiButton$1;
const defineCustomElement = defineCustomElement$1;

export { UiButton, defineCustomElement };
//# sourceMappingURL=ui-button.js.map

//# sourceMappingURL=ui-button.js.map