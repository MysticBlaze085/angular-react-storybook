import { b as bootstrapLazy } from './index-29cee708.js';
export { s as setNonce } from './index-29cee708.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["rhap-side-drawer",[[1,"rhap-side-drawer",{"htitle":[513],"opened":[1540],"showContactInfo":[32],"open":[64]}]]],["stock-price",[[1,"stock-price",{"stockSymbol":[1537,"stock-symbol"],"fetchedPrice":[32],"stockUserInput":[32],"stockInputValid":[32],"error":[32]},null,{"stockSymbol":["stockSymbolChanged"]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map