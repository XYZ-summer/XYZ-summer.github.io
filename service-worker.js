if(!self.define){let e,s={};const i=(i,d)=>(i=new URL(i+".js",d).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let b={};const a=e=>i(e,r),f={module:{uri:r},exports:b,require:a};s[r]=Promise.all(d.map((e=>f[e]||a(e)))).then((e=>(c(...e),b)))}}define(["./workbox-b41f8fb8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"2538e9e4ea49d2cbb61c55046d16cd3e"},{url:"archives/2024/08/index.html",revision:"1846be9f0db4fdfdc4d6b90aae2ebdd2"},{url:"archives/2024/index.html",revision:"786b4ed1ba1bed0a2fbe46a3bd33e8de"},{url:"archives/index.html",revision:"10edbeca23342a44f440b5ba01387de0"},{url:"assets/404_1.jpg",revision:"6a03964ef10984e27b67b363df50a77f"},{url:"assets/avatar.webp",revision:"f131481dd042887310dbf30f2ca64046"},{url:"assets/close.webp",revision:"031cf9b050e9d0f537ff8bc85bd7b103"},{url:"assets/coffee.png",revision:"8bc664cc136eebecc529be389fabb8f3"},{url:"assets/gulp/404.jpg",revision:"079dd1d59bb349b3afa6dc57f6b0b6d2"},{url:"assets/gulp/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"assets/gulp/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"assets/gulp/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"assets/head.jpg",revision:"f131481dd042887310dbf30f2ca64046"},{url:"assets/loading2.gif",revision:"4cd620a17094f1e2dd58460b477e1fec"},{url:"assets/loading3.gif",revision:"bdaea39db57dc0b48d763262514268db"},{url:"assets/open.webp",revision:"fd937e6bdb03302af094de45beadf351"},{url:"assets/pusheencode.webp",revision:"cc30a092e63e56355a019719cd8053ee"},{url:"assets/QRCode.jpg",revision:"f34bae926ffc7cb3b4e5d28759bd02ee"},{url:"assets/r1.jpg",revision:"1baeeb410bdd5e1b155aa77153eadd4c"},{url:"assets/r2.jpg",revision:"079dd1d59bb349b3afa6dc57f6b0b6d2"},{url:"box/animation/index.html",revision:"358a7812edaae98690cbf3c155e79393"},{url:"box/gallery/index.html",revision:"31ba555821ed63ccd315666176cd9b91"},{url:"box/nav/index.html",revision:"222004c149ced84539b3d6a895f0b86b"},{url:"categories/index.html",revision:"0ad2b8368526a76602de84e9c3219c16"},{url:"categories/算法/index.html",revision:"f1c13ef66c14b6b08dc255ed0d22d2c9"},{url:"css/coin.css",revision:"b6e115f6b4b607a94719fa489fef4832"},{url:"css/custom.css",revision:"0e3dd2d791e4d93d3b01ad4fcf2d7354"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/index.css",revision:"7d75fc97cf6067d13a9b5cf91263dcb5"},{url:"css/kslink.css",revision:"dd1af3c36730c7ef47a7c1f4eab27bdb"},{url:"css/modify.css",revision:"8e10fc367078cc84dbd10d7b64520800"},{url:"css/readPercent.css",revision:"2ca0747338277f84d24d23ea85182428"},{url:"css/universe.css",revision:"634bbccd301760e7e1d016c7a5512783"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon1-32x32.png",revision:"e2d1d5f3c0f320fd5ccc95d4bbc6843a"},{url:"img/favicon2-32x32.png",revision:"36c57a03d4853af3b1ee9f462a0e4b26"},{url:"img/favicon3-32x32.png",revision:"1763c76182c91d439ff4bd003853f4aa"},{url:"img/favicon4-32x32.png",revision:"db5239a2d466efd268d4f0f156c999d9"},{url:"img/favicon5-32x32.png",revision:"1beb0609be9fd1905416ec2a5f9b1729"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"1124f1a82f53120401fb65c4ba685cc3"},{url:"js/bibi.js",revision:"38d1ddfe681559cb5be57700e772b66f"},{url:"js/census.js",revision:"f07b3b4f3c1b61e2769f7f4ef9b16bfd"},{url:"js/coin.js",revision:"700e0d15ec466e9d4426377495af3fec"},{url:"js/cursor.js",revision:"3219d7a41e68e5e61959d7145fe6b8b1"},{url:"js/fomal.js",revision:"70b8b4f175f2d1991d9ff83aff0800c6"},{url:"js/kslink.js",revision:"c5e1f13cf2b125ab4d8637718a88e903"},{url:"js/light.js",revision:"f468482640e67bd1b4127426d9130107"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/readPercent.js",revision:"faf684e8984df510278342f7704b9420"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/txmap.js",revision:"b4c75d226652cc336a3fe4b0285a1fee"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"life/games/index.html",revision:"68a4e7ed6985462a8adfc13eebb2fd4f"},{url:"life/movies/index.html",revision:"b9e819a1a93e661a15614e8c15b51a5d"},{url:"life/music/index.html",revision:"c27c2203654a4711165536ab74c30435"},{url:"personal/about/index.html",revision:"30bdbdc300195924fe693a7ad51b32e0"},{url:"personal/bb/index.html",revision:"57337231c1f14035c1e5068055c3f3c5"},{url:"personal/love/index.html",revision:"38fe4dc77251d0380c25d58a9d04db52"},{url:"posts/b7e144d1.html",revision:"f22e05bce9302a2894a73cbb83c98a0a"},{url:"site/census/index.html",revision:"2bfa1aaea08b66146cbb5b48f46ffbb2"},{url:"site/echarts/index.html",revision:"40b4e753f57687b8a8bd68e1cf23b978"},{url:"site/time/index.html",revision:"9d5ea3ce4e4fa51b0f9b8f91cda77a14"},{url:"social/fcircle/index.html",revision:"a1e9941be716e95d298b0aabc4960920"},{url:"social/link/index.html",revision:"a7ca45ffc9627efe2c95ed19c9f220dd"},{url:"tags/index.html",revision:"448fc74040e47a0f412f3c0b78f5ebae"},{url:"tags/算法/index.html",revision:"2741f2b312269cedc180c9bfd899db77"}],{})}));
//# sourceMappingURL=service-worker.js.map
