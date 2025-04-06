/// <reference types="vite/client" />

// Importa o tipo de componentes do seu pacote Stencil
import type { Components as UiComponents } from '@support-library/ui';

// Declaramos um tipo que une as props do Stencil com as do React
type UiButtonProps = UiComponents.UiButton & React.HTMLAttributes<HTMLElement>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ui-button': UiButtonProps;
      // Aqui você adiciona mais componentes, tipo:
      // 'ui-card': UiComponents.UiCard & React.HTMLAttributes<HTMLElement>;
    }
  }
}

export {};
