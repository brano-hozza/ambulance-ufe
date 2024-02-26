import { newE2EPage } from '@stencil/core/testing';

describe('hozza-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hozza-ambulance-wl-editor></hozza-ambulance-wl-editor>');

    const element = await page.find('hozza-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
