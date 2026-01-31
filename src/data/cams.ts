export interface Cam {
  location: string;
  slug: string;
  video_id: string;
  category: "City" | "Nature";
  description: string;
  highlights: string[];
}

export const cams: Cam[] = [
  {
    "location": "Taipei: Xiangshan Overlooking Taipei 101 (象山看台北)",
    "slug": "xiangshan-taipei-101",
    "video_id": "z_fY1pj1VBw",
    "category": "City",
    "description": "Xiangshan (Elephant Mountain) offers the most iconic view of the Taipei skyline, dominated by the majestic Taipei 101. It is a favorite spot for both locals and tourists to witness the city's vibrant energy.",
    "highlights": ["Iconic Taipei 101 View", "Sunset & Nightscape", "Photography Hotspot"]
  },
  {
    "location": "Taipei: Dadaocheng Wharf (大稻埕碼頭)",
    "slug": "dadaocheng-wharf",
    "video_id": "Ndo_8RuefH4",
    "category": "City",
    "description": "Dadaocheng Wharf is a historic gateway to Taipei's past, now a bustling hub for riverside recreation, container markets, and spectacular sunset views over the Tamsui River.",
    "highlights": ["Riverside Walk", "Container Market", "Historic Architecture"]
  },
  {
    "location": "Taipei: Jiantanshan Weifeng Observatory (劍潭山微風平台)",
    "slug": "jiantanshan-observatory",
    "video_id": "34h_Cy_n0Ok",
    "category": "City",
    "description": "Located on Jiantan Mountain, the Weifeng Observatory provides a panoramic view of the Keelung River and the northern districts of Taipei, especially beautiful as city lights begin to twinkle.",
    "highlights": ["Panoramic River View", "Hiking Trail Access", "Evening Breeze"]
  },
  {
    "location": "Taipei: Yangmingshan Qingtiangang (陽明山 擎天崗)",
    "slug": "yangmingshan-qingtiangang",
    "video_id": "Vzqb7wZMDvo",
    "category": "Nature",
    "description": "Qingtiangang is a stunning lava terrace in Yangmingshan National Park, known for its rolling grasslands and grazing cattle. It offers a tranquil escape from the urban hustle.",
    "highlights": ["Alpine Grasslands", "Volcanic Landscapes", "Stargazing Spot"]
  },
  {
    "location": "New Taipei: Jiufen Old Street (九份山城)",
    "slug": "jiufen-old-street",
    "video_id": "XSD5ptYisw8",
    "category": "City",
    "description": "Jiufen is a charming mountain village in New Taipei City, famous for its narrow alleys, traditional teahouses, and its resemblance to scenes from 'Spirited Away'.",
    "highlights": ["Old World Charm", "Traditional Tea Houses", "Coastal Mountain Views"]
  },
  {
    "location": "Taoyuan: International Airport TPE (桃園國際機場)",
    "slug": "taoyuan-airport",
    "video_id": "91PfFoqvuUk",
    "category": "City",
    "description": "Watch live as international flights connect Taiwan to the world at Taoyuan International Airport (TPE), the busiest aviation hub on the island.",
    "highlights": ["Aviation Spotting", "Global Connection Hub", "Night Runway Lights"]
  },
  {
    "location": "Taoyuan: Hutoushan Environmental Park (虎頭山環保公園)",
    "slug": "hutoushan-park",
    "video_id": "tu_gsIkNt-w",
    "category": "Nature",
    "description": "Hutoushan Environmental Park is a rejuvenated green space in Taoyuan City, offering lush trails and a refreshing natural environment for families and hikers.",
    "highlights": ["Eco-friendly Park", "City View Platform", "Family Recreation"]
  },
  {
    "location": "Taoyuan: Daxi Old Street (大溪老街)",
    "slug": "daxi-old-street",
    "video_id": "XUWjAsajKXg",
    "category": "City",
    "description": "Daxi Old Street is renowned for its well-preserved Baroque-style architecture and traditional wood carving crafts. It is a historical treasure in Taoyuan.",
    "highlights": ["Baroque Architecture", "Gourmet Tofu", "Cultural Heritage"]
  },
  {
    "location": "Taoyuan: Shihmen Reservoir (石門水庫)",
    "slug": "shihmen-reservoir",
    "video_id": "GUCaVR88ZFU",
    "category": "Nature",
    "description": "Shihmen Reservoir is one of Taiwan's largest and most beautiful man-made lakes, surrounded by forest trails and famous for its seasonal maple foliage.",
    "highlights": ["Boating & Scenery", "Maple Viewing", "Freshwater Fish Cuisine"]
  },
  {
    "location": "Nantou: Hehuanshan Wuling Pavilion (合歡山 武嶺亭)",
    "slug": "hehuanshan-wuling",
    "video_id": "2lVMTs_Fj0M",
    "category": "Nature",
    "description": "Wuling is the highest point on Taiwan's highway system, offering breathtaking views of the Central Mountain Range. It is a prime location for snow watching in winter.",
    "highlights": ["High Altitude Scenery", "Snow Watching", "Alpine Hiking"]
  },
  {
    "location": "Nantou: Hehuanshan Kunyang Parking Lot (合歡山 昆陽)",
    "slug": "hehuanshan-kunyang",
    "video_id": "BiBNiJAW3dY",
    "category": "Nature",
    "description": "Kunyang is a key gateway to Hehuanshan, known for its dramatic alpine terrain and as a perfect spot to observe the sea of clouds.",
    "highlights": ["Sea of Clouds", "Star Observation", "Mountain Gateway"]
  },
  {
    "location": "Nantou: Sun Moon Lake Xiangshan (日月潭 向山遊客中心)",
    "slug": "sun-moon-lake-xiangshan",
    "video_id": "840Rqk5H4WI",
    "category": "Nature",
    "description": "Sun Moon Lake is Taiwan's most famous lake. The Xiangshan Visitor Center is an architectural masterpiece that blends seamlessly with the natural landscape.",
    "highlights": ["Breathtaking Lake Views", "Award-winning Architecture", "Cycling Trails"]
  },
  {
    "location": "Chiayi: Alishan Eryanping Trail (阿里山 二延平步道)",
    "slug": "alishan-eryanping",
    "video_id": "j2L_559nCjc",
    "category": "Nature",
    "description": "The Eryanping Trail in Alishan is famous for its sunset glow, bamboo forests, and the spectacular sea of clouds that often blankets the valley below.",
    "highlights": ["Sea of Clouds", "Tea Plantations", "Sunset Views"]
  },
  {
    "location": "Kaohsiung: Cijin Beach (旗津海水浴場)",
    "slug": "kaohsiung-cijin-beach",
    "video_id": "ka7FV0sCvxQ",
    "category": "Nature",
    "description": "Cijin is a vibrant island district of Kaohsiung, featuring long sandy beaches, fresh seafood markets, and historical landmarks like the Cijin Lighthouse.",
    "highlights": ["Island Vibe", "Seafood Market", "Surf & Sand"]
  },
  {
    "location": "Kaohsiung: Shoushan Lovers' Viewing Platform (壽山情人觀景台)",
    "slug": "kaohsiung-shoushan-view",
    "video_id": "C03Itx8iSC0",
    "category": "City",
    "description": "Overlooking the Port of Kaohsiung, the Shoushan Lovers' Viewing Platform is a romantic spot featuring the famous 'LOVE' installation and glittering night views.",
    "highlights": ["Port Panorama", "Romantic Installation", "City Nightlights"]
  },
  {
    "location": "Kaohsiung: Lotus Pond (蓮池潭)",
    "slug": "kaohsiung-lotus-pond",
    "video_id": "BnPoNatG-HE",
    "category": "City",
    "description": "Lotus Pond is a popular tourist destination in Kaohsiung, known for its lotus plants and numerous temples, including the iconic Dragon and Tiger Pagodas.",
    "highlights": ["Dragon & Tiger Pagodas", "Lakeside Temples", "Cultural Landmarks"]
  },
  {
    "location": "Hualien: Liyu Lake (鯉魚潭)",
    "slug": "hualien-liyu-lake",
    "video_id": "aaKOV4qkDHw",
    "category": "Nature",
    "description": "Liyu Lake is the largest freshwater lake in Hualien County, nestled against Liyu Mountain. It is a serene spot for boating, cycling, and bird watching.",
    "highlights": ["Lakeside Biking", "Boating Activities", "Bird Watching"]
  },
  {
    "location": "Hualien: Qixingtan Beach (七星潭)",
    "slug": "hualien-qixingtan",
    "video_id": "tWdI0YfY93Y",
    "category": "Nature",
    "description": "Qixingtan is a crescent-shaped bay in Hualien with crystal clear blue waters and a shore composed of smooth pebbles, offering a dramatic Pacific coastline view.",
    "highlights": ["Pacific Coastline", "Pebble Shore", "Sunrise Views"]
  },
  {
    "location": "Yilan: Fo Guang University Overlooking Lanyang Plain (佛光大學 蘭陽平原)",
    "slug": "yilan-lanyang-plain",
    "video_id": "OMCjMtCWr9c",
    "category": "City",
    "description": "Located on a hillside, Fo Guang University offers an unparalleled bird's-eye view of the fertile Lanyang Plain and Turtle Island in the distance.",
    "highlights": ["Plain Panorama", "Turtle Island View", "Serene Campus"]
  },
  {
    "location": "Pingtung: Kenting Nanwan Bay (墾丁 南灣)",
    "slug": "kenting-nanwan",
    "video_id": "9jrXieVMVZw",
    "category": "Nature",
    "description": "Nanwan (South Bay) is Kenting's most popular beach, famous for its fine sand and blue water, making it a paradise for water sports and sunbathers.",
    "highlights": ["Fine Sand Beach", "Water Sports", "Tropical Atmosphere"]
  }
];
