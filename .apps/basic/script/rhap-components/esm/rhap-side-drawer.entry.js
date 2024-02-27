import { r as registerInstance, h } from './index-29cee708.js';

const rhapSideDrawerCss = ":host{display:block}aside{position:fixed;top:0;left:-100%;width:20rem;max-width:80%;height:100vh;background:#e9e9e9;box-shadow:0 2px 8px rgba(0, 0, 0, 0.26);transition:left 0.3s ease-out;z-index:100}:host([opened]) aside{left:0}header{padding:1rem;background-color:black;position:relative}header h1{font-size:1.5rem;color:white}header button{position:absolute;top:0;right:0;padding:1rem;color:white;background:transparent;font-size:1.5rem;border:none}header button:focus{outline:none}#tabs{display:flex;justify-content:center;width:100%;margin:1rem 0}#tabs button{width:30%;background:white;color:black;text-align:center;border:1px solid black;font:inherit;padding:0.15rem 0}#tabs button.active,#tabs button:hover,#tabs button:active{background:black;color:white}#tabs button:focus{outline:none}#contact-information{padding:0 1rem}.backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0, 0, 0, 0.75);z-index:10;opacity:0;pointer-events:none;transition:opacity 0.3s ease-out}:host([opened]) .backdrop{opacity:1;pointer-events:all}";
const RhapSideDrawerStyle0 = rhapSideDrawerCss;

const RhapSideDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.showContactInfo = false;
        this.htitle = 'Default Title';
        this.opened = undefined;
    }
    onCloseDrawer() {
        this.opened = false;
    }
    onContentChange(content) {
        this.showContactInfo = content === 'contact';
    }
    async open() {
        return new Promise((resolve) => {
            this.opened = true;
            resolve();
        });
    }
    render() {
        let mainContent = h("slot", { key: '4c1ab77b907f4c82ee66400e71edfd1ccd8fd1c1' });
        if (this.showContactInfo) {
            mainContent = (h("div", { key: 'bcebf44fbb31bc79d3f8a5d8ef1ea72bdc780115', id: "contact-information" }, h("h2", { key: '5939731278538eab9805890b87dc0452dd9085c9' }, "Contact Information"), h("p", { key: '7b5990a8e99535b584c9aa444f0299d4e95005b4' }, "You can reach us via phone or email."), h("ul", { key: '4cf5b238a5799f41b4a1c03468881d8f79290002' }, h("li", { key: 'f8104654d008cb60f1b27f2da0038d42aeec8efc' }, "Phone: 5555555555"), h("li", { key: '1edd6ed176b3ae505b2afe17b85ef5b364d75ee5' }, "E-Mail: ", h("a", { key: '29963a80dbb6578c0ad69dfff87cf4c58746911b', href: "mailto:something@exmple.com" }, "something@exmple.com")))));
        }
        return [
            h("div", { key: '33555d951e34c85ce0f237e126094c5373aa9822', class: "backdrop", onClick: this.onCloseDrawer.bind(this) }),
            h("aside", { key: '3432affe36204a70abeba8b8a1eb79fb04fa8728' }, h("header", { key: '38c85c80d5d55db75ca5c63fcc439d11f60f0fdd' }, h("h1", { key: 'f965e96e11b48b38bd553f180f8a0e3df47b09a4' }, this.htitle), h("button", { key: 'b0a6f719e6ba90e664045d46891ebf8d65efe609', onClick: this.onCloseDrawer.bind(this) }, "X")), h("section", { key: 'c7d46e21d6a826e2f6aa152aa5d8ca37c405021d', id: "tabs" }, h("button", { key: 'd885afef8782b1ba7be3d56d964b3f07a9f9b4bd', class: !this.showContactInfo ? 'active' : '', onClick: this.onContentChange.bind(this, 'nav') }, "Navigation"), h("button", { key: '35c97fecf0bd25176aad3f78508f0d1c46634827', class: this.showContactInfo ? 'active' : '', onClick: this.onContentChange.bind(this, 'contact') }, "Contact")), h("main", { key: '152e5dc5466328245af7850adb88491b11c8f5f9' }, mainContent))
        ];
    }
};
RhapSideDrawer.style = RhapSideDrawerStyle0;

export { RhapSideDrawer as rhap_side_drawer };

//# sourceMappingURL=rhap-side-drawer.entry.js.map