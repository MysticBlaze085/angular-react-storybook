import { newSpecPage } from "@stencil/core/testing";
import { RhapSideDrawer } from "../rhap-side-drawer";
describe('rhap-side-drawer', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RhapSideDrawer],
            html: `<rhap-side-drawer></rhap-side-drawer>`,
        });
        expect(page.root).toEqualHtml(`
      <rhap-side-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rhap-side-drawer>
    `);
    });
});
//# sourceMappingURL=rhap-side-drawer.spec.js.map
