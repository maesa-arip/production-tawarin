import{g as gt,r as bt,f as wt,a as I,j as C,L as U}from"./app.b2a6f44b.js";import{L as _t}from"./Tawarin.08057ae7.js";var ut={exports:{}};(function(ct,xt){(function(Z,$){ct.exports=$(bt.exports)})(typeof self!="undefined"?self:wt,Z=>(()=>{var $={7403:(e,o,t)=>{t.d(o,{default:()=>G});var r=t(4087),s=t.n(r);const a=function(E){return new RegExp(/<[a-z][\s\S]*>/i).test(E)},n=function(E){var m=document.createElement("div");return m.innerHTML=E,m.childNodes},u=function(E,m){return Math.floor(Math.random()*(m-E+1))+E};var c="TYPE_CHARACTER",l="REMOVE_CHARACTER",v="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",d="PAUSE_FOR",b="CALL_FUNCTION",T="ADD_HTML_TAG_ELEMENT",h="CHANGE_DELETE_SPEED",f="CHANGE_DELAY",g="CHANGE_CURSOR",w="PASTE_STRING",N="HTML_TAG";function _(E,m){var S=Object.keys(E);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(E);m&&(x=x.filter(function(H){return Object.getOwnPropertyDescriptor(E,H).enumerable})),S.push.apply(S,x)}return S}function P(E){for(var m=1;m<arguments.length;m++){var S=arguments[m]!=null?arguments[m]:{};m%2?_(Object(S),!0).forEach(function(x){A(E,x,S[x])}):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(S)):_(Object(S)).forEach(function(x){Object.defineProperty(E,x,Object.getOwnPropertyDescriptor(S,x))})}return E}function O(E){return function(m){if(Array.isArray(m))return j(m)}(E)||function(m){if(typeof Symbol!="undefined"&&m[Symbol.iterator]!=null||m["@@iterator"]!=null)return Array.from(m)}(E)||function(m,S){if(m){if(typeof m=="string")return j(m,S);var x=Object.prototype.toString.call(m).slice(8,-1);return x==="Object"&&m.constructor&&(x=m.constructor.name),x==="Map"||x==="Set"?Array.from(m):x==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x)?j(m,S):void 0}}(E)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function j(E,m){(m==null||m>E.length)&&(m=E.length);for(var S=0,x=new Array(m);S<m;S++)x[S]=E[S];return x}function k(E,m){for(var S=0;S<m.length;S++){var x=m[S];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(E,x.key,x)}}function A(E,m,S){return m in E?Object.defineProperty(E,m,{value:S,enumerable:!0,configurable:!0,writable:!0}):E[m]=S,E}const G=function(){function E(x,H){var i=this;if(function(y,L){if(!(y instanceof L))throw new TypeError("Cannot call a class as a function")}(this,E),A(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),A(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),A(this,"setupWrapperElement",function(){i.state.elements.container&&(i.state.elements.wrapper.className=i.options.wrapperClassName,i.state.elements.cursor.className=i.options.cursorClassName,i.state.elements.cursor.innerHTML=i.options.cursor,i.state.elements.container.innerHTML="",i.state.elements.container.appendChild(i.state.elements.wrapper),i.state.elements.container.appendChild(i.state.elements.cursor))}),A(this,"start",function(){return i.state.eventLoopPaused=!1,i.runEventLoop(),i}),A(this,"pause",function(){return i.state.eventLoopPaused=!0,i}),A(this,"stop",function(){return i.state.eventLoop&&((0,r.cancel)(i.state.eventLoop),i.state.eventLoop=null),i}),A(this,"pauseFor",function(y){return i.addEventToQueue(d,{ms:y}),i}),A(this,"typeOutAllStrings",function(){return typeof i.options.strings=="string"?(i.typeString(i.options.strings).pauseFor(i.options.pauseFor),i):(i.options.strings.forEach(function(y){i.typeString(y).pauseFor(i.options.pauseFor).deleteAll(i.options.deleteSpeed)}),i)}),A(this,"typeString",function(y){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(a(y))return i.typeOutHTMLString(y,L);if(y){var z=i.options||{},D=z.stringSplitter,M=typeof D=="function"?D(y):y.split("");i.typeCharacters(M,L)}return i}),A(this,"pasteString",function(y){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return a(y)?i.typeOutHTMLString(y,L,!0):(y&&i.addEventToQueue(w,{character:y,node:L}),i)}),A(this,"typeOutHTMLString",function(y){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,z=arguments.length>2?arguments[2]:void 0,D=n(y);if(D.length>0)for(var M=0;M<D.length;M++){var F=D[M],Q=F.innerHTML;F&&F.nodeType!==3?(F.innerHTML="",i.addEventToQueue(T,{node:F,parentNode:L}),z?i.pasteString(Q,F):i.typeString(Q,F)):F.textContent&&(z?i.pasteString(F.textContent,L):i.typeString(F.textContent,L))}return i}),A(this,"deleteAll",function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return i.addEventToQueue(v,{speed:y}),i}),A(this,"changeDeleteSpeed",function(y){if(!y)throw new Error("Must provide new delete speed");return i.addEventToQueue(h,{speed:y}),i}),A(this,"changeDelay",function(y){if(!y)throw new Error("Must provide new delay");return i.addEventToQueue(f,{delay:y}),i}),A(this,"changeCursor",function(y){if(!y)throw new Error("Must provide new cursor");return i.addEventToQueue(g,{cursor:y}),i}),A(this,"deleteChars",function(y){if(!y)throw new Error("Must provide amount of characters to delete");for(var L=0;L<y;L++)i.addEventToQueue(l);return i}),A(this,"callFunction",function(y,L){if(!y||typeof y!="function")throw new Error("Callbak must be a function");return i.addEventToQueue(b,{cb:y,thisArg:L}),i}),A(this,"typeCharacters",function(y){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!y||!Array.isArray(y))throw new Error("Characters must be an array");return y.forEach(function(z){i.addEventToQueue(c,{character:z,node:L})}),i}),A(this,"removeCharacters",function(y){if(!y||!Array.isArray(y))throw new Error("Characters must be an array");return y.forEach(function(){i.addEventToQueue(l)}),i}),A(this,"addEventToQueue",function(y,L){var z=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return i.addEventToStateProperty(y,L,z,"eventQueue")}),A(this,"addReverseCalledEvent",function(y,L){var z=arguments.length>2&&arguments[2]!==void 0&&arguments[2],D=i.options.loop;return D?i.addEventToStateProperty(y,L,z,"reverseCalledEvents"):i}),A(this,"addEventToStateProperty",function(y,L){var z=arguments.length>2&&arguments[2]!==void 0&&arguments[2],D=arguments.length>3?arguments[3]:void 0,M={eventName:y,eventArgs:L||{}};return i.state[D]=z?[M].concat(O(i.state[D])):[].concat(O(i.state[D]),[M]),i}),A(this,"runEventLoop",function(){i.state.lastFrameTime||(i.state.lastFrameTime=Date.now());var y=Date.now(),L=y-i.state.lastFrameTime;if(!i.state.eventQueue.length){if(!i.options.loop)return;i.state.eventQueue=O(i.state.calledEvents),i.state.calledEvents=[],i.options=P({},i.state.initialOptions)}if(i.state.eventLoop=s()(i.runEventLoop),!i.state.eventLoopPaused){if(i.state.pauseUntil){if(y<i.state.pauseUntil)return;i.state.pauseUntil=null}var z,D=O(i.state.eventQueue),M=D.shift();if(!(L<=(z=M.eventName===p||M.eventName===l?i.options.deleteSpeed==="natural"?u(40,80):i.options.deleteSpeed:i.options.delay==="natural"?u(120,160):i.options.delay))){var F=M.eventName,Q=M.eventArgs;switch(i.logInDevMode({currentEvent:M,state:i.state,delay:z}),F){case w:case c:var Y=Q.character,nt=Q.node,ot=document.createTextNode(Y),B=ot;i.options.onCreateTextNode&&typeof i.options.onCreateTextNode=="function"&&(B=i.options.onCreateTextNode(Y,ot)),B&&(nt?nt.appendChild(B):i.state.elements.wrapper.appendChild(B)),i.state.visibleNodes=[].concat(O(i.state.visibleNodes),[{type:"TEXT_NODE",character:Y,node:B}]);break;case l:D.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case d:var lt=M.eventArgs.ms;i.state.pauseUntil=Date.now()+parseInt(lt);break;case b:var at=M.eventArgs,pt=at.cb,ft=at.thisArg;pt.call(ft,{elements:i.state.elements});break;case T:var st=M.eventArgs,q=st.node,J=st.parentNode;J?J.appendChild(q):i.state.elements.wrapper.appendChild(q),i.state.visibleNodes=[].concat(O(i.state.visibleNodes),[{type:N,node:q,parentNode:J||i.state.elements.wrapper}]);break;case v:var dt=i.state.visibleNodes,X=Q.speed,W=[];X&&W.push({eventName:h,eventArgs:{speed:X,temp:!0}});for(var it=0,ht=dt.length;it<ht;it++)W.push({eventName:p,eventArgs:{removingCharacterNode:!1}});X&&W.push({eventName:h,eventArgs:{speed:i.options.deleteSpeed,temp:!0}}),D.unshift.apply(D,W);break;case p:var vt=M.eventArgs.removingCharacterNode;if(i.state.visibleNodes.length){var K=i.state.visibleNodes.pop(),yt=K.type,V=K.node,mt=K.character;i.options.onRemoveNode&&typeof i.options.onRemoveNode=="function"&&i.options.onRemoveNode({node:V,character:mt}),V&&V.parentNode.removeChild(V),yt===N&&vt&&D.unshift({eventName:p,eventArgs:{}})}break;case h:i.options.deleteSpeed=M.eventArgs.speed;break;case f:i.options.delay=M.eventArgs.delay;break;case g:i.options.cursor=M.eventArgs.cursor,i.state.elements.cursor.innerHTML=M.eventArgs.cursor}i.options.loop&&(M.eventName===p||M.eventArgs&&M.eventArgs.temp||(i.state.calledEvents=[].concat(O(i.state.calledEvents),[M]))),i.state.eventQueue=D,i.state.lastFrameTime=y}}}),x)if(typeof x=="string"){var rt=document.querySelector(x);if(!rt)throw new Error("Could not find container element");this.state.elements.container=rt}else this.state.elements.container=x;H&&(this.options=P(P({},this.options),H)),this.state.initialOptions=P({},this.options),this.init()}var m,S;return m=E,(S=[{key:"init",value:function(){var x,H;this.setupWrapperElement(),this.addEventToQueue(g,{cursor:this.options.cursor},!0),this.addEventToQueue(v,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(x=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(H=document.createElement("style")).appendChild(document.createTextNode(x)),document.head.appendChild(H),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(x){this.options.devMode&&console.log(x)}}])&&k(m.prototype,S),Object.defineProperty(m,"prototype",{writable:!1}),E}()},8552:(e,o,t)=>{var r=t(852)(t(5639),"DataView");e.exports=r},1989:(e,o,t)=>{var r=t(1789),s=t(401),a=t(7667),n=t(1327),u=t(1866);function c(l){var v=-1,p=l==null?0:l.length;for(this.clear();++v<p;){var d=l[v];this.set(d[0],d[1])}}c.prototype.clear=r,c.prototype.delete=s,c.prototype.get=a,c.prototype.has=n,c.prototype.set=u,e.exports=c},8407:(e,o,t)=>{var r=t(7040),s=t(4125),a=t(2117),n=t(7518),u=t(4705);function c(l){var v=-1,p=l==null?0:l.length;for(this.clear();++v<p;){var d=l[v];this.set(d[0],d[1])}}c.prototype.clear=r,c.prototype.delete=s,c.prototype.get=a,c.prototype.has=n,c.prototype.set=u,e.exports=c},7071:(e,o,t)=>{var r=t(852)(t(5639),"Map");e.exports=r},3369:(e,o,t)=>{var r=t(4785),s=t(1285),a=t(6e3),n=t(9916),u=t(5265);function c(l){var v=-1,p=l==null?0:l.length;for(this.clear();++v<p;){var d=l[v];this.set(d[0],d[1])}}c.prototype.clear=r,c.prototype.delete=s,c.prototype.get=a,c.prototype.has=n,c.prototype.set=u,e.exports=c},3818:(e,o,t)=>{var r=t(852)(t(5639),"Promise");e.exports=r},8525:(e,o,t)=>{var r=t(852)(t(5639),"Set");e.exports=r},8668:(e,o,t)=>{var r=t(3369),s=t(619),a=t(2385);function n(u){var c=-1,l=u==null?0:u.length;for(this.__data__=new r;++c<l;)this.add(u[c])}n.prototype.add=n.prototype.push=s,n.prototype.has=a,e.exports=n},6384:(e,o,t)=>{var r=t(8407),s=t(7465),a=t(3779),n=t(7599),u=t(4758),c=t(4309);function l(v){var p=this.__data__=new r(v);this.size=p.size}l.prototype.clear=s,l.prototype.delete=a,l.prototype.get=n,l.prototype.has=u,l.prototype.set=c,e.exports=l},2705:(e,o,t)=>{var r=t(5639).Symbol;e.exports=r},1149:(e,o,t)=>{var r=t(5639).Uint8Array;e.exports=r},577:(e,o,t)=>{var r=t(852)(t(5639),"WeakMap");e.exports=r},4963:e=>{e.exports=function(o,t){for(var r=-1,s=o==null?0:o.length,a=0,n=[];++r<s;){var u=o[r];t(u,r,o)&&(n[a++]=u)}return n}},4636:(e,o,t)=>{var r=t(2545),s=t(5694),a=t(1469),n=t(4144),u=t(5776),c=t(6719),l=Object.prototype.hasOwnProperty;e.exports=function(v,p){var d=a(v),b=!d&&s(v),T=!d&&!b&&n(v),h=!d&&!b&&!T&&c(v),f=d||b||T||h,g=f?r(v.length,String):[],w=g.length;for(var N in v)!p&&!l.call(v,N)||f&&(N=="length"||T&&(N=="offset"||N=="parent")||h&&(N=="buffer"||N=="byteLength"||N=="byteOffset")||u(N,w))||g.push(N);return g}},2488:e=>{e.exports=function(o,t){for(var r=-1,s=t.length,a=o.length;++r<s;)o[a+r]=t[r];return o}},2908:e=>{e.exports=function(o,t){for(var r=-1,s=o==null?0:o.length;++r<s;)if(t(o[r],r,o))return!0;return!1}},8470:(e,o,t)=>{var r=t(7813);e.exports=function(s,a){for(var n=s.length;n--;)if(r(s[n][0],a))return n;return-1}},8866:(e,o,t)=>{var r=t(2488),s=t(1469);e.exports=function(a,n,u){var c=n(a);return s(a)?c:r(c,u(a))}},4239:(e,o,t)=>{var r=t(2705),s=t(9607),a=t(2333),n=r?r.toStringTag:void 0;e.exports=function(u){return u==null?u===void 0?"[object Undefined]":"[object Null]":n&&n in Object(u)?s(u):a(u)}},9454:(e,o,t)=>{var r=t(4239),s=t(7005);e.exports=function(a){return s(a)&&r(a)=="[object Arguments]"}},939:(e,o,t)=>{var r=t(2492),s=t(7005);e.exports=function a(n,u,c,l,v){return n===u||(n==null||u==null||!s(n)&&!s(u)?n!=n&&u!=u:r(n,u,c,l,a,v))}},2492:(e,o,t)=>{var r=t(6384),s=t(7114),a=t(8351),n=t(6096),u=t(4160),c=t(1469),l=t(4144),v=t(6719),p="[object Arguments]",d="[object Array]",b="[object Object]",T=Object.prototype.hasOwnProperty;e.exports=function(h,f,g,w,N,_){var P=c(h),O=c(f),j=P?d:u(h),k=O?d:u(f),A=(j=j==p?b:j)==b,G=(k=k==p?b:k)==b,E=j==k;if(E&&l(h)){if(!l(f))return!1;P=!0,A=!1}if(E&&!A)return _||(_=new r),P||v(h)?s(h,f,g,w,N,_):a(h,f,j,g,w,N,_);if(!(1&g)){var m=A&&T.call(h,"__wrapped__"),S=G&&T.call(f,"__wrapped__");if(m||S){var x=m?h.value():h,H=S?f.value():f;return _||(_=new r),N(x,H,g,w,_)}}return!!E&&(_||(_=new r),n(h,f,g,w,N,_))}},8458:(e,o,t)=>{var r=t(3560),s=t(5346),a=t(3218),n=t(346),u=/^\[object .+?Constructor\]$/,c=Function.prototype,l=Object.prototype,v=c.toString,p=l.hasOwnProperty,d=RegExp("^"+v.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(b){return!(!a(b)||s(b))&&(r(b)?d:u).test(n(b))}},8749:(e,o,t)=>{var r=t(4239),s=t(1780),a=t(7005),n={};n["[object Float32Array]"]=n["[object Float64Array]"]=n["[object Int8Array]"]=n["[object Int16Array]"]=n["[object Int32Array]"]=n["[object Uint8Array]"]=n["[object Uint8ClampedArray]"]=n["[object Uint16Array]"]=n["[object Uint32Array]"]=!0,n["[object Arguments]"]=n["[object Array]"]=n["[object ArrayBuffer]"]=n["[object Boolean]"]=n["[object DataView]"]=n["[object Date]"]=n["[object Error]"]=n["[object Function]"]=n["[object Map]"]=n["[object Number]"]=n["[object Object]"]=n["[object RegExp]"]=n["[object Set]"]=n["[object String]"]=n["[object WeakMap]"]=!1,e.exports=function(u){return a(u)&&s(u.length)&&!!n[r(u)]}},280:(e,o,t)=>{var r=t(5726),s=t(6916),a=Object.prototype.hasOwnProperty;e.exports=function(n){if(!r(n))return s(n);var u=[];for(var c in Object(n))a.call(n,c)&&c!="constructor"&&u.push(c);return u}},2545:e=>{e.exports=function(o,t){for(var r=-1,s=Array(o);++r<o;)s[r]=t(r);return s}},1717:e=>{e.exports=function(o){return function(t){return o(t)}}},4757:e=>{e.exports=function(o,t){return o.has(t)}},4429:(e,o,t)=>{var r=t(5639)["__core-js_shared__"];e.exports=r},7114:(e,o,t)=>{var r=t(8668),s=t(2908),a=t(4757);e.exports=function(n,u,c,l,v,p){var d=1&c,b=n.length,T=u.length;if(b!=T&&!(d&&T>b))return!1;var h=p.get(n),f=p.get(u);if(h&&f)return h==u&&f==n;var g=-1,w=!0,N=2&c?new r:void 0;for(p.set(n,u),p.set(u,n);++g<b;){var _=n[g],P=u[g];if(l)var O=d?l(P,_,g,u,n,p):l(_,P,g,n,u,p);if(O!==void 0){if(O)continue;w=!1;break}if(N){if(!s(u,function(j,k){if(!a(N,k)&&(_===j||v(_,j,c,l,p)))return N.push(k)})){w=!1;break}}else if(_!==P&&!v(_,P,c,l,p)){w=!1;break}}return p.delete(n),p.delete(u),w}},8351:(e,o,t)=>{var r=t(2705),s=t(1149),a=t(7813),n=t(7114),u=t(8776),c=t(1814),l=r?r.prototype:void 0,v=l?l.valueOf:void 0;e.exports=function(p,d,b,T,h,f,g){switch(b){case"[object DataView]":if(p.byteLength!=d.byteLength||p.byteOffset!=d.byteOffset)return!1;p=p.buffer,d=d.buffer;case"[object ArrayBuffer]":return!(p.byteLength!=d.byteLength||!f(new s(p),new s(d)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+p,+d);case"[object Error]":return p.name==d.name&&p.message==d.message;case"[object RegExp]":case"[object String]":return p==d+"";case"[object Map]":var w=u;case"[object Set]":var N=1&T;if(w||(w=c),p.size!=d.size&&!N)return!1;var _=g.get(p);if(_)return _==d;T|=2,g.set(p,d);var P=n(w(p),w(d),T,h,f,g);return g.delete(p),P;case"[object Symbol]":if(v)return v.call(p)==v.call(d)}return!1}},6096:(e,o,t)=>{var r=t(8234),s=Object.prototype.hasOwnProperty;e.exports=function(a,n,u,c,l,v){var p=1&u,d=r(a),b=d.length;if(b!=r(n).length&&!p)return!1;for(var T=b;T--;){var h=d[T];if(!(p?h in n:s.call(n,h)))return!1}var f=v.get(a),g=v.get(n);if(f&&g)return f==n&&g==a;var w=!0;v.set(a,n),v.set(n,a);for(var N=p;++T<b;){var _=a[h=d[T]],P=n[h];if(c)var O=p?c(P,_,h,n,a,v):c(_,P,h,a,n,v);if(!(O===void 0?_===P||l(_,P,u,c,v):O)){w=!1;break}N||(N=h=="constructor")}if(w&&!N){var j=a.constructor,k=n.constructor;j==k||!("constructor"in a)||!("constructor"in n)||typeof j=="function"&&j instanceof j&&typeof k=="function"&&k instanceof k||(w=!1)}return v.delete(a),v.delete(n),w}},1957:(e,o,t)=>{var r=typeof t.g=="object"&&t.g&&t.g.Object===Object&&t.g;e.exports=r},8234:(e,o,t)=>{var r=t(8866),s=t(9551),a=t(3674);e.exports=function(n){return r(n,a,s)}},5050:(e,o,t)=>{var r=t(7019);e.exports=function(s,a){var n=s.__data__;return r(a)?n[typeof a=="string"?"string":"hash"]:n.map}},852:(e,o,t)=>{var r=t(8458),s=t(7801);e.exports=function(a,n){var u=s(a,n);return r(u)?u:void 0}},9607:(e,o,t)=>{var r=t(2705),s=Object.prototype,a=s.hasOwnProperty,n=s.toString,u=r?r.toStringTag:void 0;e.exports=function(c){var l=a.call(c,u),v=c[u];try{c[u]=void 0;var p=!0}catch{}var d=n.call(c);return p&&(l?c[u]=v:delete c[u]),d}},9551:(e,o,t)=>{var r=t(4963),s=t(479),a=Object.prototype.propertyIsEnumerable,n=Object.getOwnPropertySymbols,u=n?function(c){return c==null?[]:(c=Object(c),r(n(c),function(l){return a.call(c,l)}))}:s;e.exports=u},4160:(e,o,t)=>{var r=t(8552),s=t(7071),a=t(3818),n=t(8525),u=t(577),c=t(4239),l=t(346),v="[object Map]",p="[object Promise]",d="[object Set]",b="[object WeakMap]",T="[object DataView]",h=l(r),f=l(s),g=l(a),w=l(n),N=l(u),_=c;(r&&_(new r(new ArrayBuffer(1)))!=T||s&&_(new s)!=v||a&&_(a.resolve())!=p||n&&_(new n)!=d||u&&_(new u)!=b)&&(_=function(P){var O=c(P),j=O=="[object Object]"?P.constructor:void 0,k=j?l(j):"";if(k)switch(k){case h:return T;case f:return v;case g:return p;case w:return d;case N:return b}return O}),e.exports=_},7801:e=>{e.exports=function(o,t){return o==null?void 0:o[t]}},1789:(e,o,t)=>{var r=t(4536);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},401:e=>{e.exports=function(o){var t=this.has(o)&&delete this.__data__[o];return this.size-=t?1:0,t}},7667:(e,o,t)=>{var r=t(4536),s=Object.prototype.hasOwnProperty;e.exports=function(a){var n=this.__data__;if(r){var u=n[a];return u==="__lodash_hash_undefined__"?void 0:u}return s.call(n,a)?n[a]:void 0}},1327:(e,o,t)=>{var r=t(4536),s=Object.prototype.hasOwnProperty;e.exports=function(a){var n=this.__data__;return r?n[a]!==void 0:s.call(n,a)}},1866:(e,o,t)=>{var r=t(4536);e.exports=function(s,a){var n=this.__data__;return this.size+=this.has(s)?0:1,n[s]=r&&a===void 0?"__lodash_hash_undefined__":a,this}},5776:e=>{var o=/^(?:0|[1-9]\d*)$/;e.exports=function(t,r){var s=typeof t;return!!(r=r==null?9007199254740991:r)&&(s=="number"||s!="symbol"&&o.test(t))&&t>-1&&t%1==0&&t<r}},7019:e=>{e.exports=function(o){var t=typeof o;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?o!=="__proto__":o===null}},5346:(e,o,t)=>{var r,s=t(4429),a=(r=/[^.]+$/.exec(s&&s.keys&&s.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(n){return!!a&&a in n}},5726:e=>{var o=Object.prototype;e.exports=function(t){var r=t&&t.constructor;return t===(typeof r=="function"&&r.prototype||o)}},7040:e=>{e.exports=function(){this.__data__=[],this.size=0}},4125:(e,o,t)=>{var r=t(8470),s=Array.prototype.splice;e.exports=function(a){var n=this.__data__,u=r(n,a);return!(u<0||(u==n.length-1?n.pop():s.call(n,u,1),--this.size,0))}},2117:(e,o,t)=>{var r=t(8470);e.exports=function(s){var a=this.__data__,n=r(a,s);return n<0?void 0:a[n][1]}},7518:(e,o,t)=>{var r=t(8470);e.exports=function(s){return r(this.__data__,s)>-1}},4705:(e,o,t)=>{var r=t(8470);e.exports=function(s,a){var n=this.__data__,u=r(n,s);return u<0?(++this.size,n.push([s,a])):n[u][1]=a,this}},4785:(e,o,t)=>{var r=t(1989),s=t(8407),a=t(7071);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||s),string:new r}}},1285:(e,o,t)=>{var r=t(5050);e.exports=function(s){var a=r(this,s).delete(s);return this.size-=a?1:0,a}},6e3:(e,o,t)=>{var r=t(5050);e.exports=function(s){return r(this,s).get(s)}},9916:(e,o,t)=>{var r=t(5050);e.exports=function(s){return r(this,s).has(s)}},5265:(e,o,t)=>{var r=t(5050);e.exports=function(s,a){var n=r(this,s),u=n.size;return n.set(s,a),this.size+=n.size==u?0:1,this}},8776:e=>{e.exports=function(o){var t=-1,r=Array(o.size);return o.forEach(function(s,a){r[++t]=[a,s]}),r}},4536:(e,o,t)=>{var r=t(852)(Object,"create");e.exports=r},6916:(e,o,t)=>{var r=t(5569)(Object.keys,Object);e.exports=r},1167:(e,o,t)=>{e=t.nmd(e);var r=t(1957),s=o&&!o.nodeType&&o,a=s&&e&&!e.nodeType&&e,n=a&&a.exports===s&&r.process,u=function(){try{return a&&a.require&&a.require("util").types||n&&n.binding&&n.binding("util")}catch{}}();e.exports=u},2333:e=>{var o=Object.prototype.toString;e.exports=function(t){return o.call(t)}},5569:e=>{e.exports=function(o,t){return function(r){return o(t(r))}}},5639:(e,o,t)=>{var r=t(1957),s=typeof self=="object"&&self&&self.Object===Object&&self,a=r||s||Function("return this")();e.exports=a},619:e=>{e.exports=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this}},2385:e=>{e.exports=function(o){return this.__data__.has(o)}},1814:e=>{e.exports=function(o){var t=-1,r=Array(o.size);return o.forEach(function(s){r[++t]=s}),r}},7465:(e,o,t)=>{var r=t(8407);e.exports=function(){this.__data__=new r,this.size=0}},3779:e=>{e.exports=function(o){var t=this.__data__,r=t.delete(o);return this.size=t.size,r}},7599:e=>{e.exports=function(o){return this.__data__.get(o)}},4758:e=>{e.exports=function(o){return this.__data__.has(o)}},4309:(e,o,t)=>{var r=t(8407),s=t(7071),a=t(3369);e.exports=function(n,u){var c=this.__data__;if(c instanceof r){var l=c.__data__;if(!s||l.length<199)return l.push([n,u]),this.size=++c.size,this;c=this.__data__=new a(l)}return c.set(n,u),this.size=c.size,this}},346:e=>{var o=Function.prototype.toString;e.exports=function(t){if(t!=null){try{return o.call(t)}catch{}try{return t+""}catch{}}return""}},7813:e=>{e.exports=function(o,t){return o===t||o!=o&&t!=t}},5694:(e,o,t)=>{var r=t(9454),s=t(7005),a=Object.prototype,n=a.hasOwnProperty,u=a.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(l){return s(l)&&n.call(l,"callee")&&!u.call(l,"callee")};e.exports=c},1469:e=>{var o=Array.isArray;e.exports=o},8612:(e,o,t)=>{var r=t(3560),s=t(1780);e.exports=function(a){return a!=null&&s(a.length)&&!r(a)}},4144:(e,o,t)=>{e=t.nmd(e);var r=t(5639),s=t(5062),a=o&&!o.nodeType&&o,n=a&&e&&!e.nodeType&&e,u=n&&n.exports===a?r.Buffer:void 0,c=(u?u.isBuffer:void 0)||s;e.exports=c},8446:(e,o,t)=>{var r=t(939);e.exports=function(s,a){return r(s,a)}},3560:(e,o,t)=>{var r=t(4239),s=t(3218);e.exports=function(a){if(!s(a))return!1;var n=r(a);return n=="[object Function]"||n=="[object GeneratorFunction]"||n=="[object AsyncFunction]"||n=="[object Proxy]"}},1780:e=>{e.exports=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991}},3218:e=>{e.exports=function(o){var t=typeof o;return o!=null&&(t=="object"||t=="function")}},7005:e=>{e.exports=function(o){return o!=null&&typeof o=="object"}},6719:(e,o,t)=>{var r=t(8749),s=t(1717),a=t(1167),n=a&&a.isTypedArray,u=n?s(n):r;e.exports=u},3674:(e,o,t)=>{var r=t(4636),s=t(280),a=t(8612);e.exports=function(n){return a(n)?r(n):s(n)}},479:e=>{e.exports=function(){return[]}},5062:e=>{e.exports=function(){return!1}},75:function(e){(function(){var o,t,r,s,a,n;typeof performance!="undefined"&&performance!==null&&performance.now?e.exports=function(){return performance.now()}:typeof process!="undefined"&&process!==null&&process.hrtime?(e.exports=function(){return(o()-a)/1e6},t=process.hrtime,s=(o=function(){var u;return 1e9*(u=t())[0]+u[1]})(),n=1e9*process.uptime(),a=s-n):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return new Date().getTime()-r},r=new Date().getTime())}).call(this)},4087:(e,o,t)=>{for(var r=t(75),s=typeof window=="undefined"?t.g:window,a=["moz","webkit"],n="AnimationFrame",u=s["request"+n],c=s["cancel"+n]||s["cancelRequest"+n],l=0;!u&&l<a.length;l++)u=s[a[l]+"Request"+n],c=s[a[l]+"Cancel"+n]||s[a[l]+"CancelRequest"+n];if(!u||!c){var v=0,p=0,d=[];u=function(b){if(d.length===0){var T=r(),h=Math.max(0,16.666666666666668-(T-v));v=h+T,setTimeout(function(){var f=d.slice(0);d.length=0;for(var g=0;g<f.length;g++)if(!f[g].cancelled)try{f[g].callback(v)}catch(w){setTimeout(function(){throw w},0)}},Math.round(h))}return d.push({handle:++p,callback:b,cancelled:!1}),p},c=function(b){for(var T=0;T<d.length;T++)d[T].handle===b&&(d[T].cancelled=!0)}}e.exports=function(b){return u.call(s,b)},e.exports.cancel=function(){c.apply(s,arguments)},e.exports.polyfill=function(b){b||(b=s),b.requestAnimationFrame=u,b.cancelAnimationFrame=c}},8156:e=>{e.exports=Z}},tt={};function R(e){var o=tt[e];if(o!==void 0)return o.exports;var t=tt[e]={id:e,loaded:!1,exports:{}};return $[e].call(t.exports,t,t.exports,R),t.loaded=!0,t.exports}R.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return R.d(o,{a:o}),o},R.d=(e,o)=>{for(var t in o)R.o(o,t)&&!R.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},R.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),R.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),R.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var et={};return(()=>{R.d(et,{default:()=>T});var e=R(8156),o=R.n(e),t=R(7403),r=R(8446),s=R.n(r);function a(h){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},a(h)}function n(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function u(h,f){for(var g=0;g<f.length;g++){var w=f[g];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(h,w.key,w)}}function c(h,f){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(g,w){return g.__proto__=w,g},c(h,f)}function l(h,f){if(f&&(a(f)==="object"||typeof f=="function"))return f;if(f!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(h)}function v(h){if(h===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h}function p(h){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(f){return f.__proto__||Object.getPrototypeOf(f)},p(h)}function d(h,f,g){return f in h?Object.defineProperty(h,f,{value:g,enumerable:!0,configurable:!0,writable:!0}):h[f]=g,h}var b=function(h){(function(O,j){if(typeof j!="function"&&j!==null)throw new TypeError("Super expression must either be null or a function");O.prototype=Object.create(j&&j.prototype,{constructor:{value:O,writable:!0,configurable:!0}}),Object.defineProperty(O,"prototype",{writable:!1}),j&&c(O,j)})(P,h);var f,g,w,N,_=(w=P,N=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var O,j=p(w);if(N){var k=p(this).constructor;O=Reflect.construct(j,arguments,k)}else O=j.apply(this,arguments);return l(this,O)});function P(){var O;n(this,P);for(var j=arguments.length,k=new Array(j),A=0;A<j;A++)k[A]=arguments[A];return d(v(O=_.call.apply(_,[this].concat(k))),"state",{instance:null}),O}return f=P,(g=[{key:"componentDidMount",value:function(){var O=this,j=new t.default(this.typewriter,this.props.options);this.setState({instance:j},function(){var k=O.props.onInit;k&&k(j)})}},{key:"componentDidUpdate",value:function(O){s()(this.props.options,O.options)||this.setState({instance:new t.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var O=this,j=this.props.component;return o().createElement(j,{ref:function(k){return O.typewriter=k},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&u(f.prototype,g),Object.defineProperty(f,"prototype",{writable:!1}),P}(e.Component);b.defaultProps={component:"div"};const T=b})(),et.default})())})(ut);var Ot=gt(ut.exports);function Tt(){return I("footer",{className:"relative",children:[C("div",{className:"absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]",children:I("svg",{"aria-hidden":"true",className:"absolute inset-0 w-full h-full",children:[C("defs",{children:C("pattern",{id:":Rf6:",width:64,height:64,patternUnits:"userSpaceOnUse",x:"50%",children:C("path",{d:"M0 128V.5H128",fill:"none",stroke:"currentColor"})})}),C("rect",{width:"100%",height:"100%",fill:"url(#:Rf6:)"})]})}),C("div",{className:"px-4 mx-auto sm:px-6",children:I("div",{className:"grid gap-8 py-8 border-t border-gray-200 sm:grid-cols-12 md:py-12",children:[I("div",{className:"sm:col-span-12 lg:col-span-3",children:[C("div",{className:"mb-2",children:C(U,{href:"/",className:"inline-block","aria-label":"Cruip",children:C("img",{className:"w-8 h-8",src:_t,alt:"logo"})})}),I("div",{className:"text-sm text-gray-600",children:[C(U,{href:"/",className:"text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline",children:"Terms"})," ","\xB7"," ",C(U,{href:"/",className:"text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline",children:"Privacy Policy"})]})]}),I("ul",{className:"flex mb-4 md:order-1 md:ml-4 md:mb-0",children:[C("li",{children:C(U,{href:"/",className:"flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100","aria-label":"Twitter",children:C("svg",{className:"w-8 h-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:C("path",{d:"M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"})})})}),C("li",{className:"ml-4",children:C(U,{href:"/",className:"flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100","aria-label":"Instagram",children:I("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-8 h-8 p-[5px] icon icon-tabler icon-tabler-brand-instagram",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[C("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),C("path",{d:"M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"}),C("path",{d:"M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}),C("path",{d:"M16.5 7.5l0 .01"})]})})}),C("li",{className:"ml-4",children:C(U,{href:"/",className:"flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100","aria-label":"Facebook",children:C("svg",{className:"w-8 h-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:C("path",{d:"M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"})})})}),C("li",{className:"ml-4",children:C("a",{href:"https://api.whatsapp.com/send?phone=08750920304",className:"flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100","aria-label":"Whatsapp",children:I("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-8 h-8 p-[6px] font-extrabold icon icon-tabler icon-tabler-brand-whatsapp",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[C("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),C("path",{d:"M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"}),C("path",{d:"M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"})]})})})]})]})})]})}export{Tt as F,Ot as T};