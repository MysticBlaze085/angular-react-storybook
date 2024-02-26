export default {
    title: 'Example/StockPrice',
    tags: ['autodocs'],
    argTypes: {
        stockSymbol: 'AAPL'
    },
};
const Template = (args) => `
    <stock-price stock-symbol="${args.stockSymbol}"></stock-price>
`;
export const StockPrice = Template.bind({});
StockPrice.args = {
    stockSymbol: 'AAPL'
};
//# sourceMappingURL=%20stock-price.stories.js.map
