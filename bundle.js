(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,'body {\n  margin: 0;\n  padding: 0;\n  background-color: salmon;\n  font-family: "Courier New", Courier, monospace;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nimg {\n  width: 70px;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 60px;\n  z-index: 2;\n}\n\n.clock {\n  position: relative;\n  background-color: lightgray;\n  width: 350px;\n  height: 350px;\n  border-radius: 50%;\n  border: 5px solid darkgray;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);\n}\n\n.numbers div {\n  position: absolute;\n  font-size: 27px;\n  font-weight: bold;\n  color: lightgoldenrodyellow;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);\n}\n\n.twelve {\n  top: 6px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.three {\n  top: 50%;\n  right: 6px;\n  transform: translateY(-50%);\n}\n\n.six {\n  bottom: 6px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.nine {\n  top: 50%;\n  left: 6px;\n  transform: translateY(-50%);\n}\n\n.arrows {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.arrows::before {\n  content: "";\n  background-color: darkgreen;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  z-index: 4;\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);\n}\n\n.arrows div {\n  background-color: white;\n  width: 7px;\n  height: 120px;\n  bottom: 50%;\n  position: absolute;\n  border-radius: 50% 50% 0 0;\n  transform-origin: bottom center;\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);\n  z-index: 3;\n}\n\n.arrows .hour {\n  height: 80px;\n  transform: rotate(30deg);\n}\n\n.arrows .second {\n  background-color: goldenrod;\n  transform: rotate(250deg);\n}\n',""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],u=r.base?c[0]+r.base:c[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=t(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),u=0;u<a.length;u++){var d=t(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),u=t(216),d=t.n(u),l=t(589),p=t.n(l),f=t(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=document.querySelector(".hour"),v=document.querySelector(".minute"),g=document.querySelector(".second");setInterval((function(){const n=new Date,e=n.getHours(),t=n.getMinutes(),r=n.getSeconds(),o=e/12*360;m.style.transform=`rotate(${o}deg)`;const a=t/60*360;v.style.transform=`rotate(${a}deg)`;const i=r/60*360;g.style.transform=`rotate(${i}deg)`}),1e3)})()})();