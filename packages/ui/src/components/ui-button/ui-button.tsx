import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.css',
  shadow: true,
})
export class UiButton {
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';
  @Prop() variant: 'default' | 'primary' | 'secondary' = 'default';
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';
  @Prop() disabled: boolean = false;

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
