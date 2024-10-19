'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a040516cf6d009a721ff61b8823ef67d",
"version.json": "dc264bf26685bd093b8e4ce249ffd423",
"index.html": "b6695799b384cbcff09f412eef21bf2b",
"/": "b6695799b384cbcff09f412eef21bf2b",
"main.dart.js": "c47e6dcb2c80a897bff2d13798431904",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3f5923f83f786cb10a0f6700e5f68366",
".git/config": "27aa4ea48175b97c5747d6f530203f0a",
".git/objects/0d/11c635afe2ce2ee3c20a35e5e44c60f00a49ec": "3e86e5ebccba78d29177aad477376afa",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/72d709eb7374bfbbdb08623ee7b180c3b8a8e6": "2b13ddecc7e438b3dee9f377d29e4be9",
".git/objects/a4/fa8ac1dd5d4601ba1cd16b49887c499b4895c4": "b109d0f9511c189be4add073d9fe26b0",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/b3/759b4dc2c8302f3c3bc229478cc48b0857233c": "18553b1009fc07b7351933ff4dda01b6",
".git/objects/df/11656d744c9faa850180f3e6e2ef1494493433": "7b15997023dcf77918c8031b7de2177f",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/62a035daaae2d7330640a571e35f8369861f23": "136904ec6e1a96a04910802559d2fbed",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/c8/7d3b11a8e83a36787ae914f833362e235fa56d": "1c14acf266c1e998651c9020787fa4b0",
".git/objects/20/ad0d8a96e235edea515bcbb4a6a618f9f68367": "b5dbade547649ecfc53c25ac18c32cf3",
".git/objects/29/9c0c7edfb936d2aeb99963a7ef864bb679d3a9": "7dc492fef71414ae0471c5fcdf165e64",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/7c98bc901efb6a5ecd28bd80c4c6a5ca23f615": "65a3cfd7a1a610117a89ecea0aae9a61",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/80/8c13899915529e7f81dcf1eb386ed4701a1a22": "8a7f9e0e70dd7ffcd3d643e85648543a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/7aef2c4285a64afc31222b3a98ef9144940fd2": "501b520644b07b6d23d51501c29d390b",
".git/objects/72/eeb97400856d7834f40269fd8117f7d9717e80": "6902d40bf4384523b3f9f1ac0e81b3ab",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/daa891db3af938be8690db1c4f959c46c9050b": "05baebc59d7c0cb1a02d06a602546f1f",
".git/objects/2a/339656fe8d5fcfde700799fdd736c81e533d33": "91ebadd8798db9544d28f28158944f9e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/9a/0a3382d8579e684db165b12ef0fb653c1b197e": "a010492d06a96b604e026a54889d42b5",
".git/objects/62/b3dbe735b4e78377ff638f09c9eb379d5a9281": "dd27674d77c606b5d896fc395a2baa70",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/a8051396413f5b3b8ac029f0f669cc0630afb3": "2bc270ab8b5f2f2ff956453d5950463f",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/3f/d620a61c65d0325d164fa4dd06df32fd105ad7": "fd7226a97ca93b1f4a0fc38eb6c0550c",
".git/objects/5b/aceffe6ce269bac5428ea1d394bd0b651f53a3": "01ec5bee241983daa311d05de7e953fd",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/ca0f287ce0427f30eb5e1f0585695d63ce8a56": "15cfce004b0ffe4476bfc414d6b672a4",
".git/objects/01/7c6b7dd68a6bc9cf8c3e6c027f5e1f3b3d3763": "054e267cd7e6babc69f611dcc89d666e",
".git/objects/97/84fb686bfb1e0c68f27711c496ef15d5c2469c": "7b06c06d5c0d902e93136cc31af8f3b8",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dd/330e8ada918a12cd1047d05ec3600fc111a6f2": "6b2a8a2ffe641819bf97f9d2656fcc89",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/6a0bcd58ef5f73921db86aa6bcd01d8aac6820": "b5001ea578a955887bd642302ac0557b",
".git/objects/c5/7cc5d873df52803325349e832a10773f5193b6": "f82d6cbc470f426a3565a85dcce7b7e6",
".git/objects/f6/5f06cd31395d8902a2c68b1331b75fe4606b85": "4e9b8c2d7e586d14f792e7a3388fe6cd",
".git/objects/f8/cfa419ef61a2b42e4d4856acfbc7b4e5f52256": "2ca3e29fb3b7867daf520b29cddab3e0",
".git/objects/70/88f15e7f1ea778761646efed55c6f9183ef9b6": "3b3ffb7df5b4c9438cc7d7a01adbe6e4",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/8d/84e7fa256ac098a92f76ac52d7b98c94e8d38d": "c8e42c9b6927598f61ba50fa6ae21434",
".git/objects/85/c14725a3bf6d67aaf0f03292f9b763c1654f07": "1624e2605d4175804ddddd6ad531a3a2",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/3939ec165eafbb24e8d44e7c41fde4398ce884": "b4a636c8e130b478a535aecdc8f8be13",
".git/objects/71/36205fa2da34783abfde9d79e82b6a0f21b317": "189c31306bf11e0814f566d6b57bed68",
".git/objects/82/23b941de091832acebb4b292191a7792c08c5d": "c973c8c9033f4a27d5ca14cc69b6dd28",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/8c04cafc921fe2a52648145f881ebb48d06eaa": "9abd36b804cdb443607c5fb3a549e5b8",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4c84e74c34eac37f44beb5c8c9bbad60",
".git/logs/refs/heads/master": "4c84e74c34eac37f44beb5c8c9bbad60",
".git/logs/refs/remotes/origin/master": "144ee052d7e102ed227eb0b8deb4b1c8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "9187694536b03a5fd34de0eed4312967",
".git/refs/remotes/origin/master": "9187694536b03a5fd34de0eed4312967",
".git/index": "594db91231e95b8df76142b065d941af",
".git/COMMIT_EDITMSG": "77cb15f83a8d5e9f9ed17f79587607b0",
"assets/images/a19.png": "efca5df0e9ac8742a91d6d1aa1c0db59",
"assets/images/a18.png": "177c944da07f1b7b8b16aec9ac3c142e",
"assets/images/a1.png": "eaadaed044385c87ced63cb437135ba1",
"assets/images/a3.png": "cc4ee0a4f53908aaa2eeee751d01c226",
"assets/images/a2.png": "d9065b7608255ae3ffdb262382df53e3",
"assets/images/a6.png": "6b6de2e974beb0e33afa62c816e5ff52",
"assets/images/a7.png": "ca557bfe61223cd7d4346dbacc1a9723",
"assets/images/a5.png": "6786123b81fceb29b4a14998f4a6fb47",
"assets/images/a4.png": "19fbfdd51cb6af90680d7189e0d15e84",
"assets/images/a10.png": "19fbfdd51cb6af90680d7189e0d15e84",
"assets/images/a9.png": "6786123b81fceb29b4a14998f4a6fb47",
"assets/images/a8.png": "6b6de2e974beb0e33afa62c816e5ff52",
"assets/images/a11.png": "cc4ee0a4f53908aaa2eeee751d01c226",
"assets/images/a13.png": "efca5df0e9ac8742a91d6d1aa1c0db59",
"assets/images/a12.png": "d9065b7608255ae3ffdb262382df53e3",
"assets/images/a16.png": "06a16a2c81848ec2157d3ae8c2edd148",
"assets/images/a17.png": "ee9e8d4ed05f77553f443712c0d54cb1",
"assets/images/a15.png": "fae407e8bd4a40e212b72c070f438548",
"assets/images/bg.png": "4489ad2d9c61f744adf31938dab3ed47",
"assets/images/a14.png": "eaadaed044385c87ced63cb437135ba1",
"assets/AssetManifest.json": "bcf3af3c64645f2efdcbb1833ebe7f29",
"assets/NOTICES": "da51cb3abc0c66157eaf93b2fd9ce6da",
"assets/FontManifest.json": "4d4aab7a6dc2fb42bdbbbe46c878414f",
"assets/AssetManifest.bin.json": "8009ff7b6048fbfbed58db4fafdf1366",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/font/Minecraft.ttf": "d7b98c450349bef0631c7229b804a5c7",
"assets/AssetManifest.bin": "0ea0d10d111e88e217cf905cb0febf67",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
