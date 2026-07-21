/* Zlatara Unca — demo katalog za pitch prezentaciju.
   Nazivi i cene su ilustrativni, u stilu i cenovnom rasponu realne ponude,
   radi prikaza dizajna i funkcionalnosti korpe. */

const PRODUCTS = [
  {
    id: "vp-01",
    name: "Vereničko prstenje — par, zlato 585",
    cat: "Vereničko prstenje",
    catKey: "verenicko",
    price: 68000,
    purity: "585",
    material: "Žuto zlato",
    desc: "Klasičan par verenica u sjajnom 14-karatnom zlatu, glatka linija bez kamena — miruje uz svaki stil venčanja.",
    icon: "rings",
    tag: "Bestseler"
  },
  {
    id: "vp-02",
    name: "Prsten od zlata sa cirkonom",
    cat: "Vereničko prstenje",
    catKey: "verenicko",
    price: 42000,
    purity: "375",
    material: "Žuto zlato",
    desc: "Tanak obruč od 9-karatnog zlata sa jednim centralnim cirkonom — diskretan i svakodnevan.",
    icon: "ring-stone"
  },
  {
    id: "zp-01",
    name: "Zlatni prsten, uže pletivo",
    cat: "Zlatno prstenje",
    catKey: "zlatno",
    price: 35500,
    purity: "585",
    material: "Žuto zlato",
    desc: "Upleteni obruč inspirisan starim zanatskim tehnikama zlatarstva, ručno dovršen.",
    icon: "ring-twist"
  },
  {
    id: "zp-02",
    name: "Zlatni pečatni prsten",
    cat: "Zlatno prstenje",
    catKey: "zlatno",
    price: 39000,
    purity: "585",
    material: "Žuto zlato",
    desc: "Masivniji pečatnjak sa ravnom pločicom za graviranje inicijala.",
    icon: "ring-signet"
  },
  {
    id: "sp-01",
    name: "Srebrni prsten sa pozlatom 23K",
    cat: "Srebrno prstenje",
    catKey: "srebrno",
    price: 11000,
    purity: "925",
    material: "Srebro",
    desc: "Srebrna baza sa tankim slojem 23-karatne pozlate — lagan, pristupačan dnevni komad.",
    icon: "ring-stone"
  },
  {
    id: "bu-01",
    name: "Burma, klasičan profil 4mm",
    cat: "Burme",
    catKey: "burme",
    price: 58000,
    purity: "585",
    material: "Žuto zlato",
    desc: "Udoban poluokrugao profil, najtraženija širina za svakodnevno nošenje.",
    icon: "band"
  },
  {
    id: "bu-02",
    name: "Burma, ravni profil sa satenskom obradom",
    cat: "Burme",
    catKey: "burme",
    price: 61500,
    purity: "585",
    material: "Belo zlato",
    desc: "Moderna ravna linija u belom zlatu sa mat saten završnicom.",
    icon: "band"
  },
  {
    id: "zl-01",
    name: "Zlatnik, dukat 986",
    cat: "Zlatnici",
    catKey: "zlatnici",
    price: 145000,
    purity: "986",
    material: "Investiciono zlato",
    desc: "Investicioni zlatnik visoke čistoće, sa sertifikatom porekla i probe.",
    icon: "coin"
  },
  {
    id: "og-01",
    name: "Ogrlica, tanki lančić forcatura",
    cat: "Ogrlice",
    catKey: "ogrlice",
    price: 27500,
    purity: "585",
    material: "Žuto zlato",
    desc: "Fin lančić za svakodnevno slojevito nošenje ili samostalno kao osnovni komad.",
    icon: "necklace"
  },
  {
    id: "og-02",
    name: "Ogrlica sa priveskom, poludrago kamenje",
    cat: "Ogrlice",
    catKey: "ogrlice",
    price: 33000,
    purity: "375",
    material: "Žuto zlato",
    desc: "Privesak sa poludragim kamenom na lančiću srednje dužine.",
    icon: "necklace-pendant"
  },
  {
    id: "na-01",
    name: "Narukvica, karike figaro",
    cat: "Narukvice",
    catKey: "narukvice",
    price: 31000,
    purity: "585",
    material: "Žuto zlato",
    desc: "Klasičan figaro splet, podesiva dužina uz sigurnosnu kopču.",
    icon: "bracelet"
  },
  {
    id: "mi-01",
    name: "Minđuše, mala petlja sa cirkonom",
    cat: "Minđuše",
    catKey: "mindjuse",
    price: 18500,
    purity: "375",
    material: "Žuto zlato",
    desc: "Diskretna svakodnevna petlja sa jednim cirkonom — lagane za ceo dan.",
    icon: "earrings"
  },
  {
    id: "br-01",
    name: "Disney™ minđuše, srebro sa emajlom",
    cat: "Brendovi · Disney",
    catKey: "brendovi",
    price: 8600,
    purity: "925",
    material: "Srebro",
    desc: "Licencirana Disney kolekcija u srebru — šareni emajl detalji, poklon kutija uključena.",
    icon: "earrings",
    tag: "Novo"
  },
  {
    id: "br-02",
    name: "Aquaforte narukvica, srebro sa pozlatom 23K",
    cat: "Brendovi · Aquaforte Vicenza",
    catKey: "brendovi",
    price: 11600,
    purity: "925",
    material: "Srebro",
    desc: "Italijanski dizajn iz Vičence — srebro sa slojem 23-karatne pozlate.",
    icon: "bracelet"
  }
];

const CATEGORIES = [
  { key: "verenicko", label: "Vereničko prstenje", purity: "585", blurb: "Parovi za veliki dan" },
  { key: "burme", label: "Burme", purity: "585", blurb: "Svaki profil, svaka širina" },
  { key: "zlatno", label: "Zlatno prstenje", purity: "585", blurb: "Za svaki dan" },
  { key: "srebrno", label: "Srebrno prstenje", purity: "925", blurb: "Lagano i pristupačno" },
  { key: "zlatnici", label: "Zlatnici", purity: "986", blurb: "Investicija u zlatu" },
  { key: "ogrlice", label: "Ogrlice", purity: "585", blurb: "Lančići i privesci" },
  { key: "narukvice", label: "Narukvice", purity: "585", blurb: "Klasika i pletivo" },
  { key: "mindjuse", label: "Minđuše", purity: "375", blurb: "Za svaki dan i svečanost" },
  { key: "brendovi", label: "Brendovi", purity: "925", blurb: "Disney, Aquaforte, Camurria" }
];

function formatRSD(amount) {
  return amount.toLocaleString("sr-RS") + " RSD";
}

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}
