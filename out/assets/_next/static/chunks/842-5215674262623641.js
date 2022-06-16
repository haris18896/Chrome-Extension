"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[842],{8060:function(e,t,n){n.d(t,{Z:function(){return Te}});var r=n(4184),o=n.n(r),s=n(7294);var a=function(e){var t=(0,s.useRef)(e);return(0,s.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=a(e);return(0,s.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}function c(e){return e&&e.ownerDocument||document}function l(e){void 0===e&&(e=c());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(n){return e.body}}function u(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}var d=!("undefined"===typeof window||!window.document||!window.document.createElement),f=!1,m=!1;try{var p={get passive(){return f=!0},get once(){return m=f=!0}};d&&(window.addEventListener("test",p,p),window.removeEventListener("test",p,!0))}catch(Se){}var v=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!m){var o=r.once,s=r.capture,a=n;!m&&o&&(a=n.__once||function e(r){this.removeEventListener(t,e,s),n.call(this,r)},n.__once=a),e.addEventListener(t,a,f?r:s)}e.addEventListener(t,n,r)};var h=function(e,t,n,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};var g=function(e,t,n,r){return v(e,t,n,r),function(){h(e,t,n,r)}},E=n(3935);function b(e){var t=function(e){var t=(0,s.useRef)(e);return t.current=e,t}(e);(0,s.useEffect)((function(){return function(){return t.current()}}),[])}function y(e,t){return function(e){var t=c(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var x=/([A-Z])/g;var w=/^ms-/;function C(e){return function(e){return e.replace(x,"-$1").toLowerCase()}(e).replace(w,"-ms-")}var k=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var N=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(C(t))||y(e).getPropertyValue(C(t));Object.keys(t).forEach((function(o){var s=t[o];s||0===s?!function(e){return!(!e||!k.test(e))}(o)?n+=C(o)+": "+s+";":r+=o+"("+s+") ":e.style.removeProperty(C(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n};const O=`data-rr-ui-${"modal-open"}`;var R=class{constructor({ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}={}){this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(N(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(O,""),N(r,t)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(O),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}remove(e){const t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}};const j=(0,s.createContext)(d?window:void 0);j.Provider;function L(){return(0,s.useContext)(j)}const F=(e,t)=>{var n;return d?null==e?(t||c()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(n=e)&&n.nodeType&&e||null):null};var P=n(5893);const T=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let S;function D(e){const t=L(),n=e||function(e){return S||(S=new R({ownerDocument:null==e?void 0:e.document})),S}(t),r=(0,s.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:(0,s.useCallback)((e=>{r.current.dialog=e}),[]),setBackdropRef:(0,s.useCallback)((e=>{r.current.backdrop=e}),[])})}const B=(0,s.forwardRef)(((e,t)=>{let{show:n=!1,role:r="dialog",className:o,style:a,children:c,backdrop:f=!0,keyboard:m=!0,onBackdropClick:p,onEscapeKeyDown:v,transition:h,backdropTransition:y,autoFocus:x=!0,enforceFocus:w=!0,restoreFocus:C=!0,restoreFocusOptions:k,renderDialog:N,renderBackdrop:O=(e=>(0,P.jsx)("div",Object.assign({},e))),manager:R,container:j,onShow:S,onHide:B=(()=>{}),onExit:M,onExited:A,onExiting:H,onEnter:$,onEntering:_,onEntered:W}=e,V=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,T);const I=function(e,t){const n=L(),[r,o]=(0,s.useState)((()=>F(e,null==n?void 0:n.document)));if(!r){const t=F(e);t&&o(t)}return(0,s.useEffect)((()=>{t&&r&&t(r)}),[t,r]),(0,s.useEffect)((()=>{const t=F(e);t!==r&&o(t)}),[e,r]),r}(j),z=D(R),K=function(){var e=(0,s.useRef)(!0),t=(0,s.useRef)((function(){return e.current}));return(0,s.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t.current}(),Z=function(e){var t=(0,s.useRef)(null);return(0,s.useEffect)((function(){t.current=e})),t.current}(n),[U,X]=(0,s.useState)(!n),Y=(0,s.useRef)(null);(0,s.useImperativeHandle)(t,(()=>z),[z]),d&&!Z&&n&&(Y.current=l()),h||n||U?n&&U&&X(!1):X(!0);const q=i((()=>{if(z.add(),ne.current=g(document,"keydown",ee),te.current=g(document,"focus",(()=>setTimeout(J)),!0),S&&S(),x){const e=l(document);z.dialog&&e&&!u(z.dialog,e)&&(Y.current=e,z.dialog.focus())}})),G=i((()=>{var e;(z.remove(),null==ne.current||ne.current(),null==te.current||te.current(),C)&&(null==(e=Y.current)||null==e.focus||e.focus(k),Y.current=null)}));(0,s.useEffect)((()=>{n&&I&&q()}),[n,I,q]),(0,s.useEffect)((()=>{U&&G()}),[U,G]),b((()=>{G()}));const J=i((()=>{if(!w||!K()||!z.isTopModal())return;const e=l();z.dialog&&e&&!u(z.dialog,e)&&z.dialog.focus()})),Q=i((e=>{e.target===e.currentTarget&&(null==p||p(e),!0===f&&B())})),ee=i((e=>{m&&27===e.keyCode&&z.isTopModal()&&(null==v||v(e),e.defaultPrevented||B())})),te=(0,s.useRef)(),ne=(0,s.useRef)(),re=(...e)=>{X(!0),null==A||A(...e)},oe=h;if(!I||!(n||oe&&!U))return null;const se=Object.assign({role:r,ref:z.setDialogRef,"aria-modal":"dialog"===r||void 0},V,{style:a,className:o,tabIndex:-1});let ae=N?N(se):(0,P.jsx)("div",Object.assign({},se,{children:s.cloneElement(c,{role:"document"})}));oe&&(ae=(0,P.jsx)(oe,{appear:!0,unmountOnExit:!0,in:!!n,onExit:M,onExiting:H,onExited:re,onEnter:$,onEntering:_,onEntered:W,children:ae}));let ie=null;if(f){const e=y;ie=O({ref:z.setBackdropRef,onClick:Q}),e&&(ie=(0,P.jsx)(e,{appear:!0,in:!!n,children:ie}))}return(0,P.jsx)(P.Fragment,{children:E.createPortal((0,P.jsxs)(P.Fragment,{children:[ie,ae]}),I)})}));B.displayName="Modal";var M=Object.assign(B,{Manager:R}),A=n(5976);function H(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),s=g(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),s()}}function $(e,t,n,r){null==n&&(n=function(e){var t=N(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var o=H(e,n,r),s=g(e,"transitionend",t);return function(){o(),s()}}function _(e,t){const n=N(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function W(e,t){const n=_(e,"transitionDuration"),r=_(e,"transitionDelay"),o=$(e,(n=>{n.target===e&&(o(),t(n))}),n+r)}var V=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var I=function(e,t){return(0,s.useMemo)((function(){return function(e,t){var n=V(e),r=V(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])};var z=s.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,onExited:a,addEndListener:i,children:c,childRef:l,...u},d)=>{const f=(0,s.useRef)(null),m=I(f,l),p=e=>{var t;m((t=e)&&"setState"in t?E.findDOMNode(t):null!=t?t:null)},v=e=>t=>{e&&f.current&&e(f.current,t)},h=(0,s.useCallback)(v(e),[e]),g=(0,s.useCallback)(v(t),[t]),b=(0,s.useCallback)(v(n),[n]),y=(0,s.useCallback)(v(r),[r]),x=(0,s.useCallback)(v(o),[o]),w=(0,s.useCallback)(v(a),[a]),C=(0,s.useCallback)(v(i),[i]);return(0,P.jsx)(A.ZP,{ref:d,...u,onEnter:h,onEntered:b,onEntering:g,onExit:y,onExited:w,onExiting:x,addEndListener:C,nodeRef:f,children:"function"===typeof c?(e,t)=>c(e,{...t,ref:p}):s.cloneElement(c,{ref:p})})}));const K={[A.d0]:"show",[A.cn]:"show"},Z=s.forwardRef((({className:e,children:t,transitionClasses:n={},...r},a)=>{const i=(0,s.useCallback)(((e,t)=>{!function(e){e.offsetHeight}(e),null==r.onEnter||r.onEnter(e,t)}),[r]);return(0,P.jsx)(z,{ref:a,addEndListener:W,...r,onEnter:i,childRef:t.ref,children:(r,a)=>s.cloneElement(t,{...a,className:o()("fade",e,t.props.className,K[r],n[r])})})}));Z.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Z.displayName="Fade";var U=Z,X=/-(.)/g;const Y=["xxl","xl","lg","md","sm","xs"],q=s.createContext({prefixes:{},breakpoints:Y}),{Consumer:G,Provider:J}=q;function Q(e,t){const{prefixes:n}=(0,s.useContext)(q);return e||n[t]||t}const ee=e=>{return e[0].toUpperCase()+(t=e,t.replace(X,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function te(e,{displayName:t=ee(e),Component:n,defaultProps:r}={}){const a=s.forwardRef((({className:t,bsPrefix:r,as:s=n||"div",...a},i)=>{const c=Q(r,e);return(0,P.jsx)(s,{ref:i,className:o()(t,c),...a})}));return a.defaultProps=r,a.displayName=t,a}var ne=te("offcanvas-body");const re={[A.d0]:"show",[A.cn]:"show"},oe=s.forwardRef((({bsPrefix:e,className:t,children:n,...r},a)=>(e=Q(e,"offcanvas"),(0,P.jsx)(z,{ref:a,addEndListener:W,...r,childRef:n.ref,children:(r,a)=>s.cloneElement(n,{...a,className:o()(t,n.props.className,(r===A.d0||r===A.Ix)&&`${e}-toggling`,re[r])})}))));oe.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},oe.displayName="OffcanvasToggling";var se=oe;var ae=s.createContext({onHide(){}});const ie=s.createContext(null);ie.displayName="NavbarContext";var ce=ie,le=n(5697),ue=n.n(le);const de={"aria-label":ue().string,onClick:ue().func,variant:ue().oneOf(["white"])},fe=s.forwardRef((({className:e,variant:t,...n},r)=>(0,P.jsx)("button",{ref:r,type:"button",className:o()("btn-close",t&&`btn-close-${t}`,e),...n})));fe.displayName="CloseButton",fe.propTypes=de,fe.defaultProps={"aria-label":"Close"};var me=fe;const pe=s.forwardRef((({closeLabel:e,closeVariant:t,closeButton:n,onHide:r,children:o,...a},c)=>{const l=(0,s.useContext)(ae),u=i((()=>{null==l||l.onHide(),null==r||r()}));return(0,P.jsxs)("div",{ref:c,...a,children:[o,n&&(0,P.jsx)(me,{"aria-label":e,variant:t,onClick:u})]})}));pe.defaultProps={closeLabel:"Close",closeButton:!1};var ve=pe;const he=s.forwardRef((({bsPrefix:e,className:t,...n},r)=>(e=Q(e,"offcanvas-header"),(0,P.jsx)(ve,{ref:r,...n,className:o()(t,e)}))));he.displayName="OffcanvasHeader",he.defaultProps={closeLabel:"Close",closeButton:!1};var ge=he;var Ee,be=te("offcanvas-title",{Component:(Ee="h5",s.forwardRef(((e,t)=>(0,P.jsx)("div",{...e,ref:t,className:o()(e.className,Ee)}))))});var ye=Function.prototype.bind.call(Function.prototype.call,[].slice);function xe(e,t){return ye(e.querySelectorAll(t))}function we(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const Ce=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ke=".sticky-top",Ne=".navbar-toggler";class Oe extends R{adjustAndStore(e,t,n){const r=t.style[e];t.dataset[e]=r,N(t,{[e]:`${parseFloat(N(t,e))+n}px`})}restore(e,t){const n=t.dataset[e];void 0!==n&&(delete t.dataset[e],N(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();if(function(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}(t,"modal-open"),!e.scrollBarWidth)return;const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";xe(t,Ce).forEach((t=>this.adjustAndStore(n,t,e.scrollBarWidth))),xe(t,ke).forEach((t=>this.adjustAndStore(r,t,-e.scrollBarWidth))),xe(t,Ne).forEach((t=>this.adjustAndStore(r,t,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();!function(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=we(e.className,t):e.setAttribute("class",we(e.className&&e.className.baseVal||"",t))}(t,"modal-open");const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";xe(t,Ce).forEach((e=>this.restore(n,e))),xe(t,ke).forEach((e=>this.restore(r,e))),xe(t,Ne).forEach((e=>this.restore(r,e)))}}let Re;var je=Oe;function Le(e){return(0,P.jsx)(se,{...e})}function Fe(e){return(0,P.jsx)(U,{...e})}const Pe=s.forwardRef((({bsPrefix:e,className:t,children:n,"aria-labelledby":r,placement:a,show:c,backdrop:l,keyboard:u,scroll:d,onEscapeKeyDown:f,onShow:m,onHide:p,container:v,autoFocus:h,enforceFocus:g,restoreFocus:E,restoreFocusOptions:b,onEntered:y,onExit:x,onExiting:w,onEnter:C,onEntering:k,onExited:N,backdropClassName:O,manager:R,...j},L)=>{const F=(0,s.useRef)();e=Q(e,"offcanvas");const{onToggle:T}=(0,s.useContext)(ce)||{},S=i((()=>{null==T||T(),null==p||p()})),D=(0,s.useMemo)((()=>({onHide:S})),[S]);const B=(0,s.useCallback)((t=>(0,P.jsx)("div",{...t,className:o()(`${e}-backdrop`,O)})),[O,e]);return(0,P.jsx)(ae.Provider,{value:D,children:(0,P.jsx)(M,{show:c,ref:L,backdrop:l,container:v,keyboard:u,autoFocus:h,enforceFocus:g&&!d,restoreFocus:E,restoreFocusOptions:b,onEscapeKeyDown:f,onShow:m,onHide:S,onEnter:(e,...t)=>{e&&(e.style.visibility="visible"),null==C||C(e,...t)},onEntering:k,onEntered:y,onExit:x,onExiting:w,onExited:(e,...t)=>{e&&(e.style.visibility=""),null==N||N(...t)},manager:R||(d?(F.current||(F.current=new je({handleContainerOverflow:!1})),F.current):function(e){return Re||(Re=new Oe(e)),Re}()),transition:Le,backdropTransition:Fe,renderBackdrop:B,renderDialog:s=>(0,P.jsx)("div",{role:"dialog",...s,...j,className:o()(t,e,`${e}-${a}`),"aria-labelledby":r,children:n})})})}));Pe.displayName="Offcanvas",Pe.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start"};var Te=Object.assign(Pe,{Body:ne,Header:ge,Title:be})},8357:function(e,t,n){n.d(t,{w_:function(){return l}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),c(e.child))}))}function l(e){return function(t){return r.createElement(u,a({attr:a({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var n,o=e.attr,s=e.size,c=e.title,l=i(e,["attr","size","title"]),u=s||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==s?r.createElement(s.Consumer,null,(function(e){return t(e)})):t(o)}}}]);