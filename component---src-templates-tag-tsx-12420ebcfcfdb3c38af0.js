"use strict";(self.webpackChunkdevgiangho=self.webpackChunkdevgiangho||[]).push([[902],{9590:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7294),r=n(9),o=n(5444),l=n(2603),i=n(1496),d=(0,r.default)(o.Link).withConfig({displayName:"style__StyledCard",componentId:"sc-sp8wcp-0"})(["display:block;background-color:#fff;border-radius:3px;box-shadow:0 1px 1px #e6e6e6,0 2px 4px #e6e6e6;transition:.5s all;width:100%;height:100%;overflow:hidden;&:hover{transform:translate3d(0,-5px,0);box-shadow:0 1px 1px #ccc,0 4px 4px #ccc;}"]),c=r.default.article.withConfig({displayName:"style__StyledArticle",componentId:"sc-sp8wcp-1"})(["display:inline-block;width:100%;@media (max-width:","){grid-area:unset !important;}"],l.Z.breakpoints.sm),m=(0,r.default)(i.Z).withConfig({displayName:"style__FeaturedImage",componentId:"sc-sp8wcp-2"})(["background-position:center;background-size:cover;max-width:100%;border-top-left-radius:3px;",";"],(function(e){return e.halfImage?"\n    width: 50%;\n    float: left;\n    margin-right: 30px;\n    height: 320px;\n    border-bottom-left-radius: 3px;\n\n    @media (max-width: "+l.Z.breakpoints.sm+") {\n      width: 100%;\n      float: none;\n      height: 190px;\n    }\n  ":"\n    height: 190px;\n    max-height: 190px;\n    width: 100%;\n    border-top-right-radius: 3px;\n  "})),p=r.default.section.withConfig({displayName:"style__CardContent",componentId:"sc-sp8wcp-3"})(["padding:",";p{margin:15px 0;}h2{font-size:1.2em;}"],(function(e){return e.compact?"10px":"40px"})),s=r.default.section.withConfig({displayName:"style__CardMeta",componentId:"sc-sp8wcp-4"})(["display:flex;justify-content:space-between;margin-bottom:8px;font-size:.8em;opacity:.8;line-height:1em;"]),u=r.default.h2.withConfig({displayName:"style__CardTitle",componentId:"sc-sp8wcp-5"})(["margin:0;padding:0;"]),f=function(e){var t=e.title,n=e.meta,r=e.path,o=e.featuredImage,l=e.content,i=e.halfImage,f=void 0!==i&&i,h=e.compact,g=void 0!==h&&h,b=e.style,x=e.children;return a.createElement(c,{style:b},a.createElement(d,{to:r},o&&o.fixed&&a.createElement(m,{fixed:o.fixed,halfImage:f}),o&&o.fluid&&a.createElement(m,{fluid:o.fluid,halfImage:f}),a.createElement(p,{compact:g},x,a.createElement("header",null,n&&a.createElement(s,null,n.tag&&a.createElement(a.Fragment,null,n.tag),n.time&&a.createElement("time",{dateTime:n.time},n.timePretty)),t&&a.createElement(u,null,t)),l&&a.createElement("p",{dangerouslySetInnerHTML:{__html:l}}))))}},4762:function(e,t,n){var a=n(7294),r=n(9807),o=n(9590);t.Z=function(e){var t=e.posts;return a.createElement(r.r,null,t.map((function(e,t){return a.createElement(o.Z,{title:e.frontmatter.title,path:e.frontmatter.path,featuredImage:e.frontmatter.featuredImage?e.frontmatter.featuredImage.childImageSharp:null,content:e.frontmatter.excerpt,key:t,meta:{time:e.frontmatter.created,timePretty:e.frontmatter.createdPretty,tag:e.frontmatter.tags.length>0?e.frontmatter.tags[0]:null}})})))}},2835:function(e,t,n){var a=n(7294),r=n(9),o=n(9807),l=r.default.div.withConfig({displayName:"subheader__StyledSubheader",componentId:"sc-14y6b3d-0"})(["background-color:",";color:",";display:flex;align-items:center;height:90px;margin-bottom:30px;"],(function(e){return e.backgroundColor?e.backgroundColor:"#000"}),(function(e){return e.textColor?e.textColor:"#fff"})),i=r.default.h1.withConfig({displayName:"subheader__SubheaderTitle",componentId:"sc-14y6b3d-1"})(["font-size:1.2em;font-weight:bold;color:#fff;margin:0;line-height:1em;"]),d=r.default.small.withConfig({displayName:"subheader__SubheaderSubtitle",componentId:"sc-14y6b3d-2"})(["font-weight:normal;display:block;opacity:.9;"]);t.Z=function(e){var t=e.title,n=e.subtitle,r=e.backgroundColor,c=e.textColor;return a.createElement(l,{backgroundColor:r,textColor:c},a.createElement(o.W,null,a.createElement(i,null,t,a.createElement(d,null,n))))}},1614:function(e,t,n){n.r(t);var a=n(7294),r=n(155),o=n(2835),l=n(1461),i=n(2603),d=n(4762);t.default=function(e){var t=e.data,n=e.location,c=t.tag,m=t.posts.edges.map((function(e){return e.node}));return!c&&m.length>0&&(c={name:m[0].frontmatter.tags[0],color:i.Z.layout.primaryColor,icon:null,featured:!1}),a.createElement(r.Z,{bigHeader:!1},a.createElement(l.Z,{title:c.name,location:n,type:"Series"}),a.createElement(o.Z,{title:c.name,subtitle:m.length+" posts",backgroundColor:c.color}),a.createElement(d.Z,{posts:m}))}}}]);
//# sourceMappingURL=component---src-templates-tag-tsx-12420ebcfcfdb3c38af0.js.map