import { newE2EPage } from '@stencil/core/testing';

describe('hozza-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hozza-ambulance-wl-app></hozza-ambulance-wl-app>');

    const element = await page.find('hozza-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
