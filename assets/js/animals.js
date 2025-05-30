// This file contains a list of animals with their scientific names, categories, and popularity ratings.
const allAnimals = [
  {
    name: "Cheetah",
    scientific: "Acinonyx jubatus",
    category: "Mammal",
    popularity: 98,
  },
  {
    name: "Blue Whale",
    scientific: "Balaenoptera musculus",
    category: "Aquatic",
    popularity: 90,
  },
  {
    name: "Lion",
    scientific: "Panthera leo",
    category: "Mammal",
    popularity: 95,
  },
  {
    name: "Tiger",
    scientific: "Panthera tigris",
    category: "Mammal",
    popularity: 93,
  },
  {
    name: "Elephant",
    scientific: "Loxodonta africana",
    category: "Mammal",
    popularity: 99,
  },
  {
    name: "Giraffe",
    scientific: "Giraffa camelopardalis",
    category: "Mammal",
    popularity: 85,
  },
  {
    name: "Penguin",
    scientific: "Spheniscidae",
    category: "Bird",
    popularity: 88,
  },
  {
    name: "Parrot",
    scientific: "Psittaciformes",
    category: "Bird",
    popularity: 77,
  },
  {
    name: "Shark",
    scientific: "Selachimorpha",
    category: "Aquatic",
    popularity: 92,
  },
  {
    name: "Butterfly",
    scientific: "Rhopalocera",
    category: "Insect",
    popularity: 80,
  },
  {
    name: "Eagle",
    scientific: "Accipitridae",
    category: "Bird",
    popularity: 86,
  },
  {
    name: "Panda",
    scientific: "Ailuropoda melanoleuca",
    category: "Mammal",
    popularity: 94,
  },
  {
    name: "Zebra",
    scientific: "Equus zebra",
    category: "Mammal",
    popularity: 82,
  },
  {
    name: "Koala",
    scientific: "Phascolarctos cinereus",
    category: "Mammal",
    popularity: 89,
  },
  {
    name: "Dolphin",
    scientific: "Delphinidae",
    category: "Mammal",
    popularity: 96,
  },
  {
    name: "Frog",
    scientific: "Anura",
    category: "Reptile",
    popularity: 78,
  },
  {
    name: "Turtle",
    scientific: "Testudines",
    category: "Reptile",
    popularity: 75,
  },
  {
    name: "Crocodile",
    scientific: "Crocodylidae",
    category: "Reptile",
    popularity: 83,
  },
  {
    name: "Octopus",
    scientific: "Octopoda",
    category: "Mollusk",
    popularity: 91,
  },
  {
    name: "Ant",
    scientific: "Formicidae",
    category: "Insect",
    popularity: 70,
  },
  {
    name: "Beetle",
    scientific: "Coleoptera",
    category: "Insect",
    popularity: 74,
  },
  {
    name: "Salamander",
    scientific: "Caudata",
    category: "Amphibians",
    popularity: 76,
  },
  {
    name: "Toad",
    scientific: "Anura",
    category: "Amphibians",
    popularity: 72,
  },
  {
    name: "Goldfish",
    scientific: "Carassius auratus",
    category: "Aquatic",
    popularity: 87,
  },
  {
    name: "Clownfish",
    scientific: "Amphiprioninae",
    category: "Aquatic",
    popularity: 84,
  },
  {
    name: "Chameleon",
    scientific: "Chamaeleonidae",
    category: "Reptile",
    popularity: 81,
  },
  {
    name: "Hummingbird",
    scientific: "Trochilidae",
    category: "Bird",
    popularity: 79,
  },
  {
    name: "Sloth",
    scientific: "Folivora",
    category: "Mammal",
    popularity: 73,
  },
  {
    name: "Armadillo",
    scientific: "Dasypodidae",
    category: "Mammal",
    popularity: 71,
  },
  {
    name: "Scorpion",
    scientific: "Scorpiones",
    category: "Insect",
    popularity: 69,
  },
  {
    name: "Jellyfish",
    scientific: "Scyphozoa",
    category: "Aquatic",
    popularity: 68,
  },
  {
    name: "Lizard",
    scientific: "Lacertilia",
    category: "Reptile",
    popularity: 67,
  },
  {
    name: "Newt",
    scientific: "Salamandridae",
    category: "Amphibia",
    popularity: 66,
  },
  {
    name: "Crab",
    scientific: "Brachyura",
    category: "Aquatic",
    popularity: 65,
  },
  {
    name: "Grasshopper",
    scientific: "Caelifera",
    category: "Insect",
    popularity: 64,
  },
  {
    name: "Ostrich",
    scientific: "Struthio camelus",
    category: "Bird",
    popularity: 63,
  },
  {
    name: "Flamingo",
    scientific: "Phoenicopteridae",
    category: "Bird",
    popularity: 62,
  },
  {
    name: "Hedgehog",
    scientific: "Erinaceinae",
    category: "Mammal",
    popularity: 61,
  },
  {
    name: "Porcupine",
    scientific: "Erethizontidae",
    category: "Mammal",
    popularity: 60,
  },
  {
    name: "Wombat",
    scientific: "Vombatiformes",
    category: "Mammal",
    popularity: 59,
  },
  {
    name: "Platypus",
    scientific: "Ornithorhynchus anatinus",
    category: "Mammal",
    popularity: 58,
  },
  {
    name: "Narwhal",
    scientific: "Monodon monoceros",
    category: "Aquatic",
    popularity: 57,
  },
  {
    name: "Manatee",
    scientific: "Trichechus",
    category: "Aquatic",
    popularity: 56,
  },
  {
    name: "Walrus",
    scientific: "Odobenus rosmarus",
    category: "Aquatic",
    popularity: 55,
  },
  {
    name: "Sea Turtle",
    scientific: "Cheloniidae",
    category: "Aquatic",
    popularity: 54,
  },
  {
    name: "Starfish",
    scientific: "Asteroidea",
    category: "Aquatic",
    popularity: 53,
  },
  {
    name: "Lemur",
    scientific: "Lemuriformes",
    category: "Mammal",
    popularity: 52,
  },
  {
    name: "Capybara",
    scientific: "Hydrochoerus hydrochaeris",
    category: "Mammal",
    popularity: 51,
  },
  {
    name: "Tapir",
    scientific: "Tapiridae",
    category: "Mammal",
    popularity: 50,
  },
  {
    name: "Okapi",
    scientific: "Okapia johnstoni",
    category: "Mammal",
    popularity: 49,
  },
  {
    name: "Aardvark",
    scientific: "Orycteropus afer",
    category: "Mammal",
    popularity: 48,
  },
  {
    name: "Kangaroo",
    scientific: "Macropodidae",
    category: "Mammal",
    popularity: 47,
  },
  {
    name: "Koala Bear",
    scientific: "Phascolarctos cinereus",
    category: "Mammal",
    popularity: 46,
  },

  {
    name: "Buffalo",
    scientific: "Bubalus bubalis",
    category: "Mammal",
    popularity: 44,
  },
  {
    name: "Yak",
    scientific: "Bos grunniens",
    category: "Mammal",
    popularity: 43,
  },
  {
    name: "Moose",
    scientific: "Alces alces",
    category: "Mammal",
    popularity: 42,
  },
  {
    name: "Antelope",
    scientific: "Bovidae",
    category: "Mammal",
    popularity: 41,
  },
  {
    name: "Gazelle",
    scientific: "Antilopinae",
    category: "Mammal",
    popularity: 40,
  },
  {
    name: "Impala",
    scientific: "Aepyceros melampus",
    category: "Mammal",
    popularity: 39,
  },
  {
    name: "Springbok",
    scientific: "Antidorcas marsupialis",
    category: "Mammal",
    popularity: 38,
  },
  {
    name: "Kudu",
    scientific: "Tragelaphus",
    category: "Mammal",
    popularity: 37,
  },
  {
    name: "Wildebeest",
    scientific: "Connochaetes",
    category: "Mammal",
    popularity: 36,
  },
  {
    name: "Zorse",
    scientific: "Equus zebra",
    category: "Mammal",
    popularity: 35,
  },
  {
    name: "Zonkey",
    scientific: "Equus asinus",
    category: "Mammal",
    popularity: 34,
  },
  {
    name: "cow",
    scientific: "Bos taurus",
    category: "Mammal",
    popularity: 33,
  },
  {
    name: "sheep",
    scientific: "Ovis aries",
    category: "Mammal",
    popularity: 32,
  },
  {
    name: "goat",
    scientific: "Capra aegagrus hircus",
    category: "Mammal",
    popularity: 31,
  },
  {
    name: "pig",
    scientific: "Sus scrofa domesticus",
    category: "Mammal",
    popularity: 30,
  },
  {
    name: "horse",
    scientific: "Equus ferus caballus",
    category: "Mammal",
    popularity: 29,
  },
  {
    name: "donkey",
    scientific: "Equus africanus asinus",
    category: "Mammal",
    popularity: 28,
  },
  {
    name: "mule",
    scientific: "Equus mulus",
    category: "Mammal",
    popularity: 27,
  },
  {
    name: "llama",
    scientific: "Lama glama",
    category: "Mammal",
    popularity: 26,
  },
  {
    name: "alpaca",
    scientific: "Vicugna pacos",
    category: "Mammal",
    popularity: 25,
  },
  {
    name: "bison",
    scientific: "Bison bison",
    category: "Mammal",
    popularity: 24,
  },
  {
    name: "yak",
    scientific: "Bos grunniens",
    category: "Mammal",
    popularity: 22,
  },
  {
    name: "reindeer",
    scientific: "Rangifer tarandus",
    category: "Mammal",
    popularity: 21,
  },
  {
    name: "elk",
    scientific: "Cervus canadensis",
    category: "Mammal",
    popularity: 20,
  },
  {
    name: "moose",
    scientific: "Alces alces",
    category: "Mammal",
    popularity: 19,
  },
  {
    name: "caribou",
    scientific: "Rangifer tarandus",
    category: "Mammal",
    popularity: 18,
  },
  {
    name: "gazelle",
    scientific: "Antilopinae",
    category: "Mammal",
    popularity: 17,
  },
  {
    name: "impala",
    scientific: "Aepyceros melampus",
    category: "Mammal",
    popularity: 16,
  },
  {
    name: "otter",
    scientific: "Lutrinae",
    category: "Mammal",
    popularity: 15,
  },
  {
    name: "platypus",
    scientific: "Ornithorhynchus anatinus",
    category: "Mammal",
    popularity: 14,
  },
  {
    name: "quokka",
    scientific: "Setonix brachyurus",
    category: "Mammal",
    popularity: 13,
  },
  {
    name: "wallaby",
    scientific: "Macropodidae",
    category: "Mammal",
    popularity: 12,
  },
  {
    name: "wombat",
    scientific: "Vombatiformes",
    category: "Mammal",
    popularity: 11,
  },
  {
    name: "koala",
    scientific: "Phascolarctos cinereus",
    category: "Mammal",
    popularity: 10,
  },
  {
    name: "kangaroo",
    scientific: "Macropodidae",
    category: "Mammal",
    popularity: 9,
  },
  {
    name: "dingo",
    scientific: "Canis lupus dingo",
    category: "Mammal",
    popularity: 8,
  },
  {
    name: "Tasmanian Devil",
    scientific: "Sarcophilus harrisii",
    category: "Mammal",
    popularity: 7,
  },
  {
    name: "platypus",
    scientific: "Ornithorhynchus anatinus",
    category: "Mammal",
    popularity: 6,
  },
  {
    name: "echidna",
    scientific: "Tachyglossidae",
    category: "Mammal",
    popularity: 5,
  },
  {
    name: "bandicoot",
    scientific: "Peramelemorphia",
    category: "Mammal",
    popularity: 4,
  },
  {
    name: "quoll",
    scientific: "Dasyurus",
    category: "Mammal",
    popularity: 3,
  },
  {
    name: "thylacine",
    scientific: "Thylacinus cynocephalus",
    category: "Mammal",
    popularity: 2,
  },
  {
    name: "howler monkey",
    scientific: "Alouatta",
    category: "Mammal",
    popularity: 1,
  },
  {
    name: "capuchin monkey",
    scientific: "Cebinae",
    category: "Mammal",
    popularity: 0,
  },
  {
    name: "squirrel monkey",
    scientific: "Saimiri",
    category: "Mammal",
    popularity: -1,
  },
  {
    name: "spider monkey",
    scientific: "Atelidae",
    category: "Mammal",
    popularity: -2,
  },
  {
    name: "marmoset",
    scientific: "Callithrix",
    category: "Mammal",
    popularity: -3,
  },
  {
    name: "tamarin",
    scientific: "Saguinus",
    category: "Mammal",
    popularity: -4,
  },
  {
    name: "lemur",
    scientific: "Lemuriformes",
    category: "Mammal",
    popularity: -5,
  },
  {
    name: "loris",
    scientific: "Lorisidae",
    category: "Mammal",
    popularity: -6,
  },
  {
    name: "tarsier",
    scientific: "Tarsiiformes",
    category: "Mammal",
    popularity: -7,
  },
  {
    name: "aye-aye",
    scientific: "Daubentonia madagascariensis",
    category: "Mammal",
    popularity: -8,
  },
  {
    name: "slow loris",
    scientific: "Nycticebus",
    category: "Mammal",
    popularity: -9,
  },
  {
    name: "galago",
    scientific: "Galagidae",
    category: "Mammal",
    popularity: -10,
  },
  {
    name: "bushbaby",
    scientific: "Galagidae",
    category: "Mammal",
    popularity: -11,
  },
  {
    name: "potto",
    scientific: "Perodicticus potto",
    category: "Mammal",
    popularity: -12,
  },
  {
    name: "angwantibo",
    scientific: "Arctocebus",
    category: "Mammal",
    popularity: -13,
  },
  {
    name: "pottos",
    scientific: "Perodicticus",
    category: "Mammal",
    popularity: -14,
  },
  {
    name: "binturong",
    scientific: "Arctictis binturong",
    category: "Mammal",
    popularity: -15,
  },
  {
    name: "civet",
    scientific: "Viverridae",
    category: "Mammal",
    popularity: -16,
  },
  {
    name: "genet",
    scientific: "Genetta",
    category: "Mammal",
    popularity: -17,
  },
  {
    name: "fossa",
    scientific: "Cryptoprocta ferox",
    category: "Mammal",
    popularity: -18,
  },
  {
    name: "mongoose",
    scientific: "Herpestidae",
    category: "Mammal",
    popularity: -19,
  },
  {
    name: "meerkat",
    scientific: "Suricata suricatta",
    category: "Mammal",
    popularity: -20,
  },
  {
    name: "hyena",
    scientific: "Hyaenidae",
    category: "Mammal",
    popularity: -21,
  },
  {
    name: "aardwolf",
    scientific: "Proteles cristatus",
    category: "Mammal",
    popularity: -22,
  },
  {
    name: "coyote",
    scientific: "Canis latrans",
    category: "Mammal",
    popularity: -23,
  },
  {
    name: "jackal",
    scientific: "Canis aureus",
    category: "Mammal",
    popularity: -24,
  },
  {
    name: "wolf",
    scientific: "Canis lupus",
    category: "Mammal",
    popularity: -25,
  },
  {
    name: "fox",
    scientific: "Vulpes vulpes",
    category: "Mammal",
    popularity: -26,
  },
  {
    name: "domestic cat",
    scientific: "Felis catus",
    category: "Mammal",
    popularity: -27,
  },
  {
    name: "domestic dog",
    scientific: "Canis lupus familiaris",
    category: "Mammal",
    popularity: -28,
  },
  {
    name: "wolfdog",
    scientific: "Canis lupus familiaris",
    category: "Mammal",
    popularity: -29,
  },
  {
    name: "dingo",
    scientific: "Canis lupus dingo",
    category: "Mammal",
    popularity: -30,
  },
  {
    name: "African wild dog",
    scientific: "Lycaon pictus",
    category: "Mammal",
    popularity: -31,
  },
  {
    name: "domestic pig",
    scientific: "Sus scrofa domesticus",
    category: "Mammal",
    popularity: -32,
  },
  {
    name: "wild boar",
    scientific: "Sus scrofa",
    category: "Mammal",
    popularity: -33,
  },
  {
    name: "warthog",
    scientific: "Phacochoerus africanus",
    category: "Mammal",
    popularity: -34,
  },
  {
    name: "peccary",
    scientific: "Tayassuidae",
    category: "Mammal",
    popularity: -35,
  },
  {
    name: "hippopotamus",
    scientific: "Hippopotamus amphibius",
    category: "Mammal",
    popularity: -36,
  },
  {
    name: "pygmy hippopotamus",
    scientific: "Choeropsis liberiensis",
    category: "Mammal",
    popularity: -37,
  },
  {
    name: "tapir",
    scientific: "Tapirus",
    category: "Mammal",
    popularity: -38,
  },
  {
    name: "horse",
    scientific: "Equus ferus caballus",
    category: "Mammal",
    popularity: -39,
  },
  {
    name: "pit viper",
    scientific: "Crotalinae",
    category: "Reptile",
    popularity: -40,
  },
  {
    name: "rattlesnake",
    scientific: "Crotalus",
    category: "Reptile",
    popularity: -41,
  },
  {
    name: "copperhead",
    scientific: "Agkistrodon contortrix",
    category: "Reptile",
    popularity: -42,
  },
  {
    name: "cottonmouth",
    scientific: "Agkistrodon piscivorus",
    category: "Reptile",
    popularity: -43,
  },
  {
    name: "coral snake",
    scientific: "Micrurus",
    category: "Reptile",
    popularity: -44,
  },
  {
    name: "king cobra",
    scientific: "Ophiophagus hannah",
    category: "Reptile",
    popularity: -45,
  },
  {
    name: "black mamba",
    scientific: "Dendroaspis polylepis",
    category: "Reptile",
    popularity: -46,
  },
  {
    name: "green mamba",
    scientific: "Dendroaspis angusticeps",
    category: "Reptile",
    popularity: -47,
  },
  {
    name: "boomslang",
    scientific: "Dispholidus typus",
    category: "Reptile",
    popularity: -48,
  },
  {
    name: "vine snake",
    scientific: "Ahaetulla",
    category: "Reptile",
    popularity: -49,
  },
  {
    name: "tree snake",
    scientific: "Boiga",
    category: "Reptile",
    popularity: -50,
  },
  {
    name: "green tree python",
    scientific: "Morelia viridis",
    category: "Reptile",
    popularity: -51,
  },
  {
    name: "carpet python",
    scientific: "Morelia spilota",
    category: "Reptile",
    popularity: -52,
  },
  {
    name: "reticulated python",
    scientific: "Malayopython reticulatus",
    category: "Reptile",
    popularity: -53,
  },
  {
    name: "Burmese python",
    scientific: "Python bivittatus",
    category: "Reptile",
    popularity: -54,
  },
  {
    name: "Indian python",
    scientific: "Python molurus",
    category: "Reptile",
    popularity: -55,
  },
  {
    name: "anaconda",
    scientific: "Eunectes",
    category: "Reptile",
    popularity: -56,
  },
  {
    name: "boa constrictor",
    scientific: "Boa constrictor",
    category: "Reptile",
    popularity: -57,
  },
  {
    name: "green iguana",
    scientific: "Iguana iguana",
    category: "Reptile",
    popularity: -58,
  },
  {
    name: "Komodo dragon",
    scientific: "Varanus komodoensis",
    category: "Reptile",
    popularity: -59,
  },
  {
    name: "monitor lizard",
    scientific: "Varanus",
    category: "Reptile",
    popularity: -60,
  },
  {
    name: "gecko",
    scientific: "Gekkota",
    category: "Reptile",
    popularity: -61,
  },
  {
    name: "chameleon",
    scientific: "Chamaeleonidae",
    category: "Reptile",
    popularity: -62,
  },
  {
    name: "skink",
    scientific: "Scincidae",
    category: "Reptile",
    popularity: -63,
  },
  {
    name: "tuatara",
    scientific: "Sphenodon punctatus",
    category: "Reptile",
    popularity: -64,
  },
  {
    name: "alligator",
    scientific: "Alligator",
    category: "Reptile",
    popularity: -65,
  },
  {
    name: "crocodile",
    scientific: "Crocodylidae",
    category: "Reptile",
    popularity: -66,
  },
  {
    name: "caiman",
    scientific: "Caiman",
    category: "Reptile",
    popularity: -67,
  },
  {
    name: "gavial",
    scientific: "Gavialis gangeticus",
    category: "Reptile",
    popularity: -68,
  },
  {
    name: "platypus",
    scientific: "Ornithorhynchus anatinus",
    category: "Mammal",
    popularity: -69,
  },
  {
    name: "echidna",
    scientific: "Tachyglossidae",
    category: "Mammal",
    popularity: -70,
  },
  {
    name: "sea turtle",
    scientific: "Cheloniidae",
    category: "Reptile",
    popularity: -71,
  },
  {
    name: "tortoise",
    scientific: "Testudinidae",
    category: "Reptile",
    popularity: -72,
  },
  {
    name: "frog",
    scientific: "Anura",
    category: "Amphibian",
    popularity: -73,
  },
  {
    name: "toad",
    scientific: "Anura",
    category: "Amphibian",
    popularity: -74,
  },
  {
    name: "salamander",
    scientific: "Caudata",
    category: "Amphibian",
    popularity: -75,
  },
  {
    name: "newt",
    scientific: "Salamandridae",
    category: "Amphibian",
    popularity: -76,
  },
  {
    name: "axolotl",
    scientific: "Ambystoma mexicanum",
    category: "Amphibian",
    popularity: -77,
  },
  {
    name: "caecilian",
    scientific: "Gymnophiona",
    category: "Amphibian",
    popularity: -78,
  },
  {
    name: "mudpuppy",
    scientific: "Necturus maculosus",
    category: "Amphibian",
    popularity: -79,
  },
  {
    name: "hellbender",
    scientific: "Cryptobranchus alleganiensis alleganiensis",
    category: "Amphibian",
    popularity: -80,
  },
  {
    name: "goliath frog",
    scientific: "Goliathus goliath",
    category: "Amphibian",
    popularity: -81,
  },
  {
    name: "African bullfrog",
    scientific: "Pyxicephalus adspersus",
    category: "Amphibian",
    popularity: -82,
  },
  {
    name: "poison dart frog",
    scientific: "Dendrobatidae",
    category: "Amphibian",
    popularity: -83,
  },
  {
    name: "red-eyed tree frog",
    scientific: "Agalychnis callidryas",
    category: "Amphibian",
    popularity: -84,
  },
  {
    name: "white tree frog",
    scientific: "Litoria caerulea",
    category: "Amphibian",
    popularity: -85,
  },
  {
    name: "green tree frog",
    scientific: "Hyla cinerea",
    category: "Amphibian",
    popularity: -86,
  },
  {
    name: "American bullfrog",
    scientific: "Lithobates catesbeianus",
    category: "Amphibian",
    popularity: -87,
  },
  {
    name: "common frog",
    scientific: "Rana temporaria",
    category: "Amphibian",
    popularity: -88,
  },
  {
    name: "common toad",
    scientific: "Bufo bufo",
    category: "Amphibian",
    popularity: -89,
  },
  {
    name: "European green toad",
    scientific: "Bufotes viridis",
    category: "Amphibian",
    popularity: -90,
  },
  {
    name: "common newt",
    scientific: "Lissotriton vulgaris",
    category: "Amphibian",
    popularity: -91,
  },
  {
    name: "great crested newt",
    scientific: "Triturus cristatus",
    category: "Amphibian",
    popularity: -92,
  },
  {
    name: "smooth newt",
    scientific: "Lissotriton vulgaris",
    category: "Amphibian",
    popularity: -93,
  },
  {
    name: "fire salamander",
    scientific: "Salamandra salamandra",
    category: "Amphibian",
    popularity: -94,
  },
  {
    name: "spotted salamander",
    scientific: "Ambystoma maculatum",
    category: "Amphibian",
    popularity: -95,
  },
  {
    name: "Eastern tiger salamander",
    scientific: "Ambystoma tigrinum",
    category: "Amphibian",
    popularity: -96,
  },
  {
    name: "California tiger salamander",
    scientific: "Ambystoma californiense",
    category: "Amphibian",
    popularity: -97,
  },
  {
    name: "red-spotted newt",
    scientific: "Notophthalmus viridescens",
    category: "Amphibian",
    popularity: -98,
  },
  {
    name: "Eastern newt",
    scientific: "Notophthalmus viridescens",
    category: "Amphibian",
    popularity: -99,
  },
  
  {
    name: "Western tiger salamander",
    scientific: "Ambystoma mavortium",
    category: "Amphibian",
    popularity: -102,
  },
  {
    name: "Eastern spotted newt",
    scientific: "Notophthalmus viridescens",
    category: "Amphibian",
    popularity: -103,
  },

  {
    name: "Eastern red-spotted newt",
    scientific: "Notophthalmus viridescens",
    category: "Amphibian",
    popularity: -105,
  },
  {
    name: "Western red-spotted newt",
    scientific: "Notophthalmus viridescens",
    category: "Amphibian",
    popularity: -106,
  },
  {
    name: "Western tiger salamander",
    scientific: "Ambystoma mavortium",
    category: "Amphibian",
    popularity: -110,
  },
  {
    name: "Eastern spotted newt",
    scientific: "Notophthalmus viridescens",
    category: "Amphibian",
    popularity: -111,
  },
  
  {
    name: "Western red-spotted newt",
    scientific: "Notophthalmus viridescens",
    category: "Amphibian",
    popularity: -114,
  },
  {
    name: "Western tiger salamander",
    scientific: "Ambystoma mavortium",
    category: "Amphibian",
    popularity: -118,
  },
  {
    name: "Western red-spotted newt",
    scientific: "Notophthalmus viridescens",
    category: "Amphibian",
    popularity: -122,
  },
  {
    name: "Western newt",
    scientific: "Taricha granulosa",
    category: "Amphibian",
    popularity: -124,
  },
  {
    name: "moths",
    scientific: "Lepidoptera",
    category: "Insect",
    popularity: -128,
  },
  {
    name: "dragonflies",
    scientific: "Odonata",
    category: "Insect",
    popularity: -129,
  },
  {
    name: "damselflies",
    scientific: "Zygoptera",
    category: "Insect",
    popularity: -130,
  },
  {
    name: "grasshoppers",
    scientific: "Caelifera",
    category: "Insect",
    popularity: -131,
  },
  {
    name: "crickets",
    scientific: "Gryllidae",
    category: "Insect",
    popularity: -132,
  },
  {
    name: "cockroaches",
    scientific: "Blattodea",
    category: "Insect",
    popularity: -133,
  },
  {
    name: "termites",
    scientific: "Isoptera",
    category: "Insect",
    popularity: -134,
  },
  {
    name: "bees",
    scientific: "Apidae",
    category: "Insect",
    popularity: -135,
  },
  {
    name: "wasps",
    scientific: "Vespidae",
    category: "Insect",
    popularity: -136,
  },

  {
    name: "Western tiger salamander",
    scientific: "Ambystoma mavortium",
    category: "Amphibian",
    popularity: -126,
  },
  {
    name: "Western spotted newt",
    scientific: "Notophthalmus viridescens",
    category: "Amphibian",
    popularity: -128,
  },
  {
    name: "clownfish",
    scientific: "Amphiprioninae",
    category: "Fish",
    popularity: -129,
  },
  {
    name: "angelfish",
    scientific: "Pomacanthidae",
    category: "Fish",
    popularity: -130,
  },
  {
    name: "betta fish",
    scientific: "Betta splendens",
    category: "Fish",
    popularity: -131,
  },
  {
    name: "goldfish",
    scientific: "Carassius auratus",
    category: "Fish",
    popularity: -132,
  },
  {
    name: "guppy",
    scientific: "Poecilia reticulata",
    category: "Fish",
    popularity: -133,
  },
  {
    name: "zebra danio",
    scientific: "Danio rerio",
    category: "Fish",
    popularity: -134,
  },
  {
    name: "neon tetra",
    scientific: "Paracheirodon innesi",
    category: "Fish",
    popularity: -135,
  },
  {
    name: "discus fish",
    scientific: "Symphysodon",
    category: "Fish",
    popularity: -136,
  },
  {
    name: "oscar fish",
    scientific: "Astronotus ocellatus",
    category: "Fish",
    popularity: -137,
  },
  {
    name: "piranha",
    scientific: "Serrasalmidae",
    category: "Fish",
    popularity: -138,
  },
  {
    name: "catfish",
    scientific: "Siluriformes",
    category: "Fish",
    popularity: -139,
  },
  {
    name: "discus fish",
    scientific: "Symphysodon",
    category: "Fish",
    popularity: -141,
  },
  {
    name: "cichlid",
    scientific: "Cichlidae",
    category: "Fish",
    popularity: -142,
  },
  {
    name: "goldfish",
    scientific: "Carassius auratus",
    category: "Fish",
    popularity: -144,
  },
  {
    name: "guppy",
    scientific: "Poecilia reticulata",
    category: "Fish",
    popularity: -145,
  },
  {
    name: "zebra danio",
    scientific: "Danio rerio",
    category: "Fish",
    popularity: -146,
  },
  {
    name: "neon tetra",
    scientific: "Paracheirodon innesi",
    category: "Fish",
    popularity: -147,
  },
  {
    name: "piranha",
    scientific: "Serrasalmidae",
    category: "Fish",
    popularity: -148,
  },
  {
    name: "harpy eagle",
    scientific: "Harpagornis harpyja",
    category: "Bird",
    popularity: -149,
  },
  {
    name: "bald eagle",
    scientific: "Haliaeetus leucocephalus",
    category: "Bird",
    popularity: -150,
  },
  {
    name: "golden eagle",
    scientific: "Aquila chrysaetos",
    category: "Bird",
    popularity: -151,
  },
  {
    name: "African grey parrot",
    scientific: "Psittacus erithacus",
    category: "Bird",
    popularity: -152,
  },
  {
    name: "cockatoo",
    scientific: "Cacatuidae",
    category: "Bird",
    popularity: -153,
  },
  {
    name: "macaw",
    scientific: "Ara",
    category: "Bird",
    popularity: -154,
  },
  {
    name: "parakeet",
    scientific: "Psittacidae",
    category: "Bird",
    popularity: -155,
  },
  {
    name: "canary",
    scientific: "Serinus canaria",
    category: "Bird",
    popularity: -156,
  },
  {
    name: "finch",
    scientific: "Fringillidae",
    category: "Bird",
    popularity: -157,
  },
  {
    name: "sparrow",
    scientific: "Passeridae",
    category: "Bird",
    popularity: -158,
  },
  {
    name: "robin",
    scientific: "Turdus migratorius",
    category: "Bird",
    popularity: -159,
  },
  {
    name: "blue jay",
    scientific: "Cyanocitta cristata",
    category: "Bird",
    popularity: -160,
  },
  {
    name: "cardinal",
    scientific: "Cardinalidae",
    category: "Bird",
    popularity: -161,
  },
  {
    name: "hummingbird",
    scientific: "Trochilidae",
    category: "Bird",
    popularity: -162,
  },
  {
    name: "woodpecker",
    scientific: "Picidae",
    category: "Bird",
    popularity: -163,
  },
  {
    name: "owl",
    scientific: "Strigiformes",
    category: "Bird",
    popularity: -164,
  },
  {
    name: "flamingo",
    scientific: "Phoenicopteridae",
    category: "Bird",
    popularity: -165,
  },
  {
    name: "penguin",
    scientific: "Spheniscidae",
    category: "Bird",
    popularity: -166,
  },
  {
    name: "ostrich",
    scientific: "Struthio camelus",
    category: "Bird",
    popularity: -167,
  },
  {
    name: "emu",
    scientific: "Dromaius novaehollandiae",
    category: "Bird",
    popularity: -168,
  },
  {
    name: "kiwi",
    scientific: "Apteryx",
    category: "Bird",
    popularity: -169,
  },
  {
    name: "cassowary",
    scientific: "Casuarius",
    category: "Bird",
    popularity: -170,
  },
  {
    name: "vulture",
    scientific: "Accipitridae",
    category: "Bird",
    popularity: -171,
  },
  {
    name: "condor",
    scientific: "Cathartidae",
    category: "Bird",
    popularity: -172,
  },
  {
    name: "albatross",
    scientific: "Diomedeidae",
    category: "Bird",
    popularity: -173,
  },
  {
    name: "seagull",
    scientific: "Laridae",
    category: "Bird",
    popularity: -174,
  },
  {
    name: "pelican",
    scientific: "Pelecanidae",
    category: "Bird",
    popularity: -175,
  },
  {
    name: "heron",
    scientific: "Ardeidae",
    category: "Bird",
    popularity: -176,
  },
  {
    name: "stork",
    scientific: "Ciconiidae",
    category: "Bird",
    popularity: -177,
  },
  {
    name: "flamingo",
    scientific: "Phoenicopteridae",
    category: "Bird",
    popularity: -178,
  },
  {
    name: "crane",
    scientific: "Gruidae",
    category: "Bird",
    popularity: -179,
  },
  {
    name: "quail",
    scientific: "Phasianidae",
    category: "Bird",
    popularity: -180,
  },
  {
    name: "pheasant",
    scientific: "Phasianidae",
    category: "Bird",
    popularity: -181,
  },
  {
    name: "turkey",
    scientific: "Meleagris gallopavo",
    category: "Bird",
    popularity: -182,
  },
  {
    name: "chicken",
    scientific: "Gallus gallus domesticus",
    category: "Bird",
    popularity: -183,
  },
  {
    name: "duck",
    scientific: "Anatidae",
    category: "Bird",
    popularity: -184,
  },
  {
    name: "goose",
    scientific: "Anserinae",
    category: "Bird",
    popularity: -185,
  },
  {
    name: "swan",
    scientific: "Cygnus",
    category: "Bird",
    popularity: -186,
  },
  {
    name: "quail",
    scientific: "Coturnix",
    category: "Bird",
    popularity: -187,
  },
  {
    name: "pheasant",
    scientific: "Phasianidae",
    category: "Bird",
    popularity: -188,
  },
  {
    name: "turkey",
    scientific: "Meleagris gallopavo",
    category: "Bird",
    popularity: -189,
  },
  {
    name: "chicken",
    scientific: "Gallus gallus domesticus",
    category: "Bird",
    popularity: -190,
  },
  {
    name: "duck",
    scientific: "Anatidae",
    category: "Bird",
    popularity: -191,
  },
  {
    name: "goose",
    scientific: "Anserinae",
    category: "Bird",
    popularity: -192,
  },
  {
    name: "swan",
    scientific: "Cygnus",
    category: "Bird",
    popularity: -193,
  },
  {
    name: "ostrich",
    scientific: "Struthio camelus",
    category: "Bird",
    popularity: -194,
  },
  {
    name: "emu",
    scientific: "Dromaius novaehollandiae",
    category: "Bird",
    popularity: -195,
  },
  {
    name: "kiwi",
    scientific: "Apteryx",
    category: "Bird",
    popularity: -196,
  },
  {
    name: "cassowary",
    scientific: "Casuarius",
    category: "Bird",
    popularity: -197,
  },
  {
    name: "orca",
    scientific: "Orcinus orca",
    category: "Mammal",
    popularity: -198,
  },
  {
    name: "beluga whale",
    scientific: "Delphinapterus leucas",
    category: "Mammal",
    popularity: -200,
  },
  {
    name: "dugong",
    scientific: "Dugong dugon",
    category: "Mammal",
    popularity: -203,
  },
  {
    name: "sea lion",
    scientific: "Otariinae",
    category: "Mammal",
    popularity: -204,
  },
  {
    name: "seal",
    scientific: "Phocidae",
    category: "Mammal",
    popularity: -205,
  },
  {
    name: "walrus",
    scientific: "Odobenus rosmarus",
    category: "Mammal",
    popularity: -206,
  },
  {
    name: "sea otter",
    scientific: "Enhydra lutris",
    category: "Mammal",
    popularity: -207,
  },
  {
    name: "platypus",
    scientific: "Ornithorhynchus anatinus",
    category: "Mammal",
    popularity: -208,
  },
  {
    name: "echidna",
    scientific: "Tachyglossidae",
    category: "Mammal",
    popularity: -209,
  },
  {
    name: "sea turtle",
    scientific: "Cheloniidae",
    category: "Reptile",
    popularity: -210,
  },
  {
    name: "tortoise",
    scientific: "Testudinidae",
    category: "Reptile",
    popularity: -211,
  },
  {
    name: "octopus",
    scientific: "Octopoda",
    category: "Mollusk",
    popularity: -212,
  },
  {
    name: "squid",
    scientific: "Teuthida",
    category: "Mollusk",
    popularity: -213,
  },
  {
    name: "cuttlefish",
    scientific: "Sepiidae",
    category: "Mollusk",
    popularity: -214,
  },
  {
    name: "nautilus",
    scientific: "Nautilidae",
    category: "Mollusk",
    popularity: -215,
  },
  {
    name: "chambered nautilus",
    scientific: "Nautilus pompilius",
    category: "Mollusk",
    popularity: -216,
  },
  {
    name: "giant squid",
    scientific: "Architeuthis dux",
    category: "Mollusk",
    popularity: -217,
  },
  {
    name: "colossal squid",
    scientific: "Mesonychoteuthis",
    category: "Mollusk",
    popularity: -218,
  },
  {
    name: "blue-ringed octopus",
    scientific: "Hapalochlaena",
    category: "Mollusk",
    popularity: -219,
  },
  {
    name: "mimic octopus",
    scientific: "Thaumoctopus mimicus",
    category: "Mollusk",
    popularity: -220,
  },
  {
    name: "vampire squid",
    scientific: "Vampyroteuthis infernalis",
    category: "Mollusk",
    popularity: -221,
  },
  {
    name: "common octopus",
    scientific: "Octopus vulgaris",
    category: "Mollusk",
    popularity: -222,
  },
  {
    name: "Pacific giant octopus",
    scientific: "Enteroctopus dofleini",
    category: "Mollusk",
    popularity: -223,
  },
  {
    name: "Atlantic bluefin tuna",
    scientific: "Thunnus thynnus",
    category: "Fish",
    popularity: -224,
  },
  {
    name: "yellowfin tuna",
    scientific: "Thunnus albacares",
    category: "Fish",
    popularity: -225,
  },
  {
    name: "bigeye tuna",
    scientific: "Thunnus obesus",
    category: "Fish",
    popularity: -226,
  },
  {
    name: "skipjack tuna",
    scientific: "Katsuwonus pelamis",
    category: "Fish",
    popularity: -227,
  },
  {
    name: "albacore tuna",
    scientific: "Thunnus alalunga",
    category: "Fish",
    popularity: -228,
  },
  {
    name: "southern bluefin tuna",
    scientific: "Thunnus maccoyii",
    category: "Fish",
    popularity: -229,
  },
  {
    name: "northern bluefin tuna",
    scientific: "Thunnus thynnus",
    category: "Fish",
    popularity: -230,
  },
  {
    name: "blackfin tuna",
    scientific: "Thunnus atlanticus",
    category: "Fish",
    popularity: -231,
  },
  {
    name: "longtail tuna",
    scientific: "Thunnus tonggol",
    category: "Fish",
    popularity: -232,
  },
  {
    name: "mackerel tuna",
    scientific: "Euthynnus",
    category: "Fish",
    popularity: -233,
  },
  {
    name: "bonito",
    scientific: "Sarda",
    category: "Fish",
    popularity: -234,
  },
  {
    name: "false killer whale",
    scientific: "Pseudorca crassidens",
    category: "Mammal",
    popularity: -235,
  },
  {
    name: "pilot whale",
    scientific: "Globicephala",
    category: "Mammal",
    popularity: -236,
  },
  {
    name: "sperm whale",
    scientific: "Physeter macrocephalus",
    category: "Mammal",
    popularity: -237,
  },
  {
    name: "beaked whale",
    scientific: "Ziphiidae",
    category: "Mammal",
    popularity: -238,
  },

  {
    name: "orca",
    scientific: "Orcinus orca",
    category: "Mammal",
    popularity: -242,
  },
  {
    name: "sea lion",
    scientific: "Otariinae",
    category: "Mammal",
    popularity: -243,
  },
  {
    name: "seal",
    scientific: "Phocidae",
    category: "Mammal",
    popularity: -244,
  },
  {
    name: "common spider",
    scientific: "Araneae",
    category: "Arachnid",
    popularity: -245,
  },
  {
    name: "tarantula",
    scientific: "Theraphosidae",
    category: "Arachnid",
    popularity: -246,
  },
  {
    name: "scorpion",
    scientific: "Scorpiones",
    category: "Arachnid",
    popularity: -247,
  },
  {
    name: "tick",
    scientific: "Ixodidae",
    category: "Arachnid",
    popularity: -248,
  },
  {
    name: "mite",
    scientific: "Acari",
    category: "Arachnid",
    popularity: -249,
  },
  {
    name: "spider crab",
    scientific: "Macrocheira kaempferi",
    category: "Crustacean",
    popularity: -250,
  },
  {
    name: "king crab",
    scientific: "Paralithodes camtschaticus",
    category: "Crustacean",
    popularity: -251,
  },
  {
    name: "blue crab",
    scientific: "Callinectes sapidus",
    category: "Crustacean",
    popularity: -252,
  },
  {
    name: "lobster",
    scientific: "Nephropidae",
    category: "Crustacean",
    popularity: -253,
  },
  {
    name: "shrimp",
    scientific: "Caridea",
    category: "Crustacean",
    popularity: -254,
  },
  {
    name: "crayfish",
    scientific: "Astacidae",
    category: "Crustacean",
    popularity: -255,
  },
  {
    name: "barnacle",
    scientific: "Cirripedia",
    category: "Crustacean",
    popularity: -256,
  },
  {
    name: "krill",
    scientific: "Euphausiacea",
    category: "Crustacean",
    popularity: -257,
  },
  {
    name: "isopod",
    scientific: "Isopoda",
    category: "Crustacean",
    popularity: -258,
  },
  {
    name: "copepod",
    scientific: "Copepoda",
    category: "Crustacean",
    popularity: -259,
  },
  {
    name: "sea cucumber",
    scientific: "Holothuroidea",
    category: "Echinoderm",
    popularity: -261,
  },
  {
    name: "sea urchin",
    scientific: "Echinoidea",
    category: "Echinoderm",
    popularity: -262,
  },
  {
    name: "starfish",
    scientific: "Asteroidea",
    category: "Echinoderm",
    popularity: -263,
  },
  {
    name: "sand dollar",
    scientific: "Clypeasteroida",
    category: "Echinoderm",
    popularity: -264,
  },
  {
    name: "sea lily",
    scientific: "Crinoidea",
    category: "Echinoderm",
    popularity: -265,
  },
  {
    name: "sea daisy",
    scientific: "Asteroidea",
    category: "Echinoderm",
    popularity: -266,
  },
  {
    name: "sea spider",
    scientific: "Pycnogonida",
    category: "Arthropod",
    popularity: -267,
  },
  {
    name: "horseshoe crab",
    scientific: "Limulus polyphemus",
    category: "Arthropod",
    popularity: -268,
  },
  {
    name: "scorpion",
    scientific: "Scorpiones",
    category: "Arthropod",
    popularity: -269,
  },
  {
    name: "tick",
    scientific: "Ixodidae",
    category: "Arthropod",
    popularity: -270,
  },
  {
    name: "mite",
    scientific: "Acari",
    category: "Arthropod",
    popularity: -271,
  },
  {
    name: "centipede",
    scientific: "Chilopoda",
    category: "Arthropod",
    popularity: -272,
  },
  {
    name: "millipede",
    scientific: "Diplopoda",
    category: "Arthropod",
    popularity: -273,
  },
  {
    name: "cricket",
    scientific: "Gryllidae",
    category: "Insect",
    popularity: -274,
  },
  {
    name: "grasshopper",
    scientific: "Caelifera",
    category: "Insect",
    popularity: -275,
  },
  {
    name: "cockroach",
    scientific: "Blattodea",
    category: "Insect",
    popularity: -276,
  },
  {
    name: "ant",
    scientific: "Formicidae",
    category: "Insect",
    popularity: -277,
  },
  {
    name: "wasp",
    scientific: "Vespidae",
    category: "Insect",
    popularity: -279,
  },
  {
    name: "moth",
    scientific: "Lepidoptera",
    category: "Insect",
    popularity: -281,
  },
];

let filteredAnimals = [...allAnimals];
let currentIndex = 0;
const pageSize = 6;
const wrapper = document.getElementById("animalWrapper");
const loadMoreBtn = document.getElementById("loadMore");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

async function fetchWikiData(name) {
  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        name
      )}`
    );
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

async function createAnimalCard(animal) {
  const card = document.createElement("div");
  card.className = "animal-card";
  const wiki = await fetchWikiData(animal.name);
  const img =
    wiki?.thumbnail?.source ||
    `https://source.unsplash.com/300x200/?${animal.name}`;
  const desc = wiki?.extract || "No description available.";
  card.innerHTML = `
  <img src="${img}" alt="${animal.name}" />
  <div class="animal-info">
    <h2><a href="animal.html?name=${encodeURIComponent(
      animal.name.toLowerCase()
    )}">${animal.name}</a></h2>
    <em>${animal.scientific}</em>
    <p>${desc}</p>
  </div>
`;
  wrapper.appendChild(card);
}

async function renderAnimals() {
  const slice = filteredAnimals.slice(
    currentIndex,
    currentIndex + pageSize
  );
  for (const animal of slice) {
    await createAnimalCard(animal);
  }
  currentIndex += pageSize;
  if (currentIndex >= filteredAnimals.length) {
    loadMoreBtn.style.display = "none";
  }
}

function applyFilters() {
  const term = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const sort = sortFilter.value;
  filteredAnimals = allAnimals.filter(
    (a) =>
      a.name.toLowerCase().includes(term) &&
      (category === "all" || a.category === category)
  );
  if (sort === "a-z")
    filteredAnimals.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === "z-a")
    filteredAnimals.sort((a, b) => b.name.localeCompare(a.name));
  else if (sort === "popularity")
    filteredAnimals.sort((a, b) => b.popularity - a.popularity);
  wrapper.innerHTML = "";
  currentIndex = 0;
  loadMoreBtn.style.display =
    filteredAnimals.length > 0 ? "block" : "none";
  renderAnimals();
}

searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
sortFilter.addEventListener("change", applyFilters);
loadMoreBtn.addEventListener("click", renderAnimals);
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const preselectedCategory = urlParams.get("category");
  if (preselectedCategory) {
    categoryFilter.value = preselectedCategory;
  }
  applyFilters();
});
