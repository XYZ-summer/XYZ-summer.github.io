if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,f)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const d=e=>i(e,r),b={module:{uri:r},exports:c,require:d};s[r]=Promise.all(a.map((e=>b[e]||d(e)))).then((e=>(f(...e),c)))}}define(["./workbox-b41f8fb8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"3704b6acfb754088ef97e6c37c245e5a"},{url:"archives/2018/01/index.html",revision:"017d8c70760de25ea8a4ae9e5979f5ed"},{url:"archives/2018/index.html",revision:"1137d6717fe217705d6f443f63cdec45"},{url:"archives/index.html",revision:"3bd0f058b7e4cc08f1a5fad014e19de5"},{url:"assets/404_1.jpg",revision:"6a03964ef10984e27b67b363df50a77f"},{url:"assets/avatar.webp",revision:"f131481dd042887310dbf30f2ca64046"},{url:"assets/close.webp",revision:"031cf9b050e9d0f537ff8bc85bd7b103"},{url:"assets/coffee.png",revision:"8bc664cc136eebecc529be389fabb8f3"},{url:"assets/gulp/404.jpg",revision:"079dd1d59bb349b3afa6dc57f6b0b6d2"},{url:"assets/gulp/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"assets/gulp/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"assets/gulp/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"assets/gulp/siteicon/128.png",revision:"8bc664cc136eebecc529be389fabb8f3"},{url:"assets/gulp/siteicon/144.png",revision:"d31a800162cb3e8304f06371ee5b3994"},{url:"assets/gulp/siteicon/16.png",revision:"426a14e28dc14177d0f082c870e698e5"},{url:"assets/gulp/siteicon/192.png",revision:"17f8e26eb7f0e990b10b36d6b5236929"},{url:"assets/gulp/siteicon/32.png",revision:"48ffb22693c2ea9952632c08723067ff"},{url:"assets/gulp/siteicon/48.png",revision:"505751c8eb85869c41082f708e160657"},{url:"assets/gulp/siteicon/512.png",revision:"d0a6cc66341546a81c914ffe6f3bc9a1"},{url:"assets/gulp/siteicon/64.png",revision:"90b09dc4861140b6a013e8ca4f85887a"},{url:"assets/head.jpg",revision:"f131481dd042887310dbf30f2ca64046"},{url:"assets/loading2.gif",revision:"4cd620a17094f1e2dd58460b477e1fec"},{url:"assets/loading3.gif",revision:"bdaea39db57dc0b48d763262514268db"},{url:"assets/open.webp",revision:"fd937e6bdb03302af094de45beadf351"},{url:"assets/pusheencode.webp",revision:"cc30a092e63e56355a019719cd8053ee"},{url:"assets/r1.jpg",revision:"1baeeb410bdd5e1b155aa77153eadd4c"},{url:"assets/r2.jpg",revision:"079dd1d59bb349b3afa6dc57f6b0b6d2"},{url:"box/animation/index.html",revision:"8a212132dd1ff4385fdd528213cdeca0"},{url:"box/gallery/index.html",revision:"87eaf6e0f70853243e87c4fa4b397ab5"},{url:"box/nav/index.html",revision:"e51fa49d6397287c1966407e7e212f4d"},{url:"categories/1/index.html",revision:"78e8b042312b9663556f9eb1163909e2"},{url:"categories/index.html",revision:"5be064928582b60ed9bfb4c13349e227"},{url:"css/abc.css",revision:"581b100e092118d97bbb65f035d6caaa"},{url:"css/coin.css",revision:"b6e115f6b4b607a94719fa489fef4832"},{url:"css/custom.css",revision:"6e3d477415a3049f11f493e95d32233c"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/index.css",revision:"e8f1a519a3b37d203744081f68c1ffa9"},{url:"css/kslink.css",revision:"dd1af3c36730c7ef47a7c1f4eab27bdb"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon-16x16.png",revision:"7230a65e2a3cf5daf22949838ad4eab9"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"60506a5bc14cb69fc8396b9b03c4684b"},{url:"js/bibi.js",revision:"38d1ddfe681559cb5be57700e772b66f"},{url:"js/census.js",revision:"f07b3b4f3c1b61e2769f7f4ef9b16bfd"},{url:"js/coin.js",revision:"700e0d15ec466e9d4426377495af3fec"},{url:"js/fomal.js",revision:"70b8b4f175f2d1991d9ff83aff0800c6"},{url:"js/kslink.js",revision:"c5e1f13cf2b125ab4d8637718a88e903"},{url:"js/light.js",revision:"f468482640e67bd1b4127426d9130107"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/txmap.js",revision:"2b79c2fe864c6b4759028185453f40f8"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"life/games/index.html",revision:"495dc8bd7b997bd8a09fe727adfa709a"},{url:"life/movies/index.html",revision:"215ab8bff1eeae3a17fa1c58248d09ca"},{url:"life/music/index.html",revision:"6cc628e1a76a5e47a3e4fa0e0e5355f5"},{url:"personal/about/index.html",revision:"51e073f4d0fb9a80439503a11cbe5a79"},{url:"personal/bb/index.html",revision:"3ae347415e1516e0fe0661f18416e005"},{url:"personal/love/index.html",revision:"6f83e87647f02671f29d6d95580031a9"},{url:"posts/4a17b156.html",revision:"c79df2c9cfeecd36f45d6b9f89df5c23"},{url:"site/census/index.html",revision:"de403b345c9d05659a10e703e74f6f3d"},{url:"site/echarts/index.html",revision:"fe010cf50125c0ed2ba51bb3a02bafaf"},{url:"site/time/index.html",revision:"041a12bfa29d6b7b3d38b7361f5ef0c5"},{url:"social/fcircle/index.html",revision:"290392b903c65211d19925b2ab4045e5"},{url:"social/link/index.html",revision:"a356c43c46d0da2738e3b8b6b62716d2"},{url:"tags/index.html",revision:"686ed084c1144c14ec25dad7308df526"}],{})}));
//# sourceMappingURL=service-worker.js.map
