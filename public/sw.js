if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let t={};const r=e=>s(e,n),o={module:{uri:n},exports:t,require:r};a[n]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"782d0675de468ad847dc0815af982b82"},{url:"/_next/static/chunks/13-f951992704a761df.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/287-240c2ad66517ff81.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/3ed05f91-1c6dc92a4ae0f78a.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/441-c1cfa4ac456f05aa.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/65-ed7680dfe01f396a.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/675-d6ff761544fdae53.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/698-4d346298847c33b0.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/846-817b84a2ca44a760.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/876-1c284ea709aa2ddd.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/app/dashboard/WatchStream/page-31bb96c8047e6e40.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/app/dashboard/account/page-ea25fbb330f0cc7f.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/app/dashboard/arena/betting/%5BgameId%5D/page-f5b046f5f0ffbe88.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/app/dashboard/arena/betting/layout-bd32515b94d1c237.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/app/dashboard/arena/betting/page-9be93989e647437d.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/app/dashboard/arena/game/%5BgameId%5D/page-47816bc7524af9bc.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/app/dashboard/arena/page-2f3c560bcf1d71b2.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/app/dashboard/arena/standard/%5BgameId%5D/page-c5535e10b4ab5c81.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/app/dashboard/arena/standard/layout-3f079be62aedd498.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/app/dashboard/arena/standard/page-392b789aa348724b.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/app/dashboard/home/page-8cec53d7aba8d4a2.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/app/dashboard/layout-68d84558a1c5834c.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/app/dashboard/marketplace/page-ead9b7e096d6649d.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/app/dashboard/tournaments/betting/page-ede749029e821f8b.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/app/dashboard/tournaments/page-9abc4b325034322e.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/app/layout-4517a48f2f017fc9.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/app/page-86d2d4f5a2701d6e.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/bce60fc1-51a6eefdfc199497.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/main-app-f2ebe95dbedc226e.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/main-b49cc1378d43cadb.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/pages/_app-b75b9482ff6ea491.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/pages/_error-7fafba9435aeb6bc.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-ce7f5d476f2c3a0f.js",revision:"zLD6p594-5Do2H768V65X"},{url:"/_next/static/css/075f8076efe08f51.css",revision:"075f8076efe08f51"},{url:"/_next/static/css/7c398fda588ef591.css",revision:"7c398fda588ef591"},{url:"/_next/static/css/bd3bc5c69394017b.css",revision:"bd3bc5c69394017b"},{url:"/_next/static/css/e388754de95a3c5c.css",revision:"e388754de95a3c5c"},{url:"/_next/static/media/008f2e8b4aae291f-s.woff2",revision:"54718ab24898dc8cd382ef3f285cfd0d"},{url:"/_next/static/media/10939feefdad71be-s.woff2",revision:"72b3ae37567ee5efdf2254b657c36ba9"},{url:"/_next/static/media/1b097aa12b72d9f9-s.woff2",revision:"ba40202b1c1dcacbdbb7bcd2042a410f"},{url:"/_next/static/media/2d141e1a38819612-s.p.woff2",revision:"acb6ad8efbc88ce55fcc0639a5d0a211"},{url:"/_next/static/media/3534416bbfdcc9be-s.p.woff2",revision:"8951283ba1faa0d2c460f42df9366ca1"},{url:"/_next/static/media/370d1cc320ec5619-s.woff2",revision:"a6ff41d10fa89e7f8fec937c243d7428"},{url:"/_next/static/media/376dd8dc38524313-s.p.woff2",revision:"af4d371a10271dafeb343f1eace762bc"},{url:"/_next/static/media/3828f203592f7603-s.woff2",revision:"e9fd398a43c9e51f9ee14e757eaf95d9"},{url:"/_next/static/media/3c46462b57ac880e-s.woff2",revision:"3942629d96d5cee049ce769cefb891e1"},{url:"/_next/static/media/4529092560591ab4-s.woff2",revision:"4f8626e31885b0732c32a2358239d9cf"},{url:"/_next/static/media/51051a7edfeea436-s.woff2",revision:"f1b74fe764967ea8636858297f750d66"},{url:"/_next/static/media/591327bf3b62a611-s.woff2",revision:"0ed299a4bb5262e17e2145783b2c18f1"},{url:"/_next/static/media/62328fecf9e80426-s.woff2",revision:"138c8f78129c50d2783bf0fe261d32af"},{url:"/_next/static/media/7777133e901cd5ed-s.p.woff2",revision:"a09f2fccfee35b7247b08a1a266f0328"},{url:"/_next/static/media/78187650dd6b50b3-s.woff2",revision:"d84d7157146a9c9347d9c07d172dc651"},{url:"/_next/static/media/839135d04a097cea-s.woff2",revision:"79e6e81d255edac7e8627c7e16baccf5"},{url:"/_next/static/media/87c72f23c47212b9-s.woff2",revision:"790d0c8dbcd491d29d58f1369c199d40"},{url:"/_next/static/media/8d1a51bb45dd4d14-s.woff2",revision:"185244e129c78b5a1e8de9b0319e5f93"},{url:"/_next/static/media/916d3686010a8de2-s.p.woff2",revision:"9212f6f9860f9fc6c69b02fedf6db8c3"},{url:"/_next/static/media/9b44cfc48addbfc9-s.woff2",revision:"b8f12782fb372c92a5c8e3380f926e17"},{url:"/_next/static/media/b8222d26e20b2e06-s.woff2",revision:"6c7142c441804cd078afe45be959fa78"},{url:"/_next/static/media/bd427f25ac24d036-s.p.woff2",revision:"5426bf50c8455aab7a3e89d1138eb969"},{url:"/_next/static/media/c7eb187887c48af6-s.woff2",revision:"361fa9642b5371651338f1af9f725f7e"},{url:"/_next/static/media/d869208648ca5469-s.p.woff2",revision:"72993dddf88a63e8f226656f7de88e57"},{url:"/_next/static/zLD6p594-5Do2H768V65X/_buildManifest.js",revision:"02b926c0e0d93f81521380ea4167e5c8"},{url:"/_next/static/zLD6p594-5Do2H768V65X/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icon-192x192.png",revision:"139e38d6d82cb4021a2759f45db582c9"},{url:"/icon-256x256.png",revision:"11044384125ffc4b22a8924ac67b4c96"},{url:"/icon-384x384.png",revision:"fc1c5012f0d0d872b06a58a6a54ce73f"},{url:"/icon-512x512.png",revision:"0129e47761d7f7fb4f4ab3584b7daae5"},{url:"/icons/IMG_20240118_203556.jpeg",revision:"43d2213dc1343a9a2f18e14494fc3d0e"},{url:"/icons/IMG_20240118_203622.jpeg",revision:"9729ae5a89621fe70ae2780fe74fa205"},{url:"/icons/Vector.svg",revision:"76ee4422127ad13e70b336e57453314f"},{url:"/icons/activity.svg",revision:"443d0861b7774415bdbbe50476d24143"},{url:"/icons/building-store.svg",revision:"404ccad9ee3f3bcb79b704ea08765d93"},{url:"/icons/calendar.svg",revision:"04c323a5760208192bb631c4cc250e50"},{url:"/icons/chevron-right.svg",revision:"b11765d9348d81f1c18517e44bbf2263"},{url:"/icons/home.svg",revision:"5e835e3db5fbc91671b30ab1f14e3df5"},{url:"/icons/wallet-gray.svg",revision:"c4c908f67ce020544dfffbab33802ea2"},{url:"/icons/wallet.svg",revision:"21289b908f3c7e3b9eaed0899a4fbeea"},{url:"/imgs/background.jpeg",revision:"d02a42e62617f570dcf53f88d49962a2"},{url:"/imgs/chess.mp4",revision:"e29213a644fd0034131177937f893013"},{url:"/imgs/chess.png",revision:"43d2213dc1343a9a2f18e14494fc3d0e"},{url:"/imgs/chess2.png",revision:"9729ae5a89621fe70ae2780fe74fa205"},{url:"/imgs/chessBoardMultiplayerNew.png",revision:"a4b0df6a99c4da5b1b7aec09dab5e6ac"},{url:"/imgs/chessIcon.png",revision:"412401ecc84276c26b58541c3b766cd2"},{url:"/imgs/chessboardBackground.jpg",revision:"97289ef44c1e1fe3ec662a24f8be4e8a"},{url:"/imgs/flow.png",revision:"9d8ab223e82ecc8e2e6cdf29fe0bff3b"},{url:"/imgs/logo.png",revision:"2d7f1cfadd7bb7bab43cb29f455584aa"},{url:"/imgs/make-your-move.png",revision:"944509ebd68a3ebdd6c6360c42f339f0"},{url:"/imgs/play-chess-your-way.png",revision:"0cdbfdcd12c61a3713999c9abe7da14a"},{url:"/imgs/spiral.png",revision:"e8d72c681593f94051dbece2674172da"},{url:"/manifest.json",revision:"1cd1840a4891b2f2640f2516125d29ea"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
