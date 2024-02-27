import { newE2EPage } from '@stencil/core/testing';

describe('tailwind-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tailwind-component></tailwind-component>');

    const element = await page.find('tailwind-component');
    expect(element).toHaveClass('hydrated');
  });
});
