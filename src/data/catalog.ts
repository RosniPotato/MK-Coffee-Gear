import type { Brand } from './products';

export const brands: Brand[] = [
  {
    id: 'wendougee',
    name: 'Wendougee',
    origin: 'China',
    tagline: 'Dual-boiler machines and precision grinders at working-bar prices.',
    categories: [
      {
        name: 'Featured',
        products: [
          {
            slug: 'dc6-dual-boiler',
            name: 'DC6 Dual Boiler',
            category: 'Espresso Machines',
            art: 'machine',
            badge: 'Flagship',
            description:
              'A compact dual-boiler with independent brew and steam control and a PID-managed 58mm brew path. Warms in under ten minutes and holds temperature through back-to-back shots.',
            details:
              'The DC6 was engineered for the home barista who pulls shot after shot without forgiving temperature drift. Two stainless-steel boilers run independently, so steaming never cools your brew boiler. The PID controller holds the set point within a degree, and the 58mm commercial group head accepts any standard portafilter accessory. A shot timer, pressure gauge, and pre-infusion control are built into the front panel.',
            specs: [
              { label: 'Boilers', value: 'Dual stainless (0.6L brew / 0.8L steam)' },
              { label: 'Group head', value: '58mm E61-style' },
              { label: 'PID', value: 'Independent, ±1°C' },
              { label: 'Warm-up', value: 'Under 10 minutes' },
              { label: 'Dimensions', value: '330 × 380 × 420 mm' },
              { label: 'Weight', value: '21 kg' },
            ],
          },
          {
            slug: 'v6-espresso-grinder',
            name: 'V6 Espresso Grinder',
            category: 'Grinders',
            art: 'grinder',
            description:
              'A 64mm flat-burr grinder with stepless adjustment and a straight-through chute that keeps retention under a quarter gram.',
            details:
              'The V6 pairs 64mm titanium-coated flat burrs with a stepless worm-gear adjustment that lets you dial in by a single micron. The declump chute and ionizer break up static, and the straight-through path keeps retention under 0.25g — making it an ideal single-dose grinder even though it ships with a hopper.',
            specs: [
              { label: 'Burrs', value: '64mm flat, titanium-coated' },
              { label: 'Adjustment', value: 'Stepless worm gear' },
              { label: 'Retention', value: 'Under 0.25g' },
              { label: 'Motor', value: '500W, 1400 RPM' },
              { label: 'Speed', value: '3.5 g/s' },
              { label: 'Weight', value: '11 kg' },
            ],
          },
          {
            slug: 'gooseneck-09l',
            name: 'Gooseneck 0.9L',
            category: 'Kettles',
            art: 'kettle',
            description:
              'A stovetop gooseneck with a counterbalanced handle and a spout that narrows to a steady, laminar thread.',
            details:
              'A stovetop pour-over kettle built for controlled flow. The gooseneck spout narrows progressively to produce a laminar stream with zero splatter, and the counterbalanced handle keeps the wrist relaxed through long pours. A built-in thermometer in the lid tracks temperature without electronics.',
            specs: [
              { label: 'Capacity', value: '0.9L' },
              { label: 'Material', value: '304 stainless steel' },
              { label: 'Spout', value: 'Gooseneck, laminar' },
              { label: 'Thermometer', value: 'Analog lid-mounted' },
              { label: 'Base', value: 'Induction + gas compatible' },
              { label: 'Weight', value: '0.8 kg' },
            ],
          },
          {
            slug: 'dc-mini',
            name: 'DC Mini',
            category: 'Espresso Machines',
            art: 'machine',
            description:
              'A single-boiler entry point to the DC lineup, sized for a small counter but built with the same group head and PID as the DC6.',
            details:
              'The DC Mini shares the 58mm group head and PID control of the DC6 in a single-boiler format. It is ideal for the espresso drinker who rarely steams milk. A thermoblock pre-heats water before it reaches the boiler, shortening warm-up and stabilizing brew temperature.',
            specs: [
              { label: 'Boiler', value: 'Single 0.4L stainless' },
              { label: 'Group head', value: '58mm E61-style' },
              { label: 'PID', value: '±1°C' },
              { label: 'Warm-up', value: 'Under 7 minutes' },
              { label: 'Dimensions', value: '260 × 320 × 360 mm' },
              { label: 'Weight', value: '14 kg' },
            ],
          },
          {
            slug: 'v3-hand-grinder',
            name: 'V3 Hand Grinder',
            category: 'Grinders',
            art: 'grinder',
            description:
              'A 38mm conical-burr hand grinder with a stabilized shaft and a foldaway handle for travel.',
            details:
              'The V3 brings the precision of a stabilized conical burr to a hand grinder. The shaft runs on two ball bearings, eliminating burr wobble for a consistent grind. The handle folds away for storage, and the catch cup is magnetic — the same part that fits the V6.',
            specs: [
              { label: 'Burrs', value: '38mm conical' },
              { label: 'Adjustment', value: 'Stepless, 0–40 clicks' },
              { label: 'Bearings', value: 'Dual ball-bearing stabilized' },
              { label: 'Capacity', value: '30g per grind' },
              { label: 'Material', value: 'Aluminum + stainless' },
              { label: 'Weight', value: '0.9 kg' },
            ],
          },
          {
            slug: 'wd-tamper',
            name: 'WD Tamper',
            category: 'Accessories',
            art: 'tamper',
            description:
              'A 58.5mm precision tamper with a spring-calibrated base and a walnut handle.',
            details:
              'A calibrated tamper that applies a consistent 25lb of force every time, removing guesswork from puck preparation. The base is machined to 58.5mm for a precise fit against a 58mm basket, and the handle is turned from solid walnut.',
            specs: [
              { label: 'Base', value: '58.5mm stainless' },
              { label: 'Calibration', value: '25lb spring' },
              { label: 'Handle', value: 'Solid walnut' },
              { label: 'Flatness', value: '±0.05mm' },
              { label: 'Weight', value: '0.5 kg' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'timemore',
    name: 'Timemore',
    origin: 'China',
    tagline: 'Sculptural pour-over gear and the definitive C-series hand grinders.',
    categories: [
      {
        name: 'Featured',
        products: [
          {
            slug: 'sculptor-078s',
            name: 'Sculptor 078S',
            category: 'Grinders',
            art: 'grinder',
            badge: 'Editor’s Pick',
            description:
              'A 78mm flat-burr electric grinder with a light inside, magnetic catch cup, and burrs machined to a tolerance that rivals grinders at twice the price.',
            details:
              'The Sculptor 078S is a statement piece for the pour-over enthusiast. Its 78mm flat burrs are machined to a tolerance usually found on commercial grinders, and the housing includes a motion sensor that turns on an internal light as you approach. The magnetic catch cup snaps in and out with one hand, and the variable-speed motor lets you slow down for delicate single-origin beans.',
            specs: [
              { label: 'Burrs', value: '78mm flat, PVD-coated' },
              { label: 'Adjustment', value: 'Stepless, external dial' },
              { label: 'Retention', value: 'Under 0.2g' },
              { label: 'Motor', value: 'Variable-speed, 500–1400 RPM' },
              { label: 'Catch cup', value: 'Magnetic, 40g capacity' },
              { label: 'Weight', value: '5.8 kg' },
            ],
          },
          {
            slug: 'crystal-eye-dripper',
            name: 'Crystal Eye Dripper',
            category: 'Pour-Over',
            art: 'kettle',
            description:
              'A transparent pour-over dripper with a wide-open flow geometry and clearly marked ribs. Brews a clean, even cup.',
            details:
              'The Crystal Eye is a transparent dripper that lets you watch the bed saturate. Its wide-open flow geometry and clearly marked ribs produce an even extraction with a clean, sediment-free cup. Compatible with standard #2 cone filters.',
            specs: [
              { label: 'Material', value: 'Borosilicate glass' },
              { label: 'Filter', value: 'Standard #2 cone' },
              { label: 'Capacity', value: '1–4 cups' },
              { label: 'Flow', value: 'Fast, low-agitation' },
              { label: 'Dishwasher safe', value: 'Yes' },
            ],
          },
          {
            slug: 'fish-smart-electric',
            name: 'Fish Smart Electric',
            category: 'Kettles',
            art: 'kettle',
            badge: 'Best Seller',
            description:
              'An electric gooseneck with full variable-temperature control, a hold function, and a slim spout tuned for pulse pouring.',
            details:
              'The Fish Smart is the electric pour-over kettle against which others are measured. A precise temperature control holds water to the degree, a hold mode maintains temperature for up to 60 minutes, and the slim spout is tuned for laminar pulse pouring. The base auto-rotates 360°.',
            specs: [
              { label: 'Capacity', value: '0.6L' },
              { label: 'Temperature', value: '40–100°C, ±1°C' },
              { label: 'Hold mode', value: 'Up to 60 minutes' },
              { label: 'Spout', value: 'Gooseneck, precision' },
              { label: 'Material', value: '316 stainless + PCTG' },
              { label: 'Power', value: '1500W' },
            ],
          },
          {
            slug: 'c2-hand-grinder',
            name: 'C2 Hand Grinder',
            category: 'Grinders',
            art: 'grinder',
            description:
              'The hand grinder that redefined the category — 38mm conical steel burrs in a CNC-machined body.',
            details:
              'The C2 is the hand grinder that made Timemore famous. CNC-machined aluminum body, 38mm conical steel burrs, and a dual-bearing stabilized shaft deliver a consistent grind at a fraction of the cost of electric equivalents. The catch cup is magnetic and clicks into place.',
            specs: [
              { label: 'Burrs', value: '38mm conical steel' },
              { label: 'Adjustment', value: '36 clicks, stepped' },
              { label: 'Bearings', value: 'Dual ball-bearing' },
              { label: 'Capacity', value: '25g per grind' },
              { label: 'Material', value: 'CNC aluminum' },
              { label: 'Weight', value: '0.7 kg' },
            ],
          },
          {
            slug: 'black-mirror-scale',
            name: 'Black Mirror Scale',
            category: 'Accessories',
            art: 'tamper',
            description:
              'A pour-over scale with 0.1g precision, a built-in timer, and auto-tare.',
            details:
              'The Black Mirror is a compact scale built for pour-over brewing. It reads to 0.1g with a fast refresh rate, and the built-in timer starts automatically when water hits the bed. A built-in rechargeable battery runs for up to 30 hours.',
            specs: [
              { label: 'Precision', value: '0.1g' },
              { label: 'Capacity', value: '2kg' },
              { label: 'Timer', value: 'Auto-start on weight change' },
              { label: 'Battery', value: 'Rechargeable, 30h' },
              { label: 'Display', value: 'Hidden LED' },
            ],
          },
          {
            slug: 'shark-eye-dripper',
            name: 'Shark Eye Dripper',
            category: 'Pour-Over',
            art: 'kettle',
            description:
              'A flat-bottom dripper with wave filters and a wider bed for high-clarity extractions.',
            details:
              'The Shark Eye pairs a flat-bottom bed with wave filters to produce a high-clarity, even extraction. The wider bed reduces channeling, and the ridged interior keeps the filter lifted for consistent flow.',
            specs: [
              { label: 'Material', value: 'Borosilicate glass' },
              { label: 'Filter', value: 'Kalita-style wave #2' },
              { label: 'Capacity', value: '1–4 cups' },
              { label: 'Flow', value: 'Medium, even bed' },
              { label: 'Dishwasher safe', value: 'Yes' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'eureka',
    name: 'Eureka',
    origin: 'Italy',
    tagline: 'Italian grinders built for cafés — quiet, precise, and overbuilt.',
    categories: [
      {
        name: 'Featured',
        products: [
          {
            slug: 'mignon-specialita',
            name: 'Mignon Specialita',
            category: 'Grinders',
            art: 'grinder',
            badge: 'Best Seller',
            description:
              'A 55mm flat-burr grinder with stepless adjustment, a silent motor, and a hands-free fork. The benchmark home espresso grinder.',
            details:
              'The Mignon Specialita is the home espresso grinder by which others are judged. Its 55mm flat burrs produce a uniform particle distribution, and Eureka’s patented silent motor keeps noise under 60dB — quieter than a conversation. Stepless adjustment lets you dial in to the micron, and the hands-free fork holds your portafilter while grinding.',
            specs: [
              { label: 'Burrs', value: '55mm flat, hardened steel' },
              { label: 'Adjustment', value: 'Stepless, infinite' },
              { label: 'Noise', value: 'Under 60dB' },
              { label: 'Motor', value: '450W, silent' },
              { label: 'Fork', value: 'Hands-free, adjustable' },
              { label: 'Weight', value: '5.6 kg' },
            ],
          },
          {
            slug: 'mignon-zero',
            name: 'Mignon Zero',
            category: 'Grinders',
            art: 'grinder',
            description:
              'A 65mm flat-burr single-dose grinder with ACE system anti-clumping and near-zero retention for the pour-over enthusiast.',
            details:
              'The Mignon Zero is Eureka’s single-dose answer for the pour-over enthusiast. 65mm flat burrs combined with the ACE system (anti-clumping and electrostatic control) produce a fluffy, static-free grind with retention under 0.1g. A blow-up bell clears the chute between doses.',
            specs: [
              { label: 'Burrs', value: '65mm flat, hardened steel' },
              { label: 'Adjustment', value: 'Stepless, infinite' },
              { label: 'Retention', value: 'Under 0.1g' },
              { label: 'ACE system', value: 'Anti-clump + static control' },
              { label: 'Dosing', value: 'Single-dose, blow-up bell' },
              { label: 'Weight', value: '5.8 kg' },
            ],
          },
          {
            slug: 'mignon-perfetto',
            name: 'Mignon Perfetto',
            category: 'Grinders',
            art: 'grinder',
            description:
              'A versatile all-purpose grinder with a touch screen and a wide adjustment range from espresso to French press.',
            details:
              'The Perfetto is Eureka’s all-purpose grinder — at home with espresso, pour-over, or French press. A touch screen remembers four recipes, and the wide adjustment range moves from Turkish-fine to coarse in seconds without tools.',
            specs: [
              { label: 'Burrs', value: '50mm flat, hardened steel' },
              { label: 'Adjustment', value: 'Stepless, touch screen' },
              { label: 'Recipes', value: '4 presets' },
              { label: 'Range', value: 'Turkish to French press' },
              { label: 'Display', value: 'Touch screen' },
              { label: 'Weight', value: '5.4 kg' },
            ],
          },
          {
            slug: 'mignon-crono',
            name: 'Mignon Crono',
            category: 'Grinders',
            art: 'grinder',
            description:
              'A compact grinder with 50mm burrs and timed dosing, ideal for a small kitchen.',
            details:
              'The Crono is the most compact Mignon. 50mm burrs and a timed dosing system make it a great first grinder for a small kitchen. A built-in fork holds the portafilter, and the hopper holds 300g of beans.',
            specs: [
              { label: 'Burrs', value: '50mm flat' },
              { label: 'Dosing', value: 'Timed, 1–30s' },
              { label: 'Hopper', value: '300g' },
              { label: 'Fork', value: 'Hands-free' },
              { label: 'Weight', value: '4.8 kg' },
            ],
          },
          {
            slug: 'mignon-oro-xl',
            name: 'Mignon Oro XL',
            category: 'Grinders',
            art: 'grinder',
            badge: 'Flagship',
            description:
              'A 75mm flat-burr grinder with a high-speed motor and a touch screen for the demanding home barista.',
            details:
              'The Oro XL is the flagship of the Mignon line. 75mm flat burrs and a high-speed motor deliver a uniform grind at 6g/s, and the touch screen stores four recipes with timed dosing. A built-in ionizer eliminates static.',
            specs: [
              { label: 'Burrs', value: '75mm flat, hardened steel' },
              { label: 'Speed', value: '6 g/s' },
              { label: 'Dosing', value: 'Timed, 4 presets' },
              { label: 'Display', value: 'Touch screen' },
              { label: 'Ionizer', value: 'Built-in' },
              { label: 'Weight', value: '7.2 kg' },
            ],
          },
          {
            slug: 'eureka-drop-set',
            name: 'Eureka Drop Set',
            category: 'Accessories',
            art: 'tamper',
            description:
              'A matched distributor and tamper set with a 58.5mm base.',
            details:
              'The Drop Set pairs a 58.5mm distributor with a calibrated tamper. The distributor uses a slope-and-level design to settle the puck, and the tamper applies a consistent 30lb of force.',
            specs: [
              { label: 'Base', value: '58.5mm' },
              { label: 'Distributor', value: 'Slope-and-level' },
              { label: 'Tamper', value: 'Calibrated, 30lb' },
              { label: 'Material', value: 'Stainless + aluminum' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'kalaido',
    name: 'Kalaido',
    origin: 'Italy',
    tagline: 'Italian precision grinders engineered for consistency and longevity.',
    categories: [
      {
        name: 'Featured',
        products: [
          {
            slug: 'libra-pro',
            name: 'Libra Pro',
            category: 'Grinders',
            art: 'grinder',
            description:
              'A professional flat-burr grinder with a powerful motor and electronic dosing control for repeatable shots.',
            details:
              'The Libra Pro is built for the café that demands repeatable shots. 65mm flat burrs and a 700W motor deliver a uniform grind at 4g/s, and electronic dosing control stores four timed recipes. A built-in cooling fan keeps the burrs stable during long service.',
            specs: [
              { label: 'Burrs', value: '65mm flat, hardened steel' },
              { label: 'Motor', value: '700W' },
              { label: 'Dosing', value: 'Electronic, 4 presets' },
              { label: 'Cooling', value: 'Built-in fan' },
              { label: 'Speed', value: '4 g/s' },
              { label: 'Weight', value: '9 kg' },
            ],
          },
          {
            slug: 'krea-doserless',
            name: 'Krea Doserless',
            category: 'Grinders',
            art: 'grinder',
            description:
              'A compact doserless grinder with a tapered chute and a display that tracks grind time to the tenth of a second.',
            details:
              'The Krea is a compact doserless grinder designed for single-dose and small-hopper workflows. The tapered chute minimizes retention, and the display tracks grind time to the tenth of a second. Stepless adjustment lets you dial in to the micron.',
            specs: [
              { label: 'Burrs', value: '58mm flat' },
              { label: 'Adjustment', value: 'Stepless' },
              { label: 'Display', value: 'Timed, 0.1s precision' },
              { label: 'Chute', value: 'Tapered, low-retention' },
              { label: 'Weight', value: '6.5 kg' },
            ],
          },
          {
            slug: 'k14-tap',
            name: 'K14 Tap',
            category: 'Grinders',
            art: 'grinder',
            badge: 'Flagship',
            description:
              'A 64mm commercial-grade grinder with a tap doser and a cooling fan that keeps the burrs stable during long service.',
            details:
              'The K14 Tap is Kalaido’s commercial-grade grinder. 64mm flat burrs and a tap doser deliver fresh ground coffee on demand, and a cooling fan keeps the burrs at a stable temperature through a full service. Built for the café counter.',
            specs: [
              { label: 'Burrs', value: '64mm flat, commercial' },
              { label: 'Doser', value: 'Tap, 12g per tap' },
              { label: 'Cooling', value: 'Built-in fan' },
              { label: 'Motor', value: '650W' },
              { label: 'Hopper', value: '1.2kg' },
              { label: 'Weight', value: '11 kg' },
            ],
          },
          {
            slug: 'libra-single-dose',
            name: 'Libra Single Dose',
            category: 'Grinders',
            art: 'grinder',
            description:
              'A single-dose version of the Libra with a bellows and a short chute for near-zero retention.',
            details:
              'The Libra Single Dose takes the Libra Pro’s burrs and motor and packages them for the single-dose enthusiast. A bellows clears the chute between doses, and the short grind path keeps retention under 0.2g.',
            specs: [
              { label: 'Burrs', value: '65mm flat' },
              { label: 'Retention', value: 'Under 0.2g' },
              { label: 'Dosing', value: 'Single-dose, bellows' },
              { label: 'Motor', value: '700W' },
              { label: 'Weight', value: '8.5 kg' },
            ],
          },
          {
            slug: 'kalaido-tamper',
            name: 'Kalaido Tamper',
            category: 'Accessories',
            art: 'tamper',
            description:
              'A 58.55mm precision tamper with an ergonomic handle and a flat base.',
            details:
              'A precision tamper with a 58.55mm flat base machined to ±0.05mm flatness. The handle is shaped for a comfortable thumb-on-top grip, and the weight is balanced to reduce wrist strain.',
            specs: [
              { label: 'Base', value: '58.55mm, flat' },
              { label: 'Flatness', value: '±0.05mm' },
              { label: 'Handle', value: 'Ergonomic aluminum' },
              { label: 'Weight', value: '0.45 kg' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'bideli',
    name: 'Bideli',
    origin: 'China',
    tagline: 'Accessible espresso machines and accessories for the home barista.',
    categories: [
      {
        name: 'Featured',
        products: [
          {
            slug: 'bd-58-espresso',
            name: 'BD-58 Espresso',
            category: 'Espresso Machines',
            art: 'machine',
            description:
              'An entry-level single-boiler with a 58mm portafilter and PID control that punches well above its price.',
            details:
              'The BD-58 is the entry point to real espresso. A 58mm portafilter (the same standard used on commercial machines) and PID temperature control deliver consistent shots at a fraction of the cost of prosumer machines. A shot timer and pressure gauge are built in.',
            specs: [
              { label: 'Boiler', value: 'Single 0.35L thermoblock' },
              { label: 'Group head', value: '58mm' },
              { label: 'PID', value: '±2°C' },
              { label: 'Pump', value: 'Vibratory, 15 bar' },
              { label: 'Dimensions', value: '240 × 290 × 340 mm' },
              { label: 'Weight', value: '8 kg' },
            ],
          },
          {
            slug: 'bd-tamp-station',
            name: 'BD Tamp Station',
            category: 'Accessories',
            art: 'tamper',
            description:
              'A calibrated tamper with a magnetic stand and a balanced spring that takes the guesswork out of leveling the puck.',
            details:
              'The BD Tamp Station pairs a calibrated tamper with a magnetic stand. The tamper applies a consistent 25lb of force, and the stand holds the tamper upright when not in use. The base is 58.5mm.',
            specs: [
              { label: 'Base', value: '58.5mm' },
              { label: 'Calibration', value: '25lb spring' },
              { label: 'Stand', value: 'Magnetic' },
              { label: 'Material', value: 'Stainless + ABS' },
            ],
          },
          {
            slug: 'bd-drip-scale',
            name: 'BD Drip Scale',
            category: 'Accessories',
            art: 'kettle',
            badge: 'Best Seller',
            description:
              'A compact 0.1g scale with a timer and auto-off, sized to fit on any drip tray.',
            details:
              'A compact scale that fits on any drip tray. It reads to 0.1g with a fast refresh rate, and the built-in timer starts with a single tap. Auto-off after 3 minutes preserves battery.',
            specs: [
              { label: 'Precision', value: '0.1g' },
              { label: 'Capacity', value: '1kg' },
              { label: 'Timer', value: 'Manual start' },
              { label: 'Battery', value: '2× AAA, 3-min auto-off' },
              { label: 'Dimensions', value: '100 × 90 × 18 mm' },
            ],
          },
          {
            slug: 'bd-portafilter',
            name: 'BD Bottomless Portafilter',
            category: 'Accessories',
            art: 'tamper',
            description:
              'A 58mm bottomless portafilter for diagnosing channeling and watching the extraction.',
            details:
              'A bottomless (naked) portafilter that lets you watch the extraction and diagnose channeling. Fits the BD-58 and any 58mm group head. The handle is turned from solid wood.',
            specs: [
              { label: 'Size', value: '58mm' },
              { label: 'Style', value: 'Bottomless' },
              { label: 'Handle', value: 'Solid wood' },
              { label: 'Basket', value: '18g precision, included' },
            ],
          },
          {
            slug: 'bd-kettle',
            name: 'BD Variable Kettle',
            category: 'Kettles',
            art: 'kettle',
            description:
              'A budget-friendly variable-temperature gooseneck with a hold function.',
            details:
              'A variable-temperature gooseneck kettle that brings precision pouring to a budget. The temperature is adjustable in 5° increments, and a hold mode maintains the set temperature for 30 minutes.',
            specs: [
              { label: 'Capacity', value: '0.8L' },
              { label: 'Temperature', value: '60–100°C, 5° steps' },
              { label: 'Hold mode', value: '30 minutes' },
              { label: 'Spout', value: 'Gooseneck' },
              { label: 'Power', value: '1200W' },
            ],
          },
          {
            slug: 'bd-distribution-tool',
            name: 'BD Distribution Tool',
            category: 'Accessories',
            art: 'tamper',
            description:
              'A 58mm spin distributor that levels the puck before tamping.',
            details:
              'A 58mm spin distributor that levels the coffee puck before tamping. Three angled blades sweep the grounds flat, and the depth is adjustable without tools.',
            specs: [
              { label: 'Size', value: '58mm' },
              { label: 'Blades', value: '3, angled' },
              { label: 'Depth', value: 'Adjustable' },
              { label: 'Material', value: 'Stainless + ABS' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'defluid',
    name: 'Defluid',
    origin: 'Australia',
    tagline: 'Specialty brewing gear focused on even extraction and clean cups.',
    categories: [
      {
        name: 'Featured',
        products: [
          {
            slug: 'fluid-dripper-v2',
            name: 'Fluid Dripper V2',
            category: 'Pour-Over',
            art: 'kettle',
            badge: 'New',
            description:
              'A low-agitation dripper with a flat-bottom bed and wave filter support that produces a remarkably even extraction.',
            details:
              'The Fluid Dripper V2 is the result of two years of flow testing. A flat-bottom bed and wave filter support reduce channeling, and the low-agitation geometry produces a clean, bright cup. The body is machined from a single block of aluminum with a PTFE-free ceramic coating.',
            specs: [
              { label: 'Material', value: 'Machined aluminum + ceramic coat' },
              { label: 'Filter', value: 'Wave #2 (Kalita-style)' },
              { label: 'Bed', value: 'Flat-bottom' },
              { label: 'Flow', value: 'Low-agitation' },
              { label: 'Capacity', value: '1–4 cups' },
              { label: 'Weight', value: '0.4 kg' },
            ],
          },
          {
            slug: 'fluid-server-600ml',
            name: 'Fluid Server 600ml',
            category: 'Pour-Over',
            art: 'kettle',
            description:
              'A borosilicate server with a tight-fitting lid and a narrow spout for controlled pours from carafe to cup.',
            details:
              'A 600ml borosilicate server designed to pair with the Fluid Dripper. The tight-fitting lid retains heat, and the narrow spout pours cleanly without drips. A rubber collar protects the glass on the counter.',
            specs: [
              { label: 'Capacity', value: '600ml' },
              { label: 'Material', value: 'Borosilicate glass + silicone' },
              { label: 'Lid', value: 'Tight-fit, heat-retaining' },
              { label: 'Spout', value: 'Narrow, drip-free' },
              { label: 'Dishwasher safe', value: 'Yes (glass only)' },
            ],
          },
          {
            slug: 'fluid-filter-pack',
            name: 'Fluid Filter Pack',
            category: 'Pour-Over',
            art: 'tamper',
            description:
              'A box of 100 wave filters cut to fit the Fluid Dripper with minimal paper taste and fast drawdown.',
            details:
              'A pack of 100 wave filters cut to fit the Fluid Dripper. The paper is pre-rinsed at the factory to reduce paper taste, and the porosity is tuned for a fast, even drawdown.',
            specs: [
              { label: 'Count', value: '100' },
              { label: 'Shape', value: 'Wave #2' },
              { label: 'Paper', value: 'Pre-rinsed, low-taste' },
              { label: 'Porosity', value: 'Fast drawdown' },
            ],
          },
          {
            slug: 'fluid-pour-kettle',
            name: 'Fluid Pour Kettle',
            category: 'Kettles',
            art: 'kettle',
            description:
              'A stovetop gooseneck with a thick base for even heating and a slim spout for pulse pouring.',
            details:
              'A stovetop gooseneck kettle built for pour-over. A thick tri-ply base ensures even heating on induction and gas, and the slim spout produces a laminar pour. A lid thermometer tracks temperature without electronics.',
            specs: [
              { label: 'Capacity', value: '1.0L' },
              { label: 'Material', value: '304 stainless, tri-ply base' },
              { label: 'Spout', value: 'Gooseneck, slim' },
              { label: 'Thermometer', value: 'Analog lid-mounted' },
              { label: 'Base', value: 'Induction + gas compatible' },
            ],
          },
          {
            slug: 'fluid-scale',
            name: 'Fluid Scale',
            category: 'Accessories',
            art: 'tamper',
            description:
              'A waterproof pour-over scale with 0.1g precision and a built-in timer.',
            details:
              'A waterproof scale built for pour-over brewing. It reads to 0.1g, and the built-in timer starts automatically when water hits the bed. A USB-C rechargeable battery runs for up to 40 hours.',
            specs: [
              { label: 'Precision', value: '0.1g' },
              { label: 'Capacity', value: '2kg' },
              { label: 'Timer', value: 'Auto-start' },
              { label: 'Battery', value: 'USB-C, 40h' },
              { label: 'Waterproof', value: 'IP67' },
            ],
          },
          {
            slug: 'fluid-dripper-v1',
            name: 'Fluid Dripper V1',
            category: 'Pour-Over',
            art: 'kettle',
            description:
              'The original cone-shaped dripper with a wide-open flow for fast, bright extractions.',
            details:
              'The V1 is the dripper that launched Defluid. A cone shape with a wide-open flow produces a fast, bright extraction. The body is machined aluminum with a ceramic coating.',
            specs: [
              { label: 'Material', value: 'Machined aluminum + ceramic coat' },
              { label: 'Filter', value: 'Cone #2' },
              { label: 'Flow', value: 'Fast, high-clarity' },
              { label: 'Capacity', value: '1–4 cups' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'dalla-corte',
    name: 'Dalla Corte',
    origin: 'Italy',
    tagline: 'Hand-built Italian espresso machines for specialty cafés and serious homes.',
    categories: [
      {
        name: 'Featured',
        products: [
          {
            slug: 'mini-single-group',
            name: 'Mini Single Group',
            category: 'Espresso Machines',
            art: 'machine',
            badge: 'Flagship',
            description:
              'A commercial-grade single-group machine with independent brew and steam boilers and a PID on every group head.',
            details:
              'The Mini is a commercial-grade single-group machine built for the serious home barista. Independent brew and steam boilers mean temperature never drifts during milk steaming, and a PID on every group head holds the set point within a degree. The chassis is hand-welded stainless steel.',
            specs: [
              { label: 'Boilers', value: 'Dual (0.4L brew / 0.8L steam)' },
              { label: 'Group head', value: '58mm, PID-controlled' },
              { label: 'PID', value: 'Independent, ±1°C' },
              { label: 'Pump', value: 'Rotary, quiet' },
              { label: 'Dimensions', value: '300 × 450 × 410 mm' },
              { label: 'Weight', value: '24 kg' },
            ],
          },
          {
            slug: 'mina',
            name: 'Mina',
            category: 'Espresso Machines',
            art: 'machine',
            description:
              'A precise single-group machine with a built-in scale and flow control that lets you profile every shot by weight.',
            details:
              'The Mina is a single-group machine with a built-in scale under the drip tray and flow-control profiling. You can program a shot to stop at a target weight, or draw a pressure profile by hand with the paddle. The result is repeatable, weight-based espresso at home.',
            specs: [
              { label: 'Boilers', value: 'Dual (0.4L brew / 0.7L steam)' },
              { label: 'Group head', value: '58mm, flow-controlled' },
              { label: 'Scale', value: 'Built-in, 0.1g' },
              { label: 'Profiling', value: 'Paddle + weight-stop' },
              { label: 'PID', value: 'Independent, ±1°C' },
              { label: 'Weight', value: '23 kg' },
            ],
          },
          {
            slug: 'evo2-two-group',
            name: 'Evo2 Two Group',
            category: 'Espresso Machines',
            art: 'machine',
            description:
              'A café workhorse with two independent group heads, each with its own temperature and pressure control.',
            details:
              'The Evo2 is a café workhorse. Two independent group heads, each with its own PID and pressure control, let you pull two different roasts at two different temperatures simultaneously. A rotary pump and a 4L steam boiler keep up with peak service.',
            specs: [
              { label: 'Group heads', value: '2, independent' },
              { label: 'Boilers', value: '2× brew (0.75L) + 1× steam (4L)' },
              { label: 'PID', value: 'Per group, ±1°C' },
              { label: 'Pump', value: 'Rotary, dual' },
              { label: 'Dimensions', value: '720 × 530 × 520 mm' },
              { label: 'Weight', value: '52 kg' },
            ],
          },
          {
            slug: 'dc-bravo',
            name: 'DC Bravo',
            category: 'Espresso Machines',
            art: 'machine',
            description:
              'A compact single-group machine with a vibratory pump, designed for the small café or advanced home.',
            details:
              'The Bravo is Dalla Corte’s compact single-group machine. A vibratory pump and a single boiler keep the footprint small, while the 58mm group head and PID control keep the shots consistent.',
            specs: [
              { label: 'Boiler', value: 'Single 0.5L' },
              { label: 'Group head', value: '58mm, PID-controlled' },
              { label: 'Pump', value: 'Vibratory' },
              { label: 'PID', value: '±1°C' },
              { label: 'Dimensions', value: '280 × 410 × 380 mm' },
              { label: 'Weight', value: '18 kg' },
            ],
          },
          {
            slug: 'dc-steam-wand',
            name: 'DC Steam Wand Upgrade',
            category: 'Accessories',
            art: 'tamper',
            description:
              'A replacement steam wand with a no-burn insulation sleeve and a 4-hole tip.',
            details:
              'A replacement steam wand for Dalla Corte machines. The no-burn insulation sleeve keeps the wand cool to the touch, and the 4-hole tip delivers dry steam for microfoam.',
            specs: [
              { label: 'Compatibility', value: 'Mini, Mina, Bravo' },
              { label: 'Insulation', value: 'No-burn sleeve' },
              { label: 'Tip', value: '4-hole, dry steam' },
              { label: 'Material', value: 'Stainless steel' },
            ],
          },
          {
            slug: 'dc-portafilter',
            name: 'DC Wood-Handle Portafilter',
            category: 'Accessories',
            art: 'tamper',
            description:
              'A 58mm bottomless portafilter with a turned walnut handle.',
            details:
              'A 58mm bottomless portafilter with a turned walnut handle. Fits all Dalla Corte group heads. Ships with a 20g precision basket.',
            specs: [
              { label: 'Size', value: '58mm' },
              { label: 'Style', value: 'Bottomless' },
              { label: 'Handle', value: 'Solid walnut' },
              { label: 'Basket', value: '20g precision, included' },
            ],
          },
        ],
      },
    ],
  },
];
