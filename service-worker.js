if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,a)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const f=e=>i(e,d),b={module:{uri:d},exports:c,require:f};s[d]=Promise.all(r.map((e=>b[e]||f(e)))).then((e=>(a(...e),c)))}}define(["./workbox-b41f8fb8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"f11953b982f7de567696806ad7e07e66"},{url:"archives/2018/01/index.html",revision:"35409bdf2d48724fe8e7266481c90c42"},{url:"archives/2018/index.html",revision:"a4ea2f9d04a9f11fcb4ebe3ec3f52b48"},{url:"archives/index.html",revision:"0565d9fbd3c237c35abfac1e724e0d2b"},{url:"assets/404_1.jpg",revision:"6a03964ef10984e27b67b363df50a77f"},{url:"assets/avatar.webp",revision:"f131481dd042887310dbf30f2ca64046"},{url:"assets/close.webp",revision:"031cf9b050e9d0f537ff8bc85bd7b103"},{url:"assets/coffee.png",revision:"8bc664cc136eebecc529be389fabb8f3"},{url:"assets/gulp/404.jpg",revision:"079dd1d59bb349b3afa6dc57f6b0b6d2"},{url:"assets/gulp/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"assets/gulp/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"assets/gulp/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"assets/head.jpg",revision:"f131481dd042887310dbf30f2ca64046"},{url:"assets/loading2.gif",revision:"4cd620a17094f1e2dd58460b477e1fec"},{url:"assets/loading3.gif",revision:"bdaea39db57dc0b48d763262514268db"},{url:"assets/open.webp",revision:"fd937e6bdb03302af094de45beadf351"},{url:"assets/pusheencode.webp",revision:"cc30a092e63e56355a019719cd8053ee"},{url:"assets/QRCode.jpg",revision:"f34bae926ffc7cb3b4e5d28759bd02ee"},{url:"assets/r1.jpg",revision:"1baeeb410bdd5e1b155aa77153eadd4c"},{url:"assets/r2.jpg",revision:"079dd1d59bb349b3afa6dc57f6b0b6d2"},{url:"box/animation/index.html",revision:"673e6f8ecdbc41e58bf7af6da433fbb6"},{url:"box/gallery/index.html",revision:"5f2953f15e4fc2c92787c5fe20d020a3"},{url:"box/nav/index.html",revision:"9470a472920701a48ee4026863113ef7"},{url:"categories/1/index.html",revision:"d696a4123e56517387641603063b4fa5"},{url:"categories/index.html",revision:"6482b1493766b67f4768bc3105aa4463"},{url:"css/coin.css",revision:"b6e115f6b4b607a94719fa489fef4832"},{url:"css/custom.css",revision:"000a838df2050c96f82d0ea3039cd9d4"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/index.css",revision:"9c2ee000406eec3d24c13e01bb844e5a"},{url:"css/kslink.css",revision:"dd1af3c36730c7ef47a7c1f4eab27bdb"},{url:"css/modify.css",revision:"8e10fc367078cc84dbd10d7b64520800"},{url:"css/universe.css",revision:"634bbccd301760e7e1d016c7a5512783"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"450cd088f281e991a40d688e3beee7a7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"4374c44124e06f88e6be96da37e0cf29"},{url:"js/bibi.js",revision:"38d1ddfe681559cb5be57700e772b66f"},{url:"js/census.js",revision:"f07b3b4f3c1b61e2769f7f4ef9b16bfd"},{url:"js/coin.js",revision:"700e0d15ec466e9d4426377495af3fec"},{url:"js/cursor.js",revision:"01c8ee79786bf96e5c1b9e0cd70aa094"},{url:"js/fomal.js",revision:"70b8b4f175f2d1991d9ff83aff0800c6"},{url:"js/kslink.js",revision:"c5e1f13cf2b125ab4d8637718a88e903"},{url:"js/light.js",revision:"f468482640e67bd1b4127426d9130107"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/txmap.js",revision:"2b79c2fe864c6b4759028185453f40f8"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"life/games/index.html",revision:"a69a8ebae0bbfdb67049b0e8c08990ac"},{url:"life/movies/index.html",revision:"fbf06d32f7ef6341d575998d549b3261"},{url:"life/music/index.html",revision:"55c1b784c699232d257832e3878a85a7"},{url:"personal/about/index.html",revision:"e38ff932aca6833ae58cd1427488af88"},{url:"personal/bb/index.html",revision:"119579ef49fcc5d8708bb8e3358bcaf3"},{url:"personal/love/index.html",revision:"f0ec5a6a3dc8512d1a39f1afe817bdd0"},{url:"posts/4a17b156.html",revision:"46cd0f4171310560e4605691ae2a744a"},{url:"site/census/index.html",revision:"92cccd047dc6b5aefe4abf76a11dad71"},{url:"site/echarts/index.html",revision:"cfb6d3327e1cdc4054e638d878621393"},{url:"site/time/index.html",revision:"b508203b1719aec59d29340e238f2363"},{url:"social/fcircle/index.html",revision:"eb8a0a757ce0b0ac16e136e4c45c5d72"},{url:"social/link/index.html",revision:"5a5d7a68a1e3ecc13a65bcb60e1da6b3"},{url:"tags/index.html",revision:"a1d8e03ea5833f1a3581367b561d28cd"}],{})}));
//# sourceMappingURL=service-worker.js.map
