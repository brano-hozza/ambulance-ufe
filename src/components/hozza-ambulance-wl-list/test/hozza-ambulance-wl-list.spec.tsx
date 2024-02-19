import { newSpecPage } from '@stencil/core/testing';
import { HozzaAmbulanceWlList } from '../hozza-ambulance-wl-list';

describe('hozza-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HozzaAmbulanceWlList],
      html: `<hozza-ambulance-wl-list></hozza-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as HozzaAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
