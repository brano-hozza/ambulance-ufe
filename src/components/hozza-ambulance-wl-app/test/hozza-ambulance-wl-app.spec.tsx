import { newSpecPage } from '@stencil/core/testing';
import { HozzaAmbulanceWlApp } from '../hozza-ambulance-wl-app';

describe('hozza-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [HozzaAmbulanceWlApp],
      html: `<hozza-ambulance-wl-app base-path="/"></hozza-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("hozza-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [HozzaAmbulanceWlApp],
      html: `<hozza-ambulance-wl-app base-path="/ambulance-wl/"></hozza-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("hozza-ambulance-wl-list");
  });
});
