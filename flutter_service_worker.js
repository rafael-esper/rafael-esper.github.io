'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d422bade66d215f86da94d5ede68fbb5",
".git/config": "f3106ccb05e34974ca78fad92166adf3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "fe17e232caa2ebea6a944c5028cb3b23",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "16b8925ef75d9817a30c819614770ef0",
".git/logs/refs/heads/main": "b0f11f68218de92446995320a7913a90",
".git/logs/refs/remotes/origin/main": "c67d6b36740a355d494e746223171fc3",
".git/objects/00/7b84645726c364680b9dfc4e3fc6e8d1af99fb": "3c685550303d94ef27324cb1c85e22c6",
".git/objects/02/21df9a72f2302c50527077f0550a3088ca25b8": "054df1f0e5be9a08bbe6945d5cef32d2",
".git/objects/02/88d0565cdb202ff136dd474da057575db4a9c9": "d2b285e4013edfce4c483a823d9d18fb",
".git/objects/0a/49ca6de7d46ac366346e00ae916fa8e4ee7a32": "ffa6fcf74929305240f7e7ddb14a22f7",
".git/objects/0b/5762a1fea0c4115e220ed2202b56dd2b3ea92b": "13b3cb2c2158ac982eaafcf76d8b9050",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/7fd3904c99f436fbdfeecca5beead093d41d5d": "7eac35fc0145587da626bdf8c159b82b",
".git/objects/14/a4447c2ae3e5e40d2e29792f062a832dc0d9e4": "e75dccc945c4f63508e6b6df58d4dbce",
".git/objects/17/17889fca893d45d1e0bbd39c2258e01fdcbb9a": "7254182f23713a532a4ebe8c39124551",
".git/objects/17/7c4ab422b412ae799281853a4812412bf45fa8": "003e413c61aab70b57a36cb1b0873dd9",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1a/59e1e8e97b33de75ee09145d0f5bac58ba72a0": "c6002c14abf8702b6563c5864ce56144",
".git/objects/1c/410dec5e151551722d21cdd66530822c01e73d": "a1c2e27ec8a61d2a41484d5733aa8569",
".git/objects/1d/5cba784e69455f39516ecb1aab5bae2c99cbb8": "77fbd0e31a292e320987b49d543f8210",
".git/objects/1d/c48de65d0ef715602d23b1de2a5ca66412d0db": "7661d3112003682205d73171299ea84d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/5bba0ffd22a5a919b412be311fed5c78aeca45": "f7ea34d65cc0020a3e33a269ae249541",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/24/57dcf3a5c65d3437e322bd3afdbb739457ebbc": "c89b66184436bfa8e75b71fb6855e3bb",
".git/objects/25/69c22dc1a43a6ec6c9c4f5eb559c65de490e60": "64b34201476d8a97e85ff6b885a270f9",
".git/objects/25/738f2d98cba9153af96d9a4ea1910e5df1436b": "06b5e9d7d059eb1f73667958a9d37f3c",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/a001a197dd33806d6035d87e9458b7db0416f9": "3362d539904a4459a9d9a36ef32ba500",
".git/objects/26/6b02a56aa20f0a3d6686f52460098a4879ba5c": "00d493ffced6a58eb6113dfbc71f761e",
".git/objects/2a/aaf882109a41b26b69076b441908965d361291": "9477ebb2e985c7bf855293fff0d97617",
".git/objects/2e/7789e57005f4df0c567ff5b312239fbfd3f6fb": "b370377ad2437b407222b0c88a949029",
".git/objects/2f/2c603dd9dc9aa532f9e48740860acdd1bdda74": "b347a92ba1790b0e789d8643a3bb96c1",
".git/objects/2f/c96f0c9e35d651a909e4c597f5ae6118f4deb9": "2ff6141bc2e47da8de6d3f88e3aba362",
".git/objects/35/68332819c5efe6ad880ded6176b36a7c1da49a": "5c3d2b23b0a14c990591387b84d7cb4a",
".git/objects/38/ea252afc6f6195d9cb9df0b1ecdb4caa157cb8": "40cebafcca919ab901db7267340954dc",
".git/objects/3c/12da86debea32e9c4b7552cdca78695ff21e11": "100a71c6ca7e3b49cbbe178541501813",
".git/objects/3e/61e5bb1b6d6de297b49a45d3ef57cb16891dd2": "7e66e6139a03c2a4e4a72101464a87b7",
".git/objects/3f/15bc159254c61cdd9d09f28052d89a8388ddad": "d48e222f32d31f1ffe9ca3c33bae0e6e",
".git/objects/40/089b1d8c96a30b219844762ae55ebbe56f990c": "415551b4e6073953ec294a1fd5b64b57",
".git/objects/43/f13fabdcd8a093bc786e531eff473b7622fd7c": "1a2b7c20d6fb1251894ef81199bc22d5",
".git/objects/45/98add0235179bc56827549fa84015e08ef51af": "266f2e87246ae163aa0b9d1c480c143a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/81742991b859a4cff9bee4eff7c8f6fe7b453d": "71b9eeb853c5bb5c83c5f3cc4d9acda5",
".git/objects/48/eb70ed3961e6317a321362442bbee46130e3c5": "82901b35ab7ca1d181a729ddd623e958",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/9a258144e91baad0387c887a64c383180fd7bb": "98f9e2eff0e7896dd68672ad6b6c0872",
".git/objects/4d/dd47061fb46dae6563afc8fbec2720b0442de7": "941866e5aedbaa6f4b81ee32950574f8",
".git/objects/53/2b4df23d5b0653cf24d8f05c3cabd535bdd4a3": "ff03417b416c38ec14315d4db3e7513f",
".git/objects/54/7aca6b5a68d97fce959eac1e074282ac89a9c6": "8eb648ee9b9fea4a1886dab588e94ca8",
".git/objects/55/ce2409c855c72c14ea3b5544564288a640c00b": "925e9ff1febab70d9b069cb95b95cee1",
".git/objects/56/14ebf6273e499baeceb4686da86709f2306a9d": "bc9246bd869f102e30d6a0376e39c3ce",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/3f738782587e53438a54eceee59b55ef6696d9": "0c1bdc6db4e79725b55f8328bfa0fb20",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/99774f0da60019e83d3dd6b02805fe398507a4": "10ac1945aabd4f8e994badf9e3977561",
".git/objects/5b/d8e79aec5245514bd29813b912eb925db6134a": "79052b0d2620ff7593ea841b866907af",
".git/objects/5c/980e65ffc9671c1f13a748f017b7d049d38888": "c9cae0c581afc4e92af8373f84551cc4",
".git/objects/5c/99568c711ca9af9919e7252abef69d3e17c690": "ad72b995848f335b00eb16469613ebe3",
".git/objects/5c/9e224fb05c368355bb9b9eab3407bc831dba36": "f640210cda5b18f1a9372bcfbbda41f9",
".git/objects/5d/e0d1a5d5fab9a1451c36ee7bab49b79fc1100a": "bd8756ab344b2d3c8730b237e9195f0d",
".git/objects/5d/f483385ec8f1fc1b1c89ae70cfdcde1b1f1336": "7a32440c89e0d687bf279e05c5f998a9",
".git/objects/5e/d511c834f9e0763706a364864a5d81aa397ea1": "dfd8b19d26acfe796895e44dc43b8aec",
".git/objects/5f/007f038b6c232d7dad5973ce68b7957a18584f": "b89e5b74ea310d3e8d8cf63f135b391a",
".git/objects/60/76cdef948f6ae5ea386340ad3becb26ddddb64": "14d349ab72cd41d5b38913b05b0b0823",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/68/3a625b24072a3eb91499e41c6009855aa5a22b": "8e2c8960156c895e92f3e6fd466dce95",
".git/objects/6d/056ec5d0de27a804f8e658ce14e349f8e84668": "44ff4a1ff3e8b11a30b590d50a38ea15",
".git/objects/70/5751073d0aa57193cbd49bb449be4aa81d93d0": "a688ae5410285b87b6ec78462fff11a9",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/fabdd01b03ba29f6643dccb4162a5b37097fdc": "4a86b0bbc23675c1adc97b4747bf26e4",
".git/objects/73/0cf05080f9621da8cce6103526226ef3d1b14b": "d580dd55ce1d85974263f5883551b38d",
".git/objects/73/aeaccf83dbf081957904bfef9c53744db077a8": "e2d025c315a116bfd03642bd142a8a80",
".git/objects/74/1fb43132c6287c3e6a695922e69ddc019dc3d8": "7e88820811253976c659dd73c549b7c0",
".git/objects/74/e9ee6dc62e487b1bde6f253f014398c2d6c428": "f14dbee6a2328a693bf7c73bdd385495",
".git/objects/79/bb8c47ceee3df219277d0b8bb7c08b5cb1ae43": "1ec8f28e6286ac4662136930c85dada9",
".git/objects/7c/24524a194abcd60844c87ea209b42b3dc81f2a": "3ef107ce64e4ec41418f9b53cdfe6f5a",
".git/objects/7e/33c9b2e04a534f566fe55da87fac3eb66df5b2": "41e9a3212b08178535ce0e48b44e24ec",
".git/objects/80/16837a97f64ef3b4038753d03ff8279b97c8ba": "5de4ab39692744b0bd1c481c417033d8",
".git/objects/81/1ee2f33245aa520b8af62fc91c179903865229": "f3d65f4f553a019b3530736343df56b8",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/62a582eb8d287c426b3c1d8b665a0020f30724": "bdd6d28a7ad83d9767bd1d95bdb2a006",
".git/objects/87/9d78d9caf0e13bb1a52307ce83e396ca19d27b": "1aa69ad183c2f169ddfdb7277de645d2",
".git/objects/88/42d7a489f819b3ce35100fd06465d5637e1d7d": "7d1122d64dd8a20324a992be8a057421",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/55f968170b43ec81fcf432faef7fc747d69699": "ceeba88246a87a178d7b383596dee979",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/1554a5f4ce92ee27601eeb0b05bad7341e293f": "e26d3737676777ad6d191f3ff9291934",
".git/objects/8f/23798aa5cd8032b1e7b3d6aee0a770ac7d0ee3": "659e457121be17bf17b530c36c35f6ab",
".git/objects/91/d8b9660394c6cb8e6c3b85c25883177fa2c036": "ab894d90da4990ab49a859fe99cf127c",
".git/objects/92/bc96a66cce8099ebb22fa3302a770416da547d": "56cc08ff0d773025f9c29fd686447d9a",
".git/objects/94/8c20b3edf991b4dd5d62b2d72ed5f77d601785": "15a80bbcf5dd01ead6d15b45aec31ccc",
".git/objects/94/e754675848dce8760617f5c160026100d8b96e": "f90af4327387476b8f9c97ca929870cd",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/d4547dc9e9e57699a2158828cdb01055558ee2": "b59a21da782bf42e0acde48ac0e1794e",
".git/objects/96/70e7a2e561423412a3fcc161c1ec1712854b5d": "d78b9ceccfb735769a1139a354b18cb7",
".git/objects/99/1493b89f7ef7ca81d9675a502e77da7ff8735c": "3578fdc25f21d88d393c139f0a2e9bd8",
".git/objects/9b/b74ecf637ca699e83b6e12e93ee5d09a7486f3": "6c39633bf422bbf40d0886f19c3ce560",
".git/objects/9c/45e851fd32631846e938b319d538a860c20665": "f846bee18be683543dcfe156838b4c53",
".git/objects/9e/9ea08474b8c0502762dfa815a03f64b1c2589c": "6add88264a23d19d488b2e4942984234",
".git/objects/9e/e79f5196e7f2612a5331b9425af976c9a4c930": "7786305dbea8c25e7323d97704329202",
".git/objects/a1/fd47bed11b3650f38a6f0bbfee914b01d21204": "fd1a31dbcda71a6109492c4f5b3fbf8f",
".git/objects/a4/ac06316fc8a6e7957326e85615777486158268": "25263694422f5f47898f4e7b12a4a6a0",
".git/objects/a7/47a6346045d9e1dfb73a999c0d6e6676602b3f": "87dc93fb9a7593dc863e888effd7c8a2",
".git/objects/a7/adce1e6633f77b7b1effe2d574f97d7dd56bac": "004f29a162d30f987bb62aa176dda5b0",
".git/objects/aa/4d3f72c2def1aa32b554a57e69a71bd90c6ecc": "99c97778d4ad4c15443a9b2cdf7f040d",
".git/objects/aa/6d5ba2cd6c5b96443baf48efc5957a2a3d3853": "b9f70b533440e2c058d8982c9d560c44",
".git/objects/ab/e6845cbf2742223c3273a67abedd0783500060": "d8f5a4aedb5a946ec5619975245befe7",
".git/objects/ac/82c7afc66a220560eb09d0b93c75e3c52c37f5": "9deba289746975cd778b6411c33cb27e",
".git/objects/ad/4b1fc82dcc89592822fb385368926f9a0dfc02": "dd7dcbd37c7fb8c0757a30e5b9c141ca",
".git/objects/ae/b9c7656e5341d1b76ee3c9091032c12d918a38": "550d8eadf8cbff61e4d2b5f3f5f2888c",
".git/objects/b0/9fe62b6cd7b833d4482a1b295826077fed0655": "a0feee93f012e9446e685ac3203f1d6c",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/5ff44d72f15e3d3a4439a56a37ac4456d18090": "606a4e6a0ebf0d08e58f9a216acc6d8d",
".git/objects/b4/9236ee6e277cb8dbf8e27b7188f103ed4b7468": "ae6ee095699b43f4dd6c69c3854ba03a",
".git/objects/b6/94ff9b0eac7b65ae538180fb956bbb8ea81ec1": "7f440af86d55c05c0457f94fdc240df9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/eef7abb86c6bd04855620c24f29aa9575444ea": "3cbb4a4fb85319676e5b0bcd1f716e12",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e778982db714d4ab18aa55a4b7f70df8f820b6": "9e12d1742201e323fd814bed9c281159",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/b015cfa30d93dc3d7aab8d4f4f17cea302b8b4": "9e614bf32f6f2601deb71096bf9765fe",
".git/objects/bd/b11c7f0201a3c4e1bb8964a44a92bcc9462ca9": "75b2268c4b4b5f1cff0b9ecc8ffef526",
".git/objects/be/0c32b1aac13f01b23a8dec33d57e9eeb533185": "cb4af261acb00f6883cec0330e3cf814",
".git/objects/c0/66db57bc5e874e845a88e909fe4419c1cd68f7": "7052cfedcb90e54c46c5be98572cb7e7",
".git/objects/c2/0144ea2782116060749839c039dba776cd049a": "ead19eeba9f329df8d6c90ca43736a6c",
".git/objects/c4/0c6855dbe5562de65992f196e7acb2aad5c9e1": "4a5d27dc3321602ac6582741e8ce0c1c",
".git/objects/c4/c754735298b1e8f8b82a8238da7b347d75f611": "357bc1a3de5ad48eee8d1705aa0fda5b",
".git/objects/c6/e3fa0457a21370e0a6cfece815bc801d5bd910": "b7c049e0cd52ab8a4b1e8db27c3249e7",
".git/objects/c8/fcacf80a43848197b9d77414fba4ba907ce875": "5b5865741f485918466be4fbb32a7ef6",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/cf41d4bd9c1521072778c4bfbf0da8f9f02e47": "1063ff343a557c7431d2c4291e3c318e",
".git/objects/ca/cf4bd75d171819c45241ec26524bbdce6cc86f": "d856913adff4389e1623857eaf6031f1",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/a3f18f6485d7794033ffa68429ba7546a324a2": "1ade503461924adcb8254c24d981f7f3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/37e2c2ca983c1a154fcf08d52ba26e102802f8": "19eefc380ba275ca09ee8f15904bf39d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/e4662fa6fd5d80b4b7cd42fbfe307c57462989": "9d817e40cf936d08301d7d7107ad887c",
".git/objects/d7/5f4fb859538a36b13b7ae7b6f18f59ecc182df": "4e191a795f39aac3e4b1ef1d8c30ab11",
".git/objects/d7/ceafc94361528589c286d29e37cd3c8facd2c7": "cc0ec630bf7d5abae733012fc07f099a",
".git/objects/db/cc7ac6c3936c9ba4d445b92a058af7cde39a72": "877ee287a52ae3f456a40020a96aa960",
".git/objects/dc/05e77f24b6891420a86887787516dc6aadb6bc": "055e8dfec9ba8fd641dbc3189cbc7a6f",
".git/objects/dc/b733dbd509a763bcf72603c79f0b8bf888c552": "2b2c96993b439d8c9c38b4d479c46e9d",
".git/objects/dc/c9ee877b602d4ae344e0719526d72a8efd5896": "52042b404b7065c95152e8ced1b682f4",
".git/objects/e3/26f431b04dcad93ab9e1a9d6e76e407a889959": "c70368dc19bd370d7321c45253d7f659",
".git/objects/e3/e379752504078f667bdb4faa6ca3190ce549c9": "83bf25155c5373f85e94b0335c1d0e66",
".git/objects/e7/ee5fdd05a06cfa608d8fad57cb2546df353c74": "aea2248f9596676e719e1d2776b8d9df",
".git/objects/e8/4d30e9e059723517ca9a620facaf52b3d7d798": "4218e302e63ed0cfbf4d56acdfef5649",
".git/objects/e9/7c676fc727f2eeee1036c0528c5d05ba6fda00": "79b89a2cbe306ee4ab9123dd35e8d6b5",
".git/objects/ea/1d6f2e5699cb296136e4c6b98c499057d155ce": "5bce6941ee550eb4c8261774263321c8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/6ee88154848e1300dddf204953c6959778363a": "79354c51f95cbd35bcc783e788d5ea74",
".git/objects/ee/33f9a029f0386483a52798f17a148eecef0f92": "bdf68458337cb453aedd3cf0c03ad680",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/93b6dfc88bf40816b02374cfaff1f9c4689072": "0e7daf6b067040bbf40f9fbe91fd4418",
".git/objects/f3/297fd4bcbf8b2b115fe037c565cf1975a4ce48": "e5cfbd44518c8cb1ba432b6cf175174d",
".git/objects/f5/6ebd4cc7a1a9d099e1de37daad2f56f0359dd6": "53fe0d3cdf22cf3fda806f7cb3363896",
".git/objects/f6/bf004971f37f1c8026b368db9def59c74f850f": "e4276882f54fda277f9081ce2e94ef28",
".git/objects/f7/cdb4a571c053925f628f3ac69cff0d1cb5a6ba": "5be2b257c0e5dc5c2185c1302818d622",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/refs/heads/main": "3803d45f7b8fc81c94dfd8e0349380e9",
".git/refs/remotes/origin/main": "3803d45f7b8fc81c94dfd8e0349380e9",
"assets/AssetManifest.bin": "5a7ede65500bfdfe76a91430aeb34938",
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
"flutter_bootstrap.js": "7ccf0d2bc287fcaa5a3738ace7ae81b6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "01b91b4767c0adb20ec9f5699cf8b7fa",
"/": "01b91b4767c0adb20ec9f5699cf8b7fa",
"main.dart.js": "2cd9f9a2aa4092c9610d78be7516b1b9",
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
