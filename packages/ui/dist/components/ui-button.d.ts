import type { Components, JSX } from "../types/components";

interface UiButton extends Components.UiButton, HTMLElement {}
export const UiButton: {
    prototype: UiButton;
    new (): UiButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
