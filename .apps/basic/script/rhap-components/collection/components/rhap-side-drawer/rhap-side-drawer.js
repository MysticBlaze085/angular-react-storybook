import { h } from "@stencil/core";
export class RhapSideDrawer {
    constructor() {
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
    static get is() { return "rhap-side-drawer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["rhap-side-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["rhap-side-drawer.css"]
        };
    }
    static get properties() {
        return {
            "htitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "htitle",
                "reflect": true,
                "defaultValue": "'Default Title'"
            },
            "opened": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "opened",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "showContactInfo": {}
        };
    }
    static get methods() {
        return {
            "open": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {},
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
}
//# sourceMappingURL=rhap-side-drawer.js.map
