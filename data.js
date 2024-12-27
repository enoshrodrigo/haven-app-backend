 const touristPackages = [
    {
      id: 1,
      name: "Sigiriya Adventure",
      description:
        "Explore the ancient Sigiriya rock fortress, hike to the top for breathtaking views, and delve into Sri Lanka's rich history. Visit the nearby Pidurangala Rock for a stunning view of Sigiriya and the surrounding area. Ideal for adventure seekers and history buffs.",
      price: 120,
      duration: "3 days, 2 nights",
      locations: [
        { name: "Sigiriya Rock", latitude: 7.9574, longitude: 80.7603 },
        { name: "Pidurangala Rock", latitude: 7.9551, longitude: 80.7496 },
        { name: "Dambulla Cave Temple", latitude: 7.8619, longitude: 80.6474 },
      ],
      activities: [
        "Hiking up Sigiriya Rock to the ancient fortress",
        "Exploring the Pidurangala Rock for panoramic views",
        "Visiting the Dambulla Cave Temple",
        "Guided tour of Sigiriya's history and culture",
        "Rock climbing and bouldering around Sigiriya",
        "Bird watching in the surrounding nature reserves",
      ],
      accommodations: [
        "Luxury hotel in Sigiriya with a view of the rock",
        "Traditional guesthouse with Sri Lankan hospitality",
      ],
      includedServices: [
        "Transport to and from the destination",
        "All entrance fees to sites",
        "Breakfast and dinner",
        "Local guide services",
      ],
      bestSeason: "November to April",
      reviews: [
        {
          user: "John Doe",
          rating: 5,
          comment:
            "Incredible adventure! The views from Sigiriya were breathtaking, and the guide was very informative.",
        },
        {
          user: "Emily Smith",
          rating: 4,
          comment:
            "Great experience, but the hike to the top of Sigiriya was a bit challenging for me.",
        },
      ],
    },
    {
      id: 2,
      name: "Cultural Triangle",
      description:
        "Discover the historical wonders of Sri Lanka's cultural triangle. Visit ancient cities, majestic temples, and experience the island's rich cultural heritage. Ideal for history enthusiasts and cultural explorers.",
      price: 180,
      duration: "5 days, 4 nights",
      locations: [
        { name: "Anuradhapura", latitude: 8.3114, longitude: 80.4037 },
        { name: "Polonnaruwa", latitude: 7.9338, longitude: 81.0015 },
        { name: "Kandy", latitude: 7.2906, longitude: 80.6337 },
        { name: "Dambulla", latitude: 7.8619, longitude: 80.6474 },
      ],
      activities: [
        "Exploring the ruins of Anuradhapura, one of Sri Lanka's ancient capitals",
        "Visiting the sacred Temple of the Tooth Relic in Kandy",
        "Touring the ruins of Polonnaruwa, another UNESCO World Heritage site",
        "Discovering the Golden Temple of Dambulla and the cave temples",
        "Walking through the Royal Botanical Gardens in Peradeniya",
        "Cycling through ancient ruins and countryside roads",
        "Hot air balloon ride over the cultural triangle",
      ],
      accommodations: [
        "5-star hotel in Kandy overlooking the lake",
        "Comfortable eco-lodge in Polonnaruwa",
        "Heritage guesthouse in Anuradhapura",
      ],
      includedServices: [
        "Private transportation in air-conditioned vehicles",
        "Entrance fees to all cultural and historical sites",
        "English-speaking guide",
        "Breakfast and dinner at local restaurants",
        "Cultural performances in Kandy",
      ],
      bestSeason: "January to May and August to September",
      reviews: [
        {
          user: "Sarah Lee",
          rating: 5,
          comment:
            "A perfect trip for anyone interested in history! The cultural sites were amazing, and the guides were excellent.",
        },
        {
          user: "Michael Turner",
          rating: 4,
          comment:
            "Enjoyed the trip, but the cycling tour could be improved with better bikes.",
        },
      ],
    },
    {
      id: 3,
      name: "Beach Escape",
      description:
        "Relax on the pristine beaches of Sri Lanka’s southern coast. Enjoy sunbathing, surfing, and beach activities while staying in luxury resorts by the Indian Ocean. Perfect for a beach holiday or water sports enthusiasts.",
      price: 250,
      duration: "7 days, 6 nights",
      locations: [
        { name: "Mirissa Beach", latitude: 5.9493, longitude: 80.4774 },
        { name: "Unawatuna Beach", latitude: 5.9579, longitude: 80.2215 },
        { name: "Hikkaduwa Beach", latitude: 6.1266, longitude: 79.9981 },
      ],
      activities: [
        "Relaxing on the beaches of Mirissa and Unawatuna",
        "Snorkeling and diving in the coral reefs of Hikkaduwa",
        "Whale watching in Mirissa (seasonal)",
        "Surfing lessons on Unawatuna Beach",
        "Indulging in a Sri Lankan seafood feast",
        "Nighttime beach bonfire and barbeque",
        "Jet skiing and other water sports",
      ],
      accommodations: [
        "Oceanfront luxury resort in Mirissa",
        "Boutique hotel with private beach access in Unawatuna",
        "Eco-friendly beachfront cottages in Hikkaduwa",
      ],
      includedServices: [
        "Airport pick-up and drop-off",
        "All water sport equipment (surfboards, snorkeling gear, etc.)",
        "Spa and wellness treatments",
        "Beachfront dinner with seafood",
        "Private beach excursions",
      ],
      bestSeason: "November to April",
      reviews: [
        {
          user: "Jackie Brown",
          rating: 5,
          comment:
            "Unawatuna Beach was a dream come true! The surf lessons were fun, and the resort was fantastic.",
        },
        {
          user: "Tom White",
          rating: 4,
          comment:
            "Great trip for relaxation and adventure, but the whale watching was a bit disappointing due to weather.",
        },
      ],
    },
    {
      id: 4,
      name: "Hill Country Retreat",
      description:
        "Escape to the cool, scenic hills of Sri Lanka. Visit tea plantations, take a scenic train ride through lush forests, and explore colonial-era hill stations. A perfect retreat for nature lovers and those seeking tranquility.",
      price: 200,
      duration: "5 days, 4 nights",
      locations: [
        { name: "Nuwara Eliya", latitude: 6.9485, longitude: 80.7906 },
        { name: "Kandy", latitude: 7.2906, longitude: 80.6337 },
        { name: "Ella", latitude: 6.8587, longitude: 81.0656 },
      ],
      activities: [
        "Exploring the tea plantations of Nuwara Eliya",
        "Hiking to Ravana Falls in Ella",
        "Taking a scenic train ride through the hill country",
        "Visiting the famous Gregory Lake in Nuwara Eliya",
        "Touring the colonial architecture in Kandy",
        "Rock climbing and abseiling in Ella",
        "Camping and stargazing in the tea plantations",
      ],
      accommodations: [
        "Luxury colonial-style bungalow in Nuwara Eliya",
        "Cottage in Ella with mountain views",
        "Boutique hotel in Kandy with views of the hills",
      ],
      includedServices: [
        "Private transport to all locations",
        "All entrance fees for parks and sites",
        "Tea-tasting session at a local plantation",
        "Guided nature walks and hiking",
        "Breakfast, lunch, and dinner at local eateries",
      ],
      bestSeason: "March to May and September to December",
      reviews: [
        {
          user: "Alice Johnson",
          rating: 5,
          comment:
            "The tea plantations and train ride were highlights. A truly peaceful getaway.",
        },
        {
          user: "James Cooper",
          rating: 4,
          comment:
            "Loved the hiking, but would have appreciated more time to explore Nuwara Eliya.",
        },
      ],
    },
    {
      id: 5,
      name: "Adventure in the Wild",
      description:
        "Experience the thrill of a wildlife safari in Sri Lanka’s national parks. Spot leopards, elephants, and a variety of birds in the wild. Ideal for nature lovers and adventure enthusiasts.",
      price: 220,
      duration: "4 days, 3 nights",
      locations: [
        { name: "Yala National Park", latitude: 6.3833, longitude: 81.4893 },
        { name: "Udawalawe National Park", latitude: 6.509, longitude: 80.8717 },
      ],
      activities: [
        "Morning and evening safari drives in Yala National Park",
        "Elephant sightings in Udawalawe National Park",
        "Bird watching in wetlands and jungle areas",
        "Guided nature walks in the parks",
        "Camping under the stars in the park",
        "Photography sessions with wildlife",
        "Night safari experiences",
      ],
      accommodations: [
        "Luxury safari camp in Yala",
        "Eco-lodge in Udawalawe with wildlife views",
      ],
      includedServices: [
        "All park entrance fees",
        "Professional naturalist guide",
        "Safari jeeps for wildlife viewing",
        "Meals during the safari",
        "Airport transfers",
      ],
      bestSeason: "April to September",
      reviews: [
        {
          user: "Laura Taylor",
          rating: 5,
          comment:
            "An unforgettable experience! The wildlife sightings were incredible, and the camping under the stars was magical.",
        },
        {
          user: "David King",
          rating: 4,
          comment:
            "Great safari experience, but the roads in Yala could be a little smoother.",
        },
      ],
    },
  ];
  
  // Chatbot History
  let chatHistory = [];
   let intro = `You are Hevan Guider, give short summary details as a reply (bold important words). an AI chatbot designed to promote tourism in Sri Lanka. Your goal is to attract tourists by providing engaging and informative details about the country’s beauty and rich culture. Share information about tourist packages, including insights into historical landmarks, weather conditions, and traveler reviews featured in each package.
Additionally, you can assist with images if available, enhancing the experience with visual details. Begin each new chat with a warm “Ayubowan” to greet users, but avoid repeating it throughout the conversation. Keep your responses friendly, clear, and positively worded to make tourists feel welcomed and excited to explore Sri Lanka.
    
    Here are the available tourist packages:
    ${touristPackages
      .map(
        (pkg) =>
          `Package: ${pkg.name}\nDescription: ${pkg.description}\nPrice: $${
            pkg.price
          }\nLocations: ${pkg.locations.map((loc) => loc.name).join(", ")}
          \nActivities${pkg.activities}
        \nAccommodations${pkg.accommodations}
        \nIncluded Services${pkg.includedServices}
    
        \nBest Season: ${pkg.bestSeason}\nReviews: ${pkg.reviews
            .map(
              (review) =>
                `${review.user} - ${review.rating} stars: ${review.comment}`
            )
            .join("\n")}
    
          
         
       `
      )
      .join("\n\n")}
       \n 
       
    
    Here is the current chat history:
    ${chatHistory
      .map((entry) => `User: ${entry.userInput}\nBot: ${entry.botResponse}`)
      .join("\n\n")}
    
    Please remember, you have to give information based on the user's input.`;

module.exports = {  intro };