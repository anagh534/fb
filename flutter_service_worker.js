'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "395009571924a561c59a9ef551454cb0",
".git/config": "5758fcf446ba31153b6caac738eac887",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "124e4184033c7eb54f72f1509935ab2f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e10745cb557e4c5bf5b16bd2960edff4",
".git/logs/refs/heads/master": "e10745cb557e4c5bf5b16bd2960edff4",
".git/logs/refs/remotes/origin/master": "d8d4b28f50e18a43f8df83ca3b1e0cc2",
".git/objects/02/8c630d641011d3510691dea4793aa425e3c033": "9cc6800e9a3a8b871a97ce7c48097610",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/07abfbcb5e5b699252779ede6020b368219ecb": "4d8318994781f4cf4fe29d62cba1fcd0",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/f3597156042ae583010263e1b95e4f266da017": "0e450a3bd98d6303ee3975c13ca2f9da",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/650007c0c1b662cef6b63f1a9378afb7a96002": "fa619573edd2cc8c4afe068cd222e6b3",
".git/objects/27/f51b586e12c26f8a2e6362a6ff544050e89840": "2c1119926736eb4bc3e29fd25be0674f",
".git/objects/31/e00c2f483f3a8fdae17b0c19ec11cf026f124e": "74be6cd0fdc53ffdaf32608f5274b4e6",
".git/objects/34/f0bdce14fcf99393ccccd06ef1418f038b4243": "195fea558afe5c83df9ef191de95871c",
".git/objects/3b/da0a6cd83f7a93e077522787c90d20702be5bb": "8d92ed23fe4f07e6d3c9969d86edfe14",
".git/objects/42/aec048f45629ea23ab5344a1c8a51c720f2489": "32f2d4513024068faf7ac57146b1bd46",
".git/objects/44/f42ffb33a2885783599114461a151bc8a8716e": "967e5b06ba02de271da31c4c9beee4c0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/d2e43ea608c6c8df4e29ab0c3e12b4ff21010a": "94aa78be570023111807a5f7bcda5bdd",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4f/992734121bf1ef96b737cd2a26c7f21c4ed216": "9018dc1855eb0de80e4a9000e0f3fa38",
".git/objects/50/f0fc6524ae1b6e32db0922ee6e88034a54bebd": "07516b87746e7935f3ab94ea07f00b89",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/9be7c61d795cba4a0cdf6a3e065c18b034b37d": "3c8dc868adfe9c42a490ef752bd2876f",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/61/4e9e5cc04d4b7d6b797a8573a3aa1ac9b8f059": "7976062184c7bf63bc8620cf6652d759",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6a/4502af7033a3b5c2a0aa81a907c2dce3034907": "0517f1d619bac6277183d153c308c60a",
".git/objects/6b/3ff47df34d93f48486ad65b7a56c15da337d3f": "19101f39c37a7f1c5a925f38c03d0940",
".git/objects/6c/484c7293fb3777963922b83274a1f6e8c638e2": "b3b622c676a67fa0967d9078d7cd3f02",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/75/20af174a812a05aac283df0882f891e0797915": "d708c91a88c8b71255418bae01eac6f4",
".git/objects/75/215acd7c5f3c8b23a570e6b572e66bacee2536": "185156cbfba432aedf536fb91e8f67d0",
".git/objects/75/b99c8e742156c6db140dbe86716a053af8fde6": "feffe3eae61723eb5a53d3a363a4f54a",
".git/objects/7e/6e751a7464fee91c8d94b44902ef2e1e144b6e": "7f4dd319a6131afc21d061054bf628a4",
".git/objects/82/8c95f8248ca7882b78393d1fb7e789d9745e27": "c410c76c7992112146e66c45e53bd89c",
".git/objects/84/3d11272554f196fded71937ef81cf4628388c3": "07172783e75d85d1121ca1f1b8b21e6c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9d/99f05e43c5e71ca067bb163217f13b2b091aee": "50617e2310ec2d9a49d46e1eaf7f20bd",
".git/objects/a0/c8cac34e397f4f3decb61680851f55f57ec092": "61487e41c8cbb25d5975af408f69637e",
".git/objects/aa/f8a301eb6d2c442a6a8bc083158309399e5781": "233eebda112eeabe1d9d134f646227c3",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/a210cf167b3abde49ffd172d32e5cb9593e043": "8ca38d89953476556e9e024d40fd8f73",
".git/objects/c0/ac36e15c596c99d457fdef3dd6c866864012ca": "742f3e6ca4f7c7012ac555ac3f5309bd",
".git/objects/c0/f10f4467bcd01a202fc204715dbde1ca7002cd": "84c90fabf7e4bc23508ecd154475b715",
".git/objects/c0/fbd61db7ad9a9664cce586316330d97ab9b940": "06030b93893339b8342929af32ce27ba",
".git/objects/c2/51062960759c2d45ef73b7c52bd3d8d59c6a7f": "4b7e70c0f06daee7c6147e32c15e0537",
".git/objects/c3/b18dab85f664026caedd91e6c6ca5de6e798b3": "63c11f6d04ca8a40bbf1a293af94d250",
".git/objects/c4/78c735a519e35f00e8724dd8ee2611efa3f8ed": "eb5aa5750f40b61b8f698e6817114a5a",
".git/objects/c5/01aefa4e4f43a40cd7bfe7a71a46d5efbad9a9": "4633635d87f8b2dd5270d013011b1fa2",
".git/objects/c6/b2da91e25a7a4a8e5573a82125a1e38b797d06": "b21ec086a9b51dc50cb30499860b51b0",
".git/objects/c7/4e34c0d015608d8d760abe80c1edc8b09b1619": "65058c4ac53e604556b16098113b5762",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/77d7f66ce51859b1dd2d21cf9a67c8605344e1": "3ea302dfccf3167ae350a904719cc61b",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/3b1cf40c18155a7af270377bc5f81845ccbe33": "463d95b9ad1d4e85d8f6feec83f9ecb3",
".git/objects/da/b646db4cfae7935fec8db74986d5b60a1d4c4b": "fb5df18f98f78d3e24ea879491627dcb",
".git/objects/e3/e760e394bdf3488a91d68be5fe90c622a7f52f": "97ab75c124f3946956c06b21c9cc9ade",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/65334f090188f8b5021406ed65b1687c8edc38": "21b2cdd9d937d9605be95b61b4a073ca",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/master": "32703c7413c0327a9d0952df1b472ae5",
".git/refs/remotes/origin/master": "32703c7413c0327a9d0952df1b472ae5",
"assets/AssetManifest.bin": "28d3bbbf6ca50ac9b4c26434cda6e526",
"assets/AssetManifest.bin.json": "9bfedab9909f02b121dad9e67855afdb",
"assets/AssetManifest.json": "6ec7bd33c4cd657982a9e97d35d24975",
"assets/assets/avatars/dq.jpg": "01726739297e918780a4ce87bdd154fa",
"assets/assets/avatars/karthiksurya.jpg": "b69c70f688304c79e3d2fb89d930c399",
"assets/assets/avatars/mamooty.jpg": "279b5a13d0796bd7bd0731e49c216cef",
"assets/assets/avatars/mohanlal.jpg": "feb0c70441225e22ccb200c1ccecfe5b",
"assets/assets/avatars/nazriya.jpg": "a2aeef8be40584d548300db6aa86ccda",
"assets/assets/avatars/rashmika.jpg": "7aeddca1e5b2115c66b96ae1774305ed",
"assets/assets/avatars/sunny.jpg": "591d62928a23ac1771c67ba121c09edb",
"assets/assets/avatars/tovino.jpg": "c6d70b02a7febadae87151edd8be8c2d",
"assets/assets/posts/dq.jpg": "1953a91525fe44dc5c6cd2cdc326b0c5",
"assets/assets/posts/karthiksurya.jpg": "047cf9d6d149c74a1dd4cd6cc44ccf9c",
"assets/assets/posts/mamooty.jpg": "536b44945c3719bb23052984c4ea5653",
"assets/assets/posts/mohanlal.jpg": "374279e8df83a739397a55fc38955df1",
"assets/assets/posts/nazriya.jpg": "768e109ce3fa6b4b8ebfeae63b84f942",
"assets/assets/posts/rashmika.jpg": "1a7da3b9f2dd385ca05273a802cda97e",
"assets/assets/posts/sunny.jpg": "a1870014967226b65e3872c9de28e284",
"assets/assets/posts/tovino.jpg": "56d9c141b22e0689bece95bc612a0563",
"assets/assets/story/dq.jpg": "1ba82757d6e5473e2badd2d400c6038f",
"assets/assets/story/mohanlal.jpg": "b4bbdcd2202517dd16eaa313ffd681d3",
"assets/assets/story/nazriya.jpg": "5595240b7774140227d8fb099d830e7d",
"assets/assets/story/rashmika.jpg": "b5c1f4e7cae84c51eac6339885d43fd6",
"assets/assets/story/sunny.jpg": "b6206a3b3bd3bc7a1a50d03f3a016c32",
"assets/assets/story/tovino.jpg": "d6249bb4909540a1baedfb91ac172b06",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "58e3047cbe3b00448f6acc714c094665",
"assets/NOTICES": "27d5bc3ec8b77b7edaf14b20057188bb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d5a670eada34acf5e6f004c2ebbe39d7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0eaad225611907f0c6e65ac437011c9c",
"/": "0eaad225611907f0c6e65ac437011c9c",
"main.dart.js": "c77e05c10a82460b225a2a1f123096b7",
"manifest.json": "fbf5db702d18ce08b456956112068d4c",
"version.json": "b44454508c02de13b0622f350c80d00f"};
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
