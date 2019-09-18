/*
 * @Author: zhouhong07
 * @Date: 2019-09-03 18:01:11
 * @LastEditors: 
 * @LastEditTime: 2019-09-18 17:50:32
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

importScripts("https://rainbowzh.github.io/static/workbox-sw.js");

importScripts(
  "https://rainbowzh.github.io/static/precache-manifest.3277778a04fe07b218be2e650e681aec.js"
);

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  ignoreUrlParametersMatching: [/./],
  cleanUrls: false,
});

workbox.googleAnalytics.initialize({});

workbox.routing.registerRoute(
  /^https:\/\/rainbowzh.github.io\//i,
  workbox.strategies.networkFirst({
    cacheName: 'rainbow-static-cache'
  })
)
