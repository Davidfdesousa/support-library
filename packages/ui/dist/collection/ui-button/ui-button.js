import { h } from "@stencil/core";
export class UiButton {
    constructor() {
        this.type = 'button';
        this.variant = 'default';
        this.size = 'md';
        this.disabled = false;
    }
    render() {
        const classes = `${this.variant} ${this.size}`;
        return (h("button", { key: 'd191940aa961a911a3e5a20357d10c936e1660a0', type: this.type, class: classes, disabled: this.disabled, "aria-disabled": this.disabled ? 'true' : null }, h("slot", { key: '37df10059c9c4a11ba4caf2aa93d112303a00028' })));
    }
    static get is() { return "ui-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ui-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ui-button.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'button' | 'submit' | 'reset'",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'button'"
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "| 'default'\n    | 'primary'\n    | 'secondary'\n    | 'success'\n    | 'warning'\n    | 'danger'",
                    "resolved": "\"danger\" | \"default\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'default'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'sm' | 'md' | 'lg'",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'md'"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=ui-button.js.map
