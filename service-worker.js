"use strict";var precacheConfig=[["/cv-matiasmoron/index.html","7c7b75b9bd8db79fa82b25540302ec12"],["/cv-matiasmoron/static/css/main.03421b36.css","030206889831276e09d684d5e4e2029e"],["/cv-matiasmoron/static/js/main.6a15af49.js","3a59ba63b7fa4fa017e35a66448f0292"],["/cv-matiasmoron/static/media/angular.b23fc05d.png","b23fc05d0b89298c39afbd3272d515a7"],["/cv-matiasmoron/static/media/cel.a6530691.png","a65306911aa1c33387242e8567792982"],["/cv-matiasmoron/static/media/coding.62035aae.jpg","62035aaef053ff42d6b900e40a35e75c"],["/cv-matiasmoron/static/media/email.4db3a08b.png","4db3a08bc86fc57fdfe6ad43fd558473"],["/cv-matiasmoron/static/media/flagEng.3f459c1f.jpg","3f459c1f28739d8df9dc35f05a2ca267"],["/cv-matiasmoron/static/media/foto-cv-2.d662b4c3.jpg","d662b4c32c5fcc9e2d622fd46b72276e"],["/cv-matiasmoron/static/media/foto-cv.edcaf676.jpg","edcaf676be4780e1017618de21ce0259"],["/cv-matiasmoron/static/media/git.08ec5722.png","08ec57224f5d2a9929ead8a51b22e6f8"],["/cv-matiasmoron/static/media/github.b71bc541.png","b71bc541b323dcd8f0a887920f9670f9"],["/cv-matiasmoron/static/media/html5.9cf4a14c.png","9cf4a14cb5024b5d6e988c1519570ce3"],["/cv-matiasmoron/static/media/inmobiliaria.41a4dc8a.png","41a4dc8a8fa56a4e89b918b350a6cdad"],["/cv-matiasmoron/static/media/js.dff36bad.png","dff36bad692fa63eb3583a4c8983e3c1"],["/cv-matiasmoron/static/media/mongodb.2ff3b622.png","2ff3b62240b50621c2a4e18370ff9447"],["/cv-matiasmoron/static/media/nodejs.55e83371.png","55e83371dbf50a5f027b1fe31a054ad3"],["/cv-matiasmoron/static/media/php.1befcc4c.png","1befcc4ce3ff6c0fcd919302622ca38c"],["/cv-matiasmoron/static/media/react.1f27d280.png","1f27d28017b7708d3f46fd8d1af4a383"],["/cv-matiasmoron/static/media/sass.c0c163ba.png","c0c163ba79a8fcf651b563d74ddfdfa8"],["/cv-matiasmoron/static/media/uady.bcc38576.jpg","bcc385767093338c53ac4d4f3ece351e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/cv-matiasmoron/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});