import { r as registerInstance, h } from './index-CW8e-4Zv.js';

const uiButtonCss = ":host{display:inline-block;--button-bg:var(--color-primary-default);--button-fg:var(--color-white);--button-radius:var(--radius-md);--button-padding-sm:var(--spacing-squish-sm);--button-padding-md:var(--spacing-squish-md);--button-padding-lg:var(--spacing-squish-lg);--button-font-sm:var(--font-size-sm);--button-font-md:var(--font-size-md);--button-font-lg:var(--font-size-lg);--button-font-weight:var(--font-weight-medium);--button-line-height:var(--font-line-height-normal);--button-font-family:var(--font-family-highlight)}button{all:unset;display:inline-flex;align-items:center;justify-content:center;gap:var(--spacing-inline-xs);background:var(--button-bg);color:var(--button-fg);border-radius:var(--button-radius);padding:var(--button-padding-md);font-size:var(--button-font-md);font-weight:var(--button-font-weight);line-height:var(--button-line-height);font-family:var(--button-font-family);transition:background 0.2s ease;cursor:pointer}button.default{--button-bg:var(--color-gray-200);--button-fg:var(--color-gray-900)}button.primary{--button-bg:var(--color-primary-default);--button-fg:var(--color-white)}button.secondary{--button-bg:var(--color-secondary-default);--button-fg:var(--color-white)}button.success{--button-bg:var(--color-success-default);--button-fg:var(--color-white)}button.warning{--button-bg:var(--color-warning-default);--button-fg:var(--color-gray-900)}button.error{--button-bg:var(--color-error-default);--button-fg:var(--color-white)}button.sm{font-size:var(--button-font-sm);padding:var(--button-padding-sm)}button.md{font-size:var(--button-font-md);padding:var(--button-padding-md)}button.lg{font-size:var(--button-font-lg);padding:var(--button-padding-lg)}.slot-start,.slot-end{display:inline-flex;align-items:center}.slot-start{margin-inline-end:var(--spacing-inline-xs)}.slot-end{margin-inline-start:var(--spacing-inline-xs)}button:disabled{opacity:0.6;cursor:not-allowed}";

const UiButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = 'button';
        this.variant = 'default';
        this.size = 'md';
        this.disabled = false;
    }
    render() {
        return (h("button", { key: 'fac8d9c354621983b6b1418eef4389e6e7f1e43f', type: this.type, class: `btn ${this.variant} ${this.size}`, disabled: this.disabled }, h("slot", { key: '45bc89b27c994ca0473082ae00355afda03170ba' })));
    }
};
UiButton.style = uiButtonCss;

export { UiButton as ui_button };
//# sourceMappingURL=ui-button.entry.js.map

//# sourceMappingURL=ui-button.entry.js.map