import { r as registerInstance, h } from './index-29cee708.js';

function format(first, middle, last) {
    return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";
const MyComponentStyle0 = myComponentCss;

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.first = undefined;
        this.middle = undefined;
        this.last = undefined;
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", { key: '46812a42ed0d224cdb260860105f24e4bd9bd44f' }, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = MyComponentStyle0;

export { MyComponent as my_component };

//# sourceMappingURL=my-component.entry.js.map