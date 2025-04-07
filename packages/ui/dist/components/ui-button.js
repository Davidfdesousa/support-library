import { p as proxyCustomElement, H, h } from './index.js';

const uiButtonCss = ":host{display:inline-block;--button-bg:var(--color-primary-default);--button-fg:var(--color-white);--button-radius:var(--radius-md);--button-padding-sm:var(--spacing-squish-sm);--button-padding-md:var(--spacing-squish-md);--button-padding-lg:var(--spacing-squish-lg);--button-font-sm:var(--font-size-sm);--button-font-md:var(--font-size-md);--button-font-lg:var(--font-size-lg);--button-font-weight:var(--family-weight-medium);--button-line-height:var(--family-height-normal);--button-font-family:var(--family-highlight)}button{all:unset;display:inline-flex;align-items:center;justify-content:center;gap:var(--spacing-inline-xs);background:var(--button-bg);color:var(--button-fg);border-radius:var(--button-radius);padding:var(--button-padding-md);font-size:var(--button-font-md);font-weight:var(--button-font-weight);line-height:var(--button-line-height);font-family:var(--button-font-family);transition:background 0.2s ease;cursor:pointer}button.default{--button-bg:var(--color-gray-200);--button-fg:var(--color-gray-900)}button.primary{--button-bg:var(--color-primary-default);--button-fg:var(--color-white)}button.secondary{--button-bg:var(--color-secondary-default);--button-fg:var(--color-white)}button.success{--button-bg:var(--color-success-default);--button-fg:var(--color-white)}button.warning{--button-bg:var(--color-warning-default);--button-fg:var(--color-gray-900)}button.danger{--button-bg:var(--color-danger-default);--button-fg:var(--color-white)}button.sm{font-size:var(--button-font-sm);padding:var(--button-padding-sm)}button.md{font-size:var(--button-font-md);padding:var(--button-padding-md)}button.lg{font-size:var(--button-font-lg);padding:var(--button-padding-lg)}.slot-start,.slot-end{display:inline-flex;align-items:center}.slot-start{margin-inline-end:var(--spacing-inline-xs)}.slot-end{margin-inline-start:var(--spacing-inline-xs)}button:disabled{opacity:0.6;cursor:not-allowed}";

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
        const classes = `${this.variant} ${this.size}`;
        return (h("button", { key: 'd191940aa961a911a3e5a20357d10c936e1660a0', type: this.type, class: classes, disabled: this.disabled, "aria-disabled": this.disabled ? 'true' : null }, h("slot", { key: '37df10059c9c4a11ba4caf2aa93d112303a00028' })));
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