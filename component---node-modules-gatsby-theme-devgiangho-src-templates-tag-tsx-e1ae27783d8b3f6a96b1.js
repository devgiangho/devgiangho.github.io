(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{277:function(t,e,a){"use strict";a.r(e),a.d(e,"query",(function(){return i}));a(20);var r=a(0),n=a.n(r),o=a(274),l=a(276),m=a(273),c=a(4),u=a(287);e.default=function(t){var e=t.data,a=t.location,r=e.tag,i=e.posts.edges.map((function(t){return t.node}));return!r&&i.length>0&&(r={name:i[0].frontmatter.tags[0],color:c.a.layout.primaryColor,icon:null,featured:!1}),n.a.createElement(o.a,{bigHeader:!1},n.a.createElement(m.a,{title:r.name,location:a,type:"Series"}),n.a.createElement(l.a,{title:r.name,subtitle:i.length+" posts",backgroundColor:r.color}),n.a.createElement(u.a,{posts:i}))};var i="2278284313"},287:function(t,e,a){"use strict";var r=a(0),n=a.n(r),o=a(54),l=a(275);e.a=function(t){var e=t.posts;return n.a.createElement(o.b,null,e.map((function(t,e){return n.a.createElement(l.a,{title:t.frontmatter.title,path:t.frontmatter.path,featuredImage:t.frontmatter.featuredImage?t.frontmatter.featuredImage.childImageSharp:null,content:t.frontmatter.excerpt,key:e,meta:{time:t.frontmatter.created,timePretty:t.frontmatter.createdPretty,tag:t.frontmatter.tags.length>0?t.frontmatter.tags[0]:null}})})))}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-devgiangho-src-templates-tag-tsx-e1ae27783d8b3f6a96b1.js.map