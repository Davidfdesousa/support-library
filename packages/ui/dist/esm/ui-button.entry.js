import { r as registerInstance, h } from './index-CW8e-4Zv.js';

const uiButtonCss = ":host{display:inline-block;--button-bg:var(--color-primary-default);--button-fg:var(--color-white);--button-radius:var(--radius-md);--button-padding-sm:var(--spacing-squish-sm);--button-padding-md:var(--spacing-squish-md);--button-padding-lg:var(--spacing-squish-lg);--button-font-sm:var(--font-size-sm);--button-font-md:var(--font-size-md);--button-font-lg:var(--font-size-lg);--button-font-weight:var(--family-weight-medium);--button-line-height:var(--family-height-normal);--button-font-family:var(--family-highlight)}button{all:unset;display:inline-flex;align-items:center;justify-content:center;gap:var(--spacing-inline-xs);background:var(--button-bg);color:var(--button-fg);border-radius:var(--button-radius);padding:var(--button-padding-md);font-size:var(--button-font-md);font-weight:var(--button-font-weight);line-height:var(--button-line-height);font-family:var(--button-font-family);transition:background 0.2s ease;cursor:pointer}button.default{--button-bg:var(--color-gray-200);--button-fg:var(--color-button-default-fg, var(--color-gray-900))}button.primary{--button-bg:var(--color-primary-default);--button-fg:var(--color-button-primary-fg, var(--color-white))}button.secondary{--button-bg:var(--color-secondary-default);--button-fg:var(--color-button-secondary-fg, var(--color-white))}button.success{--button-bg:var(--color-success-default);--button-fg:var(--color-button-success-fg, var(--color-white))}button.warning{--button-bg:var(--color-warning-default);--button-fg:var(--color-button-warning-fg, var(--color-gray-900))}button.danger{--button-bg:var(--color-danger-default);--button-fg:var(--color-button-danger-fg, var(--color-white))}button.sm{font-size:var(--button-font-sm);padding:var(--button-padding-sm)}button.md{font-size:var(--button-font-md);padding:var(--button-padding-md)}button.lg{font-size:var(--button-font-lg);padding:var(--button-padding-lg)}.slot-start,.slot-end{display:inline-flex;align-items:center}.slot-start{margin-inline-end:var(--spacing-inline-xs)}.slot-end{margin-inline-start:var(--spacing-inline-xs)}button:disabled{opacity:0.6;cursor:not-allowed}";

const UiButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = 'button';
        this.variant = 'default';
        this.size = 'md';
        this.disabled = false;
    }
    render() {
        const classes = `${this.variant} ${this.size}`;
        return (h("button", { key: 'd191940aa961a911a3e5a20357d10c936e1660a0', type: this.type, class: classes, disabled: this.disabled, "aria-disabled": this.disabled ? 'true' : null }, h("slot", { key: '37df10059c9c4a11ba4caf2aa93d112303a00028' })));
    }
};
UiButton.style = uiButtonCss;

export { UiButton as ui_button };
//# sourceMappingURL=ui-button.entry.js.map

//# sourceMappingURL=ui-button.entry.js.map