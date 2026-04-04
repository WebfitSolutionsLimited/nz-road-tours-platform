export const IMAGES = {
  hero: "https://static.prod-images.emergentagent.com/jobs/ec54f033-3415-4ba5-8cb6-57323ae05d70/images/dfa1b40089b0212cf9f5c4ab655beaec06c4a6936d9b62275c3443d0dece2166.png",
  chauffeur: "https://static.prod-images.emergentagent.com/jobs/ec54f033-3415-4ba5-8cb6-57323ae05d70/images/404429e65295033d7260e90ceeef22946d19e6d69708b5fca398224f376bcda9.png",
  vanInterior: "https://static.prod-images.emergentagent.com/jobs/ec54f033-3415-4ba5-8cb6-57323ae05d70/images/ebec20c20439bdc8178dd1581ea64f7b39c90622b8c44dce45a35960e44ee7ad.png",
  mountains: "https://images.pexels.com/photos/35364668/pexels-photo-35364668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  snow: "https://images.pexels.com/photos/1353238/pexels-photo-1353238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  hobbiton: "https://images.unsplash.com/photo-1505632436162-719c53ad6a0d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwyfHxob2JiaXRvbiUyMG5ldyUyMHplYWxhbmR8ZW58MHx8fHwxNzc1MjkwMzIxfDA&ixlib=rb-4.1.0&q=85",
  rotorua: "https://images.unsplash.com/photo-1693887386950-0fc52a1b5498?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwxfHxyb3RvcnVhJTIwZ2VvdGhlcm1hbCUyMGhvdCUyMHNwcmluZ3MlMjBuZXclMjB6ZWFsYW5kfGVufDB8fHx8MTc3NTI5MDYzOXww&ixlib=rb-4.1.0&q=85",
  waitomo: "https://images.pexels.com/photos/4090101/pexels-photo-4090101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  bayOfIslands: "https://images.unsplash.com/photo-1593210563043-6bec3f4bebee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxiYXklMjBvZiUyMGlzbGFuZHMlMjBuZXclMjB6ZWFsYW5kfGVufDB8fHx8MTc3NTI5MDYzOXww&ixlib=rb-4.1.0&q=85",
  coromandel: "https://images.unsplash.com/photo-1707476272146-23b6c9d1c91c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxjb3JvbWFuZGVsJTIwcGVuaW5zdWxhJTIwYmVhY2glMjBuZXclMjB6ZWFsYW5kfGVufDB8fHx8MTc3NTI5MDYzOXww&ixlib=rb-4.1.0&q=85",
  auckland: "https://images.unsplash.com/photo-1677557771394-f4fa56446952?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwxfHxhdWNrbGFuZCUyMHNreWxpbmUlMjBoYXJib3VyJTIwbmV3JTIwemVhbGFuZHxlbnwwfHx8fDE3NzUyOTA2Mzl8MA&ixlib=rb-4.1.0&q=85",
};

export const services = [
  {
    id: "airport-transfer",
    title: "Auckland Airport Transfers",
    shortDesc: "Seamless Auckland Airport pickups and drop-offs with professional meet & greet service.",
    fullDesc: "Arrive in style or catch your flight without the stress. Our Auckland Airport transfer service offers reliable, comfortable, and punctual transportation between Auckland Airport and any destination in the Auckland region. Your driver will be waiting with a name board at the arrivals hall, ready to help with luggage and ensure a smooth start to your New Zealand journey.",
    includes: ["Meet & greet at arrivals", "Luggage assistance", "Child seats available", "Flight monitoring for delays", "Door-to-door service"],
    image: "auckland",
  },
  {
    id: "day-tour",
    title: "Day Tours from Auckland",
    shortDesc: "Explore New Zealand's best destinations with personalised day trips from Auckland.",
    fullDesc: "Experience the best of New Zealand in a single day. Our private day tours from Auckland take you to iconic destinations including Waitomo Caves, Hobbiton Movie Set, Rotorua's geothermal wonders, the Coromandel Peninsula, Bay of Islands, and more. Each tour is tailored to your interests, with flexible itineraries and a knowledgeable driver-guide.",
    includes: ["Private vehicle & driver-guide", "Flexible itinerary", "Hotel pickup & drop-off", "Local knowledge & hidden gems", "All-day comfort"],
    image: "hobbiton",
  },
  {
    id: "multi-day-tour",
    title: "Multi-Day NZ Tours",
    shortDesc: "Custom multi-day tours across the North and South Islands of New Zealand.",
    fullDesc: "Discover New Zealand at your own pace with our custom multi-day tours. Whether you want to explore the volcanic landscapes of the North Island or the dramatic fjords of the South Island, we design journeys around your interests, pace, and travel style. From 3-day escapes to 14-day grand tours, every detail is crafted for an unforgettable experience.",
    includes: ["Custom itinerary design", "Accommodation recommendations", "One dedicated driver throughout", "Scenic route planning", "Flexible daily schedule"],
    image: "mountains",
  },
  {
    id: "chauffeur",
    title: "Private Chauffeur Service",
    shortDesc: "Hourly and full-day private chauffeur hire for any occasion across New Zealand.",
    fullDesc: "Whether it's a business meeting, a special event, or simply exploring at your own pace, our private chauffeur service provides a premium, flexible transportation experience. Available by the hour or for full-day hire, you'll enjoy the comfort of a luxury vehicle with a professional, discreet driver.",
    includes: ["Hourly or full-day hire", "Professional driver", "Premium vehicle fleet", "Corporate & event transport", "Flexible scheduling"],
    image: "chauffeur",
  },
];

export const tours = [
  {
    id: "waitomo-hobbiton",
    title: "Waitomo Caves & Hobbiton",
    duration: "Full Day (10-12 hours)",
    description: "Explore the magical Waitomo Glowworm Caves and step into Middle-earth at the Hobbiton Movie Set. This iconic day trip combines two of New Zealand's most famous attractions.",
    highlights: ["Waitomo Glowworm Caves boat ride", "Hobbiton Movie Set guided tour", "Scenic Waikato countryside", "Lunch at Green Dragon Inn"],
    image: "hobbiton",
    price: "From NZ$650",
  },
  {
    id: "rotorua",
    title: "Rotorua Geothermal Adventure",
    duration: "Full Day (10-12 hours)",
    description: "Discover Rotorua's bubbling mud pools, erupting geysers, and rich Maori culture. This tour takes you through one of the world's most active geothermal regions.",
    highlights: ["Te Puia or Wai-O-Tapu geothermal park", "Maori cultural experience", "Redwood Forest walk", "Lake Rotorua views"],
    image: "rotorua",
    price: "From NZ$600",
  },
  {
    id: "bay-of-islands",
    title: "Bay of Islands Discovery",
    duration: "Full Day (12-14 hours)",
    description: "Journey north to the stunning Bay of Islands, a subtropical paradise of 144 islands. Visit historic Waitangi, cruise the bay, and explore charming coastal towns.",
    highlights: ["Waitangi Treaty Grounds", "Hole in the Rock cruise option", "Russell historic village", "Scenic coastal drive"],
    image: "bayOfIslands",
    price: "From NZ$750",
  },
  {
    id: "coromandel",
    title: "Coromandel Peninsula",
    duration: "Full Day (10-12 hours)",
    description: "Escape to the Coromandel Peninsula's pristine beaches, native bush walks, and the famous Cathedral Cove. A perfect day trip for nature lovers.",
    highlights: ["Cathedral Cove walk", "Hot Water Beach", "Thames goldfield town", "Coastal scenery"],
    image: "coromandel",
    price: "From NZ$600",
  },
  {
    id: "north-island-multi",
    title: "North Island Grand Tour",
    duration: "3-7 Days",
    description: "Experience the best of New Zealand's North Island on this customisable multi-day adventure. From Auckland to Wellington, covering Rotorua, Taupo, Napier, and more.",
    highlights: ["Rotorua geothermal wonders", "Lake Taupo & Huka Falls", "Napier Art Deco city", "Tongariro National Park"],
    image: "mountains",
    price: "From NZ$2,500",
  },
  {
    id: "south-island-multi",
    title: "South Island Explorer",
    duration: "5-14 Days",
    description: "Discover the breathtaking South Island with its dramatic fjords, glaciers, alpine lakes, and adventure sports. A journey through some of the world's most stunning landscapes.",
    highlights: ["Milford Sound cruise", "Queenstown adventure capital", "Franz Josef Glacier", "Mount Cook National Park"],
    image: "snow",
    price: "From NZ$4,500",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah & James Wilson",
    location: "London, UK",
    text: "An absolutely wonderful experience. Our driver was knowledgeable, friendly, and made our Hobbiton and Waitomo trip unforgettable. The vehicle was immaculate and comfortable.",
  },
  {
    id: 2,
    name: "Rajesh Patel",
    location: "Mumbai, India",
    text: "Best tour operator in New Zealand! The multi-day North Island tour was perfectly planned. Every hotel, every stop, every scenic viewpoint was thoughtfully chosen.",
  },
  {
    id: 3,
    name: "Emma & Tom Bennett",
    location: "Sydney, Australia",
    text: "Professional service from airport pickup to our final drop-off. The comfort of the vehicle and flexibility of the schedule made our honeymoon trip perfect.",
  },
  {
    id: 4,
    name: "Priya Sharma",
    location: "Delhi, India",
    text: "Travelled with our elderly parents and the service was exceptional. Safe driving, comfortable vehicle, and our guide knew every hidden gem in Rotorua.",
  },
  {
    id: 5,
    name: "Michael & Lisa Chen",
    location: "Singapore",
    text: "We booked a 5-day South Island tour and it exceeded all expectations. The driver was like a personal guide who knew every secret spot and great local restaurant.",
  },
  {
    id: 6,
    name: "The Anderson Family",
    location: "California, USA",
    text: "Traveling with three kids can be stressful, but NZ Road Tours made it so easy. Flexible stops, spacious vehicle, and an amazing driver who kept everyone entertained.",
  },
];

export const whyChooseUs = [
  {
    title: "Safety First",
    description: "Your safety is our top priority. All vehicles are regularly maintained and our drivers follow strict safety protocols.",
  },
  {
    title: "Personal Touch",
    description: "One dedicated driver for your entire journey who serves as your guide, photographer, and local expert.",
  },
  {
    title: "Flexible Itineraries",
    description: "Every tour is tailored to your interests and pace. Want to stop for a photo? Need extra time at a location? No problem.",
  },
  {
    title: "Local Expertise",
    description: "Our drivers know New Zealand inside out — from famous landmarks to hidden gems that only locals know about.",
  },
];

export const stats = [
  { value: "500+", label: "Happy Travellers" },
  { value: "100+", label: "Tours Completed" },
  { value: "50+", label: "Destinations" },
  { value: "5.0", label: "Average Rating" },
];
