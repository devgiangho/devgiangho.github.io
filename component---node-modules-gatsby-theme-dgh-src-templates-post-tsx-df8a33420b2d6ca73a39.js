(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{282:function(e,t,n){"use strict";n.r(t);n(182);var o=n(0),a=n.n(o),r=n(275),i=n(54),l=n(1),s=n(290),c=n.n(s),d=l.default.nav.withConfig({displayName:"toc__StyledNav",componentId:"sc-8z5f7g-0"})([".toc-list{list-style-type:none;margin:0;padding:0;.toc-list{padding-left:17px;padding-top:10px;}}.toc-list-item{line-height:1.2em;padding-bottom:10px;&:last-child{padding-bottom:0;}}.toc-link{color:#808080;text-decoration:none;}.is-active-link{color:#404040;font-weight:700;}"]),u=function(e){var t=e.onClick;return Object(o.useEffect)((function(){return c.a.init({tocSelector:".toc",contentSelector:".post",headingSelector:"h2,h3",scrollSmooth:!0,scrollSmoothDuration:1}),function(){return c.a.destroy()}})),a.a.createElement(d,{className:"toc",onClick:t})},m=n(73),p=n.n(m),f=n(4),h=l.default.div.withConfig({displayName:"reading-progress__ReadingProgressBar",componentId:"sc-18odsaw-0"})(["position:sticky;height:5px;top:70px;background-color:",";z-index:500;"],(function(e){return e.color?e.color:f.a.layout.primaryColor})),g=function(e){var t=e.color,n=e.target,r=Object(o.useState)(0),i=r[0],l=r[1],s=function(){if(n.current){var e=n.current,t=e.clientHeight-e.offsetTop-window.innerHeight,o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;return 0===o?l(0):o>t?l(100):void l(o/t*100)}};return Object(o.useEffect)((function(){return window.addEventListener("scroll",s),function(){return window.removeEventListener("scroll",s)}})),a.a.createElement(h,{style:{width:i+"%"},color:t})},y=n(24),b=n(285),x=n.n(b),w=n(289),C=function(){return a.a.createElement(a.a.Fragment,null)},v=n(274),E=n(126);n.d(t,"query",(function(){return P}));var S=Object(l.default)(i.a).withConfig({displayName:"post__PostContainer",componentId:"sc-1tpszwu-0"})(["display:flex;justify-content:center;padding:0 !important;"]),k=l.default.div.withConfig({displayName:"post__LeftSidebar",componentId:"sc-1tpszwu-1"})(["min-width:255px;max-width:225px;transition:opacity .5s;@media (max-width:","){position:fixed;opacity:",";z-index:1000;background-color:#fff;width:100% !important;max-width:100%;padding:0 20px;margin-top:-5px;height:calc(100vh - 70px);}"],f.a.breakpoints.xl,(function(e){return e.show?1:0})),N=l.default.div.withConfig({displayName:"post__PostContent",componentId:"sc-1tpszwu-2"})(["margin-top:-5px;border-right:1px #e5eff5 solid;border-left:1px #e5eff5 solid;background-color:#fff;box-shadow:0 0 3px rgba(0,0,0,.03),0 3px 46px rgba(0,0,0,.1);z-index:10;width:1035px;max-width:100%;li > a,p > a{color:",";border-bottom:2px "," solid;}pre{margin:30px 0;}blockquote{border-left:4px "," solid;background-color:",';margin:30px 0;padding:5px 20px;border-radius:.3em;}h3::before,h4::before,h5::before,h6::before{display:block;content:" ";height:90px;margin-top:-90px;visibility:hidden;}h2{border-top:1px solid #ececec;margin-top:44px;padding-top:40px;line-height:1.2;}code[class*="language-text"]{padding:5px;}p > img{max-width:100%;border-radius:.3em;margin:30px 0;}hr{border-top:1px solid #ececec;border-bottom:0;margin-top:44px;margin-bottom:40px;}.gatsby-resp-image-link{margin:30px 0;max-width:100%;.gatsby-resp-image-image{border-radius:.3em;}}'],f.a.layout.linkColor,f.a.layout.linkColor,f.a.layout.primaryColor,f.a.layout.backgroundColor),A=l.default.div.withConfig({displayName:"post__TocWrapper",componentId:"sc-1tpszwu-3"})(["position:sticky;top:70px;padding:40px 30px 40px 0;"]),L=l.default.header.withConfig({displayName:"post__PostHeader",componentId:"sc-1tpszwu-4"})(["padding:40px;@media (max-width:","){padding:20px;}"],f.a.breakpoints.sm),O=Object(l.default)(p.a).withConfig({displayName:"post__FeaturedImage",componentId:"sc-1tpszwu-5"})(["border-radius:0;@media (max-width:","){margin-left:-1px;margin-right:-1px;}"],f.a.breakpoints.xl),I=l.default.section.withConfig({displayName:"post__StyledPost",componentId:"sc-1tpszwu-6"})(["padding:40px;@media (max-width:","){padding:20px;}"],f.a.breakpoints.sm),z=l.default.section.withConfig({displayName:"post__PostMeta",componentId:"sc-1tpszwu-7"})(["display:flex;justify-content:space-between;opacity:.8;font-size:.9em;"]),T=l.default.h1.withConfig({displayName:"post__PostTitle",componentId:"sc-1tpszwu-8"})(["margin:0;padding:0;"]),_=l.default.footer.withConfig({displayName:"post__PostFooter",componentId:"sc-1tpszwu-9"})(["background-color:#fafafa;font-size:.8em;color:#666;padding:40px;line-height:1em;p{margin:5px 0;}"]),j=Object(l.default)(y.Link).withConfig({displayName:"post__FooterTagLink",componentId:"sc-1tpszwu-10"})(["color:#000 !important;text-decoration:none;border-bottom:0 !important;"]),q=l.default.section.withConfig({displayName:"post__PostAddition",componentId:"sc-1tpszwu-11"})(["background-color:#fff;border-top:1px #e5eff5 solid;border-bottom:1px #e5eff5 solid;z-index:700;position:relative;padding:40px;"]),U=Object(l.default)(i.a).withConfig({displayName:"post__PostAdditionContent",componentId:"sc-1tpszwu-12"})(["display:flex;justify-content:space-between;"]),F=l.default.div.withConfig({displayName:"post__BioWrapper",componentId:"sc-1tpszwu-13"})(["width:50%;margin:auto;@media (max-width:","){width:100%;}"],f.a.breakpoints.sm),H=l.default.button.withConfig({displayName:"post__ToggleTocButton",componentId:"sc-1tpszwu-14"})(["display:flex;position:fixed;justify-content:center;right:20px;bottom:20px;border-radius:100%;box-shadow:0 0 3px rgba(0,0,0,.03),0 3px 46px rgba(0,0,0,.1);border:0;z-index:5000;width:50px;height:50px;background-color:#20232a;color:#fff;outline:none;@media (min-width:","){display:none;}"],f.a.breakpoints.xl),P=(t.default=function(e){var t=e.data,n=e.location,i=Object(o.useState)(!1),l=i[0],s=i[1],c=t.post,d=Object(o.createRef)(),m=t.primaryTag,p=function(){return s(!l)};return a.a.createElement(r.a,{bigHeader:!1},a.a.createElement(v.a,{location:n,title:c.frontmatter.title,publishedAt:c.frontmatter.created,updatedAt:c.frontmatter.updated,tags:c.frontmatter.tags,description:c.frontmatter.excerpt,image:c.frontmatter.featuredImage?c.frontmatter.featuredImage.childImageSharp.sizes.src:null}),a.a.createElement(g,{target:d,color:m?m.color:void 0}),a.a.createElement(S,null,c.headings.find((function(e){return e.depth>1}))&&a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{show:l},a.a.createElement(A,null,a.a.createElement(u,{onClick:p}))),a.a.createElement(H,{role:"button","aria-label":"Toggle table of contents",onClick:p},l?a.a.createElement(E.h,null):a.a.createElement(E.a,null))),a.a.createElement(N,null,a.a.createElement("article",{className:"post",ref:d},a.a.createElement(L,null,a.a.createElement(z,null,c.frontmatter.tags.length>0&&a.a.createElement(y.Link,{to:"/tag/"+x()(c.frontmatter.tags[0],{lower:!0})},c.frontmatter.tags[0]),a.a.createElement("time",{dateTime:c.frontmatter.created},c.frontmatter.createdPretty)),a.a.createElement(T,null,c.frontmatter.title)),c.frontmatter.featuredImage&&a.a.createElement(O,{sizes:c.frontmatter.featuredImage.childImageSharp.sizes}),a.a.createElement(I,{dangerouslySetInnerHTML:{__html:c.html},className:"post"}),a.a.createElement(_,null,a.a.createElement("p",null,"Published under ",c.frontmatter.tags.map((function(e,t){return a.a.createElement("span",{key:t},a.a.createElement(j,{to:"/tag/"+x()(e,{lower:!0})},e),c.frontmatter.tags.length>t+1&&a.a.createElement(a.a.Fragment,null,", "))}))," on ",a.a.createElement("time",{dateTime:c.frontmatter.created},c.frontmatter.createdPretty),"."),c.frontmatter.updated!==c.frontmatter.created&&a.a.createElement("p",null,"Last updated on ",a.a.createElement("time",{dateTime:c.frontmatter.updated},c.frontmatter.updatedPretty),"."))))),a.a.createElement(q,null,a.a.createElement(U,null,a.a.createElement(F,null,a.a.createElement(w.a,{textAlign:"center",showName:!0})))),a.a.createElement(C,null))},"357387307")},285:function(e,t,n){var o;n(17),n(60),n(61),n(5),o=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}'),t=JSON.parse('{"bg":{"locale":"Bulgarian","ѝ":"u"}}');function n(n,o){if("string"!=typeof n)throw new Error("slugify: string argument expected");var a=t[(o="string"==typeof o?{replacement:o}:o||{}).locale]||{},r=n.split("").reduce((function(t,n){return t+(a[n]||e[n]||n).replace(o.remove||/[^\w\s$*_+~.()'"!\-:@]/g,"")}),"").trim().replace(/[-\s]+/g,o.replacement||"-");return o.lower?r.toLowerCase():r}return n.extend=function(t){for(var n in t)e[n]=t[n]},n},e.exports=o(),e.exports.default=o()},286:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":{"name":"Kiên Đinh","description":"Bần đạo là <strong>Kiên Đinh</strong>, một Junior Fullstack Developer. \\n        Ta viết blog này với mục đích chia sẻ những kinh nghiệm của bản thân đối với <b>tu DEV chi đạo</b>. ","social":{"facebook":"https://www.facebook.com/kien.matu.7","twitter":"","linkedin":"https://www.linkedin.com/in/kiendinh-dev/","instagram":"","youtube":"https://www.youtube.com/channel/UCnq0iZ1X0udszc7ODV9uK4g","github":"https://github.com/kienmatu","twitch":""}}}}}}')},287:function(e){e.exports=JSON.parse('{"data":{"file":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEi0lEQVQ4yz2T7VOSWRjGn93Zpg9aqWsTWdM0teZL2mYhBIkgppTllllNpLWVmzUMi24FFqiAoqIigg+ID4EiopigkoqA8IAkvtEmAtmQL2W1L7Uzzf4Le/qyM/ecmXPOXGfu+zq/C0Jd6GrkzaTV6p32vHzxezAQDAdDK+FX4HBjbR3U5tt3n//+5HZ5ssh5ubRz6m5tpxppV8JKpAt6Pu0NLQddTuecz/cqFF6NRNZX195tvP34/sNff/wJZO82vortNgeRlEvNL5CplFJYDvQKIJ6bnV2cX7DbbHOzvtkZn3fa619cDLxcCgVD62vrpuGR7JzThJNUEjkv8VD6Kdo5hboLiBHtEwWiglwupxtFR0ZGPKh7ctI2ZDI77A6rddLpQlG3G1FrklIztmzZHhUVHx0dj8Hs53B5PX16TU8P6B/yeNw226RO3zs6OjrlmJpyOFAUfe4FDkx7Pd5gYEkKwynp2G3bv4+Lw3y3JerHY3itvtcw0N9vHIDWIqvLgYB5eBhFXW7UZbfZrVarw24HFo6MWMYmJkQSydmLV3bE7NoREx+9LQ6TsL+5rc1sNpnNZmhz4214OYi6XAvzc/6FucWv63wosPTC79f1GeQdyiJ6CelUwe6Eg7GxmKjo2F2YfU2tkj5jfzVfCL0Ov5LBSl6tsFHc2tYuVyGIoX9g6KnZZndIO2BEoykuuZ6cjt21+0B8/J5vvt1KzM6RKhUSWC5ulUDjExMPeNVlTFbJL+WSDlit7RE0ND2u4bfDikaJRCRpvXT9FoGSX3jp6oGDqZn4LHZNbRvcAa4kMjlU1yRuapdW8flcYX0wGBoeHh4YNAILx8bHWZyqq7fvUM+cB5V/9jwWl1UjqOvW67o0T1rk7dw6AWSxWGpEosdCgWl09E0k0q3T8UUNrVKpVN7BYnPOFF0h5pzGEqjU/HO0s0W1daL+QSOwWm8wIFoNNOvzgT2s6py02QGYOr2+WljP5QtFjeLzl68VXb1OJNMOJB5hVN5n86o7lIrBp4NDJhNosNfQB/3z+ZNMDifsTUQQrW9mBjgJBpEqYEF9QzH9RgaenJyGYzAr1RrNvYpKWadibGwMEAGgsjx7Bi29XEpJPR4Tk+Bf8AeWAopOFaPiAdzV2d2re8jlXabfrOLxG8UtrTLZXVZlGYOpQtRgtH6j0W53QEzWb1u3xpIpNJAeQDjSrS29daeSzZErlHWNTaLmZqFYzHzIfiQUMNkcLDEn6TA2I5OEP5lLIOVByWmZAF0eV/BhcxMMz60Xnr5w+RFfUMmpKmeyfn3w8C6r4j6Pd/Me4wK9lJCdn3oE/39Be/b+AKBXKZGVcPipaaii6hGBQqMVFt8ov3ebwSwtKy++9jMwPCkdl3oUdygNm5hyPO3YyQw8JYtaAMXswOBwpIkJK4AVpIInrCOS8w9nEI4RKFm5Zyi0whOk3PSjJ8Qt0t5eQ62gofRm+U8X6eDRvMKLUHT0Th63NrS8DCyxjFpAKvSGPsAtvfQW+FgcMWfnzn1JKUedU85/v3z5uPkeZGHtzerrlRWny/UfGT9PhONse6YAAAAASUVORK5CYII=","width":55,"height":55,"src":"/static/7e55704418c2d530fda33cc8a39a3395/9b54c/nehalist-gatsby.png","srcSet":"/static/7e55704418c2d530fda33cc8a39a3395/9b54c/nehalist-gatsby.png 1x,\\n/static/7e55704418c2d530fda33cc8a39a3395/81c10/nehalist-gatsby.png 1.5x,\\n/static/7e55704418c2d530fda33cc8a39a3395/46a49/nehalist-gatsby.png 2x"}}}}}')},289:function(e,t,n){"use strict";n(20);var o=n(286),a=n(0),r=n.n(a),i=n(1),l=(n(9),n(7),n(3),n(12),n(126)),s=i.default.ul.withConfig({displayName:"social-channel-list__StyledSocialChannels",componentId:"sc-75j5fa-0"})(["list-style-type:none;margin:0;padding:0;"]),c=i.default.li.withConfig({displayName:"social-channel-list__StyledSocialChannel",componentId:"sc-75j5fa-1"})(["display:inline-block;margin:0 10px;font-size:1.6em;opacity:.7;transition:opacity .5s;&:hover{opacity:1;}"]),d=function(e){var t=e.channels;return r.a.createElement(s,null,Object.keys(t).filter((function(e){return""!==t[e]})).map((function(e,n){return r.a.createElement(c,{key:n},r.a.createElement("a",{href:t[e],target:"_blank",rel:"noopener","aria-label":e},function(e){switch(e){case"twitter":return r.a.createElement(l.j,null);case"facebook":return r.a.createElement(l.b,{color:"#4267b2"});case"github":return r.a.createElement(l.c,null);case"instagram":return r.a.createElement(l.d,null);case"linkedin":return r.a.createElement(l.e,{color:"#0077b5"});case"twitch":return r.a.createElement(l.i,null);case"youtube":return r.a.createElement(l.k,{color:"#ff0000"})}return r.a.createElement(l.f,null)}(e)))})))},u=(n(97),n(287)),m=n(73),p=n.n(m),f=Object(i.default)(p.a).withConfig({displayName:"avatar__StyledAvatar",componentId:"r1tgs7-0"})(["max-width:55px;border-radius:100%;"]),h=function(e){var t=e.alt,n=e.style,o=u.data;return r.a.createElement(f,{fixed:o.file.childImageSharp.fixed,alt:t,style:n})},g=i.default.section.withConfig({displayName:"bio__StyledBio",componentId:"e8utc-0"})(["margin:auto;text-align:",";width:100%;"],(function(e){return e.textAlign})),y=i.default.p.withConfig({displayName:"bio__AuthorDescription",componentId:"e8utc-1"})(["margin:10px 0 13px;a{color:#000;text-decoration:underline;}"]),b=i.default.h3.withConfig({displayName:"bio__AuthorName",componentId:"e8utc-2"})(["margin:10px;"]);t.a=function(e){var t=e.textAlign,n=void 0===t?"center":t,a=e.avatarStyle,i=e.showName,l=void 0!==i&&i,s=o.data.site.siteMetadata.author;return r.a.createElement(g,{textAlign:n},r.a.createElement(h,{alt:s.name,style:a}),l&&r.a.createElement(b,null,s.name),r.a.createElement(y,{dangerouslySetInnerHTML:{__html:s.description}}),r.a.createElement(d,{channels:s.social}))}},290:function(e,t,n){(function(o){var a,r,i,l;l=void 0!==o?o:this.window||this.global,r=[],a=function(e){"use strict";var t,o,a=n(291),r={},i={},l=n(292),s=n(293);if("undefined"!=typeof window){var c,d=!!e.document.querySelector&&!!e.addEventListener,u=Object.prototype.hasOwnProperty;return i.destroy=function(){if(!r.skipRendering)try{document.querySelector(r.tocSelector).innerHTML=""}catch(e){console.warn("Element not found: "+r.tocSelector)}r.scrollContainer&&document.querySelector(r.scrollContainer)?(document.querySelector(r.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(r.scrollContainer).removeEventListener("resize",this._scrollListener,!1),t&&document.querySelector(r.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),t&&document.removeEventListener("click",this._clickListener,!1))},i.init=function(e){if(d&&(r=function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)u.call(n,o)&&(e[o]=n[o])}return e}(a,e||{}),this.options=r,this.state={},r.scrollSmooth&&(r.duration=r.scrollSmoothDuration,r.offset=r.scrollSmoothOffset,i.scrollSmooth=n(294).initSmoothScrolling(r)),t=l(r),o=s(r),this._buildHtml=t,this._parseContent=o,i.destroy(),null!==(c=o.selectHeadings(r.contentSelector,r.headingSelector)))){var p=o.nestHeadingsArray(c).nest;r.skipRendering||t.render(r.tocSelector,p),this._scrollListener=m((function(e){t.updateToc(c);var n=e&&e.target&&e.target.scrollingElement&&0===e.target.scrollingElement.scrollTop;(e&&(0===e.eventPhase||null===e.currentTarget)||n)&&(t.updateToc(c),r.scrollEndCallback&&r.scrollEndCallback(e))}),r.throttleTimeout),this._scrollListener(),r.scrollContainer&&document.querySelector(r.scrollContainer)?(document.querySelector(r.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(r.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var f=null;return this._clickListener=m((function(e){r.scrollSmooth&&t.disableTocAnimation(e),t.updateToc(c),f&&clearTimeout(f),f=setTimeout((function(){t.enableTocAnimation()}),r.scrollSmoothDuration)}),r.throttleTimeout),r.scrollContainer&&document.querySelector(r.scrollContainer)?document.querySelector(r.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}},i.refresh=function(e){i.destroy(),i.init(e||this.options)},e.tocbot=i,i}function m(e,t,n){var o,a;return t||(t=250),function(){var r=n||this,i=+new Date,l=arguments;o&&i<o+t?(clearTimeout(a),a=setTimeout((function(){o=i,e.apply(r,l)}),t)):(o=i,e.apply(r,l))}}}(l),void 0===(i="function"==typeof a?a.apply(t,r):a)||(e.exports=i)}).call(this,n(99))},291:function(e,t){e.exports={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,onClick:!1,orderedList:!0,scrollContainer:null,skipRendering:!1}},292:function(e,t,n){n(17),n(13),n(74),n(25),e.exports=function(e){var t=[].forEach,n=[].some,o=document.body,a=!0,r=" ";function i(n,o){var a=o.appendChild(function(n){var o=document.createElement("li"),a=document.createElement("a");e.listItemClass&&o.setAttribute("class",e.listItemClass);e.onClick&&(a.onclick=e.onClick);e.includeHtml&&n.childNodes.length?t.call(n.childNodes,(function(e){a.appendChild(e.cloneNode(!0))})):a.textContent=n.textContent;return a.setAttribute("href","#"+n.id),a.setAttribute("class",e.linkClass+r+"node-name--"+n.nodeName+r+e.extraLinkClasses),o.appendChild(a),o}(n));if(n.children.length){var s=l(n.isCollapsed);n.children.forEach((function(e){i(e,s)})),a.appendChild(s)}}function l(t){var n=e.orderedList?"ol":"ul",o=document.createElement(n),a=e.listClass+r+e.extraListClasses;return t&&(a+=r+e.collapsibleClass,a+=r+e.isCollapsedClass),o.setAttribute("class",a),o}return{enableTocAnimation:function(){a=!0},disableTocAnimation:function(t){var n=t.target||t.srcElement;"string"==typeof n.className&&-1!==n.className.indexOf(e.linkClass)&&(a=!1)},render:function(e,t){var n=l(!1);t.forEach((function(e){i(e,n)}));var o=document.querySelector(e);if(null!==o)return o.firstChild&&o.removeChild(o.firstChild),0===t.length?o:o.appendChild(n)},updateToc:function(i){if(e.scrollContainer&&document.querySelector(e.scrollContainer))var l=document.querySelector(e.scrollContainer).scrollTop;else l=document.documentElement.scrollTop||o.scrollTop;e.positionFixedSelector&&function(){if(e.scrollContainer&&document.querySelector(e.scrollContainer))var t=document.querySelector(e.scrollContainer).scrollTop;else t=document.documentElement.scrollTop||o.scrollTop;var n=document.querySelector(e.positionFixedSelector);"auto"===e.fixedSidebarOffset&&(e.fixedSidebarOffset=document.querySelector(e.tocSelector).offsetTop),t>e.fixedSidebarOffset?-1===n.className.indexOf(e.positionFixedClass)&&(n.className+=r+e.positionFixedClass):n.className=n.className.split(r+e.positionFixedClass).join("")}();var s,c=i;if(a&&null!==document.querySelector(e.tocSelector)&&c.length>0){n.call(c,(function(t,n){return function t(n){var o=0;return n!=document.querySelector(e.contentSelector&&null!=n)&&(o=n.offsetTop,e.hasInnerContainers&&(o+=t(n.offsetParent))),o}(t)>l+e.headingsOffset+10?(s=c[0===n?n:n-1],!0):n===c.length-1?(s=c[c.length-1],!0):void 0}));var d=document.querySelector(e.tocSelector).querySelectorAll("."+e.linkClass);t.call(d,(function(t){t.className=t.className.split(r+e.activeLinkClass).join("")}));var u=document.querySelector(e.tocSelector).querySelectorAll("."+e.listItemClass);t.call(u,(function(t){t.className=t.className.split(r+e.activeListItemClass).join("")}));var m=document.querySelector(e.tocSelector).querySelector("."+e.linkClass+".node-name--"+s.nodeName+'[href="#'+s.id+'"]');-1===m.className.indexOf(e.activeLinkClass)&&(m.className+=r+e.activeLinkClass);var p=m.parentNode;p&&-1===p.className.indexOf(e.activeListItemClass)&&(p.className+=r+e.activeListItemClass);var f=document.querySelector(e.tocSelector).querySelectorAll("."+e.listClass+"."+e.collapsibleClass);t.call(f,(function(t){-1===t.className.indexOf(e.isCollapsedClass)&&(t.className+=r+e.isCollapsedClass)})),m.nextSibling&&-1!==m.nextSibling.className.indexOf(e.isCollapsedClass)&&(m.nextSibling.className=m.nextSibling.className.split(r+e.isCollapsedClass).join("")),function t(n){if(-1!==n.className.indexOf(e.collapsibleClass)&&-1!==n.className.indexOf(e.isCollapsedClass))return n.className=n.className.split(r+e.isCollapsedClass).join(""),t(n.parentNode.parentNode);return n}(m.parentNode.parentNode)}}}}},293:function(e,t,n){n(21),n(61),n(17),n(60),e.exports=function(e){var t=[].reduce;function n(e){return e[e.length-1]}function o(e){return+e.nodeName.split("H").join("")}function a(t){var n={id:t.id,children:[],nodeName:t.nodeName,headingLevel:o(t),textContent:t.textContent.trim()};return e.includeHtml&&(n.childNodes=t.childNodes),n}return{nestHeadingsArray:function(r){return t.call(r,(function(t,r){return function(t,r){for(var i=a(t),l=o(t),s=r,c=n(s),d=l-(c?c.headingLevel:0);d>0;)(c=n(s))&&void 0!==c.children&&(s=c.children),d--;l>=e.collapseDepth&&(i.isCollapsed=!0),s.push(i)}(a(r),t.nest),t}),{nest:[]})},selectHeadings:function(t,n){var o=n;e.ignoreSelector&&(o=n.split(",").map((function(t){return t.trim()+":not("+e.ignoreSelector+")"})));try{return document.querySelector(t).querySelectorAll(o)}catch(a){return console.warn("Element not found: "+t),null}}}}},294:function(e,t,n){n(17),n(98),n(13),t.initSmoothScrolling=function(e){document.documentElement.style;var t=e.duration,n=e.offset,o=location.hash?a(location.href):location.href;function a(e){return e.slice(0,e.lastIndexOf("#"))}document.body.addEventListener("click",(function(r){var i;"a"!==(i=r.target).tagName.toLowerCase()||!(i.hash.length>0||"#"===i.href.charAt(i.href.length-1))||a(i.href)!==o&&a(i.href)+"#"!==o||r.target.className.indexOf("no-smooth-scroll")>-1||"#"===r.target.href.charAt(r.target.href.length-2)&&"!"===r.target.href.charAt(r.target.href.length-1)||-1===r.target.className.indexOf(e.linkClass)||function(e,t){var n,o,a=window.pageYOffset,r={duration:t.duration,offset:t.offset||0,callback:t.callback,easing:t.easing||function(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}},i=document.querySelector('[id="'+decodeURI(e).split("#").join("")+'"]'),l="string"==typeof e?r.offset+(e?i&&i.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):e,s="function"==typeof r.duration?r.duration(l):r.duration;function c(e){o=e-n,window.scrollTo(0,r.easing(o,a,l,s)),o<s?requestAnimationFrame(c):(window.scrollTo(0,a+l),"function"==typeof r.callback&&r.callback())}requestAnimationFrame((function(e){n=e,c(e)}))}(r.target.hash,{duration:t,offset:n,callback:function(){var e,t;e=r.target.hash,(t=document.getElementById(e.substring(1)))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}})}),!1)}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-dgh-src-templates-post-tsx-df8a33420b2d6ca73a39.js.map