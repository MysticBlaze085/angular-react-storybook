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
    open() {
        this.opened = true;
    }
    render() {
        let mainContent = h("slot", { key: '8de50772616147ed5021d7e820f3f96cea923145' });
        if (this.showContactInfo) {
            mainContent = (h("div", { key: '23e963926fd6773d1a19e17eb52031250b55fa44', id: "contact-information" }, h("h2", { key: '7f1673d47c3735ae34b845a964869720f1ba71a3' }, "Contact Information"), h("p", { key: 'b3365ce45c6414942a9efa53c3dae4ade6668c1a' }, "You can reach us via phone or email."), h("ul", { key: '53306ab76a80d394246cf417d813c01eedf2ac53' }, h("li", { key: '00617deabb6cf98071fa2926e0ab464d2b328297' }, "Phone: 5555555555"), h("li", { key: '40b793ddf019553f187ba0159cc31c03fff8af3e' }, "E-Mail: ", h("a", { key: '38ebb9827739d4cc07d9823b59cdce3cd72e316c', href: "mailto:something@exmple.com" }, "something@exmple.com")))));
        }
        return [
            h("div", { key: 'e46906ff016d2b7ac3cf137c8195d86865800313', class: "backdrop", onClick: this.onCloseDrawer.bind(this) }),
            h("aside", { key: '64cca36f6976bd8a1ec33184816c4ea6c3c2e21e' }, h("header", { key: 'bcf8ed5ba8b2161693c768615f91736eeb71759b' }, h("h1", { key: 'ebb9a86e4871748e5b10b0e3fc5cddd037eddb24' }, this.htitle), h("button", { key: 'ebf8692edb0a7a7cc83d7e89aeb37c1962bda724', onClick: this.onCloseDrawer.bind(this) }, "X")), h("section", { key: '91af0bbca7c83405a8b265ce3a0f8b1a9fded613', id: "tabs" }, h("button", { key: '4138ceb4497f9ba40356e63e6142482671c901d7', class: !this.showContactInfo ? 'active' : '', onClick: this.onContentChange.bind(this, 'nav') }, "Navigation"), h("button", { key: '9fa4db64f18a0fc9d062b83631d664fc7512ee50', class: this.showContactInfo ? 'active' : '', onClick: this.onContentChange.bind(this, 'contact') }, "Contact")), h("main", { key: 'c6789d93384f920e4746e53a5c6053d67ecf352b' }, mainContent))
        ];
    }
};
RhapSideDrawer.style = RhapSideDrawerStyle0;

export { RhapSideDrawer as rhap_side_drawer };

//# sourceMappingURL=rhap-side-drawer.entry.js.map