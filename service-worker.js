if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,r)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(s[b])return;let d={};const a=e=>i(e,b),f={module:{uri:b},exports:d,require:a};s[b]=Promise.all(c.map((e=>f[e]||a(e)))).then((e=>(r(...e),d)))}}define(["./workbox-b41f8fb8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"eaf1857ceb0e8815e3f7bbe9cdc9428b"},{url:"archives/2018/01/index.html",revision:"ad24c3bdf86e46726e8cb9034eb7c8b1"},{url:"archives/2018/index.html",revision:"394b6e89b56d2f594dd6df0e0de66d7c"},{url:"archives/index.html",revision:"8368b5407af38619594b283236c04d52"},{url:"assets/404_1.jpg",revision:"6a03964ef10984e27b67b363df50a77f"},{url:"assets/avatar.webp",revision:"f131481dd042887310dbf30f2ca64046"},{url:"assets/close.webp",revision:"031cf9b050e9d0f537ff8bc85bd7b103"},{url:"assets/coffee.png",revision:"8bc664cc136eebecc529be389fabb8f3"},{url:"assets/gulp/404.jpg",revision:"079dd1d59bb349b3afa6dc57f6b0b6d2"},{url:"assets/gulp/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"assets/gulp/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"assets/gulp/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"assets/head.jpg",revision:"f131481dd042887310dbf30f2ca64046"},{url:"assets/loading2.gif",revision:"4cd620a17094f1e2dd58460b477e1fec"},{url:"assets/loading3.gif",revision:"bdaea39db57dc0b48d763262514268db"},{url:"assets/open.webp",revision:"fd937e6bdb03302af094de45beadf351"},{url:"assets/pusheencode.webp",revision:"cc30a092e63e56355a019719cd8053ee"},{url:"assets/QRCode.jpg",revision:"f34bae926ffc7cb3b4e5d28759bd02ee"},{url:"assets/r1.jpg",revision:"1baeeb410bdd5e1b155aa77153eadd4c"},{url:"assets/r2.jpg",revision:"079dd1d59bb349b3afa6dc57f6b0b6d2"},{url:"box/animation/index.html",revision:"f9a960775cf7e4cf7e702a1618908c31"},{url:"box/gallery/index.html",revision:"86dc780555884ec1eff4b87316a1b1e5"},{url:"box/nav/index.html",revision:"1c05446c02b4d0667c8618a8552c344d"},{url:"categories/1/index.html",revision:"c1e3970ea22c2e5fd4535be27a155b87"},{url:"categories/index.html",revision:"f33e5cc6c14afe207b24388606d71695"},{url:"css/coin.css",revision:"b6e115f6b4b607a94719fa489fef4832"},{url:"css/custom.css",revision:"d10ca6cfa5baca002e082596587c8dee"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/index.css",revision:"b234dd1e2be60969c492c6f54bec62e9"},{url:"css/kslink.css",revision:"dd1af3c36730c7ef47a7c1f4eab27bdb"},{url:"css/modify.css",revision:"8e10fc367078cc84dbd10d7b64520800"},{url:"css/readPercent.css",revision:"2ca0747338277f84d24d23ea85182428"},{url:"css/universe.css",revision:"634bbccd301760e7e1d016c7a5512783"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon1-32x32.png",revision:"e2d1d5f3c0f320fd5ccc95d4bbc6843a"},{url:"img/favicon2-32x32.png",revision:"36c57a03d4853af3b1ee9f462a0e4b26"},{url:"img/favicon3-32x32.png",revision:"1763c76182c91d439ff4bd003853f4aa"},{url:"img/favicon4-32x32.png",revision:"db5239a2d466efd268d4f0f156c999d9"},{url:"img/favicon5-32x32.png",revision:"1beb0609be9fd1905416ec2a5f9b1729"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"189e7b32512c9318c71ec0f54d393282"},{url:"js/bibi.js",revision:"38d1ddfe681559cb5be57700e772b66f"},{url:"js/census.js",revision:"f07b3b4f3c1b61e2769f7f4ef9b16bfd"},{url:"js/coin.js",revision:"700e0d15ec466e9d4426377495af3fec"},{url:"js/cursor.js",revision:"3219d7a41e68e5e61959d7145fe6b8b1"},{url:"js/fomal.js",revision:"70b8b4f175f2d1991d9ff83aff0800c6"},{url:"js/kslink.js",revision:"c5e1f13cf2b125ab4d8637718a88e903"},{url:"js/light.js",revision:"f468482640e67bd1b4127426d9130107"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/readPercent.js",revision:"faf684e8984df510278342f7704b9420"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/txmap.js",revision:"b4c75d226652cc336a3fe4b0285a1fee"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"life/games/index.html",revision:"9f28bd52ce8ca81d9162795f7e689652"},{url:"life/movies/index.html",revision:"8c55bda1db559bf26483de6a91742c0f"},{url:"life/music/index.html",revision:"117afa047b5837cccd38890ac8d8c5ff"},{url:"personal/about/index.html",revision:"9bba07c4bbd8b11a930903ab44984d65"},{url:"personal/bb/index.html",revision:"0a15492e8e9c4d2bc50b9c92eca8eec9"},{url:"personal/love/index.html",revision:"fb013a4507c76727e0414ea69bbbdb9f"},{url:"posts/4a17b156.html",revision:"ba2316a70a69b41d7c0ab9ef8562b12f"},{url:"site/census/index.html",revision:"7f03b9721817ac59d8b1bc691a3bc32d"},{url:"site/echarts/index.html",revision:"c602608b319d39650ccf5e0a91a7c328"},{url:"site/time/index.html",revision:"2b75b99ca203f88da1d7d987df7a28cc"},{url:"social/fcircle/index.html",revision:"ffe84ede271f62b10b8927c3c4074050"},{url:"social/link/index.html",revision:"b25f38bd5360b0e6c565693cac69d159"},{url:"tags/index.html",revision:"acc034128f0e3ec540e66e3113534339"}],{})}));
//# sourceMappingURL=service-worker.js.map
