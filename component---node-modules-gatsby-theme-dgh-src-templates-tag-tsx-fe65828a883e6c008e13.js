(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+lvZ":function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a("q1tI"),r=a.n(n),o=a("vOnD"),i=a("Wbzz"),l=a("c8nb"),c=a("9eSz"),d=a.n(c),m=Object(o.default)(i.Link).withConfig({displayName:"style__StyledCard",componentId:"sc-1geh7tk-0"})(["display:block;background-color:#fff;border-radius:3px;box-shadow:0 1px 1px #e6e6e6,0 2px 4px #e6e6e6;transition:.5s all;width:100%;height:100%;overflow:hidden;&:hover{transform:translate3d(0,-5px,0);box-shadow:0 1px 1px #ccc,0 4px 4px #ccc;}"]),s=o.default.article.withConfig({displayName:"style__StyledArticle",componentId:"sc-1geh7tk-1"})(["display:inline-block;width:100%;@media (max-width:","){grid-area:unset !important;}"],l.a.breakpoints.sm),f=Object(o.default)(d.a).withConfig({displayName:"style__FeaturedImage",componentId:"sc-1geh7tk-2"})(["background-position:center;background-size:cover;max-width:100%;border-top-left-radius:3px;",";"],(function(e){return e.halfImage?"\n    width: 50%;\n    float: left;\n    margin-right: 30px;\n    height: 320px;\n    border-bottom-left-radius: 3px;\n\n    @media (max-width: "+l.a.breakpoints.sm+") {\n      width: 100%;\n      float: none;\n      height: 190px;\n    }\n  ":"\n    height: 190px;\n    max-height: 190px;\n    width: 100%;\n    border-top-right-radius: 3px;\n  "})),p=o.default.section.withConfig({displayName:"style__CardContent",componentId:"sc-1geh7tk-3"})(["padding:",";p{margin:15px 0;}h2{font-size:1.2em;}"],(function(e){return e.compact?"10px":"40px"})),u=o.default.section.withConfig({displayName:"style__CardMeta",componentId:"sc-1geh7tk-4"})(["display:flex;justify-content:space-between;margin-bottom:8px;font-size:.8em;opacity:.8;line-height:1em;"]),g=o.default.h2.withConfig({displayName:"style__CardTitle",componentId:"sc-1geh7tk-5"})(["margin:0;padding:0;"]),h=function(e){var t=e.title,a=e.meta,n=e.path,o=e.featuredImage,i=e.content,l=e.halfImage,c=void 0!==l&&l,d=e.compact,h=void 0!==d&&d,b=e.style,x=e.children;return r.a.createElement(s,{style:b},r.a.createElement(m,{to:n},o&&o.fixed&&r.a.createElement(f,{fixed:o.fixed,halfImage:c}),o&&o.sizes&&r.a.createElement(f,{sizes:o.sizes,halfImage:c}),r.a.createElement(p,{compact:h},x,r.a.createElement("header",null,a&&r.a.createElement(u,null,a.tag&&r.a.createElement(r.a.Fragment,null,a.tag),a.time&&r.a.createElement("time",{dateTime:a.time},a.timePretty)),t&&r.a.createElement(g,null,t)),i&&r.a.createElement("p",{dangerouslySetInnerHTML:{__html:i}}))))}},Jrp9:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("vOnD"),i=a("igLN"),l=o.default.div.withConfig({displayName:"subheader__StyledSubheader",componentId:"sc-kft3xf-0"})(["background-color:",";color:",";display:flex;align-items:center;height:90px;margin-bottom:30px;"],(function(e){return e.backgroundColor?e.backgroundColor:"#000"}),(function(e){return e.textColor?e.textColor:"#fff"})),c=o.default.h1.withConfig({displayName:"subheader__SubheaderTitle",componentId:"sc-kft3xf-1"})(["font-size:1.2em;font-weight:bold;color:#fff;margin:0;line-height:1em;"]),d=o.default.small.withConfig({displayName:"subheader__SubheaderSubtitle",componentId:"sc-kft3xf-2"})(["font-weight:normal;display:block;opacity:.9;"]);t.a=function(e){var t=e.title,a=e.subtitle,n=e.backgroundColor,o=e.textColor;return r.a.createElement(l,{backgroundColor:n,textColor:o},r.a.createElement(i.a,null,r.a.createElement(c,null,t,r.a.createElement(d,null,a))))}},"W0Z/":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("QGyT"),i=a("Jrp9"),l=a("Mbym"),c=a("c8nb"),d=a("fdb7");t.default=function(e){var t=e.data,a=e.location,n=t.tag,m=t.posts.edges.map((function(e){var t=e.node;return Object.assign({},t,{frontmatter:Object.assign({},t.frontmatter,{path:"/"+t.frontmatter.path})})}));return!n&&m.length>0&&(n={name:m[0].frontmatter.tags[0],color:c.a.layout.primaryColor,icon:null,featured:!1}),r.a.createElement(o.a,{bigHeader:!1},r.a.createElement(l.a,{title:n.name,location:a,type:"Series"}),r.a.createElement(i.a,{title:n.name,subtitle:m.length+" posts",backgroundColor:n.color}),r.a.createElement(d.a,{posts:m}))}},fdb7:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("igLN"),i=a("+lvZ");t.a=function(e){var t=e.posts;return r.a.createElement(o.b,null,t.map((function(e,t){return r.a.createElement(i.a,{title:e.frontmatter.title,path:e.frontmatter.path,featuredImage:e.frontmatter.featuredImage?e.frontmatter.featuredImage.childImageSharp:null,content:e.frontmatter.excerpt,key:t,meta:{time:e.frontmatter.created,timePretty:e.frontmatter.createdPretty,tag:e.frontmatter.tags.length>0?e.frontmatter.tags[0]:null}})})))}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-dgh-src-templates-tag-tsx-fe65828a883e6c008e13.js.map