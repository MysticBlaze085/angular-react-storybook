'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e53bb1a7.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["rhap-side-drawer.cjs",[[1,"rhap-side-drawer",{"htitle":[513],"opened":[1540],"showContactInfo":[32],"open":[64]}]]],["stock-price.cjs",[[1,"stock-price",{"stockSymbol":[1537,"stock-symbol"],"fetchedPrice":[32],"stockUserInput":[32],"stockInputValid":[32],"error":[32]},null,{"stockSymbol":["stockSymbolChanged"]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map