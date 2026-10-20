/**
 * CHOPS WEB APPLICATION — CORE LOGIC & DATA (app.js)
 * Brand: Connect Nigeria CHOPS
 * Version: 2.0.0 (Discovery-First Marketplace Rework)
 */

// ==========================================================================
// 1. MOCK DATABASE (Restaurants, Menus, Reviews, Dishes)
// ==========================================================================
const CHOPS_DATA = {
  restaurants: [
    {
      id: "rest-1",
      name: "Mama's Kitchen",
      tagline: "Authentic Nigerian Home-Style Delicacies & Coastal Specials",
      cuisine: "Nigerian • Soups & Swallows",
      priceRange: "₦₦",
      rating: 4.9,
      reviewsCount: 312,
      location: "Lekki Phase 1, Lagos",
      city: "Lagos",
      distance: "1.2 km",
      isOpen: true,
      isVerified: true,
      isFeatured: true,
      phone: "+234 803 123 4567",
      whatsapp: "+234 803 123 4567",
      heroImg: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80",
      avatarImg: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&q=80",
      openingHours: {
        "Mon - Fri": "08:00 AM - 10:00 PM",
        "Saturday": "09:00 AM - 11:00 PM",
        "Sunday": "10:00 AM - 09:00 PM"
      },
      tableAvailability: {
        totalCapacity: 65,
        indoorHall: "40 Seats (Air-Conditioned)",
        terrace: "15 Seats (Outdoor Breezeway)",
        privateDining: "10 Seats (VIP Reservation only)",
        reservationNote: "Reservations are confirmed directly with our host via phone call. No in-app reservation fee is required."
      },
      menu: [
        {
          id: "dish-1",
          name: "Signature Smoky Jollof Rice Special",
          category: "Rice & Grains",
          price: 3500,
          description: "Wood-fired party jollof served with fried sweet plantain, crunchy coleslaw, and tender grilled quarter chicken.",
          img: "assets/dishes/jollof_rice.jpg",
          isAvailable: true,
          isTrending: true,
          views: 24650,
          variations: ["With Quarter Chicken (₦3,500)", "With Crispy Fried Fish (₦4,000)", "With Peppered Goat Meat (₦4,800)"],
          addOns: ["Extra Fried Plantain (+₦700)", "Creamy Coleslaw (+₦500)", "Steamed Moi Moi (+₦800)"]
        },
        {
          id: "dish-101",
          name: "Ofada Rice Royal Fiesta (in Banana Leaf)",
          category: "Rice & Grains",
          price: 4800,
          description: "Aromatic unpolished Ofada rice wrapped in natural banana leaves, served with fiery Ayamase designer stew, boiled egg, diced ponmo, and assorted meats.",
          img: "assets/dishes/ofada_rice.jpg",
          isAvailable: true,
          isTrending: true,
          views: 18320,
          variations: ["Standard Assorted Meats (₦4,800)", "With Extra Goat Meat (₦5,500)", "With Jumbo Prawns (₦6,200)"],
          addOns: ["Extra Ayamase Stew (+₦1,200)", "Fried Plantain (+₦700)", "Boiled Egg (+₦400)"]
        },
        {
          id: "dish-102",
          name: "Special Fried Rice & Peppered Turkey",
          category: "Rice & Grains",
          price: 4500,
          description: "Golden basmati fried rice sauteed with sweet corn, carrots, liver cubes, and green peas, served with a colossal spicy peppered turkey wing.",
          img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80",
          isAvailable: true,
          isTrending: false,
          views: 8900,
          variations: ["Giant Peppered Turkey (₦4,500)", "Peppered Chicken Wing (₦4,000)"],
          addOns: ["Coleslaw (+₦500)", "Steamed Moi Moi (+₦800)"]
        },
        {
          id: "dish-103",
          name: "Smoky Village Coconut Rice",
          category: "Rice & Grains",
          price: 3800,
          description: "Traditional coastal rice simmered in fresh coconut cream, dried bonga fish, crayfish, habanero peppers, and served with fried croaker fish.",
          img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
          isAvailable: true,
          isTrending: false,
          views: 6400,
          variations: ["With Fried Croaker Fish (₦3,800)", "With Tender Beef (₦3,600)"],
          addOns: ["Extra Croaker Fish (+₦1,500)", "Fried Dodo (+₦700)"]
        },
        {
          id: "dish-2",
          name: "Pounded Yam & Rich Melon Egusi",
          category: "Soups & Swallows",
          price: 4200,
          description: "Silky hand-pounded yam served with rich melon seed soup, stockfish flakes, cow tripe (shaki), and tender slow-cooked beef.",
          img: "assets/dishes/pounded_yam_egusi.jpg",
          isAvailable: true,
          isTrending: true,
          views: 21900,
          variations: ["Tender Beef & Shaki (₦4,200)", "Fresh Catfish (₦5,200)", "Goat Meat (₦5,000)"],
          addOns: ["Extra Swallow (+₦800)", "Extra Meat Piece (+₦1,200)"]
        },
        {
          id: "dish-3",
          name: "Native Seafood Okro Supreme",
          category: "Soups & Swallows",
          price: 6500,
          description: "Crunchy green okro soup loaded with fresh ocean tiger prawns, blue swimmer crab, sea snails, and dried fish chunks.",
          img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80",
          isAvailable: true,
          isTrending: false,
          views: 14750,
          variations: ["Standard Pot (₦6,500)", "Jumbo Seafood Bowl (₦9,500)"],
          addOns: ["Pounded Yam (+₦800)", "Eba (+₦600)"]
        },
        {
          id: "dish-104",
          name: "Ofe Nsala (Royal White Soup) with Goat Meat",
          category: "Soups & Swallows",
          price: 4800,
          description: "Aromatic Anambra-style white soup delicately seasoned with uziza seeds, utazi leaves, and pounded yam thickener, loaded with fork-tender goat meat.",
          img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
          isAvailable: true,
          isTrending: false,
          views: 9200,
          variations: ["Slow-Braised Goat Meat (₦4,800)", "Fresh Catfish Cut (₦5,200)"],
          addOns: ["Pounded Yam (+₦800)", "Oat Swallow (+₦700)", "Extra Goat Meat (+₦1,500)"]
        },
        {
          id: "dish-105",
          name: "Fisherman Soup (Rivers State Native Pot)",
          category: "Soups & Swallows",
          price: 7500,
          description: "Grand Niger Delta seafood broth simmered with fresh whole catfish, tiger prawns, sea snails, crab clusters, and spicy scent leaves.",
          img: "assets/dishes/fisherman_soup.jpg",
          isAvailable: true,
          isTrending: true,
          views: 15480,
          variations: ["Standard Fisherman Pot (₦7,500)", "Jumbo Royal Basin (₦11,000)"],
          addOns: ["Yellow Garri / Eba (+₦600)", "Pounded Yam (+₦800)", "Extra Jumbo Crab (+₦2,500)"]
        },
        {
          id: "dish-106",
          name: "Rich Delta Banga Soup & Starch",
          category: "Soups & Swallows",
          price: 5200,
          description: "Concentrated palm fruit nectar soup infused with oburunbebe stick, beletete herbs, dried catfish, and cow leg, served alongside authentic Delta yellow starch.",
          img: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=600&q=80",
          isAvailable: true,
          isTrending: false,
          variations: ["Cow Leg & Dry Fish (₦5,200)", "Fresh Catfish (₦5,800)"],
          addOns: ["Delta Yellow Starch (+₦900)", "Pounded Yam (+₦800)"]
        },
        {
          id: "dish-107",
          name: "Calabar Afang Soup Special",
          category: "Soups & Swallows",
          price: 4600,
          description: "Finely shredded Afang (Okazi) and waterleaves simmered in rich palm oil, shelled periwinkles, stockfish, kpomo, and tender beef.",
          img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80",
          isAvailable: true,
          isTrending: false,
          variations: ["Beef & Stockfish (₦4,600)", "Goat Meat & Snail (₦6,000)"],
          addOns: ["Semovita (+₦700)", "Pounded Yam (+₦800)", "Extra Periwinkles (+₦800)"]
        },
        {
          id: "dish-4",
          name: "Peppered Asun Bites",
          category: "Grills & Small Chops",
          price: 3200,
          description: "Slow-roasted spicy goat meat chunks sauteed with habanero peppers, sweet onions, and aromatic local spices.",
          img: "assets/dishes/peppered_asun.jpg",
          isAvailable: true,
          isTrending: true,
          variations: ["Mild Heat (₦3,200)", "Extra Fiery (₦3,200)"],
          addOns: ["Fried Yam Chips (+₦1,000)", "Plantain (+₦700)"]
        },
        {
          id: "dish-108",
          name: "Charcoal Grilled Point & Kill Whole Catfish",
          category: "Grills & Small Chops",
          price: 6800,
          description: "Fresh live catfish slow-grilled over charcoal embers with Mama's hot pepper basting glaze. Served with roasted yam wedges and utazi relish.",
          img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80",
          isAvailable: true,
          isTrending: false,
          variations: ["Medium Catfish (₦6,800)", "Large Jumbo Catfish (₦9,500)"],
          addOns: ["Spicy Roasted Yam Wedges (+₦1,200)", "Fried Sweet Plantain (+₦700)"]
        },
        {
          id: "dish-109",
          name: "Crispy Lagos Small Chops Party Platter",
          category: "Grills & Small Chops",
          price: 3800,
          description: "Party favorites in one basket: 4 crispy spring rolls, 4 minced beef samosas, 6 fluffy golden puff-puff balls, and 4 spicy peppered chicken gizzard skewers.",
          img: "assets/dishes/small_chops.jpg",
          isAvailable: true,
          isTrending: false,
          variations: ["Standard Platter (₦3,800)", "Mega Party Platter (₦6,500)"],
          addOns: ["Extra Puff-Puff (6pcs) (+₦600)", "Sweet Chili Dip (+₦400)"]
        },
        {
          id: "dish-110",
          name: "Sauteed Peppered Giant Snails",
          category: "Grills & Small Chops",
          price: 5500,
          description: "Plump Nigerian land snails washed thoroughly and slow-sauteed in fiery scotch bonnet relish, sweet red onions, and bell peppers.",
          img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
          isAvailable: true,
          isTrending: false,
          variations: ["2 Jumbo Snails (₦5,500)", "4 Jumbo Snails (₦9,800)"],
          addOns: ["Fried Plantain (+₦700)", "Potato Chips (+₦1,000)"]
        },
        {
          id: "dish-111",
          name: "Steamed Leaf Moi-Moi Elewe",
          category: "Sides & Extras",
          price: 1500,
          description: "Freshly peeled honey beans ground with red peppers and crayfish, steamed in natural broad leaves with flaked smoked fish and boiled egg center.",
          img: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600&q=80",
          isAvailable: true,
          isTrending: false,
          variations: ["Standard with Egg & Fish (₦1,500)", "Special with Corned Beef (₦2,000)"],
          addOns: ["Extra Fried Plantain (+₦700)"]
        },
        {
          id: "dish-112",
          name: "Golden Sweet Fried Dodo",
          category: "Sides & Extras",
          price: 1200,
          description: "Thick-cut ripe sweet plantain rounds fried to caramelized golden perfection.",
          img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
          isAvailable: true,
          isTrending: false,
          variations: ["Standard Portion (₦1,200)", "Double Platter (₦2,200)"],
          addOns: ["Spicy Pepper Sauce (+₦400)"]
        },
        {
          id: "dish-113",
          name: "Mama's Signature Chilled Zobo with Ginger",
          category: "Drinks & Refreshments",
          price: 1200,
          description: "Naturally brewed deep crimson hibiscus iced infusion spiced with fresh crushed ginger, cloves, pineapple essence, and mint leaves. No artificial sugars.",
          img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80",
          isAvailable: true,
          isTrending: false,
          variations: ["500ml Chilled Bottle (₦1,200)", "1-Litre Sharing Jug (₦2,200)"],
          addOns: ["Chia Seeds Boost (+₦400)"]
        },
        {
          id: "dish-114",
          name: "Fresh Tapped Palm Wine (Sweet Calabash)",
          category: "Drinks & Refreshments",
          price: 1800,
          description: "Authentic, freshly tapped sweet palm wine delivered cold daily from local tapping groves. Crisp, mildly fizzy, and refreshing.",
          img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&q=80",
          isAvailable: true,
          isTrending: false,
          variations: ["Single Serve Calabash (₦1,800)", "Party Jug (₦4,500)"],
          addOns: []
        }
      ],
      reviews: [
        {
          author: "Chinedu Eze",
          rating: 5,
          date: "Yesterday",
          comment: "Best smoky jollof in Lekki Phase 1! Called them directly and my order was ready for pickup in 18 minutes.",
          reply: "Thank you Chinedu! Our wood-fired jollof is prepared fresh daily. See you again soon!"
        },
        {
          author: "Folake Adeleke",
          rating: 5,
          date: "3 days ago",
          comment: "The seafood okro is unreal. Inquired via chat first, they confirmed the fresh crab was available. Top service!",
          reply: "Glad you enjoyed the fresh catch, Folake! We restock our seafood every morning directly from the coast."
        },
        {
          author: "Amina Bello",
          rating: 5,
          date: "4 days ago",
          comment: "Ordered the Fisherman Soup and yellow eba for a family dinner. The tiger prawns and catfish were massive and swimming in authentic riverine spice. Called the manager directly on +234 803 123 4567 and pickup was seamless!",
          reply: "Thank you so much Amina! Riverine cuisine is our pride."
        },
        {
          author: "Tunde Bakare",
          rating: 5,
          date: "1 week ago",
          comment: "Their Ofada Rice in banana leaf brought back pure nostalgic Lagos party memories. The Ayamase stew has that genuine bleached palm oil kick with generous cowfoot, shaki, and boiled egg. Unmatched flavor.",
          reply: "Appreciate the heartfelt review, Tunde! Mama herself inspects every pot of Ayamase!"
        },
        {
          author: "Ngozi Okonkwo",
          rating: 5,
          date: "1 week ago",
          comment: "I used the in-app chat feature to check if the Ofe Nsala (White Soup) was ready around 12:30 PM. Response was instantaneous! Walked into their Lekki dining hall 20 minutes later and the food was steaming hot. Cleanest kitchen in the area.",
          reply: "Thank you Ngozi! Our team monitors the live chat all day to ensure quick confirmations."
        },
        {
          author: "Emeka Nwosu",
          rating: 4,
          date: "2 weeks ago",
          comment: "The Point & Kill grilled catfish is second to none. Took about 35 minutes because they grill it fresh from the live tank, but the spicy roasted yam and pepper sauce made the wait totally worth it.",
          reply: "Thank you Emeka! Live grilling over charcoal takes time, but good food cannot be rushed. Appreciate your patience!"
        },
        {
          author: "Dr. Simisola Alabi",
          rating: 5,
          date: "2 weeks ago",
          comment: "Hosted a business lunch for 8 partners in their VIP private dining room. The Pounded Yam with Egusi and Goat meat was heavenly. Very polite service and hassle-free phone booking.",
          reply: "It was an absolute pleasure hosting your team, Dr. Simisola! Welcome back anytime."
        },
        {
          author: "Kelechi Amadi",
          rating: 5,
          date: "3 weeks ago",
          comment: "The Asun bites and cold ginger Zobo are our Friday evening ritual after work on Admiralty Way. Spicy, savory, and the Zobo has that real ginger punch.",
          reply: "Friday rituals are sacred! See you this coming Friday, Kelechi!"
        },
        {
          author: "Bolanle Coker",
          rating: 5,
          date: "1 month ago",
          comment: "Ordered small chops and jollof rice party trays for my daughter's birthday celebration. Everything arrived neatly packed, piping hot, and all the guests asked where we ordered from. Mama's Kitchen is my go-to forever.",
          reply: "Happy birthday to your daughter, Bolanle! Thank you for trusting us with your family celebration."
        }
      ]
    },
    {
      id: "rest-2",
      name: "Suya Central & BBQ Grills",
      tagline: "Flame-Kissed Street Flavors & Yaji Masterpieces",
      cuisine: "Suya & Grills • Street Food",
      priceRange: "₦",
      rating: 4.8,
      reviewsCount: 245,
      location: "Ikeja GRA, Lagos",
      city: "Lagos",
      distance: "2.4 km",
      isOpen: true,
      isVerified: true,
      isFeatured: true,
      phone: "+234 802 987 6543",
      whatsapp: "+234 802 987 6543",
      heroImg: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
      avatarImg: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200&q=80",
      openingHours: {
        "Daily": "04:00 PM - 02:00 AM"
      },
      tableAvailability: {
        totalCapacity: 40,
        indoorHall: "Outdoor Open-Air Grill Patio only",
        terrace: "40 Casual Bar Stools",
        privateDining: "None",
        reservationNote: "Walk-ins welcome, or call ahead to book large group grill platters."
      },
      menu: [
        {
          id: "dish-201",
          name: "Charcoal Beef Suya Platter",
          category: "Suya & Grills",
          price: 2500,
          description: "Thinly sliced tender sirloin steak dusted in authentic Kano yaji spice, charred over open wood coals.",
          img: "assets/dishes/beef_suya.jpg",
          isAvailable: true,
          isTrending: true,
          variations: ["Regular Platter (₦2,500)", "Family Mega Box (₦6,500)"],
          addOns: ["Extra Spicy Yaji (+₦300)", "Fresh Onions & Tomatoes (+₦200)", "Masa Rice Cakes (+₦1,000)"]
        },
        {
          id: "dish-202",
          name: "Whole Grilled Spicy Catfish (Point & Kill)",
          category: "Suya & Grills",
          price: 7000,
          description: "Fresh live catfish grilled to perfection with scotch bonnet marinade, served with roasted plantain (boli).",
          img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80",
          isAvailable: true,
          isTrending: true,
          variations: ["Medium Catfish (₦7,000)", "Jumbo Catfish (₦9,500)"],
          addOns: ["Roasted Plantain Boli (+₦800)", "Chips (+₦1,000)"]
        }
      ],
      reviews: [
        {
          author: "Babatunde Alao",
          rating: 5,
          date: "2 days ago",
          comment: "Authentic Kano yaji pepper. The meat is tender without gristle. Always call 30 mins before heading over!"
        }
      ]
    },
    {
      id: "rest-3",
      name: "The Palms Continental & Bistro",
      tagline: "Fine Dining, Seafood & Cocktails",
      cuisine: "Continental • Seafood • Cocktails",
      priceRange: "₦₦₦",
      rating: 4.7,
      reviewsCount: 189,
      location: "Victoria Island, Lagos",
      city: "Lagos",
      distance: "3.8 km",
      isOpen: true,
      isVerified: true,
      isFeatured: false,
      phone: "+234 818 555 7788",
      whatsapp: "+234 818 555 7788",
      heroImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
      avatarImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&q=80",
      openingHours: {
        "Tue - Sun": "12:00 PM - 11:30 PM",
        "Monday": "Closed"
      },
      tableAvailability: {
        totalCapacity: 90,
        indoorHall: "55 Fine Dining Seats",
        terrace: "25 Poolside Lounge Seats",
        privateDining: "10 Executive Board Dining Room",
        reservationNote: "Formal dress code advised. Please call the maitre d' to reserve window or poolside tables."
      },
      menu: [
        {
          id: "dish-301",
          name: "Creamy Garlic Tiger Prawn Tagliatelle",
          category: "Pasta & Mains",
          price: 8500,
          description: "Fresh artisanal pasta tossed in roasted garlic white cream sauce, crowned with jumbo grilled Atlantic tiger prawns.",
          img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80",
          isAvailable: true,
          isTrending: false,
          variations: ["Standard Tagliatelle (₦8,500)", "Gluten-Free Penne (+₦1,000)"],
          addOns: ["Parmesan shavings (+₦600)", "Garlic Bread (+₦1,200)"]
        },
        {
          id: "dish-302",
          name: "Prime Aged Ribeye Steak (300g)",
          category: "Steaks & Grills",
          price: 16500,
          description: "Grass-fed ribeye seared medium-rare, rosemary compound butter, truffle mash, and red wine reduction.",
          img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
          isAvailable: true,
          isTrending: true,
          variations: ["Medium-Rare (₦16,500)", "Medium (₦16,500)", "Well-Done (₦16,500)"],
          addOns: ["Truffle Fries (+₦2,000)", "Creamed Spinach (+₦1,800)"]
        }
      ],
      reviews: [
        {
          author: "Ngozi Obi",
          rating: 5,
          date: "1 week ago",
          comment: "Outstanding ambience for date nights. Their staff responded immediately on in-app chat to clarify wine pairings."
        }
      ]
    },
    {
      id: "rest-4",
      name: "Buka Royale & Swallows",
      tagline: "Heritage Yoruba & Delta Classics",
      cuisine: "Traditional • Yoruba Classics",
      priceRange: "₦",
      rating: 4.6,
      reviewsCount: 178,
      location: "Yaba, Lagos",
      city: "Lagos",
      distance: "4.1 km",
      isOpen: false,
      isVerified: true,
      isFeatured: false,
      phone: "+234 809 333 4455",
      whatsapp: "+234 809 333 4455",
      heroImg: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
      avatarImg: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=80",
      openingHours: {
        "Mon - Sat": "09:00 AM - 07:00 PM",
        "Sunday": "Closed"
      },
      tableAvailability: {
        totalCapacity: 50,
        indoorHall: "50 Buka Benches and Dining Sets",
        terrace: "None",
        privateDining: "None",
        reservationNote: "Casual dining environment. High table turnover, walk-ins always accommodated."
      },
      menu: [
        {
          id: "dish-401",
          name: "Amala Dudu & Gbegiri / Ewedu Combo",
          category: "Soups & Swallows",
          price: 2800,
          description: "Hot fluffy black yam flour swallow bathed in yellow bean stew, fresh ewedu leaf soup, and spicy obe ata.",
          img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
          isAvailable: true,
          isTrending: false,
          variations: ["With Ogunfe / Goat Meat (₦2,800)", "With Roundabout & Shaki (₦2,600)"],
          addOns: ["Extra Amala Wrap (+₦500)", "Ponmo (+₦400)"]
        }
      ],
      reviews: [
        {
          author: "Demola Johnson",
          rating: 4,
          date: "5 days ago",
          comment: "Authentic Ibadan style amala. Piping hot and flavorful. Make sure to check their opening hours, they close by 7pm!"
        }
      ]
    },
    {
      id: "rest-5",
      name: "Mega Bites Bakery & Grills",
      tagline: "Fresh Warm Pastries & Comfort Fast Foods",
      cuisine: "Fast Food • Pastries • Smoothies",
      priceRange: "₦",
      rating: 4.7,
      reviewsCount: 420,
      location: "Wuse II, Abuja",
      city: "Abuja",
      distance: "1.8 km",
      isOpen: true,
      isVerified: true,
      isFeatured: true,
      phone: "+234 814 111 2233",
      whatsapp: "+234 814 111 2233",
      heroImg: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=1200&q=80",
      avatarImg: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=200&q=80",
      openingHours: {
        "Daily": "07:30 AM - 10:30 PM"
      },
      tableAvailability: {
        totalCapacity: 35,
        indoorHall: "25 Cafe Table Seats",
        terrace: "10 Patio Garden Seats",
        privateDining: "None",
        reservationNote: "Fast-casual cafe. Table reservations not required."
      },
      menu: [
        {
          id: "dish-501",
          name: "Crispy Golden Chicken & Chips Box",
          category: "Fast Food",
          price: 3200,
          description: "2 pieces of southern style seasoned fried chicken, seasoned crinkle-cut fries, and signature sweet-tangy dip.",
          img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80",
          isAvailable: true,
          isTrending: true,
          variations: ["2 Pcs Chicken (₦3,200)", "4 Pcs Mega Box (₦5,800)"],
          addOns: ["Coleslaw (+₦500)", "Cheese sauce (+₦600)"]
        },
        {
          id: "dish-502",
          name: "Fresh Tropical Mango & Pineapple Smoothie",
          category: "Drinks",
          price: 1800,
          description: "100% natural cold-pressed Nigerian mango, sweet pineapple, and crushed ice. No added sugar.",
          img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&q=80",
          isAvailable: true,
          isTrending: false,
          variations: ["500ml Bottle (₦1,800)", "1 Litre Jug (₦3,200)"],
          addOns: ["Chia seeds (+₦300)"]
        }
      ],
      reviews: [
        {
          author: "Zainab Ahmed",
          rating: 5,
          date: "Yesterday",
          comment: "Best chicken in Wuse 2. The meat pies are always freshly baked in the morning."
        }
      ]
    }
  ],
  offers: [
    {
      id: "offer-1",
      restaurantId: "rest-1",
      restaurantName: "Mama's Kitchen",
      restaurantLocation: "Lekki Phase 1, Lagos",
      badge: "20% OFF",
      badgeType: "discount",
      title: "Mama's Royal Feast Combo",
      highlight: "20% Off All Native Soups & Swallows",
      description: "Order any 2 soup bowls (Melon Egusi, Native Okro, Fisherman Soup, or Ofe Nsala) and get 20% off plus 2 complimentary chilled ginger Zobos.",
      code: "MAMAFEAST20",
      validity: "Mon – Thu Special",
      terms: "Min. order ₦8,000 • Dine-in & Phone Pickup",
      expiry: "3 Days Left",
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80"
    },
    {
      id: "offer-2",
      restaurantId: "rest-2",
      restaurantName: "Suya Central & BBQ Grills",
      restaurantLocation: "Ikeja GRA, Lagos",
      badge: "FREE DRINK COMBO",
      badgeType: "combo",
      title: "Weekend Charcoal Suya Bash",
      highlight: "Free Calabash Palm Wine or Zobo",
      description: "Order any Mega Beef Suya Platter or Whole Grilled Catfish and receive a complimentary chilled 500ml fresh palm wine or spiced zobo.",
      code: "SUYABASH",
      validity: "Fri – Sun from 4 PM",
      terms: "With Mega Platter • Mention code on call",
      expiry: "This Weekend Only",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80"
    },
    {
      id: "offer-3",
      restaurantId: "rest-3",
      restaurantName: "The Palms Continental & Bistro",
      restaurantLocation: "Victoria Island, Lagos",
      badge: "SAVE ₦3,500",
      badgeType: "savings",
      title: "Date Night Bistro Duo",
      highlight: "₦3,500 Off Prime Ribeye & Seafood",
      description: "Save ₦3,500 when you reserve an evening dining table for two and order 2 signature main courses. Complimentary garlic bread included.",
      code: "PALMSDUO",
      validity: "Tue – Sun • Table Dining & Pre-order",
      terms: "Dinner reservations • 2 Mains minimum",
      expiry: "First 30 Diners",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80"
    },
    {
      id: "offer-4",
      restaurantId: "rest-4",
      restaurantName: "Buka Royale & Swallows",
      restaurantLocation: "Yaba, Lagos",
      badge: "15% GROUP OFF",
      badgeType: "group",
      title: "Corporate Amala Lunch Tray",
      highlight: "15% Off Group Orders (4+ Packs)",
      description: "Feed your office squad with fluffy hot Amala Dudu, rich Gbegiri & Ewedu, and tender goat meat. Instant 15% discount on 4+ portions.",
      code: "BUKATEAM",
      validity: "Mon – Fri • 11:30 AM – 3:30 PM",
      terms: "4+ meals ordered • Direct phone or chat pickup",
      expiry: "Active Workplace Promo",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
    },
    {
      id: "offer-5",
      restaurantId: "rest-5",
      restaurantName: "Crust & Co. Artisan Bakery & Café",
      restaurantLocation: "Wuse 2, Abuja",
      badge: "BUY 1 GET 50% OFF",
      badgeType: "bogo",
      title: "Morning Fuel Pastry & Smoothie Duo",
      highlight: "50% Off 2nd Fresh Smoothie",
      description: "Order any fresh breakfast pastry or crispy chicken box and get your second natural tropical smoothie at half price.",
      code: "CRUST50",
      validity: "Daily • 7:30 AM – 11:00 AM",
      terms: "Breakfast hours • Mention code to barista",
      expiry: "Morning Special",
      img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&q=80"
    }
  ]
};

// ==========================================================================
// 2. APPLICATION STATE
// ==========================================================================
const AppState = {
  currentRole: 'customer', // 'customer' | 'merchant'
  activeView: 'marketplace', // 'marketplace' | 'profile' | 'merchant-dashboard'
  currentRestaurantId: 'rest-1',
  selectedLocation: 'All Locations',
  selectedCategory: 'All',
  searchQuery: '',
  filters: {
    openNow: false,
    topRated: false,
    verifiedOnly: false
  },
  favourites: new Set(['rest-1']),
  activeChatPartner: null, // restaurant object
  chatHistory: {
    'rest-1': [
      { sender: 'merchant', text: "Hello! Welcome to Mama's Kitchen. Would you like to check out today's specials or place a pickup order?", time: "10:14 AM" }
    ],
    'rest-2': [
      { sender: 'merchant', text: "Greetings from Suya Central! Our fresh charcoal grill fires up daily. Let us know what cuts you need.", time: "11:20 AM" }
    ]
  },
  // User Authentication State
  user: {
    isLoggedIn: false,
    name: 'Bolanle Adeleke',
    email: 'bolanle@connectnigeria.com',
    phone: '+234 803 555 0199',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
    address: '14 Admiralty Way, Lekki Phase 1, Lagos'
  },
  // Merchant Dashboard State (Simulated logged-in restaurant)
  merchantStore: null
};

// Initialize default merchant store as Mama's Kitchen
AppState.merchantStore = CHOPS_DATA.restaurants[0];

// ==========================================================================
// 3. UI INITIALIZATION & EVENT LISTENERS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initAuth();
  renderMarketplace();
  setupEventListeners();
  updateFavouritesBadge();
});

function initTheme() {
  const savedTheme = localStorage.getItem('chops-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
  const iconBtn = document.getElementById('theme-toggle-btn');
  if (!iconBtn) return;
  iconBtn.innerHTML = theme === 'dark'
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('chops-theme', next);
  updateThemeIcon(next);
  showToast(`Switched to ${next} mode`);
}

// ==========================================================================
// 4. RENDERING FUNCTIONS
// ==========================================================================

function renderMarketplace() {
  const gridContainer = document.getElementById('restaurants-grid-container');
  const trendingContainer = document.getElementById('trending-dishes-grid');
  if (!gridContainer) return;

  // 1. Filter restaurants
  let list = CHOPS_DATA.restaurants.filter(r => {
    // Search query match
    if (AppState.searchQuery) {
      const q = AppState.searchQuery.toLowerCase();
      const matchName = r.name.toLowerCase().includes(q);
      const matchCuisine = r.cuisine.toLowerCase().includes(q);
      const matchDish = r.menu.some(d => d.name.toLowerCase().includes(q) || d.description.toLowerCase().includes(q));
      if (!matchName && !matchCuisine && !matchDish) return false;
    }
    // Location match
    if (AppState.selectedLocation &&
      AppState.selectedLocation !== 'All Locations' &&
      AppState.selectedLocation.toLowerCase() !== 'near me' &&
      AppState.selectedLocation.trim() !== '') {
      const loc = AppState.selectedLocation.toLowerCase();
      const matchLoc = r.location.toLowerCase().includes(loc);
      const matchCity = r.city.toLowerCase().includes(loc);
      if (!matchLoc && !matchCity) {
        return false;
      }
    }
    // Category match
    if (AppState.selectedCategory && AppState.selectedCategory !== 'All') {
      const cat = AppState.selectedCategory.toLowerCase();
      const matchCuisine = r.cuisine.toLowerCase().includes(cat);
      const matchDish = r.menu.some(d => d.category.toLowerCase().includes(cat));
      if (!matchCuisine && !matchDish) return false;
    }
    // Quick filters
    if (AppState.filters.openNow && !r.isOpen) return false;
    if (AppState.filters.topRated && r.rating < 4.8) return false;
    if (AppState.filters.verifiedOnly && !r.isVerified) return false;

    return true;
  });

  // Update count text
  const countEl = document.getElementById('results-count-text');
  if (countEl) {
    if (AppState.selectedLocation &&
      AppState.selectedLocation !== 'All Locations' &&
      AppState.selectedLocation.toLowerCase() !== 'near me' &&
      AppState.selectedLocation.trim() !== '') {
      countEl.innerText = `Showing ${list.length} verified food spot${list.length === 1 ? '' : 's'} near "${AppState.selectedLocation}"`;
    } else {
      countEl.innerText = `Showing ${list.length} verified food spot${list.length === 1 ? '' : 's'}`;
    }
  }

  // Render Restaurants
  if (list.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: var(--color-bg-surface); border-radius: var(--radius-lg); border: 1px dashed var(--color-border-strong);">
        <p style="font-size: 18px; font-weight: 700; color: var(--color-text-primary); margin-bottom: 8px;">No restaurants found</p>
        <p style="font-size: 14px; color: var(--color-text-muted); margin-bottom: 16px;">Try adjusting your filters or search keywords.</p>
        <button class="btn btn-secondary btn-sm" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
  } else {
    gridContainer.innerHTML = list.map(r => {
      const isFav = AppState.favourites.has(r.id);
      return `
        <article class="restaurant-card" id="card-${r.id}" style="cursor: pointer;" onclick="openRestaurantProfile('${r.id}')">
          <div class="card-media">
            <img src="${r.heroImg}" alt="${r.name}" loading="lazy">
            <div class="media-badges">
              <span class="badge ${r.isOpen ? 'badge-open' : 'badge-closed'}">
                ${r.isOpen ? '● Open Now' : '○ Closed'}
              </span>
              ${r.isFeatured ? '<span class="badge badge-featured"><i class="uil uil-star" style="margin-right: 3px;"></i> Featured</span>' : ''}
            </div>
            <button class="favourite-toggle-btn ${isFav ? 'is-fav' : ''}" onclick="toggleFavourite('${r.id}', event)" aria-label="Save to Favourites" title="Save to Favourites">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
          </div>
          <div class="card-content">
            <div class="card-header-line">
              <h3 class="restaurant-name">${r.name}</h3>
              <div class="rating-badge">
                <span class="rating-star"><i class="uil uil-star"></i></span>
                <span>${r.rating}</span>
                <span style="opacity: 0.7; font-weight: 400;">(${r.reviewsCount})</span>
              </div>
            </div>
            <div class="card-meta-line">${r.cuisine} • ${r.priceRange} • ${r.distance}</div>
            <div class="verified-merchant-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-2 16l-4-4 1.41-1.41L10 15.17l6.59-6.59L18 10l-8 8z"/></svg>
              Confirmed Merchant
            </div>
            <p style="font-size: 12px; color: var(--color-text-secondary); margin-bottom: 14px;"><i class="uil uil-map-marker" style="color: var(--cn-green-600); margin-right: 2px;"></i> ${r.location}</p>
            <div class="card-actions-row">
              <button class="btn btn-secondary btn-sm" onclick="callMerchant('${r.id}', event)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call
              </button>
              <button class="btn btn-primary btn-sm" onclick="openRestaurantProfile('${r.id}')">
                View Menu →
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

function formatViews(views) {
  if (views === undefined || views === null) return '12.4k';
  if (typeof views === 'string') return views;
  if (views >= 1000000) return (views / 1000000).toFixed(1) + 'M';
  if (views >= 1000) return (views / 1000).toFixed(1) + 'k';
  return views.toLocaleString();
}

function getDishViews(dish) {
  if (dish && dish.views) return dish.views;
  let hash = 0;
  const str = (dish && (dish.id || dish.name)) || 'dish';
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  const base = Math.abs(hash) % 18500 + 5200;
  if (dish) dish.views = base;
  return base;
}

  // 2. Render Trending Dishes
  if (trendingContainer) {
    const trendingList = [];
    CHOPS_DATA.restaurants.forEach(r => {
      r.menu.forEach(d => {
        if (d.isTrending) {
          trendingList.push({ dish: d, restaurant: r });
        }
      });
    });

    trendingContainer.innerHTML = trendingList.slice(0, 4).map(({ dish, restaurant }) => {
      const viewsCount = getDishViews(dish);
      const formattedViews = formatViews(viewsCount);
      return `
        <div class="dish-card">
          <div class="dish-thumb">
            <img src="${dish.img}" alt="${dish.name}" loading="lazy">
            <div class="dish-views-tag" title="${viewsCount.toLocaleString()} food lovers viewed this dish this week">
              <i class="uil uil-eye"></i>
              <span>${formattedViews} views</span>
            </div>
            <div class="dish-trending-tag">
              <i class="uil uil-fire"></i> Trending
            </div>
            <div class="dish-price-tag">₦${dish.price.toLocaleString()}</div>
          </div>
          <div class="dish-info">
            <div class="dish-meta-stats">
              <span class="dish-views-stat" title="Total views this week">
                <i class="uil uil-eye"></i> <strong>${formattedViews}</strong> views
              </span>
              <span class="dish-trending-rank">
                <i class="uil uil-fire"></i> Popular Pick
              </span>
            </div>
            <h4 class="dish-title">${dish.name}</h4>
            <div class="dish-restaurant-name">
              at <button type="button" class="dish-restaurant-link" onclick="openRestaurantProfile('${restaurant.id}')" title="View ${restaurant.name}'s menu and profile">
                <strong>${restaurant.name}</strong>
              </button> • <span>${restaurant.location}</span>
            </div>
            <p class="dish-desc">${dish.description}</p>
            <button class="btn btn-outline-green btn-sm dish-cta-btn" onclick="inquireDish('${restaurant.id}', '${dish.name}', ${dish.price})">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Order / Inquire via Chat
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // 3. Render Exclusive Offers & Deals
  const offersContainer = document.getElementById('offers-grid-container');
  if (offersContainer && CHOPS_DATA.offers) {
    offersContainer.innerHTML = CHOPS_DATA.offers.map(offer => `
      <article class="offer-card">
        <div class="offer-media">
          <img src="${offer.img}" alt="${offer.title}" loading="lazy">
          <div class="offer-badge offer-badge-${offer.badgeType}">
            ${offer.badge}
          </div>
          <div class="offer-expiry-pill">
            <i class="uil uil-clock-three"></i> ${offer.expiry}
          </div>
        </div>
        <div class="offer-content">
          <div class="offer-merchant-line">
            <i class="uil uil-shop" style="color: var(--cn-green-600);"></i>
            <button type="button" class="offer-merchant-link" onclick="openRestaurantProfile('${offer.restaurantId}')" title="View ${offer.restaurantName}'s menu and profile">
              <strong>${offer.restaurantName}</strong>
            </button>
            <span>• ${offer.restaurantLocation}</span>
          </div>
          <h3 class="offer-title">${offer.title}</h3>
          <div class="offer-highlight">
            <i class="uil uil-bolt"></i> ${offer.highlight}
          </div>
          <p class="offer-desc">${offer.description}</p>

          <div class="offer-promo-box">
            <div class="offer-code-group">
              <span class="offer-code-label">Promo Code:</span>
              <span class="offer-code-val">${offer.code}</span>
            </div>
            <button type="button" class="offer-copy-btn" onclick="copyOfferCode('${offer.code}', this, event)" title="Copy promo code to clipboard">
              <i class="uil uil-copy"></i> Copy
            </button>
          </div>

          <div class="offer-terms-line">
            <i class="uil uil-calendar-alt" style="color: var(--cn-yellow-normal);"></i>
            <span>${offer.validity} • ${offer.terms}</span>
          </div>

          <div class="offer-actions-row">
            <button class="btn btn-primary btn-sm" style="flex: 1;" onclick="claimOfferViaChat('${offer.restaurantId}', '${offer.title.replace(/'/g, "\\'")}', '${offer.code}', event)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Claim via Chat
            </button>
            <button class="btn btn-secondary btn-sm" onclick="callMerchant('${offer.restaurantId}', event)" title="Call restaurant host">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }
}

function copyOfferCode(code, btn, event) {
  if (event && event.stopPropagation) event.stopPropagation();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).catch(() => {});
  }
  if (btn) {
    const originalText = btn.innerHTML;
    btn.classList.add('copied');
    btn.innerHTML = `<i class="uil uil-check"></i> Copied!`;
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = originalText;
    }, 2000);
  }
  showToast(`Copied promo code "${code}" to clipboard!`);
}

function claimOfferViaChat(restaurantId, offerTitle, code, event) {
  if (event && event.stopPropagation) event.stopPropagation();
  const r = CHOPS_DATA.restaurants.find(item => item.id === restaurantId);
  if (!r) return;
  const inquiryText = `Hi ${r.name}! I would like to claim the "${offerTitle}" offer with promo code [${code}]. Can you confirm availability and process my order?`;
  openChatWithRestaurant(restaurantId, inquiryText);
  showToast(`Inquired about "${offerTitle}" with ${r.name}`);
}

// ==========================================================================
// 5. RESTAURANT DETAIL & MENU VIEW
// ==========================================================================
function openRestaurantProfile(restaurantId) {
  const r = CHOPS_DATA.restaurants.find(item => item.id === restaurantId);
  if (!r) return;

  AppState.currentRestaurantId = restaurantId;
  AppState.activeView = 'profile';

  // Toggle DOM views
  document.getElementById('marketplace-view').style.display = 'none';
  document.getElementById('merchant-portal-view').style.display = 'none';
  const chatView = document.getElementById('chat-view');
  if (chatView) chatView.style.display = 'none';
  const navChatBtn = document.getElementById('nav-chat-btn');
  if (navChatBtn) navChatBtn.classList.remove('is-active');
  const profileView = document.getElementById('profile-view');
  profileView.style.display = 'block';

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Render Profile Header
  const isFav = AppState.favourites.has(r.id);
  const profileHeaderEl = document.getElementById('profile-header-container');
  profileHeaderEl.innerHTML = `
    <div class="profile-hero-banner">
      <img src="${r.heroImg}" alt="${r.name}" class="profile-hero-img">
      <div class="profile-hero-overlay">
        <div class="profile-top-bar">
          <button class="back-btn" onclick="backToMarketplace()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to Explore
          </button>
          <button class="favourite-toggle-btn ${isFav ? 'is-fav' : ''}" onclick="toggleFavourite('${r.id}', event)" title="Save to Favourites">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
        </div>
        <div style="display: flex; gap: 8px; margin-bottom: 8px;">
          <span class="badge ${r.isOpen ? 'badge-open' : 'badge-closed'}">
            ${r.isOpen ? '● Open Now' : '○ Closed'}
          </span>
          <span class="verified-merchant-tag" style="margin-bottom: 0;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-2 16l-4-4 1.41-1.41L10 15.17l6.59-6.59L18 10l-8 8z"/></svg>
            Confirmed Merchant
          </span>
        </div>
        <h1 class="profile-title-header">${r.name}</h1>
        <div class="profile-meta-tags">
          <span><i class="uil uil-star" style="color: var(--cn-yellow-normal); margin-right: 2px;"></i> <strong>${r.rating}</strong> (${r.reviewsCount} reviews)</span>
          <span>•</span>
          <span>${r.cuisine}</span>
          <span>•</span>
          <span><i class="uil uil-map-marker" style="color: var(--cn-green-600); margin-right: 2px;"></i> ${r.location}</span>
          <span>•</span>
          <span><i class="uil uil-clock" style="margin-right: 2px;"></i> ${r.distance} away</span>
        </div>
        <div class="profile-actions-bar">
          <button class="btn btn-primary btn-lg" onclick="callMerchant('${r.id}', event)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Merchant (${r.phone})
          </button>
          <button class="btn btn-secondary btn-lg" onclick="openChatWithRestaurant('${r.id}')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Chat to Order
          </button>
        </div>
      </div>
    </div>
  `;

  // Render Tabs
  renderProfileMenuTab(r);
  renderProfileReviewsTab(r);
  renderProfilePhotosTab(r);
  renderProfileAboutTab(r);
  renderProfileTableTab(r);

  // Switch to Menu Tab by default
  switchDetailTab('menu');
}

let isManualTabScroll = false;

function switchDetailTab(tabName) {
  isManualTabScroll = true;
  const targetEl = document.getElementById(`tab-${tabName}`);
  if (targetEl) {
    targetEl.scrollIntoView({ behavior: 'smooth' });
  }

  document.querySelectorAll('.detail-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  const tabsHeader = document.getElementById('detail-tabs-header');
  const activeBtn = document.querySelector(`.detail-tab-btn[data-tab="${tabName}"]`);
  if (tabsHeader && activeBtn) {
    const targetScroll = activeBtn.offsetLeft - (tabsHeader.clientWidth / 2) + (activeBtn.clientWidth / 2);
    tabsHeader.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
  }

  setTimeout(() => {
    isManualTabScroll = false;
  }, 750);
}

function renderProfileMenuTab(r) {
  const container = document.getElementById('tab-menu');
  if (!container) return;

  // Group dishes by category
  const categories = {};
  r.menu.forEach(dish => {
    if (!categories[dish.category]) categories[dish.category] = [];
    categories[dish.category].push(dish);
  });

  let html = `
    <div style="background: var(--cn-green-50); border: 1px solid var(--cn-green-300); border-radius: var(--radius-md); padding: 12px 18px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
      <div>
        <strong style="color: var(--cn-green-900); font-size: 14px;">Direct Contact Ordering:</strong>
        <p style="font-size: 13px; color: var(--cn-green-900); margin: 0;">In-app checkout is replaced with direct contact. Tap <strong>Call</strong> or <strong>Chat to Order</strong> on any dish to place your order with the restaurant!</p>
      </div>
      <button class="btn btn-primary btn-sm" onclick="callMerchant('${r.id}')">Call: ${r.phone}</button>
    </div>
  `;

  for (const [catName, dishes] of Object.entries(categories)) {
    html += `
      <section class="menu-category-section">
        <h3 class="menu-category-title">${catName}</h3>
        <div class="menu-dishes-grid">
          ${dishes.map(dish => `
            <div class="menu-dish-item">
              <img src="${dish.img}" alt="${dish.name}" class="menu-dish-img" loading="lazy">
              <div class="menu-dish-details">
                <h4 class="menu-dish-name">
                  ${dish.name}
                  ${dish.isTrending ? `<span class="menu-dish-views-pill" title="${getDishViews(dish).toLocaleString()} diners viewed this week"><i class="uil uil-eye"></i> ${formatViews(getDishViews(dish))} views</span>` : ''}
                </h4>
                <p class="menu-dish-desc">${dish.description}</p>
                ${dish.variations ? `<div style="font-size: 11px; color: var(--color-text-muted); margin-bottom: 4px;"><strong>Options:</strong> ${dish.variations.join(' • ')}</div>` : ''}
                <div class="menu-dish-price-row">
                  <div class="menu-dish-price">₦${dish.price.toLocaleString()}</div>
                  <button class="btn btn-primary btn-sm" onclick="inquireDish('${r.id}', '${dish.name}', ${dish.price})">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    Chat to Order
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  container.innerHTML = html;
}

function renderProfileReviewsTab(r) {
  const container = document.getElementById('tab-reviews');
  if (!container) return;

  container.innerHTML = `
    <div class="detail-section-title-bar">
      <h2 class="detail-section-heading">Ratings & Reviews</h2>
      <span style="font-size: 13px; color: var(--color-text-muted);">${r.reviewsCount} verified diner reviews</span>
    </div>

    <div class="reviews-summary-card">
      <div class="rating-score-box">
        <div class="rating-huge-num">${r.rating}</div>
        <div style="color: var(--cn-yellow-normal); font-size: 18px; margin: 4px 0;"><i class="uil uil-star"></i><i class="uil uil-star"></i><i class="uil uil-star"></i><i class="uil uil-star"></i><i class="uil uil-star"></i></div>
        <div style="font-size: 13px; color: var(--color-text-muted);">${r.reviewsCount} customer reviews</div>
      </div>
      <div style="flex: 1; min-width: 260px;">
        <div style="font-size: 14px; font-weight: 700; margin-bottom: 8px;">Community Experience Score</div>
        <div style="display: flex; flex-direction: column; gap: 6px; font-size: 12px; color: var(--color-text-secondary);">
          <div>Food Quality & Freshness: <strong>4.9 / 5.0</strong></div>
          <div>Speed & Preparation: <strong>4.8 / 5.0</strong></div>
          <div>Hospitality & Customer Care: <strong>4.9 / 5.0</strong></div>
        </div>
      </div>
      <button class="btn btn-primary" onclick="openWriteReviewModal()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        Write a Review
      </button>
    </div>

    <div class="reviews-list">
      ${r.reviews.map(rev => `
        <div class="review-item">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <div style="font-weight: 700; font-size: 14px; color: var(--color-text-primary);">${rev.author}</div>
            <div style="font-size: 12px; color: var(--color-text-muted);">${rev.date}</div>
          </div>
          <div style="color: var(--cn-yellow-normal); font-size: 13px; margin-bottom: 8px;">${'<i class="uil uil-star"></i>'.repeat(rev.rating)}</div>
          <p style="font-size: 13px; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">${rev.comment}</p>
          ${rev.reply ? `
            <div style="margin-top: 12px; background: var(--color-bg-surface-sunken); border-left: 3px solid var(--cn-green-500); padding: 10px 14px; border-radius: var(--radius-sm); font-size: 12px;">
              <div style="font-weight: 700; color: var(--cn-green-700); margin-bottom: 3px; display: flex; align-items: center; gap: 4px;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-2 16l-4-4 1.41-1.41L10 15.17l6.59-6.59L18 10l-8 8z"/></svg>
                Response from ${r.name}
              </div>
              <p style="margin: 0; color: var(--color-text-secondary); line-height: 1.4;">${rev.reply}</p>
            </div>
          ` : ''}
        </div>
      `).join('')}
    </div>
  `;
}

function renderProfilePhotosTab(r) {
  const container = document.getElementById('tab-photos');
  if (!container) return;

  const photos = [
    r.heroImg,
    ...r.menu.map(d => d.img),
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80"
  ];

  container.innerHTML = `
    <div class="detail-section-title-bar">
      <h2 class="detail-section-heading">Photo Gallery</h2>
      <span style="font-size: 13px; color: var(--color-text-muted);">Atmosphere, kitchen & signature plating</span>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px;">
      ${photos.map((src, idx) => `
        <div style="border-radius: var(--radius-lg); overflow: hidden; height: 180px; box-shadow: var(--elevation-xs);">
          <img src="${src}" alt="Photo ${idx + 1}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
        </div>
      `).join('')}
    </div>
  `;
}

function renderProfileAboutTab(r) {
  const container = document.getElementById('tab-about');
  if (!container) return;

  container.innerHTML = `
    <div class="detail-section-title-bar">
      <h2 class="detail-section-heading">About & Operating Hours</h2>
      <span style="font-size: 13px; color: var(--color-text-muted);">Authentic story, hygiene & visit hours</span>
    </div>
    <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 24px;">
      <div style="background: var(--color-bg-surface); padding: 24px; border-radius: var(--radius-lg); border: 1px solid var(--color-border-subtle);">
        <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 12px;">About ${r.name}</h3>
        <p style="font-size: 14px; color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 16px;">
          ${r.tagline}. Established with the vision of providing premium, authentic culinary experiences across Nigeria. All ingredients are freshly sourced daily from local farmers and prepared with strict hygiene standards.
        </p>
        <div style="font-size: 13px; color: var(--color-text-muted); display: flex; flex-direction: column; gap: 8px;">
          <div><i class="uil uil-map-marker" style="color: var(--cn-green-600); margin-right: 4px;"></i> <strong>Address:</strong> ${r.location}</div>
          <div><i class="uil uil-phone" style="color: var(--cn-green-600); margin-right: 4px;"></i> <strong>Telephone:</strong> <a href="tel:${r.phone}" style="color: var(--cn-green-600); font-weight: 600;">${r.phone}</a></div>
          <div><i class="uil uil-whatsapp" style="color: #25D366; margin-right: 4px;"></i> <strong>WhatsApp Inquiries:</strong> ${r.whatsapp}</div>
        </div>
      </div>
      <div style="background: var(--color-bg-surface); padding: 24px; border-radius: var(--radius-lg); border: 1px solid var(--color-border-subtle);">
        <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 12px;">Opening Hours</h3>
        <table style="width: 100%; font-size: 13px; border-collapse: collapse;">
          ${Object.entries(r.openingHours).map(([days, hours]) => `
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 8px 0; font-weight: 600;">${days}</td>
              <td style="padding: 8px 0; text-align: right; color: var(--cn-green-600); font-weight: 700;">${hours}</td>
            </tr>
          `).join('')}
        </table>
      </div>
    </div>
  `;
}

function renderProfileTableTab(r) {
  const container = document.getElementById('tab-table');
  if (!container) return;

  const t = r.tableAvailability;
  container.innerHTML = `
    <div class="detail-section-title-bar">
      <h2 class="detail-section-heading">Table Availability</h2>
      <span style="font-size: 13px; color: var(--color-text-muted);">Dining areas & reservation info</span>
    </div>
    <div class="table-capacity-card">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
        <div>
          <h3 style="font-size: 20px; font-weight: 700;">Table Seating & Availability Info</h3>
          <p style="font-size: 13px; color: var(--color-text-muted);">View-only table capacity specs for dine-in planning.</p>
        </div>
        <div style="background: var(--cn-green-50); border: 1px solid var(--cn-green-300); color: var(--cn-green-900); padding: 6px 14px; border-radius: var(--radius-full); font-weight: 700; font-size: 13px;">
          Total Capacity: ${t.totalCapacity} Guests
        </div>
      </div>

      <div class="table-sections-grid">
        <div class="table-section-box">
          <div style="font-size: 12px; color: var(--color-text-muted); margin-bottom: 4px;">Main Dining Area</div>
          <div style="font-size: 15px; font-weight: 700; color: var(--color-text-primary);">${t.indoorHall}</div>
        </div>
        <div class="table-section-box">
          <div style="font-size: 12px; color: var(--color-text-muted); margin-bottom: 4px;">Terrace & Outdoor</div>
          <div style="font-size: 15px; font-weight: 700; color: var(--color-text-primary);">${t.terrace}</div>
        </div>
        <div class="table-section-box">
          <div style="font-size: 12px; color: var(--color-text-muted); margin-bottom: 4px;">Private Dining & VIP</div>
          <div style="font-size: 15px; font-weight: 700; color: var(--color-text-primary);">${t.privateDining}</div>
        </div>
      </div>

      <div style="margin-top: 24px; padding: 16px; background: var(--color-bg-surface-sunken); border-radius: var(--radius-md); border-left: 4px solid var(--cn-green-500);">
        <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 4px;">How Reservations Work</h4>
        <p style="font-size: 13px; color: var(--color-text-secondary); line-height: 1.5; margin-bottom: 12px;">
          ${t.reservationNote}
        </p>
        <button class="btn btn-primary btn-sm" onclick="callMerchant('${r.id}')">
          Call for Table Inquiry: ${r.phone}
        </button>
      </div>
    </div>
  `;
}

function backToMarketplace() {
  AppState.activeView = 'marketplace';
  document.getElementById('profile-view').style.display = 'none';
  document.getElementById('merchant-portal-view').style.display = 'none';
  const chatView = document.getElementById('chat-view');
  if (chatView) chatView.style.display = 'none';
  const navChatBtn = document.getElementById('nav-chat-btn');
  if (navChatBtn) navChatBtn.classList.remove('is-active');
  document.getElementById('marketplace-view').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================================================
// 6. BUSINESS PORTAL (MERCHANT MODE)
// ==========================================================================
function toggleRoleMode() {
  const newRole = AppState.currentRole === 'customer' ? 'merchant' : 'customer';
  AppState.currentRole = newRole;

  const btn = document.getElementById('role-toggle-btn');
  if (newRole === 'merchant') {
    btn.className = 'role-toggle-btn btn-customer-mode';
    btn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
      Switch to Customer Mode
    `;
    openMerchantPortal();
    showToast("Switched to Merchant Portal (Business Mode)");
  } else {
    btn.className = 'role-toggle-btn btn-merchant-mode';
    btn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
      Merchant Portal
    `;
    backToMarketplace();
    showToast("Switched to Customer Mode (Explore & Discover)");
  }
}

function openMerchantPortal() {
  AppState.activeView = 'merchant-dashboard';
  document.getElementById('marketplace-view').style.display = 'none';
  document.getElementById('profile-view').style.display = 'none';
  const chatView = document.getElementById('chat-view');
  if (chatView) chatView.style.display = 'none';
  const navChatBtn = document.getElementById('nav-chat-btn');
  if (navChatBtn) navChatBtn.classList.remove('is-active');
  const portalView = document.getElementById('merchant-portal-view');
  portalView.style.display = 'block';

  renderMerchantDashboard();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderMerchantDashboard() {
  const m = AppState.merchantStore;
  if (!m) return;

  // Store top banner
  document.getElementById('portal-store-name').innerText = m.name;
  document.getElementById('portal-store-status').innerHTML = `<i class="uil uil-map-marker" style="color: var(--cn-green-600); margin-right: 4px;"></i> ${m.location} • Status: ${m.isOpen ? 'Accepting Orders' : 'Store Closed'}`;
  const toggle = document.getElementById('store-status-switch');
  if (toggle) toggle.checked = m.isOpen;

  // Dishes Table
  renderMerchantDishesTable();

  // Reviews Feed
  renderMerchantReviewsFeed();
}

function toggleStoreStatus(checkbox) {
  AppState.merchantStore.isOpen = checkbox.checked;
  const statusEl = document.getElementById('portal-store-status');
  if (statusEl) {
    statusEl.innerHTML = `<i class="uil uil-map-marker" style="color: var(--cn-green-600); margin-right: 4px;"></i> ${AppState.merchantStore.location} • Status: ${checkbox.checked ? 'Accepting Orders' : 'Store Closed'}`;
  }
  showToast(checkbox.checked ? "Store is now LIVE and Open!" : "Store is now marked as Closed");
}

function renderMerchantDishesTable() {
  const tbody = document.getElementById('portal-dishes-tbody');
  if (!tbody) return;

  const dishes = AppState.merchantStore.menu;
  tbody.innerHTML = dishes.map(d => `
    <tr>
      <td>
        <div style="display: flex; align-items: center; gap: 12px;">
          <img src="${d.img}" alt="${d.name}" style="width: 44px; height: 44px; border-radius: var(--radius-sm); object-fit: cover;">
          <div>
            <div style="font-weight: 700; color: var(--color-text-primary);">${d.name}</div>
            <div style="font-size: 11px; color: var(--color-text-muted);">${d.category}</div>
          </div>
        </div>
      </td>
      <td style="font-weight: 700;">₦${d.price.toLocaleString()}</td>
      <td>
        <span class="badge ${d.isAvailable ? 'badge-open' : 'badge-closed'}" style="font-size: 10px;">
          ${d.isAvailable ? 'Available' : 'Sold Out'}
        </span>
      </td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="toggleDishAvailability('${d.id}')">
          ${d.isAvailable ? 'Mark Sold Out' : 'Mark Available'}
        </button>
        <button class="btn btn-ghost btn-sm" style="color: #ef4444;" onclick="deleteMerchantDish('${d.id}')">
          Delete
        </button>
      </td>
    </tr>
  `).join('');
}

function toggleDishAvailability(dishId) {
  const dish = AppState.merchantStore.menu.find(d => d.id === dishId);
  if (!dish) return;
  dish.isAvailable = !dish.isAvailable;
  renderMerchantDishesTable();
  showToast(`Updated "${dish.name}" availability to ${dish.isAvailable ? 'Available' : 'Sold Out'}`);
}

function deleteMerchantDish(dishId) {
  const idx = AppState.merchantStore.menu.findIndex(d => d.id === dishId);
  if (idx !== -1) {
    const deleted = AppState.merchantStore.menu.splice(idx, 1)[0];
    renderMerchantDishesTable();
    showToast(`Removed "${deleted.name}" from your menu`, "warning");
  }
}

function renderMerchantReviewsFeed() {
  const container = document.getElementById('portal-reviews-list');
  if (!container) return;

  const reviews = AppState.merchantStore.reviews;
  container.innerHTML = reviews.map((rev, idx) => `
    <div style="background: var(--color-bg-surface-sunken); padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle);">
      <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
        <strong style="font-size: 13px;">${rev.author}</strong>
        <span style="color: var(--cn-yellow-normal); font-size: 12px;">${'<i class="uil uil-star"></i>'.repeat(rev.rating)}</span>
      </div>
      <p style="font-size: 12px; color: var(--color-text-secondary); margin-bottom: 8px;">"${rev.comment}"</p>
      ${rev.reply ? `
        <div style="background: var(--color-bg-surface); border-left: 3px solid var(--cn-green-500); padding: 8px 12px; border-radius: var(--radius-sm); font-size: 12px;">
          <strong>Your Response:</strong> ${rev.reply}
        </div>
      ` : `
        <button class="btn btn-ghost btn-sm" style="color: var(--cn-green-600); font-weight: 700; padding: 2px 6px;" onclick="promptReplyReview(${idx})">
          + Reply to Customer
        </button>
      `}
    </div>
  `).join('');
}

function promptReplyReview(idx) {
  const reply = prompt("Enter your public reply to this review:");
  if (reply && reply.trim()) {
    AppState.merchantStore.reviews[idx].reply = reply.trim();
    renderMerchantReviewsFeed();
    showToast("Reply posted successfully!");
  }
}

// ==========================================================================
// 7. IN-APP DEDICATED CHAT INTERFACE (DIRECT OFFLINE ORDERING & INQUIRIES)
// ==========================================================================
function openChatInterface(restId = null, initialMessage = null) {
  AppState.activeView = 'chat';

  // Toggle DOM views
  document.getElementById('marketplace-view').style.display = 'none';
  document.getElementById('profile-view').style.display = 'none';
  document.getElementById('merchant-portal-view').style.display = 'none';

  const chatView = document.getElementById('chat-view');
  if (chatView) chatView.style.display = 'block';

  const navChatBtn = document.getElementById('nav-chat-btn');
  if (navChatBtn) navChatBtn.classList.add('is-active');

  // Select restaurant partner
  if (restId) {
    const r = CHOPS_DATA.restaurants.find(item => item.id === restId);
    if (r) AppState.activeChatPartner = r;
  }
  if (!AppState.activeChatPartner) {
    AppState.activeChatPartner = CHOPS_DATA.restaurants[0];
  }

  const activeR = AppState.activeChatPartner;

  // Initialize history if needed
  if (!AppState.chatHistory[activeR.id]) {
    AppState.chatHistory[activeR.id] = [
      { sender: 'merchant', text: `Hello! Welcome to ${activeR.name}. Would you like to check out today's specials or place a pickup order?`, time: "10:14 AM" }
    ];
  }

  if (initialMessage) {
    AppState.chatHistory[activeR.id].push({
      sender: 'customer',
      text: initialMessage,
      time: "Just now"
    });
    simulateMerchantReply(activeR.id, `Thanks for reaching out to ${activeR.name}! Yes, that is freshly available. Would you like to proceed with pickup or direct delivery?`);
  }

  renderChatInterface();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Backwards-compatible aliases
function openChatWithRestaurant(restId, initialMessage = null) {
  openChatInterface(restId, initialMessage);
}

function toggleChatPopover() {
  if (AppState.activeView === 'chat') {
    backToMarketplace();
  } else {
    openChatInterface();
  }
}

function renderChatInterface() {
  const r = AppState.activeChatPartner;
  if (!r) return;

  renderChatConversationsList();
  renderChatMainHeader(r);
  renderChatInterfaceMessages(r.id);
  renderChatRestaurantInfoPanel(r);
}

function renderChatConversationsList(filterQuery = '') {
  const container = document.getElementById('chat-convos-list');
  if (!container) return;

  const restaurants = CHOPS_DATA.restaurants.filter(item => {
    if (!filterQuery) return true;
    return item.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
           item.cuisine.toLowerCase().includes(filterQuery.toLowerCase()) ||
           item.location.toLowerCase().includes(filterQuery.toLowerCase());
  });

  container.innerHTML = restaurants.map(item => {
    const isActive = AppState.activeChatPartner && AppState.activeChatPartner.id === item.id;
    const history = AppState.chatHistory[item.id] || [];
    const lastMsg = history.length > 0 ? history[history.length - 1] : { text: "Tap to chat with kitchen...", time: "New" };
    const snippet = lastMsg.sender === 'customer' ? `You: ${lastMsg.text}` : lastMsg.text;

    return `
      <div class="chat-convo-item ${isActive ? 'is-active' : ''}" onclick="selectChatConversation('${item.id}')">
        <div class="chat-convo-avatar-wrap">
          <img src="${item.avatarImg}" alt="${item.name}" class="chat-convo-avatar">
          <span class="chat-online-dot" style="background-color: ${item.isOpen ? '#22c55e' : '#94a3b8'};"></span>
        </div>
        <div class="chat-convo-meta">
          <div class="chat-convo-top">
            <span class="chat-convo-name">${item.name}</span>
            <span class="chat-convo-time">${lastMsg.time || '10m'}</span>
          </div>
          <div class="chat-convo-snippet">${snippet}</div>
        </div>
      </div>
    `;
  }).join('');
}

function filterChatConversations(query) {
  renderChatConversationsList(query);
}

function selectChatConversation(restId) {
  const r = CHOPS_DATA.restaurants.find(item => item.id === restId);
  if (!r) return;
  AppState.activeChatPartner = r;
  if (!AppState.chatHistory[r.id]) {
    AppState.chatHistory[r.id] = [
      { sender: 'merchant', text: `Hello! Welcome to ${r.name}. What can we prepare hot for you today?`, time: "Just now" }
    ];
  }
  renderChatInterface();
}

function renderChatMainHeader(r) {
  const container = document.getElementById('chat-main-header');
  if (!container) return;

  container.innerHTML = `
    <div class="chat-main-partner-info">
      <img src="${r.avatarImg}" alt="${r.name}" class="chat-main-avatar">
      <div>
        <div class="chat-main-name-row">
          <h2 class="chat-main-name">${r.name}</h2>
          <span class="verified-merchant-tag" style="margin-bottom: 0; padding: 2px 6px; font-size: 10px;">
            <i class="uil uil-check-circle"></i> Verified
          </span>
        </div>
        <div class="chat-main-sub">
          <span><i class="uil uil-star" style="color: var(--cn-yellow-normal);"></i> <strong>${r.rating}</strong></span>
          <span>•</span>
          <span>${r.cuisine}</span>
          <span>•</span>
          <span style="color: var(--cn-green-600);"><i class="uil uil-clock"></i> ${r.isOpen ? 'Open Now (~5m response)' : 'Closed'}</span>
        </div>
      </div>
    </div>
    <div class="chat-main-actions">
      <button class="btn btn-secondary btn-sm" onclick="callMerchant('${r.id}', event)">
        <i class="uil uil-phone"></i> Call: ${r.phone}
      </button>
      <button class="btn btn-outline btn-sm" onclick="openRestaurantProfile('${r.id}')" style="border: 1px solid var(--color-border-subtle);">
        <i class="uil uil-restaurant"></i> View Menu & Profile
      </button>
    </div>
  `;
}

function renderChatInterfaceMessages(restId) {
  const container = document.getElementById('chat-interface-messages');
  if (!container) return;

  const messages = AppState.chatHistory[restId] || [];
  let html = `<div class="chat-date-chip">Today</div>`;

  html += messages.map(m => `
    <div class="chat-bubble ${m.sender === 'customer' ? 'chat-bubble-outgoing' : 'chat-bubble-incoming'}">
      ${m.text}
      <div class="chat-bubble-time">${m.time}</div>
    </div>
  `).join('');

  container.innerHTML = html;
  container.scrollTop = container.scrollHeight;
}

function renderChatRestaurantInfoPanel(r) {
  const container = document.getElementById('chat-restaurant-info-panel');
  if (!container) return;

  const popularDishes = r.menu.slice(0, 3);

  container.innerHTML = `
    <div class="chat-info-hero">
      <img src="${r.heroImg}" alt="${r.name}">
      <span class="chat-info-hero-badge"><i class="uil uil-map-marker"></i> ${r.location}</span>
    </div>

    <div class="chat-info-card">
      <div class="chat-info-row">
        <i class="uil uil-utensils" style="color: var(--cn-green-600);"></i>
        <span><strong>Cuisine:</strong> ${r.cuisine}</span>
      </div>
      <div class="chat-info-row">
        <i class="uil uil-money-bill" style="color: var(--cn-green-600);"></i>
        <span><strong>Pricing:</strong> ${r.priceRange} (${r.priceRange === '₦' ? 'Budget Friendly' : r.priceRange === '₦₦' ? 'Moderate' : 'Premium'})</span>
      </div>
      <div class="chat-info-row">
        <i class="uil uil-clock" style="color: var(--cn-green-600);"></i>
        <span><strong>Hours:</strong> ${Object.values(r.openingHours)[0] || 'Daily 9am-10pm'}</span>
      </div>
      <div class="chat-info-row">
        <i class="uil uil-whatsapp" style="color: #25D366;"></i>
        <span><strong>WhatsApp:</strong> <a href="https://wa.me/${r.whatsapp.replace(/[^0-9]/g, '')}" target="_blank" style="color: #25D366; font-weight: 600;">${r.whatsapp}</a></span>
      </div>
    </div>

    <div class="chat-info-card">
      <div class="chat-info-dishes-title">
        <span>Popular Dishes</span>
        <button class="btn btn-link btn-xs" onclick="openRestaurantProfile('${r.id}')" style="font-size: 11px; padding: 0; color: var(--cn-green-600);">Full Menu</button>
      </div>
      ${popularDishes.map(d => `
        <div class="chat-info-dish-item">
          <img src="${d.img}" alt="${d.name}" class="chat-info-dish-thumb">
          <div class="chat-info-dish-meta">
            <div class="chat-info-dish-name">${d.name}</div>
            <div class="chat-info-dish-price">₦${d.price.toLocaleString()}</div>
          </div>
          <button class="chat-info-inquire-btn" onclick="inquireDish('${r.id}', '${d.name.replace(/'/g, "\\'")}', ${d.price})" title="Ask restaurant about this dish">
            Inquire
          </button>
        </div>
      `).join('')}
    </div>

    <div class="chat-info-guarantee">
      <strong style="display: block; margin-bottom: 2px; color: var(--color-text-primary);"><i class="uil uil-shield-check"></i> Direct Offline Ordering</strong>
      Zero platform commission. You communicate and confirm your order directly with the kitchen. Payment is made on delivery or pickup.
    </div>
  `;
}

function sendChatInterfaceMessage() {
  const input = document.getElementById('chat-interface-input');
  if (!input || !input.value.trim()) return;

  const text = input.value.trim();
  input.value = '';

  const r = AppState.activeChatPartner;
  if (!r) return;

  if (!AppState.chatHistory[r.id]) AppState.chatHistory[r.id] = [];
  AppState.chatHistory[r.id].push({
    sender: 'customer',
    text: text,
    time: "Just now"
  });

  renderChatInterfaceMessages(r.id);
  renderChatConversationsList();

  // Show typing indicator
  const typingEl = document.getElementById('chat-typing-indicator');
  const typingText = document.getElementById('chat-typing-text');
  if (typingEl) {
    if (typingText) typingText.innerText = `${r.name} kitchen staff is typing...`;
    typingEl.style.display = 'flex';
  }

  setTimeout(() => {
    if (typingEl) typingEl.style.display = 'none';
    AppState.chatHistory[r.id].push({
      sender: 'merchant',
      text: `Thanks for your note! We have received it and can prepare this for you. Please confirm your delivery address or pickup time.`,
      time: "Just now"
    });
    renderChatInterfaceMessages(r.id);
    renderChatConversationsList();
  }, 1200);
}

function insertDietaryNote() {
  const input = document.getElementById('chat-interface-input');
  if (input) {
    input.value = "Special Note: Please prepare with less pepper / salt, and include extra napkins.";
    input.focus();
  }
}

function sendChatMessage() {
  sendChatInterfaceMessage();
}

function simulateMerchantReply(restId, replyText) {
  const typingEl = document.getElementById('chat-typing-indicator');
  const typingText = document.getElementById('chat-typing-text');
  const r = CHOPS_DATA.restaurants.find(item => item.id === restId);
  if (typingEl && r) {
    if (typingText) typingText.innerText = `${r.name} is typing...`;
    typingEl.style.display = 'flex';
  }

  setTimeout(() => {
    if (typingEl) typingEl.style.display = 'none';
    if (!AppState.chatHistory[restId]) AppState.chatHistory[restId] = [];
    AppState.chatHistory[restId].push({
      sender: 'merchant',
      text: replyText,
      time: "Just now"
    });
    if (AppState.activeChatPartner && AppState.activeChatPartner.id === restId) {
      renderChatInterfaceMessages(restId);
    }
    renderChatConversationsList();
  }, 1000);
}

function sendQuickInquiry(chipText) {
  const r = AppState.activeChatPartner || CHOPS_DATA.restaurants[0];
  if (!AppState.chatHistory[r.id]) AppState.chatHistory[r.id] = [];

  AppState.chatHistory[r.id].push({
    sender: 'customer',
    text: chipText,
    time: "Just now"
  });

  renderChatInterfaceMessages(r.id);
  renderChatConversationsList();

  simulateMerchantReply(r.id, `Yes absolutely! We are active in the kitchen right now and ready to assist you. Would you like to place this for pickup or delivery?`);
}

function inquireDish(restId, dishName, price) {
  const msg = `Hi! I would like to inquire about ordering "${dishName}" (₦${price.toLocaleString()}). Is it freshly available right now?`;
  openChatInterface(restId, msg);
}

// ==========================================================================
// 8. FAVOURITES & CALL ACTIONS
// ==========================================================================
function toggleFavourite(restId, event) {
  if (event) event.stopPropagation();
  const r = CHOPS_DATA.restaurants.find(item => item.id === restId);
  if (!r) return;

  if (AppState.favourites.has(restId)) {
    AppState.favourites.delete(restId);
    showToast(`Removed ${r.name} from Favourites`);
  } else {
    AppState.favourites.add(restId);
    showToast(`Added ${r.name} to Favourites`);
  }

  updateFavouritesBadge();
  renderMarketplace();
}

function updateFavouritesBadge() {
  const badge = document.getElementById('favourites-count-badge');
  if (badge) badge.innerText = AppState.favourites.size;
}

function callMerchant(restId, event) {
  if (event) event.stopPropagation();
  const r = CHOPS_DATA.restaurants.find(item => item.id === restId);
  if (!r) return;

  // Open dialer or copy
  navigator.clipboard.writeText(r.phone);
  showToast(`Calling ${r.name}: ${r.phone} (Phone copied!)`);
  window.open(`tel:${r.phone}`);
}

// ==========================================================================
// 9. MODALS & FORMS
// ==========================================================================
function openAddNewDishModal() {
  const modal = document.getElementById('add-dish-modal');
  if (modal) modal.classList.add('is-open');
}

function closeAddNewDishModal() {
  const modal = document.getElementById('add-dish-modal');
  if (modal) modal.classList.remove('is-open');
}

function handleAddDishFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('dish-form-name').value.trim();
  const cat = document.getElementById('dish-form-category').value.trim();
  const price = parseInt(document.getElementById('dish-form-price').value, 10);
  const desc = document.getElementById('dish-form-desc').value.trim();
  const img = document.getElementById('dish-form-img').value.trim() || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80';

  if (!name || isNaN(price)) {
    alert("Please enter a valid dish name and price.");
    return;
  }

  const newDish = {
    id: `dish-custom-${Date.now()}`,
    name,
    category: cat,
    price,
    description: desc,
    img,
    isAvailable: true,
    isTrending: false
  };

  AppState.merchantStore.menu.unshift(newDish);
  closeAddNewDishModal();
  renderMerchantDishesTable();
  showToast(`Added "${name}" to your restaurant menu!`);
}

function openWriteReviewModal() {
  const modal = document.getElementById('write-review-modal');
  if (modal) modal.classList.add('is-open');
}

function closeWriteReviewModal() {
  const modal = document.getElementById('write-review-modal');
  if (modal) modal.classList.remove('is-open');
}

function handleReviewFormSubmit(e) {
  e.preventDefault();
  const author = document.getElementById('review-form-name').value.trim() || "Anonymous Foodie";
  const rating = parseInt(document.getElementById('review-form-rating').value, 10) || 5;
  const comment = document.getElementById('review-form-comment').value.trim();

  if (!comment) {
    alert("Please write your comment.");
    return;
  }

  const r = CHOPS_DATA.restaurants.find(item => item.id === AppState.currentRestaurantId);
  if (r) {
    r.reviews.unshift({ author, rating, date: "Just now", comment });
    r.reviewsCount += 1;
    renderProfileReviewsTab(r);
  }

  closeWriteReviewModal();
  showToast("Thank you! Your authentic review has been posted.");
}

// Toast Feedback System
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(40px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Reset filters
function resetFilters() {
  AppState.searchQuery = '';
  AppState.selectedCategory = 'All';
  AppState.selectedLocation = 'All Locations';
  AppState.filters = { openNow: false, topRated: false, verifiedOnly: false };

  document.querySelectorAll('.category-chip').forEach(c => c.classList.toggle('active', c.dataset.category === 'All'));
  document.querySelectorAll('.filter-pill').forEach(f => f.classList.remove('active'));
  const searchInput = document.getElementById('hero-search-input');
  if (searchInput) searchInput.value = '';

  renderMarketplace();
  showToast("Filters reset to default");
}

// ==========================================================================
// 10. EVENT LISTENERS SETUP
// ==========================================================================
function setupEventListeners() {
  // Category chips
  document.querySelectorAll('.category-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      AppState.selectedCategory = chip.dataset.category;
      renderMarketplace();
    });
  });

  // Filter pills
  const openNowPill = document.getElementById('filter-open-now');
  if (openNowPill) {
    openNowPill.addEventListener('click', () => {
      AppState.filters.openNow = !AppState.filters.openNow;
      openNowPill.classList.toggle('active', AppState.filters.openNow);
      renderMarketplace();
    });
  }

  const topRatedPill = document.getElementById('filter-top-rated');
  if (topRatedPill) {
    topRatedPill.addEventListener('click', () => {
      AppState.filters.topRated = !AppState.filters.topRated;
      topRatedPill.classList.toggle('active', AppState.filters.topRated);
      renderMarketplace();
    });
  }

  const verifiedPill = document.getElementById('filter-verified');
  if (verifiedPill) {
    verifiedPill.addEventListener('click', () => {
      AppState.filters.verifiedOnly = !AppState.filters.verifiedOnly;
      verifiedPill.classList.toggle('active', AppState.filters.verifiedOnly);
      renderMarketplace();
    });
  }

  // Hero Search input
  const searchInput = document.getElementById('hero-search-input');
  const locationInput = document.getElementById('hero-location-input');
  const headerSearchInput = document.getElementById('header-search-input');
  const headerLocationInput = document.getElementById('header-location-input');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value.trim();
      if (headerSearchInput && headerSearchInput.value !== e.target.value) {
        headerSearchInput.value = e.target.value;
      }
      renderMarketplace();
    });
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeHeroSearch();
      }
    });
  }

  // Address / Location input bar (Hero)
  if (locationInput) {
    locationInput.addEventListener('input', (e) => {
      AppState.selectedLocation = e.target.value.trim();
      if (headerLocationInput && headerLocationInput.value !== e.target.value) {
        headerLocationInput.value = e.target.value;
      }
      renderMarketplace();
    });
    locationInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeHeroSearch();
      }
    });
  }

  // Figma 72:3865: Header Search & Location Inputs
  if (headerSearchInput) {
    headerSearchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value.trim();
      if (searchInput && searchInput.value !== e.target.value) {
        searchInput.value = e.target.value;
      }
      renderMarketplace();
    });
    headerSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeHeaderSearch();
      }
    });
  }

  if (headerLocationInput) {
    headerLocationInput.addEventListener('input', (e) => {
      AppState.selectedLocation = e.target.value.trim();
      if (locationInput && locationInput.value !== e.target.value) {
        locationInput.value = e.target.value;
      }
      renderMarketplace();
    });
    headerLocationInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeHeaderSearch();
      }
    });
  }

  // Detail tab switching
  document.querySelectorAll('.detail-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchDetailTab(btn.dataset.tab));
  });

  // Sticky Restaurant Tabs: scroll horizontally to the right as user scrolls down, and sync ScrollSpy
  window.addEventListener('scroll', () => {
    const profileView = document.getElementById('profile-view');
    if (!profileView || profileView.style.display === 'none') return;

    const tabsHeader = document.getElementById('detail-tabs-header');
    if (!tabsHeader) return;

    // 1. Horizontal scroll to the right as user scrolls vertically
    const maxScrollLeft = tabsHeader.scrollWidth - tabsHeader.clientWidth;
    if (maxScrollLeft > 0 && !isManualTabScroll) {
      const startY = tabsHeader.offsetTop - 74;
      const totalScrollableH = profileView.offsetHeight - window.innerHeight;
      if (totalScrollableH > 0 && window.scrollY >= startY) {
        const scrollProgress = Math.min(1, Math.max(0, (window.scrollY - startY) / totalScrollableH));
        tabsHeader.scrollLeft = scrollProgress * maxScrollLeft;
      } else if (window.scrollY < startY) {
        tabsHeader.scrollLeft = 0;
      }
    }

    // 2. Active Tab ScrollSpy: sync active tab with visible section
    if (!isManualTabScroll) {
      const tabSections = ['menu', 'reviews', 'photos', 'about', 'table'];
      const scrollTrigger = window.scrollY + 160;
      let currentTab = 'menu';

      for (const tab of tabSections) {
        const el = document.getElementById(`tab-${tab}`);
        if (el && el.offsetTop <= scrollTrigger) {
          currentTab = tab;
        }
      }

      document.querySelectorAll('.detail-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === currentTab);
      });
    }
  }, { passive: true });

  // Allow horizontal mousewheel scrolling on the tab bar
  const tabsHeader = document.getElementById('detail-tabs-header');
  if (tabsHeader) {
    tabsHeader.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        tabsHeader.scrollLeft += e.deltaY;
      }
    }, { passive: false });
  }

  // Profile dropdown toggle (for click/touch devices)
  const profileBtn = document.getElementById('header-profile-btn');
  const profileContainer = document.getElementById('header-profile-menu-container');
  if (profileBtn && profileContainer) {
    profileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      profileContainer.classList.toggle('dropdown-open');
    });

    document.addEventListener('click', (e) => {
      if (!profileContainer.contains(e.target)) {
        profileContainer.classList.remove('dropdown-open');
      }
    });
  }
}

function setNearMeLocation() {
  const locInput = document.getElementById('hero-location-input');
  if (locInput) locInput.value = 'Near Me';
  AppState.selectedLocation = 'Near Me';
  const locSelect = document.getElementById('location-selector');
  if (locSelect) locSelect.value = 'All Locations';
  renderMarketplace();
  showToast('Location set to: Near Me (Current Location)');
}

function executeHeroSearch() {
  const searchInput = document.getElementById('hero-search-input');
  const locInput = document.getElementById('hero-location-input');
  if (searchInput) AppState.searchQuery = searchInput.value.trim();
  if (locInput) AppState.selectedLocation = locInput.value.trim();
  renderMarketplace();
  const resultsEl = document.getElementById('results-count-text');
  if (resultsEl) {
    resultsEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Figma 72:3865 Header Search & Modals
function executeHeaderSearch() {
  const headerSearchInput = document.getElementById('header-search-input');
  const headerLocationInput = document.getElementById('header-location-input');
  const heroSearchInput = document.getElementById('hero-search-input');
  const heroLocationInput = document.getElementById('hero-location-input');

  const query = headerSearchInput ? headerSearchInput.value.trim() : '';
  const loc = headerLocationInput ? headerLocationInput.value.trim() : '';

  AppState.searchQuery = query;
  AppState.selectedLocation = loc;

  if (heroSearchInput) heroSearchInput.value = query;
  if (heroLocationInput) heroLocationInput.value = loc;

  const marketplaceView = document.getElementById('marketplace-view');
  if (marketplaceView && marketplaceView.style.display === 'none') {
    backToMarketplace();
  }

  renderMarketplace();

  const resultsEl = document.getElementById('results-count-text') || document.getElementById('trending-dishes');
  if (resultsEl) {
    resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  showToast(`Searching for: ${query || 'All Dishes'} ${loc ? 'in ' + loc : ''}`);
}

let authCarouselIndex = 0;
let authCarouselTimer = null;
let isCreateAccountMode = false;

function openLoginModal() {
  const modal = document.getElementById('login-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setAuthSlide(0);
    startAuthCarouselTimer();
  }
}

function closeLoginModal() {
  const modal = document.getElementById('login-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    stopAuthCarouselTimer();
  }
}

function setAuthSlide(index) {
  authCarouselIndex = index;
  const slides = document.querySelectorAll('.auth-visual-slide');
  const dots = document.querySelectorAll('.auth-dot');

  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function nextAuthSlide() {
  const slides = document.querySelectorAll('.auth-visual-slide');
  if (!slides || slides.length === 0) return;
  const nextIdx = (authCarouselIndex + 1) % slides.length;
  setAuthSlide(nextIdx);
}

function startAuthCarouselTimer() {
  stopAuthCarouselTimer();
  authCarouselTimer = setInterval(() => {
    nextAuthSlide();
  }, 5000);
}

function stopAuthCarouselTimer() {
  if (authCarouselTimer) {
    clearInterval(authCarouselTimer);
    authCarouselTimer = null;
  }
}

function togglePasswordVisibility() {
  const pwdInput = document.getElementById('login-password');
  const eyeIcon = document.getElementById('password-eye-icon');
  if (!pwdInput) return;

  if (pwdInput.type === 'password') {
    pwdInput.type = 'text';
    if (eyeIcon) {
      eyeIcon.className = 'uil uil-eye-slash';
    }
  } else {
    pwdInput.type = 'password';
    if (eyeIcon) {
      eyeIcon.className = 'uil uil-eye';
    }
  }
}

function handleSocialLogin(provider) {
  let displayName = 'Bolanle Adeleke';
  let email = 'bolanle.adeleke@gmail.com';
  let avatar = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80';

  if (provider === 'Apple') {
    displayName = 'Bolanle Adeleke';
    email = 'bolanle@privaterelay.appleid.com';
  } else if (provider === 'Facebook') {
    displayName = 'Bolanle Adeleke';
    email = 'bolanle.connect@facebook.com';
  }

  AppState.user.isLoggedIn = true;
  AppState.user.name = displayName;
  AppState.user.email = email;
  AppState.user.avatar = avatar;

  localStorage.setItem('chops-user-auth', JSON.stringify(AppState.user));
  updateAuthUI();
  closeLoginModal();
  showToast(`Signed in successfully with ${provider}! Welcome back, ${displayName}.`);
}

function handleAuthSubmit() {
  const emailInput = document.getElementById('login-email');
  const pwdInput = document.getElementById('login-password');
  const errorMsg = document.getElementById('auth-error-msg');
  const pwdPill = document.getElementById('password-input-pill');

  const email = emailInput?.value.trim() || 'user@example.com';
  const pwd = pwdInput?.value || '';

  // Demonstration: if password is "wrong" or "incorrect", show the Figma error state
  if (pwd.toLowerCase() === 'incorrect' || pwd.toLowerCase() === 'incorrectpassword') {
    if (errorMsg) errorMsg.style.display = 'flex';
    if (pwdPill) pwdPill.classList.add('error');
    showToast('Authentication error: Check credentials or reset password.');
    return;
  }

  if (errorMsg) errorMsg.style.display = 'none';
  if (pwdPill) pwdPill.classList.remove('error');

  let displayName = email.split('@')[0] || 'Bolanle';
  displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);

  AppState.user.isLoggedIn = true;
  AppState.user.name = displayName;
  AppState.user.email = email;

  localStorage.setItem('chops-user-auth', JSON.stringify(AppState.user));
  updateAuthUI();
  closeLoginModal();
  showToast(`Welcome back, ${displayName}! Hover your profile icon to view menu & settings.`);
}

function toggleAuthMode(event) {
  if (event) event.preventDefault();
  isCreateAccountMode = !isCreateAccountMode;

  const formTitle = document.getElementById('auth-form-title');
  const formSubtitle = document.getElementById('auth-form-subtitle');
  const submitBtn = document.getElementById('auth-submit-btn');
  const switchText = document.getElementById('auth-switch-text');
  const switchLink = document.getElementById('auth-switch-link');

  if (isCreateAccountMode) {
    if (formTitle) formTitle.innerText = 'Create Account';
    if (formSubtitle) formSubtitle.innerText = 'Join Connect Nigeria to order and explore';
    if (submitBtn) submitBtn.innerText = 'Create Account';
    if (switchText) switchText.innerText = 'Already have an account?';
    if (switchLink) switchLink.innerText = 'Sign in →';
  } else {
    if (formTitle) formTitle.innerText = 'Welcome back';
    if (formSubtitle) formSubtitle.innerText = 'Sign in to continue to your account';
    if (submitBtn) submitBtn.innerText = 'Sign In';
    if (switchText) switchText.innerText = "Don't have an account?";
    if (switchLink) switchLink.innerText = 'Create account →';
  }
}

function handleForgotPassword(event) {
  if (event) event.preventDefault();
  const emailInput = document.getElementById('login-email');
  const email = emailInput?.value.trim() || 'your email';
  showToast(`Password reset link sent to ${email}. Please check your inbox.`);
}

function initAuth() {
  const saved = localStorage.getItem('chops-user-auth');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      AppState.user = { ...AppState.user, ...parsed };
    } catch (e) {
      console.warn("Could not parse saved user auth", e);
    }
  }
  updateAuthUI();
}

function updateAuthUI() {
  const loginBtn = document.getElementById('header-login-btn');
  const profileContainer = document.getElementById('header-profile-menu-container');
  const dropdownName = document.getElementById('dropdown-user-name');
  const dropdownContact = document.getElementById('dropdown-user-contact');
  const dropdownAvatar = document.getElementById('dropdown-user-avatar');
  const headerAvatar = document.getElementById('header-profile-avatar');
  const favBadge = document.getElementById('dropdown-fav-badge');

  if (AppState.user && AppState.user.isLoggedIn) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (profileContainer) profileContainer.style.display = 'flex';
    if (dropdownName) dropdownName.innerText = AppState.user.name || 'Bolanle Adeleke';
    if (dropdownContact) dropdownContact.innerText = AppState.user.email || AppState.user.phone || 'bolanle@connectnigeria.com';
    if (dropdownAvatar && AppState.user.avatar) dropdownAvatar.src = AppState.user.avatar;
    if (headerAvatar && AppState.user.avatar) headerAvatar.src = AppState.user.avatar;
    if (favBadge) favBadge.innerText = AppState.favourites.size;
  } else {
    if (loginBtn) loginBtn.style.display = 'inline-flex';
    if (profileContainer) profileContainer.style.display = 'none';
  }
}

function handleCustomerLogin() {
  handleAuthSubmit();
}

function handleSignOut() {
  AppState.user.isLoggedIn = false;
  localStorage.removeItem('chops-user-auth');
  updateAuthUI();
  
  // Close any open dropdown state
  const profileContainer = document.getElementById('header-profile-menu-container');
  if (profileContainer) profileContainer.classList.remove('dropdown-open');

  showToast('You have been signed out successfully.');
}

function handleMerchantPortalAccess() {
  closeLoginModal();
  if (AppState.currentRole !== 'merchant') {
    toggleRoleMode();
  }
}

function openFavouritesDrawer() {
  const modal = document.getElementById('favourites-modal');
  const listEl = document.getElementById('favourites-modal-list');
  const countEl = document.getElementById('fav-modal-count');

  if (countEl) countEl.innerText = AppState.favourites.size;

  if (listEl) {
    if (AppState.favourites.size === 0) {
      listEl.innerHTML = `
        <div style="text-align: center; padding: 36px 20px; color: var(--color-text-muted);">
          <div style="font-size: 36px; margin-bottom: 8px;">❤️</div>
          <p style="font-weight: 700; font-size: 15px; margin-bottom: 4px; color: var(--color-text-primary);">No Saved Spots Yet</p>
          <p style="font-size: 13px;">Save your favorite spots by clicking the heart button on restaurant cards.</p>
        </div>
      `;
    } else {
      const favRestaurants = CHOPS_DATA.restaurants.filter(r => AppState.favourites.has(r.id));
      listEl.innerHTML = favRestaurants.map(r => `
        <div class="fav-item-row">
          <div class="fav-item-info">
            <img src="${r.heroImg}" alt="${r.name}" class="fav-item-thumb">
            <div>
              <div style="font-weight: 700; font-size: 14px; color: var(--color-text-primary);">${r.name}</div>
              <div style="font-size: 12px; color: var(--color-text-muted);">${r.cuisine} • ${r.location}</div>
              <div style="font-size: 12px; color: var(--cn-yellow-dark); font-weight: 600; margin-top: 2px;">
                ★ ${r.rating} (${r.reviewsCount} reviews)
              </div>
            </div>
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-primary btn-sm" onclick="closeFavouritesDrawer(); openRestaurantProfile('${r.id}');">View Menu</button>
            <button class="btn btn-secondary btn-sm" style="padding: 6px 10px;" onclick="toggleFavourite('${r.id}', event); openFavouritesDrawer();" title="Remove"><i class="uil uil-trash-alt"></i></button>
          </div>
        </div>
      `).join('');
    }
  }

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeFavouritesDrawer() {
  const modal = document.getElementById('favourites-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Account Settings Modal Handlers
function openAccountSettingsModal() {
  const modal = document.getElementById('account-settings-modal');
  if (modal) {
    const nameInput = document.getElementById('setting-name');
    const phoneInput = document.getElementById('setting-phone');
    const emailInput = document.getElementById('setting-email');
    if (nameInput) nameInput.value = AppState.user.name || 'Bolanle Adeleke';
    if (phoneInput) phoneInput.value = AppState.user.phone || '+234 803 555 0199';
    if (emailInput) emailInput.value = AppState.user.email || 'bolanle@connectnigeria.com';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeAccountSettingsModal() {
  const modal = document.getElementById('account-settings-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function saveAccountSettings() {
  const nameInput = document.getElementById('setting-name');
  const phoneInput = document.getElementById('setting-phone');
  const emailInput = document.getElementById('setting-email');

  if (nameInput) AppState.user.name = nameInput.value.trim() || AppState.user.name;
  if (phoneInput) AppState.user.phone = phoneInput.value.trim() || AppState.user.phone;
  if (emailInput) AppState.user.email = emailInput.value.trim() || AppState.user.email;

  localStorage.setItem('chops-user-auth', JSON.stringify(AppState.user));
  updateAuthUI();
  closeAccountSettingsModal();
  showToast('Account preferences and settings saved!');
}

// Order & Inquiry History Modal Handlers
function openOrderHistoryModal() {
  const modal = document.getElementById('order-history-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeOrderHistoryModal() {
  const modal = document.getElementById('order-history-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Saved Addresses Modal Handlers
function openSavedAddressesModal() {
  const modal = document.getElementById('saved-addresses-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeSavedAddressesModal() {
  const modal = document.getElementById('saved-addresses-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function applySavedLocation(loc) {
  closeSavedAddressesModal();
  AppState.selectedLocation = loc;
  const headerLocInput = document.getElementById('header-location-input');
  const heroLocInput = document.getElementById('hero-location-input');
  if (headerLocInput) headerLocInput.value = loc;
  if (heroLocInput) heroLocInput.value = loc;
  renderMarketplace();
  showToast(`Active delivery location set to: ${loc}`);
}

// Explicit window bindings for robust inline onclick handlers
window.openRestaurantProfile = openRestaurantProfile;
window.backToMarketplace = backToMarketplace;
window.switchDetailTab = switchDetailTab;
window.toggleRoleMode = toggleRoleMode;
window.toggleTheme = toggleTheme;
window.callMerchant = callMerchant;
window.toggleFavourite = toggleFavourite;
window.inquireDish = inquireDish;
window.openChatWithRestaurant = openChatWithRestaurant;
window.toggleChatPopover = toggleChatPopover;
window.sendChatMessage = sendChatMessage;
window.sendQuickInquiry = sendQuickInquiry;
window.openAddNewDishModal = openAddNewDishModal;
window.closeAddNewDishModal = closeAddNewDishModal;
window.handleAddDishFormSubmit = handleAddDishFormSubmit;
window.openWriteReviewModal = openWriteReviewModal;
window.closeWriteReviewModal = closeWriteReviewModal;
window.handleReviewFormSubmit = handleReviewFormSubmit;
window.toggleStoreStatus = toggleStoreStatus;
window.toggleDishAvailability = toggleDishAvailability;
window.deleteMerchantDish = deleteMerchantDish;
window.promptReplyReview = promptReplyReview;
window.resetFilters = resetFilters;
window.renderMarketplace = renderMarketplace;
window.setNearMeLocation = setNearMeLocation;
window.executeHeroSearch = executeHeroSearch;
window.executeHeaderSearch = executeHeaderSearch;
window.openLoginModal = openLoginModal;
window.closeLoginModal = closeLoginModal;
window.switchAuthTab = switchAuthTab;
window.handleCustomerLogin = handleCustomerLogin;
window.handleSignOut = handleSignOut;
window.initAuth = initAuth;
window.updateAuthUI = updateAuthUI;
window.openAccountSettingsModal = openAccountSettingsModal;
window.closeAccountSettingsModal = closeAccountSettingsModal;
window.saveAccountSettings = saveAccountSettings;
window.openOrderHistoryModal = openOrderHistoryModal;
window.closeOrderHistoryModal = closeOrderHistoryModal;
window.openSavedAddressesModal = openSavedAddressesModal;
window.closeSavedAddressesModal = closeSavedAddressesModal;
window.applySavedLocation = applySavedLocation;
window.handleMerchantPortalAccess = handleMerchantPortalAccess;
window.openFavouritesDrawer = openFavouritesDrawer;
window.closeFavouritesDrawer = closeFavouritesDrawer;
window.copyOfferCode = copyOfferCode;
window.claimOfferViaChat = claimOfferViaChat;

window.openChatInterface = openChatInterface;
window.selectChatConversation = selectChatConversation;
window.filterChatConversations = filterChatConversations;
window.sendChatInterfaceMessage = sendChatInterfaceMessage;
window.insertDietaryNote = insertDietaryNote;


