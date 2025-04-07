import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.css',
  shadow: true,
})
export class UiButton {
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  @Prop() variant:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger' = 'default';

  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  @Prop() disabled: boolean = false;

  render() {
    const classes = `${this.variant} ${this.size}`;

    return (
      <button
        type={this.type}
        class={classes}
        disabled={this.disabled}
        aria-disabled={this.disabled ? 'true' : null}
      >
        <slot />
      </button>
    );
  }
}
