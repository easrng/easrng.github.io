// ==UserScript==
// @name        Use Google Maps on DuckDuckGo
// @namespace   https://easrng.net
// @match       https://*.duckduckgo.com/*
// @grant       none
// @version     1.0
// @author      https://easrng.net
// @inject-into page
// @run-at      document-end
// @downloadURL https://easrng.github.io/ddg-gmaps.user.js
// ==/UserScript==
const realSet = DDG.Utils.History.prototype.set;
DDG.Utils.History.prototype.set = function (...a) {
  if(a[0] === "iaxm" && a[1] === "places") {
    location.href = "https://www.google.com/maps?q="+encodeURIComponent(this.curState.q)
  } else {
    return realSet.call(this, ...a)
  }
}
