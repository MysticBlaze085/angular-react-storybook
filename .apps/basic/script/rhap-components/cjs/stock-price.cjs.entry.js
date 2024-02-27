'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e53bb1a7.js');

const AV_API_KEY = 'QKAB4FFTVDRXG1P4';

const stockPriceCss = ":host{display:block;border:2px solid purple;margin:2rem;padding:1rem;width:20rem;max-width:100%}form input{font:inherit;color:purple;padding:.15rem .25rem;display:block;margin-bottom:.5rem}form input:focus,form button:focus{outline:none}form button{font:inherit;padding:.25rem .5rem;border:1px solid purple;background:purple;color:white;cursor:pointer}form button:hover,form button:active{background:rgb(189, 3, 189);border-color:rgb(189, 3, 189)}form button:disabled{background:#ccc;border-color:#ccc;color:white;cursor:not-allowed}";
const StockPriceStyle0 = stockPriceCss;

const StockPrice = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        let dataContent = index.h("p", { key: '58fbe7a7d5e8c0d53899de6e15e844125110fb89' }, "Please enter a symbol");
        if (this.error) {
            dataContent = index.h("p", { key: '40b6b8dcbf2c65efd7891d6f4481de8d8d32f839' }, this.error);
        }
        if (this.fetchedPrice) {
            dataContent = index.h("p", { key: '5279e9f16be793df237d4de2ab6e4f7fdc7950d1' }, "Price: $", this.fetchedPrice);
        }
        return ([
            index.h("form", { key: 'd21961f714a538b2d00d2fac5fbe1695dd8f9d3c', onSubmit: this.onFetchStockPrice.bind(this) }, index.h("input", { key: '899107f1045f06125fe9286664ceec23484dc955', id: "stock-symbol", ref: (el) => this.stockInput = el, value: this.stockUserInput, onInput: this.onUserInput.bind(this) }), index.h("button", { key: '8733e5a943a82a87908dcb6f9ade318a02e23884', type: "submit", disabled: !this.stockInputValid }, "Fetch")),
            index.h("div", { key: 'a8f02356f6fa389a81db31f53f512c0b706cd484' }, dataContent)
        ]);
    }
    static get watchers() { return {
        "stockSymbol": ["stockSymbolChanged"]
    }; }
};
StockPrice.style = StockPriceStyle0;

exports.stock_price = StockPrice;

//# sourceMappingURL=stock-price.cjs.entry.js.map