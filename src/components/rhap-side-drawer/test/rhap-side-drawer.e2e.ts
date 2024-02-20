import { newE2EPage } from '@stencil/core/testing';

describe('rhap-side-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rhap-side-drawer></rhap-side-drawer>');

    const element = await page.find('rhap-side-drawer');
    expect(element).toHaveClass('hydrated');
  });
});
