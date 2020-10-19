var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function c(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function p(t,n,e){t.classList[e?"add":"remove"](n)}let $;function h(t){$=t}function g(t){(function(){if(!$)throw new Error("Function called outside component initialization");return $})().$$.on_mount.push(t)}const y=[],x=[],E=[],v=[],b=Promise.resolve();let w=!1;function j(t){E.push(t)}let _=!1;const k=new Set;function M(){if(!_){_=!0;do{for(let t=0;t<y.length;t+=1){const n=y[t];h(n),A(n.$$)}for(h(null),y.length=0;x.length;)x.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];k.has(n)||(k.add(n),n())}E.length=0}while(y.length);for(;v.length;)v.pop()();w=!1,_=!1,k.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const C=new Set;function q(t,n){t&&t.i&&(C.delete(t),t.i(n))}function z(t,n,e,o){if(t&&t.o){if(C.has(t))return;C.add(t),undefined.c.push((()=>{C.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function B(t){t&&t.c()}function L(t,e,i){const{fragment:u,on_mount:l,on_destroy:c,after_update:s}=t.$$;u&&u.m(e,i),j((()=>{const e=l.map(n).filter(r);c?c.push(...e):o(e),t.$$.on_mount=[]})),s.forEach(j)}function N(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function O(t,n){-1===t.$$.dirty[0]&&(y.push(t),w||(w=!0,b.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function T(n,r,i,u,l,s,a=[-1]){const f=$;h(n);const d=r.props||{},m=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:a,skip_bound:!1};let p=!1;if(m.ctx=i?i(n,d,((t,e,...o)=>{const r=o.length?o[0]:e;return m.ctx&&l(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),p&&O(n,t)),e})):[],m.update(),p=!0,o(m.before_update),m.fragment=!!u&&u(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(c)}else m.fragment&&m.fragment.c();r.intro&&q(n.$$.fragment),L(n,r.target,r.anchor),M()}h(f)}class R{$destroy(){N(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function S(t,n,e){const o=t.slice();return o[18]=n[e],o}function F(t){let n,e,o,r=t[18][2]+"";return{c(){n=s("span"),e=a(r),d(n,"style",o=P(t[18])),d(n,"class","food svelte-1u5l6ae")},m(t,o){l(t,n,o),u(n,e)},p(t,i){2&i&&r!==(r=t[18][2]+"")&&m(e,r),2&i&&o!==(o=P(t[18]))&&d(n,"style",o)},d(t){t&&c(n)}}}function I(n){let e,o,r,i,$,h,g=n[1],y=[];for(let t=0;t<g.length;t+=1)y[t]=F(S(n,g,t));return{c(){e=s("div"),o=s("span"),r=a(n[0]),i=f();for(let t=0;t<y.length;t+=1)y[t].c();d(o,"style",n[4]),d(o,"class","animal svelte-1u5l6ae"),p(o,"happy",n[3]),d(e,"class","enclosure svelte-1u5l6ae"),d(e,"style",n[5])},m(t,c){l(t,e,c),u(e,o),u(o,r),u(e,i);for(let t=0;t<y.length;t+=1)y[t].m(e,null);var s,a,f,d;n[8](e),$||(s=e,a="click",f=n[6],s.addEventListener(a,f,d),h=()=>s.removeEventListener(a,f,d),$=!0)},p(t,[n]){if(1&n&&m(r,t[0]),16&n&&d(o,"style",t[4]),8&n&&p(o,"happy",t[3]),2&n){let o;for(g=t[1],o=0;o<g.length;o+=1){const r=S(t,g,o);y[o]?y[o].p(r,n):(y[o]=F(r),y[o].c(),y[o].m(e,null))}for(;o<y.length;o+=1)y[o].d(1);y.length=g.length}32&n&&d(e,"style",t[5])},i:t,o:t,d(t){t&&c(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(y,t),n[8](null),$=!1,h()}}}function P([t,n]){return`\n      left: ${t}px;\n      top: ${n}px;\n    `}function X(t,n,e){return Math.min(Math.max(t,n),e)}function Y(t){return t[Math.floor(Math.random()*t.length)]}function D(t,n){return t+Math.random()*(n-t)}function G(t,n){return[D(0,t.width-n),D(0,t.height-n)]}function H(t,n,e){let o,r,i,{animalEmoji:u}=n,{foodEmojis:l}=n,c=l[0],s=[],a=0,f=0,d=!1;function m([t,n]){return Math.sqrt((t-a)**2+(n-f)**2)}return g((function(){let t=o.getBoundingClientRect();e(10,[a,f]=G(t,36),a,e(11,f)),e(1,s=[0,0,0].map((()=>[...G(t,24),Y(l)])))})),setInterval((function(){if(!s.length)return;let[t,n]=[...s].sort(((t,n)=>m(t)-m(n)))[0],o=t-a,r=n-f,i=Math.sqrt(o**2+r**2);i>1&&(o/=i,r/=i),0===i&&(!function(t,n){e(1,s=s.filter((([e,o])=>!(e===t&&o===n))))}(t,n),e(3,d=!0),setTimeout((()=>e(3,d=!1)),1e3)),e(10,a+=o),e(11,f+=r)}),1e3/60),t.$$set=t=>{"animalEmoji"in t&&e(0,u=t.animalEmoji),"foodEmojis"in t&&e(7,l=t.foodEmojis)},t.$$.update=()=>{3072&t.$$.dirty&&e(4,r=`\n    left: ${a}px;\n    top: ${f}px;\n  `),512&t.$$.dirty&&e(5,i=`cursor:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>${c}</text></svg>") 16 0,auto;`)},[u,s,o,d,r,i,function(t){let{clientX:n,clientY:o}=t,r=t.target.getBoundingClientRect(),i=n-r.x-18,u=o-r.y-8;s.push([X(i,0,r.width-36),X(u,0,r.height-36),c]),e(9,c=Y(l)),e(1,s)},l,function(t){x[t?"unshift":"push"]((()=>{o=t,e(2,o)}))}]}class J extends R{constructor(t){super(),T(this,t,H,I,i,{animalEmoji:0,foodEmojis:7})}}function K(n){let e,o,r,i,a,m,p,$,h;return o=new J({props:{animalEmoji:"🐧",foodEmojis:["🍭","🍫","🍦"]}}),i=new J({props:{animalEmoji:"🐼",foodEmojis:["🍬","🍪","🧁"]}}),m=new J({props:{animalEmoji:"🐯",foodEmojis:["🍰","🥠","🎂"]}}),$=new J({props:{animalEmoji:"🐮",foodEmojis:["🍨","🍩","🍡"]}}),{c(){e=s("div"),B(o.$$.fragment),r=f(),B(i.$$.fragment),a=f(),B(m.$$.fragment),p=f(),B($.$$.fragment),d(e,"class","zoo svelte-k43ge2")},m(t,n){l(t,e,n),L(o,e,null),u(e,r),L(i,e,null),u(e,a),L(m,e,null),u(e,p),L($,e,null),h=!0},p:t,i(t){h||(q(o.$$.fragment,t),q(i.$$.fragment,t),q(m.$$.fragment,t),q($.$$.fragment,t),h=!0)},o(t){z(o.$$.fragment,t),z(i.$$.fragment,t),z(m.$$.fragment,t),z($.$$.fragment,t),h=!1},d(t){t&&c(e),N(o),N(i),N(m),N($)}}}return new class extends R{constructor(t){super(),T(this,t,null,K,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
