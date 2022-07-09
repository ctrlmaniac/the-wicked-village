(()=>{"use strict";var t={800:(t,e,n)=>{n.d(e,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([t.id,'html{font-family:"Fira Mono",monospace;background-color:#000;color:#fff}kbd{background-color:#8b8b8b;color:#000;padding:0 2px}',""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var p=[].concat(t[u]);o&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],u=o.base?s[0]+o.base:s[0],p=a[u]||0,l="".concat(u," ").concat(p);a[u]=p+1;var f=n(l),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(h);else{var d=r(h,o);o.byIndex=c,e.splice(c,0,{identifier:l,updater:d,references:1})}i.push(l)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=o(t,r),u=0;u<a.length;u++){var p=n(a[u]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=s}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{function t(t){for(var e=document.getElementById("main"),n=0,o=t;n<o.length;n++){var r=o[n],a=document.createElement("p");a.innerText=r,e.append(a)}}var e=function(){function e(t){this.game=t}return e.prototype.blueprint=function(){},e.prototype.welcome=function(){},e.prototype.front=function(){t(["There's nothing here, try again!"]),this.move()},e.prototype.right=function(){t(["There's nothing here, try again!"]),this.move()},e.prototype.back=function(){t(["There's nothing here, try again!"]),this.move()},e.prototype.left=function(){t(["There's nothing here, try again!"]),this.move()},e.prototype.move=function(){var t=this;document.onkeydown=function(e){switch(e.key){case"F":case"f":t.front();break;case"R":case"r":t.right();break;case"B":case"b":t.back();break;case"L":case"l":t.left();break;case"H":case"h":t.blueprint()}}},e}();const o=e;var r,a=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});const i=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return a(n,e),n.prototype.blueprint=function(){t(["In front of you there's a gate."]),this.move()},n.prototype.welcome=function(){t(["You're just outside of the village."]),this.blueprint()},n.prototype.front=function(){t(["You enter the village."]),this.game.scenes.road1.welcome()},n.prototype.right=function(){t(["You can't go right, try again!"]),this.move()},n.prototype.back=function(){t(["After all you have done to come here, You can't just go back.","Take courage and go into the village!"]),this.move()},n.prototype.left=function(){t(["You can't go left, try again!"]),this.move()},n}(o);var c=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const s=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return c(n,e),n.prototype.blueprint=function(){t(["In front on you the road continues.","On your right there's a house","On your back there's the village main gate.","On your left there's another house."]),this.move()},n.prototype.welcome=function(){t(["You're on the main road."]),this.blueprint()},n.prototype.back=function(){this.game.scenes.intro.welcome()},n}(o),u=function(){function t(){this.scenes={intro:new i(this),road1:new s(this)}}return t.prototype.play=function(){this.scenes.intro.welcome()},t}();var p=n(379),l=n.n(p),f=n(795),h=n.n(f),d=n(569),y=n.n(d),v=n(565),m=n.n(v),g=n(216),b=n.n(g),w=n(589),k=n.n(w),x=n(800),_={};_.styleTagTransform=k(),_.setAttributes=m(),_.insert=y().bind(null,"head"),_.domAPI=h(),_.insertStyleElement=b(),l()(x.Z,_),x.Z&&x.Z.locals&&x.Z.locals;var O=document.getElementById("form"),T=document.getElementById("input");O.addEventListener("submit",(function(t){t.preventDefault();var e=T.value.toLowerCase(),n=new KeyboardEvent("keydown",{key:e});document.dispatchEvent(n)})),(new u).play()})()})();