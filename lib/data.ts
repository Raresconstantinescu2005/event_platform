export type EventCategory = "concerts" | "movies" | "conferences" | "theater" | "festivals" | "comedy" | "sports"

export interface EventItem {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  category: EventCategory
  date: string
  time: string
  endTime: string
  location: string
  venue: string
  city: string
  price: number
  originalPrice?: number
  currency: string
  image: string
  featured: boolean
  soldOut: boolean
  tags: string[]
  organizer: string
  capacity: number
  ticketTypes: TicketType[]
}

export interface TicketType {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  available: number
  maxPerOrder: number
}

export const categories: { id: EventCategory; label: string; icon: string }[] = [
  { id: "concerts", label: "Concerts", icon: "music" },
  { id: "movies", label: "Movies", icon: "film" },
  { id: "conferences", label: "Conferences", icon: "presentation" },
  { id: "theater", label: "Theater", icon: "drama" },
  { id: "festivals", label: "Festivals", icon: "party" },
  { id: "comedy", label: "Comedy", icon: "mic" },
  { id: "sports", label: "Sports", icon: "trophy" },
]

export const events: EventItem[] = [
  {
    id: "aurora-world-tour",
    title: "Aurora World Tour 2026",
    subtitle: "The Ethereal Experience",
    description: "Experience the magic of Aurora's world tour with stunning visuals and an unforgettable setlist spanning her entire discography.",
    longDescription: "Join Aurora on her most ambitious world tour yet. This spectacular show combines breathtaking visual effects with her ethereal vocals, creating an immersive experience that transcends traditional concerts. The setlist features beloved tracks from across her discography, including new material from her latest album. With a state-of-the-art stage design and production that has been years in the making, this is a once-in-a-lifetime event for fans and music lovers alike.",
    category: "concerts",
    date: "2026-04-15",
    time: "20:00",
    endTime: "23:00",
    location: "Madison Square Garden, New York",
    venue: "Madison Square Garden",
    city: "New York",
    price: 85,
    originalPrice: 120,
    currency: "USD",
    image: "/images/event-concert.jpg",
    featured: true,
    soldOut: false,
    tags: ["Live Music", "Pop", "Indie"],
    organizer: "Live Nation",
    capacity: 20000,
    ticketTypes: [
      { id: "ga", name: "General Admission", description: "Standing area with access to main floor", price: 85, originalPrice: 120, available: 5000, maxPerOrder: 6 },
      { id: "reserved", name: "Reserved Seating", description: "Assigned seat in the upper levels", price: 125, available: 8000, maxPerOrder: 8 },
      { id: "vip", name: "VIP Experience", description: "Premium seating, backstage tour, and meet & greet", price: 350, available: 200, maxPerOrder: 2 },
    ],
  },
  {
    id: "interstellar-remaster",
    title: "Interstellar: IMAX 70mm",
    subtitle: "Remastered Screening",
    description: "Christopher Nolan's masterpiece returns to the big screen in stunning IMAX 70mm film, the way it was meant to be seen.",
    longDescription: "Experience Interstellar like never before in this special IMAX 70mm screening event. Christopher Nolan personally oversaw the remastering process to ensure every frame captures the grandeur of space exploration. The screening will be preceded by an exclusive behind-the-scenes documentary and followed by a Q&A session with members of the production team. Hans Zimmer's iconic score will resonate through the theater's state-of-the-art Dolby Atmos sound system.",
    category: "movies",
    date: "2026-03-28",
    time: "19:00",
    endTime: "22:30",
    location: "AMC Lincoln Square, New York",
    venue: "AMC Lincoln Square IMAX",
    city: "New York",
    price: 35,
    currency: "USD",
    image: "/images/event-movie.jpg",
    featured: true,
    soldOut: false,
    tags: ["IMAX", "Sci-Fi", "Special Screening"],
    organizer: "AMC Theatres",
    capacity: 600,
    ticketTypes: [
      { id: "standard", name: "Standard IMAX", description: "IMAX 70mm viewing experience", price: 35, available: 400, maxPerOrder: 10 },
      { id: "premium", name: "Premium IMAX", description: "Center seats with optimal viewing angle", price: 55, available: 150, maxPerOrder: 6 },
      { id: "ultimate", name: "Ultimate Experience", description: "Best seats, popcorn & drink combo, exclusive poster", price: 85, available: 50, maxPerOrder: 4 },
    ],
  },
  {
    id: "future-tech-summit",
    title: "Future Tech Summit 2026",
    subtitle: "Shaping Tomorrow's Technology",
    description: "The premier technology conference bringing together industry leaders, innovators, and visionaries to explore the future of AI, Web3, and beyond.",
    longDescription: "Future Tech Summit 2026 is the most anticipated technology conference of the year. Over two days, you'll hear from 50+ world-class speakers, participate in hands-on workshops, and network with thousands of industry professionals. Topics include artificial intelligence, quantum computing, sustainable technology, and the future of human-computer interaction. Past speakers have included leaders from OpenAI, Google, Apple, and emerging startups reshaping the tech landscape.",
    category: "conferences",
    date: "2026-05-12",
    time: "09:00",
    endTime: "18:00",
    location: "Moscone Center, San Francisco",
    venue: "Moscone Center",
    city: "San Francisco",
    price: 299,
    originalPrice: 499,
    currency: "USD",
    image: "/images/event-conference.jpg",
    featured: true,
    soldOut: false,
    tags: ["Technology", "AI", "Networking"],
    organizer: "TechEvents Global",
    capacity: 5000,
    ticketTypes: [
      { id: "general", name: "General Pass", description: "Access to all keynotes and expo floor", price: 299, originalPrice: 499, available: 3000, maxPerOrder: 5 },
      { id: "pro", name: "Pro Pass", description: "General access plus workshops and networking events", price: 599, available: 1500, maxPerOrder: 3 },
      { id: "executive", name: "Executive Pass", description: "All access with exclusive executive roundtables and VIP lounge", price: 1299, available: 200, maxPerOrder: 2 },
    ],
  },
  {
    id: "phantom-broadway",
    title: "The Phantom of the Opera",
    subtitle: "Broadway Revival",
    description: "The legendary musical returns to Broadway with a stunning new production featuring groundbreaking stagecraft and a powerhouse cast.",
    longDescription: "Andrew Lloyd Webber's timeless masterpiece returns to Broadway in a spectacular new production that reimagines the classic for a new generation. This lavish revival features cutting-edge technology seamlessly integrated with traditional theatrical craftsmanship, creating moments of pure magic. The cast includes some of Broadway's most acclaimed performers, bringing new depth and emotion to the beloved story of music, mystery, and romance beneath the Paris Opera House.",
    category: "theater",
    date: "2026-04-05",
    time: "19:30",
    endTime: "22:15",
    location: "Majestic Theatre, Broadway, New York",
    venue: "Majestic Theatre",
    city: "New York",
    price: 89,
    currency: "USD",
    image: "/images/event-theater.jpg",
    featured: false,
    soldOut: false,
    tags: ["Broadway", "Musical", "Classic"],
    organizer: "Broadway Productions",
    capacity: 1600,
    ticketTypes: [
      { id: "mezzanine", name: "Mezzanine", description: "Upper level seating with full stage view", price: 89, available: 400, maxPerOrder: 8 },
      { id: "orchestra", name: "Orchestra", description: "Ground floor seating close to the stage", price: 175, available: 600, maxPerOrder: 6 },
      { id: "premium-orchestra", name: "Premium Orchestra", description: "Best seats in the house, center orchestra", price: 295, available: 200, maxPerOrder: 4 },
    ],
  },
  {
    id: "solstice-festival",
    title: "Solstice Music Festival",
    subtitle: "Three Days of Pure Sound",
    description: "An immersive three-day outdoor music festival featuring 60+ artists across 4 stages, art installations, and culinary experiences.",
    longDescription: "Solstice Music Festival is the ultimate summer music experience. Set in the beautiful rolling hills outside Austin, this three-day festival brings together 60+ artists spanning genres from electronic to indie rock, hip-hop to jazz. Beyond the music, explore interactive art installations, artisan food markets featuring local chefs, wellness areas, and camping under the stars. Previous headliners have included some of the biggest names in music, and 2026 promises to be the most spectacular edition yet.",
    category: "festivals",
    date: "2026-06-20",
    time: "12:00",
    endTime: "23:59",
    location: "Riverside Grounds, Austin",
    venue: "Riverside Grounds",
    city: "Austin",
    price: 199,
    originalPrice: 299,
    currency: "USD",
    image: "/images/event-festival.jpg",
    featured: true,
    soldOut: false,
    tags: ["Festival", "Outdoor", "Multi-Day"],
    organizer: "Solstice Events",
    capacity: 30000,
    ticketTypes: [
      { id: "day-pass", name: "Single Day Pass", description: "Access for one day of your choice", price: 99, available: 10000, maxPerOrder: 4 },
      { id: "weekend", name: "Weekend Pass", description: "Full three-day access", price: 199, originalPrice: 299, available: 15000, maxPerOrder: 4 },
      { id: "vip-weekend", name: "VIP Weekend", description: "Three-day VIP with premium viewing, lounges, and camping", price: 499, available: 2000, maxPerOrder: 2 },
    ],
  },
  {
    id: "comedy-night-live",
    title: "Comedy Night Live",
    subtitle: "Featuring Trevor Noah & Friends",
    description: "An evening of world-class stand-up comedy featuring Trevor Noah and a lineup of surprise special guests.",
    longDescription: "Get ready for an unforgettable night of laughter with Trevor Noah headlining an incredible evening of stand-up comedy. Known for his sharp wit and insightful humor, Trevor will be joined by a lineup of surprise special guests that will keep you laughing all night long. This intimate venue setting ensures every seat is a great seat, bringing you closer to the comedy than ever before. Don't miss this rare opportunity to see one of the world's top comedians in an up-close and personal setting.",
    category: "comedy",
    date: "2026-03-22",
    time: "21:00",
    endTime: "23:30",
    location: "The Comedy Store, Los Angeles",
    venue: "The Comedy Store",
    city: "Los Angeles",
    price: 65,
    currency: "USD",
    image: "/images/event-comedy.jpg",
    featured: false,
    soldOut: false,
    tags: ["Stand-Up", "Live Comedy", "Special Guest"],
    organizer: "The Comedy Store",
    capacity: 450,
    ticketTypes: [
      { id: "general", name: "General Admission", description: "Table seating on a first-come basis", price: 65, available: 300, maxPerOrder: 6 },
      { id: "front-row", name: "Front Row", description: "Reserved front row tables", price: 120, available: 50, maxPerOrder: 4 },
      { id: "vip-booth", name: "VIP Booth", description: "Private booth with bottle service", price: 350, available: 10, maxPerOrder: 1 },
    ],
  },
  {
    id: "champions-final",
    title: "Champions League Final",
    subtitle: "The Ultimate Showdown",
    description: "Witness the biggest match in club football as Europe's finest compete for the ultimate prize at the iconic Wembley Stadium.",
    longDescription: "The UEFA Champions League Final returns to London's iconic Wembley Stadium for what promises to be the most thrilling finale in years. Two of Europe's elite clubs will battle it out for continental glory in front of 90,000 passionate fans. The atmosphere, the drama, the passion - there's nothing quite like the Champions League Final. Soak in the pre-match festivities, including live music performances and fan zones, before witnessing 90+ minutes of world-class football that will be talked about for years to come.",
    category: "sports",
    date: "2026-05-30",
    time: "20:00",
    endTime: "23:00",
    location: "Wembley Stadium, London",
    venue: "Wembley Stadium",
    city: "London",
    price: 195,
    currency: "USD",
    image: "/images/event-sports.jpg",
    featured: false,
    soldOut: false,
    tags: ["Football", "Champions League", "Final"],
    organizer: "UEFA",
    capacity: 90000,
    ticketTypes: [
      { id: "category3", name: "Category 3", description: "Upper tier seating behind the goals", price: 195, available: 30000, maxPerOrder: 4 },
      { id: "category1", name: "Category 1", description: "Lower tier, sideline seating", price: 495, available: 20000, maxPerOrder: 4 },
      { id: "hospitality", name: "Hospitality Suite", description: "Premium suite with catering and exclusive access", price: 2500, available: 500, maxPerOrder: 2 },
    ],
  },
  {
    id: "neon-nights-dj",
    title: "Neon Nights: DJ Marathon",
    subtitle: "12 Hours of Electronic Bliss",
    description: "An all-night electronic music event featuring world-renowned DJs in an immersive, neon-lit warehouse experience.",
    longDescription: "Neon Nights transforms a massive industrial warehouse into an otherworldly electronic music playground. From dusk till dawn, experience 12 hours of non-stop beats from the world's top electronic music artists. The venue features stunning LED installations, immersive visual projections, multiple sound stages, and an atmosphere that will transport you to another dimension. This is more than a concert - it's a complete sensory experience.",
    category: "concerts",
    date: "2026-04-25",
    time: "21:00",
    endTime: "09:00",
    location: "The Warehouse, Brooklyn",
    venue: "The Warehouse",
    city: "Brooklyn",
    price: 75,
    currency: "USD",
    image: "/images/event-concert.jpg",
    featured: false,
    soldOut: true,
    tags: ["Electronic", "DJ", "All Night"],
    organizer: "Neon Events",
    capacity: 3000,
    ticketTypes: [
      { id: "early-bird", name: "Early Bird", description: "Limited early bird pricing", price: 55, available: 0, maxPerOrder: 4 },
      { id: "general", name: "General Admission", description: "Full event access", price: 75, available: 0, maxPerOrder: 4 },
      { id: "vip", name: "VIP", description: "Elevated viewing area, premium bar, and artist lounge access", price: 175, available: 0, maxPerOrder: 2 },
    ],
  },
]

export function getEvent(id: string): EventItem | undefined {
  return events.find((e) => e.id === id)
}

export function getFeaturedEvents(): EventItem[] {
  return events.filter((e) => e.featured)
}

export function getEventsByCategory(category: EventCategory): EventItem[] {
  return events.filter((e) => e.category === category)
}

export function formatPrice(price: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(price)
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function formatShortDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })
}

export function formatTime(time: string): string {
  const [hours, minutes] = time.split(":")
  const h = parseInt(hours)
  const ampm = h >= 12 ? "PM" : "AM"
  const hour12 = h % 12 || 12
  return `${hour12}:${minutes} ${ampm}`
}
