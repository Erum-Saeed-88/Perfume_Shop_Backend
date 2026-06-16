const LuxuryProducts = [
  // =========================================================================
  // 👔 MEN COLLECTION (18 Products)
  // =========================================================================

  // --- Men: Body Spray (6 Products) ---
  {
    _id: "m_bs_1",
    name: "Blu Fresh Cooling",
    brand: "Opio Fragrances",
    price: 2600,
    category: "Body Spray",
    gender: "Men",
    countInStock: 12,
    description: "An ultra-refreshing explosive burst of frozen mint crystals, ocean breeze accords, and crisp cedarwood.",
    image: "https://opiofragrances.pk/cdn/shop/files/blu.jpg?v=1724837662",
    isLatest: false
  },
  {
    _id: "m_bs_2",
    name: "Carbon Intense Sport",
    brand: "L'Oreal Paris",
    price: 2400,
    category: "Body Spray",
    gender: "Men",
    countInStock: 15,
    description: "High-octane masculine energy blending crushed black pepper, dynamic patchouli, and fresh vetiver roots.",
    image: "https://static.sweetcare.com/img/prd/488/v-638834179216792576/loreal-paris-021756ol-2.webp",
    isLatest: false
  },
  {
    _id: "m_bs_3",
    name: "Wild Stone Code",
    brand: "chrome",
    price: 2500,
    category: "Body Spray",
    gender: "Men",
    countInStock: 20,
    description: "Zesty Sicilian green mandarin infused with clean ozone notes and sharp white driftwood.",
    image: "https://codegrooming.com/cdn/shop/files/Chrome120ml_88cd2dd4-d0f6-4eb4-b4b7-0ea7ff7e0e0d_grande.png?v=1713529514",
    isLatest: true
  },
  {
    _id: "m_bs_4",
    name: "Cidarwood Breeze",
    brand: "Dove",
    price: 2700,
    category: "Body Spray",
    gender: "Men",
    countInStock: 8,
    description: "A smoother everyday woody mist featuring creamy mysore cidarwood and light hints of green cardamom.",
    image: "https://m.media-amazon.com/images/I/816PKHpqGxL._AC_UF350,350_QL80_.jpg",
    isLatest: false
  },
  {
    _id: "m_bs_5",
    name: "Amber Fuel",
    brand: "Diesel",
    price: 2800,
    category: "Body Spray",
    gender: "Men",
    countInStock: 0,
    description: "Warm, captivating oriental aura formulated with golden amber grids, dry tobacco leaves, and spices.",
    image: "https://m.media-amazon.com/images/I/713yjol8lkL._AC_UF350,350_QL80_.jpg",
    isLatest: false
  },
  {
    _id: "m_bs_6",
    name: "Stunner Fresh Mist",
    brand: "Broche",
    price: 2300,
    category: "Body Spray",
    gender: "Men",
    countInStock: 14,
    description: "Crisp rain-soaked oakmoss layered brilliantly with herbal sage essence and wild clary sage.",
    image: "https://broche.pk/cdn/shop/files/Broche_Premium_Body_Spray_Stunner_200ml.webp?v=1778480124&width=1445",
    isLatest: false
  },

  // --- Men: Eau De Perfume (6 Products) ---
  {
    _id: "m_edp_1",
    name: "Midnight Noir",
    brand: "Mosai Italia",
    price: 8500,
    category: "Eau De Perfume",
    gender: "Men",
    countInStock: 5,
    description: "An elite, long-lasting dynamic combination of intense leather accords, smoky vetiver, and premium Italian bergamot.",
    image: "https://mosaitalia.in/cdn/shop/files/IMG_2442_f3632cb5-47e8-4466-b0e8-ee1480e0f687.jpg?v=1753607106&width=2000",
    isLatest: true
  },
  {
    _id: "m_edp_2",
    name: "Royale Bleu",
    brand: "Ahuja Fragrances",
    price: 7900,
    category: "Eau De Perfume",
    gender: "Men",
    countInStock: 7,
    description: "The crown jewel of fresh formulation. Precious marine minerals mixed with spicy ginger bulbs and rich incense smoke.",
    image: "https://framerusercontent.com/images/bt8exxZ3Y4p2ngVbRKBcMNCY0aA.png?width=2048&height=2048",
    isLatest: true
  },
  {
    _id: "m_edp_3",
    name: "Imperial Oud Wood",
    brand: "Intense Oud",
    price: 9200,
    category: "Eau De Perfume",
    gender: "Men",
    countInStock: 4,
    description: "Dark luxury personified. Smoked agarwood logs wrapped beautifully in expensive vanilla beans and rosewood chips.",
    image: "https://jdotfragrances.com/cdn/shop/files/79709699_23843995755110654_4446148169134243840_n.jpg?v=1755001370&width=960",
    isLatest: false
  },
  {
    _id: "m_edp_4",
    name: "Royal One Eleven",
    brand: "Sovereign Scents",
    price: 6800,
    category: "Eau De Perfume",
    gender: "Men",
    countInStock: 11,
    description: "A vibrant spicy matrix of Sri Lankan cinnamon, hot nutmeg oils, and deeply sophisticated rich labdanum resin.",
    image: "https://cdn.riah.ae/storage/upload/images/2024/04/05/660f93fc5e8d8.jpg",
    isLatest: false
  },
  {
    _id: "m_edp_5",
    name: "Vintage Tuscan Leather",
    brand: "Tom Ford",
    price: 8800,
    category: "Eau De Perfume",
    gender: "Men",
    countInStock: 3,
    description: "Raw black suede leather notes masterfully unified with sweet wild raspberries and midnight jasmine petals.",
    image: "https://d3qyz78uf5x6r9.cloudfront.net/public/ACC_26/account/product/888066000161/888066000161_A2.jpeg",
    isLatest: true
  },
  {
    _id: "m_edp_6",
    name: "Balkin Atlas Cedar",
    brand: "Balkin",
    price: 7400,
    category: "Eau De Perfume",
    gender: "Men",
    countInStock: 9,
    description: "A bright projection of high-grade lemon peel oil over an earthy bed of pure patchouli leaves and oak bark.",
    image: "https://faunwalk.com/cdn/shop/files/100ml1_60e37f97-e439-4020-a7bf-1ff5c1f7b948.jpg?v=1776842293&width=1946",
    isLatest: false
  },

  // --- Men: Attar Perfume (6 Products) ---
  {
    _id: "m_ap_1",
    name: "The Oud Story",
    brand: "Sultan Al Oud",
    price: 4800,
    category: "Attar Perfume",
    gender: "Men",
    countInStock: 8,
    description: "Traditional non-alcoholic pure concentrate oil featuring royal Cambodian agarwood, rich saffron strands, and deep amber.",
    image: "https://theoudstory.com/cdn/shop/files/DSC09196_large.jpg?v=1745003191",
    isLatest: true
  },
  {
    _id: "m_ap_2",
    name: "Dehn Al Malki",
    brand: "Surtti Perfumes",
    price: 5500,
    category: "Attar Perfume",
    gender: "Men",
    countInStock: 6,
    description: "Highly aged organic dark Hindi oud distillation mixed seamlessly with heavy black deer musk concentrates.",
    image: "https://surrati.com.pk/cdn/shop/files/Snapinsta.app_421855323_18404141623051943_7383043393513738475_n_1080.jpg?v=1742109812&width=375",
    isLatest: false
  },
  {
    _id: "m_ap_3",
    name: "Mukhallat King",
    brand: "Dar Al Khushboo",
    price: 3800,
    category: "Attar Perfume",
    gender: "Men",
    countInStock: 10,
    description: "A majestic oriental fusion of sharp white musk cubes, sweet rose water drops, and earthy sandalwood extraction.",
    image: "https://darulkhushboo.com/wp-content/uploads/2025/11/1762461432249.png",
    isLatest: false
  },
  {
    _id: "m_ap_4",
    name: "Dars Ruh Khus",
    brand: "Ruh Al Khus",
    price: 4200,
    category: "Attar Perfume",
    gender: "Men",
    countInStock: 5,
    description: "Copper-pot hydro-distilled wild vetiver roots. Gives an unparalleled hyper-cooling damp-earth scent trace.",
    image: "https://m.media-amazon.com/images/I/714dIV22dcL._AC_UF350,350_QL80_.jpg",
    isLatest: false
  },
  {
    _id: "m_ap_5",
    name: "Majestic Shamama",
    brand: "Majestic Fragrances",
    price: 4900,
    category: "Attar Perfume",
    gender: "Men",
    countInStock: 4,
    description: "An ancient complex elixir made by cooking over 40 secret herbs, roots, and spices onto a pure sandalwood oil base.",
    image: "https://www.oraperfumes.pk/cdn/shop/products/8.jpg?v=1656537665",
    isLatest: true
  },
  {
    _id: "m_ap_6",
    name: "Silver & White Musk",
    brand: "Musk Al Mahal",
    price: 3200,
    category: "Attar Perfume",
    gender: "Men",
    countInStock: 15,
    description: "The cleanest high-density silk texture fragrance oil providing a powdery, long-lasting sovereign presence.",
    image: "https://static-01.daraz.pk/p/53111b51927e145fdb3d916214c0dd82.jpg",
    isLatest: false
  },

  // =========================================================================
  // 👗 WOMEN COLLECTION (18 Products)
  // =========================================================================

  // --- Women: Body Spray (6 Products) ---
  {
    _id: "w_bs_1",
    name: "Blossom Acura Mist",
    brand: "Passion Perfumes",
    price: 2400,
    category: "Body Spray",
    gender: "Women",
    countInStock: 0,
    description: "A light, delightful everyday aura composition displaying summer peach pulps, vibrant orchid gardens, and soft cotton musk.",
    image: "https://vkart.pk/wp-content/uploads/2025/08/AC-BM-Blossom.jpg",
    isLatest: false
  },
  {
    _id: "w_bs_2",
    name: "Pink Diamond Glow",
    brand: "Aeropostale",
    price: 2500,
    category: "Body Spray",
    gender: "Women",
    countInStock: 18,
    description: "Glittering top notes of sugary candied strawberries, sparkling champagne bubbles, and soft peony petals.",
    image: "https://m.media-amazon.com/images/I/81ZTSfhyZbL.jpg",
    isLatest: true
  },
  {
    _id: "w_bs_3",
    name: "Vanilla Caramel swirl",
    brand: "Victoria's Secret",
    price: 2650,
    category: "Body Spray",
    gender: "Women",
    countInStock: 12,
    description: "A warm comforting gourmand delight featuring heavy golden caramel syrups and whipped orchid cream.",
    image: "https://cdn.platform.next/common/items/default/default/itemimages/3_4Ratio/product/lge/Y34315s.jpg",
    isLatest: false
  },
  {
    _id: "w_bs_4",
    name: "Serene Violet Lavender",
    brand: "Opio Fragrances",
    price: 2350,
    category: "Body Spray",
    gender: "Women",
    countInStock: 9,
    description: "Calming aura spray focusing heavily on authentic French lavender buds and light powdery soothing iris dust.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScd5gUm2Qp_9vjN534xrsHvnUrbL7i8jcPFg&s",
    isLatest: false
  },
  {
    _id: "w_bs_5",
    name: "Tropical Kissed Passion",
    brand: "Brume Fragrances",
    price: 2450,
    category: "Body Spray",
    gender: "Women",
    countInStock: 22,
    description: "Exotic summer blend packing sweet passionfruit juice, wild raspberries, and green coconut water chunks.",
    image: "https://m.media-amazon.com/images/I/713xYIxCRxL._AC_UF350,350_QL80_.jpg",
    isLatest: false
  },
  {
    _id: "w_bs_6",
    name: "Flore De Paris",
    brand: "Passion Perfumes",
    price: 2600,
    category: "Body Spray",
    gender: "Women",
    countInStock: 11,
    description: "Mysterious dark plums combined with sensuous night-blooming orchids and deep vanilla bean hulls.",
    image: "https://www.acuraperfumes.com/cdn/shop/files/Flore_De_Paris_copy_jpg.jpg?v=1773226663",
    isLatest: false
  },

  // --- Women: Eau De Perfume (6 Products) ---
  {
    _id: "w_edp_1",
    name: "Velvet Rose Vanille",
    brand: "Lafatta Fragrances",
    price: 7200,
    category: "Eau De Perfume",
    gender: "Women",
    countInStock: 4,
    description: "A highly addictive sillage signature blending dark turkish roses with creamy Madagascar vanilla pod extracts.",
    image: "https://www.naazperfumes.com/uploads/products/1652368099.627d22e39dd46.JPG",
    isLatest: true
  },
  {
    _id: "w_edp_2",
    name: "Imperial Rouge Bouquet",
    brand: "Riiffs Perfumes",
    price: 8900,
    category: "Eau De Perfume",
    gender: "Women",
    countInStock: 6,
    description: "High luxury definition. Extravagant blooming red jasmines mixed with blood orange slices and heavy golden amber crystal base.",
    image: "https://uk.riiffsperfumes.com/wp-content/uploads/2026/05/main-image1.webp",
    isLatest: true
  },
  {
    _id: "w_edp_3",
    name: "Jardins De Tubereuse",
    brand: "Zuofung Fragrances",
    price: 7600,
    category: "Eau De Perfume",
    gender: "Women",
    countInStock: 8,
    description: "Hypnotic, dense floral matrix of pure absolute tuberose flowers, creamy gardenias, and white cedar branches.",
    image: "https://m.media-amazon.com/images/I/71f+dykK6gL._AC_UF1000,1000_QL80_.jpg",
    isLatest: false
  },
  {
    _id: "w_edp_4",
    name: "White Oud Resins",
    brand: "Imam Al Oud",
    price: 9500,
    category: "Eau De Perfume",
    gender: "Women",
    countInStock: 3,
    description: "Seductive feminine interpretation of white oud resins sweet-layered with candied praline sugars and damask roses.",
    image: "https://perfumebyalrafay.com/wp-content/uploads/2025/12/white-oudh-store-300x300.jpg",
    isLatest: true
  },
  {
    _id: "w_edp_5",
    name: "Saffron Authentic",
    brand: "Emir Fragrances",
    price: 6900,
    category: "Eau De Perfume",
    gender: "Women",
    countInStock: 10,
    description: "A bright sparkling, effervescent pink grapefruit fluid dancing gracefully on a base of soft satin white musk ribbons.",
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/37/9810883/2.jpg?5502",
    isLatest: false
  },
  {
    _id: "w_edp_6",
    name: "Velvet Orchid Nectar",
    brand: "Orchid Alchemy",
    price: 8200,
    category: "Eau De Perfume",
    gender: "Women",
    countInStock: 5,
    description: "Rich black currant nectars spiked daringly with dark purple orchids, patchouli absolute, and chocolate truffles.",
    image: "https://sdcdn.io/tf/tf_sku_T1X401_2000x2000_1.png?height=700px&width=700px",
    isLatest: false
  },

  // --- Women: Attar Perfume (6 Products) ---
  {
    _id: "w_ap_1",
    name: "Almuattaq Pure Rose",
    brand: "Yumnaz Perfumes",
    price: 4200,
    category: "Attar Perfume",
    gender: "Women",
    countInStock: 10,
    description: "Exquisite pure botanical oil extract with absolute white rose petals, sweet jasmine blossoms, and premium organic white musk.",
    image: "https://www.yumnaz.com/cdn/shop/files/ALMUATTAQ_2b8e98b5-fa3c-4dec-97e5-77266f4e1724.jpg?v=1769697213&width=1445",
    isLatest: true
  },
  {
    _id: "w_ap_2",
    name: "Ruh Gulab",
    brand: "Gulab Al Khus",
    price: 5900,
    category: "Attar Perfume",
    gender: "Women",
    countInStock: 4,
    description: "Pure majestic concentrate requiring thousands of handpicked Kannauj pink roses per single copper-tula drop extraction.",
    image: "https://safeenaperfumes.com/wp-content/uploads/2025/11/Gemini_Generated_Image_nu9t9xnu9t9xnu9t.png",
    isLatest: true
  },
  {
    _id: "w_ap_3",
    name: "Shamama-tul Amber",
    brand: "Qazi Fragrances",
    price: 4600,
    category: "Attar Perfume",
    gender: "Women",
    countInStock: 7,
    description: "A softer aromatic blend of ancient rare herbs steamed precisely over a sweet golden liquid amber and musk platform.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSF3uA48TrFQ0cUox-4VccvngddDTSbvo9HQ&s",
    isLatest: false
  },
  {
    _id: "w_ap_4",
    name: "Mukhallat Jasmine Gold",
    brand: "Mukhallat Al Khus",
    price: 3600,
    category: "Attar Perfume",
    gender: "Women",
    countInStock: 14,
    description: "Heavily dense, honey-like oil concentration of royal Arabian jasmine flowers and rich, bright sweet woody base notes.",
    image: "https://5.imimg.com/data5/ANDROID/Default/2024/9/454756726/US/ZC/CV/226373026/product-jpeg-500x500.jpg",
    isLatest: false
  },
  {
    _id: "w_ap_5",
    name: "Rontyali Mogra",
    brand: "White petal Fragrances",
    price: 3900,
    category: "Attar Perfume",
    gender: "Women",
    countInStock: 9,
    description: "Intoxicating premium pure night jasmine (Mogra) oil extract providing immense projection and deep traditional sillage.",
    image: "https://rontyali.com/wp-content/uploads/2025/12/Mogra-Attar-N05.webp",
    isLatest: false
  },
  {
    _id: "w_ap_6",
    name: "Zafarani Black & Silver",
    brand: "Musk Al Mahal",
    price: 5200,
    category: "Attar Perfume",
    gender: "Women",
    countInStock: 5,
    description: "Premium combination of pure red saffron filaments and gentle deer musk oil base, making an ultra-royal impression.",
    image: "https://muskalmahalpakistan.com/cdn/shop/files/Render_0030_B_S.jpg?v=1759344816&width=2160",
    isLatest: true
  }
];

// 🔥 Modern ES Module Export
export default LuxuryProducts;