if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,a)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(s[b])return;let d={};const f=e=>i(e,b),c={module:{uri:b},exports:d,require:f};s[b]=Promise.all(r.map((e=>c[e]||f(e)))).then((e=>(a(...e),d)))}}define(["./workbox-b41f8fb8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"be2454f4d80a8286624d22e0c5d89a1f"},{url:"archives/2018/01/index.html",revision:"cde287984456991a7a8a64dbacaa8d53"},{url:"archives/2018/index.html",revision:"1707370d79b06c360eeb1b15f0bf4906"},{url:"archives/index.html",revision:"8c847e1b360e9d34ae5b31b540193375"},{url:"assets/404_1.jpg",revision:"6a03964ef10984e27b67b363df50a77f"},{url:"assets/avatar.webp",revision:"f131481dd042887310dbf30f2ca64046"},{url:"assets/close.webp",revision:"031cf9b050e9d0f537ff8bc85bd7b103"},{url:"assets/coffee.png",revision:"8bc664cc136eebecc529be389fabb8f3"},{url:"assets/gulp/404.jpg",revision:"079dd1d59bb349b3afa6dc57f6b0b6d2"},{url:"assets/gulp/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"assets/gulp/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"assets/gulp/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"assets/head.jpg",revision:"f131481dd042887310dbf30f2ca64046"},{url:"assets/loading2.gif",revision:"4cd620a17094f1e2dd58460b477e1fec"},{url:"assets/loading3.gif",revision:"bdaea39db57dc0b48d763262514268db"},{url:"assets/open.webp",revision:"fd937e6bdb03302af094de45beadf351"},{url:"assets/pusheencode.webp",revision:"cc30a092e63e56355a019719cd8053ee"},{url:"assets/r1.jpg",revision:"1baeeb410bdd5e1b155aa77153eadd4c"},{url:"assets/r2.jpg",revision:"079dd1d59bb349b3afa6dc57f6b0b6d2"},{url:"assets/weichat.jpg",revision:"f34bae926ffc7cb3b4e5d28759bd02ee"},{url:"box/animation/index.html",revision:"b03278e3124483bf355611ac859ff2ab"},{url:"box/gallery/index.html",revision:"17a10815e22fe99dab25479fa2b68bef"},{url:"box/nav/index.html",revision:"c38e3e5a8d0309bb278d79a221db1188"},{url:"categories/1/index.html",revision:"24a64700115000b6a367800ba7ab9e6c"},{url:"categories/index.html",revision:"b64c052ba8ef279005f776d13e8518bc"},{url:"css/coin.css",revision:"b6e115f6b4b607a94719fa489fef4832"},{url:"css/custom.css",revision:"6e3d477415a3049f11f493e95d32233c"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/index.css",revision:"34e005ed3ae83084a536051cca130bc1"},{url:"css/kslink.css",revision:"dd1af3c36730c7ef47a7c1f4eab27bdb"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"450cd088f281e991a40d688e3beee7a7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"d0fb0dbb75c8212f508196f59da1db39"},{url:"js/bibi.js",revision:"38d1ddfe681559cb5be57700e772b66f"},{url:"js/census.js",revision:"f07b3b4f3c1b61e2769f7f4ef9b16bfd"},{url:"js/coin.js",revision:"700e0d15ec466e9d4426377495af3fec"},{url:"js/fomal.js",revision:"70b8b4f175f2d1991d9ff83aff0800c6"},{url:"js/kslink.js",revision:"c5e1f13cf2b125ab4d8637718a88e903"},{url:"js/light.js",revision:"f468482640e67bd1b4127426d9130107"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/txmap.js",revision:"2b79c2fe864c6b4759028185453f40f8"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"life/games/index.html",revision:"929f2822cec0603884919a2b038320f9"},{url:"life/movies/index.html",revision:"b6046213c4e656a0a608600194d09299"},{url:"life/music/index.html",revision:"5369087fdb45c08e409e7b00d04811dd"},{url:"personal/about/index.html",revision:"8316897864bae4e20e89f6d2ee81c408"},{url:"personal/bb/index.html",revision:"ab1e747d3519cf04e839b885b2c7200f"},{url:"personal/love/index.html",revision:"65a9840077e264a609617eeeed2a63e4"},{url:"posts/4a17b156.html",revision:"32d00296fad507c95b1e18fc5fc42697"},{url:"site/census/index.html",revision:"f46243976678b78e8aca7385338c17f8"},{url:"site/echarts/index.html",revision:"a70cb8cd742b2ae083607de2981bd26a"},{url:"site/time/index.html",revision:"24a6e803544f2351d59fde38e78c4481"},{url:"social/fcircle/index.html",revision:"399013f2f912ce83158196a051d159a5"},{url:"social/link/index.html",revision:"857cfe94e29f0bb944fb613330e57697"},{url:"tags/index.html",revision:"3c48beee33046f99d63b9a66f6944733"}],{})}));
//# sourceMappingURL=service-worker.js.map
