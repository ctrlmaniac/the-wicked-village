(()=>{"use strict";var t={800:(t,e,o)=>{o.d(e,{Z:()=>s});var n=o(81),r=o.n(n),i=o(645),c=o.n(i)()(r());c.push([t.id,'html{font-family:"Fira Mono",monospace;background-color:#000;color:#fff}#main{margin-bottom:16px}kbd{background-color:#8b8b8b;color:#000;padding:0 2px}',""]);const s=c},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",n=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),n&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),n&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,n,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(n)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(c[u]=!0)}for(var a=0;a<t.length;a++){var p=[].concat(t[a]);n&&c[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),o&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=o):p[2]=o),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function o(t){for(var o=-1,n=0;n<e.length;n++)if(e[n].identifier===t){o=n;break}return o}function n(t,n){for(var i={},c=[],s=0;s<t.length;s++){var u=t[s],a=n.base?u[0]+n.base:u[0],p=i[a]||0,h="".concat(a," ").concat(p);i[a]=p+1;var l=o(h),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var y=r(f,n);n.byIndex=s,e.splice(s,0,{identifier:h,updater:y,references:1})}c.push(h)}return c}function r(t,e){var o=e.domAPI(e);return o.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;o.update(t=e)}else o.remove()}}t.exports=function(t,r){var i=n(t=t||[],r=r||{});return function(t){t=t||[];for(var c=0;c<i.length;c++){var s=o(i[c]);e[s].references--}for(var u=n(t,r),a=0;a<i.length;a++){var p=o(i[a]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=u}}},569:t=>{var e={};t.exports=function(t,o){var n=function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,o)=>{t.exports=function(t){var e=o.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(o){!function(t,e,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,r&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,o)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,o),i.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.nc=void 0,(()=>{function t(t){for(var e=document.getElementById("main"),o=0,n=t;o<n.length;o++){var r=n[o],i=document.createElement("p");i.innerText=r,e.append(i),window.scrollBy(0,100)}var c=document.createElement("br");c.style.marginBottom="16px",e.append(c)}var e,n=function(){function e(){this.items=[],this.maxHealth=20,this.health=this.maxHealth}return e.prototype.pickAnItem=function(e){this.items.push(e),t(["You've picked ".concat(e,"!")])},e.prototype.checkItems=function(){0==this.items.length?t(["There's nothing in your pockets."]):t(function(t,e,o){if(o||2===arguments.length)for(var n,r=0,i=e.length;r<i;r++)!n&&r in e||(n||(n=Array.prototype.slice.call(e,0,r)),n[r]=e[r]);return t.concat(n||Array.prototype.slice.call(e))}([],this.items,!0))},e.prototype.checkItem=function(t){return this.items.includes(t)},e}(),r=(e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},e(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)});const i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(n);var c=function(){function e(t){this.game=t}return e.prototype.blueprint=function(){},e.prototype.welcome=function(){},e.prototype.front=function(){t(["There's nothing here, try again!"]),this.move()},e.prototype.right=function(){t(["There's nothing here, try again!"]),this.move()},e.prototype.back=function(){t(["There's nothing here, try again!"]),this.move()},e.prototype.left=function(){t(["There's nothing here, try again!"]),this.move()},e.prototype.move=function(){var t=this;document.onkeydown=function(e){switch(e.key){case"F":case"f":t.front();break;case"R":case"r":t.right();break;case"B":case"b":t.back();break;case"L":case"l":t.left();break;case"H":case"h":t.blueprint();break;case"I":case"i":t.game.player.checkItems(),t.move()}}},e}();const s=c;var u=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const a=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return u(o,e),o.prototype.blueprint=function(){t(["- In front of you there's a gate."]),this.move()},o.prototype.welcome=function(){t(["You're just outside of the village."]),this.blueprint()},o.prototype.front=function(){t(["You enter the village."]),this.game.scenes.Road1A.welcome()},o.prototype.right=function(){t(["You can't go right, try again!"]),this.move()},o.prototype.back=function(){t(["After all you have done to come here, You can't just go back.","Take courage and go into the village!"]),this.move()},o.prototype.left=function(){t(["You can't go left, try again!"]),this.move()},o}(s);var p=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const h=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return p(o,e),o.prototype.blueprint=function(){t(["- In front on you the road continues.","- On your right there's a house","- On your back there's the village main gate.","- On your left there's another house."]),this.move()},o.prototype.welcome=function(){t(["You're on the main road."]),this.blueprint()},o.prototype.right=function(){this.game.scenes.House1.welcome()},o.prototype.back=function(){this.game.scenes.MainGate.welcome()},o.prototype.left=function(){this.game.scenes.House2.welcome()},o}(s);var l=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const f=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t.doorLocked=!0,t}return l(o,e),o.prototype.blueprint=function(){t(["- In front of you there's a closed door.","- On your right there's a window","- On your back there's the main road.","- On your left there's a bench."]),this.move()},o.prototype.welcome=function(){t(["You're in front of a house at the first street number.","The house is old and in bad conditions.","You need to find your daugther, maybe the owner knows something..."]),this.blueprint()},o.prototype.front=function(){var e=this;t(["The door is closed.","Do you want to knock on the door?"]),document.onkeydown=function(o){switch(o.key){case"Y":case"y":e.knockOnDoor();break;default:t(["You go back..."]),e.welcome()}}},o.prototype.knockOnDoor=function(){var e=this;t(["You knock on the door..."]),setTimeout((function(){t(["It seems that noone is in the house.","Do you want to try to open the door?"]),document.onkeydown=function(o){switch(o.key){case"Y":case"y":e.openTheDoor();break;default:t(["You go back..."]),setTimeout((function(){e.welcome()}),2e3)}}}),4e3)},o.prototype.openTheDoor=function(){var e=this;this.doorLocked&&(t(["You try to open the door but it is closed from the other side.","You go back..."]),setTimeout((function(){e.welcome()}),4e3))},o.prototype.right=function(){var e=this;t(["There's a window.","You try to see if there's someone inside, but it seems that noone is there.","You go back..."]),setTimeout((function(){e.welcome()}),2e3)},o.prototype.back=function(){this.game.scenes.Road1A.welcome()},o.prototype.left=function(){var e=this;t(["There's an old bench here but nothing useful.","You go back..."]),setTimeout((function(){e.welcome()}),2e3)},o}(s);var y=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const d=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t.doorLocked=!1,t}return y(o,e),o.prototype.blueprint=function(){t(["- In front of you there's a closed door.","- On your right there's a window","- On your back there's the main road.","- On your left there's another window."]),this.move()},o.prototype.welcome=function(){t(["The house it at the second street number.","It's is very old.","The garden is overgrown and deserted.","It seems that noone has lived in this house for a long time."]),this.blueprint()},o.prototype.front=function(){var e=this;t(["The door is closed.","Do you want to knock on the door?"]),document.onkeydown=function(o){switch(o.key){case"Y":case"y":e.knockOnDoor();break;default:t(["You go back..."]),e.move()}}},o.prototype.knockOnDoor=function(){var e=this;t(["You knock on the door..."]),setTimeout((function(){t(["It seems that noone is in the house.","Do you want to try to open the door?"]),document.onkeydown=function(o){switch(o.key){case"Y":case"y":e.openTheDoor();break;default:t(["You go back..."]),e.move()}}}),4e3)},o.prototype.openTheDoor=function(){var e=this;this.doorLocked?(t(["You try to open the door but it is closed from the other side.","You go back..."]),setTimeout((function(){e.welcome()}),4e3)):(t(["The door is opened and you enter the house..."]),setTimeout((function(){e.game.scenes.House2Hall.welcome()}),2e3))},o.prototype.right=function(){t(["The window is broken. You try to see through.","The house seems abandonded, maybe there's just nothing useful inside.","You go back..."]),this.move()},o.prototype.back=function(){this.game.scenes.Road1A.welcome()},o.prototype.left=function(){t(["The window is really dirty and dusty.","You try to see through but you can't see anything.","You go back..."]),this.move()},o}(s);var m;!function(t){t.House2Passepartout="ST2. PASSEPARTOUT"}(m||(m={}));var v=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const b=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return v(o,e),o.prototype.blueprint=function(){t(["- In front of you there's the hallway.","- On your right there's a closed door.","- On your back there's the main door to the road.","- On your left there's the living room."]),this.move()},o.prototype.welcome=function(){t(["The house is neglected.","It seems that noone has lived in this house for a long time."]),this.blueprint()},o.prototype.front=function(){},o.prototype.right=function(){var e=this;t(["There's a closed door. Do you want to try open it?"]),document.onkeydown=function(o){switch(o.key){case"Y":case"y":e.openTheDoor();break;default:t(["You go back..."]),setTimeout((function(){e.move()}),2e3)}}},o.prototype.openTheDoor=function(){this.game.player.checkItem(m.House2Passepartout)?t(["You unlock the door and enter the room"]):(t(["The door is locked. You need a key to enter the room.","You go back..."]),this.move())},o.prototype.back=function(){t(["You exit the house."]),this.game.scenes.House2.welcome()},o.prototype.left=function(){this.game.scenes.House2Livingroom.welcome()},o}(s);var g=function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},t(e,o)};return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const w=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return g(o,e),o.prototype.blueprint=function(){t(["- In front of you there's a couch.","- On your left there are some paintings","- On your back there's the door to the hall","- On your left there's a shelf"]),this.move()},o.prototype.welcome=function(){t(["The livingroom is a total mess.","You try to walk but the furniture obstructs the way."]),this.blueprint()},o.prototype.front=function(){var e=this;t(["The couch is dusty and full of papers, sheets and all sorts of stuff."]),this.game.player.checkItem(m.House2Passepartout)||(t(["You see there's something that shimmer under the light of the sun.","There's a key!"]),this.game.player.pickAnItem(m.House2Passepartout)),t(["You go back..."]),setTimeout((function(){e.blueprint()}),2e3)},o.prototype.back=function(){this.game.scenes.House2Hall.blueprint()},o}(s);const k=function(){function t(t){this.scenes={MainGate:new a(this),Road1A:new h(this),House1:new f(this),House2:new d(this),House2Hall:new b(this),House2Livingroom:new w(this)},this.player=t}return t.prototype.play=function(){this.scenes.MainGate.welcome()},t}();var O=o(379),T=o.n(O),_=o(795),Y=o.n(_),x=o(569),j=o.n(x),I=o(565),P=o.n(I),A=o(216),E=o.n(A),H=o(589),D=o.n(H),S=o(800),C={};C.styleTagTransform=D(),C.setAttributes=P(),C.insert=j().bind(null,"head"),C.domAPI=Y(),C.insertStyleElement=E(),T()(S.Z,C),S.Z&&S.Z.locals&&S.Z.locals;var L=document.getElementById("form"),M=document.getElementById("input");L.addEventListener("submit",(function(t){t.preventDefault();var e=M.value.toLowerCase(),o=new KeyboardEvent("keydown",{key:e});document.dispatchEvent(o)})),new k(new i).play()})()})();