'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e53bb1a7.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.12.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('rhap-design-system.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["rhap-side-drawer.cjs",[[1,"rhap-side-drawer",{"htitle":[513],"opened":[1540],"showContactInfo":[32],"open":[64]}]]],["stock-price.cjs",[[1,"stock-price",{"stockSymbol":[1537,"stock-symbol"],"fetchedPrice":[32],"stockUserInput":[32],"stockInputValid":[32],"error":[32]},null,{"stockSymbol":["stockSymbolChanged"]}]]],["tailwind-component.cjs",[[1,"tailwind-component"]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=rhap-design-system.cjs.js.map