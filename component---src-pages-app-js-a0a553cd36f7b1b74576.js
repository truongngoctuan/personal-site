(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Tp6f:function(e,t,n){},y9VM:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("YwZP"),o=n("Bl7J"),c=n("vrFN"),s=(n("pJf4"),n("Wbzz")),l=n("k1TG"),u=n("RD7I"),m=n("cNwE");var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(u.a)(e,Object(l.a)({defaultTheme:m.a},t))},d=(n("rzGZ"),n("Dq+y"),n("8npG"),n("U6Bt"),n("sC2a"),n("JHok"),n("aXB2")),f=(n("17x9"),n("iuhU")),h=n("H2TA"),v=[0,1,2,3,4,5,6,7,8,9,10],g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var b=a.forwardRef((function(e,t){var n=e.alignContent,r=void 0===n?"stretch":n,i=e.alignItems,o=void 0===i?"stretch":i,c=e.classes,s=e.className,u=e.component,m=void 0===u?"div":u,p=e.container,h=void 0!==p&&p,v=e.direction,g=void 0===v?"row":v,x=e.item,b=void 0!==x&&x,w=e.justify,y=void 0===w?"flex-start":w,E=e.lg,j=void 0!==E&&E,N=e.md,S=void 0!==N&&N,k=e.sm,O=void 0!==k&&k,C=e.spacing,P=void 0===C?0:C,T=e.wrap,W=void 0===T?"wrap":T,I=e.xl,M=void 0!==I&&I,G=e.xs,H=void 0!==G&&G,z=e.zeroMinWidth,R=void 0!==z&&z,D=Object(d.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),B=Object(f.a)(c.root,s,h&&[c.container,0!==P&&c["spacing-xs-".concat(String(P))]],b&&c.item,R&&c.zeroMinWidth,"row"!==g&&c["direction-xs-".concat(String(g))],"wrap"!==W&&c["wrap-xs-".concat(String(W))],"stretch"!==o&&c["align-items-xs-".concat(String(o))],"stretch"!==r&&c["align-content-xs-".concat(String(r))],"flex-start"!==y&&c["justify-xs-".concat(String(y))],!1!==H&&c["grid-xs-".concat(String(H))],!1!==O&&c["grid-sm-".concat(String(O))],!1!==S&&c["grid-md-".concat(String(S))],!1!==j&&c["grid-lg-".concat(String(j))],!1!==M&&c["grid-xl-".concat(String(M))]);return a.createElement(m,Object(l.a)({className:B,ref:t},D))})),w=Object(h.a)((function(e){return Object(l.a)(Object(l.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return v.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(x(r,2)),width:"calc(100% + ".concat(x(r),")"),"& > $item":{padding:x(r,2)}})})),n}(e,"xs")),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};g.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(l.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(b),y=n("30+C"),E=n("ofer"),j=function(e){var t=e.items,n=N();return r.a.createElement(w,{container:!0,spacing:3,className:n.root},t.map((function(e){return r.a.createElement(w,{key:e.codeName,item:!0,xs:6,sm:4,md:3},r.a.createElement(y.a,{className:n.paper,elevation:8,onClick:function(){return Object(s.navigate)("/app/novel-details/"+e.codeName)}},r.a.createElement("img",{className:n.thumbnail,alt:"novel-thumbnail",src:e.thumbnail})),r.a.createElement("div",{className:n.subTitle},r.a.createElement(E.a,{variant:"subtitle2",color:"textPrimary"},e.name),r.a.createElement(E.a,{variant:"caption",color:"textSecondary"},"2019")))})))},N=p((function(e){return{root:{flexGrow:1},paper:{marginLeft:e.spacing(1),marginRight:e.spacing(1),maxWidth:500,cursor:"pointer"},thumbnail:{width:"100%",objectFit:"cover",display:"block",margin:"auto"},subTitle:{marginLeft:e.spacing(1),marginRight:e.spacing(1),paddingTop:e.spacing(1)}}}));j.defaultProps={items:[]};var S=j,k=n("/MKj"),O=(n("6kNP"),n("kD0k")),C=n.n(O),P=(n("ls82"),n("vDqi")),T=n.n(P);function W(e,t,n,a,r,i,o){try{var c=e[i](o),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(a,r)}function I(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){W(i,a,r,o,c,"next",e)}function c(e){W(i,a,r,o,c,"throw",e)}o(void 0)}))}}function M(){return(M=I(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",T.a.get("/api/novels").then((function(e){return e.data})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=I(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",T.a.get("/api/novels/"+t).then((function(e){return e.data})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=Object(k.b)((function(e){return{novels:e.novels}}),(function(e){return{setNovels:function(t){return e({type:"NOVEL-GET-LIST",data:t})}}}))((function(e){var t=e.novels,n=e.setNovels;return Object(a.useEffect)((function(){(function(){return M.apply(this,arguments)})().then((function(e){n(e)}))}),[]),r.a.createElement(S,{items:t})}));var z=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.idx,n=e.name,a=t%2==0?"chapter-item--even":"chapter-item--odd";return r.a.createElement("div",{className:"chapter-item",role:"button",tabIndex:"0"},r.a.createElement(w,{className:["chapter-item--text-idx",a]},r.a.createElement(E.a,{variant:"body2",color:"textSecondary",align:"center"},t+1)),r.a.createElement(w,{className:["chapter-item--text",a]},r.a.createElement(E.a,{variant:"body2",color:"textSecondary"},n)))},a}(r.a.Component);z.defaultProps={idx:0,url:"issth-book-1-chapter-1",name:"Chapter 1: Scholar Meng Hao"};var R=z,D=function(e){var t=e.items;return r.a.createElement(w,{className:"chapters-list"},t.map((function(e,t){return r.a.createElement(R,{key:e.url,idx:t,url:e.url,name:e.name})})))};D.defaultProps={items:[{url:"issth-book-1-chapter-1",name:"Chapter 1: Scholar Meng Hao"},{url:"issth-book-1-chapter-2",name:"Chapter 2: The Reliance Sect"},{url:"issth-book-1-chapter-3",name:"Chapter 3: Promotion to the Outer Sect"}]};var B=D,L=n("kKAo"),F=function(e){var t=e.name,n=e.thumbnail,a=e.synopsis,i=J();return r.a.createElement(w,{container:!0,className:i.root},r.a.createElement(w,{xs:12,sm:3},r.a.createElement(L.a,{elevation:4},r.a.createElement("img",{className:i.thumbnail,alt:"novel-thumbnail",src:n}))),r.a.createElement(w,{className:i.infoText,xs:12,sm:9},r.a.createElement(E.a,{color:"textPrimary",variant:"h3"},t),r.a.createElement("br",null),r.a.createElement(E.a,{color:"textPrimary",variant:"caption"},a)))},J=p((function(e){return{root:{flexGrow:1},paper:{marginLeft:e.spacing(1),marginRight:e.spacing(1),maxWidth:500,cursor:"pointer"},thumbnail:{borderRadius:e.spacing(.5),width:"100%",objectFit:"cover",display:"block",margin:"auto"},infoText:{padding:e.spacing(2)}}}));F.defaultProps={title:"I shall seal the heavens",thumbnail:"https://cdn.wuxiaworld.com/images/covers/issth.jpg",synopsis:"I Shall Seal the Heavens is the story of the young scholar Meng Hao, who gets forcibly recruited into a sect of immortal cultivators. In the cultivation world, the strong prey on the weak, and the law of the jungle prevails. Meng Hao must adapt to survive. Filled with both comedy and drama, I Shall Seal the Heavens remains one of the most beloved xianxia stories ever translated. What does it mean to “Seal the Heavens?” This is a secret that you will have to uncover along with Meng Hao!"};var _=F,q=(n("Tp6f"),Object(k.b)((function(e){return{novel:e.novel}}),(function(e){return{setNovel:function(t){return e({type:"NOVEL-GET",data:t})}}}))((function(e){var t=e.codeName,n=e.novel,i=e.setNovel;return Object(a.useEffect)((function(){(function(e){return G.apply(this,arguments)})(t).then((function(e){i(e)}))}),[]),r.a.createElement("div",null,r.a.createElement(E.a,{variant:"body1"},t),r.a.createElement(_,{name:n.name,thumbnail:n.thumbnail,synopsis:n.synopsis}),r.a.createElement("div",{className:"novel-details-page--list"},r.a.createElement(B,null)))})));t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Home"}),r.a.createElement(i.Router,null,r.a.createElement(q,{path:Object(s.withPrefix)("/app/novel-details/:codeName")}),r.a.createElement(H,{path:Object(s.withPrefix)("/app/novel-list")}),r.a.createElement(H,{path:Object(s.withPrefix)("/app/")})))}}}]);
//# sourceMappingURL=component---src-pages-app-js-a0a553cd36f7b1b74576.js.map