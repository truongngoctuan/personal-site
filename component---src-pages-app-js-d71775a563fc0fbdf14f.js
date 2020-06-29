(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Tp6f:function(e,t,a){},y9VM:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("YwZP"),i=a("vrFN"),c=(a("pJf4"),a("Wbzz")),s=function(e){var t=e.items;return r.a.createElement("div",{className:"novel-list flex flex-row flex-wrap mx-auto"},t.map((function(e){return r.a.createElement("div",{key:e.codeName,className:"flex flex-col w-32 m-2"},r.a.createElement("img",{className:"shadow-lg rounded rounded-md max-w-full max-h-full h-40 object-cover cursor-pointer",alt:"novel-thumbnail",src:e.thumbnail,onClick:function(){return Object(c.navigate)("/app/novel-details/"+e.codeName)}}),r.a.createElement("div",{className:"mt-1"},r.a.createElement("p",{className:"font-sans text-base whitespace-no-wrap overflow-hidden text-gray-100",style:{textOverflow:"ellipsis"}},e.name),r.a.createElement("p",{className:"font-sans text-xs font-bold text-gray-600"},"2019")))})))};s.defaultProps={items:[]};var l=s,u=a("/MKj"),m=(a("6kNP"),a("8npG"),a("kD0k")),p=a.n(m),d=(a("ls82"),a("vDqi")),f=a.n(d);function h(e,t,a,n,r,o,i){try{var c=e[o](i),s=c.value}catch(l){return void a(l)}c.done?t(s):Promise.resolve(s).then(n,r)}function x(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var o=e.apply(t,a);function i(e){h(o,n,r,i,c,"next",e)}function c(e){h(o,n,r,i,c,"throw",e)}i(void 0)}))}}function v(){return(v=x(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.get("/api/novels").then((function(e){return e.data})).catch((function(e){return console.log(e),null})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=x(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.get("/api/novels/"+t).then((function(e){return e.data})).catch((function(e){return console.log(e),null})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=Object(u.b)((function(e){return{novels:e.novels}}),(function(e){return{setNovels:function(t){return e({type:"NOVEL-GET-LIST",data:t})}}}))((function(e){var t=e.novels,a=e.setNovels;return Object(n.useEffect)((function(){(function(){return v.apply(this,arguments)})().then((function(e){e&&a(e)}))}),[]),r.a.createElement("div",{className:""},r.a.createElement("ul",{class:"flex bg-gray-800 shadow-lg"},r.a.createElement("li",{class:"-mb-px mr-1"},r.a.createElement("a",{class:"inline-block py-2 px-4 text-gray-200 font-semibold border-b-4 border-blue-600",href:"#"},"Alls")),r.a.createElement("li",{class:"mr-1"},r.a.createElement("a",{class:"inline-block py-2 px-4 text-gray-500 hover:text-gray-300 font-semibold border-b-4 border-gray-800",href:"#"},"Trending")),r.a.createElement("li",{class:"mr-1"},r.a.createElement("a",{class:"inline-block py-2 px-4 text-gray-500 hover:text-gray-300 font-semibold",href:"#"},"Favorites"))),">",r.a.createElement(l,{items:t}))})),y=(a("rzGZ"),a("Dq+y"),a("U6Bt"),a("sC2a"),a("JHok"),a("aXB2")),w=a("k1TG"),E=(a("17x9"),a("iuhU")),N=a("H2TA"),j=[0,1,2,3,4,5,6,7,8,9,10],S=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var O=n.forwardRef((function(e,t){var a=e.alignContent,r=void 0===a?"stretch":a,o=e.alignItems,i=void 0===o?"stretch":o,c=e.classes,s=e.className,l=e.component,u=void 0===l?"div":l,m=e.container,p=void 0!==m&&m,d=e.direction,f=void 0===d?"row":d,h=e.item,x=void 0!==h&&h,v=e.justify,g=void 0===v?"flex-start":v,b=e.lg,N=void 0!==b&&b,j=e.md,S=void 0!==j&&j,k=e.sm,O=void 0!==k&&k,C=e.spacing,I=void 0===C?0:C,W=e.wrap,M=void 0===W?"wrap":W,T=e.xl,P=void 0!==T&&T,G=e.xs,H=void 0!==G&&G,z=e.zeroMinWidth,D=void 0!==z&&z,R=Object(y.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),B=Object(E.a)(c.root,s,p&&[c.container,0!==I&&c["spacing-xs-".concat(String(I))]],x&&c.item,D&&c.zeroMinWidth,"row"!==f&&c["direction-xs-".concat(String(f))],"wrap"!==M&&c["wrap-xs-".concat(String(M))],"stretch"!==i&&c["align-items-xs-".concat(String(i))],"stretch"!==r&&c["align-content-xs-".concat(String(r))],"flex-start"!==g&&c["justify-xs-".concat(String(g))],!1!==H&&c["grid-xs-".concat(String(H))],!1!==O&&c["grid-sm-".concat(String(O))],!1!==S&&c["grid-md-".concat(String(S))],!1!==N&&c["grid-lg-".concat(String(N))],!1!==P&&c["grid-xl-".concat(String(P))]);return n.createElement(u,Object(w.a)({className:B,ref:t},R))})),C=Object(N.a)((function(e){return Object(w.a)(Object(w.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return j.forEach((function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(k(r,2)),width:"calc(100% + ".concat(k(r),")"),"& > $item":{padding:k(r,2)}})})),a}(e,"xs")),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};S.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(w.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(O),I=a("ofer");var W=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.idx,a=e.name,n=t%2==0?"chapter-item--even":"chapter-item--odd";return r.a.createElement("div",{className:"chapter-item",role:"button",tabIndex:"0"},r.a.createElement(C,{className:["chapter-item--text-idx",n]},r.a.createElement(I.a,{className:"text-gray-200",variant:"body2",align:"center"},t+1)),r.a.createElement(C,{className:["chapter-item--text",n]},r.a.createElement(I.a,{className:"text-gray-200",variant:"body2",color:"textSecondary"},a)))},n}(r.a.Component);W.defaultProps={idx:0,url:"issth-book-1-chapter-1",name:"Chapter 1: Scholar Meng Hao"};var M=W,T=function(e){var t=e.items;return r.a.createElement(C,{className:"chapters-list"},t.map((function(e,t){return r.a.createElement(M,{key:e.url,idx:t,url:e.url,name:e.name})})))};T.defaultProps={items:[{url:"issth-book-1-chapter-1",name:"Chapter 1: Scholar Meng Hao"},{url:"issth-book-1-chapter-2",name:"Chapter 2: The Reliance Sect"},{url:"issth-book-1-chapter-3",name:"Chapter 3: Promotion to the Outer Sect"}]};var P=T,G=a("RD7I"),H=a("cNwE");var z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(G.a)(e,Object(w.a)({defaultTheme:H.a},t))},D=a("kKAo"),R=function(e){var t=e.name,a=e.thumbnail,n=e.synopsis,o=B();return r.a.createElement(C,{container:!0,className:o.root},r.a.createElement(C,{xs:12,sm:3},r.a.createElement(D.a,{elevation:4},r.a.createElement("img",{className:o.thumbnail,alt:"novel-thumbnail",src:a}))),r.a.createElement(C,{className:o.infoText,xs:12,sm:9},r.a.createElement(I.a,{className:"text-gray-200",variant:"h2"},t),r.a.createElement("br",null),r.a.createElement(I.a,{className:"text-gray-200",variant:"caption"},n)))},B=z((function(e){return{root:{flexGrow:1},paper:{marginLeft:e.spacing(1),marginRight:e.spacing(1),maxWidth:500,cursor:"pointer"},thumbnail:{borderRadius:e.spacing(.5),width:"100%",objectFit:"cover",display:"block",margin:"auto"},infoText:{padding:e.spacing(2)}}}));R.defaultProps={title:"I shall seal the heavens",thumbnail:"https://cdn.wuxiaworld.com/images/covers/issth.jpg",synopsis:"I Shall Seal the Heavens is the story of the young scholar Meng Hao, who gets forcibly recruited into a sect of immortal cultivators. In the cultivation world, the strong prey on the weak, and the law of the jungle prevails. Meng Hao must adapt to survive. Filled with both comedy and drama, I Shall Seal the Heavens remains one of the most beloved xianxia stories ever translated. What does it mean to “Seal the Heavens?” This is a secret that you will have to uncover along with Meng Hao!"};var F=R,A=(a("Tp6f"),Object(u.b)((function(e){return{novel:e.novel}}),(function(e){return{setNovel:function(t){return e({type:"NOVEL-GET",data:t})}}}))((function(e){var t=e.codeName,a=e.novel,o=e.setNovel;return Object(n.useEffect)((function(){(function(e){return g.apply(this,arguments)})(t).then((function(e){e&&o(e)}))}),[]),r.a.createElement("div",{className:"m-4"},r.a.createElement(F,{name:a.name,thumbnail:a.thumbnail,synopsis:a.synopsis}),r.a.createElement("div",{className:"novel-details-page--list"},r.a.createElement(P,null)))}))),J=a("AR1u");t.default=function(){return r.a.createElement(J.a,null,r.a.createElement(i.a,{title:"novel reader"}),r.a.createElement("div",{className:""},r.a.createElement(o.Router,null,r.a.createElement(A,{path:Object(c.withPrefix)("/app/novel-details/:codeName")}),r.a.createElement(b,{path:Object(c.withPrefix)("/app/novel-list")}),r.a.createElement(b,{path:Object(c.withPrefix)("/app/")}))))}}}]);
//# sourceMappingURL=component---src-pages-app-js-d71775a563fc0fbdf14f.js.map