import{aB as D,R as z,a as k,_ as n,j as g,l as q,K as T,L as A,r as w,M,h as $,k as B,ai as W}from"./index-DFVXx1fk.js";import{Q as L,q as j,C as U,i as G,o as K,D as H,p as J,h as Q,n as V,d as X,f as Y,b as N,l as Z,aJ as ee,aK as oe,U as te,a0 as re}from"./Select-B5G1tRLl.js";function se(e,o){return()=>null}function ae(e,o){return()=>null}function ne(e,o,t,r,s){return null}const le={configure:e=>{D.configure(e)}},ce=Object.freeze(Object.defineProperty({__proto__:null,capitalize:z,createChainedFunction:L,createSvgIcon:j,debounce:U,deprecatedPropType:se,isMuiElement:G,ownerDocument:K,ownerWindow:H,requirePropFactory:ae,setRef:J,unstable_ClassNameGenerator:le,unstable_useEnhancedEffect:Q,unstable_useId:V,unsupportedProp:ne,useControlled:X,useEventCallback:Y,useForkRef:N,useIsFocusVisible:Z},Symbol.toStringTag,{value:"Module"})),ie=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],ue=["component","slots","slotProps"],pe=["component"];function de(e,o){const{className:t,elementType:r,ownerState:s,externalForwardedProps:l,getSlotOwnerState:c,internalForwardedProps:a}=o,p=k(o,ie),{component:S,slots:d={[e]:void 0},slotProps:_={[e]:void 0}}=l,v=k(l,ue),f=d[e]||r,m=ee(_[e],s),x=oe(n({className:t},p,{externalForwardedProps:e==="root"?v:void 0,externalSlotProps:m})),{props:{component:i},internalRef:F}=x,b=k(x.props,pe),P=N(F,m==null?void 0:m.ref,o.ref),u=c?c(b):{},y=n({},s,u),C=e==="root"?i||S:i,h=te(f,n({},e==="root"&&!S&&!d[e]&&a,e!=="root"&&!d[e]&&a,b,C&&{as:C},{ref:P}),y);return Object.keys(u).forEach(O=>{delete h[O]}),[f,h]}const fe=j(g.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function ge(e){return q("MuiAvatar",e)}const ve=T("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]),Ae=ve,me=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],be=e=>{const{classes:o,variant:t,colorDefault:r}=e;return B({root:["root",t,r&&"colorDefault"],img:["img"],fallback:["fallback"]},ge,o)},ye=A("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],t.colorDefault&&o.colorDefault]}})(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:n({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:n({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]})),Se=A("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,o)=>o.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),xe=A(fe,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,o)=>o.fallback})({width:"75%",height:"75%"});function Pe({crossOrigin:e,referrerPolicy:o,src:t,srcSet:r}){const[s,l]=w.useState(!1);return w.useEffect(()=>{if(!t&&!r)return;l(!1);let c=!0;const a=new Image;return a.onload=()=>{c&&l("loaded")},a.onerror=()=>{c&&l("error")},a.crossOrigin=e,a.referrerPolicy=o,a.src=t,r&&(a.srcset=r),()=>{c=!1}},[e,o,t,r]),s}const Ce=w.forwardRef(function(o,t){const r=M({props:o,name:"MuiAvatar"}),{alt:s,children:l,className:c,component:a="div",slots:p={},slotProps:S={},imgProps:d,sizes:_,src:v,srcSet:f,variant:m="circular"}=r,x=k(r,me);let i=null;const F=Pe(n({},d,{src:v,srcSet:f})),b=v||f,P=b&&F!=="error",u=n({},r,{colorDefault:!P,component:a,variant:m}),y=be(u),[C,h]=de("img",{className:y.img,elementType:Se,externalForwardedProps:{slots:p,slotProps:{img:n({},d,S.img)}},additionalProps:{alt:s,src:v,srcSet:f,sizes:_},ownerState:u});return P?i=g.jsx(C,n({},h)):l||l===0?i=l:b&&s?i=s[0]:i=g.jsx(xe,{ownerState:u,className:y.fallback}),g.jsx(ye,n({as:a,ownerState:u,className:$(y.root,c),ref:t},x,{children:i}))}),Ie=Ce,he=(e,o)=>n({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},o&&!e.vars&&{colorScheme:e.palette.mode}),ke=e=>n({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),we=(e,o=!1)=>{var t;const r={};o&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([c,a])=>{var p;r[e.getColorSchemeSelector(c).replace(/\s*&/,"")]={colorScheme:(p=a.palette)==null?void 0:p.mode}});let s=n({html:he(e,o),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:n({margin:0},ke(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},r);const l=(t=e.components)==null||(t=t.MuiCssBaseline)==null?void 0:t.styleOverrides;return l&&(s=[s,l]),s};function Me(e){const o=M({props:e,name:"MuiCssBaseline"}),{children:t,enableColorScheme:r=!1}=o;return g.jsxs(w.Fragment,{children:[g.jsx(re,{styles:s=>we(s,r)}),t]})}var E={exports:{}};(function(e){function o(t){return t&&t.__esModule?t:{default:t}}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports})(E);var je=E.exports,R={};const _e=W(ce);var I;function Ne(){return I||(I=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=_e}(R)),R}export{Ie as A,Me as C,Ae as a,ke as b,le as c,se as d,ne as e,Ne as f,ge as g,he as h,je as i,ae as r,de as u};