(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8ypT":function(t,e,a){},Bl7J:function(t,e,a){"use strict";var o=a("IRj2"),r=a("q1tI"),i=a.n(r),n=a("Wbzz"),l=a("k1TG"),c=a("aXB2"),s=(a("17x9"),a("iuhU")),p=a("H2TA"),d=a("NqtD"),u=a("kKAo"),h=r.forwardRef((function(t,e){var a=t.classes,o=t.className,i=t.color,n=void 0===i?"primary":i,p=t.position,h=void 0===p?"fixed":p,m=Object(c.a)(t,["classes","className","color","position"]);return r.createElement(u.a,Object(l.a)({square:!0,component:"header",elevation:4,className:Object(s.a)(a.root,a["position".concat(Object(d.a)(h))],a["color".concat(Object(d.a)(n))],o,"fixed"===h&&"mui-fixed"),ref:e},m))})),m=Object(p.a)((function(t){var e="light"===t.palette.type?t.palette.grey[100]:t.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:t.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static",transform:"translateZ(0)"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:e,color:t.palette.getContrastText(e)},colorPrimary:{backgroundColor:t.palette.primary.main,color:t.palette.primary.contrastText},colorSecondary:{backgroundColor:t.palette.secondary.main,color:t.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(h),y=function(t){var e=t.siteTitle;return i.a.createElement("header",{style:{marginBottom:"1.45rem"}},i.a.createElement(m,{position:"static",color:"inherit",style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(n.Link,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};y.defaultProps={siteTitle:""};var g=y,b=(a("8ypT"),a("Tp+n"),a("ofer"));e.a=function(t){var e=t.children,a=o.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"auto auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},i.a.createElement("main",null,e),i.a.createElement("footer",null,i.a.createElement(b.a,{variant:"subtitle1",color:"textPrimary"},"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))))}},EH9Q:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Manhua reader","description":"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.","author":"@gatsbyjs"}}}}')},IRj2:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Manhua reader"}}}}')},NqtD:function(t,e,a){"use strict";function o(t){return t.charAt(0).toUpperCase()+t.slice(1)}a.d(e,"a",(function(){return o}))},"Tp+n":function(t,e,a){},kKAo:function(t,e,a){"use strict";a("JHok");var o=a("aXB2"),r=a("k1TG"),i=a("q1tI"),n=(a("17x9"),a("iuhU")),l=a("H2TA"),c=i.forwardRef((function(t,e){var a=t.classes,l=t.className,c=t.component,s=void 0===c?"div":c,p=t.square,d=void 0!==p&&p,u=t.elevation,h=void 0===u?1:u,m=t.variant,y=void 0===m?"elevation":m,g=Object(o.a)(t,["classes","className","component","square","elevation","variant"]);return i.createElement(s,Object(r.a)({className:Object(n.a)(a.root,l,"outlined"===y?a.outlined:a["elevation".concat(h)],!d&&a.rounded),ref:e},g))}));e.a=Object(l.a)((function(t){var e={};return t.shadows.forEach((function(t,a){e["elevation".concat(a)]={boxShadow:t}})),Object(r.a)({root:{backgroundColor:t.palette.background.paper,color:t.palette.text.primary,transition:t.transitions.create("box-shadow")},rounded:{borderRadius:t.shape.borderRadius},outlined:{border:"1px solid ".concat(t.palette.divider)}},e)}),{name:"MuiPaper"})(c)},ofer:function(t,e,a){"use strict";var o=a("k1TG"),r=a("aXB2"),i=a("q1tI"),n=(a("17x9"),a("iuhU")),l=a("H2TA"),c=a("NqtD"),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},p=i.forwardRef((function(t,e){var a=t.align,l=void 0===a?"inherit":a,p=t.classes,d=t.className,u=t.color,h=void 0===u?"initial":u,m=t.component,y=t.display,g=void 0===y?"initial":y,b=t.gutterBottom,f=void 0!==b&&b,v=t.noWrap,x=void 0!==v&&v,w=t.paragraph,j=void 0!==w&&w,T=t.variant,k=void 0===T?"body1":T,O=t.variantMapping,E=void 0===O?s:O,B=Object(r.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),N=m||(j?"p":E[k]||s[k])||"span";return i.createElement(N,Object(o.a)({className:Object(n.a)(p.root,d,"inherit"!==k&&p[k],"initial"!==h&&p["color".concat(Object(c.a)(h))],x&&p.noWrap,f&&p.gutterBottom,j&&p.paragraph,"inherit"!==l&&p["align".concat(Object(c.a)(l))],"initial"!==g&&p["display".concat(Object(c.a)(g))]),ref:e},B))}));e.a=Object(l.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(p)},vrFN:function(t,e,a){"use strict";var o=a("EH9Q"),r=a("q1tI"),i=a.n(r),n=a("TJpk"),l=a.n(n);function c(t){var e=t.description,a=t.lang,r=t.meta,n=t.title,c=o.data.site,s=e||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:n,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:n},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:n},{name:"twitter:description",content:s}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c}}]);
//# sourceMappingURL=commons-fa8a44d28a9304f221fb.js.map