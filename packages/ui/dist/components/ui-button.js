import { p as proxyCustomElement, H, h } from './index.js';

const uiButtonCss = ":root{--color-white:#ffffff;--color-black:#000000;--color-gray-25:#fcfcfd;--color-gray-50:#f9fafb;--color-gray-100:#f3f4f6;--color-gray-200:#e5e7eb;--color-gray-300:#d1d5db;--color-gray-400:#9ca3af;--color-gray-500:#6b7280;--color-gray-600:#4b5563;--color-gray-700:#374151;--color-gray-800:#1f2937;--color-gray-900:#111827;--color-primary-25:#f5f9ff;--color-primary-50:#eff6ff;--color-primary-100:#dbeafe;--color-primary-200:#bfdbfe;--color-primary-300:#93c5fd;--color-primary-400:#60a5fa;--color-primary-500:#3b82f6;--color-primary-600:#2563eb;--color-primary-700:#1d4ed8;--color-primary-800:#1e40af;--color-primary-900:#1e3a8a;--color-primary-subtle:#dbeafe;--color-primary-muted:#93c5fd;--color-primary-default:#3b82f6;--color-primary-strong:#2563eb;--color-primary-intense:#1d4ed8;--color-primary-hover:#60a5fa;--color-primary-pressed:#2563eb;--color-secondary-25:#fff4eb;--color-secondary-50:#ffebdd;--color-secondary-100:#ffd5bb;--color-secondary-200:#ffb88f;--color-secondary-300:#ff9355;--color-secondary-400:#ff7728;--color-secondary-500:#ff6200;--color-secondary-600:#d94f00;--color-secondary-700:#b03f00;--color-secondary-800:#8c3300;--color-secondary-900:#662500;--color-secondary-subtle:#ffd5bb;--color-secondary-muted:#ff9355;--color-secondary-default:#ff6200;--color-secondary-strong:#d94f00;--color-secondary-intense:#b03f00;--color-secondary-hover:#ff7728;--color-secondary-pressed:#d94f00;--color-success-50:#ecfdf5;--color-success-100:#d1fae5;--color-success-200:#a7f3d0;--color-success-300:#6ee7b7;--color-success-400:#34d399;--color-success-500:#10b981;--color-success-600:#059669;--color-success-700:#047857;--color-success-800:#065f46;--color-success-900:#064e3b;--color-success-subtle:#d1fae5;--color-success-muted:#6ee7b7;--color-success-default:#10b981;--color-success-strong:#059669;--color-success-intense:#047857;--color-warning-50:#fffbeb;--color-warning-100:#fef3c7;--color-warning-200:#fde68a;--color-warning-300:#fcd34d;--color-warning-400:#fbbf24;--color-warning-500:#f59e0b;--color-warning-600:#d97706;--color-warning-700:#b45309;--color-warning-800:#92400e;--color-warning-900:#78350f;--color-warning-subtle:#fef3c7;--color-warning-muted:#fcd34d;--color-warning-default:#f59e0b;--color-warning-strong:#d97706;--color-warning-intense:#b45309;--color-error-50:#fef2f2;--color-error-100:#fee2e2;--color-error-200:#fecaca;--color-error-300:#fca5a5;--color-error-400:#f87171;--color-error-500:#ef4444;--color-error-600:#dc2626;--color-error-700:#b91c1c;--color-error-800:#991b1b;--color-error-900:#7f1d1d;--color-info-50:#eff6ff;--color-info-100:#dbeafe;--color-info-200:#bfdbfe;--color-info-300:#93c5fd;--color-info-400:#60a5fa;--color-info-500:#3b82f6;--color-info-600:#2563eb;--color-info-700:#1d4ed8;--color-info-800:#1e40af;--color-info-900:#1e3a8a;--color-bg:#ffffff;--color-content:#111827;--color-border:#e5e7eb;--color-danger-subtle:#fee2e2;--color-danger-muted:#fca5a5;--color-danger-default:#ef4444;--color-danger-strong:#dc2626;--color-danger-intense:#b91c1c;--radius-none:0px;--radius-sm:4px;--radius-md:8px;--radius-lg:16px;--radius-full:500px;--spacing-stack-xs:4px;--spacing-stack-sm:8px;--spacing-stack-md:16px;--spacing-stack-lg:24px;--spacing-stack-xl:32px;--spacing-inset-xs:4px;--spacing-inset-sm:8px;--spacing-inset-md:16px;--spacing-inset-lg:24px;--spacing-inset-xl:32px;--spacing-inline-xs:4px;--spacing-inline-sm:8px;--spacing-inline-md:16px;--spacing-inline-lg:24px;--spacing-inline-xl:32px;--spacing-squish-sm:8px 12px;--spacing-squish-md:12px 16px;--spacing-squish-lg:16px 24px;--spacing-stretch-sm:12px 8px;--spacing-stretch-md:16px 12px;--spacing-stretch-lg:24px 16px;--font-family-highlight:'Inter', sans-serif;--font-family-base:'Fira Code', monospace;--font-size-xs:12px;--font-size-sm:14px;--font-size-md:16px;--font-size-lg:18px;--font-size-xl:24px;--font-size-2xl:30px;--font-weight-regular:400;--font-weight-medium:500;--font-weight-bold:700;--font-line-height-tight:110%;--font-line-height-normal:140%;--font-line-height-relaxed:160%}:host{display:inline-block;--button-bg:var(--color-bg-primary);--button-fg:var(--color-content-on-primary)}button{background:var(--button-bg);color:var(--button-fg);padding:var(--space-inset-md);border-radius:var(--radii-md);all:unset;cursor:pointer;font-weight:600;font-family:inherit;transition:background 0.2s ease}button.default{background:#e0e0e0;color:#000}button.primary{background:#005eff;color:#fff}button.secondary{background:red;color:#fff}button.sm{font-size:0.75rem;padding:0.25rem 0.5rem}button.md{font-size:1rem;padding:0.5rem 1rem}button.lg{font-size:1.25rem;padding:0.75rem 1.5rem}button:disabled{opacity:0.6;cursor:not-allowed}";

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
        return (h("button", { key: 'fac8d9c354621983b6b1418eef4389e6e7f1e43f', type: this.type, class: `btn ${this.variant} ${this.size}`, disabled: this.disabled }, h("slot", { key: '45bc89b27c994ca0473082ae00355afda03170ba' })));
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