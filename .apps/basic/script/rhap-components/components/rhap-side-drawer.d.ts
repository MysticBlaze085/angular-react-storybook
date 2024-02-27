import type { Components, JSX } from "../types/components";

interface RhapSideDrawer extends Components.RhapSideDrawer, HTMLElement {}
export const RhapSideDrawer: {
    prototype: RhapSideDrawer;
    new (): RhapSideDrawer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
