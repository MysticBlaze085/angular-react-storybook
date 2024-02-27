import { h } from "@stencil/core";
export class TailwindComponent {
    render() {
        return (h("div", { key: 'bf7d92db5f4e9d19b27dc1151f3e4370735a863c', class: "bg-indigo-500 p-6 rounded-md flex justify-center" }, h("h1", { key: 'c4cc03953a895de1510ac85b3bf20747de36b74d', class: "text-white font-sans" }, "This is a Stencil component using Tailwind")));
    }
    static get is() { return "tailwind-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["tailwind-component.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tailwind-component.css"]
        };
    }
}
//# sourceMappingURL=tailwind-component.js.map
