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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781622679/blu_yptkqe.webp",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781622810/loreal-paris-021756ol-2_caqbqu.webp",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781622904/Chrome120ml_88cd2dd4-d0f6-4eb4-b4b7-0ea7ff7e0e0d_grande_yqxfjg.webp",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781622992/816PKHpqGxL._AC_UF350_350_QL80__dapytx.jpg",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781623124/713yjol8lkL._AC_UF350_350_QL80__yqs5hd.jpg",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781623203/Broche_Premium_Body_Spray_Stunner_200ml_gnltaj.webp",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781623274/IMG_2442_f3632cb5-47e8-4466-b0e8-ee1480e0f687_splgng.webp",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781623361/bt8exxZ3Y4p2ngVbRKBcMNCY0aA_fssd8j.avif",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781623455/79709699_23843995755110654_4446148169134243840_n_rsno15.webp",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781623523/660f93fc5e8d8_txs0di.jpg",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781623593/888066000161_A2_kwzimr.jpg",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781623663/100ml1_60e37f97-e439-4020-a7bf-1ff5c1f7b948_ulaskl.webp",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781623824/DSC09196_large_st0svg.webp",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781623901/Snapinsta.app_421855323_18404141623051943_7383043393513738475_n_1080_kgcopl.webp",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781623984/1762461432249_k3hvlv.png",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781624051/714dIV22dcL._AC_UF350_350_QL80__o2liln.jpg",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781624120/8_ridgpr.webp",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781624186/53111b51927e145fdb3d916214c0dd82_qv0wva.jpg",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781624262/AC-BM-Blossom_bnj0pz.jpg",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781624325/81ZTSfhyZbL_hdbxt9.jpg",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781624405/Y34315s_rzms79.jpg",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781624477/images_mydh69.jpg",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781624551/713xYIxCRxL._AC_UF350_350_QL80__g4qzxi.jpg",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781624631/Flore_De_Paris_copy_jpg_ybteea.webp",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781624710/1652368099.627d22e39dd46_vazb7f.jpg",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781624789/main-image1_ma3fbc.webp",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781624866/71f_dykK6gL._AC_UF1000_1000_QL80__dzaqvo.jpg",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781624953/white-oudh-store-300x300_jjpylf.jpg",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781625055/2_rodzqz.jpg",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781625129/tf_sku_T1X401_2000x2000_1_xkhmc2.webp",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781625200/ALMUATTAQ_2b8e98b5-fa3c-4dec-97e5-77266f4e1724_r8ka7q.jpg",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781625345/Gemini_Generated_Image_nu9t9xnu9t9xnu9t_myfymb.webp",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781625421/images_1_g2efjy.jpg",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781625496/product-jpeg-500x500_e2wsnn.webp",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781625592/Mogra-Attar-N05_wjkld2.webp",
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
    image: "https://res.cloudinary.com/dasmmiwtb/image/upload/v1781625687/Render_0030_B_S_wjc3le.webp",
    isLatest: true
  }
];

// 🔥 Modern ES Module Export
export default LuxuryProducts;