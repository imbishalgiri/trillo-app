import{s as c,r as a,j as m,n as h,e as C,u as L,a as S,R as B,b as E,D as M,H as N}from"./vendor.19e18846.js";const O=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}};O();const R=c.div`
  align-items: flex-start;
  background-color: #3179ba;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
  width: 100%;
`,_=c.div`
  padding: 6px 16px 12px;
  font-weight: bold;
  font-size: 20px;
`,P=c.button`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${e=>e.dark?"#000":"#fff"};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #ffffff52;
  }
`,j=c.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`,F=c.button`
  cursor: pointer;
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
  transition: background 85ms ease-in;
  &:hover {
    background-color: #458533;
  }
`,G=c.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`,y=c.div`
  opacity: ${e=>e.isHidden?.5:1};
  transform: ${e=>e.isPreview?"rotate(5deg)":void 0};
`,H=c(y)`
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
  cursor: move;
`,K=c(y)`
  background-color: #fff;
  cursor: pointer;
  font-weight: none;
  color: #808080;
  text-transform: lowercase;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;c.div`
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;const U=()=>{const e=a.exports.useRef(null);return a.exports.useEffect(()=>{var t;(t=e.current)==null||t.focus()},[]),e},d=m.exports.jsx,x=m.exports.jsxs,$=({onAdd:e})=>{const[t,o]=a.exports.useState(""),s=U();return x(j,{children:[d(G,{value:t,ref:s,onChange:r=>o(r.target.value),onKeyPress:r=>{r.key==="Enter"&&e(t)}}),d(F,{onClick:()=>e(t),children:" Create "})]})},I=e=>{const[t,o]=a.exports.useState(!1),{onAdd:s,toggleButtonText:n,dark:r}=e;return t?d($,{onAdd:i=>{s(i),o(!1)}}):d(P,{dark:r,onClick:()=>o(!0),children:n})},b="ADD_LIST",k="ADD_TASK",v="MOVE_LIST",w="SET_DRAGGED_ITEM",f=(e,t)=>e.findIndex(o=>o.id===t),z=(e,t,o)=>{const s=e[t];return q(V(e,t),s,o)};function V(e,t){return[...e.slice(0,t),...e.slice(t+1)]}function q(e,t,o){return[...e.slice(0,o),t,...e.slice(o)]}const J=(e,t)=>{switch(t.type){case b:return e.lists.push({id:h(),text:t.payload,tasks:[]}),e;case k:const{text:o,listId:s}=t.payload,n=f(e.lists,s);e.lists[n].tasks.push({id:h(),text:o});break;case v:const{draggedId:r,hoverId:i}=t.payload,l=f(e.lists,r),u=f(e.lists,i);e.lists=z(e.lists,l,u);break;case w:e.draggedItem=t.payload;break}},Q={draggedItem:null,lists:[{id:"0",text:"To Do",tasks:[{id:"c0",text:"Generate app scaffold"}]},{id:"1",text:"In Progress",tasks:[{id:"c2",text:"Learn Typescript"}]},{id:"2",text:"Done",tasks:[{id:"c3",text:"Begin to use static typing"}]}]},A=a.exports.createContext({}),W=({children:e})=>{const[t,o]=C(J,Q),{draggedItem:s,lists:n}=t,r=i=>{var l;return((l=n.find(u=>u.id===i))==null?void 0:l.tasks)||[]};return d(A.Provider,{value:{draggedItem:s,lists:n,getTasksByListId:r,dispatch:o},children:e})},g=()=>a.exports.useContext(A),X=({text:e})=>d(K,{children:e}),Y=(e,t)=>({type:k,payload:{text:e,listId:t}}),Z=e=>({type:b,payload:e}),ee=(e,t)=>({type:v,payload:{draggedId:e,hoverId:t}}),D=e=>({type:w,payload:e}),te=(e,t,o,s)=>Boolean(!s&&e&&e.type===t&&e.id===o),oe=e=>{const{dispatch:t}=g(),[,o]=L({type:e.type,item:()=>(t(D(e)),e),end:()=>t(D(null))});return{drag:o}},ne=({text:e,id:t,isPreview:o})=>{const s=a.exports.useRef(null),{draggedItem:n,getTasksByListId:r,dispatch:i}=g(),l=r(t),{drag:u}=oe({type:"COLUMN",id:t,text:e}),[,T]=S({accept:"COLUMN",hover(){if(!!n&&n.type==="COLUMN"){if(n.id===t)return;i(ee(n.id,t))}}});return u(T(s)),console.log(n),x(H,{isPreview:o,ref:s,isHidden:te(n,"COLUMN",t,o),children:[d(_,{children:e}),l.map(p=>d(X,{text:p.text,id:p.id},p.id)),d(I,{toggleButtonText:"+ Add another list",onAdd:p=>{p.trim()&&i(Y(p,t))},dark:!0})]})},re=()=>{const{lists:e,dispatch:t}=g();return x(R,{children:[e.map(o=>d(ne,{text:o.text,id:o.id},o.id)),d(I,{toggleButtonText:"+ Add another list",onAdd:o=>o.trim()&&t(Z(o))})]})};B.render(d(E.StrictMode,{children:d(M,{backend:N,children:d(W,{children:d(re,{})})})}),document.getElementById("root"));
