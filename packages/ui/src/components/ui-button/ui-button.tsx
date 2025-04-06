import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.css',
  shadow: true,
})
export class UiButton {
  @Prop() type: 'button' | 'submit' | 'reset';
  @Prop() variant: 'default' | 'primary' | 'secondary';
  @Prop() size: 'sm' | 'md' | 'lg';
  @Prop() disabled: boolean;

  constructor() {
    this.type = 'button';
    this.variant = 'default';
    this.size = 'md';
    this.disabled = false;
  }

  render() {
    return (
      <button
        type={this.type}
        class={`btn ${this.variant} ${this.size}`}
        disabled={this.disabled}
      >
        <slot />
      </button>
    );
  }
}
