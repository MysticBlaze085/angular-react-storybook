import { newSpecPage } from '@stencil/core/testing';
import { TailwindComponent } from '../tailwind-component';

describe('tailwind-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TailwindComponent],
      html: `<tailwind-component></tailwind-component>`,
    });
    expect(page.root).toEqualHtml(`
      <tailwind-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tailwind-component>
    `);
  });
});
