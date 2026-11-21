export interface JournalPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  body: string[];
  pull?: string;
}

export const featuredPost: JournalPost = {
  slug: 'the-case-for-the-single-origin',
  category: 'Brew Guides',
  title: 'The case for the single origin',
  excerpt:
    'Why we stopped chasing blends and started tasting the place. A short defense of single-origin coffee — and the three farms that changed how we pour.',
  date: 'Nov 18, 2026',
  read: '6 min',
  pull: 'A blend hides its origin. A single origin confesses it.',
  body: [
    'For most of the last century, coffee was sold on consistency. The goal was a cup that tasted the same in March as it did in October, regardless of what the harvest brought. Blends were the tool for the job — a little of this, a little of that, adjusted until the differences cancelled out.',
    'Consistency is a fine goal for a commodity. It is a terrible goal for an agricultural product that changes with rainfall, altitude, and the hands that pick it. When you flatten coffee into uniformity, you throw away the very thing that makes it interesting: the place it came from.',
    'A single origin does the opposite. It makes a claim — this coffee tastes like Yirgacheffe in 2026, from this cooperative, washed at this mill. The claim can fail. A bad harvest is a bad harvest, and there is nowhere to hide it. That vulnerability is exactly the point.',
    'Three farms changed how we pour. The first was a small lot from the Guji zone that tasted, unaccountably, of apricot and black tea — a flavor profile no blend would have survived. The second was a honey-processed Costa Rican that taught us what sweetness means when it comes from the fruit rather than the roast. The third was a washed Colombian we nearly rejected for its acidity, then realized the acidity was the coffee.',
    'None of this requires abandoning blends. Milk drinks and espresso for the unconverted still deserve a balanced, forgiving base. But if you want to know what coffee is — rather than what it can be made to resemble — drink the single origin. Taste the place.',
  ],
};

export const posts: JournalPost[] = [
  {
    slug: 'what-a-pid-controller-actually-does',
    category: 'Equipment',
    title: 'What a PID controller actually does',
    excerpt:
      'The little circuit board that keeps your shots honest. We break down how PID temperature control works — and why it matters more than burr geometry.',
    date: 'Nov 12, 2026',
    read: '4 min',
    pull: 'Stability is not a luxury. It is the difference between a recipe and a guess.',
    body: [
      'A PID controller is three mathematical terms — proportional, integral, derivative — working together to hold a measured value at a target. In an espresso machine, the value is brew temperature and the target is whatever you set it to. That sentence sounds dry until you spend a week on a machine without one.',
      'Without PID control, a boiler overshoots and undershoots its target in a slow sine wave. The brew water might swing five degrees over the course of a session. Five degrees does not sound like much; in extraction terms, it is the difference between a balanced shot and a sour one, or between balanced and bitter, depending on which way the swing went.',
      'The proportional term reacts to the size of the gap between actual and target temperature. The integral term remembers accumulated error and corrects for drift over time. The derivative term watches the rate of change and dampens overshoot. Tuned well, the system holds temperature within a degree — the difference between the machine you can trust and the machine you keep adjusting for.',
      'People spend enormous attention on burr geometry, and burrs matter. But a grinder on a bad day still produces drinkable coffee. A brew temperature swinging five degrees produces shots you cannot repeat, and unrepeatable shots cannot be dialed in. Stability first. Everything else second.',
    ],
  },
  {
    slug: 'three-days-at-the-yirgacheffe-cooperative',
    category: 'Field Notes',
    title: 'Three days at the Yirgacheffe cooperative',
    excerpt:
      'Notes from the wet mill: cherry sorting, fermentation tanks, and the moment a washed Yirgacheffe lot gets its grade.',
    date: 'Nov 05, 2026',
    read: '8 min',
    pull: 'The grade is decided in ninety seconds. The work behind it takes a season.',
    body: [
      'The wet mill sits on a hillside above the processing station, and the smell reaches you before the sound — sweet fermenting fruit and clean water in equal measure. Cherry arrives twice a day, carried in sacks on the backs of small motorcycles from plots within a few kilometers.',
      'The first sorting happens at the intake table. Floaters — underripe or damaged cherry — are skimmed off in water, since density separates them on its own. What sinks is what gets processed. It is a remarkably effective system that relies on nothing more than the fact that good coffee is heavier than bad.',
      'Fermentation is where the character gets set. Washed lots spend twelve to eighteen hours in concrete tanks, the mucilage eaten away by the cherry’s own microbes. The station manager checks the tanks by feel — a pinch of the parchment, a rub between the fingers — because the timing window is shorter than any chart can express.',
      'On the third day we watched a lot get graded. The dry parchment is sampled, roasted, ground, and cupped by a panel of five. Ninety seconds of slurping and silence, scores written on paper plates, and a season’s work by hundreds of pickers is assigned a number. That number decides what the cooperative is paid and what we are allowed to buy.',
      'We asked what happens to the lots that score below what we purchase. They do not go to waste — they go into local markets, into blends, into the vast undifferentiated middle of the coffee trade. But the farm’s best work, the work that tastes like this hillside and no other, moves through a channel so narrow that most drinkers will never know it existed.',
    ],
  },
  {
    slug: 'stop-weighing-your-espresso-start-tasting-it',
    category: 'Opinion',
    title: 'Stop weighing your espresso. Start tasting it.',
    excerpt:
      'A heretical take on dialing in. Ditch the scale for a week, trust your palate, and see what your tongue already knows.',
    date: 'Oct 28, 2026',
    read: '5 min',
    pull: 'The scale measures what you did. Only your palate measures what you made.',
    body: [
      'Somewhere in the last decade, dialing in espresso became an accounting exercise. Dose in grams, yield in grams, time to the tenth of a second, ratio expressed as a fraction. The recipe became the drink. We started checking numbers instead of tasting coffee.',
      'The numbers were supposed to be scaffolding — a way to get a beginner close enough to taste the target. Somewhere along the way they became the target itself. A shot that hits 2:1 in 28 seconds and tastes sour is a failed shot. A shot that misses every number and tastes extraordinary is, by the arithmetic, wrong. This is backwards.',
      'Here is the exercise: for one week, brew without the scale. Watch the flow, listen to the grind change, smell the puck after you knock it out. Adjust the grind when the shot runs too fast or too slow. Taste every shot before you decide anything about it.',
      'What you will find, almost immediately, is that your palate already knows things the scale cannot tell you. It knows the difference between underextracted-sour and lightly-bright. It knows when a shot is thin because the dose ran short and when it is thin because the roast is a light one. The scale averages all of that into a single number and throws the rest away.',
      'Use the scale when you are learning, and use it when something goes wrong and you need to diagnose. But taste first, weigh second. The drink is the point. The numbers were only ever a map.',
    ],
  },
];

export const allPosts: JournalPost[] = [featuredPost, ...posts];

export function findPost(slug: string): JournalPost | null {
  return allPosts.find((p) => p.slug === slug) ?? null;
}

export function postPath(slug: string): string {
  return `#/journal/${slug}`;
}

export function parseJournalHash(): string | null {
  const m = window.location.hash.match(/^#\/journal\/([\w-]+)$/);
  return m ? m[1] : null;
}
