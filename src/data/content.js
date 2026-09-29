const photo = (name) => `/images/${name}-1280.webp`;
export const images = {
  hero: photo("pickleball-player-action"),
  about: photo("pickleball-courtside-official"),
  community: photo("pickleball-medalists-group-photo"),
  group: photo("pickleaddict-night-group-photo"),
};
export const imageSources = (image) =>
  [640, 1280, 1920]
    .map(
      (width) => `${image.replace("-1280.webp", `-${width}.webp`)} ${width}w`,
    )
    .join(", ");
export const brand = {
  name: "Pickle Addict",
  tagline: "Where Pickleball Meets Community",
  email: "hello@pickleball.example",
  phone: "+1 (555) 010-2025",
  address: "24 Rally Lane, Court District",
  hours: "Every day · 6:00 AM – 10:00 PM",
};
export const navigation = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/atp", label: "ATP" },
  { to: "/coaching", label: "Coaching" },
  { to: "/partners", label: "Partners" },
  { to: "/vault", label: "The Vault" },
  { to: "/about", label: "About" },
  { to: "/stories", label: "Stories" },
];
export const features = [
  {
    icon: "zap",
    title: "Fast-paced.",
    text: "Quick reactions. Clever shots. That one rally you’ll talk about all week.",
    label: "FEEL THE RUSH",
  },
  {
    icon: "users",
    title: "Better together.",
    text: "Come for a game. Stay for the people. Your next doubles partner is waiting.",
    label: "FIND YOUR PEOPLE",
  },
  {
    icon: "target",
    title: "Easy to love.",
    text: "Simple to pick up, endlessly rewarding to master. One game and you’ll get it.",
    label: "START SOMETHING GOOD",
  },
  {
    icon: "heart",
    title: "For everyone.",
    text: "First-timer or seasoned player, there’s a place on the court with your name on it.",
    label: "YOU BELONG HERE",
  },
];
export const stats = [
  { value: 500, suffix: "+", label: "Community members" },
  { value: 100, suffix: "+", label: "Players trained" },
];
export const values = [
  {
    icon: "users",
    title: "Community",
    text: "We learn names, cheer each other on, and always make room for one more.",
  },
  {
    icon: "target",
    title: "Competition",
    text: "Play with purpose. Give it your best. Shake hands after every game.",
  },
  {
    icon: "zap",
    title: "Energy",
    text: "Bring your enthusiasm. We’ll bring the rallies that make you come alive.",
  },
  {
    icon: "heart",
    title: "Inclusivity",
    text: "Every age, every background, every ability. This court is yours, too.",
  },
];
export const milestones = [
  [
    "2021",
    "A simple idea.",
    "A few friends, borrowed paddles, and the feeling that this could be something.",
  ],
  [
    "2022",
    "Our first rallies.",
    "Weekend games became a ritual. Strangers became regulars.",
  ],
  [
    "2023",
    "A place of our own.",
    "Our first dedicated courts opened their gates to everyone.",
  ],
  [
    "2024",
    "More than a club.",
    "New faces, local tournaments, and a community finding its stride.",
  ],
  [
    "2025",
    "Just getting started.",
    "More courts, more connections, and a whole new chapter ahead.",
  ],
];
