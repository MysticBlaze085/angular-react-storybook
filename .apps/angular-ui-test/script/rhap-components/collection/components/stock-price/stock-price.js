import { h } from "@stencil/core";
import { AV_API_KEY } from "../../global/global";
export class StockPrice {
    constructor() {
        this.fetchedPrice = undefined;
        this.stockUserInput = undefined;
        this.stockInputValid = false;
        this.error = undefined;
        this.stockSymbol = undefined;
    }
    stockSymbolChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.stockUserInput = newValue;
            this.fetchStockPrice(newValue);
        }
    }
    onUserInput(event) {
        this.stockUserInput = event.target.value;
        if (this.stockUserInput.trim() !== '')
            this.stockInputValid = true;
        else
            this.stockInputValid = false;
    }
    onFetchStockPrice(event) {
        event.preventDefault();
        // const stockSymbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
        // const stockSymbol = this.stockInput.value;
        this.stockSymbol = this.stockInput.value;
        // this.fetchStockPrice(stockSymbol);
    }
    componentWillLoad() {
        console.log('commponentWillLoad');
        console.log(this.stockSymbol);
        // this.fetchedPrice = 0;
    }
    componentDidLoad() {
        console.log('componentDidLoad');
        if (this.stockSymbol) {
            // this.initialStockSymbole = this.stockSymbol;
            this.stockUserInput = this.stockSymbol;
            this.stockInputValid = true;
            this.fetchStockPrice(this.stockSymbol);
        }
    }
    componentWillUpdate() {
        console.log('compoenntWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
        // if (this.stockSymbol !== this.initialStockSymbole) {
        //   this.initialStockSymbole = this.stockSymbol;
        //   this.fetchStockPrice(this.stockSymbol);
        // }
    }
    disconnectedCallback() {
        console.log('disconnectedCallback');
    }
    fetchStockPrice(stockSymbol) {
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`)
            .then((res) => {
            if (res.status !== 200) {
                throw new Error('Invalid!');
            }
            return res.json();
        })
            .then((parsedRes) => {
            if (!parsedRes['Global Quote']['05. price']) {
                throw new Error('Invalid symbol!');
            }
            this.error = null;
            this.fetchedPrice = +parsedRes['Global Quote']['05. price'];
        })
            .catch((e) => this.error = e.message);
    }
    render() {
        let dataContent = h("p", { key: '58fbe7a7d5e8c0d53899de6e15e844125110fb89' }, "Please enter a symbol");
        if (this.error) {
            dataContent = h("p", { key: '40b6b8dcbf2c65efd7891d6f4481de8d8d32f839' }, this.error);
        }
        if (this.fetchedPrice) {
            dataContent = h("p", { key: '5279e9f16be793df237d4de2ab6e4f7fdc7950d1' }, "Price: $", this.fetchedPrice);
        }
        return ([
            h("form", { key: 'd21961f714a538b2d00d2fac5fbe1695dd8f9d3c', onSubmit: this.onFetchStockPrice.bind(this) }, h("input", { key: '899107f1045f06125fe9286664ceec23484dc955', id: "stock-symbol", ref: (el) => this.stockInput = el, value: this.stockUserInput, onInput: this.onUserInput.bind(this) }), h("button", { key: '8733e5a943a82a87908dcb6f9ade318a02e23884', type: "submit", disabled: !this.stockInputValid }, "Fetch")),
            h("div", { key: 'a8f02356f6fa389a81db31f53f512c0b706cd484' }, dataContent)
        ]);
    }
    static get is() { return "stock-price"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["stock-price.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["stock-price.css"]
        };
    }
    static get properties() {
        return {
            "stockSymbol": {
                "type": "string",
                "mutable": true,
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
                "attribute": "stock-symbol",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "fetchedPrice": {},
            "stockUserInput": {},
            "stockInputValid": {},
            "error": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "stockSymbol",
                "methodName": "stockSymbolChanged"
            }];
    }
}
//# sourceMappingURL=stock-price.js.map
