// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// const withPWA = require('next-pwa')({
//     dest: 'public'
// })
// /** @type {import('next').NextConfig} */

// const nextConfig = {
//     reactStrictMode: true,
// }

// module.exports = withPWA(nextConfig)
// const withPWA = require("next-pwa");
// const runtimeCaching = require('next-pwa/cache')  

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     runtimeCaching,
    
//   },
// });

// const runtimeCaching = require("next-pwa/cache");
// const withPWA = require("next-pwa")({
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     runtimeCaching,
//     buildExcludes: [/middleware-manifest.json$/],
// });

// const nextConfig = withPWA({
//     // next config
    
// });
// module.exports = nextConfig;
// const withPWA = require('next-pwa')
  
//   module.exports = withPWA({
//     reactStrictMode: true,
//     pwa:{
//         dest: "public",
       
//     }
//     // next.js config
//   })

const withPWA = require("next-pwa")({
  dest: "public",
  
  
  disable: process.env.NODE_ENV === "development",
 
  // ... other options you like
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other options you like
};

module.exports = withPWA(nextConfig);