(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{204:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return A});a(214),a(32);var n=a(0),i=a.n(n),o=a(223),r=a(221),l=a(216),c=a(226),s=a.n(c),d=a(213),u=a(215),p=a.n(u),m=a(208),h=a(219),f=m.default.img.withConfig({displayName:"tags__TagSvgIcon",componentId:"r2s5li-0"})(["max-height:55px;"]),g=m.default.p.withConfig({displayName:"tags__TagName",componentId:"r2s5li-1"})(["margin:0 !important;"]);t.default=function(e){var t=e.data,a=e.location,n=t.allTags.edges.map(function(e){return e.node});return i.a.createElement(o.a,{bigHeader:!1},i.a.createElement(h.a,{location:a,title:"Tags",type:"Series"}),i.a.createElement(r.a,{title:"Tags",subtitle:n.length+" tags"}),i.a.createElement(d.b,{columns:6},n.map(function(e,t){return i.a.createElement(l.a,{key:t,path:"/tag/"+s()(e.name,{lower:!0}),compact:!0,style:{textAlign:"center"}},"svg"!==e.icon.extension?i.a.createElement(p.a,{fixed:e.icon.childImageSharp.fixed}):i.a.createElement(f,{src:e.icon.publicURL,alt:e.name}),i.a.createElement(g,null,e.name))})))};var A="3452662515"},209:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(71),r=a.n(o);a.d(t,"a",function(){return r.a}),a.d(t,"b",function(){return o.navigate});a(210),a(10).default.enqueue,i.a.createContext({})},210:function(e,t,a){var n;e.exports=(n=a(212))&&n.default||n},212:function(e,t,a){"use strict";a.r(t);a(20);var n=a(0),i=a.n(n),o=a(101);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},216:function(e,t,a){"use strict";a(214);var n=a(0),i=a.n(n),o=a(208),r=a(209),l=a(211),c=a(215),s=a.n(c),d=Object(o.default)(r.a).withConfig({displayName:"style__StyledCard",componentId:"sc-1h1cbdt-0"})(["display:block;background-color:#fff;border-radius:3px;box-shadow:0 1px 1px #e6e6e6,0 2px 4px #e6e6e6;transition:.5s all;width:100%;height:100%;overflow:hidden;&:hover{transform:translate3d(0,-5px,0);box-shadow:0 1px 1px #ccc,0 4px 4px #ccc;}"]),u=o.default.article.withConfig({displayName:"style__StyledArticle",componentId:"sc-1h1cbdt-1"})(["display:inline-block;width:100%;@media (max-width:","){grid-area:unset !important;}"],l.a.breakpoints.sm),p=Object(o.default)(s.a).withConfig({displayName:"style__FeaturedImage",componentId:"sc-1h1cbdt-2"})(["background-position:center;background-size:cover;max-width:100%;border-top-left-radius:3px;",";"],function(e){return e.halfImage?"\n    width: 50%;\n    float: left;\n    margin-right: 30px;\n    height: 320px;\n    border-bottom-left-radius: 3px;\n\n    @media (max-width: "+l.a.breakpoints.sm+") {\n      width: 100%;\n      float: none;\n      height: 190px;\n    }\n  ":"\n    height: 190px;\n    max-height: 190px;\n    width: 100%;\n    border-top-right-radius: 3px;\n  "}),m=o.default.section.withConfig({displayName:"style__CardContent",componentId:"sc-1h1cbdt-3"})(["padding:",";p{margin:15px 0;}h2{font-size:1.2em;}"],function(e){return e.compact?"10px":"40px"}),h=o.default.section.withConfig({displayName:"style__CardMeta",componentId:"sc-1h1cbdt-4"})(["display:flex;justify-content:space-between;margin-bottom:8px;font-size:.8em;opacity:.8;line-height:1em;"]),f=o.default.h2.withConfig({displayName:"style__CardTitle",componentId:"sc-1h1cbdt-5"})(["margin:0;padding:0;"]);a.d(t,"a",function(){return g});var g=function(e){var t=e.title,a=e.meta,n=e.path,o=e.featuredImage,r=e.content,l=e.halfImage,c=void 0!==l&&l,s=e.compact,g=void 0!==s&&s,A=e.style,y=e.children;return i.a.createElement(u,{style:A},i.a.createElement(d,{to:n},o&&o.fixed&&i.a.createElement(p,{fixed:o.fixed,halfImage:c}),o&&o.sizes&&i.a.createElement(p,{sizes:o.sizes,halfImage:c}),i.a.createElement(m,{compact:g},y,i.a.createElement("header",null,a&&i.a.createElement(h,null,a.tag&&i.a.createElement(i.a.Fragment,null,a.tag),a.time&&i.a.createElement("time",{dateTime:a.time},a.timePretty)),t&&i.a.createElement(f,null,t)),r&&i.a.createElement("p",{dangerouslySetInnerHTML:{__html:r}}))))}},217:function(e){e.exports={data:{site:{siteMetadata:{title:"Dev Giang Hồ - Blog for Devs",description:"Blog Kiên Đinh & %TOPICS%",topics:["JavaScript",".NET","Vuejs","PHP","Vạn Vật"],menu:[{name:"Home",path:"/"},{name:"Example",path:"/page"}],footerMenu:[{name:"Example",path:"/page"},{name:"Sitemap",path:"/sitemap.xml"}],search:!0}}}}},218:function(e){e.exports={data:{file:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEi0lEQVQ4yz2T7VOSWRjGn93Zpg9aqWsTWdM0teZL2mYhBIkgppTllllNpLWVmzUMi24FFqiAoqIigg+ID4EiopigkoqA8IAkvtEmAtmQL2W1L7Uzzf4Le/qyM/ecmXPOXGfu+zq/C0Jd6GrkzaTV6p32vHzxezAQDAdDK+FX4HBjbR3U5tt3n//+5HZ5ssh5ubRz6m5tpxppV8JKpAt6Pu0NLQddTuecz/cqFF6NRNZX195tvP34/sNff/wJZO82vortNgeRlEvNL5CplFJYDvQKIJ6bnV2cX7DbbHOzvtkZn3fa619cDLxcCgVD62vrpuGR7JzThJNUEjkv8VD6Kdo5hboLiBHtEwWiglwupxtFR0ZGPKh7ctI2ZDI77A6rddLpQlG3G1FrklIztmzZHhUVHx0dj8Hs53B5PX16TU8P6B/yeNw226RO3zs6OjrlmJpyOFAUfe4FDkx7Pd5gYEkKwynp2G3bv4+Lw3y3JerHY3itvtcw0N9vHIDWIqvLgYB5eBhFXW7UZbfZrVarw24HFo6MWMYmJkQSydmLV3bE7NoREx+9LQ6TsL+5rc1sNpnNZmhz4214OYi6XAvzc/6FucWv63wosPTC79f1GeQdyiJ6CelUwe6Eg7GxmKjo2F2YfU2tkj5jfzVfCL0Ov5LBSl6tsFHc2tYuVyGIoX9g6KnZZndIO2BEoykuuZ6cjt21+0B8/J5vvt1KzM6RKhUSWC5ulUDjExMPeNVlTFbJL+WSDlit7RE0ND2u4bfDikaJRCRpvXT9FoGSX3jp6oGDqZn4LHZNbRvcAa4kMjlU1yRuapdW8flcYX0wGBoeHh4YNAILx8bHWZyqq7fvUM+cB5V/9jwWl1UjqOvW67o0T1rk7dw6AWSxWGpEosdCgWl09E0k0q3T8UUNrVKpVN7BYnPOFF0h5pzGEqjU/HO0s0W1daL+QSOwWm8wIFoNNOvzgT2s6py02QGYOr2+WljP5QtFjeLzl68VXb1OJNMOJB5hVN5n86o7lIrBp4NDJhNosNfQB/3z+ZNMDifsTUQQrW9mBjgJBpEqYEF9QzH9RgaenJyGYzAr1RrNvYpKWadibGwMEAGgsjx7Bi29XEpJPR4Tk+Bf8AeWAopOFaPiAdzV2d2re8jlXabfrOLxG8UtrTLZXVZlGYOpQtRgtH6j0W53QEzWb1u3xpIpNJAeQDjSrS29daeSzZErlHWNTaLmZqFYzHzIfiQUMNkcLDEn6TA2I5OEP5lLIOVByWmZAF0eV/BhcxMMz60Xnr5w+RFfUMmpKmeyfn3w8C6r4j6Pd/Me4wK9lJCdn3oE/39Be/b+AKBXKZGVcPipaaii6hGBQqMVFt8ov3ebwSwtKy++9jMwPCkdl3oUdygNm5hyPO3YyQw8JYtaAMXswOBwpIkJK4AVpIInrCOS8w9nEI4RKFm5Zyi0whOk3PSjJ8Qt0t5eQ62gofRm+U8X6eDRvMKLUHT0Th63NrS8DCyxjFpAKvSGPsAtvfQW+FgcMWfnzn1JKUedU85/v3z5uPkeZGHtzerrlRWny/UfGT9PhONse6YAAAAASUVORK5CYII=",width:30,height:30,src:"/static/7e55704418c2d530fda33cc8a39a3395/5d6f9/logo.png",srcSet:"/static/7e55704418c2d530fda33cc8a39a3395/5d6f9/logo.png 1x,\n/static/7e55704418c2d530fda33cc8a39a3395/bbdf9/logo.png 1.5x,\n/static/7e55704418c2d530fda33cc8a39a3395/43244/logo.png 2x"}}}}}},220:function(e){e.exports={data:{site:{siteMetadata:{title:"Dev Giang Hồ - Blog for Devs",siteUrl:"https://devgiangho.github.io",description:"Blog Kiên Đinh & %TOPICS%",topics:["JavaScript",".NET","Vuejs","PHP","Vạn Vật"],author:{name:"Kiên Đinh",description:"Bần đạo là <strong>Kiên Đinh</strong>, một Junior Fullstack Developer. \n        Ta viết blog này với mục đích chia sẻ những kinh nghiệm của bản thân đối với <b>tu DEV chi đạo</b>. ",social:{twitter:"",facebook:"https://www.facebook.com/kien.matu.7"}}}}}}},221:function(e,t,a){"use strict";a(222);var n=a(0),i=a.n(n),o=a(208),r=a(213),l=o.default.div.withConfig({displayName:"subheader__StyledSubheader",componentId:"sc-1xrlxvh-0"})(["background-color:",";color:",";display:flex;align-items:center;height:90px;margin-bottom:30px;"],function(e){return e.backgroundColor?e.backgroundColor:"#000"},function(e){return e.textColor?e.textColor:"#fff"}),c=o.default.h1.withConfig({displayName:"subheader__SubheaderTitle",componentId:"sc-1xrlxvh-1"})(["font-size:1.2em;font-weight:bold;color:#fff;margin:0;line-height:1em;"]),s=o.default.small.withConfig({displayName:"subheader__SubheaderSubtitle",componentId:"sc-1xrlxvh-2"})(["font-weight:normal;display:block;opacity:.9;"]);t.a=function(e){var t=e.title,a=e.subtitle,n=e.backgroundColor,o=e.textColor;return i.a.createElement(l,{backgroundColor:n,textColor:o},i.a.createElement(r.a,null,i.a.createElement(c,null,t,i.a.createElement(s,null,a))))}},222:function(e,t,a){"use strict";a(224)("small",function(e){return function(){return e(this,"small","","")}})},226:function(e,t,a){var n;a(33),a(99),a(98),a(11),a(32),n=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}');function t(t,a){if("string"!=typeof t)throw new Error("slugify: string argument expected");a="string"==typeof a?{replacement:a}:a||{};var n=t.split("").reduce(function(t,n){return t+(e[n]||n).replace(a.remove||/[^\w\s$*_+~.()'"!\-:@]/g,"")},"").trim().replace(/[-\s]+/g,a.replacement||"-");return a.lower?n.toLowerCase():n}return t.extend=function(t){for(var a in t)e[a]=t[a]},t},e.exports=n(),e.exports.default=n()}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-devgiangho-src-pages-tags-tsx-64e41690be1d8dff5706.js.map