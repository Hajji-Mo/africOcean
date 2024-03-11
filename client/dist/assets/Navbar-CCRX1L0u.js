import{r as ee,M as vn,K as bn,l as _n,L as Re,P as M,a as xn,_ as fe,h as Ve,j as p,k as $n,ap as xe,aG as yn,ak as kn,al as D,a2 as j,aB as wn,aq as Cn,aM as Sn,aj as jn}from"./index-Cz5SRk5r.js";import{G,A as xt,I as $t,a as $e,S as zn,L as Mn}from"./languege-BiOlvqTr.js";import{v as Ue,a6 as H,e as T,Z as Ne,P as Rn,J as We,V as Ln}from"./Select-CtpZzt5O.js";import{A as qe}from"./Avatar-BOaUf-Up.js";import"./index-1HjZlvs3.js";import{C as Ke}from"./Container-DfnuPG-w.js";const yt=e=>{const t=ee.useRef({});return ee.useEffect(()=>{t.current=e}),t.current};function On(e){const{badgeContent:t,invisible:n=!1,max:r=99,showZero:i=!1}=e,o=yt({badgeContent:t,max:r});let s=n;n===!1&&t===0&&!i&&(s=!0);const{badgeContent:a,max:l=r}=s?o:e,u=a&&Number(a)>l?`${l}+`:a;return{badgeContent:a,invisible:s,max:l,displayValue:u}}function Pn(e){return vn}function En(e){return _n("MuiBadge",e)}const Bn=bn("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),I=Bn,In=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],pe=10,ge=4,Dn=Pn(),Fn=e=>{const{color:t,anchorOrigin:n,invisible:r,overlap:i,variant:o,classes:s={}}=e,a={root:["root"],badge:["badge",o,r&&"invisible",`anchorOrigin${M(n.vertical)}${M(n.horizontal)}`,`anchorOrigin${M(n.vertical)}${M(n.horizontal)}${M(i)}`,`overlap${M(i)}`,t!=="default"&&`color${M(t)}`]};return $n(a,En,s)},An=Re("span",{name:"MuiBadge",slot:"Root",overridesResolver:(e,t)=>t.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),Hn=Re("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.badge,t[n.variant],t[`anchorOrigin${M(n.anchorOrigin.vertical)}${M(n.anchorOrigin.horizontal)}${M(n.overlap)}`],n.color!=="default"&&t[`color${M(n.color)}`],n.invisible&&t.invisible]}})(({theme:e})=>{var t;return{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:pe*2,lineHeight:1,padding:"0 6px",height:pe*2,borderRadius:pe,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen}),variants:[...Object.keys(((t=e.vars)!=null?t:e).palette).filter(n=>{var r,i;return((r=e.vars)!=null?r:e).palette[n].main&&((i=e.vars)!=null?i:e).palette[n].contrastText}).map(n=>({props:{color:n},style:{backgroundColor:(e.vars||e).palette[n].main,color:(e.vars||e).palette[n].contrastText}})),{props:{variant:"dot"},style:{borderRadius:ge,height:ge*2,minWidth:ge*2,padding:0}},{props:({ownerState:n})=>n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular",style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${I.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:n})=>n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular",style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${I.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:n})=>n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular",style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${I.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:n})=>n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular",style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${I.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:n})=>n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular",style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${I.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:n})=>n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular",style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${I.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:n})=>n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular",style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${I.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:n})=>n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular",style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${I.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})}}]}}),Tn=ee.forwardRef(function(t,n){var r,i,o,s,a,l;const u=Dn({props:t,name:"MuiBadge"}),{anchorOrigin:c={vertical:"top",horizontal:"right"},className:g,component:h,components:f={},componentsProps:v={},children:x,overlap:_="rectangular",color:$="default",invisible:C=!1,max:V=99,badgeContent:S,slots:O,slotProps:J,showZero:Ee=!1,variant:le="standard"}=u,an=xn(u,In),{badgeContent:Be,invisible:cn,max:ln,displayValue:dn}=On({max:V,invisible:C,badgeContent:S,showZero:Ee}),un=yt({anchorOrigin:c,color:$,overlap:_,variant:le,badgeContent:S}),Ie=cn||Be==null&&le!=="dot",{color:hn=$,overlap:fn=_,anchorOrigin:pn=c,variant:De=le}=Ie?un:u,Fe=De!=="dot"?dn:void 0,de=fe({},u,{badgeContent:Be,invisible:Ie,max:ln,displayValue:Fe,showZero:Ee,anchorOrigin:pn,color:hn,overlap:fn,variant:De}),Ae=Fn(de),He=(r=(i=O==null?void 0:O.root)!=null?i:f.Root)!=null?r:An,Te=(o=(s=O==null?void 0:O.badge)!=null?s:f.Badge)!=null?o:Hn,ue=(a=J==null?void 0:J.root)!=null?a:v.root,he=(l=J==null?void 0:J.badge)!=null?l:v.badge,gn=Ue({elementType:He,externalSlotProps:ue,externalForwardedProps:an,additionalProps:{ref:n,as:h},ownerState:de,className:Ve(ue==null?void 0:ue.className,Ae.root,g)}),mn=Ue({elementType:Te,externalSlotProps:he,ownerState:de,className:Ve(Ae.badge,he==null?void 0:he.className)});return p.jsxs(He,fe({},gn,{children:[x,p.jsx(Te,fe({},mn,{children:Fe}))]}))}),kt=Tn;function wt(e){return G({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}}]})(e)}function qr(e){return G({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}},{tag:"path",attr:{d:"M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"}}]})(e)}function Kr(e){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"}}]})(e)}function Ge(e){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}function Gr(e){return G({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"}}]})(e)}const R={home:{en:"home",fr:"home",icon:p.jsx(xt,{})},cart:{en:"Cart",fr:"Panier",icon:p.jsx(wt,{})},Contact:{en:"Messages",fr:"france",icon:p.jsx($t,{}),link:"/Chat"},acount:{en:"Acount",icon:p.jsx($e,{}),link:"/SignIn"},signIn:{en:"Sign in",icon:p.jsx($e,{}),link:"/SignIn"},SignUp:{en:"Register",link:"/Register"}},Jr=[{en:"home",fr:"home",icon:p.jsx(xt,{})},{en:"Cart",fr:"Panier",icon:p.jsx(wt,{})},{en:"Messages",fr:"france",icon:p.jsx($t,{}),link:"/Chat"},{en:"Acount",icon:p.jsx($e,{}),link:"/Dashboard"}],Vn=Re(kt)(({theme:e})=>({"& .MuiBadge-badge":{backgroundColor:"#44b700",color:"#44b700",boxShadow:`0 0 0 2px ${e.palette.background.paper}`,"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}})),Zr=({list:e})=>{const t=xe(yn),n=kn(),r=t==null?void 0:t.toString();let i=r===e.id;r||(i=!1);const o=(a,l)=>(a==null?void 0:a.length)>l?`${a==null?void 0:a.slice(0,l)}...`:a;function s(a){n(wn({chatId:a.id}))}return p.jsxs(H,{onClick:s(e),direction:"row",sx:{cursor:"pointer",width:"95%",px:1,py:".3rem",boxSizing:"border-box",borderRadius:1,backgroundColor:i?"#ffdfb8":D.white},spacing:2,mt:2,mx:"auto",justifyContent:"space-between",children:[p.jsxs(H,{direction:"row",spacing:2,children:[" ",e.online?p.jsx(Vn,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:p.jsx(qe,{alt:name,src:`/img/${e.img}`})}):p.jsx(qe,{alt:name,src:`/img/${e.img}`}),p.jsxs(j,{ml:2,alignItems:"center",children:[p.jsx(T,{sx:{fontWeight:600,fontSize:13,lineHeight:1},children:e.name}),p.jsx(T,{variant:"caption",children:o(e.msg,18)})]})]}),p.jsxs(H,{sx:{ml:4,alignItems:"end"},children:[p.jsx(T,{variant:"body2",fontWeight:"600",children:e.time}),p.jsx(kt,{className:"unread-count",color:"primary",badgeContent:e.unread})]})]})};function Ct(e){return e&&e.__esModule?e.default:e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ae,m,St,K,jt,Je,te={},zt=[],Un=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function F(e,t){for(var n in t)e[n]=t[n];return e}function Mt(e){var t=e.parentNode;t&&t.removeChild(e)}function ye(e,t,n){var r,i,o,s={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:s[o]=t[o];if(arguments.length>2&&(s.children=arguments.length>3?ae.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)s[o]===void 0&&(s[o]=e.defaultProps[o]);return Y(e,s,r,i,null)}function Y(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++St};return i==null&&m.vnode!=null&&m.vnode(o),o}function P(){return{current:null}}function N(e){return e.children}function L(e,t){this.props=e,this.context=t}function W(e,t){if(t==null)return e.__?W(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?W(e):null}function Rt(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Rt(e)}}function Ze(e){(!e.__d&&(e.__d=!0)&&K.push(e)&&!ne.__r++||Je!==m.debounceRendering)&&((Je=m.debounceRendering)||jt)(ne)}function ne(){for(var e;ne.__r=K.length;)e=K.sort(function(t,n){return t.__v.__b-n.__v.__b}),K=[],e.some(function(t){var n,r,i,o,s,a;t.__d&&(s=(o=(n=t).__v).__e,(a=n.__P)&&(r=[],(i=F({},o)).__v=o.__v+1,Le(a,o,i,n.__n,a.ownerSVGElement!==void 0,o.__h!=null?[s]:null,r,s??W(o),o.__h),Et(r,o),o.__e!=s&&Rt(o)))})}function Lt(e,t,n,r,i,o,s,a,l,u){var c,g,h,f,v,x,_,$=r&&r.__k||zt,C=$.length;for(n.__k=[],c=0;c<t.length;c++)if((f=n.__k[c]=(f=t[c])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?Y(null,f,null,null,f):Array.isArray(f)?Y(N,{children:f},null,null,null):f.__b>0?Y(f.type,f.props,f.key,null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(h=$[c])===null||h&&f.key==h.key&&f.type===h.type)$[c]=void 0;else for(g=0;g<C;g++){if((h=$[g])&&f.key==h.key&&f.type===h.type){$[g]=void 0;break}h=null}Le(e,f,h=h||te,i,o,s,a,l,u),v=f.__e,(g=f.ref)&&h.ref!=g&&(_||(_=[]),h.ref&&_.push(h.ref,null,f),_.push(g,f.__c||v,f)),v!=null?(x==null&&(x=v),typeof f.type=="function"&&f.__k===h.__k?f.__d=l=Ot(f,l,e):l=Pt(e,f,h,$,v,l),typeof n.type=="function"&&(n.__d=l)):l&&h.__e==l&&l.parentNode!=e&&(l=W(h))}for(n.__e=x,c=C;c--;)$[c]!=null&&(typeof n.type=="function"&&$[c].__e!=null&&$[c].__e==n.__d&&(n.__d=W(r,c+1)),It($[c],$[c]));if(_)for(c=0;c<_.length;c++)Bt(_[c],_[++c],_[++c])}function Ot(e,t,n){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,t=typeof r.type=="function"?Ot(r,t,n):Pt(n,r,r,i,r.__e,t));return t}function re(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){re(n,t)}):t.push(e)),t}function Pt(e,t,n,r,i,o){var s,a,l;if(t.__d!==void 0)s=t.__d,t.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),s=null;else{for(a=o,l=0;(a=a.nextSibling)&&l<r.length;l+=2)if(a==i)break e;e.insertBefore(i,o),s=o}return s!==void 0?s:i.nextSibling}function Nn(e,t,n,r,i){var o;for(o in n)o==="children"||o==="key"||o in t||ie(e,o,null,n[o],r);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||ie(e,o,t[o],n[o],r)}function Xe(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Un.test(t)?n:n+"px"}function ie(e,t,n,r,i){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Xe(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Xe(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?Qe:Ye,o):e.removeEventListener(t,o?Qe:Ye,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Ye(e){this.l[e.type+!1](m.event?m.event(e):e)}function Qe(e){this.l[e.type+!0](m.event?m.event(e):e)}function Le(e,t,n,r,i,o,s,a,l){var u,c,g,h,f,v,x,_,$,C,V,S=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,a=t.__e=n.__e,t.__h=null,o=[a]),(u=m.__b)&&u(t);try{e:if(typeof S=="function"){if(_=t.props,$=(u=S.contextType)&&r[u.__c],C=u?$?$.props.value:u.__:r,n.__c?x=(c=t.__c=n.__c).__=c.__E:("prototype"in S&&S.prototype.render?t.__c=c=new S(_,C):(t.__c=c=new L(_,C),c.constructor=S,c.render=qn),$&&$.sub(c),c.props=_,c.state||(c.state={}),c.context=C,c.__n=r,g=c.__d=!0,c.__h=[]),c.__s==null&&(c.__s=c.state),S.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=F({},c.__s)),F(c.__s,S.getDerivedStateFromProps(_,c.__s))),h=c.props,f=c.state,g)S.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(S.getDerivedStateFromProps==null&&_!==h&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(_,C),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(_,c.__s,C)===!1||t.__v===n.__v){c.props=_,c.state=c.__s,t.__v!==n.__v&&(c.__d=!1),c.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(O){O&&(O.__=t)}),c.__h.length&&s.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(_,c.__s,C),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(h,f,v)})}c.context=C,c.props=_,c.state=c.__s,(u=m.__r)&&u(t),c.__d=!1,c.__v=t,c.__P=e,u=c.render(c.props,c.state,c.context),c.state=c.__s,c.getChildContext!=null&&(r=F(F({},r),c.getChildContext())),g||c.getSnapshotBeforeUpdate==null||(v=c.getSnapshotBeforeUpdate(h,f)),V=u!=null&&u.type===N&&u.key==null?u.props.children:u,Lt(e,Array.isArray(V)?V:[V],t,n,r,i,o,s,a,l),c.base=t.__e,t.__h=null,c.__h.length&&s.push(c),x&&(c.__E=c.__=null),c.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Wn(n.__e,t,n,r,i,o,s,l);(u=m.diffed)&&u(t)}catch(O){t.__v=null,(l||o!=null)&&(t.__e=a,t.__h=!!l,o[o.indexOf(a)]=null),m.__e(O,t,n)}}function Et(e,t){m.__c&&m.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){m.__e(r,n.__v)}})}function Wn(e,t,n,r,i,o,s,a){var l,u,c,g=n.props,h=t.props,f=t.type,v=0;if(f==="svg"&&(i=!0),o!=null){for(;v<o.length;v++)if((l=o[v])&&"setAttribute"in l==!!f&&(f?l.localName===f:l.nodeType===3)){e=l,o[v]=null;break}}if(e==null){if(f===null)return document.createTextNode(h);e=i?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,h.is&&h),o=null,a=!1}if(f===null)g===h||a&&e.data===h||(e.data=h);else{if(o=o&&ae.call(e.childNodes),u=(g=n.props||te).dangerouslySetInnerHTML,c=h.dangerouslySetInnerHTML,!a){if(o!=null)for(g={},v=0;v<e.attributes.length;v++)g[e.attributes[v].name]=e.attributes[v].value;(c||u)&&(c&&(u&&c.__html==u.__html||c.__html===e.innerHTML)||(e.innerHTML=c&&c.__html||""))}if(Nn(e,h,g,i,a),c)t.__k=[];else if(v=t.props.children,Lt(e,Array.isArray(v)?v:[v],t,n,r,i&&f!=="foreignObject",o,s,o?o[0]:n.__k&&W(n,0),a),o!=null)for(v=o.length;v--;)o[v]!=null&&Mt(o[v]);a||("value"in h&&(v=h.value)!==void 0&&(v!==g.value||v!==e.value||f==="progress"&&!v)&&ie(e,"value",v,g.value,!1),"checked"in h&&(v=h.checked)!==void 0&&v!==e.checked&&ie(e,"checked",v,g.checked,!1))}return e}function Bt(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){m.__e(r,n)}}function It(e,t,n){var r,i;if(m.unmount&&m.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Bt(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){m.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&It(r[i],t,typeof e.type!="function");n||e.__e==null||Mt(e.__e),e.__e=e.__d=void 0}function qn(e,t,n){return this.constructor(e,n)}function Dt(e,t,n){var r,i,o;m.__&&m.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],Le(t,e=(!r&&n||t).__k=ye(N,null,[e]),i||te,te,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?ae.call(t.childNodes):null,o,!r&&n?n:i?i.__e:t.firstChild,r),Et(o,e)}ae=zt.slice,m={__e:function(e,t){for(var n,r,i;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),i=n.__d),i)return n.__E=n}catch(o){e=o}throw e}},St=0,L.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=F({},this.state),typeof e=="function"&&(e=e(F({},n),this.props)),e&&F(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Ze(this))},L.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ze(this))},L.prototype.render=N,K=[],jt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ne.__r=0;var Kn=0;function d(e,t,n,r,i){var o,s,a={};for(s in t)s=="ref"?o=t[s]:a[s]=t[s];var l={type:e,props:a,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Kn,__source:r,__self:i};if(typeof e=="function"&&(o=e.defaultProps))for(s in o)a[s]===void 0&&(a[s]=o[s]);return m.vnode&&m.vnode(l),l}function Gn(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function Jn(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var A={set:Gn,get:Jn};const me=new Map,Zn=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function Xn(){for(const{v:e,emoji:t}of Zn)if(Ft(t))return e}function Yn(){return!Ft("🇨🇦")}function Ft(e){if(me.has(e))return me.get(e);const t=Qn(e);return me.set(e,t),t}const Qn=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,r=Math.floor(t/2);return e.font=r+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,i=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(i,0,22),e.fillStyle="#0000FF",e.fillText(i,n,22);const o=e.getImageData(0,0,n,t).data,s=o.length;let a=0;for(;a<s&&!o[a+3];a+=4);if(a>=s)return!1;const l=n+a/4%n,u=Math.floor(a/4/n),c=e.getImageData(l,u,1,1).data;return!(o[a]!==c[0]||o[a+2]!==c[2]||e.measureText(i).width>=n)}})();var et={latestVersion:Xn,noCountryFlags:Yn};const ke=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let k=null;function er(e){k||(k=A.get("frequently")||{});const t=e.id||e;t&&(k[t]||(k[t]=0),k[t]+=1,A.set("last",t),A.set("frequently",k))}function tr({maxFrequentRows:e,perLine:t}){if(!e)return[];k||(k=A.get("frequently"));let n=[];if(!k){k={};for(let o in ke.slice(0,t)){const s=ke[o];k[s]=t-o,n.push(s)}return n}const r=e*t,i=A.get("last");for(let o in k)n.push(o);if(n.sort((o,s)=>{const a=k[s],l=k[o];return a==l?o.localeCompare(s):a-l}),n.length>r){const o=n.slice(r);n=n.slice(0,r);for(let s of o)s!=i&&delete k[s];i&&n.indexOf(i)==-1&&(delete k[n[n.length-1]],n.splice(-1,1,i)),A.set("frequently",k)}return n}var At={add:er,get:tr,DEFAULTS:ke},Ht={};Ht=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var B={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let w=null,b=null;const ve={};async function tt(e){if(ve[e])return ve[e];const n=await(await fetch(e)).json();return ve[e]=n,n}let be=null,Tt=null,Vt=!1;function ce(e,{caller:t}={}){return be||(be=new Promise(n=>{Tt=n})),e?nr(e):t&&!Vt&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),be}async function nr(e){Vt=!0;let{emojiVersion:t,set:n,locale:r}=e;if(t||(t=B.emojiVersion.value),n||(n=B.set.value),r||(r=B.locale.value),b)b.categories=b.categories.filter(l=>!l.name);else{b=(typeof e.data=="function"?await e.data():e.data)||await tt(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),b.emoticons={},b.natives={},b.categories.unshift({id:"frequent",emojis:[]});for(const l in b.aliases){const u=b.aliases[l],c=b.emojis[u];c&&(c.aliases||(c.aliases=[]),c.aliases.push(l))}b.originalCategories=b.categories}if(w=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(r=="en"?Ct(Ht):await tt(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${r}.json`)),e.custom)for(let l in e.custom){l=parseInt(l);const u=e.custom[l],c=e.custom[l-1];if(!(!u.emojis||!u.emojis.length)){u.id||(u.id=`custom_${l+1}`),u.name||(u.name=w.categories.custom),c&&!u.icon&&(u.target=c.target||c),b.categories.push(u);for(const g of u.emojis)b.emojis[g.id]=g}}e.categories&&(b.categories=b.originalCategories.filter(l=>e.categories.indexOf(l.id)!=-1).sort((l,u)=>{const c=e.categories.indexOf(l.id),g=e.categories.indexOf(u.id);return c-g}));let i=null,o=null;n=="native"&&(i=et.latestVersion(),o=e.noCountryFlags||et.noCountryFlags());let s=b.categories.length,a=!1;for(;s--;){const l=b.categories[s];if(l.id=="frequent"){let{maxFrequentRows:g,perLine:h}=e;g=g>=0?g:B.maxFrequentRows.value,h||(h=B.perLine.value),l.emojis=At.get({maxFrequentRows:g,perLine:h})}if(!l.emojis||!l.emojis.length){b.categories.splice(s,1);continue}const{categoryIcons:u}=e;if(u){const g=u[l.id];g&&!l.icon&&(l.icon=g)}let c=l.emojis.length;for(;c--;){const g=l.emojis[c],h=g.id?g:b.emojis[g],f=()=>{l.emojis.splice(c,1)};if(!h||e.exceptEmojis&&e.exceptEmojis.includes(h.id)){f();continue}if(i&&h.version>i){f();continue}if(o&&l.id=="flags"&&!ar.includes(h.id)){f();continue}if(!h.search){if(a=!0,h.search=","+[[h.id,!1],[h.name,!0],[h.keywords,!1],[h.emoticons,!1]].map(([x,_])=>{if(x)return(Array.isArray(x)?x:[x]).map($=>(_?$.split(/[-|_|\s]+/):[$]).map(C=>C.toLowerCase())).flat()}).flat().filter(x=>x&&x.trim()).join(","),h.emoticons)for(const x of h.emoticons)b.emoticons[x]||(b.emoticons[x]=h.id);let v=0;for(const x of h.skins){if(!x)continue;v++;const{native:_}=x;_&&(b.natives[_]=h.id,h.search+=`,${_}`);const $=v==1?"":`:skin-tone-${v}:`;x.shortcodes=`:${h.id}:${$}`}}}}a&&U.reset(),Tt()}function Ut(e,t,n){e||(e={});const r={};for(let i in t)r[i]=Nt(i,e,t,n);return r}function Nt(e,t,n,r){const i=n[e];let o=r&&r.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return i&&(o!=null&&i.value&&typeof i.value!=typeof o&&(typeof i.value=="boolean"?o=o!="false":o=i.value.constructor(o)),i.transform&&o&&(o=i.transform(o)),(o==null||i.choices&&i.choices.indexOf(o)==-1)&&(o=i.value)),o}const rr=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let we=null;function ir(e){return e.id?e:b.emojis[e]||b.emojis[b.aliases[e]]||b.emojis[b.natives[e]]}function or(){we=null}async function sr(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await ce(null,{caller:n||"SearchIndex.search"});const r=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((a,l,u)=>a.trim()&&u.indexOf(a)==l);if(!r.length)return;let i=we||(we=Object.values(b.emojis)),o,s;for(const a of r){if(!i.length)break;o=[],s={};for(const l of i){if(!l.search)continue;const u=l.search.indexOf(`,${a}`);u!=-1&&(o.push(l),s[l.id]||(s[l.id]=0),s[l.id]+=l.id==a?0:u+1)}i=o}return o.length<2||(o.sort((a,l)=>{const u=s[a.id],c=s[l.id];return u==c?a.id.localeCompare(l.id):u-c}),o.length>t&&(o=o.slice(0,t))),o}var U={search:sr,get:ir,reset:or,SHORTCODES_REGEX:rr};const ar=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function cr(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,r)=>n==t[r])}async function lr(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function dr(e,{skinIndex:t=0}={}){const n=e.skins[t]||(t=0,e.skins[t]),r={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(r.skin=t+1),n.src&&(r.src=n.src),e.aliases&&e.aliases.length&&(r.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(r.emoticons=e.emoticons),r}const ur={activity:{outline:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:d("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:d("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:d("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:d("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:d("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:d("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:d("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[d("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),d("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:d("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[d("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),d("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:d("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[d("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),d("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:d("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[d("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),d("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:d("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[d("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),d("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:d("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:d("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:d("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},hr={loupe:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:d("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:d("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var oe={categories:ur,search:hr};function Ce(e){let{id:t,skin:n,emoji:r}=e;if(e.shortcodes){const a=e.shortcodes.match(U.SHORTCODES_REGEX);a&&(t=a[1],a[2]&&(n=a[2]))}if(r||(r=U.get(t||e.native)),!r)return e.fallback;const i=r.skins[n-1]||r.skins[0],o=i.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,i.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${i.unified}.png`:void 0),s=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return d("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:o?d("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:i.native||i.shortcodes,src:o}):e.set=="native"?d("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:i.native}):d("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${s})`,backgroundSize:`${100*b.sheet.cols}% ${100*b.sheet.rows}%`,backgroundPosition:`${100/(b.sheet.cols-1)*i.x}% ${100/(b.sheet.rows-1)*i.y}%`}})})}const fr=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Wt extends fr{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,r){if(!this.component)return;const i=Nt(t,{[t]:r},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:i}):(this.component.props[t]=i,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const r=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),r&&r.appendChild(this)}}}class pr extends Wt{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var qt={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:B.set,skin:B.skin};class Kt extends Wt{async connectedCallback(){const t=Ut(this.props,qt,this);t.element=this,t.ref=n=>{this.component=n},await ce(),!this.disconnected&&Dt(d(Ce,{...t}),this)}constructor(t){super(t)}}z(Kt,"Props",qt);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Kt);var nt,Se=[],rt=m.__b,it=m.__r,ot=m.diffed,st=m.__c,at=m.unmount;function gr(){var e;for(Se.sort(function(t,n){return t.__v.__b-n.__v.__b});e=Se.pop();)if(e.__P)try{e.__H.__h.forEach(Q),e.__H.__h.forEach(je),e.__H.__h=[]}catch(t){e.__H.__h=[],m.__e(t,e.__v)}}m.__b=function(e){rt&&rt(e)},m.__r=function(e){it&&it(e);var t=e.__c.__H;t&&(t.__h.forEach(Q),t.__h.forEach(je),t.__h=[])},m.diffed=function(e){ot&&ot(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Se.push(t)!==1&&nt===m.requestAnimationFrame||((nt=m.requestAnimationFrame)||function(n){var r,i=function(){clearTimeout(o),ct&&cancelAnimationFrame(r),setTimeout(n)},o=setTimeout(i,100);ct&&(r=requestAnimationFrame(i))})(gr))},m.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Q),n.__h=n.__h.filter(function(r){return!r.__||je(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],m.__e(r,n.__v)}}),st&&st(e,t)},m.unmount=function(e){at&&at(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Q(r)}catch(i){t=i}}),t&&m.__e(t,n.__v))};var ct=typeof requestAnimationFrame=="function";function Q(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function je(e){e.__c=e.__()}function mr(e,t){for(var n in t)e[n]=t[n];return e}function lt(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function se(e){this.props=e}(se.prototype=new L).isPureReactComponent=!0,se.prototype.shouldComponentUpdate=function(e,t){return lt(this.props,e)||lt(this.state,t)};var dt=m.__b;m.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),dt&&dt(e)};var vr=m.__e;m.__e=function(e,t,n){if(e.then){for(var r,i=t;i=i.__;)if((r=i.__c)&&r.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t)}vr(e,t,n)};var ut=m.unmount;function _e(){this.__u=0,this.t=null,this.__b=null}function Gt(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function Z(){this.u=null,this.o=null}m.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),ut&&ut(e)},(_e.prototype=new L).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=Gt(r.__v),o=!1,s=function(){o||(o=!0,n.__R=null,i?i(a):a())};n.__R=s;var a=function(){if(!--r.__u){if(r.state.__e){var u=r.state.__e;r.__v.__k[0]=function g(h,f,v){return h&&(h.__v=null,h.__k=h.__k&&h.__k.map(function(x){return g(x,f,v)}),h.__c&&h.__c.__P===f&&(h.__e&&v.insertBefore(h.__e,h.__d),h.__c.__e=!0,h.__c.__P=v)),h}(u,u.__c.__P,u.__c.__O)}var c;for(r.setState({__e:r.__b=null});c=r.t.pop();)c.forceUpdate()}},l=t.__h===!0;r.__u++||l||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(s,s)},_e.prototype.componentWillUnmount=function(){this.t=[]},_e.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function o(s,a,l){return s&&(s.__c&&s.__c.__H&&(s.__c.__H.__.forEach(function(u){typeof u.__c=="function"&&u.__c()}),s.__c.__H=null),(s=mr({},s)).__c!=null&&(s.__c.__P===l&&(s.__c.__P=a),s.__c=null),s.__k=s.__k&&s.__k.map(function(u){return o(u,a,l)})),s}(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__e&&ye(N,null,e.fallback);return i&&(i.__h=null),[ye(N,null,t.__e?null:e.children),i]};var ht=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(Z.prototype=new L).__e=function(e){var t=this,n=Gt(t.__v),r=t.o.get(e);return r[0]++,function(i){var o=function(){t.props.revealOrder?(r.push(i),ht(t,e,r)):i()};n?n(o):o()}},Z.prototype.render=function(e){this.u=null,this.o=new Map;var t=re(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Z.prototype.componentDidUpdate=Z.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){ht(e,n,t)})};var br=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,_r=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,xr=typeof document<"u",$r=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};L.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(L.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var ft=m.event;function yr(){}function kr(){return this.cancelBubble}function wr(){return this.defaultPrevented}m.event=function(e){return ft&&(e=ft(e)),e.persist=yr,e.isPropagationStopped=kr,e.isDefaultPrevented=wr,e.nativeEvent=e};var pt={configurable:!0,get:function(){return this.class}},gt=m.vnode;m.vnode=function(e){var t=e.type,n=e.props,r=n;if(typeof t=="string"){var i=t.indexOf("-")===-1;for(var o in r={},n){var s=n[o];xr&&o==="children"&&t==="noscript"||o==="value"&&"defaultValue"in n&&s==null||(o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&s===!0?s="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!$r(n.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():i&&_r.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():s===null&&(s=void 0),r[o]=s)}t=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=re(n.children).forEach(function(a){a.props.selected=r.value.indexOf(a.props.value)!=-1})),t=="select"&&r.defaultValue!=null&&(r.value=re(n.children).forEach(function(a){a.props.selected=r.multiple?r.defaultValue.indexOf(a.props.value)!=-1:r.defaultValue==a.props.value})),e.props=r,n.class!=n.className&&(pt.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",pt))}e.$$typeof=br,gt&&gt(e)};var mt=m.__r;m.__r=function(e){mt&&mt(e),e.__c};const Cr={light:"outline",dark:"solid"};class Sr extends se{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return d("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return d("img",{src:n.src})}const r=oe.categories[t.id]||oe.categories.custom,i=this.props.icons=="auto"?Cr[this.props.theme]:this.props.icons;return r[i]||r}render(){let t=null;return d("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:d("div",{class:"flex relative",children:[this.categories.map((n,r)=>{const i=n.name||w.categories[n.id],o=!this.props.unfocused&&n.id==this.state.categoryId;return o&&(t=r),d("button",{"aria-label":i,"aria-selected":o||void 0,title:i,type:"button",class:"flex flex-grow flex-center",onMouseDown:s=>s.preventDefault(),onClick:()=>{this.props.onClick({category:n,i:r})},children:this.renderIcon(n)})}),d("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=b.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class jr extends se{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const X={rowsPerRender:10};class zr extends L{getInitialState(t=this.props){return{skin:A.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=w.rtl?"rtl":"ltr",this.refs={menu:P(),navigation:P(),scroll:P(),search:P(),searchInput:P(),skinToneButton:P(),skinToneRadio:P()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const i in this.nextState)this.props[i]=this.nextState[i],(i==="custom"||i==="categories")&&(n=!0);delete this.nextState;const r=this.getInitialState();if(n)return this.reset(r);this.setState(r)})}componentWillUnmount(){this.unregister()}async reset(t={}){await ce(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=b;this.refs.categories=new Map;const n=b.categories.map(i=>i.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const r=(i,o)=>{const s=[];s.__categoryId=o.id,s.__index=i.length,this.grid.push(s);const a=this.grid.length-1,l=a%X.rowsPerRender?{}:P();return l.index=a,l.posinset=this.grid.setsize+1,i.push(l),s};for(let i of t){const o=[];let s=r(o,i);for(let a of i.emojis)s.length==this.getPerLine()&&(s=r(o,i)),this.grid.setsize+=1,s.push(a);this.refs.categories.set(i.id,{root:P(),rows:o})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:r}=t,i=()=>{const{width:s}=n.getBoundingClientRect();return Math.floor(s/r)},o=new ResizeObserver(()=>{this.unobserve({except:o}),this.setState({perLine:i()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return o.observe(n),this.observers.push(o),i()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const r=this.state.searchResults||this.grid,i=r[t]&&r[t][n];if(i)return U.get(i)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,r=s=>{s!=t.state.categoryId&&t.setState({categoryId:s})},i={root:this.refs.scroll.current,threshold:[0,1]},o=new IntersectionObserver(s=>{for(const l of s){const u=l.target.dataset.id;n.set(u,l.intersectionRatio)}const a=[...n];for(const[l,u]of a)if(u){r(l);break}},i);for(const{root:s}of this.refs.categories.values())o.observe(s.current);this.observers.push(o)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(r=>{for(const i of r){const o=parseInt(i.target.dataset.index);i.isIntersecting?t[o]=!0:delete t[o]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(X.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*X.rowsPerRender}px`});for(const{rows:r}of this.refs.categories.values())for(const i of r)i.current&&n.observe(i.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:r,right:i,up:o,down:s}){const a=this.state.searchResults||this.grid;if(!a.length)return;let[l,u]=this.state.pos;const c=(()=>{if(l==0&&u==0&&!t.repeat&&(r||o))return null;if(l==-1)return!t.repeat&&(i||s)&&n.selectionStart==n.value.length?[0,0]:null;if(r||i){let g=a[l];const h=r?-1:1;if(u+=h,!g[u]){if(l+=h,g=a[l],!g)return l=r?0:a.length-1,u=r?0:a[l].length-1,[l,u];u=r?g.length-1:0}return[l,u]}if(o||s){l+=o?-1:1;const g=a[l];return g?(g[u]||(u=g.length-1),[l,u]):(l=o?0:a.length-1,u=o?0:a[l].length-1,[l,u])}})();if(c)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:c,keyboard:!0},()=>{this.scrollTo({row:c[0]})})}scrollTo({categoryId:t,row:n}){const r=this.state.searchResults||this.grid;if(!r.length)return;const i=this.refs.scroll.current,o=i.getBoundingClientRect();let s=0;if(n>=0&&(t=r[n].__categoryId),t&&(s=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(o.top-i.scrollTop)+1),n>=0)if(!n)s=0;else{const a=r[n].__index,l=s+a*this.props.emojiButtonSize,u=l+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(l<i.scrollTop)s=l;else if(u>i.scrollTop+o.height)s=u-o.height;else return}this.ignoreMouse(),i.scrollTop=s}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:r}){if(this.props.onEmojiSelect&&(!n&&r&&(n=this.getEmojiByPos(r)),n)){const i=dr(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&At.add(i,this.props),this.props.onEmojiSelect(i,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),A.set("skin",t)}renderNav(){return d(Sr,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return d("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[d("div",{class:"flex flex-middle flex-grow",children:[d("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:d(Ce,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),d("div",{class:`margin-${this.dir[0]}`,children:t||n?d("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[d("div",{class:"preview-title ellipsis",children:t?t.name:w.search_no_results_1}),d("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:w.search_no_results_2})]}):d("div",{class:"preview-placeholder color-c",children:w.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:r,grid:i}){const o=this.props.emojiButtonSize,s=this.state.tempSkin||this.state.skin,l=(t.skins[s-1]||t.skins[0]).native,u=cr(this.state.pos,n),c=n.concat(t.id).join("");return d(jr,{selected:u,skin:s,size:o,children:d("button",{"aria-label":l,"aria-selected":u||void 0,"aria-posinset":r,"aria-setsize":i.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:g=>this.handleEmojiClick({e:g,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[d("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(r-1)%this.props.emojiButtonColors.length]:void 0}}),d(Ce,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:s,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},c)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return d("div",{children:[d("div",{class:"spacer"}),d("div",{class:"flex flex-middle",children:[d("div",{class:"search relative flex-grow",children:[d("input",{type:"search",ref:this.refs.searchInput,placeholder:w.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),d("span",{class:"icon loupe flex",children:oe.search.loupe}),this.state.searchResults&&d("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:oe.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?d("div",{class:"category",ref:this.refs.search,children:[d("div",{class:`sticky padding-small align-${this.dir[0]}`,children:w.categories.search}),d("div",{children:t.length?t.map((n,r)=>d("div",{class:"flex",children:n.map((i,o)=>this.renderEmojiButton(i,{pos:[r,o],posinset:r*this.props.perLine+o+1,grid:t}))})):d("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&d("a",{onClick:this.props.onAddCustomEmoji,children:w.add_custom})})})]}):null}renderCategories(){const{categories:t}=b,n=!!this.state.searchResults,r=this.getPerLine();return d("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(i=>{const{root:o,rows:s}=this.refs.categories.get(i.id);return d("div",{"data-id":i.target?i.target.id:i.id,class:"category",ref:o,children:[d("div",{class:`sticky padding-small align-${this.dir[0]}`,children:i.name||w.categories[i.id]}),d("div",{class:"relative",style:{height:s.length*this.props.emojiButtonSize},children:s.map((a,l)=>{const u=a.index-a.index%X.rowsPerRender,c=this.state.visibleRows[u],g="current"in a?a:void 0;if(!c&&!g)return null;const h=l*r,f=h+r,v=i.emojis.slice(h,f);return v.length<r&&v.push(...new Array(r-v.length)),d("div",{"data-index":a.index,ref:g,class:"flex row",style:{top:l*this.props.emojiButtonSize},children:c&&v.map((x,_)=>{if(!x)return d("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const $=U.get(x);return this.renderEmojiButton($,{pos:[a.index,_],posinset:a.posinset+_,grid:this.grid})})},a.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:d("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:d("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":w.skins.choose,title:w.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:d("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return d("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),r=this.base.getBoundingClientRect(),i={};return this.dir=="ltr"?i.right=r.right-n.right-3:i.left=n.left-r.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?i.bottom=r.bottom-n.top+6:(i.top=n.bottom-r.top+3,i.bottom="auto"),d("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":w.skins.choose,class:"menu hidden","data-position":i.top?"top":"bottom",style:i,children:[...Array(6).keys()].map(o=>{const s=o+1,a=this.state.skin==s;return d("div",{children:[d("input",{type:"radio",name:"skin-tone",value:s,"aria-label":w.skins[s],ref:a?this.refs.skinToneRadio:null,defaultChecked:a,onChange:()=>this.handleSkinMouseOver(s),onKeyDown:l=>{(l.code=="Enter"||l.code=="Space"||l.code=="Tab")&&(l.preventDefault(),this.handleSkinClick(s))}}),d("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(s),onMouseEnter:()=>this.handleSkinMouseOver(s),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[d("span",{class:`skin-tone skin-tone-${s}`}),d("span",{class:"margin-small-lr",children:w.skins[s]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return d("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&d("div",{class:"padding-lr",children:this.renderSearch()}),d("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:d("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),z(this,"handleClickOutside",n=>{const{element:r}=this.props;n.target!=r&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),z(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),z(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),z(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),z(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:r}=n,i=await U.search(r),o=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!i)return this.setState({searchResults:i,pos:[-1,-1]},o);const s=n.selectionStart==n.value.length?[0,0]:[-1,-1],a=[];a.setsize=i.length;let l=null;for(let u of i)(!a.length||l.length==this.getPerLine())&&(l=[],l.__categoryId="search",l.__index=a.length,a.push(l)),l.push(u);this.ignoreMouse(),this.setState({searchResults:a,pos:s},o)}),z(this,"handleSearchKeyDown",n=>{const r=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:r,left:!0});break;case"ArrowRight":this.navigate({e:n,input:r,right:!0});break;case"ArrowUp":this.navigate({e:n,input:r,up:!0});break;case"ArrowDown":this.navigate({e:n,input:r,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),z(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),z(this,"handleCategoryClick",({category:n,i:r})=>{this.scrollTo(r==0?{row:-1}:{categoryId:n.id})}),z(this,"openSkins",n=>{const{currentTarget:r}=n,i=r.getBoundingClientRect();this.setState({showSkins:i},async()=>{await lr(2);const o=this.refs.menu.current;o&&(o.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class Jt extends pr{async connectedCallback(){const t=Ut(this.props,B,this);t.element=this,t.ref=n=>{this.component=n},await ce(t),!this.disconnected&&Dt(d(zr,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:Ct(Zt)})}}z(Jt,"Props",B);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",Jt);var Zt={};Zt=`:host {
  width: min-content;
  height: 435px;
  min-height: 230px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  --border-radius: 10px;
  --category-icon-size: 18px;
  --font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  --font-size: 15px;
  --preview-placeholder-size: 21px;
  --preview-title-size: 1.1em;
  --preview-subtitle-size: .9em;
  --shadow-color: 0deg 0% 0%;
  --shadow: .3px .5px 2.7px hsl(var(--shadow-color) / .14), .4px .8px 1px -3.2px hsl(var(--shadow-color) / .14), 1px 2px 2.5px -4.5px hsl(var(--shadow-color) / .14);
  display: flex;
}

[data-theme="light"] {
  --em-rgb-color: var(--rgb-color, 34, 36, 39);
  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);
  --em-rgb-background: var(--rgb-background, 255, 255, 255);
  --em-rgb-input: var(--rgb-input, 255, 255, 255);
  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));
  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));
}

[data-theme="dark"] {
  --em-rgb-color: var(--rgb-color, 222, 222, 221);
  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);
  --em-rgb-background: var(--rgb-background, 21, 22, 23);
  --em-rgb-input: var(--rgb-input, 0, 0, 0);
  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));
  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));
}

#root {
  --color-a: rgb(var(--em-rgb-color));
  --color-b: rgba(var(--em-rgb-color), .65);
  --color-c: rgba(var(--em-rgb-color), .45);
  --padding: 12px;
  --padding-small: calc(var(--padding) / 2);
  --sidebar-width: 16px;
  --duration: 225ms;
  --duration-fast: 125ms;
  --duration-instant: 50ms;
  --easing: cubic-bezier(.4, 0, .2, 1);
  width: 100%;
  text-align: left;
  border-radius: var(--border-radius);
  background-color: rgb(var(--em-rgb-background));
  position: relative;
}

@media (prefers-reduced-motion) {
  #root {
    --duration: 0;
    --duration-fast: 0;
    --duration-instant: 0;
  }
}

#root[data-menu] button {
  cursor: auto;
}

#root[data-menu] .menu button {
  cursor: pointer;
}

:host, #root, input, button {
  color: rgb(var(--em-rgb-color));
  font-family: var(--font-family);
  font-size: var(--font-size);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: normal;
}

*, :before, :after {
  box-sizing: border-box;
  min-width: 0;
  margin: 0;
  padding: 0;
}

.relative {
  position: relative;
}

.flex {
  display: flex;
}

.flex-auto {
  flex: none;
}

.flex-center {
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}

.flex-grow {
  flex: auto;
}

.flex-middle {
  align-items: center;
}

.flex-wrap {
  flex-wrap: wrap;
}

.padding {
  padding: var(--padding);
}

.padding-t {
  padding-top: var(--padding);
}

.padding-lr {
  padding-left: var(--padding);
  padding-right: var(--padding);
}

.padding-r {
  padding-right: var(--padding);
}

.padding-small {
  padding: var(--padding-small);
}

.padding-small-b {
  padding-bottom: var(--padding-small);
}

.padding-small-lr {
  padding-left: var(--padding-small);
  padding-right: var(--padding-small);
}

.margin {
  margin: var(--padding);
}

.margin-r {
  margin-right: var(--padding);
}

.margin-l {
  margin-left: var(--padding);
}

.margin-small-l {
  margin-left: var(--padding-small);
}

.margin-small-lr {
  margin-left: var(--padding-small);
  margin-right: var(--padding-small);
}

.align-l {
  text-align: left;
}

.align-r {
  text-align: right;
}

.color-a {
  color: var(--color-a);
}

.color-b {
  color: var(--color-b);
}

.color-c {
  color: var(--color-c);
}

.ellipsis {
  white-space: nowrap;
  max-width: 100%;
  width: auto;
  text-overflow: ellipsis;
  overflow: hidden;
}

.sr-only {
  width: 1px;
  height: 1px;
  position: absolute;
  top: auto;
  left: -10000px;
  overflow: hidden;
}

a {
  cursor: pointer;
  color: rgb(var(--em-rgb-accent));
}

a:hover {
  text-decoration: underline;
}

.spacer {
  height: 10px;
}

[dir="rtl"] .scroll {
  padding-left: 0;
  padding-right: var(--padding);
}

.scroll {
  padding-right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.scroll::-webkit-scrollbar {
  width: var(--sidebar-width);
  height: var(--sidebar-width);
}

.scroll::-webkit-scrollbar-track {
  border: 0;
}

.scroll::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}

.scroll::-webkit-scrollbar-corner {
  background-color: rgba(0, 0, 0, 0);
}

.scroll::-webkit-scrollbar-thumb {
  min-height: 20%;
  min-height: 65px;
  border: 4px solid rgb(var(--em-rgb-background));
  border-radius: 8px;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background-color: var(--em-color-border-over) !important;
}

.scroll:hover::-webkit-scrollbar-thumb {
  background-color: var(--em-color-border);
}

.sticky {
  z-index: 1;
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  font-weight: 500;
  position: sticky;
  top: -1px;
}

[dir="rtl"] .search input[type="search"] {
  padding: 10px 2.2em 10px 2em;
}

[dir="rtl"] .search .loupe {
  left: auto;
  right: .7em;
}

[dir="rtl"] .search .delete {
  left: .7em;
  right: auto;
}

.search {
  z-index: 2;
  position: relative;
}

.search input, .search button {
  font-size: calc(var(--font-size)  - 1px);
}

.search input[type="search"] {
  width: 100%;
  background-color: var(--em-color-border);
  transition-duration: var(--duration);
  transition-property: background-color, box-shadow;
  transition-timing-function: var(--easing);
  border: 0;
  border-radius: 10px;
  outline: 0;
  padding: 10px 2em 10px 2.2em;
  display: block;
}

.search input[type="search"]::-ms-input-placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"]::placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"], .search input[type="search"]::-webkit-search-decoration, .search input[type="search"]::-webkit-search-cancel-button, .search input[type="search"]::-webkit-search-results-button, .search input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
}

.search input[type="search"]:focus {
  background-color: rgb(var(--em-rgb-input));
  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, .2);
}

.search .icon {
  z-index: 1;
  color: rgba(var(--em-rgb-color), .7);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.search .loupe {
  pointer-events: none;
  left: .7em;
}

.search .delete {
  right: .7em;
}

svg {
  fill: currentColor;
  width: 1em;
  height: 1em;
}

button {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  cursor: pointer;
  color: currentColor;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
}

#nav {
  z-index: 2;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: var(--sidebar-width);
  position: relative;
}

#nav button {
  color: var(--color-b);
  transition: color var(--duration) var(--easing);
}

#nav button:hover {
  color: var(--color-a);
}

#nav svg, #nav img {
  width: var(--category-icon-size);
  height: var(--category-icon-size);
}

#nav[dir="rtl"] .bar {
  left: auto;
  right: 0;
}

#nav .bar {
  width: 100%;
  height: 3px;
  background-color: rgb(var(--em-rgb-accent));
  transition: transform var(--duration) var(--easing);
  border-radius: 3px 3px 0 0;
  position: absolute;
  bottom: -12px;
  left: 0;
}

#nav button[aria-selected] {
  color: rgb(var(--em-rgb-accent));
}

#preview {
  z-index: 2;
  padding: calc(var(--padding)  + 4px) var(--padding);
  padding-right: var(--sidebar-width);
  position: relative;
}

#preview .preview-placeholder {
  font-size: var(--preview-placeholder-size);
}

#preview .preview-title {
  font-size: var(--preview-title-size);
}

#preview .preview-subtitle {
  font-size: var(--preview-subtitle-size);
}

#nav:before, #preview:before {
  content: "";
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
}

#nav[data-position="top"]:before, #preview[data-position="top"]:before {
  background: linear-gradient(to bottom, var(--em-color-border), transparent);
  top: 100%;
}

#nav[data-position="bottom"]:before, #preview[data-position="bottom"]:before {
  background: linear-gradient(to top, var(--em-color-border), transparent);
  bottom: 100%;
}

.category:last-child {
  min-height: calc(100% + 1px);
}

.category button {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;
  position: relative;
}

.category button > * {
  position: relative;
}

.category button .background {
  opacity: 0;
  background-color: var(--em-color-border);
  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.category button:hover .background {
  transition-duration: var(--duration-instant);
  transition-delay: 0s;
}

.category button[aria-selected] .background {
  opacity: 1;
}

.category button[data-keyboard] .background {
  transition: none;
}

.row {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.skin-tone-button {
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 100%;
}

.skin-tone-button:hover {
  border-color: var(--em-color-border);
}

.skin-tone-button:active .skin-tone {
  transform: scale(.85) !important;
}

.skin-tone-button .skin-tone {
  transition: transform var(--duration) var(--easing);
}

.skin-tone-button[aria-selected] {
  background-color: var(--em-color-border);
  border-top-color: rgba(0, 0, 0, .05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-width: 0;
  border-right-width: 0;
}

.skin-tone-button[aria-selected] .skin-tone {
  transform: scale(.9);
}

.menu {
  z-index: 2;
  white-space: nowrap;
  border: 1px solid var(--em-color-border);
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  transition-property: opacity, transform;
  transition-duration: var(--duration);
  transition-timing-function: var(--easing);
  border-radius: 10px;
  padding: 4px;
  position: absolute;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .05);
}

.menu.hidden {
  opacity: 0;
}

.menu[data-position="bottom"] {
  transform-origin: 100% 100%;
}

.menu[data-position="bottom"].hidden {
  transform: scale(.9)rotate(-3deg)translateY(5%);
}

.menu[data-position="top"] {
  transform-origin: 100% 0;
}

.menu[data-position="top"].hidden {
  transform: scale(.9)rotate(3deg)translateY(-5%);
}

.menu input[type="radio"] {
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  overflow: hidden;
}

.menu input[type="radio"]:checked + .option {
  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));
}

.option {
  width: 100%;
  border-radius: 6px;
  padding: 4px 6px;
}

.option:hover {
  color: #fff;
  background-color: rgb(var(--em-rgb-accent));
}

.skin-tone {
  width: 16px;
  height: 16px;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.skin-tone:after {
  content: "";
  mix-blend-mode: overlay;
  background: linear-gradient(rgba(255, 255, 255, .2), rgba(0, 0, 0, 0));
  border: 1px solid rgba(0, 0, 0, .8);
  border-radius: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;
}

.skin-tone-1 {
  background-color: #ffc93a;
}

.skin-tone-2 {
  background-color: #ffdab7;
}

.skin-tone-3 {
  background-color: #e7b98f;
}

.skin-tone-4 {
  background-color: #c88c61;
}

.skin-tone-5 {
  background-color: #a46134;
}

.skin-tone-6 {
  background-color: #5d4437;
}

[data-index] {
  justify-content: space-between;
}

[data-emoji-set="twitter"] .skin-tone:after {
  box-shadow: none;
  border-color: rgba(0, 0, 0, .5);
}

[data-emoji-set="twitter"] .skin-tone-1 {
  background-color: #fade72;
}

[data-emoji-set="twitter"] .skin-tone-2 {
  background-color: #f3dfd0;
}

[data-emoji-set="twitter"] .skin-tone-3 {
  background-color: #eed3a8;
}

[data-emoji-set="twitter"] .skin-tone-4 {
  background-color: #cfad8d;
}

[data-emoji-set="twitter"] .skin-tone-5 {
  background-color: #a8805d;
}

[data-emoji-set="twitter"] .skin-tone-6 {
  background-color: #765542;
}

[data-emoji-set="google"] .skin-tone:after {
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .4);
}

[data-emoji-set="google"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="google"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="google"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="google"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="google"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="google"] .skin-tone-6 {
  background-color: #61493f;
}

[data-emoji-set="facebook"] .skin-tone:after {
  border-color: rgba(0, 0, 0, .4);
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;
}

[data-emoji-set="facebook"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="facebook"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="facebook"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="facebook"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="facebook"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="facebook"] .skin-tone-6 {
  background-color: #61493f;
}

`;const Xt="%[a-f0-9]{2}",vt=new RegExp("("+Xt+")|([^%]+?)","gi"),bt=new RegExp("("+Xt+")+","gi");function ze(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(e.length===1)return e;t=t||1;const n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],ze(n),ze(r))}function Mr(e){try{return decodeURIComponent(e)}catch{let t=e.match(vt)||[];for(let n=1;n<t.length;n++)e=ze(t,n).join(""),t=e.match(vt)||[];return e}}function Rr(e){const t={"%FE%FF":"��","%FF%FE":"��"};let n=bt.exec(e);for(;n;){try{t[n[0]]=decodeURIComponent(n[0])}catch{const i=Mr(n[0]);i!==n[0]&&(t[n[0]]=i)}n=bt.exec(e)}t["%C2"]="�";const r=Object.keys(t);for(const i of r)e=e.replace(new RegExp(i,"g"),t[i]);return e}function Lr(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return Rr(e)}}function Yt(e,t){if(!(typeof e=="string"&&typeof t=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e===""||t==="")return[];const n=e.indexOf(t);return n===-1?[]:[e.slice(0,n),e.slice(n+t.length)]}function Or(e,t){const n={};if(Array.isArray(t))for(const r of t){const i=Object.getOwnPropertyDescriptor(e,r);i!=null&&i.enumerable&&Object.defineProperty(n,r,i)}else for(const r of Reflect.ownKeys(e)){const i=Object.getOwnPropertyDescriptor(e,r);if(i.enumerable){const o=e[r];t(r,o,e)&&Object.defineProperty(n,r,i)}}return n}const Pr=e=>e==null,Er=e=>encodeURIComponent(e).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`),Me=Symbol("encodeFragmentIdentifier");function Br(e){switch(e.arrayFormat){case"index":return t=>(n,r)=>{const i=n.length;return r===void 0||e.skipNull&&r===null||e.skipEmptyString&&r===""?n:r===null?[...n,[y(t,e),"[",i,"]"].join("")]:[...n,[y(t,e),"[",y(i,e),"]=",y(r,e)].join("")]};case"bracket":return t=>(n,r)=>r===void 0||e.skipNull&&r===null||e.skipEmptyString&&r===""?n:r===null?[...n,[y(t,e),"[]"].join("")]:[...n,[y(t,e),"[]=",y(r,e)].join("")];case"colon-list-separator":return t=>(n,r)=>r===void 0||e.skipNull&&r===null||e.skipEmptyString&&r===""?n:r===null?[...n,[y(t,e),":list="].join("")]:[...n,[y(t,e),":list=",y(r,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t=e.arrayFormat==="bracket-separator"?"[]=":"=";return n=>(r,i)=>i===void 0||e.skipNull&&i===null||e.skipEmptyString&&i===""?r:(i=i===null?"":i,r.length===0?[[y(n,e),t,y(i,e)].join("")]:[[r,y(i,e)].join(e.arrayFormatSeparator)])}default:return t=>(n,r)=>r===void 0||e.skipNull&&r===null||e.skipEmptyString&&r===""?n:r===null?[...n,y(t,e)]:[...n,[y(t,e),"=",y(r,e)].join("")]}}function Ir(e){let t;switch(e.arrayFormat){case"index":return(n,r,i)=>{if(t=/\[(\d*)]$/.exec(n),n=n.replace(/\[\d*]$/,""),!t){i[n]=r;return}i[n]===void 0&&(i[n]={}),i[n][t[1]]=r};case"bracket":return(n,r,i)=>{if(t=/(\[])$/.exec(n),n=n.replace(/\[]$/,""),!t){i[n]=r;return}if(i[n]===void 0){i[n]=[r];return}i[n]=[...i[n],r]};case"colon-list-separator":return(n,r,i)=>{if(t=/(:list)$/.exec(n),n=n.replace(/:list$/,""),!t){i[n]=r;return}if(i[n]===void 0){i[n]=[r];return}i[n]=[...i[n],r]};case"comma":case"separator":return(n,r,i)=>{const o=typeof r=="string"&&r.includes(e.arrayFormatSeparator),s=typeof r=="string"&&!o&&E(r,e).includes(e.arrayFormatSeparator);r=s?E(r,e):r;const a=o||s?r.split(e.arrayFormatSeparator).map(l=>E(l,e)):r===null?r:E(r,e);i[n]=a};case"bracket-separator":return(n,r,i)=>{const o=/(\[])$/.test(n);if(n=n.replace(/\[]$/,""),!o){i[n]=r&&E(r,e);return}const s=r===null?[]:r.split(e.arrayFormatSeparator).map(a=>E(a,e));if(i[n]===void 0){i[n]=s;return}i[n]=[...i[n],...s]};default:return(n,r,i)=>{if(i[n]===void 0){i[n]=r;return}i[n]=[...[i[n]].flat(),r]}}}function Qt(e){if(typeof e!="string"||e.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function y(e,t){return t.encode?t.strict?Er(e):encodeURIComponent(e):e}function E(e,t){return t.decode?Lr(e):e}function en(e){return Array.isArray(e)?e.sort():typeof e=="object"?en(Object.keys(e)).sort((t,n)=>Number(t)-Number(n)).map(t=>e[t]):e}function tn(e){const t=e.indexOf("#");return t!==-1&&(e=e.slice(0,t)),e}function Dr(e){let t="";const n=e.indexOf("#");return n!==-1&&(t=e.slice(n)),t}function _t(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&typeof e=="string"&&e.trim()!==""?e=Number(e):t.parseBooleans&&e!==null&&(e.toLowerCase()==="true"||e.toLowerCase()==="false")&&(e=e.toLowerCase()==="true"),e}function Oe(e){e=tn(e);const t=e.indexOf("?");return t===-1?"":e.slice(t+1)}function Pe(e,t){t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t},Qt(t.arrayFormatSeparator);const n=Ir(t),r=Object.create(null);if(typeof e!="string"||(e=e.trim().replace(/^[?#&]/,""),!e))return r;for(const i of e.split("&")){if(i==="")continue;const o=t.decode?i.replace(/\+/g," "):i;let[s,a]=Yt(o,"=");s===void 0&&(s=o),a=a===void 0?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?a:E(a,t),n(E(s,t),a,r)}for(const[i,o]of Object.entries(r))if(typeof o=="object"&&o!==null)for(const[s,a]of Object.entries(o))o[s]=_t(a,t);else r[i]=_t(o,t);return t.sort===!1?r:(t.sort===!0?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce((i,o)=>{const s=r[o];return i[o]=s&&typeof s=="object"&&!Array.isArray(s)?en(s):s,i},Object.create(null))}function nn(e,t){if(!e)return"";t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t},Qt(t.arrayFormatSeparator);const n=s=>t.skipNull&&Pr(e[s])||t.skipEmptyString&&e[s]==="",r=Br(t),i={};for(const[s,a]of Object.entries(e))n(s)||(i[s]=a);const o=Object.keys(i);return t.sort!==!1&&o.sort(t.sort),o.map(s=>{const a=e[s];return a===void 0?"":a===null?y(s,t):Array.isArray(a)?a.length===0&&t.arrayFormat==="bracket-separator"?y(s,t)+"[]":a.reduce(r(s),[]).join("&"):y(s,t)+"="+y(a,t)}).filter(s=>s.length>0).join("&")}function rn(e,t){var i;t={decode:!0,...t};let[n,r]=Yt(e,"#");return n===void 0&&(n=e),{url:((i=n==null?void 0:n.split("?"))==null?void 0:i[0])??"",query:Pe(Oe(e),t),...t&&t.parseFragmentIdentifier&&r?{fragmentIdentifier:E(r,t)}:{}}}function on(e,t){t={encode:!0,strict:!0,[Me]:!0,...t};const n=tn(e.url).split("?")[0]||"",r=Oe(e.url),i={...Pe(r,{sort:!1}),...e.query};let o=nn(i,t);o&&(o=`?${o}`);let s=Dr(e.url);if(e.fragmentIdentifier){const a=new URL(n);a.hash=e.fragmentIdentifier,s=t[Me]?a.hash:`#${e.fragmentIdentifier}`}return`${n}${o}${s}`}function sn(e,t,n){n={parseFragmentIdentifier:!0,[Me]:!1,...n};const{url:r,query:i,fragmentIdentifier:o}=rn(e,n);return on({url:r,query:Or(i,t),fragmentIdentifier:o},n)}function Fr(e,t,n){const r=Array.isArray(t)?i=>!t.includes(i):(i,o)=>!t(i,o);return sn(e,r,n)}const Ar=Object.freeze(Object.defineProperty({__proto__:null,exclude:Fr,extract:Oe,parse:Pe,parseUrl:rn,pick:sn,stringify:nn,stringifyUrl:on},Symbol.toStringTag,{value:"Module"}));function q({text:e,Icon:t,count:n,navigate:r,link:i}){return p.jsxs(Mn,{sx:{display:"flex",cursor:"pointer",alignItems:"center",minWidth:"3rem"},onClick:()=>r(i),children:[p.jsx(j,{component:"div",sx:{fontSize:"1.3rem"},children:p.jsx(j,{children:t})}),p.jsx(T,{sx:{pl:".3rem",fontSize:"1rem"},children:e})]})}function Xr(){xe(Cn),xe(Sn);const[e,t]=ee.useState(""),n=jn(),r="en",i=o=>{JSON.parse(localStorage.getItem("lang")),o.preventDefault(),Ar.stringify({search:e})};return p.jsxs(p.Fragment,{children:[p.jsx(H,{sx:{bgcolor:D.main,width:"100%",height:35,display:"block",color:D.white,"@media screen and (max-width:768px)":{display:"none"}},children:p.jsx(Ke,{children:p.jsxs(H,{direction:"row",justifyContent:"space-between",sx:{alignItems:"center",height:35},children:[p.jsx(T,{children:"we are open 247"}),p.jsxs(Ne,{sx:{display:"flex",pl:"1.5rem",textAlign:"center"},children:[p.jsx(zn,{}),p.jsx(q,{text:R.signIn[r],Icon:R.signIn.icon,link:R.signIn.link,navigate:n}),p.jsx(q,{text:R.SignUp[r],link:R.SignUp.link,navigate:n})]})]})})}),p.jsx(Rn,{sx:{paddingTop:2,paddingBottom:2,position:"relative"},elevation:1,children:p.jsx(Ke,{children:p.jsxs(H,{direction:"row",justifyContent:"space-between",sx:{width:"100%",height:50,alignItems:"center"},children:[p.jsx(j,{className:"logo",onClick:()=>n("/Home"),children:p.jsxs(j,{sx:{display:"flex",fontSize:{xs:".7rem"}},children:[p.jsx(j,{variant:"h4",component:"h1",fontStyle:"italic",color:D.main,children:"Afro"}),p.jsx(j,{variant:"h4",component:"h1",children:"Trade"})]})}),p.jsxs(j,{component:"form",sx:{width:"40%",height:"2rem",display:" flex",justifyContent:"space-between",padding:"0.2rem",border:"solid 2px rgba(0 ,0 ,0 , 0.8)",borderRadius:"1.5rem",textAlign:"center",alignItems:"center",pl:3,ml:"4rem","@media screen and (max-width: 768px)":{display:"none"}},onSubmit:i,children:[p.jsx(We,{type:"text",placeholder:"search for anything",sx:{width:"85%"},value:e,disableUnderline:!0,onChange:o=>t(o.target.value)}),p.jsxs(Ln,{type:"submit",variant:"contained",disableElevation:!0,sx:{borderRadius:12,textTransform:"capitalize"},children:[p.jsx(Ge,{}),p.jsx(T,{variant:"subtitle2",pl:"2px",children:"search"})]})]}),p.jsxs(j,{component:"form",sx:{display:"none","@media screen and (max-width: 768px)":{display:"flex",justifyContent:"space-between",minWidth:"10rem",width:"50%",background:D.Grey100,height:"2rem",padding:"0.2rem",borderRadius:"1.5rem",textAlign:"center",alignItems:"center",pl:2}},onSubmit:i,children:[p.jsx(j,{color:D.main,mt:"3px",children:p.jsx(Ge,{})}),p.jsx(We,{type:"text",placeholder:"search for anything",disableUnderline:!0,sx:{minWidth:"100%",ml:1,fontSize:".9rem"},value:e,onChange:o=>t(o.target.value)})]}),p.jsxs(Ne,{sx:{"@media screen and (max-width: 768px)":{display:"none"},display:"flex",pl:"1.5rem",textAlign:"center"},children:[p.jsx(H,{children:p.jsxs(j,{children:[p.jsx(j,{sx:{position:"relative"},children:p.jsx(T,{variant:"caption",lineHeight:1,sx:{fontSize:"10px",bgcolor:D.main,p:"3px",color:D.white,borderRadius:"50%",position:"absolute",top:"-5px",left:"1.3rem"},children:"12"})}),p.jsx(q,{text:R.cart[r],Icon:R.cart.icon})]})}),p.jsx(q,{text:R.Contact[r],Icon:R.Contact.icon,link:R.Contact.link,navigate:n}),p.jsx(q,{text:"+260773416630"})]})]})})})]})}export{Jt as $,kt as B,Zr as C,Gr as F,Xr as N,Jr as a,I as b,Ge as c,qr as d,Kr as e,En as g,yt as u};
