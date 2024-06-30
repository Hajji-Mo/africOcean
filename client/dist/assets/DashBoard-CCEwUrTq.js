import{j as e,an as A,au as Q,al as H,r as S,a3 as q,aA as K,L as z,aK as _,ao as V,aL as X}from"./index-DFVXx1fk.js";import{d as $}from"./catagories-W00yl6G8.js";import{a9 as D,e as f,O as Z,Z as I,X as J,P as E}from"./Select-B5G1tRLl.js";import{G as i,A as Y}from"./Grid-mWX_y6Fz.js";import{T as o}from"./TextField-D7f5rWup.js";import{M as W}from"./index.esm-BhpOSjh8.js";import{e as ee,f as te,g as re,h as se}from"./productsApiSlice-Bd7prsfD.js";import{C as ae}from"./Container-CroC0MpK.js";import{L as ie}from"./ListItem-DRcMnRCq.js";import{a as F,m as v,f as T,d as U,b as w,e as B,c as L}from"./TableRow-CGqN4ZYV.js";import"./index.esm-AvSe5y8T.js";import"./IconButton-CPVudE5b.js";function le({langData:t,lang:r,handleChange:l}){const h=$.find(a=>a.title[r]===t.category),C=t.category==="",x=r==="en"?"fill by English":"fill by France";return $.map(a=>a.title),e.jsxs(D,{children:[e.jsx(f,{sx:{pb:"2rem",textAlign:"center"},children:x}),e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(i,{item:!0,xs:12,sm:6,lg:3,children:e.jsx(o,{required:!0,fullWidth:!0,select:!0,id:`${r}_Category`,label:`${r} Category`,name:`${r}_Category`,value:t.category,autoComplete:"Category",onChange:a=>l(r,"category",a.target.value),children:$&&$.map((a,g)=>e.jsx(W,{value:a.title[r],children:a.title[r]},g))})}),e.jsx(i,{item:!0,xs:12,sm:6,lg:3,children:e.jsx(o,{required:!0,fullWidth:!0,select:!0,value:t.subcatagory,name:`${r}_SubCategory`,label:`${r}  SubCategory`,id:`${r}_SubCategory`,disabled:C,autoComplete:"SubCategory",onChange:a=>l(r,"subcategory",a.target.value),children:h&&h.subcatagory.map((a,g)=>e.jsx(W,{value:a[r],children:a[r]},g))})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsx(o,{required:!0,fullWidth:!0,type:"text",name:`${r}_Description`,label:`${r} Description`,autoComplete:`${r}_Description`,multiline:!0,value:t.description,onChange:a=>l(r,"description",a.target.value)})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsx(o,{required:!0,fullWidth:!0,multiline:!0,name:`${r}_summary`,label:`${r} Summary`,id:`${r}_summary`,autoComplete:`${r}_summary`,value:t.summary,onChange:a=>l(r,"summary",a.target.value)})})]})]})}const ne=()=>{const[t]=ee(),[r]=te(),l=A(Q);H();const[h,C]=S.useState(""),[x,a]=S.useState([]),[g,M]=S.useState("en"),[m,y]=S.useState({visible:!1,color:"",message:""}),[n,k]=S.useState({en:{description:"",category:"",subcategory:"",summary:""},fr:{description:"",category:"",subcategory:"",summary:""},name:"",rate:"",price:"",priceDiscount:"",coverImg:null,images:[],brand:"",tags:[],rank:"",country:"",creator:"",city:""}),G=(s,d,c)=>{k(P=>({...P,[s]:{...P[s],[d]:c}}))},p=(s,d)=>{k(c=>({...c,[s]:d}))},N=async s=>{s.preventDefault();const d=new FormData;if(!x>0)throw Error("not selected any image");x.forEach(c=>{d.append("images",c)}),d.append("coverImg",h),(!l&&!l.role==="manager"||!l&&!l.role==="admin")&&(y({...m,visible:!0,color:"error",message:"UnAutherized to upload product!!!"}),setTimeout(()=>{y({...m,visible:!1})},3e3)),n.creator=l._id;try{const c=await r(d),{coverImg:P,images:O}=c.data;n.coverImg=P,n.images=O;const pe=await t(n);y({...m,visible:!0,color:"success",message:"successfully uplaoded your product"}),setTimeout(()=>{y({...m,visible:!1})},3e3)}catch(c){throw console.log(c),y({...m,visible:!0,color:"error",message:c.data.message}),setTimeout(()=>y({...m,visible:!1}),5e3),Error(c)}};return e.jsxs(ae,{sx:{marginTop:"2.5rem"},children:[e.jsx(f,{variant:"h4",children:"Create Product"}),m.visible&&e.jsx(Y,{variant:"filled",severity:m.color,sx:{mt:3,position:"fixed"},children:m.message}),e.jsxs(q,{component:"form",Validate:!0,onSubmit:N,sx:{mt:3},children:[e.jsx(f,{sx:{pb:"2rem",pt:"2rem",textAlign:"center"},children:"Common Fields"}),e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(i,{item:!0,xs:6,sm:4,lg:4,children:e.jsx(o,{autoComplete:"name",name:"name",required:!0,fullWidth:!0,id:"name",label:"Name",value:n.name,onChange:s=>p("name",s.target.value)})}),e.jsx(i,{item:!0,xs:6,sm:4,lg:4,children:e.jsx(o,{autoComplete:"brand",name:"brand",required:!0,fullWidth:!0,id:"brand",label:"Brand",value:n.brand,onChange:s=>p("brand",s.target.value)})}),e.jsx(i,{item:!0,xs:6,sm:4,lg:4,children:e.jsx(o,{autoComplete:"Rate",name:"Rate",fullWidth:!0,id:"Rate",label:"Rating",type:"number",value:n.rate,onChange:s=>p("rate",s.target.value)})}),e.jsx(i,{item:!0,xs:6,sm:4,lg:4,children:e.jsx(o,{autoComplete:"price",name:"price",type:"number",required:!0,fullWidth:!0,id:"price",label:"Price",value:n.price,onChange:s=>p("price",s.target.value)})}),e.jsx(i,{item:!0,xs:6,sm:4,lg:4,children:e.jsx(o,{autoComplete:"Price-Discount",name:"PriceDiscount",fullWidth:!0,type:"number",id:"Price-Discount",label:"Price Discount",value:n.priceDiscount,onChange:s=>p("priceDiscount",s.target.value)})}),e.jsx(i,{item:!0,xs:6,sm:4,lg:4,children:e.jsx(o,{autoComplete:"country",name:"country",required:!0,fullWidth:!0,id:"country",label:"Country",value:n.country,onChange:s=>p("country",s.target.value)})}),e.jsx(i,{item:!0,xs:6,sm:4,lg:4,children:e.jsx(o,{autoComplete:"city",name:"city",required:!0,fullWidth:!0,id:"city",label:"City",value:n.city,onChange:s=>p("city",s.target.value)})}),e.jsx(i,{item:!0,xs:12,sm:4,lg:4,children:e.jsx(o,{autoComplete:"Tags",name:"Tags",required:!0,fullWidth:!0,id:"Tags",label:"Tags",multiline:!0,value:n.tags,onChange:s=>p("tags",s.target.value)})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(q,{p:".7rem",borderRadius:"3px",textAlign:"center",border:"1px solid rgba(0,0,0,0.3)",children:[e.jsx(Z,{type:"file",accept:"image/*",name:"",onChange:s=>C(s.target.files[0]),style:{display:"none"},id:"file-input"}),e.jsx("label",{htmlFor:"file-input",children:e.jsx(I,{variant:"outlined",component:"span",sx:{textTransform:"capitalize"},children:"Select Cover Img"})}),h&&e.jsxs("div",{children:[e.jsx(f,{variant:"subtitle1",mt:2,textTransform:"capitalize",children:"Selected CoverImg:"}),e.jsx(ie,{sx:{pl:5},children:h.name})]})]})}),e.jsx(i,{item:!0,xs:12,sm:6,children:e.jsxs(q,{p:".7rem",borderRadius:"3px",textAlign:"center",border:"1px solid rgba(0,0,0,0.3)",children:[e.jsx("input",{type:"file",accept:"image/*",name:"",multiple:!0,onChange:s=>{const d=Array.from(s.target.files);!d.length>0||a(d)},style:{display:"none"},id:"multiple-file-input"}),e.jsx("label",{htmlFor:"multiple-file-input",children:e.jsx(I,{variant:"outlined",component:"span",sx:{textTransform:"capitalize"},children:"Select Images"})}),x.length>0&&e.jsxs("div",{children:[e.jsx(f,{variant:"subtitle1",mt:2,textTransform:"capitalize",children:"Selected Images:"}),e.jsx("ul",{children:x.map(s=>e.jsx("li",{children:s.name},s.name))})]})]})})]}),e.jsxs(D,{component:"form",sx:{mt:3,mr:1,minWidth:90},size:"small",direction:"row",children:[e.jsx(f,{variant:"h6",children:"Select languege:"}),e.jsxs(J,{labelId:"demo-select-small-label",id:"demo-select-small",value:g,variant:"standard",label:"lang",disableUnderline:!0,sx:{ml:".5rem"},onChange:s=>M(s.target.value),children:[e.jsx(W,{value:"en",children:e.jsx("em",{children:"English"})}),e.jsx(W,{value:"fr",children:e.jsx("em",{children:"French"})})]})]}),e.jsx(le,{langData:n[g],lang:g,handleChange:G}),e.jsx(I,{type:"submit",fullWidth:!0,variant:"contained",sx:{my:3,mb:2},children:"Upload"})]})]})},oe=K.injectEndpoints({endpoints:t=>({getAllUsers:t.query({query:()=>"api/v1/users",providesTags:["users"]}),getOneUser:t.query({query:({id:r})=>`api/v1/products/${r}`,providesTags:["users"]})})}),{useGetAllUsersQuery:ce}=oe,u=z(F)(({theme:t})=>({[`&.${v.head}`]:{backgroundColor:t.palette.common.black,color:t.palette.common.white},[`&.${v.body}`]:{fontSize:14}})),de=z(T)(({theme:t})=>({"&:nth-of-type(odd)":{backgroundColor:t.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}));function ue(){const{data:t}=ce();return e.jsx(U,{component:E,children:e.jsxs(w,{sx:{minWidth:700},"aria-label":"customized table",children:[e.jsx(B,{children:e.jsxs(T,{children:[e.jsx(u,{children:"Customer Name"}),e.jsx(u,{children:"Email"}),e.jsx(u,{children:"Role"}),e.jsx(u,{children:"action"}),e.jsx(u,{children:"Protein (g)"})]})}),e.jsx(L,{children:t&&t.doc.map(r=>e.jsxs(de,{children:[e.jsx(u,{component:"th",scope:"row",children:r.name}),e.jsx(u,{align:"left",children:r.email}),e.jsx(u,{align:"left",children:r.role}),e.jsx(u,{align:"right",children:r.carbs}),e.jsx(u,{align:"right",children:r.protein})]},r.name))})]})})}function R(){return e.jsx("div",{children:"profile"})}const j=_(F)(({theme:t})=>({[`&.${v.head}`]:{backgroundColor:t.palette.common.black,color:t.palette.common.white,textTransform:"capitalize"},[`&.${v.body}`]:{fontSize:14}})),me=_(T)(({theme:t})=>({textTransform:"capitalize","&:nth-of-type(odd)":{backgroundColor:t.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}));function he({row:t,lang:r}){const[l]=re(),h=async()=>{const C=t._id,x="active";try{await l({id:C,activeStatus:x}),window.location.reload()}catch(a){throw Error(a)}};return e.jsxs(me,{children:[e.jsx(j,{component:"th",scope:"row",children:t.name}),e.jsx(j,{children:t.brand}),e.jsx(j,{children:t[r].category}),e.jsx(j,{children:t[r].subcategory}),e.jsxs(j,{children:["$",t.price]}),e.jsxs(j,{children:[t.activeStatus,"..."]}),e.jsx(j,{children:e.jsx(I,{onClick:h,children:"update"})})]},t.name)}const b=z(F)(({theme:t})=>({[`&.${v.head}`]:{backgroundColor:t.palette.common.black,color:t.palette.common.white,textTransform:"capitalize"},[`&.${v.body}`]:{fontSize:14}}));z(T)(({theme:t})=>({textTransform:"capitalize","&:nth-of-type(odd)":{backgroundColor:t.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}));function xe(){const t=A(V),{data:r}=se(t);return e.jsx(U,{component:E,children:e.jsxs(w,{sx:{minWidth:700},"aria-label":"customized table",children:[e.jsx(B,{children:e.jsxs(T,{children:[e.jsx(b,{children:"Product name"}),e.jsx(b,{children:"Brand"}),e.jsx(b,{children:"Category"}),e.jsx(b,{children:"subcategory"}),e.jsx(b,{children:"Price"}),e.jsx(b,{children:"Status"}),e.jsx(b,{children:"action"})]})}),e.jsx(L,{children:r&&r.doc.map(l=>e.jsx(he,{row:l,lang:t},l._id))})]})})}function We(){const t=A(X);return e.jsxs(D,{children:[t==="profile"&&e.jsx(R,{})," ",t==="profile"&&e.jsx(R,{}),t==="upload product"&&e.jsx(ne,{}),t==="customers"&&e.jsx(ue,{}),t==="products"&&e.jsx(xe,{})]})}export{We as default};