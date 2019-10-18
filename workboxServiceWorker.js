/*
 * @Author: zhouhong07
 * @Date: 2019-09-03 18:01:11
 * @LastEditors: 
 * @LastEditTime: 2019-10-18 13:29:11
 * @Description: file content
 */
/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("/static/workbox-sw.js");

importScripts(
  "/static/precache-manifest.3277778a04fe07b218be2e650e681aec.js"
);

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
workbox.core.setCacheNameDetails({
  prefix: 'rainbow-static-cache',
  suffix: 'v1.0.0',
});

self.__precacheManifest = ['https://pic6.58cdn.com.cn/mobile/big/n_v2505a55e534be4031861f1d0ef3f0fa43.jpg?ss=1&cut=1&t=1&w=750.0&cuth=599.00&cutx=0.00&h=410.0&cuty=1.00&cutw=1096.17&crop=1&cpos=middle'].concat(self.__precacheManifest || []);

workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  // ignoreUrlParametersMatching: [/.*/],
  cleanUrls: false,
});

workbox.googleAnalytics.initialize({});

// workbox.routing.registerRoute(
//   /^https:\/\/rainbowzh.github.io\//i,
//   workbox.strategies.networkFirst({
//     cacheName: 'rainbow-change-cache'
//   })
// )
workbox.routing.registerRoute(
  `https://unpkg.com/swiper/js/swiper.min.js`,
  workbox.strategies.networkFirst({
    plugins: [
        // 这个插件是让匹配的请求的符合开发者指定的条件的返回结果可以被缓存
        new workbox.cacheableResponse.Plugin({
            statuses: [0, 200]
        })
    ]
  }),
)