(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,s=i(a("PJYZ")),n=i(a("VbXa")),d=i(a("8OQS")),o=i(a("pVnL")),l=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return m(t||a).src},m=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},p=Object.create({}),h=function(e){var t=u(e),a=g(t);return p[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,w=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,s=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:s}),l.default.createElement("source",{media:r,srcSet:a,sizes:s}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function N(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function O(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var z=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+l+n+d+a+i+t+s+r+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,s=e.ariaHidden,n=l.default.createElement(x,(0,o.default)({src:t},r,{ariaHidden:s}));return a.length>1?l.default.createElement("picture",null,i(a),n):n},x=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,s=e.style,n=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,m=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":g,sizes:a,srcSet:i,src:r},m,{onLoad:n,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));x.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var A=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=g(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,d=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,w=e.itemProp,E=e.loading,O=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,A=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,o.default)({opacity:z?1:0,transition:A?"opacity "+v+"ms":"none"},d),j="boolean"==typeof b?"lightgray":b,T={transitionDelay:v+"ms"},C=(0,o.default)({opacity:this.state.imgLoaded?0:1},A&&T,{},d,{},f),W={title:t,alt:this.state.isVisible?"":a,style:C,className:g,itemProp:w};if(p){var H=p,q=m(p);return l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),j&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},A&&T)}),q.base64&&l.default.createElement(L,{ariaHidden:!0,src:q.base64,spreadProps:W,imageVariants:H,generateSources:N}),q.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,src:q.tracedSVG,spreadProps:W,imageVariants:H,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,S(H),l.default.createElement(x,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:E},q,{imageVariants:H}))}}))}if(h){var k=h,P=m(h),M=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},s);return"inherit"===s.display&&delete M.display,l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},j&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:j,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},A&&T)}),P.base64&&l.default.createElement(L,{ariaHidden:!0,src:P.base64,spreadProps:W,imageVariants:k,generateSources:N}),P.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,src:P.tracedSVG,spreadProps:W,imageVariants:k,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,S(k),l.default.createElement(x,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:E},P,{imageVariants:k}))}}))}return null},t}(l.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),j=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});A.propTypes={resolutions:V,sizes:j,fixed:c.default.oneOfType([V,c.default.arrayOf(V)]),fluid:c.default.oneOfType([j,c.default.arrayOf(j)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=A;t.default=T},INYr:function(e,t,a){"use strict";var i=a("XKFU"),r=a("CkkT")(6),s="findIndex",n=!0;s in[]&&Array(1)[s]((function(){n=!1})),i(i.P+i.F*n,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(s)},RXBc:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),r=a.n(i),s=a("Wbzz"),n=a("Bl7J"),d=(a("ezAz"),a("9eSz"),a("vrFN")),o=(a("f3/d"),a("R/WZ")),l=a("tRbT"),c=a("wx14"),u=a("Ff2n"),f=(a("17x9"),a("iuhU")),g=a("kKAo"),m=a("H2TA"),p=i.forwardRef((function(e,t){var a=e.classes,r=e.className,s=e.raised,n=void 0!==s&&s,d=Object(u.a)(e,["classes","className","raised"]);return i.createElement(g.a,Object(c.a)({className:Object(f.a)(a.root,r),elevation:n?8:1,ref:t},d))})),h=Object(m.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(p),b=a("ofer"),v=function(e){var t=e.items,a=y();return r.a.createElement(l.a,{container:!0,spacing:"3",className:a.root},t.map((function(e){return r.a.createElement(l.a,{item:!0,xs:"6",sm:"4",md:"3"},r.a.createElement(h,{className:a.paper,elevation:"8",onClick:function(e){return Object(s.navigate)("/novel-details")}},r.a.createElement("img",{className:a.thumbnail,alt:"novel-thumbnail",src:e.thumbnail})),r.a.createElement("div",{className:a.subTitle},r.a.createElement(b.a,{variant:"subtitle2",color:"textPrimary"},e.name),r.a.createElement(b.a,{variant:"caption",color:"textSecondary"},"2019")))})))},y=Object(o.a)((function(e){return{root:{flexGrow:1},paper:{marginLeft:e.spacing(1),marginRight:e.spacing(1),maxWidth:500,cursor:"pointer"},thumbnail:{width:"100%",objectFit:"cover",display:"block",margin:"auto"},subTitle:{marginLeft:e.spacing(1),marginRight:e.spacing(1),paddingTop:e.spacing(1)}}}));v.defaultProps={items:[{codeName:"issth",name:"I shall seal the heavens",thumbnail:"https://cdn.wuxiaworld.com/images/covers/issth.jpg"},{codeName:"bbb",name:"I shall seal the heavens",thumbnail:"https://cdn.wuxiaworld.com/images/covers/issth.jpg"},{codeName:"bbb",name:"I shall seal the heavens",thumbnail:"https://cdn.wuxiaworld.com/images/covers/issth.jpg"},{codeName:"bbb",name:"I shall seal the heavens",thumbnail:"https://cdn.wuxiaworld.com/images/covers/issth.jpg"},{codeName:"bbb",name:"I shall seal the heavens",thumbnail:"https://cdn.wuxiaworld.com/images/covers/issth.jpg"},{codeName:"bbb",name:"I shall seal the heavens",thumbnail:"https://cdn.wuxiaworld.com/images/covers/issth.jpg"},{codeName:"bbb",name:"I shall seal the heavens",thumbnail:"https://cdn.wuxiaworld.com/images/covers/issth.jpg"},{codeName:"bbb",name:"I shall seal the heavens",thumbnail:"https://cdn.wuxiaworld.com/images/covers/issth.jpg"},{codeName:"bbb",name:"I shall seal the heavens",thumbnail:"https://cdn.wuxiaworld.com/images/covers/issth.jpg"},{codeName:"bbb",name:"I shall seal the heavens",thumbnail:"https://cdn.wuxiaworld.com/images/covers/issth.jpg"}]};var w=v;t.default=function(){return r.a.createElement(n.a,null,r.a.createElement(d.a,{title:"Home"}),r.a.createElement("h1",null,"Hi people"),r.a.createElement("p",null,"Welcome to TRUONG Ngoc Tuan's site."),r.a.createElement(w,null),r.a.createElement(s.Link,{to:"/page-2/"},"Go to page 2"))}},ezAz:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"id":"c928c613-199c-5334-a68b-19fd2e016cda","childImageSharp":{"id":"f4cb76b4-407d-5382-8086-e463b57c8cdc","fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/5db04/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/6d161/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/62b1f/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/2a4de/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-81165bbe7bd77687ca66.js.map