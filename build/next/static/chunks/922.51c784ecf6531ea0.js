"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{5922:function(e,r,t){t.r(r);var n=t(5893),i=t(7294),o=t(9135),l=t(9318),s=t(1163),a=t(8484);function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function u(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,i,o=[],l=!0,s=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);l=!0);}catch(a){s=!0,i=a}finally{try{l||null==t.return||t.return()}finally{if(s)throw i}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=function(){var e=(0,o.useAmp)(),r=(0,s.useRouter)(),t=u((0,a._)("selectedServer",{}),2),c=t[0],f=t[1];return(0,i.useEffect)((function(){localStorage.getItem("selectedServer")&&f(JSON.parse(localStorage.getItem("selectedServer")))}),[]),(0,n.jsxs)("div",{className:"Connect__Button--container",onClick:function(){return r.push("/servers?amp=1")},children:[c&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{as:"div",countryCode:null===c||void 0===c?void 0:c._id,style:{width:"2em",height:"2em",borderRadius:"50%"},svg:!0,cdnUrl:"https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/",cdnSuffix:"svg",title:"United States"}),(0,n.jsx)("p",{children:(null===c||void 0===c?void 0:c.name)||"Choose Country Server"})]}),e?(0,n.jsx)("amp-img",{width:"15",height:"20",src:"/assets/logos/rightArrow.svg",alt:"rightArrow",layout:"responsive"}):(0,n.jsx)("img",{width:"15",height:"20",src:"/assets/logos/rightArrow.svg",alt:"rightArrow"})]})}},9318:function(e,r,t){var n=t(7294);function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}var o=["cdnSuffix","cdnUrl","countryCode","style","svg"];r.Z=function(e){var r=e.cdnSuffix,t=void 0===r?"svg":r,l=e.cdnUrl,s=void 0===l?"https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/":l,a=e.countryCode,c=e.style,u=e.svg,f=void 0!==u&&u,d=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,o);if("string"!==typeof a)return null;if(f){var g=""+s+a.toLowerCase()+"."+t;return(0,n.createElement)("img",Object.assign({},d,{src:g,style:i({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},c)}))}var v=a.toUpperCase().replace(/./g,(function(e){return String.fromCodePoint(e.charCodeAt(0)+127397)}));return(0,n.createElement)("span",Object.assign({role:"img"},d,{style:i({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},c)}),v)}}}]);