(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[763],{1385:function(e,t,n){"use strict";n.d(t,{C8:function(){return o},dK:function(){return a},mq:function(){return i}});var r=n(7294),o=r.createContext(),i=r.createContext();function a(e){var t=e.children,n=r.useState(null),a=n[0],s=n[1],f=r.useRef(!1);r.useEffect((function(){return function(){f.current=!0}}),[]);var u=r.useCallback((function(e){f.current||s(e)}),[]);return r.createElement(o.Provider,{value:a},r.createElement(i.Provider,{value:u},t))}},2981:function(e,t,n){"use strict";n.d(t,{r:function(){return je}});var r=n(7294),o=n(1385),i=n(7139),a=n(3935);function s(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function f(e){return e instanceof s(e).Element||e instanceof Element}function u(e){return e instanceof s(e).HTMLElement||e instanceof HTMLElement}function c(e){return"undefined"!==typeof ShadowRoot&&(e instanceof s(e).ShadowRoot||e instanceof ShadowRoot)}var p=Math.max,l=Math.min,d=Math.round;function m(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(u(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=d(n.width)/a||1),i>0&&(o=d(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function h(e){var t=s(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function v(e){return e?(e.nodeName||"").toLowerCase():null}function y(e){return((f(e)?e.ownerDocument:e.document)||window.document).documentElement}function g(e){return m(y(e)).left+h(e).scrollLeft}function b(e){return s(e).getComputedStyle(e)}function w(e){var t=b(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function x(e,t,n){void 0===n&&(n=!1);var r=u(t),o=u(t)&&function(e){var t=e.getBoundingClientRect(),n=d(t.width)/e.offsetWidth||1,r=d(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=y(t),a=m(e,o),f={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==v(t)||w(i))&&(f=function(e){return e!==s(e)&&u(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:h(e);var t}(t)),u(t)?((c=m(t,!0)).x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=g(i))),{x:a.left+f.scrollLeft-c.x,y:a.top+f.scrollTop-c.y,width:a.width,height:a.height}}function O(e){var t=m(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function E(e){return"html"===v(e)?e:e.assignedSlot||e.parentNode||(c(e)?e.host:null)||y(e)}function j(e){return["html","body","#document"].indexOf(v(e))>=0?e.ownerDocument.body:u(e)&&w(e)?e:j(E(e))}function A(e,t){var n;void 0===t&&(t=[]);var r=j(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=s(r),a=o?[i].concat(i.visualViewport||[],w(r)?r:[]):r,f=t.concat(a);return o?f:f.concat(A(E(a)))}function k(e){return["table","td","th"].indexOf(v(e))>=0}function D(e){return u(e)&&"fixed"!==b(e).position?e.offsetParent:null}function P(e){for(var t=s(e),n=D(e);n&&k(n)&&"static"===b(n).position;)n=D(n);return n&&("html"===v(n)||"body"===v(n)&&"static"===b(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&u(e)&&"fixed"===b(e).position)return null;var n=E(e);for(c(n)&&(n=n.host);u(n)&&["html","body"].indexOf(v(n))<0;){var r=b(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var L="top",M="bottom",S="right",R="left",B="auto",C=[L,M,S,R],W="start",H="end",q="viewport",U="popper",T=C.reduce((function(e,t){return e.concat([t+"-"+W,t+"-"+H])}),[]),V=[].concat(C,[B]).reduce((function(e,t){return e.concat([t,t+"-"+W,t+"-"+H])}),[]),_=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function F(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function N(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var $={placement:"bottom",modifiers:[],strategy:"absolute"};function I(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function z(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?$:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},$,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,u={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;c(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:f(e)?A(e):e.contextElement?A(e.contextElement):[],popper:A(t)};var p=function(e){var t=F(e);return _.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=p.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:u,options:r}),f=function(){};a.push(s||f)}})),u.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(I(t,n)){o.rects={reference:x(t,P(n),"fixed"===o.options.strategy),popper:O(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,f=i.options,c=void 0===f?{}:f,p=i.name;"function"===typeof a&&(o=a({state:o,options:c,name:p,instance:u})||o)}else o.reset=!1,r=-1}}},update:N((function(){return new Promise((function(e){u.forceUpdate(),e(o)}))})),destroy:function(){c(),s=!0}};if(!I(e,t))return u;function c(){a.forEach((function(e){return e()})),a=[]}return u.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var X={passive:!0};function Y(e){return e.split("-")[0]}function K(e){return e.split("-")[1]}function G(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function J(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?Y(o):null,a=o?K(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case L:t={x:s,y:n.y-r.height};break;case M:t={x:s,y:n.y+n.height};break;case S:t={x:n.x+n.width,y:f};break;case R:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var u=i?G(i):null;if(null!=u){var c="y"===u?"height":"width";switch(a){case W:t[u]=t[u]-(n[c]/2-r[c]/2);break;case H:t[u]=t[u]+(n[c]/2-r[c]/2)}}return t}var Q={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Z(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,f=e.position,u=e.gpuAcceleration,c=e.adaptive,p=e.roundOffsets,l=e.isFixed,m=a.x,h=void 0===m?0:m,v=a.y,g=void 0===v?0:v,w="function"===typeof p?p({x:h,y:g}):{x:h,y:g};h=w.x,g=w.y;var x=a.hasOwnProperty("x"),O=a.hasOwnProperty("y"),E=R,j=L,A=window;if(c){var k=P(n),D="clientHeight",B="clientWidth";if(k===s(n)&&"static"!==b(k=y(n)).position&&"absolute"===f&&(D="scrollHeight",B="scrollWidth"),k=k,o===L||(o===R||o===S)&&i===H)j=M,g-=(l&&k===A&&A.visualViewport?A.visualViewport.height:k[D])-r.height,g*=u?1:-1;if(o===R||(o===L||o===M)&&i===H)E=S,h-=(l&&k===A&&A.visualViewport?A.visualViewport.width:k[B])-r.width,h*=u?1:-1}var C,W=Object.assign({position:f},c&&Q),q=!0===p?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:d(t*r)/r||0,y:d(n*r)/r||0}}({x:h,y:g}):{x:h,y:g};return h=q.x,g=q.y,u?Object.assign({},W,((C={})[j]=O?"0":"",C[E]=x?"0":"",C.transform=(A.devicePixelRatio||1)<=1?"translate("+h+"px, "+g+"px)":"translate3d("+h+"px, "+g+"px, 0)",C)):Object.assign({},W,((t={})[j]=O?g+"px":"",t[E]=x?h+"px":"",t.transform="",t))}var ee={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=V.reduce((function(e,n){return e[n]=function(e,t,n){var r=Y(e),o=[R,L].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[R,S].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},te={left:"right",right:"left",bottom:"top",top:"bottom"};function ne(e){return e.replace(/left|right|bottom|top/g,(function(e){return te[e]}))}var re={start:"end",end:"start"};function oe(e){return e.replace(/start|end/g,(function(e){return re[e]}))}function ie(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&c(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ae(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function se(e,t){return t===q?ae(function(e){var t=s(e),n=y(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,f=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,f=r.offsetTop)),{width:o,height:i,x:a+g(e),y:f}}(e)):f(t)?function(e){var t=m(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ae(function(e){var t,n=y(e),r=h(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=p(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=p(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+g(e),f=-r.scrollTop;return"rtl"===b(o||n).direction&&(s+=p(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(y(e)))}function fe(e,t,n){var r="clippingParents"===t?function(e){var t=A(E(e)),n=["absolute","fixed"].indexOf(b(e).position)>=0&&u(e)?P(e):e;return f(n)?t.filter((function(e){return f(e)&&ie(e,n)&&"body"!==v(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=se(e,n);return t.top=p(r.top,t.top),t.right=l(r.right,t.right),t.bottom=l(r.bottom,t.bottom),t.left=p(r.left,t.left),t}),se(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ue(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ce(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function pe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,u=void 0===s?q:s,c=n.elementContext,p=void 0===c?U:c,l=n.altBoundary,d=void 0!==l&&l,h=n.padding,v=void 0===h?0:h,g=ue("number"!==typeof v?v:ce(v,C)),b=p===U?"reference":U,w=e.rects.popper,x=e.elements[d?b:p],O=fe(f(x)?x:x.contextElement||y(e.elements.popper),a,u),E=m(e.elements.reference),j=J({reference:E,element:w,strategy:"absolute",placement:o}),A=ae(Object.assign({},w,j)),k=p===U?A:E,D={top:O.top-k.top+g.top,bottom:k.bottom-O.bottom+g.bottom,left:O.left-k.left+g.left,right:k.right-O.right+g.right},P=e.modifiersData.offset;if(p===U&&P){var R=P[o];Object.keys(D).forEach((function(e){var t=[S,M].indexOf(e)>=0?1:-1,n=[L,M].indexOf(e)>=0?"y":"x";D[e]+=R[n]*t}))}return D}function le(e,t,n){return p(e,l(t,n))}var de={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,u=n.rootBoundary,c=n.altBoundary,d=n.padding,m=n.tether,h=void 0===m||m,v=n.tetherOffset,y=void 0===v?0:v,g=pe(t,{boundary:f,rootBoundary:u,padding:d,altBoundary:c}),b=Y(t.placement),w=K(t.placement),x=!w,E=G(b),j="x"===E?"y":"x",A=t.modifiersData.popperOffsets,k=t.rects.reference,D=t.rects.popper,B="function"===typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,C="number"===typeof B?{mainAxis:B,altAxis:B}:Object.assign({mainAxis:0,altAxis:0},B),H=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,q={x:0,y:0};if(A){if(i){var U,T="y"===E?L:R,V="y"===E?M:S,_="y"===E?"height":"width",F=A[E],N=F+g[T],$=F-g[V],I=h?-D[_]/2:0,z=w===W?k[_]:D[_],X=w===W?-D[_]:-k[_],J=t.elements.arrow,Q=h&&J?O(J):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Z[T],te=Z[V],ne=le(0,k[_],Q[_]),re=x?k[_]/2-I-ne-ee-C.mainAxis:z-ne-ee-C.mainAxis,oe=x?-k[_]/2+I+ne+te+C.mainAxis:X+ne+te+C.mainAxis,ie=t.elements.arrow&&P(t.elements.arrow),ae=ie?"y"===E?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(U=null==H?void 0:H[E])?U:0,fe=F+oe-se,ue=le(h?l(N,F+re-se-ae):N,F,h?p($,fe):$);A[E]=ue,q[E]=ue-F}if(s){var ce,de="x"===E?L:R,me="x"===E?M:S,he=A[j],ve="y"===j?"height":"width",ye=he+g[de],ge=he-g[me],be=-1!==[L,R].indexOf(b),we=null!=(ce=null==H?void 0:H[j])?ce:0,xe=be?ye:he-k[ve]-D[ve]-we+C.altAxis,Oe=be?he+k[ve]+D[ve]-we-C.altAxis:ge,Ee=h&&be?function(e,t,n){var r=le(e,t,n);return r>n?n:r}(xe,he,Oe):le(h?xe:ye,he,h?Oe:ge);A[j]=Ee,q[j]=Ee-he}t.modifiersData[r]=q}},requiresIfExists:["offset"]};var me={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=Y(n.placement),f=G(s),u=[R,S].indexOf(s)>=0?"height":"width";if(i&&a){var c=function(e,t){return ue("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ce(e,C))}(o.padding,n),p=O(i),l="y"===f?L:R,d="y"===f?M:S,m=n.rects.reference[u]+n.rects.reference[f]-a[f]-n.rects.popper[u],h=a[f]-n.rects.reference[f],v=P(i),y=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,g=m/2-h/2,b=c[l],w=y-p[u]-c[d],x=y/2-p[u]/2+g,E=le(b,x,w),j=f;n.modifiersData[r]=((t={})[j]=E,t.centerOffset=E-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&ie(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function he(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ve(e){return[L,S,M,R].some((function(t){return e[t]>=0}))}var ye=z({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,f=void 0===a||a,u=s(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,X)})),f&&u.addEventListener("resize",n.update,X),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,X)})),f&&u.removeEventListener("resize",n.update,X)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=J({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,u={placement:Y(t.placement),variation:K(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Z(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Z(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];u(o)&&v(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});u(r)&&v(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},ee,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,u=n.padding,c=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,y=Y(v),g=f||(y===v||!m?[ne(v)]:function(e){if(Y(e)===B)return[];var t=ne(e);return[oe(e),t,oe(t)]}(v)),b=[v].concat(g).reduce((function(e,n){return e.concat(Y(n)===B?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,u=void 0===f?V:f,c=K(r),p=c?s?T:T.filter((function(e){return K(e)===c})):C,l=p.filter((function(e){return u.indexOf(e)>=0}));0===l.length&&(l=p);var d=l.reduce((function(t,n){return t[n]=pe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[Y(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:c,rootBoundary:p,padding:u,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,E=!0,j=b[0],A=0;A<b.length;A++){var k=b[A],D=Y(k),P=K(k)===W,H=[L,M].indexOf(D)>=0,q=H?"width":"height",U=pe(t,{placement:k,boundary:c,rootBoundary:p,altBoundary:l,padding:u}),_=H?P?S:R:P?M:L;w[q]>x[q]&&(_=ne(_));var F=ne(_),N=[];if(i&&N.push(U[D]<=0),s&&N.push(U[_]<=0,U[F]<=0),N.every((function(e){return e}))){j=k,E=!1;break}O.set(k,N)}if(E)for(var $=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return j=t,"break"},I=m?3:1;I>0;I--){if("break"===$(I))break}t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},de,me,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=pe(t,{elementContext:"reference"}),s=pe(t,{altBoundary:!0}),f=he(a,r),u=he(s,o,i),c=ve(f),p=ve(u);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":p})}}]}),ge=n(9743),be=n.n(ge),we=[],xe=function(){},Oe=function(){return Promise.resolve(null)},Ee=[];function je(e){var t=e.placement,n=void 0===t?"bottom":t,s=e.strategy,f=void 0===s?"absolute":s,u=e.modifiers,c=void 0===u?Ee:u,p=e.referenceElement,l=e.onFirstUpdate,d=e.innerRef,m=e.children,h=r.useContext(o.C8),v=r.useState(null),y=v[0],g=v[1],b=r.useState(null),w=b[0],x=b[1];r.useEffect((function(){(0,i.k$)(d,y)}),[d,y]);var O=r.useMemo((function(){return{placement:n,strategy:f,onFirstUpdate:l,modifiers:[].concat(c,[{name:"arrow",enabled:null!=w,options:{element:w}}])}}),[n,f,l,c,w]),E=function(e,t,n){void 0===n&&(n={});var o=r.useRef(null),s={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||we},f=r.useState({styles:{popper:{position:s.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),u=f[0],c=f[1],p=r.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);a.flushSync((function(){c({styles:(0,i.sq)(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:(0,i.sq)(n.map((function(e){return[e,t.attributes[e]]})))})}))},requires:["computeStyles"]}}),[]),l=r.useMemo((function(){var e={onFirstUpdate:s.onFirstUpdate,placement:s.placement,strategy:s.strategy,modifiers:[].concat(s.modifiers,[p,{name:"applyStyles",enabled:!1}])};return be()(o.current,e)?o.current||e:(o.current=e,e)}),[s.onFirstUpdate,s.placement,s.strategy,s.modifiers,p]),d=r.useRef();return(0,i.LI)((function(){d.current&&d.current.setOptions(l)}),[l]),(0,i.LI)((function(){if(null!=e&&null!=t){var r=(n.createPopper||ye)(e,t,l);return d.current=r,function(){r.destroy(),d.current=null}}}),[e,t,n.createPopper]),{state:d.current?d.current.state:null,styles:u.styles,attributes:u.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}}(p||h,y,O),j=E.state,A=E.styles,k=E.forceUpdate,D=E.update,P=r.useMemo((function(){return{ref:g,style:A.popper,placement:j?j.placement:n,hasPopperEscaped:j&&j.modifiersData.hide?j.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:j&&j.modifiersData.hide?j.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:A.arrow,ref:x},forceUpdate:k||xe,update:D||Oe}}),[g,x,n,j,A,D,k]);return(0,i.$p)(m)(P)}},3351:function(e,t,n){"use strict";n.d(t,{s:function(){return f}});var r=n(7294),o=n(2473),i=n.n(o),a=n(1385),s=n(7139);function f(e){var t=e.children,n=e.innerRef,o=r.useContext(a.mq),f=r.useCallback((function(e){(0,s.k$)(n,e),(0,s.DL)(o,e)}),[n,o]);return r.useEffect((function(){return function(){return(0,s.k$)(n,null)}}),[]),r.useEffect((function(){i()(Boolean(o),"`Reference` should not be used outside of a `Manager` component.")}),[o]),(0,s.$p)(t)({ref:f})}},7139:function(e,t,n){"use strict";n.d(t,{$p:function(){return o},DL:function(){return i},LI:function(){return f},k$:function(){return a},sq:function(){return s}});var r=n(7294),o=function(e){return Array.isArray(e)?e[0]:e},i=function(e){if("function"===typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.apply(void 0,n)}},a=function(e,t){if("function"===typeof e)return i(e,t);null!=e&&(e.current=t)},s=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},f="undefined"!==typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect},9743:function(e){var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,f,u,c;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(f=s;0!==f--;)if(!i(e[f],a[f]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(c=e.entries();!(f=c.next()).done;)if(!a.has(f.value[0]))return!1;for(c=e.entries();!(f=c.next()).done;)if(!i(f.value[1],a.get(f.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(c=e.entries();!(f=c.next()).done;)if(!a.has(f.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(f=s;0!==f--;)if(e[f]!==a[f])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(f=s;0!==f--;)if(!Object.prototype.hasOwnProperty.call(a,u[f]))return!1;if(t&&e instanceof Element)return!1;for(f=s;0!==f--;)if(("_owner"!==u[f]&&"__v"!==u[f]&&"__o"!==u[f]||!e.$$typeof)&&!i(e[u[f]],a[u[f]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},2473:function(e){"use strict";var t=function(){};e.exports=t}}]);