!function(){const e=document.createElement("style");e.textContent="#mainContainer {\n\tposition: relative;\n\twidth: 640px;\n\theight: 360px;\n}\n\n#content,\n#adContainer {\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\twidth: 640px;\n\theight: 360px;\n}\n\n#contentElement {\n\twidth: 640px;\n\theight: 360px;\n\toverflow: hidden;\n}\n\n#playButton {\n\tmargin-top: 10px;\n\tvertical-align: top;\n\twidth: 350px;\n\theight: 60px;\n\tpadding: 0;\n\tfont-size: 22px;\n\tcolor: white;\n\ttext-align: center;\n\ttext-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\n\tbackground: #2c3e50;\n\tborder: 0;\n\tborder-bottom: 2px solid #22303f;\n\tcursor: pointer;\n\t-webkit-box-shadow: inset 0 -2px #22303f;\n\tbox-shadow: inset 0 -2px #22303f;\n}\n",document.head.appendChild(e)}();var V,m,he,Ve,x,ce,me,ve,ge,Y,J,X,$e,U={},ye=[],ze=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,$=Array.isArray;function w(e,t){for(var n in t)e[n]=t[n];return e}function Z(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function A(e,t,n){var _,o,r,i={};for(r in t)"key"==r?_=t[r]:"ref"==r?o=t[r]:i[r]=t[r];if(arguments.length>2&&(i.children=arguments.length>3?V.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===i[r]&&(i[r]=e.defaultProps[r]);return q(e,i,_,o,null)}function q(e,t,n,_,o){var r={type:e,props:t,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++he,__i:-1,__u:0};return null==o&&null!=m.vnode&&m.vnode(r),r}function b(e){return e.children}function B(e,t){this.props=e,this.context=t}function D(e,t){if(null==t)return e.__?D(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?D(e):null}function Ee(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return Ee(e)}}function fe(e){(!e.__d&&(e.__d=!0)&&x.push(e)&&!j.__r++||ce!==m.debounceRendering)&&((ce=m.debounceRendering)||me)(j)}function j(){for(var e,t,n,_,o,r,i,l=1;x.length;)x.length>l&&x.sort(ve),e=x.shift(),l=x.length,e.__d&&(n=void 0,o=(_=(t=e).__v).__e,r=[],i=[],t.__P&&((n=w({},_)).__v=_.__v+1,m.vnode&&m.vnode(n),ee(t.__P,n,_,t.__n,t.__P.namespaceURI,32&_.__u?[o]:null,r,o??D(_),!!(32&_.__u),i),n.__v=_.__v,n.__.__k[n.__i]=n,ke(r,n,i),n.__e!=o&&Ee(n)));j.__r=0}function Ae(e,t,n,_,o,r,i,l,u,c,a){var s,f,p,d,h,v,m=_&&_.__k||ye,g=t.length;for(u=Ke(n,t,m,u,g),s=0;s<g;s++)null!=(p=n.__k[s])&&(f=-1===p.__i?U:m[p.__i]||U,p.__i=s,v=ee(e,p,f,o,r,i,l,u,c,a),d=p.__e,p.ref&&f.ref!=p.ref&&(f.ref&&te(f.ref,null,p),a.push(p.ref,p.__c||d,p)),null==h&&null!=d&&(h=d),4&p.__u||f.__k===p.__k?u=be(p,u,e):"function"==typeof p.type&&void 0!==v?u=v:d&&(u=d.nextSibling),p.__u&=-7);return n.__e=h,u}function Ke(e,t,n,_,o){var r,i,l,u,c,a=n.length,s=a,f=0;for(e.__k=new Array(o),r=0;r<o;r++)null!=(i=t[r])&&"boolean"!=typeof i&&"function"!=typeof i?(u=r+f,(i=e.__k[r]="string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?q(null,i,null,null,null):$(i)?q(b,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?q(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=e,i.__b=e.__b+1,l=null,-1!==(c=i.__i=Ge(i,n,u,s))&&(s--,(l=n[c])&&(l.__u|=2)),null==l||null===l.__v?(-1==c&&(o>a?f--:o<a&&f++),"function"!=typeof i.type&&(i.__u|=4)):c!=u&&(c==u-1?f--:c==u+1?f++:(c>u?f--:f++,i.__u|=4))):e.__k[r]=null;if(s)for(r=0;r<a;r++)null!=(l=n[r])&&!(2&l.__u)&&(l.__e==_&&(_=D(l)),Te(l,l));return _}function be(e,t,n){var _,o;if("function"==typeof e.type){for(_=e.__k,o=0;_&&o<_.length;o++)_[o]&&(_[o].__=e,t=be(_[o],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=D(e)),n.insertBefore(e.__e,t||null),t=e.__e);do{t=t&&t.nextSibling}while(null!=t&&8==t.nodeType);return t}function Ge(e,t,n,_){var o,r,i=e.key,l=e.type,u=t[n];if(null===u&&null==e.key||u&&i==u.key&&l===u.type&&!(2&u.__u))return n;if(_>(null==u||2&u.__u?0:1))for(o=n-1,r=n+1;o>=0||r<t.length;){if(o>=0){if((u=t[o])&&!(2&u.__u)&&i==u.key&&l===u.type)return o;o--}if(r<t.length){if((u=t[r])&&!(2&u.__u)&&i==u.key&&l===u.type)return r;r++}}return-1}function de(e,t,n){"-"==t[0]?e.setProperty(t,n??""):e[t]=null==n?"":"number"!=typeof n||ze.test(t)?n:n+"px"}function W(e,t,n,_,o){var r;e:if("style"==t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||de(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||de(e.style,t,n[t])}else if("o"==t[0]&&"n"==t[1])r=t!=(t=t.replace(ge,"$1")),t=t.toLowerCase()in e||"onFocusOut"==t||"onFocusIn"==t?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?_?n.t=_.t:(n.t=Y,e.addEventListener(t,r?X:J,r)):e.removeEventListener(t,r?X:J,r);else{if("http://www.w3.org/2000/svg"==o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=t&&"height"!=t&&"href"!=t&&"list"!=t&&"form"!=t&&"tabIndex"!=t&&"download"!=t&&"rowSpan"!=t&&"colSpan"!=t&&"role"!=t&&"popover"!=t&&t in e)try{e[t]=n??"";break e}catch{}"function"==typeof n||(null==n||!1===n&&"-"!=t[4]?e.removeAttribute(t):e.setAttribute(t,"popover"==t&&1==n?"":n))}}function pe(e){return function(t){if(this.l){var n=this.l[t.type+e];if(null==t.u)t.u=Y++;else if(t.u<n.t)return;return n(m.event?m.event(t):t)}}}function ee(e,t,n,_,o,r,i,l,u,c){var a,s,f,p,d,h,v,g,y,E,A,k,x,C,S,T,D,L=t.type;if(void 0!==t.constructor)return null;128&n.__u&&(u=!!(32&n.__u),r=[l=t.__e=n.__e]),(a=m.__b)&&a(t);e:if("function"==typeof L)try{if(g=t.props,y="prototype"in L&&L.prototype.render,E=(a=L.contextType)&&_[a.__c],A=a?E?E.props.value:a.__:_,n.__c?v=(s=t.__c=n.__c).__=s.__E:(y?t.__c=s=new L(g,A):(t.__c=s=new B(g,A),s.constructor=L,s.render=Je),E&&E.sub(s),s.props=g,s.state||(s.state={}),s.context=A,s.__n=_,f=s.__d=!0,s.__h=[],s._sb=[]),y&&null==s.__s&&(s.__s=s.state),y&&null!=L.getDerivedStateFromProps&&(s.__s==s.state&&(s.__s=w({},s.__s)),w(s.__s,L.getDerivedStateFromProps(g,s.__s))),p=s.props,d=s.state,s.__v=t,f)y&&null==L.getDerivedStateFromProps&&null!=s.componentWillMount&&s.componentWillMount(),y&&null!=s.componentDidMount&&s.__h.push(s.componentDidMount);else{if(y&&null==L.getDerivedStateFromProps&&g!==p&&null!=s.componentWillReceiveProps&&s.componentWillReceiveProps(g,A),!s.__e&&(null!=s.shouldComponentUpdate&&!1===s.shouldComponentUpdate(g,s.__s,A)||t.__v==n.__v)){for(t.__v!=n.__v&&(s.props=g,s.state=s.__s,s.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some((function(e){e&&(e.__=t)})),k=0;k<s._sb.length;k++)s.__h.push(s._sb[k]);s._sb=[],s.__h.length&&i.push(s);break e}null!=s.componentWillUpdate&&s.componentWillUpdate(g,s.__s,A),y&&null!=s.componentDidUpdate&&s.__h.push((function(){s.componentDidUpdate(p,d,h)}))}if(s.context=A,s.props=g,s.__P=e,s.__e=!1,x=m.__r,C=0,y){for(s.state=s.__s,s.__d=!1,x&&x(t),a=s.render(s.props,s.state,s.context),S=0;S<s._sb.length;S++)s.__h.push(s._sb[S]);s._sb=[]}else do{s.__d=!1,x&&x(t),a=s.render(s.props,s.state,s.context),s.state=s.__s}while(s.__d&&++C<25);s.state=s.__s,null!=s.getChildContext&&(_=w(w({},_),s.getChildContext())),y&&!f&&null!=s.getSnapshotBeforeUpdate&&(h=s.getSnapshotBeforeUpdate(p,d)),T=a,null!=a&&a.type===b&&null==a.key&&(T=Ce(a.props.children)),l=Ae(e,$(T)?T:[T],t,n,_,o,r,i,l,u,c),s.base=t.__e,t.__u&=-161,s.__h.length&&i.push(s),v&&(s.__E=s.__=null)}catch(e){if(t.__v=null,u||null!=r)if(e.then){for(t.__u|=u?160:128;l&&8==l.nodeType&&l.nextSibling;)l=l.nextSibling;r[r.indexOf(l)]=null,t.__e=l}else for(D=r.length;D--;)Z(r[D]);else t.__e=n.__e,t.__k=n.__k;m.__e(e,t,n)}else null==r&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=Qe(n.__e,t,n,_,o,r,i,u,c);return(a=m.diffed)&&a(t),128&t.__u?void 0:l}function ke(e,t,n){for(var _=0;_<n.length;_++)te(n[_],n[++_],n[++_]);m.__c&&m.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){m.__e(e,t.__v)}}))}function Ce(e){return"object"!=typeof e||null==e?e:$(e)?e.map(Ce):w({},e)}function Qe(e,t,n,_,o,r,i,l,u){var c,a,s,f,p,d,h,v=n.props,g=t.props,y=t.type;if("svg"==y?o="http://www.w3.org/2000/svg":"math"==y?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=r)for(c=0;c<r.length;c++)if((p=r[c])&&"setAttribute"in p==!!y&&(y?p.localName==y:3==p.nodeType)){e=p,r[c]=null;break}if(null==e){if(null==y)return document.createTextNode(g);e=document.createElementNS(o,y,g.is&&g),l&&(m.__m&&m.__m(t,r),l=!1),r=null}if(null===y)v===g||l&&e.data===g||(e.data=g);else{if(r=r&&V.call(e.childNodes),v=n.props||U,!l&&null!=r)for(v={},c=0;c<e.attributes.length;c++)v[(p=e.attributes[c]).name]=p.value;for(c in v)if(p=v[c],"children"!=c)if("dangerouslySetInnerHTML"==c)s=p;else if(!(c in g)){if("value"==c&&"defaultValue"in g||"checked"==c&&"defaultChecked"in g)continue;W(e,c,null,p,o)}for(c in g)p=g[c],"children"==c?f=p:"dangerouslySetInnerHTML"==c?a=p:"value"==c?d=p:"checked"==c?h=p:l&&"function"!=typeof p||v[c]===p||W(e,c,p,v[c],o);if(a)l||s&&(a.__html===s.__html||a.__html===e.innerHTML)||(e.innerHTML=a.__html),t.__k=[];else if(s&&(e.innerHTML=""),Ae("template"===t.type?e.content:e,$(f)?f:[f],t,n,_,"foreignObject"==y?"http://www.w3.org/1999/xhtml":o,r,i,r?r[0]:n.__k&&D(n,0),l,u),null!=r)for(c=r.length;c--;)Z(r[c]);l||(c="value","progress"==y&&null==d?e.removeAttribute("value"):void 0!==d&&(d!==e[c]||"progress"==y&&!d||"option"==y&&d!==v[c])&&W(e,c,d,v[c],o),c="checked",void 0!==h&&h!==e[c]&&W(e,c,h,v[c],o))}return e}function te(e,t,n){try{if("function"==typeof e){var _="function"==typeof e.__u;_&&e.__u(),_&&null==t||(e.__u=e(t))}else e.current=t}catch(e){m.__e(e,n)}}function Te(e,t,n){var _,o;if(m.unmount&&m.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||te(_,null,t)),null!=(_=e.__c)){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(e){m.__e(e,t)}_.base=_.__P=null}if(_=e.__k)for(o=0;o<_.length;o++)_[o]&&Te(_[o],t,n||"function"!=typeof e.type);n||Z(e.__e),e.__c=e.__=e.__e=void 0}function Je(e,t,n){return this.constructor(e,n)}function Se(e,t,n){var _,o,r,i;t==document&&(t=document.documentElement),m.__&&m.__(e,t),o=(_="function"==typeof n)?null:n&&n.__k||t.__k,r=[],i=[],ee(t,e=(!_&&n||t).__k=A(b,null,[e]),o||U,U,t.namespaceURI,!_&&n?[n]:o?null:t.firstChild?V.call(t.childNodes):null,r,!_&&n?n:o?o.__e:t.firstChild,_,i),ke(r,e,i)}V=ye.slice,m={__e:function(e,t,n,_){for(var o,r,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((r=o.constructor)&&null!=r.getDerivedStateFromError&&(o.setState(r.getDerivedStateFromError(e)),i=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,_||{}),i=o.__d),i)return o.__E=o}catch(t){e=t}throw e}},he=0,Ve=function(e){return null!=e&&null==e.constructor},B.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=w({},this.state),"function"==typeof e&&(e=e(w({},n),this.props)),e&&w(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),fe(this))},B.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),fe(this))},B.prototype.render=b,x=[],me="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ve=function(e,t){return e.__v.__b-t.__v.__b},j.__r=0,ge=/(PointerCapture)$|Capture$/i,Y=0,J=pe(!1),X=pe(!0),$e=0;var N,v,_e,we,K=0,Ue=[],g=m,Le=g.__b,xe=g.__r,De=g.diffed,Pe=g.__c,He=g.unmount,Re=g.__;function oe(e,t){g.__h&&g.__h(v,e,K||t),K=0;var n=v.__H||(v.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Ne(e){return K=1,Xe(Oe,e)}function Xe(e,t,n){var _=oe(N++,2);if(_.t=e,!_.__c&&(_.__=[n?n(t):Oe(void 0,t),function(e){var t=_.__N?_.__N[0]:_.__[0],n=_.t(t,e);t!==n&&(_.__N=[n,_.__[1]],_.__c.setState({}))}],_.__c=v,!v.__f)){var o=function(e,t,n){if(!_.__c.__H)return!0;var o=_.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!r||r.call(this,e,t,n);var i=_.__c.props!==e;return o.forEach((function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(i=!0)}})),r&&r.call(this,e,t,n)||i};v.__f=!0;var r=v.shouldComponentUpdate,i=v.componentWillUpdate;v.componentWillUpdate=function(e,t,n){if(this.__e){var _=r;r=void 0,o(e,t,n),r=_}i&&i.call(this,e,t,n)},v.shouldComponentUpdate=o}return _.__N||_.__}function Ie(e,t){var n=oe(N++,3);!g.__s&&Fe(n.__H,t)&&(n.__=e,n.u=t,v.__H.__h.push(n))}function re(e){return K=5,Ye((function(){return{current:e}}),[])}function Ye(e,t){var n=oe(N++,7);return Fe(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Ze(){for(var e;e=Ue.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(z),e.__H.__h.forEach(ne),e.__H.__h=[]}catch(t){e.__H.__h=[],g.__e(t,e.__v)}}g.__b=function(e){v=null,Le&&Le(e)},g.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Re&&Re(e,t)},g.__r=function(e){xe&&xe(e),N=0;var t=(v=e.__c).__H;t&&(_e===v?(t.__h=[],v.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0}))):(t.__h.forEach(z),t.__h.forEach(ne),t.__h=[],N=0)),_e=v},g.diffed=function(e){De&&De(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==Ue.push(t)&&we===g.requestAnimationFrame||((we=g.requestAnimationFrame)||et)(Ze)),t.__H.__.forEach((function(e){e.u&&(e.__H=e.u),e.u=void 0}))),_e=v=null},g.__c=function(e,t){t.some((function(e){try{e.__h.forEach(z),e.__h=e.__h.filter((function(e){return!e.__||ne(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],g.__e(n,e.__v)}})),Pe&&Pe(e,t)},g.unmount=function(e){He&&He(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{z(e)}catch(e){t=e}})),n.__H=void 0,t&&g.__e(t,n.__v))};var C,I,ie,We,ue,qe,S,Me="function"==typeof requestAnimationFrame;function et(e){var t,n=function(){clearTimeout(_),Me&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);Me&&(t=requestAnimationFrame(n))}function z(e){var t=v,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),v=t}function ne(e){var t=v;e.__c=e.__(),v=t}function Fe(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function Oe(e,t){return"function"==typeof t?t(e):t}function Be(){(S=document.getElementById("contentElement")).muted=!0,tt()}function tt(){_t(),(I=new google.ima.AdsLoader(ie)).addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,ot,!1),I.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,je,!1),S.onended=function(){ue||(qe=!0,I.contentComplete())};let e=new google.ima.AdsRequest;e.adTagUrl="https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_ad_samples&sz=640x480&cust_params=sample_ct%3Dlinear&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=",e.linearAdSlotWidth=640,e.linearAdSlotHeight=400,e.nonLinearAdSlotWidth=640,e.nonLinearAdSlotHeight=150,I.requestAds(e)}function _t(){ie=new google.ima.AdDisplayContainer(document.getElementById("adContainer"),S)}function nt(){S.load(),ie.initialize();try{C.init(640,360,google.ima.ViewMode.NORMAL),C.start()}catch{S.play()}}function ot(e){let t=new google.ima.AdsRenderingSettings;t.restoreCustomPlaybackStateOnAdBreakComplete=!0,(C=e.getAdsManager(S,t)).addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,je),C.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,rt),C.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,it),C.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED,G),C.addEventListener(google.ima.AdEvent.Type.LOADED,G),C.addEventListener(google.ima.AdEvent.Type.STARTED,G),C.addEventListener(google.ima.AdEvent.Type.COMPLETE,G),nt()}function G(e){let t=e.getAd();switch(e.type){case google.ima.AdEvent.Type.LOADED:t.isLinear()||S.play();break;case google.ima.AdEvent.Type.STARTED:t.isLinear()&&(We=setInterval((function(){}),300));break;case google.ima.AdEvent.Type.COMPLETE:t.isLinear()&&clearInterval(We)}}function je(e){console.log(e.getError()),C.destroy()}function rt(){ue=!0,S.pause()}function it(){ue=!1,qe||S.play()}function le(){let e=re(),t=re(),[n,_]=Ne(!1);return Ie((()=>{n||function(e,t=document.head,n=()=>{}){let _=document.createElement("script");_.src=e,_.onload=n,t.appendChild(_)}("https://imasdk.googleapis.com/js/sdkloader/ima3.js",document.head,(()=>_(!0))),n&&Be()}),[n]),A(b,null,A("div",{id:"mainContainer"},A("div",{id:"content"},A("video",{ref:e,id:"contentElement"},A("source",{src:""}))),A("div",{ref:t,id:"adContainer"})))}function ae(e){return A(le,null)}Se(A(ae,null),document.getElementById("app"));
