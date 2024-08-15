'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5a7ede65500bfdfe76a91430aeb34938",
"assets/AssetManifest.bin.json": "27300288c01c2725e284622e6607cf30",
"assets/AssetManifest.json": "8485b021c5d722185d0e263cac176469",
"assets/assets/images/Airplane.png": "ba85e8b1a74b7d0ab73838c6d07bb5e1",
"assets/assets/images/Apple.png": "e032c6e9d7a58b8f5321a338b10923c9",
"assets/assets/images/Banana.png": "e4e8afb6c6ed86e306c79a092321a6d6",
"assets/assets/images/Bank.png": "eaa1980e4bebdb60073bac4f079ed474",
"assets/assets/images/Beach.png": "c98027b4c7ef68f0c4d1b4b68c9ee1ac",
"assets/assets/images/Bear.png": "a0421b0df150059076428d03c8cd921c",
"assets/assets/images/Beaver.png": "35033df8605b940fa2336a0cffd6ca9b",
"assets/assets/images/Beer.png": "a802ca2bfe6e8b700805f940f2c1ac30",
"assets/assets/images/Birds.png": "8043a897d0dfcf8b7d3b33f7f4682158",
"assets/assets/images/Body.png": "6db88fc9730331007467835fd3a1d0ea",
"assets/assets/images/Builder.png": "ac637095e1bd70070b99e258de34c5ff",
"assets/assets/images/Cake.png": "6e2a67c16ff5b31346bfeee12bcfc73a",
"assets/assets/images/Camel.png": "66a63e33a809c6e637d6d1c5afb25808",
"assets/assets/images/Chocolate.png": "2ed2b70374150152e9efd0b6b099b0ee",
"assets/assets/images/Circle.png": "67bc5ef6845d150469de78335bde4ecd",
"assets/assets/images/City.png": "9b3443c142aed04a8d9551964030e14f",
"assets/assets/images/Cloud.png": "43f39aaba66e9e857d6b68bdf24dfe41",
"assets/assets/images/Color_black.png": "dc06dedca60a08f0242e357f998da0a5",
"assets/assets/images/Color_blue.png": "802f34992771883947da0f04041c8128",
"assets/assets/images/Color_brown.png": "4c716fbe3e1d6fd7315f4fd2c6c9a437",
"assets/assets/images/Color_gray.png": "4d1e036c7ba8c54bc3f40c64a7ff5795",
"assets/assets/images/Color_green.png": "562df42d6e781a13e7e3391885d1a991",
"assets/assets/images/Color_orange.png": "079439e1d32954197014e6f9a5feba0d",
"assets/assets/images/Color_pink.png": "a7f6e6ac69a371771664154e8672b2ea",
"assets/assets/images/Color_purple.png": "553a0156b82c3ab4a6475a6390a7cca7",
"assets/assets/images/Color_red.png": "643bbb28a5e1d7cb535605cb0f84a390",
"assets/assets/images/Color_white.png": "7eb6f9f6da5e925692a10a1d68c982f7",
"assets/assets/images/Color_yellow.png": "5d2b606b69c64a6003c4c4ff764ce470",
"assets/assets/images/Computer.png": "43032074b23b674a02633172e5577d55",
"assets/assets/images/Cookie.png": "db3440b3bf9b042699228410c952af56",
"assets/assets/images/Dessert.png": "b397596e741a6a61dffd9e3501559be6",
"assets/assets/images/Detective.png": "65c7b199f4fb490361210fb6a8d97a95",
"assets/assets/images/Dog.png": "24b42f86688e2e758fed3aafc60e338e",
"assets/assets/images/Dolphin.png": "eb0a5d3c1af287cb3f265f3adab38e22",
"assets/assets/images/Donut.png": "bdf705e66d29ce8e74d37165fd605899",
"assets/assets/images/Dragon.png": "183ba700c12d2f2fbfbe71123c3efb9e",
"assets/assets/images/Drinks.png": "662af5d984363242718eaab0caa10cc9",
"assets/assets/images/Duck.png": "0d4fbe78d559f0501978ff29655761a2",
"assets/assets/images/Ear.png": "68606dc173d51721974d1c58911f96a5",
"assets/assets/images/Eye.png": "2a4f15ffa36d69660e0aa31be52861a9",
"assets/assets/images/Fire%2520Station.png": "58a7263f4077eaa88ee20ddedf33b699",
"assets/assets/images/Firefighter.png": "c0984fd9feb81f49c7218dc256cb176f",
"assets/assets/images/Flamingo.png": "9e6e9a586aa5fe1601627eb243483dd4",
"assets/assets/images/Flute.png": "5313cc1009826ebd1d1e52d20fbfe066",
"assets/assets/images/Fly.png": "640e1e2d59df4bc76b5e98c9d01a6c64",
"assets/assets/images/Fruit.png": "122164d79c39d0dcb9d07dbef950176d",
"assets/assets/images/Giraffe.png": "36660fe61ab23e7f0bd5002366da0ea2",
"assets/assets/images/Golf.png": "d923d576d20510031229aecac5cb1f57",
"assets/assets/images/Grasshopper.png": "e52a92089b9c480bbdbadc6e32f04419",
"assets/assets/images/GuideDoubleTap.png": "902f0211cbd4b6539673aaec09256c5d",
"assets/assets/images/GuideLeftSwipe.png": "afb4540cb2d1aa12b90ffc0a7aeb8fdd",
"assets/assets/images/GuideRightSwipe.png": "e9844ef981fda829dc05015e961ec5d9",
"assets/assets/images/Hospital.png": "b7ef7c36b971d706c15ffba487bca075",
"assets/assets/images/Ice%2520Cream.png": "82e914560126a71170438e5aa025fb1b",
"assets/assets/images/Insects.png": "03e5d2290160c10d2e51b60e8fedd4da",
"assets/assets/images/Jobs.png": "d7d015a16c7ddba5e54e5cec081e72d3",
"assets/assets/images/Juice.png": "69d4ec4fce9c0e3c5905d5de7c49907d",
"assets/assets/images/Kettle.png": "e51b62150618307dc7795324760ace2d",
"assets/assets/images/Kiwi.png": "6f391359f98bff3a2f2e8f09b9d940cc",
"assets/assets/images/Land%2520Animals.png": "aa64ac3768a3a30ed8039d1a5a1457a9",
"assets/assets/images/Lemon.png": "a96ecdafe59d284669fe5f687ab7adcb",
"assets/assets/images/Loading%2520Arrow.png": "4fe4e8e4f231aa8331cfadbd0d9bc3d4",
"assets/assets/images/Marine%2520Life.png": "3a59d07f3982ec37ce1f95e0c35687ae",
"assets/assets/images/Microwave.png": "9fb0da7f83de23d562625425d19f52f3",
"assets/assets/images/Milk.png": "4f68abb320d8b02a24c8609007861c4a",
"assets/assets/images/Motorbike.png": "1aad3a76b4c099745eb9ca5d3ef2a104",
"assets/assets/images/Mouth.png": "9788645cfd21821c39d9ea6df1f93181",
"assets/assets/images/Music.png": "431ad4e700005893149d253284b0c048",
"assets/assets/images/Nature.png": "785686ae3e02e3def61ee8eb833dc913",
"assets/assets/images/Nose.png": "0b126770aed81c29c96c9abc645d64ac",
"assets/assets/images/Orange.png": "c9aa51a5c4032639b32ad63ae9e0fcc6",
"assets/assets/images/Oven.png": "9b9b8c278ca0c92a576bb61d475104fe",
"assets/assets/images/Peacock.png": "46239cb6285dc6463e3897f62a4cc6ae",
"assets/assets/images/Pen.png": "8fbc62ddd2ae2fb3eed3a904580ddc1f",
"assets/assets/images/Piano.png": "99bf3fcc14e6e532c965bf26e7c97c52",
"assets/assets/images/Police%2520Officer.png": "0e7797eb9ae736e7a7a66483f510608d",
"assets/assets/images/Pot.png": "29bb49542acae86edf4e753202f05727",
"assets/assets/images/Rain.png": "00a2809b0dbd6e0f8d422f88edaf7c25",
"assets/assets/images/Random%252020.png": "e3afb7047158554790cd27fbc7857569",
"assets/assets/images/Random%25205.png": "8a42e0bf3a742351be30438038441bd0",
"assets/assets/images/Review.png": "72eb5688ab57bab68e2d2a0f2029f9d0",
"assets/assets/images/Rock.png": "1cd85a20415bc4f9cbf1c1bc361a38b9",
"assets/assets/images/Rugby.png": "e89560158d0547644b7add6077384468",
"assets/assets/images/Ruler.png": "d154ba618da5dbc7038ca3f111787836",
"assets/assets/images/School%2520Bag.png": "e1c4ec34f918289abc52dc46ce153f19",
"assets/assets/images/School.png": "80d7163f0b9b655fa81071709a95a77f",
"assets/assets/images/Seashell.png": "4cc5bf60f8edcf7c1f4876b97184a48b",
"assets/assets/images/Settings.png": "42fbc221d0f2ffddaa5c3de4c2b45e5a",
"assets/assets/images/Shapes.png": "4ead9f0b8dd63646e78725a30cfa7c13",
"assets/assets/images/Shark.png": "96316e2554f37e831d15d5e638441483",
"assets/assets/images/Spider.png": "712e6a38b6ee0da9b787b3db2c9c7ad5",
"assets/assets/images/Sports.png": "0442aaa4ce61baa0c6db12fcd45adc99",
"assets/assets/images/Square.png": "9c02d2b18ef4f69413d85051db2c00c1",
"assets/assets/images/Squirrel.png": "8bb065a79fb54694df4b1dbd95cfbb62",
"assets/assets/images/Sun.png": "1da480e838527e84b46215564f5c3f43",
"assets/assets/images/Sunscreen.png": "f38ec71d4c42dc19e8df833b012fd553",
"assets/assets/images/Surfboard.png": "bff4cb8d59b7c653fa0414b3560fd8b8",
"assets/assets/images/Surfing.png": "22c4c565d3f354514416509b27d3b80a",
"assets/assets/images/Swimsuit.png": "834a53c11d5c8191991f3b0ee0d0e2a5",
"assets/assets/images/SwipeLeft.png": "ef64764cd3dc28ef1d1d4d41e2d6adc5",
"assets/assets/images/SwipeRight.png": "c7986f6f8618bfcc161ce750d605dff3",
"assets/assets/images/Tennis.png": "e9cb150e79a6c25c563bbded74aa3b26",
"assets/assets/images/Test%2520All.png": "9e63693d349a8bd26ffbac3cc016cded",
"assets/assets/images/Tiger.png": "9bab0ee2c77961fcae66befa23a42668",
"assets/assets/images/Train.png": "489e6ad86e2c6dc3894a47e6ad923112",
"assets/assets/images/Tree.png": "526e0ff4483e89e2f6f83a0e83152c71",
"assets/assets/images/Triangle.png": "0639bea910f7ca8dba38597e3abcba4d",
"assets/assets/images/Truck.png": "dc59c29605df41a175be5e0d554ad097",
"assets/assets/images/Vehicles.png": "ae804807cfbbd92c119109b8c9e132be",
"assets/assets/images/Weather.png": "d90122e15900ffc2c29b76cce0618317",
"assets/assets/images/Whale.png": "155a8ee851d3bd981502c75cc0a48b65",
"assets/assets/images/Wolf.png": "f6f7a4593c7727aa50ddd4bdb1fcf49e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8127916b922428cdee4783a394fa6027",
"assets/NOTICES": "b0ded42ca0fe151ccdb0436d3d49a387",
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
"flutter_bootstrap.js": "86673be9b308b15e3d2ea84af498f57a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "01b91b4767c0adb20ec9f5699cf8b7fa",
"/": "01b91b4767c0adb20ec9f5699cf8b7fa",
"main.dart.js": "b417c0a7c6645c0eae11c9b5d30b0c17",
"manifest.json": "65243e5e2867a6019bd3378736fec0c2",
"version.json": "6e502247b813c9e8e96d7f7c5f7b90c2"};
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
