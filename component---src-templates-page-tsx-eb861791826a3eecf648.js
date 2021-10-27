"use strict";(self.webpackChunkdevgiangho=self.webpackChunkdevgiangho||[]).push([[895],{9590:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7294),r=n(9),i=n(5444),o=n(2603),l=n(1496),d=(0,r.default)(i.Link).withConfig({displayName:"style__StyledCard",componentId:"sc-sp8wcp-0"})(["display:block;background-color:#fff;border-radius:3px;box-shadow:0 1px 1px #e6e6e6,0 2px 4px #e6e6e6;transition:.5s all;width:100%;height:100%;overflow:hidden;&:hover{transform:translate3d(0,-5px,0);box-shadow:0 1px 1px #ccc,0 4px 4px #ccc;}"]),m=r.default.article.withConfig({displayName:"style__StyledArticle",componentId:"sc-sp8wcp-1"})(["display:inline-block;width:100%;@media (max-width:","){grid-area:unset !important;}"],o.Z.breakpoints.sm),c=(0,r.default)(l.Z).withConfig({displayName:"style__FeaturedImage",componentId:"sc-sp8wcp-2"})(["background-position:center;background-size:cover;max-width:100%;border-top-left-radius:3px;",";"],(function(e){return e.halfImage?"\n    width: 50%;\n    float: left;\n    margin-right: 30px;\n    height: 320px;\n    border-bottom-left-radius: 3px;\n\n    @media (max-width: "+o.Z.breakpoints.sm+") {\n      width: 100%;\n      float: none;\n      height: 190px;\n    }\n  ":"\n    height: 190px;\n    max-height: 190px;\n    width: 100%;\n    border-top-right-radius: 3px;\n  "})),p=r.default.section.withConfig({displayName:"style__CardContent",componentId:"sc-sp8wcp-3"})(["padding:",";p{margin:15px 0;}h2{font-size:1.2em;}"],(function(e){return e.compact?"10px":"40px"})),s=r.default.section.withConfig({displayName:"style__CardMeta",componentId:"sc-sp8wcp-4"})(["display:flex;justify-content:space-between;margin-bottom:8px;font-size:.8em;opacity:.8;line-height:1em;"]),u=r.default.h2.withConfig({displayName:"style__CardTitle",componentId:"sc-sp8wcp-5"})(["margin:0;padding:0;"]),f=function(e){var t=e.title,n=e.meta,r=e.path,i=e.featuredImage,o=e.content,l=e.halfImage,f=void 0!==l&&l,g=e.compact,h=void 0!==g&&g,x=e.style,y=e.children;return a.createElement(m,{style:x},a.createElement(d,{to:r},i&&i.fixed&&a.createElement(c,{fixed:i.fixed,halfImage:f}),i&&i.fluid&&a.createElement(c,{fluid:i.fluid,halfImage:f}),a.createElement(p,{compact:h},y,a.createElement("header",null,n&&a.createElement(s,null,n.tag&&a.createElement(a.Fragment,null,n.tag),n.time&&a.createElement("time",{dateTime:n.time},n.timePretty)),t&&a.createElement(u,null,t)),o&&a.createElement("p",{dangerouslySetInnerHTML:{__html:o}}))))}},2835:function(e,t,n){var a=n(7294),r=n(9),i=n(9807),o=r.default.div.withConfig({displayName:"subheader__StyledSubheader",componentId:"sc-14y6b3d-0"})(["background-color:",";color:",";display:flex;align-items:center;height:90px;margin-bottom:30px;"],(function(e){return e.backgroundColor?e.backgroundColor:"#000"}),(function(e){return e.textColor?e.textColor:"#fff"})),l=r.default.h1.withConfig({displayName:"subheader__SubheaderTitle",componentId:"sc-14y6b3d-1"})(["font-size:1.2em;font-weight:bold;color:#fff;margin:0;line-height:1em;"]),d=r.default.small.withConfig({displayName:"subheader__SubheaderSubtitle",componentId:"sc-14y6b3d-2"})(["font-weight:normal;display:block;opacity:.9;"]);t.Z=function(e){var t=e.title,n=e.subtitle,r=e.backgroundColor,m=e.textColor;return a.createElement(o,{backgroundColor:r,textColor:m},a.createElement(i.W,null,a.createElement(l,null,t,a.createElement(d,null,n))))}},7430:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(7294),r=n(155),i=n(2835),o=n(2603),l=n(9807),d=n(9),m=n(5444),c=n(9590),p=d.default.div.withConfig({displayName:"page-sidebar-content__LatestPosts",componentId:"sc-1vi6kd0-0"})(["display:grid;grid-template-columns:1fr;grid-gap:30px;width:310px;@media (max-width:","){grid-template-columns:1fr 1fr;}@media (max-width:700px){grid-template-columns:1fr;}"],o.Z.breakpoints.md),s=function(){var e=(0,m.useStaticQuery)("3363747836").posts.edges.map((function(e){return e.node}));return a.createElement(a.Fragment,null,a.createElement("h3",null,"Latest posts"),a.createElement(p,null,e.map((function(e,t){return a.createElement(c.Z,{title:e.frontmatter.title,featuredImage:e.frontmatter.featuredImage.childImageSharp,path:e.frontmatter.path,key:t,compact:!0,meta:{time:e.frontmatter.created,timePretty:e.frontmatter.createdPretty,tag:e.frontmatter.tags.length>0?e.frontmatter.tags[0]:null}})}))))},u=n(1461),f=(0,d.default)(l.W).withConfig({displayName:"page__PageContainer",componentId:"sc-wuks3o-0"})(["display:flex;justify-content:space-between;@media (max-width:","){display:block;}p:first-child{margin-top:0;}"],o.Z.breakpoints.md),g=d.default.aside.withConfig({displayName:"page__PageSidebar",componentId:"sc-wuks3o-1"})(["margin-left:50px;@media (max-width:","){margin-left:0;}"],o.Z.breakpoints.md),h=function(e){var t=e.pageContext,n=e.location,l=t.page;return a.createElement(r.Z,{bigHeader:!1},a.createElement(u.Z,{title:l.frontmatter.title,description:l.frontmatter.excerpt,location:n}),a.createElement(i.Z,{title:l.frontmatter.title,backgroundColor:o.Z.layout.primaryColor}),a.createElement(f,null,a.createElement("section",{dangerouslySetInnerHTML:{__html:l.html}}),a.createElement(g,null,a.createElement(s,null))))}}}]);
//# sourceMappingURL=component---src-templates-page-tsx-eb861791826a3eecf648.js.map