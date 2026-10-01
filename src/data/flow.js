import { images } from "./content";

export const pathways = [
  {
    label: "Compete",
    to: "/events",
    text: "Find your next tournament. Bring your game.",
  },
  {
    label: "Train",
    to: "/coaching",
    text: "Build confidence, sharpen skills, keep progressing.",
  },
  {
    label: "Connect",
    to: "/contact?interest=community",
    text: "Meet the people who share your love of the court.",
  },
  {
    label: "Partner",
    to: "/partners",
    text: "Create something bigger with Pickle Addict.",
  },
];
export const bottomActions = [
  { label: "Play", to: "/contact?interest=community" },
  { label: "Compete", to: "/events" },
  { label: "Train", to: "/coaching" },
  { label: "Partner", to: "/partners" },
];
export const partners = [
  "Zyrex",
  "Traction Sports",
  "Lita7",
  "FastnUp",
  "Pickleball Thane",
];
export const coachingPrograms = [
  {
    title: "Clinics",
    text: "Focused practice on a specific part of your game. Upcoming clinic dates and formats will be announced here.",
  },
  {
    title: "Pickle Addict coaching",
    text: "Start with the fundamentals, then develop the skills to feel at home on court.",
  },
  {
    title: "Playmakers Academy",
    text: "A dedicated space for learning and player development. Program details coming soon.",
  },
  {
    title: "1:1 sessions",
    text: "Focused coaching built around your game, your goals, and your next step.",
  },
  {
    title: "Group sessions",
    text: "Learn together, practise together, and put new skills into play.",
  },
  {
    title: "Junior development",
    text: "Help young players discover the sport and build a strong foundation.",
  },
];
export const progression = [
  ["Discover", "Get comfortable with the paddle, the court, and the rules."],
  ["Develop", "Work on consistency, movement, and shot selection."],
  ["Compete", "Bring your skills into match play and keep learning."],
];
export const founderJourney = [
  "Player",
  "Coach",
  "Community Builder",
  "Tournament Organizer",
  "Entrepreneur",
];
export const galleryCategories = [
  "All",
  "Tournament photos",
  "ATP moments",
  "Community",
  "Coaching",
  "Behind the scenes",
];
export const gallery = [
  {
    image: images.group,
    category: "Tournament photos",
    title: "A moment worth celebrating",
    alt: "Pickle Addict event participants posing together with medals and paddles",
  },
  {
    image: images.hero,
    category: "Tournament photos",
    title: "Eyes on the next shot",
    alt: "A pickleball player preparing to return the ball",
  },
  {
    image: images.community,
    category: "Community",
    title: "The people behind the game",
    alt: "Players smiling together with their medals",
  },
  {
    image: images.about,
    category: "Behind the scenes",
    title: "Keeping the game moving",
    alt: "A courtside coordinator holding a clipboard beside the net",
  },
];
export const storyCategories = [
  "Community stories",
  "Testimonials",
  "Tournament announcements",
  "Winners",
  "Player stories",
  "Partner announcements",
  "Community milestones",
];
export const interests = {
  community: "Joining the community",
  coaching: "Book a coaching session",
  partner: "Partnership enquiry",
  events: "Tournament enquiry",
  atp: "ATP enquiry",
};
