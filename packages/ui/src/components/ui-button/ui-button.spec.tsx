import { newSpecPage } from '@stencil/core/testing';
import { UiButton } from './ui-button';

describe('ui-button', () => {
  it('deve ter os props variant e size conforme o esperado', async () => {
    const page = await newSpecPage({
      components: [UiButton],
      html: `<ui-button variant="primary" size="md">Clique aqui</ui-button>`,
    });

    const button = page.root!.shadowRoot!.querySelector('button')!;
    expect(button.className).toBe('primary md');
  });


  it('o botao deve ter o type submit e funcionar sem mensagens ou quebras', async () => {
    const page = await newSpecPage({
      components: [UiButton],
      html: `<ui-button variant="primary" size="md" type="submit">Clique aqui</ui-button>`,
    });

    const button = page.root!.shadowRoot!.querySelector('button')!;
    expect(button.getAttribute('type')).toBe('submit');
  });
});
 