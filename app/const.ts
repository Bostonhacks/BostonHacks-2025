export const routes = [

  // { label: 'About', path: '#about', type: 'hash' as const },
  // { label: 'Login', path: '/login', type: 'page' as const },
  { label: "DISCORD", path: "https://discord.gg/JsPXpeB7", type: 'page' as const },
  { label: "DEVPOST", path: "https://bostonhacks-2025.devpost.com", type: 'page' as const },
  { label: "TRACKS", path: "#tracks", type: 'hash' as const },
  { label: "SCHEDULE", path: "#schedule", type: 'hash' as const },
  { label: "FAQs", path: "#faqs", type: 'hash' as const },
  { label: "SPONSORS", path: "#sponsors", type: 'hash' as const },
];

export const LOGO_SIZE = {
  width: 60,
  height: 60,
};

export const ETHNICITY_OPTIONS = [
  "American Indian or Alaska Native",
  "Asian",
  "Black or African American",
  "Hispanic or Latino",
  "Native Hawaiian or Other Pacific Islander",
  "White",
  "Two or More Races",
  "Prefer not to say",
  "Other"
];

export const MAJORS_OPTIONS = [
  "Computer Science",
  "Software Engineering",
  "Computer Engineering",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Chemical Engineering",
  "Biomedical Engineering",
  "Data Science",
  "Information Technology",
  "Information Systems",
  "Mathematics",
  "Statistics",
  "Physics",
  "Chemistry",
  "Biology",
  "Business Administration",
  "Economics",
  "Finance",
  "Marketing",
  "Psychology",
  "Medicine",
  "Humanities",
  "Language",
];

export const STATE_OPTIONS = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
  "DC", "Other"
];


export const TRACK_DESCRIPTIONS = [
  {
    name: "Upgrade.exe",
    description: ` 
Ever since the popping of the dot- com bubble, software and online applications have been in a race against the clock to stay relevant, usable, and modern. Unfortunately, not everything we’ve loved using over the years has kept up with the times.

But just because a piece of software fell behind doesn’t mean that it wasn’t worth creating. Many great ideas have been lost to time and are waiting for the right team to pick them up, dust them off, and help them evolve.

How can we take what we loved from these old applications, sites, or projects and reimagine them in the dawning age of automation, algorithms, and AI ?
  `
  },
  {
    name: "Protecting N00bs",
    description: `
Since 2007, the amount of data in the world has increased by 2200\%, but our ability to protect that data has lagged behind. As technology has become integral to modern life, many people find themselves needing to create new accounts, download new applications, and send important information without the cybersecurity knowledge to keep their devices and data safe.

With all these cybersecurity threats, how can you help people and enterprises secure their data and devices in a user-friendly, accessible way?
`
  },
  {
    name: "Make Fetch Happen",
    description: `
Billions of websites, millions of applications, new products being launched every day... but no one seems to be adding that magic mix of features that you’ve been looking for. Think you know better than the rest? Today’s the day to turn those crazy ideas into reality, building from scratch or merging different products together to create your very own concept. 

Add new features to your favorite product, apply an existing feature in a novel way, or burn it all to the ground and create something completely different from anything we’ve seen before.The world is your oyster, push those boundaries and Make Fetch Happen.
`
  }
];

export const FAQ_CONTENT = [
  {
    question: 'What is BostonHacks',
    answer: 'BostonHacks is a 24-hour event where students from different backgrounds gather together to use technology to create cool projects. Come to BostonHacks to expand your knowledge and skills, make new friends, win prizes and network with recruiters from our corporate sponsors!'
  },
  {
    question: 'When and where is BostonHacks?',
    answer: 'BostonHacks is an in-person 24-hour hackathon on October 11-12th, 2025. It takes place in the Boston University George Sherman Union (GSU)'
  },
  {
    question: 'Who can attend?',
    answer: 'All college students including undergraduate and graduate students with any background, all across the world are welcome!'
  },
  {
    question: 'Are there any rules?',
    answer: 'We want to ensure a positive experience for all participants. We encourage you to read the <a href="https://mlh.io/code-of-conduct" target="_blank" class="text-blue-500 underline">MLH Code of Conduct</a>.'
  },
  {
    question: 'Do I need experience?',
    answer: 'No experience is necessary. We will have plenty of mentors and resources available, along with several workshops targeted for beginners. Come learn and experience your first hackathon at BostonHacks!'
  },
  {
    question: 'Does it cost anything?',
    answer: 'BostonHacks is 100% free. You dont have to spend a dime! Unfortunately, we wont be providing any travel reimbursements this year.'
  },
  {
    question: 'Can we form teams?',
    answer: 'Of course you can! We encourage people to work in teams of up to four people. You may opt-in to team formation through our Discord Server which will match you with an ideal team. You can work alone, but it wont be as fun :['
  },
  {
    question: 'When does registration close?',
    answer: 'Registration closes on September 28, 11:59 PM EST. Apply ASAP!'
  },
  {
    question: 'MLH Code of Conduct',
    answer: 'TL\;DR. Be respectful. Harassment and abuse are never tolerated. If you are in a situation that makes you uncomfortable at an MLH Member Event, if the event itself is creating an unsafe or inappropriate environment, or if interacting with a MLH representative or event organizer makes you uncomfortable, please refer to the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" class="text-[var(--popup-blue)] underline">Full MLH Code of Conduct PDF</a>'
  },
  {
    question: 'What do I get if I win?',
    answer: 'We have over $5000 of prizes to give out this year! Prizes will be awarded to each member of the best projects in each of our tracks. Some examples of past prizes include: Electric scooters, Nintendo Switches, Sony Wireless Headphones, Airpod Pros, and more.'
  },
  {
    question: 'What if I have more questions?',
    answer: 'Please contact us at contact@bostonhacks.org if you have any more questions. '
  }
];
