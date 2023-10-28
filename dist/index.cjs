function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=/*#__PURE__*/e(require("node-fetch")),n=function(){return t.default("https://www.dexi.tools/binance/prices").then(function(e){return e.json()}).then(function(e){return e})};n(),exports.getBinanceDefault=n;
//# sourceMappingURL=index.cjs.map
