"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[122],{9122:function(e,n,r){r.r(n),r.d(n,{SendV0Transaction:function(){return f}});var o=r(7891),t=r(1805),a=r(9980),s=r(6300),i=r(8833),c=r(5593),l=r(4968),u=r(2363),d=r(4510),p=r(778).Buffer,f=function(){var e=(0,i.R)().connection,n=(0,c.O)(),r=n.publicKey,f=n.sendTransaction,h=n.wallet,v=(0,d.d)(),m=null===h||void 0===h?void 0:h.adapter.supportedTransactionVersions,b=(0,u.useCallback)((0,o.Z)((function(){var n,o,a,s,i,c,u,d,h,b,y,x;return(0,t.__generator)(this,(function(t){switch(t.label){case 0:n=void 0,t.label=1;case 1:if(t.trys.push([1,6,,7]),!r)throw new Error("Wallet not connected!");if(!m)throw new Error("Wallet doesn't support versioned transactions!");if(!m.has(0))throw new Error("Wallet doesn't support v0 transactions!");return[4,e.getAddressLookupTable(new l.PublicKey("F3MfgEJe1TApJiA14nN2m4uAH4EBVrqdBnHeGeSXvQ7B"))];case 2:if(o=t.sent(),!(a=o.value))throw new Error("Address lookup table wasn't found!");return[4,e.getLatestBlockhashAndContext()];case 3:return s=t.sent(),i=s.context,c=i.slot,u=s.value,d=u.blockhash,h=u.lastValidBlockHeight,b=new l.TransactionMessage({payerKey:r,recentBlockhash:d,instructions:[{data:p.from("Hello, from the Solana Wallet Adapter example app!"),keys:a.state.addresses.map((function(e,n){return{pubkey:e,isWritable:n%2==0,isSigner:!1}})),programId:new l.PublicKey("Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo")}]}),y=new l.VersionedTransaction(b.compileToV0Message([a])),[4,f(y,e,{minContextSlot:c})];case 4:return n=t.sent(),v("info","Transaction sent:",n),[4,e.confirmTransaction({blockhash:d,lastValidBlockHeight:h,signature:n})];case 5:return t.sent(),v("success","Transaction successful!",n),[3,7];case 6:return x=t.sent(),v("error","Transaction failed! ".concat(null===x||void 0===x?void 0:x.message),n),[3,7];case 7:return[2]}}))})),[r,m,e,f,v]);return(0,a.jsx)(s.Z,{variant:"contained",color:"secondary",onClick:b,disabled:!r||!(null===m||void 0===m?void 0:m.has(0)),children:"Send V0 Transaction using Address Lookup Table (devnet)"})}},4510:function(e,n,r){r.d(n,{d:function(){return B}});var o=r(9980),t=(0,r(7979).Z)((0,o.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch"),a=r(892),s=r(9276),i=r(2363),c=r(8640),l=r(1697),u=r(9312),d=r(4574),p=r(7634),f=r(5765),h=r(6119),v=r(2695),m=r(3356),b=r(1677);function y(e){return(0,b.Z)("MuiLink",e)}var x=(0,m.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),k=r(5974),w=r(9946);const g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var Z=({theme:e,ownerState:n})=>{const r=(e=>g[e]||e)(n.color),o=(0,k.DW)(e,`palette.${r}`,!1)||n.color,t=(0,k.DW)(e,`palette.${r}Channel`);return"vars"in e&&t?`rgba(${t} / 0.4)`:(0,w.Fq)(o,.4)};const V=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],T=(0,d.ZP)(v.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,n[`underline${(0,u.Z)(r.underline)}`],"button"===r.component&&n.button]}})((({theme:e,ownerState:n})=>(0,s.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,s.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:Z({theme:e,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${x.focusVisible}`]:{outline:"auto"}})));var S=i.forwardRef((function(e,n){const r=(0,p.Z)({props:e,name:"MuiLink"}),{className:t,color:d="primary",component:v="a",onBlur:m,onFocus:b,TypographyClasses:x,underline:k="always",variant:w="inherit",sx:Z}=r,S=(0,a.Z)(r,V),{isFocusVisibleRef:A,onBlur:C,onFocus:D,ref:M}=(0,f.Z)(),[B,L]=i.useState(!1),H=(0,h.Z)(n,M),E=(0,s.Z)({},r,{color:d,component:v,focusVisible:B,underline:k,variant:w}),W=(e=>{const{classes:n,component:r,focusVisible:o,underline:t}=e,a={root:["root",`underline${(0,u.Z)(t)}`,"button"===r&&"button",o&&"focusVisible"]};return(0,l.Z)(a,y,n)})(E);return(0,o.jsx)(T,(0,s.Z)({color:d,className:(0,c.Z)(W.root,t),classes:x,component:v,onBlur:e=>{C(e),!1===A.current&&L(!1),m&&m(e)},onFocus:e=>{D(e),!0===A.current&&L(!0),b&&b(e)},ref:H,ownerState:E,variant:w,sx:[...Object.keys(g).includes(d)?[]:[{color:d}],...Array.isArray(Z)?Z:[Z]]},S))})),A=r(9667),C=(0,d.ZP)("span")((function(){return{display:"flex",alignItems:"center"}})),D=(0,d.ZP)(S)((function(){return{color:"#ffffff",display:"flex",alignItems:"center",marginLeft:16,textDecoration:"underline","&:hover":{color:"#000000"}}})),M=(0,d.ZP)(t)((function(){return{fontSize:20,marginLeft:8}}));function B(){var e=(0,A.Ds)().enqueueSnackbar;return(0,i.useCallback)((function(n,r,t){e((0,o.jsxs)(C,{children:[r,t&&(0,o.jsxs)(D,{href:"https://explorer.solana.com/tx/".concat(t,"?cluster=devnet"),target:"_blank",children:["Transaction",(0,o.jsx)(M,{})]})]}),{variant:n})}),[e])}}}]);