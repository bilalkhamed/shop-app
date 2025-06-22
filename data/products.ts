import { Product } from "@/types";

const products: Product[] = [
  {
    id: 1,
    categoryId: 1,
    name: "Smartphone X",
    shortDescription: "The latest and greatest smartphone.",
    longDescription: "Experience the future with the Smartphone X. Featuring a stunning OLED display, a powerful A18 Bionic chip, and a professional-grade camera system. It's the most powerful and intuitive smartphone we've ever made.",
    rating: 4.8,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 1503,
    price: 197.64,
    brand: "Samsung",
    specifications: {
      color: "Black",
      storage: "256GB",
      batteryLifeHours: 21,
      connectivity: "5G",
      weight: '130g'
    }
  },
  {
    id: 2,
    categoryId: 1,
    name: "Noise-Cancelling Headphones",
    shortDescription: "Immerse yourself in sound.",
    longDescription: "These headphones feature industry-leading noise cancellation that intelligently adapts to your environment. Enjoy crystal-clear audio for music, calls, and everything in between. With a comfortable, lightweight design, they're perfect for all-day wear.",
    rating: 4.5,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 3785,
    price: 479.08,
    brand: "Sony",
    specifications: {
      color: "Silver",
      storage: "128GB",
      batteryLifeHours: 26,
      connectivity: "5G",
      weight: '300g'
    }
  },
  {
    id: 3,
    categoryId: 1,
    name: "4K Ultra HD Smart TV",
    shortDescription: "Bring the cinema to your living room.",
    longDescription: "This 65-inch 4K Ultra HD Smart TV delivers breathtaking picture quality and vibrant colors. With built-in streaming apps, you'll have access to all your favorite shows and movies. The sleek, modern design will complement any home decor.",
    rating: 4.7,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 3440,
    price: 351.27,
    brand: "TCL",
    specifications: {
      screenSize: "65 inches",
      resolution: "4K UHD",
      smartFeatures: true,
      weight: '36kg',
      color: 'Silver'
    }
  },
  {
    id: 4,
    categoryId: 1,
    name: "Wireless Charger",
    shortDescription: "Charge your devices with ease.",
    longDescription: "Say goodbye to tangled cables with this sleek and powerful wireless charger. It's compatible with all Qi-enabled devices and provides fast, efficient charging. The non-slip surface ensures your device stays in place.",
    rating: 4.2,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 279,
    price: 204.66,
    brand: "Belkin",
    specifications: {
      color: "Gray",
      weight: "194g"
    }
  },
  {
    id: 5,
    categoryId: 1,
    name: "Portable Bluetooth Speaker",
    shortDescription: "Take your music anywhere.",
    longDescription: "This compact and portable Bluetooth speaker delivers surprisingly powerful sound. It's waterproof and dustproof, making it perfect for outdoor adventures. The long-lasting battery provides up to 12 hours of playtime.",
    rating: 4.6,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 1939,
    price: 76,
    brand: "JBL",
    specifications: {
      color: "White",
      weight: "470g"
    }
  },
  {
    id: 6,
    categoryId: 1,
    name: "Gaming Mouse",
    shortDescription: "Precision and speed for serious gamers.",
    longDescription: "Gain a competitive edge with this high-performance gaming mouse. It features a high-precision optical sensor, customizable buttons, and RGB lighting. The ergonomic design ensures comfort during long gaming sessions.",
    rating: 4.9,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: false,
    reviewCount: 4291,
    price: 175.77,
    brand: "Logitech",
    specifications: {
      color: "Gray",
      weight: "244g"
    }
  },
  {
    id: 7,
    categoryId: 1,
    name: "Smartwatch Series 9",
    shortDescription: "Stay connected and track your fitness.",
    longDescription: "The Smartwatch Series 9 is your ultimate companion for a healthy and connected life. Track your workouts, monitor your health, and stay on top of notifications with this stylish and powerful smartwatch. It's water-resistant and has a long-lasting battery.",
    rating: 4.7,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: false,
    reviewCount: 4842,
    price: 125.5,
    brand: "Apple",
    specifications: {
      color: "Gray",
      weight: "456g"
    }
  },
  {
    id: 8,
    categoryId: 1,
    name: "Laptop Pro",
    shortDescription: "Powerful performance for professionals.",
    longDescription: "The Laptop Pro is designed for professionals who demand the best. It features a powerful M3 chip, a stunning Retina display, and a comfortable keyboard. With all-day battery life, you can work from anywhere.",
    rating: 4.8,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 2679,
    price: 108.21,
    brand: "Dell",
    specifications: {
      processor: "M3",
      ram: "32GB",
      storage: "1TB SSD",
      weight: '1.24kg',
      color: 'Sky Blue'
    }
  },
  {
    id: 9,
    categoryId: 1,
    name: "Digital Camera",
    shortDescription: "Capture life's moments in stunning detail.",
    longDescription: "This digital camera features a 24.2MP sensor and a versatile zoom lens, allowing you to capture stunning photos and videos. The intuitive controls make it easy for beginners, while the advanced features will satisfy experienced photographers.",
    rating: 4.4,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 3824,
    price: 92.93,
    brand: "Nikon",
    specifications: {
      color: "Gray",
      weight: "335g"
    }
  },
  {
    id: 10,
    categoryId: 1,
    name: "E-Reader",
    shortDescription: "Carry your library in one hand.",
    longDescription: "The E-Reader features a high-resolution, glare-free display that reads like real paper, even in direct sunlight. With a long-lasting battery and space for thousands of books, it's the perfect device for book lovers.",
    rating: 4.6,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 507,
    price: 191.52,
    brand: "Amazon",
    specifications: {
      color: "Gray",
      weight: "496g"
    }
  },
  {
    id: 11,
    categoryId: 2,
    name: "Classic T-Shirt",
    shortDescription: "A timeless wardrobe staple.",
    longDescription: "This classic t-shirt is made from soft, breathable cotton for all-day comfort. It features a classic crew neck and a regular fit. Perfect for layering or wearing on its own.",
    rating: 4.3,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 3061,
    price: 245.38,
    brand: "Uniqlo",
    specifications: {
      material: "Cotton",
      color: "Black",
      size: "XL",
      weight: '150g'
    }
  },
  {
    id: 12,
    categoryId: 2,
    name: "Denim Jeans",
    shortDescription: "The perfect pair of jeans.",
    longDescription: "These denim jeans are crafted from high-quality denim with a hint of stretch for comfort. They feature a classic five-pocket design and a slim fit. A versatile addition to any wardrobe.",
    rating: 4.5,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 2680,
    price: 112.56,
    brand: "Levi's",
    specifications: {
      material: "Cotton",
      color: "White",
      size: "S",
      weight: '800g'
    }
  },
  {
    id: 13,
    categoryId: 2,
    name: "Hooded Sweatshirt",
    shortDescription: "Stay warm and comfortable.",
    longDescription: "This hooded sweatshirt is made from a soft fleece fabric for ultimate comfort. It features a drawstring hood, a kangaroo pocket, and ribbed cuffs and hem. Perfect for casual wear.",
    rating: 4.6,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 3479,
    price: 415.47,
    brand: "Generic",
    specifications: {
      material: "Cotton",
      color: "Black",
      size: "S",
      weight: '155g'
    }
  },
  {
    id: 14,
    categoryId: 2,
    name: "Leather Jacket",
    shortDescription: "An iconic and stylish jacket.",
    longDescription: "This classic leather jacket is made from genuine leather for a luxurious feel. It features an asymmetrical zip fastening, zippered cuffs, and multiple pockets. A timeless piece that will never go out of style.",
    rating: 4.8,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 3055,
    price: 310.38,
    brand: "PremiumCo",
    specifications: {
      color: "Black",
      weight: "316g"
    }
  },
  {
    id: 15,
    categoryId: 2,
    name: "Running Shoes",
    shortDescription: "Lightweight and responsive running shoes.",
    longDescription: "These running shoes are designed for comfort and performance. They feature a breathable mesh upper, a cushioned midsole, and a durable rubber outsole. Perfect for your daily run or a session at the gym.",
    rating: 4.7,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: false,
    reviewCount: 2042,
    price: 101.41,
    brand: "Nike",
    specifications: {
      color: "Black",
      weight: "208g"
    }
  },
  {
    id: 16,
    categoryId: 2,
    name: "Summer Dress",
    shortDescription: "A light and breezy summer dress.",
    longDescription: "This beautiful summer dress is made from a lightweight and breathable fabric. It features a floral print, a V-neckline, and a flattering A-line silhouette. Perfect for warm weather.",
    rating: 4.4,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 1627,
    price: 29.2,
    brand: "H&M",
    specifications: {
      material: "Polyester",
      color: "Black",
      size: "M",
      weight: '800g'
    }
  },
  {
    id: 17,
    categoryId: 2,
    name: "Formal Suit",
    shortDescription: "A sharp and sophisticated suit.",
    longDescription: "This formal suit is expertly tailored for a sharp and modern fit. It includes a single-breasted jacket and matching trousers. Made from a high-quality wool blend, it's perfect for business meetings or special occasions.",
    rating: 4.9,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 2613,
    price: 21.44,
    brand: "Massimo Dutti",
    specifications: {
      color: "Black",
      weight: "102g"
    }
  },
  {
    id: 18,
    categoryId: 2,
    name: "Winter Coat",
    shortDescription: "Stay warm in style.",
    longDescription: "This winter coat is designed to keep you warm in the coldest weather. It features a waterproof outer shell, a down-filled insulation, and a faux-fur trimmed hood. Multiple pockets provide ample storage.",
    rating: 4.6,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 2213,
    price: 310.08,
    brand: "PremiumCo",
    specifications: {
      color: "Black",
      weight: "221g"
    }
  },
  {
    id: 19,
    categoryId: 2,
    name: "Beanie Hat",
    shortDescription: "A cozy and stylish beanie.",
    longDescription: "This beanie hat is made from a soft and warm ribbed knit. It features a classic design with a turned-up cuff. A must-have accessory for cold weather.",
    rating: 4.2,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 1017,
    price: 22.35,
    brand: "PremiumCo",
    specifications: {
      color: "White",
      weight: "358g"
    }
  },
  {
    id: 20,
    categoryId: 2,
    name: "Sunglasses",
    shortDescription: "Protect your eyes in style.",
    longDescription: "These sunglasses feature a timeless design with a modern twist. The polarized lenses provide 100% UV protection. The lightweight frame ensures a comfortable fit.",
    rating: 4.5,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 1823,
    price: 437.41,
    brand: "PremiumCo",
    specifications: {
      color: "Black",
      weight: "317g"
    }
  },
  {
    id: 21,
    categoryId: 3,
    name: "Coffee Maker",
    shortDescription: "Brew the perfect cup of coffee.",
    longDescription: "This coffee maker allows you to brew your favorite coffee just the way you like it. It features a programmable timer, a keep-warm function, and a reusable filter. The sleek design will look great on your countertop.",
    rating: 4.4,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: false,
    reviewCount: 3580,
    price: 179.39,
    brand: "PremiumCo",
    specifications: {
      color: "Black",
      weight: "384g"
    }
  },
  {
    id: 22,
    categoryId: 3,
    name: "Blender",
    shortDescription: "Create smoothies, sauces, and more.",
    longDescription: "This powerful blender can handle all your blending needs. It features multiple speeds, a large-capacity jar, and stainless steel blades. The dishwasher-safe parts make cleanup a breeze.",
    rating: 4.6,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 1873,
    price: 89.95,
    brand: "PremiumCo",
    specifications: {
      color: "Black",
      weight: "185g"
    }
  },
  {
    id: 23,
    categoryId: 3,
    name: "Cookware Set",
    shortDescription: "A complete set of pots and pans.",
    longDescription: "This cookware set includes everything you need to cook delicious meals. The non-stick coating ensures easy food release and cleanup. The set is compatible with all stovetops, including induction.",
    rating: 4.7,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 1288,
    price: 551.23,
    brand: "PremiumCo",
    specifications: {
      color: "Black",
      weight: "293g"
    }
  },
  {
    id: 24,
    categoryId: 3,
    name: "Air Fryer",
    shortDescription: "Enjoy crispy food with less oil.",
    longDescription: "This air fryer uses hot air circulation to cook your favorite foods to crispy perfection with little to no oil. It features a digital touchscreen with preset cooking programs. A healthier way to fry.",
    rating: 4.8,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 1209,
    price: 162.85,
    brand: "PremiumCo",
    specifications: {
      color: "Black",
      weight: "335g"
    }
  },
  {
    id: 25,
    categoryId: 3,
    name: "Robot Vacuum",
    shortDescription: "Keep your floors clean without lifting a finger.",
    longDescription: "This robot vacuum intelligently navigates your home, cleaning dirt, dust, and pet hair. It can be controlled via a smartphone app and is compatible with voice assistants. Spend less time cleaning and more time enjoying your home.",
    rating: 4.5,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: false,
    reviewCount: 1458,
    price: 273.77,
    brand: "Generic",
    specifications: {
      color: "White",
      weight: "444g"
    }
  },
  {
    id: 26,
    categoryId: 3,
    name: "Bed Sheet Set",
    shortDescription: "Soft and comfortable bed sheets.",
    longDescription: "This bed sheet set is made from high-quality microfiber for a soft and luxurious feel. The set includes a flat sheet, a fitted sheet, and two pillowcases. The wrinkle-resistant fabric is easy to care for.",
    rating: 4.3,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 3883,
    price: 126.51,
    brand: "PremiumCo",
    specifications: {
      color: "Black",
      weight: "276g"
    }
  },
  {
    id: 27,
    categoryId: 3,
    name: "Standing Desk",
    shortDescription: "Improve your posture and productivity.",
    longDescription: "This adjustable standing desk allows you to easily switch between sitting and standing. The spacious work surface provides plenty of room for your computer and other essentials. A great way to stay active while you work.",
    rating: 4.6,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 1116,
    price: 191.56,
    brand: "PremiumCo",
    specifications: {
      color: "Gray",
      weight: "302g"
    }
  },
  {
    id: 28,
    categoryId: 3,
    name: "Food Storage Containers",
    shortDescription: "Keep your food fresh and organized.",
    longDescription: "This set of food storage containers is perfect for meal prep and leftovers. The airtight lids keep food fresh for longer. The containers are stackable for easy storage and are microwave and dishwasher safe.",
    rating: 4.2,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 3757,
    price: 471.03,
    brand: "Generic",
    specifications: {
      color: "Black",
      weight: "237g"
    }
  },
  {
    id: 29,
    categoryId: 3,
    name: "Electric Kettle",
    shortDescription: "Boil water quickly and safely.",
    longDescription: "This electric kettle boils water faster than a microwave and is safer than a stovetop kettle. It features an automatic shut-off and boil-dry protection. The cordless design makes it easy to pour.",
    rating: 4.5,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 4581,
    price: 124.13,
    brand: "PremiumCo",
    specifications: {
      color: "Black",
      weight: "359g"
    }
  },
  {
    id: 30,
    categoryId: 3,
    name: "Wall Art",
    shortDescription: "Add a touch of style to your walls.",
    longDescription: "This beautiful piece of wall art will add a modern and elegant touch to any room. The high-quality print is on a stretched canvas and is ready to hang. A great way to personalize your space.",
    rating: 4.4,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 201,
    price: 169.4,
    brand: "PremiumCo",
    specifications: {
      color: "Gray",
      weight: "449g"
    }
  },
  {
    id: 31,
    categoryId: 4,
    name: "The Alchemist",
    shortDescription: "A classic novel about following your dreams.",
    longDescription: "'The Alchemist' by Paulo Coelho is an allegorical novel which tells the story of Santiago, an Andalusian shepherd boy who dreams of a treasure at the Egyptian pyramids. His journey teaches us about the importance of following our dreams and listening to our hearts.",
    rating: 4.7,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: false,
    reviewCount: 413,
    price: 77.89,
    brand: "PremiumCo",
    specifications: {
      color: "White",
      weight: "145g"
    }
  },
  {
    id: 32,
    categoryId: 4,
    name: "Sapiens: A Brief History of Humankind",
    shortDescription: "A thought-provoking look at human history.",
    longDescription: "In 'Sapiens,' Dr. Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical breakthroughs of the Cognitive, Agricultural, and Scientific Revolutions. This book will challenge your perceptions of what it means to be human.",
    rating: 4.8,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: false,
    reviewCount: 450,
    price: 534.51,
    brand: "PremiumCo",
    specifications: {
      color: "Gray",
      weight: "167g"
    }
  },
  {
    id: 33,
    categoryId: 4,
    name: "The Lord of the Rings",
    shortDescription: "An epic high-fantasy novel.",
    longDescription: "'The Lord of the Rings' by J.R.R. Tolkien is an epic high-fantasy novel. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written.",
    rating: 4.9,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 4699,
    price: 285.03,
    brand: "PremiumCo",
    specifications: {
      color: "Gray",
      weight: "444g"
    }
  },
  {
    id: 34,
    categoryId: 4,
    name: "To Kill a Mockingbird",
    shortDescription: "A classic of modern American literature.",
    longDescription: "'To Kill a Mockingbird' by Harper Lee is a novel about the seriousness of racism and the innocence of youth. The novel is renowned for its warmth and humor, despite dealing with the serious issues of rape and racial inequality. The book was an immediate success, winning the Pulitzer Prize, and has become a classic of modern American literature.",
    rating: 4.6,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 1680,
    price: 84.41,
    brand: "PremiumCo",
    specifications: {
      color: "Black",
      weight: "420g"
    }
  },
  {
    id: 35,
    categoryId: 4,
    name: "1984",
    shortDescription: "A dystopian novel by George Orwell.",
    longDescription: "Nineteen Eighty-Four, often published as 1984, is a dystopian novel by English writer George Orwell published in June 1949. The novel is set in Airstrip One, formerly Great Britain, a province of the superstate Oceania, whose residents are victims of perpetual war, omnipresent government surveillance, and public manipulation.",
    rating: 4.5,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 657,
    price: 446.91,
    brand: "Generic",
    specifications: {
      color: "Gray",
      weight: "463g"
    }
  },
  {
    id: 36,
    categoryId: 4,
    name: "The Hitchhiker's Guide to the Galaxy",
    shortDescription: "A comedy science fiction series.",
    longDescription: "'The Hitchhiker's Guide to the Galaxy' is a comedy science fiction series created by Douglas Adams. Originally a radio comedy broadcast on BBC Radio 4 in 1978, it was later adapted to other formats, including stage shows, novels, comic books, a 1981 TV series, a 1984 computer game, and 2005 feature film.",
    rating: 4.4,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 2969,
    price: 463.9,
    brand: "PremiumCo",
    specifications: {
      color: "Black",
      weight: "472g"
    }
  },
  {
    id: 37,
    categoryId: 4,
    name: "Pride and Prejudice",
    shortDescription: "A romantic novel by Jane Austen.",
    longDescription: "'Pride and Prejudice' is a romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.",
    rating: 4.6,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 3285,
    price: 586.14,
    brand: "PremiumCo",
    specifications: {
      color: "Gray",
      weight: "184g"
    }
  },
  {
    id: 38,
    categoryId: 4,
    name: "The Great Gatsby",
    shortDescription: "A novel by F. Scott Fitzgerald.",
    longDescription: "'The Great Gatsby' is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former love, Daisy Buchanan.",
    rating: 4.3,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 1398,
    price: 100.8,
    brand: "PremiumCo",
    specifications: {
      color: "Black",
      weight: "446g"
    }
  },
  {
    id: 39,
    categoryId: 4,
    name: "Moby-Dick",
    shortDescription: "A novel by Herman Melville.",
    longDescription: "'Moby-Dick; or, The Whale' is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the giant white sperm whale that on the ship's previous voyage bit off Ahab's leg at the knee.",
    rating: 4.1,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: false,
    reviewCount: 4144,
    price: 110.62,
    brand: "PremiumCo",
    specifications: {
      color: "Gray",
      weight: "449g"
    }
  },
  {
    id: 40,
    categoryId: 4,
    name: "War and Peace",
    shortDescription: "A novel by Leo Tolstoy.",
    longDescription: "'War and Peace' is a novel by the Russian author Leo Tolstoy, first published in its entirety in 1869. It is regarded as one of Tolstoy's finest literary achievements and remains a classic of world literature. The novel chronicles the history of the French invasion of Russia and the impact of the Napoleonic era on Tsarist society through the stories of five Russian aristocratic families.",
    rating: 4.2,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 2210,
    price: 84.2,
    brand: "PremiumCo",
    specifications: {
      color: "White",
      weight: "223g"
    }
  },
  {
    id: 41,
    categoryId: 5,
    name: "Yoga Mat",
    shortDescription: "A comfortable and non-slip yoga mat.",
    longDescription: "This yoga mat provides a comfortable and stable surface for your yoga practice. The non-slip texture ensures a secure grip, and the lightweight design makes it easy to transport. Made from eco-friendly materials.",
    rating: 4.5,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 1261,
    price: 246.29,
    brand: "PremiumCo",
    specifications: {
      color: "White",
      weight: "188g"
    }
  },
  {
    id: 42,
    categoryId: 5,
    name: "Dumbbell Set",
    shortDescription: "A versatile set of dumbbells.",
    longDescription: "This dumbbell set is perfect for a full-body workout. The set includes multiple weight options, allowing you to customize your workout. The non-slip grip ensures a secure hold during your exercises.",
    rating: 4.7,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 4427,
    price: 536.34,
    brand: "PremiumCo",
    specifications: {
      color: "White",
      weight: "498g"
    }
  },
  {
    id: 43,
    categoryId: 5,
    name: "Hiking Backpack",
    shortDescription: "A durable and comfortable backpack.",
    longDescription: "This hiking backpack is designed for comfort and durability on the trail. It features a large main compartment, multiple pockets, and a hydration reservoir sleeve. The padded shoulder straps and back panel provide excellent support.",
    rating: 4.6,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: false,
    reviewCount: 2236,
    price: 373.55,
    brand: "PremiumCo",
    specifications: {
      color: "Black",
      weight: "257g"
    }
  },
  {
    id: 44,
    categoryId: 5,
    name: "Tent",
    shortDescription: "A spacious and easy-to-set-up tent.",
    longDescription: "This tent is perfect for camping trips with family and friends. It's spacious enough to sleep up to four people and is easy to set up and take down. The waterproof material will keep you dry in any weather.",
    rating: 4.4,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 157,
    price: 397.47,
    brand: "PremiumCo",
    specifications: {
      color: "Black",
      weight: "208g"
    }
  },
  {
    id: 45,
    categoryId: 5,
    name: "Bicycle",
    shortDescription: "A versatile and reliable bicycle.",
    longDescription: "This bicycle is perfect for commuting, exercise, or weekend rides. It features a lightweight aluminum frame, a comfortable saddle, and a reliable gear system. The powerful brakes provide excellent stopping power.",
    rating: 4.8,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 3267,
    price: 256.61,
    brand: "Generic",
    specifications: {
      color: "Black",
      weight: "421g"
    }
  },
  {
    id: 46,
    categoryId: 5,
    name: "Fishing Rod",
    shortDescription: "A high-quality fishing rod.",
    longDescription: "This fishing rod is designed for both beginners and experienced anglers. The lightweight and sensitive blank allows you to feel even the slightest bites. The comfortable handle provides a secure grip.",
    rating: 4.3,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 4342,
    price: 351.91,
    brand: "PremiumCo",
    specifications: {
      color: "Gray",
      weight: "407g"
    }
  },
  {
    id: 47,
    categoryId: 5,
    name: "Sleeping Bag",
    shortDescription: "Stay warm and cozy on your camping trips.",
    longDescription: "This sleeping bag is designed to keep you warm and comfortable in a variety of temperatures. The soft lining and synthetic insulation provide excellent warmth. The mummy shape helps to retain heat.",
    rating: 4.5,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 3283,
    price: 53.38,
    brand: "Generic",
    specifications: {
      color: "Gray",
      weight: "299g"
    }
  },
  {
    id: 48,
    categoryId: 5,
    name: "Camping Stove",
    shortDescription: "A compact and powerful camping stove.",
    longDescription: "This camping stove is perfect for cooking delicious meals in the great outdoors. The powerful burner boils water quickly, and the adjustable flame control allows for precise cooking. The compact design makes it easy to pack.",
    rating: 4.6,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 2110,
    price: 36.96,
    brand: "Generic",
    specifications: {
      color: "Gray",
      weight: "443g"
    }
  },
  {
    id: 49,
    categoryId: 5,
    name: "Kayak",
    shortDescription: "Explore the water with this stable and maneuverable kayak.",
    longDescription: "This kayak is perfect for recreational paddling on lakes and rivers. The stable design makes it easy for beginners to use, while the maneuverability will be appreciated by more experienced paddlers. The comfortable seat and adjustable footrests provide a custom fit.",
    rating: 4.7,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 2274,
    price: 72.18,
    brand: "Generic",
    specifications: {
      color: "Black",
      weight: "100g"
    }
  },
  {
    id: 50,
    categoryId: 5,
    name: "Climbing Harness",
    shortDescription: "A safe and comfortable climbing harness.",
    longDescription: "This climbing harness is designed for all-around performance. The adjustable leg loops and waist belt provide a comfortable and secure fit. The durable construction and multiple gear loops make it perfect for sport climbing and mountaineering.",
    rating: 4.8,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 3231,
    price: 192.08,
    brand: "PremiumCo",
    specifications: {
      color: "Black",
      weight: "418g"
    }
  },
  {
    id: 51,
    categoryId: 6,
    name: "Facial Cleanser",
    shortDescription: "A gentle and effective facial cleanser.",
    longDescription: "This facial cleanser gently removes dirt, oil, and makeup without stripping the skin's natural moisture. The formula is suitable for all skin types and leaves your skin feeling clean, soft, and refreshed.",
    rating: 4.4,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 967,
    price: 576.18,
    brand: "PremiumCo",
    specifications: {
      color: "White",
      weight: "409g"
    }
  },
  {
    id: 52,
    categoryId: 6,
    name: "Moisturizer",
    shortDescription: "Hydrate and nourish your skin.",
    longDescription: "This daily moisturizer provides long-lasting hydration to keep your skin feeling soft and supple. The lightweight, non-greasy formula absorbs quickly and is suitable for all skin types. It helps to improve the skin's texture and appearance.",
    rating: 4.6,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 2905,
    price: 542.62,
    brand: "PremiumCo",
    specifications: {
      color: "Black",
      weight: "388g"
    }
  },
  {
    id: 53,
    categoryId: 6,
    name: "Sunscreen",
    shortDescription: "Protect your skin from the sun's harmful rays.",
    longDescription: "This broad-spectrum sunscreen provides SPF 50 protection against UVA and UVB rays. The lightweight, non-greasy formula is water-resistant and suitable for all skin types. It helps to prevent sunburn and reduce the risk of skin cancer.",
    rating: 4.7,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 2014,
    price: 374.7,
    brand: "PremiumCo",
    specifications: {
      color: "White",
      weight: "472g"
    }
  },
  {
    id: 54,
    categoryId: 6,
    name: "Shampoo",
    shortDescription: "Cleanse and nourish your hair.",
    longDescription: "This shampoo is formulated to gently cleanse your hair while providing essential nutrients. It helps to strengthen and repair damaged hair, leaving it feeling soft, smooth, and manageable. Suitable for all hair types.",
    rating: 4.5,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 119,
    price: 313.64,
    brand: "PremiumCo",
    specifications: {
      color: "White",
      weight: "467g"
    }
  },
  {
    id: 55,
    categoryId: 6,
    name: "Conditioner",
    shortDescription: "Hydrate and detangle your hair.",
    longDescription: "This conditioner provides intense hydration to leave your hair feeling soft, smooth, and manageable. It helps to detangle and reduce frizz, leaving your hair looking healthy and shiny. Suitable for all hair types.",
    rating: 4.5,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: false,
    reviewCount: 3048,
    price: 234.35,
    brand: "PremiumCo",
    specifications: {
      color: "White",
      weight: "493g"
    }
  },
  {
    id: 56,
    categoryId: 6,
    name: "Electric Toothbrush",
    shortDescription: "Achieve a superior clean.",
    longDescription: "This electric toothbrush removes more plaque than a manual toothbrush for a healthier mouth. It features multiple brushing modes, a pressure sensor, and a built-in timer to ensure you brush for the recommended two minutes.",
    rating: 4.8,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: false,
    reviewCount: 3594,
    price: 48.49,
    brand: "PremiumCo",
    specifications: {
      color: "Black",
      weight: "427g"
    }
  },
  {
    id: 57,
    categoryId: 6,
    name: "Makeup Foundation",
    shortDescription: "Create a flawless complexion.",
    longDescription: "This makeup foundation provides buildable coverage for a natural-looking finish. The lightweight formula blends seamlessly into the skin and helps to even out skin tone and conceal imperfections. Available in a wide range of shades.",
    rating: 4.3,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 1481,
    price: 351.83,
    brand: "PremiumCo",
    specifications: {
      color: "White",
      weight: "441g"
    }
  },
  {
    id: 58,
    categoryId: 6,
    name: "Mascara",
    shortDescription: "For longer, fuller lashes.",
    longDescription: "This mascara adds volume and length to your lashes for a dramatic look. The clump-free formula is long-lasting and easy to remove. The specially designed brush coats every lash from root to tip.",
    rating: 4.2,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 2906,
    price: 239.37,
    brand: "Generic",
    specifications: {
      color: "Black",
      weight: "244g"
    }
  },
  {
    id: 59,
    categoryId: 6,
    name: "Lipstick",
    shortDescription: "A bold and beautiful lipstick.",
    longDescription: "This lipstick provides rich, vibrant color with a comfortable, long-lasting wear. The creamy formula glides on smoothly and keeps your lips feeling hydrated. Available in a variety of shades and finishes.",
    rating: 4.4,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: false,
    reviewCount: 780,
    price: 40.01,
    brand: "PremiumCo",
    specifications: {
      color: "Black",
      weight: "117g"
    }
  },
  {
    id: 60,
    categoryId: 6,
    name: "Fragrance",
    shortDescription: "A captivating and elegant fragrance.",
    longDescription: "This fragrance features a blend of floral and woody notes to create a captivating and elegant scent. It's perfect for special occasions or everyday wear. The long-lasting formula will keep you smelling great all day.",
    rating: 4.6,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 2099,
    price: 567.37,
    brand: "Generic",
    specifications: {
      color: "Black",
      weight: "499g"
    }
  },
  {
    id: 61,
    categoryId: 7,
    name: "Building Blocks",
    shortDescription: "A classic toy for creative building.",
    longDescription: "This set of building blocks provides endless opportunities for creative play. The colorful blocks are easy for small hands to handle and can be used to build anything your child can imagine. A great toy for developing fine motor skills and spatial reasoning.",
    rating: 4.9,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 3944,
    price: 429.56,
    brand: "PremiumCo",
    specifications: {
      color: "White",
      weight: "145g"
    }
  },
  {
    id: 62,
    categoryId: 7,
    name: "Board Game",
    shortDescription: "A fun and strategic board game.",
    longDescription: "This board game is perfect for family game night. It's a game of strategy and luck that will keep everyone entertained for hours. The game includes a game board, playing pieces, and dice. Suitable for ages 8 and up.",
    rating: 4.7,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 1012,
    price: 246.93,
    brand: "Generic",
    specifications: {
      color: "White",
      weight: "110g"
    }
  },
  {
    id: 63,
    categoryId: 7,
    name: "Puzzle",
    shortDescription: "A challenging and rewarding puzzle.",
    longDescription: "This 1000-piece puzzle features a beautiful and intricate design. It's a great way to relax and challenge your mind. The high-quality pieces fit together perfectly. A fun activity for individuals or families.",
    rating: 4.6,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: false,
    reviewCount: 2255,
    price: 145.71,
    brand: "PremiumCo",
    specifications: {
      ageGroup: "3+",
      material: "Plastic",
      pieces: 159,
      color: 'N/A',
      weight: '300g'
    }
  },
  {
    id: 64,
    categoryId: 7,
    name: "Action Figure",
    shortDescription: "A detailed and articulated action figure.",
    longDescription: "This action figure is a must-have for any collector. It features a detailed sculpt and multiple points of articulation, allowing for a wide range of poses. The figure comes with several accessories.",
    rating: 4.5,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 4811,
    price: 599.42,
    brand: "PremiumCo",
    specifications: {
      color: "Gray",
      weight: "130g"
    }
  },
  {
    id: 65,
    categoryId: 7,
    name: "Doll",
    shortDescription: "A beautiful and stylish doll.",
    longDescription: "This doll features a beautiful and detailed outfit, rooted hair, and multiple points of articulation. She comes with several accessories for imaginative play. A great gift for any doll lover.",
    rating: 4.4,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 1761,
    price: 466.71,
    brand: "Generic",
    specifications: {
      color: "Gray",
      weight: "457g"
    }
  },
  {
    id: 66,
    categoryId: 7,
    name: "Remote Control Car",
    shortDescription: "A fast and fun remote control car.",
    longDescription: "This remote control car is built for speed and performance. The durable construction can handle rough terrain, and the responsive remote control provides precise handling. It's a thrilling toy for kids and adults alike.",
    rating: 4.3,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 2430,
    price: 298.7,
    brand: "PremiumCo",
    specifications: {
      color: "Gray",
      weight: "307g"
    }
  },
  {
    id: 67,
    categoryId: 7,
    name: "Art Set",
    shortDescription: "A complete set for aspiring artists.",
    longDescription: "This art set includes everything you need to create your own masterpieces. It comes with a variety of art supplies, including crayons, markers, colored pencils, and paints. The set is neatly organized in a convenient carrying case.",
    rating: 4.6,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 2785,
    price: 316.27,
    brand: "PremiumCo",
    specifications: {
      color: "Gray",
      weight: "462g"
    }
  },
  {
    id: 68,
    categoryId: 7,
    name: "Science Kit",
    shortDescription: "A fun and educational science kit.",
    longDescription: "This science kit allows you to conduct a variety of fun and educational experiments. It's a great way to learn about science and chemistry in a hands-on way. The kit includes all the necessary materials and instructions.",
    rating: 4.7,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 1799,
    price: 102.34,
    brand: "Generic",
    specifications: {
      color: "Gray",
      weight: "136g"
    }
  },
  {
    id: 69,
    categoryId: 7,
    name: "Musical Instrument",
    shortDescription: "A great first musical instrument.",
    longDescription: "This musical instrument is perfect for beginners. It's easy to learn and play, and it's a great way to introduce children to the world of music. The instrument is made from high-quality materials and has a beautiful sound.",
    rating: 4.5,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 344,
    price: 115.71,
    brand: "Generic",
    specifications: {
      color: "Black",
      weight: "142g"
    }
  },
  {
    id: 70,
    categoryId: 7,
    name: "Stuffed Animal",
    shortDescription: "A soft and cuddly stuffed animal.",
    longDescription: "This stuffed animal is made from ultra-soft plush material, making it perfect for cuddling. It's a great companion for children of all ages. The high-quality construction ensures that it will last for years to come.",
    rating: 4.8,
    imageUrl: "https://i0.wp.com/mikeyarce.com/wp-content/uploads/2021/09/woocommerce-placeholder.png",
    inStock: true,
    reviewCount: 4200,
    price: 8.33,
    brand: "PremiumCo",
    specifications: {
      color: "White",
      weight: "430g"
    }
  }
]

export default products;