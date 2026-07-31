import electrical from "@/assets/trade-electrical.jpg";
import welding from "@/assets/trade-welding.jpg";
import hvac from "@/assets/trade-hvac.jpg";
import automotive from "@/assets/trade-automotive.jpg";
import roofing from "@/assets/trade-roofing.jpg";

import carpentry from "@/assets/trade-carpentry.jpg";
import masonry from "@/assets/trade-masonry.jpg";
import painting from "@/assets/trade-painting.jpg";
import flooring from "@/assets/trade-flooring.jpg";
import landscaping from "@/assets/trade-landscaping.jpg";
import heavyEquipment from "@/assets/trade-heavy-equipment.jpg";
import refrigeration from "@/assets/trade-refrigeration.jpg";
import elevator from "@/assets/trade-elevator.jpg";
import fireSecurity from "@/assets/trade-fire-security.jpg";
import appliance from "@/assets/trade-appliance.jpg";
import aviation from "@/assets/trade-aviation.jpg";
import locksmith from "@/assets/trade-locksmith.jpg";
import windowDoor from "@/assets/trade-window-door.jpg";
import insulation from "@/assets/trade-insulation.jpg";
import signAwning from "@/assets/trade-sign-awning.jpg";
import solar from "@/assets/trade-solar.jpg";
import telecom from "@/assets/trade-telecom.jpg";
import poolSpa from "@/assets/trade-pool-spa.jpg";
import pestControl from "@/assets/trade-pest-control.jpg";

export const WAGE_SOURCE =
  "U.S. Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2024 (national). Starting out = 10th percentile. Median = 50th. Experienced = 90th. Annual. Georgia figures to be added alongside national.";

export type Person = {
  name: string;
  age: number;
  words: string;
};

export type Trade = {
  slug: string;
  name: string;
  group: string;
  image: string;
  /** Three plain sentences: what your hands do, where you are, who you're with. */
  whatItIs: string;
  /** Six to eight first-person lines, morning to end of shift. */
  day: string[];
  wages: { start: number; median: number; experienced: number };
  socCode: string;
  /** Shown instead of the standard BLS note when the SOC mapping is not clean. */
  wageNote?: string;
  /** False until the figures are checked against the published OEWS May 2024 release. */
  wagesVerified?: boolean;
  /** The actual path in. */
  howYouGetIn: string[];
  /** Honest requirements. Say the hard parts. */
  before: string[];
  person?: Person;
  becomes: string;
  related: string[];
};

export const TRADE_GROUPS: { title: string; slugs: string[] }[] = [
  {
    title: "Keeping buildings alive",
    slugs: [
      "electrical",
      "hvac-plumbing",
      "commercial-refrigeration",
      "elevator-repair",
      "fire-security-systems",
      "appliance-repair",
    ],
  },
  {
    title: "Building things that weren't there",
    slugs: [
      "construction-carpentry",
      "welding-fabrication",
      "masonry-concrete",
      "roofing",
      "window-door-installation",
      "flooring-tile",
      "painting-drywall",
      "insulation",
      "sign-awning-installation",
    ],
  },
  {
    title: "Machines and engines",
    slugs: ["automotive-diesel", "heavy-equipment-operation", "aviation-maintenance"],
  },
  {
    title: "Power and connection",
    slugs: ["solar-renewable-energy", "telecommunications-cabling"],
  },
  {
    title: "Property and grounds",
    slugs: ["landscaping-irrigation", "pool-spa-service", "pest-control", "locksmithing"],
  },
];

export const trades: Trade[] = [
  {
    slug: "electrical",
    name: "Electrical",
    group: "Keeping buildings alive",
    image: electrical,
    whatItIs:
      "You run power into buildings that don't have it yet and fix it in the ones that do. Most days you're working off prints on a site that isn't finished, or in somebody's basement finding out why half the house went dark. Everything anybody plugs in went through hands like yours first.",
    day: [
      "Trailer at seven, look at prints, get the day's floor from the foreman.",
      "Rough-in on a new build \u2014 boxes set, home runs pulled to the panel.",
      "Bend conduit through the morning. It either looks right or it doesn't.",
      "Lunch on the tailgate.",
      "Afternoon is a service call across town. No power to half a kitchen.",
      "Find it in the panel \u2014 a loose neutral on a shared circuit.",
      "Torque it down, test it, done in forty minutes.",
    ],
    wages: { start: 39430, median: 62350, experienced: 106030 },
    socCode: "47-2111",
    wagesVerified: true,
    howYouGetIn: [
      "A four-year apprenticeship. You are paid from the first day and your pay steps up every year.",
      "Or trade school first, then apprentice with credit for what you finished.",
      "Georgia requires a license to pull permits on your own. That comes after the hours.",
      "The Mustard Seed covers tuition, exam fees, and your first set of hand tools.",
    ],
    before: [
      "You have to be able to read. Prints are a language and you'll be learning it for two years.",
      "Steady hands and patience for work that has to be exactly right the first time.",
      "Comfort in crawl spaces, attics, and unfinished buildings in every kind of weather.",
    ],
    becomes:
      "Journeyman, then master electrician, then your own license and your own trucks. Industrial and controls work pays higher than residential and most people never find that out.",
    related: ["solar-renewable-energy", "fire-security-systems", "telecommunications-cabling"],
  },
  {
    slug: "hvac-plumbing",
    name: "HVAC & Plumbing",
    group: "Keeping buildings alive",
    image: hvac,
    whatItIs:
      "You keep air and water moving through buildings. Some days that's installing a system in a house that's still framed; most days it's finding what failed in a system somebody depends on. You're usually in a truck with your name on the door and a customer waiting.",
    day: [
      "Dispatch hits my phone before I'm out of the driveway.",
      "First call is a no-cool. Gauges on, check the charge, check the capacitor.",
      "Capacitor's swollen. Swap it, system starts, I show the homeowner the old one.",
      "Second call is a slab leak. That one takes the rest of the morning.",
      "Lunch in the truck, notes into the tablet between calls.",
      "Afternoon change-out with another tech, two of us on the condenser.",
      "Braze the lines, pull a vacuum, charge it, verify the split.",
    ],
    wages: { start: 39130, median: 59810, experienced: 91020 },
    socCode: "49-9021",
    wagesVerified: true,
    wageNote: "HVACR technicians are SOC 49-9021. Plumbers track separately under SOC 47-2152: $40,670 starting, $62,970 median, $105,150 experienced.",
    howYouGetIn: [
      "Six months to two years of trade school, or a paid apprenticeship.",
      "EPA 608 certification is required to touch refrigerant. It's a test, not a degree.",
      "Most shops will hire you as a helper first and train you on their trucks.",
      "The Mustard Seed covers tuition, the 608 exam, and your first gauge set.",
    ],
    before: [
      "Heat. Attics in a Georgia August are the job, not an exception.",
      "A clean driving record \u2014 you'll be handed a company truck.",
      "You'll talk to customers on their worst day. Patience counts as a skill here.",
    ],
    becomes:
      "Lead tech, then service manager, then owner. Home service is the most common trade to end in your own business.",
    related: ["commercial-refrigeration", "electrical", "appliance-repair"],
  },
  {
    slug: "commercial-refrigeration",
    name: "Commercial Refrigeration",
    group: "Keeping buildings alive",
    image: refrigeration,
    whatItIs:
      "You keep cold things cold when somebody's whole business depends on it. Grocery stores, restaurants, cold storage, hospitals holding blood and vaccines. When a walk-in fails at two in the morning, somebody is losing thousands of dollars an hour until you get there.",
    day: [
      "Store calls at six \u2014 walk-in freezer is climbing and the manager is watching product.",
      "Pull the panel, check the contactor, check for a restriction in the line.",
      "It's the TXV. Recover, replace, evacuate, recharge, watch the superheat come down.",
      "Manager stops worrying about his inventory. That's the job.",
      "Rest of the morning is scheduled maintenance across three stores.",
      "Coils cleaned, gaskets checked, logs written up.",
      "On call one week a month, and that week you carry the phone everywhere.",
    ],
    wages: { start: 40000, median: 61000, experienced: 98000 },
    socCode: "49-9021",
    wagesVerified: false,
    wageNote: "BLS does not break commercial refrigeration out on its own — it sits inside SOC 49-9021 with HVAC. The figures above are that combined occupation; refrigeration-specific pay generally runs higher.",
    howYouGetIn: [
      "Start in HVAC, then specialize. Almost nobody enters refrigeration first.",
      "EPA 608 Type II and Universal are the certifications that matter here.",
      "Supermarket chains and food service companies hire and train directly.",
      "The Mustard Seed covers tuition, certification, and tools.",
    ],
    before: [
      "Emergency work is the job. Nights and weekends come with it.",
      "Cold. You will spend real time inside freezers.",
      "Precision \u2014 refrigeration is less forgiving than comfort cooling.",
    ],
    becomes:
      "One of the highest-paid service trades, and one of the shortest-staffed. Techs with rack refrigeration experience write their own ticket.",
    related: ["hvac-plumbing", "appliance-repair", "electrical"],
  },
  {
    slug: "elevator-repair",
    name: "Elevator Repair",
    group: "Keeping buildings alive",
    image: elevator,
    whatItIs:
      "You install and maintain the machines that move people vertically through buildings. Every high-rise, hospital, and parking deck in Atlanta runs on equipment somebody in this trade signed off on. It is the highest-paid construction trade in the country and almost no one under twenty knows it exists.",
    day: [
      "Machine room at seven, one other mechanic, coffee and the service log.",
      "Monthly maintenance on six cars \u2014 brakes, ropes, controller, door operator.",
      "Ride the top of the car through the hoistway, checking the rails as you go.",
      "Callback after lunch: doors not closing on the fourth floor.",
      "It's the door restrictor. Adjust it, cycle it thirty times, watch it hold.",
      "Paperwork matters here. Everything you touch gets recorded.",
      "You are always working with somebody. Nobody does this trade alone.",
    ],
    wages: { start: 54720, median: 106580, experienced: 149250 },
    socCode: "47-4021",
    wagesVerified: true,
    howYouGetIn: [
      "A four-year apprenticeship, almost always through IUEC. You are paid throughout.",
      "Entry is competitive and comes through an aptitude test and interview.",
      "You do not need a degree. You do need to pass the test.",
      "The Mustard Seed covers test prep, application costs, and tools.",
    ],
    before: [
      "Heights. You will work in hoistways and on top of cars.",
      "Mechanical aptitude \u2014 the test measures it and the work demands it.",
      "The wait to get in can be long. Getting in is the hard part; staying is not.",
    ],
    becomes:
      "Mechanic, then adjuster, then supervisor. Adjusters are the specialists who make a bank of elevators run right, and they are paid accordingly.",
    related: ["electrical", "fire-security-systems", "welding-fabrication"],
  },
  {
    slug: "fire-security-systems",
    name: "Fire & Security Systems",
    group: "Keeping buildings alive",
    image: fireSecurity,
    whatItIs:
      "You install and service the systems that tell people to get out of a building. Alarms, sprinkler monitoring, access control, cameras. Low voltage work, mostly clean, and it is the one trade where the thing you installed only matters on the worst day the building ever has.",
    day: [
      "Pull cable through a new office build all morning \u2014 ceiling grid, J-hooks, home runs to the panel.",
      "Terminate devices after lunch. Smokes, pulls, horns, strobes.",
      "Program the panel and start the walk test with the fire marshal.",
      "Every device gets triggered and verified. Every one.",
      "One zone doesn't report. Trace it back to a bad splice above the ceiling.",
      "Fix it, retest, get the sign-off.",
      "Service calls fill the days you're not on a build.",
    ],
    wages: { start: 38410, median: 59300, experienced: 81980 },
    socCode: "49-2098",
    wagesVerified: true,
    howYouGetIn: [
      "On-the-job training with a low voltage contractor. Many hire with no experience.",
      "NICET certification is the credential that moves your pay, in levels.",
      "Georgia requires a low voltage license for contractors, not for technicians starting out.",
      "The Mustard Seed covers NICET study materials, exam fees, and tools.",
    ],
    before: [
      "Ladders, ceilings, and attic spaces.",
      "Documentation discipline. Fire work is inspected and your paperwork is part of it.",
      "A clean background \u2014 you'll be in banks, schools, and hospitals.",
    ],
    becomes:
      "NICET III and IV inspectors, then project management or your own low voltage company. Access control and networked systems pay above straight alarm work.",
    related: ["electrical", "telecommunications-cabling", "elevator-repair"],
  },
  {
    slug: "appliance-repair",
    name: "Appliance Repair",
    group: "Keeping buildings alive",
    image: appliance,
    whatItIs:
      "You fix the machines inside people's houses that they cannot live without for more than two days. Refrigerators, washers, ranges, dryers. It is one of the few trades you can enter with almost no money and run out of your own van inside two years.",
    day: [
      "Six or seven calls on the schedule, routed across the county.",
      "First one is a fridge not cooling. Pull it out, check the compressor, check the board.",
      "It's the evaporator fan motor. Have one on the van, in and out in an hour.",
      "Second is a washer that won't drain. A sock in the pump. Charge the diagnostic and go.",
      "Lunch between stops, parts ordering from the van.",
      "Afternoon is a range with no bake. Igniter, ordered, back Thursday.",
      "Every job ends with somebody relieved. That never gets old.",
    ],
    wages: { start: 33280, median: 49410, experienced: 77800 },
    socCode: "49-9031",
    wagesVerified: true,
    howYouGetIn: [
      "Short training, six months to a year, or straight on-the-job with a service company.",
      "Manufacturer certifications \u2014 Whirlpool, GE, LG, Samsung \u2014 raise your rate.",
      "EPA 608 if you want to work on sealed refrigeration systems.",
      "The Mustard Seed covers training, certifications, and your first tool set.",
    ],
    before: [
      "You are in people's homes all day. How you carry yourself is half the job.",
      "Lifting. Appliances are heavy and they are never in an easy spot.",
      "Reliable transportation before a company van is handed to you.",
    ],
    becomes:
      "The lowest barrier to owning your own business of any trade on this list. One van, one phone, and a reputation.",
    related: ["hvac-plumbing", "commercial-refrigeration", "electrical"],
  },
  {
    slug: "construction-carpentry",
    name: "Construction & Carpentry",
    group: "Building things that weren't there",
    image: carpentry,
    whatItIs:
      "You build the structure everything else attaches to. Framing, forms, trim, cabinets \u2014 depending on where you land, it's either heavy work in the open air or fine work inside a finished house. It is the trade most people picture when they picture the trades, and it's the one that teaches you how a building actually goes together.",
    day: [
      "On site at six-thirty while it's still cool. Stack of lumber, a set of plans, four other guys.",
      "Layout first. Chalk lines on the deck, plates marked, nothing cut yet.",
      "Cut and stand walls through the morning. You can see the house appear.",
      "Lunch in the shade of what you just built.",
      "Sheathe and brace in the afternoon.",
      "Foreman checks the plumb on the corners before we leave.",
      "Tomorrow is the second floor.",
    ],
    wages: { start: 38760, median: 59310, experienced: 98370 },
    socCode: "47-2031",
    wagesVerified: true,
    howYouGetIn: [
      "Hired as a laborer or helper with no experience. This is the most open door on the list.",
      "Three-to-four-year apprenticeships exist and pay better long-term than picking it up on site.",
      "Trade school shortens the climb but is not required.",
      "The Mustard Seed covers tuition where you want it, and your first framing tools.",
    ],
    before: [
      "Weather. You work in it. All of it.",
      "Math you'll actually use \u2014 a tape measure, angles, and fractions every hour.",
      "Showing up on time, every day, matters more here than talent.",
    ],
    becomes:
      "Lead carpenter, then foreman, then superintendent or your own crew. Finish carpentry and cabinetmaking pay more and beat up your body less.",
    related: ["roofing", "masonry-concrete", "window-door-installation"],
  },
  {
    slug: "welding-fabrication",
    name: "Welding & Fabrication",
    group: "Building things that weren't there",
    image: welding,
    whatItIs:
      "You join metal so it holds. Structural steel, pipe, pressure vessels, custom fabrication \u2014 the range is enormous and the pay range with it. A certified pipe welder and a guy who welds gates are doing the same verb and living different lives.",
    day: [
      "Shop at seven. Read the print, pull the material, check the WPS.",
      "Fit-up before anything gets hot. Bad fit-up is bad weld, every time.",
      "Tack, check for square, then run the root.",
      "Grind, inspect, fill, cap. Hood down most of the morning.",
      "Lunch, then a second piece that has to match the first exactly.",
      "QC comes through with a gauge and sometimes an X-ray.",
      "Whether it passed is not an opinion. That's what I like about it.",
    ],
    wages: { start: 38130, median: 51000, experienced: 75850 },
    socCode: "51-4121",
    wagesVerified: true,
    howYouGetIn: [
      "Six months to two years at a technical college, or a shop that trains you.",
      "The certification is what pays \u2014 AWS structural, then 6G pipe. Each one moves your number.",
      "You can be working and certified inside a year if you push.",
      "The Mustard Seed covers tuition, certification testing, and your hood and leathers.",
    ],
    before: [
      "Steady hands and the patience to run the same bead a hundred times.",
      "Heat, sparks, and confined spaces.",
      "Eyes and lungs are the things you protect. Take that seriously from day one.",
    ],
    becomes:
      "Certified pipe welder, then rig welder, inspector, or your own fab shop. Traveling pipeline and industrial shutdown work pays multiples of shop rate.",
    related: ["masonry-concrete", "heavy-equipment-operation", "construction-carpentry"],
  },
  {
    slug: "masonry-concrete",
    name: "Masonry & Concrete",
    group: "Building things that weren't there",
    image: masonry,
    whatItIs:
      "You build with the material that outlasts everything else on the site. Block, brick, stone, flatwork, foundations. What you set today will be standing after the people who hired you are gone, and it will be visible the whole time.",
    day: [
      "Early start \u2014 concrete does not wait and neither does the heat.",
      "Set line and level, mix mud, start laying at the corners.",
      "Corners are the whole job. Get them right and the wall builds itself.",
      "Course after course through the morning, checking level constantly.",
      "Lunch, then strike the joints while the mud is right.",
      "Flatwork crew is pouring next door and they'll finish long after dark if they have to.",
      "Clean the tools. Always clean the tools.",
    ],
    wages: { start: 41330, median: 60800, experienced: 95560 },
    socCode: "47-2021",
    wagesVerified: true,
    wageNote:
      "Two occupations feed this trade. The figures above are brickmasons and blockmasons (SOC 47-2021). Cement masons and concrete finishers (SOC 47-2051) run $38,290 starting out, $54,660 median, $87,620 experienced.",
    howYouGetIn: [
      "Start as a laborer or a tender. Almost everyone does.",
      "Three-to-four-year apprenticeships through the union pay from day one.",
      "Technical college programs run under a year.",
      "The Mustard Seed covers tuition and your first trowels and levels.",
    ],
    before: [
      "This is physical work and it is honest about that. Block is heavy.",
      "Early mornings and weather that dictates the schedule.",
      "An eye for straight. You either develop it or you don't stay.",
    ],
    becomes:
      "Foreman, then your own crew. Restoration and historic masonry is specialized, well paid, and there are almost no young people in it.",
    related: ["construction-carpentry", "heavy-equipment-operation", "welding-fabrication"],
  },
  {
    slug: "roofing",
    name: "Roofing",
    group: "Building things that weren't there",
    image: roofing,
    whatItIs:
      "You are the reason a family sleeps through a storm without thinking about it. Tear-off, dry-in, shingle, flash, finish. It is hard work done fast in the open, and it is the trade with the most direct line from apprentice to owning a company.",
    day: [
      "On the roof by seven because by two it will be a hundred and thirty degrees up there.",
      "Tear-off first. Everything old goes in the dumpster.",
      "Deck inspected, rotten sheathing cut out and replaced.",
      "Underlayment down, ice and water in the valleys.",
      "Shingles start at the eave and go up. Crew of five gets a house in a day.",
      "Flashing at the chimney is where the skill actually is.",
      "Ground cleaned with a magnet before we leave. Every nail.",
    ],
    wages: { start: 37060, median: 50970, experienced: 80780 },
    socCode: "47-2181",
    wagesVerified: true,
    howYouGetIn: [
      "Hired with no experience, trained on the roof. Nearly every roofer in Georgia started this way.",
      "Manufacturer certifications \u2014 GAF, Owens Corning \u2014 matter once you're running work.",
      "Insurance and storm restoration is a separate skill and pays well.",
      "The Mustard Seed covers safety training, harness gear, and tools.",
    ],
    before: [
      "Heights and heat. There is no version of this trade without them.",
      "Fall protection is not optional and the guys who skip it are not the ones to learn from.",
      "Speed comes later. Do it right first.",
    ],
    becomes:
      "Crew lead, then production manager, then your own company. Roofing companies sell \u2014 the ones built properly sell for real money.",
    related: ["construction-carpentry", "insulation", "window-door-installation"],
  },
  {
    slug: "window-door-installation",
    name: "Window & Door Installation",
    group: "Building things that weren't there",
    image: windowDoor,
    whatItIs:
      "You put in the openings \u2014 glass, frames, entry doors, storefront. Residential replacement is precise indoor work; commercial glazing is heavy work on a building that isn't finished. Both are trades where a bad install shows up as a leak two winters later, so the careful people stay busy.",
    day: [
      "Load the van at the shop \u2014 units, shims, foam, flashing tape, caulk.",
      "First house is three windows. Old ones out, openings checked for rot and square.",
      "Set, shim, level, plumb, fasten. Check the operation before anything gets sealed.",
      "Flash and foam. This is where a good install separates from a bad one.",
      "Lunch, then an entry door on the other side of the county.",
      "Doors are unforgiving \u2014 a sixteenth out and it won't latch right.",
      "Homeowner opens and closes it four times before they believe it.",
    ],
    wages: { start: 37710, median: 55440, experienced: 98780 },
    socCode: "47-2121",
    wagesVerified: true,
    wageNote:
      "The closest clean code is glaziers (SOC 47-2121). Window and door installation work sits across that code and carpentry.",
    howYouGetIn: [
      "On-the-job with a replacement company or a glass contractor. No school required.",
      "Commercial glazing runs a three-to-four-year paid apprenticeship.",
      "Manufacturer installation certifications raise your rate quickly.",
      "The Mustard Seed covers training and your first install kit.",
    ],
    before: [
      "Careful hands. You are handling glass in somebody's living room.",
      "Lifting with a partner \u2014 commercial units are genuinely heavy.",
      "Comfort talking to homeowners, because you're in their house all day.",
    ],
    becomes:
      "Lead installer, then commercial glazing, then your own install company. Storefront and curtain wall is the high end.",
    related: ["construction-carpentry", "flooring-tile", "painting-drywall"],
  },
  {
    slug: "flooring-tile",
    name: "Flooring & Tile",
    group: "Building things that weren't there",
    image: flooring,
    whatItIs:
      "You do the last thing that goes into a room and the first thing anybody notices. Tile, stone, hardwood, LVP. It is close, precise work on your knees, and a good tile setter is booked out months in advance in every market in Georgia.",
    day: [
      "Check the floor for flat before anything else. Everything depends on that.",
      "Layout \u2014 find the center, dry-lay the field, decide where the cuts land.",
      "Cuts go where nobody looks. That decision is the craft.",
      "Set the field through the morning, back-buttering every piece.",
      "Lunch, then the wet saw for the perimeter and the outlets.",
      "Let it set overnight. Grout tomorrow.",
      "Homeowner walks in and says nothing about the layout. That means it's right.",
    ],
    wages: { start: 36140, median: 52240, experienced: 82960 },
    socCode: "47-2044",
    wagesVerified: true,
    wageNote:
      "The figures above are tile and stone setters (SOC 47-2044). Floor layers (SOC 47-2042) run $37,190 starting out, $54,340 median, $97,180 experienced.",
    howYouGetIn: [
      "Helper first, mixing and cutting for a setter. That is the apprenticeship in practice.",
      "Formal three-year apprenticeships exist through the union.",
      "Manufacturer training \u2014 Schluter, Laticrete \u2014 is short and worth doing.",
      "The Mustard Seed covers training and your first saw and trowels.",
    ],
    before: [
      "Knees. Get good pads on day one and use them.",
      "Patience \u2014 a rushed layout can't be fixed later.",
      "An eye for detail that borders on irritating.",
    ],
    becomes:
      "Independent setter almost immediately. Custom stone, large-format, and waterproofing work commands premium rates and there are not enough people doing it.",
    related: ["painting-drywall", "window-door-installation", "construction-carpentry"],
  },
  {
    slug: "painting-drywall",
    name: "Painting & Drywall",
    group: "Building things that weren't there",
    image: painting,
    whatItIs:
      "You take a rough shell and make it a room. Hanging, finishing, texture, prime, paint. Drywall finishing in particular is a genuine craft that looks simple from outside and is not, and the people who are actually good at it never lack work.",
    day: [
      "Hang board all morning on a new build. Two of us, lifts for the ceilings.",
      "Screws set right \u2014 not through the paper, not proud.",
      "Tape and first coat starts the next day and the coats build from there.",
      "Sand between coats. Light held flat against the wall shows everything.",
      "Afternoon on a repaint across town. Cut in, roll, cut in.",
      "Cut lines are where a painter's reputation lives.",
      "Clean the brushes properly or buy new ones every month.",
    ],
    wages: { start: 37810, median: 58140, experienced: 101380 },
    socCode: "47-2081",
    wagesVerified: true,
    wageNote:
      "The figures above are drywall and ceiling tile installers (SOC 47-2081). Painters, construction and maintenance (SOC 47-2141) are a separate code and those figures are still being verified. We will print them when they are checked.",
    howYouGetIn: [
      "Hired with no experience. Along with carpentry, the most open door on this list.",
      "Level 5 finishing and spray application are the skills that separate pay grades.",
      "Commercial and industrial coatings pay well above residential repaint.",
      "The Mustard Seed covers training, sprayer certification, and your first kit.",
    ],
    before: [
      "Dust and repetition. Sanding is most of finishing.",
      "Ladders and stilts.",
      "Steadiness \u2014 cut lines are done freehand and everybody sees them.",
    ],
    becomes:
      "Crew lead, then your own painting company \u2014 one of the fastest businesses on this list to start. Industrial coatings and specialty finishes are the high end.",
    related: ["flooring-tile", "insulation", "construction-carpentry"],
  },
  {
    slug: "insulation",
    name: "Insulation",
    group: "Building things that weren't there",
    image: insulation,
    whatItIs:
      "You are the reason a house costs a hundred dollars a month to cool instead of three hundred. Batts, blown-in, spray foam, and mechanical insulation on pipe and duct. Spray foam in particular is a specialized, certified, well-paid corner of the trade that most people don't know exists.",
    day: [
      "New build, still open framing. Whole crew, whole house today.",
      "Batts in the walls first \u2014 cut clean, friction fit, no gaps and no compression.",
      "Foam the rim joist and every penetration. That's where the air actually moves.",
      "Lunch, then the rig for the attic.",
      "Blow the attic to depth, check the ruler markers as you go.",
      "Suit, respirator, gloves the whole time on the foam work.",
      "Blower door test at the end tells you whether you did it right.",
    ],
    wages: { start: 35950, median: 48680, experienced: 77160 },
    socCode: "47-2131",
    wagesVerified: true,
    wageNote: "Floor, ceiling, and wall insulation workers are SOC 47-2131. Mechanical insulation workers (pipe and duct) track separately under SOC 47-2132: $39,450 starting, $57,250 median, $94,110 experienced.",
    howYouGetIn: [
      "Hired and trained on the crew. No school required to start.",
      "SPFA certification for spray foam is the credential that changes your pay.",
      "Mechanical insulation runs a four-to-five-year paid apprenticeship.",
      "The Mustard Seed covers certification and PPE.",
    ],
    before: [
      "Attics and crawl spaces in Georgia summer. Say it plainly \u2014 this is hot, tight work.",
      "Respirator discipline. Non-negotiable with foam.",
      "Steady pace over speed.",
    ],
    becomes:
      "Foam crew lead, then energy auditing and building performance, then your own insulation company. Mechanical insulation on industrial sites is the highest-paid path.",
    related: ["roofing", "painting-drywall", "hvac-plumbing"],
  },
  {
    slug: "sign-awning-installation",
    name: "Sign & Awning Installation",
    group: "Building things that weren't there",
    image: signAwning,
    whatItIs:
      "You put a business's name on the building. Channel letters, monument signs, awnings, LED retrofits \u2014 part electrical, part fabrication, part crane work. It is a small trade nobody talks about, and the people in it are almost never looking for work.",
    day: [
      "Shop first \u2014 load the sign, the raceway, and the bucket truck.",
      "Site survey done last week, so the mounting pattern is already known.",
      "Set up cones, get the bucket in position, and check for overhead lines before anything goes up.",
      "Raceway mounted and leveled, then the letters go on one at a time.",
      "Wiring back to the disconnect. Low voltage or line voltage depending on the sign.",
      "Power it up at dusk to confirm every letter lights.",
      "Owner comes out and takes a picture of it. Every single time.",
    ],
    wages: { start: 34000, median: 46000, experienced: 70000 },
    socCode: "49-9096",
    wagesVerified: false,
    wageNote: "There is no clean SOC code for sign work. BLS scatters it across SOC 47-4099, Construction and Related Workers, All Other, plus electrical and sheet metal codes. The figures above are 47-4099.",
    howYouGetIn: [
      "On-the-job with a sign company. Almost nobody trains for this in advance.",
      "Aerial lift and crane certifications, plus a CDL for larger installs, raise your pay fast.",
      "Electrical knowledge is what separates an installer from a helper.",
      "The Mustard Seed covers lift certification, CDL training, and tools.",
    ],
    before: [
      "Heights and bucket trucks.",
      "Awareness around overhead power lines. This is the real hazard of the trade.",
      "Travel \u2014 installs go where the customers are.",
    ],
    becomes:
      "Lead installer, then service manager, then your own sign company. Sign service and maintenance contracts are steady recurring money.",
    related: ["welding-fabrication", "electrical", "fire-security-systems"],
  },
  {
    slug: "automotive-diesel",
    name: "Automotive & Diesel",
    group: "Machines and engines",
    image: automotive,
    whatItIs:
      "You keep things moving. Cars, trucks, fleets, heavy equipment. Diesel and fleet work pays well above general automotive and has a fraction of the people in it, which is the single most useful fact in this trade and almost nobody tells a seventeen-year-old.",
    day: [
      "Bay at seven. First ticket is a no-start on a work truck the customer needs today.",
      "Scan it, pull codes, but the codes tell you where to look, not what's wrong.",
      "Fuel pressure is low. Trace it back to a clogged filter and a failing lift pump.",
      "Parts ordered, on the shelf by ten, truck out by noon.",
      "Lunch, then scheduled service on two fleet vans.",
      "Afternoon is a hard one \u2014 intermittent electrical, and those take as long as they take.",
      "Find it at four. A chafed harness behind the engine.",
    ],
    wages: { start: 33660, median: 49670, experienced: 80850 },
    socCode: "49-3023",
    wagesVerified: true,
    wageNote: "Automotive service technicians are SOC 49-3023. Diesel, bus, and truck technicians track separately under SOC 49-3031: $41,670 starting, $60,640 median, $85,980 experienced.",
    howYouGetIn: [
      "One to two years at a technical college, or hired as a lube tech and moved up.",
      "ASE certifications are the currency. Each one moves your pay.",
      "Dealer and manufacturer training programs pay you while you learn their equipment.",
      "The Mustard Seed covers tuition, ASE testing, and your first tool box.",
    ],
    before: [
      "Tools. This trade is unusual \u2014 you buy your own and it adds up over years.",
      "Diagnostic patience. The parts-swapping guys don't last.",
      "Clean driving record for road tests and fleet work.",
    ],
    becomes:
      "Master tech, then shop foreman, then service manager or your own shop. Diesel, fleet, and heavy equipment are where the money is and where the shortage is worst.",
    related: ["heavy-equipment-operation", "aviation-maintenance", "appliance-repair"],
  },
  {
    slug: "heavy-equipment-operation",
    name: "Heavy Equipment Operation",
    group: "Machines and engines",
    image: heavyEquipment,
    whatItIs:
      "You run the machines that move the earth before anything gets built. Excavators, dozers, graders, loaders. It is skilled work that looks like brute force from the road and is actually about a quarter-inch of accuracy in a fifty-ton machine.",
    day: [
      "On site before light. Walk the grade stakes, know the plan before you start the machine.",
      "Grease the machine and do the walk-around. Every day, no exceptions.",
      "Cut and fill through the morning. GPS on the blade tells you where you are.",
      "You develop a feel for it. After a while you stop watching the screen.",
      "Lunch in the cab.",
      "Afternoon is loading trucks. Rhythm matters \u2014 the crew works off your pace.",
      "Fuel and shut down. Report anything that felt wrong to the mechanic.",
    ],
    wages: { start: 40080, median: 58710, experienced: 100690 },
    socCode: "47-2073",
    wagesVerified: true,
    howYouGetIn: [
      "Start as a laborer or ground man on a site and get seat time when it's offered.",
      "Three-to-four-year paid apprenticeships through the operating engineers.",
      "Short heavy equipment schools exist \u2014 verify job placement before paying anyone.",
      "The Mustard Seed covers tuition, CDL training, and certification.",
    ],
    before: [
      "A CDL is worth having and dramatically widens what you can be hired for.",
      "Early hours, dirt, weather, and long stretches alone in a cab.",
      "Awareness \u2014 people work on the ground around a machine that can't see them.",
    ],
    becomes:
      "Operator, then grade foreman, then superintendent. Crane operation is a separate certification and one of the highest-paid seats on any job site.",
    related: ["masonry-concrete", "automotive-diesel", "construction-carpentry"],
  },
  {
    slug: "aviation-maintenance",
    name: "Aviation & Aircraft Maintenance",
    group: "Machines and engines",
    image: aviation,
    whatItIs:
      "You sign your name to work that people fly on. Inspections, repairs, overhauls, avionics. It is federally licensed, it is the most heavily documented trade on this list, and an A&P certificate is a credential that works in every state and most countries.",
    day: [
      "Hangar at six. Work cards for the day's inspection are already printed.",
      "Panels open, borescope the engine, check the compressor for damage.",
      "Every task gets signed. Your signature is the record.",
      "Find a cracked bracket on a control rod. It becomes a squawk and a parts order.",
      "Lunch, then the repair, done exactly to the manual. Not close to it. To it.",
      "Inspector signs behind me before anything closes up.",
      "Aircraft goes back on the line tomorrow morning.",
    ],
    wages: { start: 47790, median: 78680, experienced: 120080 },
    socCode: "49-3011",
    wagesVerified: true,
    howYouGetIn: [
      "An FAA-approved A&P program, eighteen months to two years.",
      "Or 30 months of documented experience under a certificated mechanic, then the exams.",
      "Written, oral, and practical exams for Airframe and for Powerplant.",
      "The Mustard Seed covers tuition, exam fees, and your first tool set.",
    ],
    before: [
      "Documentation discipline. Every single thing you do gets written down.",
      "Drug and alcohol testing and a clean background \u2014 this is a federal requirement.",
      "Shift work. Aircraft get maintained at night because they fly during the day.",
    ],
    becomes:
      "A&P, then Inspection Authorization, then lead, then avionics or powerplant specialization. Airlines, corporate flight departments, and Delta's Atlanta operation all hire here.",
    related: ["automotive-diesel", "welding-fabrication", "electrical"],
  },
  {
    slug: "solar-renewable-energy",
    name: "Solar & Renewable Energy",
    group: "Power and connection",
    image: solar,
    whatItIs:
      "You put power generation on a roof or in a field. Racking, panels, inverters, interconnection. It is the newest trade on this list, it is electrical work with a different envelope, and the people entering it now will be the senior people in ten years.",
    day: [
      "Residential install, crew of four. Truck loaded the night before.",
      "Roof team sets flashing and rail while the ground team stages panels.",
      "Layout follows the engineered plan exactly \u2014 spacing, setbacks, fire access.",
      "Panels up and clamped, then the wire management underneath where nobody sees it.",
      "Lunch, then the electrical side. Inverter, rapid shutdown, conduit to the panel.",
      "Commissioning at the end. System comes online and the meter starts running backward.",
      "Inspection is scheduled for Thursday and everything has to be right for it.",
    ],
    wages: { start: 39070, median: 51860, experienced: 80150 },
    socCode: "47-2231",
    wagesVerified: true,
    howYouGetIn: [
      "Hired and trained on the crew. Most installers start with no experience.",
      "NABCEP certification is the industry credential and it moves your pay.",
      "Electrical background accelerates everything \u2014 many solar electricians come from 47-2111.",
      "The Mustard Seed covers training, NABCEP fees, and fall protection gear.",
    ],
    before: [
      "Roofs and heat. It is roofing work with electrical stakes.",
      "Fall protection, always.",
      "The industry moves with policy and incentives. Companies come and go; the skill doesn't.",
    ],
    becomes:
      "Lead installer, then commissioning and service, then electrical licensure and utility-scale or storage work. Battery storage is the fastest-growing corner of it.",
    related: ["electrical", "roofing", "telecommunications-cabling"],
  },
  {
    slug: "telecommunications-cabling",
    name: "Telecommunications & Cabling",
    group: "Power and connection",
    image: telecom,
    whatItIs:
      "You install the physical layer everything digital runs on. Fiber, copper, data centers, cell sites. Nobody thinks about it until it's down, and Georgia is building data centers faster than it can staff them.",
    day: [
      "Data center build. Badge in, safety brief, get the day's rack assignments.",
      "Pull fiber overhead through the tray. Bend radius matters more than speed.",
      "Dress and terminate at the panel. Every strand labeled.",
      "Fusion splice the runs that need it. Clean fiber, good cleave, low loss.",
      "Lunch, then OTDR testing every run and documenting the results.",
      "One run is out of spec. Reterminate and retest until it passes.",
      "Documentation package goes to the customer at the end of the job.",
    ],
    wages: { start: 42940, median: 70500, experienced: 104840 },
    socCode: "49-9052",
    wagesVerified: true,
    wageNote: "Telecommunications line installers are SOC 49-9052. Telecom equipment installers and repairers track separately under SOC 49-2022: $42,440 starting, $62,630 median, $94,970 experienced.",
    howYouGetIn: [
      "Hired as a helper with no experience. Very open door.",
      "BICSI and fiber certifications are what move you up, and they are short courses.",
      "Tower climbing is a separate certification and pays substantially more.",
      "The Mustard Seed covers certification, testing, and tools.",
    ],
    before: [
      "Ceilings, crawl spaces, ladders, and lifts \u2014 or towers, if you go that way.",
      "Meticulousness. Sloppy cable work is visible forever.",
      "Travel on some jobs, especially cell site and outside plant work.",
    ],
    becomes:
      "Lead tech, then fiber splicer or data center infrastructure specialist, then project management. Georgia's data center growth means this trade is not going quiet.",
    related: ["electrical", "fire-security-systems", "solar-renewable-energy"],
  },
  {
    slug: "landscaping-irrigation",
    name: "Landscaping & Irrigation",
    group: "Property and grounds",
    image: landscaping,
    whatItIs:
      "You build and maintain the outside of a property. Design, install, hardscape, irrigation, maintenance. It has the lowest entry barrier of anything on this list and a genuine ceiling \u2014 irrigation and design-build are skilled, licensed, well-paid work that looks nothing like cutting grass.",
    day: [
      "Shop at six-thirty. Load the trailer, check the mowers, fuel up.",
      "Maintenance route in the morning \u2014 six commercial properties, crew of three.",
      "Mow, edge, blow, and it has to look sharp because people judge the whole property by it.",
      "Lunch, then the install side of the business.",
      "Irrigation repair on a system with a broken lateral. Dig it up, cut it in, glue it, test the zone.",
      "Set the controller and walk every head to check coverage.",
      "Trailer cleaned out before it goes back in the yard.",
    ],
    wages: { start: 29990, median: 38090, experienced: 53900 },
    socCode: "37-3011",
    wagesVerified: true,
    wageNote:
      "The figures above are landscaping and groundskeeping workers (SOC 37-3011) — where you start. First-line supervisors of landscaping crews (SOC 37-1012) run $39,270 starting out, $56,170 median, $83,080 experienced. That step is the whole point.",
    howYouGetIn: [
      "Hired immediately with no experience, anywhere in Georgia.",
      "Irrigation is where the pay changes. Georgia requires a contractor license for irrigation work.",
      "Pesticide applicator certification through the Georgia Department of Agriculture adds real money.",
      "The Mustard Seed covers certification, licensing fees, and tools.",
    ],
    before: [
      "Heat and early hours, most of the year.",
      "A driver's license \u2014 you'll be towing a trailer.",
      "The willingness to move past maintenance. The people who stay on a mower stay at mower pay.",
    ],
    becomes:
      "Crew lead, then irrigation tech, then design-build or your own company. Landscape companies are among the most commonly bought and sold small businesses in Georgia.",
    related: ["pool-spa-service", "masonry-concrete", "pest-control"],
  },
  {
    slug: "pool-spa-service",
    name: "Pool & Spa Service",
    group: "Property and grounds",
    image: poolSpa,
    whatItIs:
      "You keep water safe and equipment running. Chemistry, pumps, filters, heaters, automation. It is route work with real technical depth underneath it, and in Georgia it runs almost year-round.",
    day: [
      "Route of fifteen or twenty pools, planned the night before.",
      "Test the water at every stop \u2014 chlorine, pH, alkalinity, stabilizer.",
      "Dose what it needs, brush the walls, empty the baskets.",
      "Some stops are ten minutes. Some are not.",
      "Lunch in the truck between neighborhoods.",
      "Afternoon service call: pump is running but not moving water. Bad seal, losing prime.",
      "Rebuild it on site, prime it, watch the pressure come up.",
    ],
    wages: { start: 33860, median: 48620, experienced: 76110 },
    socCode: "49-9071",
    wagesVerified: true,
    howYouGetIn: [
      "Hired with no experience and trained on a route. Very open door.",
      "CPO \u2014 Certified Pool Operator \u2014 is a two-day course and it is the credential that matters.",
      "Equipment and automation training from manufacturers moves you from cleaner to technician.",
      "The Mustard Seed covers CPO certification and your first test kit and tools.",
    ],
    before: [
      "Sun, all day, most of the year.",
      "Chemical handling done carefully and correctly.",
      "Route reliability. Customers notice a missed week immediately.",
    ],
    becomes:
      "Service tech, then repair and renovation specialist, then your own route. Pool routes are bought and sold as assets \u2014 you can own income here early.",
    related: ["landscaping-irrigation", "hvac-plumbing", "electrical"],
  },
  {
    slug: "pest-control",
    name: "Pest Control",
    group: "Property and grounds",
    image: pestControl,
    whatItIs:
      "You protect buildings and the people in them from things that damage both. Termites, rodents, mosquitoes, commercial accounts with health inspections riding on your work. It is licensed, it is recurring revenue, and it is one of the steadiest trades in the South.",
    day: [
      "Ten or twelve stops today, routed tight.",
      "First is a quarterly service. Inspect the perimeter, treat, check the interior stations.",
      "Second is a termite inspection on a house that's about to close. That report matters to a lot of people.",
      "Find evidence in a crawl space and document all of it with photos.",
      "Lunch, then a commercial kitchen account before the dinner rush.",
      "Roach service in a restaurant is done right or done again next week.",
      "Every stop gets a report the customer can read.",
    ],
    wages: { start: 32460, median: 44730, experienced: 61410 },
    socCode: "37-2021",
    wagesVerified: true,
    howYouGetIn: [
      "Hired with no experience. Companies train you and pay for your licensing.",
      "Georgia requires registration and then certification through the Department of Agriculture.",
      "Wood-destroying organism certification is where the pay steps up.",
      "The Mustard Seed covers licensing, study materials, and exam fees.",
    ],
    before: [
      "Crawl spaces and attics. This is where the work actually happens.",
      "Chemical safety and label compliance, taken seriously.",
      "People skills \u2014 you're in homes and businesses all day and half the job is explaining.",
    ],
    becomes:
      "Route manager, then branch manager, then your own company. Pest control companies sell on recurring contract value and they sell well.",
    related: ["landscaping-irrigation", "insulation", "appliance-repair"],
  },
  {
    slug: "locksmithing",
    name: "Locksmithing",
    group: "Property and grounds",
    image: locksmith,
    whatItIs:
      "You control who gets into what. Residential, automotive, commercial master key systems, safes, electronic access. It is the smallest trade on this list and the one where being genuinely good makes you nearly irreplaceable in a market.",
    day: [
      "Van stocked with blanks, cylinders, pinning kit, and the key machine.",
      "First call is a lockout. Ten minutes of work and somebody's whole morning is saved.",
      "Second is a rekey on a house that just sold. Six cylinders, all keyed alike.",
      "Pin them at the tailgate, install, test every door twice.",
      "Lunch, then a commercial job \u2014 master key system for a small office building.",
      "That one is a chart problem before it's a lock problem. You design the hierarchy first.",
      "Afternoon ends with a safe that a customer inherited and has no combination for.",
    ],
    wages: { start: 34750, median: 50490, experienced: 79340 },
    socCode: "49-9094",
    wagesVerified: true,
    howYouGetIn: [
      "Apprentice with a working locksmith. This trade still runs mostly on that.",
      "ALOA training and certification is the recognized credential.",
      "Automotive key programming is a separate skill and a large share of the money.",
      "The Mustard Seed covers training, certification, and your first pinning kit and machine.",
    ],
    before: [
      "A clean background. You are being handed access to people's homes and businesses.",
      "Fine motor skill and patience for small mechanical work.",
      "On-call hours \u2014 lockouts do not happen at convenient times.",
    ],
    becomes:
      "Independent locksmith with a van, quickly. Commercial access control and institutional master keying are the high end, and electronic access is where the trade is going.",
    related: ["fire-security-systems", "appliance-repair", "telecommunications-cabling"],
  },
];

export const tradeBySlug = (slug: string) => trades.find((t) => t.slug === slug);

export const money = (n: number) => `$${n.toLocaleString("en-US")}`;

/** Trades shown in the /start explorer. */
export const EXPLORER_SLUGS = [
  "electrical",
  "hvac-plumbing",
  "welding-fabrication",
  "automotive-diesel",
  "construction-carpentry",
  "roofing",
  "elevator-repair",
  "aviation-maintenance",
];
