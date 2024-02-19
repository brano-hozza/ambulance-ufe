import { newE2EPage } from '@stencil/core/testing';

describe('hozza-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hozza-ambulance-wl-list></hozza-ambulance-wl-list>');

    const element = await page.find('hozza-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
