var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(){return i(" ")}function d(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let m;function $(t){m=t}function g(){if(!m)throw new Error("Function called outside component initialization");return m}const b=[],y=[],k=[],x=[],v=Promise.resolve();let w=!1;function j(t){k.push(t)}const I=new Set;let _=0;function C(){const t=m;do{for(;_<b.length;){const t=b[_];_++,$(t),E(t.$$)}for($(null),b.length=0,_=0;y.length;)y.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];I.has(e)||(I.add(e),e())}k.length=0}while(b.length);for(;x.length;)x.pop()();w=!1,I.clear(),$(t)}function E(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const L=new Set;let M;function P(){M={r:0,c:[],p:M}}function A(){M.r||r(M.c),M=M.p}function N(t,e){t&&t.i&&(L.delete(t),t.i(e))}function S(t,e,n,r){if(t&&t.o){if(L.has(t))return;L.add(t),M.c.push((()=>{L.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function T(t,e){const n=e.token={};function r(t,r,c,o){if(e.token!==n)return;e.resolved=o;let l=e.ctx;void 0!==c&&(l=l.slice(),l[c]=o);const s=t&&(e.current=t)(l);let u=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==r&&t&&(P(),S(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),A())})):e.block.d(1),s.c(),N(s,1),s.m(e.mount(),e.anchor),u=!0),e.block=s,e.blocks&&(e.blocks[r]=s),u&&C()}if((c=t)&&"object"==typeof c&&"function"==typeof c.then){const n=g();if(t.then((t=>{$(n),r(e.then,1,e.value,t),$(null)}),(t=>{if($(n),r(e.catch,2,e.error,t),$(null),!e.hasCatch)throw t})),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var c}function D(t){t&&t.c()}function O(t,n,o,l){const{fragment:s,on_mount:u,on_destroy:a,after_update:i}=t.$$;s&&s.m(n,o),l||j((()=>{const n=u.map(e).filter(c);a?a.push(...n):r(n),t.$$.on_mount=[]})),i.forEach(j)}function F(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(t,e){-1===t.$$.dirty[0]&&(b.push(t),w||(w=!0,v.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function z(e,c,o,l,s,a,i,f=[-1]){const d=m;$(e);const p=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:c.target||d.$$.root};i&&i(p.root);let h=!1;if(p.ctx=o?o(e,c.props||{},((t,n,...r)=>{const c=r.length?r[0]:n;return p.ctx&&s(p.ctx[t],p.ctx[t]=c)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](c),h&&q(e,t)),n})):[],p.update(),h=!0,r(p.before_update),p.fragment=!!l&&l(p.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();c.intro&&N(e.$$.fragment),O(e,c.target,c.anchor,c.customElement),C()}$(d)}class B{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Y(t){let e,n,r;return{c(){e=a("h2"),n=a("span"),r=i(t[6]),p(n,"class","complete svelte-1ktbyb3"),p(e,"class","svelte-1ktbyb3")},m(t,c){s(t,e,c),l(e,n),l(n,r)},p(t,e){64&e&&h(r,t[6])},d(t){t&&u(e)}}}function G(t){let e,n;return{c(){e=a("h2"),n=i(t[4]),p(e,"class","svelte-1ktbyb3")},m(t,r){s(t,e,r),l(e,n)},p(t,e){16&e&&h(n,t[4])},d(t){t&&u(e)}}}function H(t){let e,n;return{c(){e=a("h2"),n=i(t[3]),p(e,"class","svelte-1ktbyb3")},m(t,r){s(t,e,r),l(e,n)},p(t,e){8&e&&h(n,t[3])},d(t){t&&u(e)}}}function J(e){let n,r,o,m,$,g,b,y,k,x,v,w,j,I,_=e[5].slice(0,e[0])+"",C=e[5].slice(e[0]+1,e[5].length)+"",E=e[6]&&Y(e),L=e[4]&&G(e),M=!e[6]&&H(e);return{c(){n=a("label"),E&&E.c(),r=f(),o=a("input"),m=f(),$=a("h2"),g=a("span"),b=i(_),y=a("span"),k=i(e[2]),x=i(C),v=f(),L&&L.c(),w=f(),M&&M.c(),p(o,"id","input"),p(o,"type","text"),p(o,"name",""),p(o,"class","svelte-1ktbyb3"),p(g,"class","complete svelte-1ktbyb3"),p(y,"class","index svelte-1ktbyb3"),p($,"class","svelte-1ktbyb3")},m(t,u){s(t,n,u),E&&E.m(n,null),l(n,r),l(n,o),l(n,m),l(n,$),l($,g),l(g,b),l($,y),l(y,k),l($,x),l(n,v),L&&L.m(n,null),l(n,w),M&&M.m(n,null),j||(I=d(o,"input",(function(){c(e[1])&&e[1].apply(this,arguments)})),j=!0)},p(t,[c]){(e=t)[6]?E?E.p(e,c):(E=Y(e),E.c(),E.m(n,r)):E&&(E.d(1),E=null),33&c&&_!==(_=e[5].slice(0,e[0])+"")&&h(b,_),4&c&&h(k,e[2]),33&c&&C!==(C=e[5].slice(e[0]+1,e[5].length)+"")&&h(x,C),e[4]?L?L.p(e,c):(L=G(e),L.c(),L.m(n,w)):L&&(L.d(1),L=null),e[6]?M&&(M.d(1),M=null):M?M.p(e,c):(M=H(e),M.c(),M.m(n,null))},i:t,o:t,d(t){t&&u(n),E&&E.d(),L&&L.d(),M&&M.d(),j=!1,I()}}}function K(t,e,n){let r,c,o,l,s,{content:u}=e,{currLineIndex:a}=e,{currCharIndex:i}=e,{onInput:f=console.log}=e;return t.$$set=t=>{"content"in t&&n(7,u=t.content),"currLineIndex"in t&&n(8,a=t.currLineIndex),"currCharIndex"in t&&n(0,i=t.currCharIndex),"onInput"in t&&n(1,f=t.onInput)},t.$$.update=()=>{384&t.$$.dirty&&n(6,r=u[a-1]),384&t.$$.dirty&&n(5,c=u[a]),384&t.$$.dirty&&n(4,o=u[a+1]),384&t.$$.dirty&&n(3,l=u[a+2]),385&t.$$.dirty&&n(2,s=u[a][i])},[i,f,s,l,o,c,r,u,a]}class Q extends B{constructor(t){super(),z(this,t,K,J,o,{content:7,currLineIndex:8,currCharIndex:0,onInput:1})}}function R(e){let n,r,c,o,d,m,$,g,b,y,k,x,v,w,j,I,_,C,E,L,M,P,A,N;return{c(){n=a("h2"),r=i("خێرایی: "),c=i(e[1]),o=i(" وشە/خولەک"),d=f(),m=a("h2"),$=i("وردی: "),g=i(e[0]),b=i("%"),y=f(),k=a("h2"),x=i("هەڵەکان: "),v=i(e[2]),w=f(),j=a("ul"),I=a("li"),_=a("h1"),C=a("a"),E=a("i"),L=f(),M=a("li"),P=a("h1"),A=a("a"),N=a("i"),p(n,"class","svelte-13jp2hb"),p(m,"class","svelte-13jp2hb"),p(k,"class","svelte-13jp2hb"),p(E,"class","fab fa-twitter svelte-13jp2hb"),p(C,"href","https://twitter.com/share?text="+e[3]),p(C,"class","svelte-13jp2hb"),p(_,"class","svelte-13jp2hb"),p(I,"class","svelte-13jp2hb"),p(N,"class","fab fa-telegram-plane svelte-13jp2hb"),p(A,"href","https://t.me/share?url="+e[4]),p(A,"class","svelte-13jp2hb"),p(P,"class","svelte-13jp2hb"),p(M,"class","svelte-13jp2hb"),p(j,"class","svelte-13jp2hb")},m(t,e){s(t,n,e),l(n,r),l(n,c),l(n,o),s(t,d,e),s(t,m,e),l(m,$),l(m,g),l(m,b),s(t,y,e),s(t,k,e),l(k,x),l(k,v),s(t,w,e),s(t,j,e),l(j,I),l(I,_),l(_,C),l(C,E),l(j,L),l(j,M),l(M,P),l(P,A),l(A,N)},p(t,[e]){2&e&&h(c,t[1]),1&e&&h(g,t[0]),4&e&&h(v,t[2])},i:t,o:t,d(t){t&&u(n),t&&u(d),t&&u(m),t&&u(y),t&&u(k),t&&u(w),t&&u(j)}}}function U(t,e,n){let{wpm:r}=e,{accuracy:c}=e,{mistakes:o}=e;c=c||0;const l=`${r} وشە لە خولەکێکدا بەوردیی ${c}% بە تەختەکلیلی کوردی دەنووسم. تۆش بزانە چەندێک خێرایت!`,s=l+"\n"+location.href;return t.$$set=t=>{"wpm"in t&&n(1,r=t.wpm),"accuracy"in t&&n(0,c=t.accuracy),"mistakes"in t&&n(2,o=t.mistakes)},[c,r,o,l,s]}class V extends B{constructor(t){super(),z(this,t,U,R,o,{wpm:1,accuracy:0,mistakes:2})}}function W(t){return t=(t=(t=(t=(t=(t=(t=(t=t.replace(/‌/g,"")).replace(/ـ/g,"")).replace(/ھ/g,"ه")).replace(/ي/g,"ی")).replace(/ك/g,"ک")).replace(/ة/g,"ە")).replace(/ء/g,"ئ")).replace(/ؤ/g,"ۆ")}function X(t){let e,n;return e=new Q({props:{currCharIndex:t[2],currLineIndex:t[1],content:t[0],onInput:t[7]}}),{c(){D(e.$$.fragment)},m(t,r){O(e,t,r),n=!0},p(t,n){const r={};4&n&&(r.currCharIndex=t[2]),2&n&&(r.currLineIndex=t[1]),1&n&&(r.content=t[0]),e.$set(r)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function Z(t){let e,n;return e=new V({props:{wpm:t[6],accuracy:t[5],mistakes:t[3]}}),{c(){D(e.$$.fragment)},m(t,r){O(e,t,r),n=!0},p(t,n){const r={};64&n&&(r.wpm=t[6]),32&n&&(r.accuracy=t[5]),8&n&&(r.mistakes=t[3]),e.$set(r)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function tt(t){let e,n,r,c;const o=[Z,X],l=[];function a(t,e){return t[4]?0:1}return e=a(t),n=l[e]=o[e](t),{c(){n.c(),r=i("")},m(t,n){l[e].m(t,n),s(t,r,n),c=!0},p(t,[c]){let s=e;e=a(t),e===s?l[e].p(t,c):(P(),S(l[s],1,1,(()=>{l[s]=null})),A(),n=l[e],n?n.p(t,c):(n=l[e]=o[e](t),n.c()),N(n,1),n.m(r.parentNode,r))},i(t){c||(N(n),c=!0)},o(t){S(n),c=!1},d(t){l[e].d(t),t&&u(r)}}}function et(t,e,n){let r,c,o,l,s,u,{content:a}=e,i=1,f=0,d=0,p=!1,h=!1,m=0,$=0;return t.$$set=t=>{"content"in t&&n(0,a=t.content)},t.$$.update=()=>{3&t.$$.dirty&&n(10,r=a[f]),1028&t.$$.dirty&&(c=r[d]),768&t.$$.dirty&&n(6,o=Math.floor(Math.round(m/5)/i)),520&t.$$.dirty&&n(5,l=Math.round((m-$)/m*100))},[a,f,d,$,h,l,o,function(t){if(h)return;const e=t.data;var o;e&&(n(9,m++,m),m==function(t){return t.join("").length}(a)&&(clearTimeout(u),n(8,i=(Date.now()-s)/1e3/60),n(4,h=!0)),o=c,W(e)==W(o)?(p||(p=!0,s=Date.now(),u=setTimeout((()=>n(4,h=!0)),60*i*1e3)),null==r[d+1]?(n(1,f++,f),n(2,d=0)):n(2,d++,d)):n(3,$++,$))},i,m,r]}class nt extends B{constructor(t){super(),z(this,t,et,tt,o,{content:0})}}function rt(e){let n,r,c,o,i;return{c(){n=a("button"),r=a("i"),p(r,"class",c="fa-solid "+e[0]),p(n,"class","svelte-a63xx2")},m(t,c){s(t,n,c),l(n,r),o||(i=d(n,"click",e[1]),o=!0)},p(t,[e]){1&e&&c!==(c="fa-solid "+t[0])&&p(r,"class",c)},i:t,o:t,d(t){t&&u(n),o=!1,i()}}}function ct(){return("dark"==localStorage.getItem("mode")?"dark":"light")||"light"}function ot(){return"dark"==ct()?"fa-moon":"fa-sun"}function lt(t,e,n){let r=ot();function c(t){const e="light"==t?"#222":"#eee",c="light"==t?"#333":"#ccc",o="light"==t?"#eee":"#222",l="light"==t?"#ccc":"#333";document.documentElement.style.setProperty("--dark",e),document.documentElement.style.setProperty("--dark-alt",c),document.documentElement.style.setProperty("--light",o),document.documentElement.style.setProperty("--light-alt",l),localStorage.setItem("mode",t),n(0,r=ot())}return c(ct()),[r,function(){c("dark"==ct()?"light":"dark")}]}class st extends B{constructor(t){super(),z(this,t,lt,rt,o,{})}}function ut(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function at(e){let n,r;return n=new nt({props:{content:e[0]}}),{c(){D(n.$$.fragment)},m(t,e){O(n,t,e),r=!0},p:t,i(t){r||(N(n.$$.fragment,t),r=!0)},o(t){S(n.$$.fragment,t),r=!1},d(t){F(n,t)}}}function it(e){let n;return{c(){n=a("p"),n.textContent="چاوەڕوان بە..."},m(t,e){s(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}function ft(t){let e,n,r,c,o,d,h,m,$,g,b,y,k,x,v=(new Date).getFullYear()+"";n=new st({});let w={ctx:t,current:null,token:null,hasCatch:!1,pending:it,then:at,catch:ut,value:0,blocks:[,,,]};return T(async function(){return(await(await fetch("https://xera.deno.dev/nextContent")).json()).reduce(((t,e,n)=>{const r=Math.floor(n/10);return t[r]=[].concat(t[r]||[],e),t}),[]).map((t=>t.join(" ")+" "))}(),w),{c(){e=a("header"),D(n.$$.fragment),r=f(),c=a("main"),w.block.c(),o=f(),d=a("footer"),h=a("p"),m=i("© "),$=i(v),g=f(),b=a("a"),b.textContent="ڕۆژ",y=i(" ·\n\t\t"),k=a("a"),k.textContent="سەرچاوە",p(b,"href","https://roj.im"),p(k,"href","https://github.com/roj1512/xera")},m(t,u){s(t,e,u),O(n,e,null),s(t,r,u),s(t,c,u),w.block.m(c,w.anchor=null),w.mount=()=>c,w.anchor=null,s(t,o,u),s(t,d,u),l(d,h),l(h,m),l(h,$),l(h,g),l(h,b),l(h,y),l(h,k),x=!0},p(e,[n]){!function(t,e,n){const r=e.slice(),{resolved:c}=t;t.current===t.then&&(r[t.value]=c),t.current===t.catch&&(r[t.error]=c),t.block.p(r,n)}(w,t=e,n)},i(t){x||(N(n.$$.fragment,t),N(w.block),x=!0)},o(t){S(n.$$.fragment,t);for(let t=0;t<3;t+=1){S(w.blocks[t])}x=!1},d(t){t&&u(e),F(n),t&&u(r),t&&u(c),w.block.d(),w.token=null,w=null,t&&u(o),t&&u(d)}}}return new class extends B{constructor(t){super(),z(this,t,null,ft,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
