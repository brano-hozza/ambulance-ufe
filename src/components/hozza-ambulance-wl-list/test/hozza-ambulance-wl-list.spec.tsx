import { newSpecPage } from '@stencil/core/testing';
import { HozzaAmbulanceWlList } from '../hozza-ambulance-wl-list';

describe('hozza-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HozzaAmbulanceWlList],
      html: `<hozza-ambulance-wl-list></hozza-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <hozza-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hozza-ambulance-wl-list>
    `);
  });
});
