import electrical from "@/assets/trade-electrical.jpg";
import welding from "@/assets/trade-welding.jpg";
import hvac from "@/assets/trade-hvac.jpg";
import automotive from "@/assets/trade-automotive.jpg";
import roofing from "@/assets/trade-roofing.jpg";
import mentorship from "@/assets/mentorship.jpg";

export const WAGE_SOURCE =
  "U.S. Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2024 (national). Georgia figures to be added alongside national.";

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
      "You run power into buildings that don't have it yet and fix it in the ones that do. Most days you're on a site before it's finished, working off prints, with three or four other people who know your name. The work is measured, then cut, then tested — and it either reads right on the meter or it doesn't.",
    day: [
      "Truck's loaded by 6:30. Coffee in the cupholder, prints on the seat.",
      "First hour is layout — marking boxes on studs off the drawings.",
      "Then we pull wire. Two of us on the reel, one feeding, one hauling.",
      "Lunch out of a cooler on the tailgate, twenty minutes.",
      "Afternoon is terminations. Strip, land, torque to spec, label.",
      "Foreman walks the panel with me before we close it up.",
      "Meter reads what it's supposed to read. Tools in the truck by 3:30.",
    ],
    wages: { start: 39000, median: 62350, experienced: 104000 },
    socCode: "47-2111",
    howYouGetIn: [
      "A four-year apprenticeship. You are paid from the first day of it.",
      "Wages step up roughly every six months as your hours bank.",
      "Classroom nights, typically two a week, through a union hall or an open-shop training program.",
      "Journeyman license at the end. The Mustard Seed covers tools, books, and exam fees.",
    ],
    before: [
      "A driver's license and a way to get to a job site at 6:30 in the morning.",
      "You'll be in attics in July and crawlspaces in January.",
      "Ladders every day. If heights are a hard no, say so early.",
      "Basic math you can do on paper — fractions, ratios, Ohm's law.",
    ],
    becomes:
      "Journeyman, then foreman, then estimator or superintendent. A lot of electricians end up holding the license their own company runs on.",
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
    wages: { start: 37000, median: 59810, experienced: 94000 },
    socCode: "49-9021",
    howYouGetIn: [
      "Six months to two years of trade school or a paid apprenticeship.",
      "EPA 608 certification is required to touch refrigerant. It's a test, not a degree.",
      "Most shops will hire you as a helper first and train you on their trucks.",
      "The Mustard Seed covers tuition, the 608 exam, and your first gauge set.",
    ],
    before: [
      "Heat. Attics in a Georgia August are the job, not an exception.",
      "A clean driving record — you'll be handed a company truck.",
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
    image: hvac,
    whatItIs:
      "You keep cold things cold when a business depends on it — grocery cases, walk-in coolers, hospital blood storage, restaurant lines. When one goes down, product is on a clock. You work mostly alone, mostly on call, and you're the person they're glad to see.",
    day: [
      "Phone goes off at 4 a.m. A walk-in at a grocery store is at 48 degrees.",
      "Twenty minutes across town. Store manager meets me at the dock.",
      "Suction pressure is low. I start at the metering device.",
      "Found the leak at a flare fitting. Recover, repair, pressure test.",
      "Pull a vacuum, weigh in the charge, watch the case pull down.",
      "Case is at 34 by 7:30. Product is saved.",
      "Two PMs scheduled after that, then paperwork in the truck.",
    ],
    wages: { start: 40000, median: 61000, experienced: 98000 },
    socCode: "49-9021",
    howYouGetIn: [
      "Usually HVAC training first, then refrigeration on top of it.",
      "EPA 608 Universal certification.",
      "Paid apprenticeship or helper work with a commercial shop.",
    ],
    before: [
      "On-call rotations. Refrigeration doesn't fail during business hours.",
      "Comfort working alone and making the call yourself.",
      "Cold. You'll spend real time inside a 34-degree box.",
    ],
    becomes:
      "Lead service tech, then supermarket account manager or your own refrigeration company.",
    related: ["hvac-plumbing", "appliance-repair", "electrical"],
  },
  {
    slug: "elevator-repair",
    name: "Elevator Repair",
    group: "Keeping buildings alive",
    image: electrical,
    whatItIs:
      "You install and maintain the machines that move people vertically. It's mechanical, electrical, and controls work all in one job, in a shaft, with a partner. It is the highest-paid building trade in the country and almost nobody tells seventeen-year-olds that.",
    day: [
      "Meet my mechanic in the lobby at 7. Sign in with building security.",
      "Machine room first — check the controller log for fault codes.",
      "Down to the pit. Lockout, tagout, no shortcuts, ever.",
      "Replace a set of door rollers that have been dragging.",
      "Ride the car top with him, adjust the door operator.",
      "Run it through the full range twice and watch the leveling.",
      "Log the work, clear the fault, hand the car back to the building.",
    ],
    wages: { start: 55000, median: 106580, experienced: 145000 },
    socCode: "47-4021",
    howYouGetIn: [
      "A four-year NEIEP apprenticeship, paid from day one.",
      "Applications open in windows, not year-round — timing matters and we track it.",
      "Aptitude test and interview to get in. Competitive; preparation is the whole game.",
    ],
    before: [
      "Tight spaces and real heights. No way around either.",
      "Strict safety discipline. This trade takes lockout/tagout seriously because it has to.",
      "Mechanical aptitude and a clean background check for building access.",
    ],
    becomes:
      "Mechanic, then adjuster — the person who tunes the ride — then superintendent. The ceiling here is unusually high.",
    related: ["electrical", "fire-security-systems", "welding-fabrication"],
  },
  {
    slug: "fire-security-systems",
    name: "Fire & Security Systems",
    group: "Keeping buildings alive",
    image: electrical,
    whatItIs:
      "You install and service the systems that detect fire, control access, and watch a building when nobody's in it. Low-voltage wire, panels, devices, and a lot of testing. You're in schools, hospitals, warehouses, and offices, usually with one other tech.",
    day: [
      "Load devices and a spool of fire-rated cable, head to a school.",
      "Pull cable above the ceiling grid down a hallway before staff arrive.",
      "Mount and address smoke detectors, one at a time, logged as I go.",
      "Terminate at the panel and start walking the building to test.",
      "Every device gets tripped and verified with the panel on the radio.",
      "Two bad detectors get swapped and retested.",
      "Print the inspection report and get the fire marshal's punch list.",
    ],
    wages: { start: 38000, median: 59000, experienced: 88000 },
    socCode: "49-2098",
    howYouGetIn: [
      "Low-voltage license or state alarm license, depending on the work.",
      "NICET certification levels raise your pay at each step.",
      "Most techs start as a helper and are trained on the job, paid.",
    ],
    before: [
      "Ladders and ceiling grid work all day.",
      "Detail discipline — a mislabeled device is a real problem at inspection.",
      "Background check. You'll hold keys to buildings.",
    ],
    becomes: "NICET III inspector, project lead, then service manager or your own alarm company.",
    related: ["electrical", "telecommunications-cabling", "elevator-repair"],
  },
  {
    slug: "appliance-repair",
    name: "Appliance Repair",
    group: "Keeping buildings alive",
    image: automotive,
    whatItIs:
      "You fix the machines inside people's houses — refrigerators, washers, ovens, dishwashers. You diagnose from symptoms, order the part, and come back and make it work. It's your truck, your route, and a lot of kitchens.",
    day: [
      "Route's on the tablet by 7:30. Six or seven calls today.",
      "First one is a dryer with no heat. Meter on the element, it's open.",
      "Have the element on the truck. Twenty-five minutes, done.",
      "Second is an ice maker. Those take longer and I explain why.",
      "Lunch between calls, parked in a shaded lot.",
      "Afternoon has a warranty job and a diagnostic-only visit.",
      "Order two parts for next week and close out the tickets.",
    ],
    wages: { start: 33000, median: 46000, experienced: 72000 },
    socCode: "49-9031",
    howYouGetIn: [
      "Short certificate programs or straight on-the-job training with a shop.",
      "Manufacturer certifications from Whirlpool, GE, and others come later and pay more.",
      "EPA 608 if you'll work on sealed refrigeration systems.",
    ],
    before: [
      "A driver's license and a tolerance for other people's houses and pets.",
      "Lifting. Appliances are heavy and stairs are common.",
      "You'll deliver bad news sometimes. Say it straight and people respect it.",
    ],
    becomes: "Senior tech, service manager, or your own one-truck company that becomes three.",
    related: ["hvac-plumbing", "commercial-refrigeration", "electrical"],
  },
  {
    slug: "construction-carpentry",
    name: "Construction & Carpentry",
    group: "Building things that weren't there",
    image: mentorship,
    whatItIs:
      "You build the structure — walls, floors, roofs, forms, stairs, trim. You start with a flat slab and a stack of lumber and end with something people walk into. You work in a crew, outside, and you can see what you did at the end of the day.",
    day: [
      "On site at 7. Crew huddles for two minutes about what goes up today.",
      "Snap lines on the deck for the walls we're framing.",
      "Cut station gets set up — one guy cutting, three of us building.",
      "Walls go up before lunch and get braced and plumbed.",
      "Afternoon is joists and blocking. Repetitive, and it goes fast.",
      "Sweep the deck, stack the scrap, load the tools.",
      "Drive out past a house that was a slab on Monday.",
    ],
    wages: { start: 37000, median: 59000, experienced: 91000 },
    socCode: "47-2031",
    howYouGetIn: [
      "Three- to four-year apprenticeship, paid, or a crew that trains you from helper up.",
      "OSHA 10 in your first weeks. The Mustard Seed pays for it.",
      "Tools accumulate over the first year. We cover your first set.",
    ],
    before: [
      "Weather. You work in it.",
      "Real physical work every day, especially the first six months.",
      "Show up on time. In framing, that's most of the reputation.",
    ],
    becomes: "Lead carpenter, then superintendent, then general contractor with your own license.",
    related: ["roofing", "masonry-concrete", "window-door-installation"],
  },
  {
    slug: "welding-fabrication",
    name: "Welding & Fabrication",
    group: "Building things that weren't there",
    image: welding,
    whatItIs:
      "You join metal so it holds — structural steel, pipe, trailers, handrail, pressure vessels. Sometimes in a shop at a bench, sometimes hanging off structure in the field. The weld either passes inspection or it gets cut out, and that clarity is why people like it.",
    day: [
      "Shop opens at 6. Check the job packet and the WPS for the joint.",
      "Grind and fit the first assembly, tack it, check it square.",
      "Run the root pass, chip, wire wheel, look at it hard.",
      "Fill and cap. Two more of the same assembly before lunch.",
      "QC comes through with a gauge after lunch.",
      "Afternoon is a repair job that came in off a truck.",
      "Sweep the bay, hood on the hook, out at 4:30.",
    ],
    wages: { start: 36000, median: 52830, experienced: 79000 },
    socCode: "51-4121",
    howYouGetIn: [
      "Six to eighteen months of welding school, or a paid shop apprenticeship.",
      "AWS certifications by process and position — each one you add raises your rate.",
      "The Mustard Seed covers tuition, your hood, and your first cert test.",
    ],
    before: [
      "Sparks, heat, and noise. PPE is not optional and neither is wearing it right.",
      "Steady hands and patience — the first hundred hours are mostly practice.",
      "Pipe and structural work means heights and field conditions.",
    ],
    becomes:
      "Certified pipe welder, then inspector (CWI), then shop foreman or your own fab shop.",
    related: ["masonry-concrete", "heavy-equipment-operation", "construction-carpentry"],
  },
  {
    slug: "masonry-concrete",
    name: "Masonry & Concrete",
    group: "Building things that weren't there",
    image: mentorship,
    whatItIs:
      "You place and finish the material everything else sits on — footings, slabs, block, brick, stone. There's a clock on it once the truck pours, and the crew moves together. What you finish today will be there in eighty years.",
    day: [
      "First truck is scheduled for 6:30, so we're set up by 6.",
      "Screed and bull float behind the pour, moving with it.",
      "Wait on the slab. Watch the bleed water leave the surface.",
      "Edge and joint it, then power trowel as it comes ready.",
      "Lunch is whenever the concrete lets you have it.",
      "Afternoon is stripping forms from yesterday's wall.",
      "Wash the tools before anything sets. Every single day.",
    ],
    wages: { start: 36000, median: 54000, experienced: 82000 },
    socCode: "47-2051",
    howYouGetIn: [
      "Three-year apprenticeship, paid, or crew training from laborer up.",
      "ACI certification for finishers raises your pay.",
      "Most crews will start you the week you ask.",
    ],
    before: [
      "Heavy work. This one is honestly the most physical on the list.",
      "Early starts, weather days, and long pour days.",
      "Concrete waits for nobody. You learn to move.",
    ],
    becomes: "Finisher, then foreman, then concrete contractor bidding your own pours.",
    related: ["construction-carpentry", "heavy-equipment-operation", "welding-fabrication"],
  },
  {
    slug: "roofing",
    name: "Roofing",
    group: "Building things that weren't there",
    image: roofing,
    whatItIs:
      "You keep water out of buildings. Tear-off, dry-in, and install — shingle, metal, or commercial flat systems. You're outside and up high with a crew that moves in a rhythm, and you finish jobs in days, not months.",
    day: [
      "On the roof at first light to beat the heat.",
      "Tear-off first. Shovels, and everything goes in the dumpster below.",
      "Deck inspection — bad sheathing gets replaced before anything else.",
      "Underlayment down, then starter course, then we run shingles.",
      "Water, shade, ten minutes, back up.",
      "Flashing around the penetrations is the part that actually matters.",
      "Magnet sweep of the yard before we leave. Homeowner walks it with us.",
    ],
    wages: { start: 34000, median: 50030, experienced: 77000 },
    socCode: "47-2181",
    howYouGetIn: [
      "On-the-job training, paid, starting as a helper.",
      "Manufacturer certifications (GAF, Owens Corning) after a year or two.",
      "Fall protection training first. The Mustard Seed pays for your harness.",
    ],
    before: [
      "Heights, every day, with no exceptions.",
      "Georgia heat on a black roof is the hardest part of this job. Say it plainly.",
      "The crews that do it right go home whole. Learn from those crews.",
    ],
    becomes:
      "Crew lead, then production manager, then owner. Roofing companies are frequently started by people who were on the roof at nineteen.",
    related: ["construction-carpentry", "insulation", "window-door-installation"],
  },
  {
    slug: "window-door-installation",
    name: "Window & Door Installation",
    group: "Building things that weren't there",
    image: mentorship,
    whatItIs:
      "You take out old openings and set new ones so they seal, swing, and lock right. Precision work in somebody's house, usually two of you, usually finished the same day. Level, plumb, square — the whole trade is those three words.",
    day: [
      "Load the units, verify sizes against the order before we drive.",
      "Drop cloths inside, remove the first sash and frame.",
      "Check the opening. It's never as square as the order assumed.",
      "Set, shim, fasten, and check the reveal all the way around.",
      "Flash and seal the exterior. This is where callbacks come from.",
      "Interior trim and caulk, then clean the glass.",
      "Walk the homeowner around and open every one of them.",
    ],
    wages: { start: 34000, median: 49000, experienced: 74000 },
    socCode: "47-2031",
    howYouGetIn: [
      "On-the-job training with an install crew, paid from the start.",
      "Manufacturer installer certifications after your first year.",
      "AAMA InstallationMasters is the credential that separates you.",
    ],
    before: [
      "Careful hands — you're working inside a finished house.",
      "Lifting glass units with a partner, all day.",
      "Customers watch you work. Presentation is part of the job.",
    ],
    becomes: "Lead installer, then install manager, then your own two-truck company.",
    related: ["construction-carpentry", "flooring-tile", "painting-drywall"],
  },
  {
    slug: "flooring-tile",
    name: "Flooring & Tile",
    group: "Building things that weren't there",
    image: mentorship,
    whatItIs:
      "You lay the surface people actually stand on — tile, LVP, hardwood, stone. It starts with a floor that isn't flat and ends with lines that read straight from every direction. Mostly on your knees, mostly with one other installer.",
    day: [
      "Check the subfloor with a straightedge before anything comes off the truck.",
      "Patch the low spots and let it kick.",
      "Snap the layout. Where the first tile lands decides the whole room.",
      "Set tile through the morning, spacers and level clips as I go.",
      "Cut station outside on the wet saw for the perimeter.",
      "Clean the joints before the thinset sets up. Always.",
      "Grout tomorrow. Tools washed tonight.",
    ],
    wages: { start: 33000, median: 49000, experienced: 76000 },
    socCode: "47-2044",
    howYouGetIn: [
      "Apprenticeship or crew training, paid, starting as a helper.",
      "CTEF Certified Tile Installer is the credential that moves your rate.",
      "Tools build up over a year; we cover the first set.",
    ],
    before: [
      "Knees. Pads are not optional and neither is stretching.",
      "Precision and patience — a layout mistake shows forever.",
      "You work in finished homes with people living in them.",
    ],
    becomes: "Lead installer, then tile contractor with crews running your layouts.",
    related: ["painting-drywall", "window-door-installation", "construction-carpentry"],
  },
  {
    slug: "painting-drywall",
    name: "Painting & Drywall",
    group: "Building things that weren't there",
    image: mentorship,
    whatItIs:
      "You close the walls and finish them. Hang board, tape, mud, sand, prime, paint. It is the trade that decides whether a building looks finished or looks rough, and it's the fastest one to get into.",
    day: [
      "Hang board in the morning with a lift and a partner.",
      "Screws set right — not too deep, not proud.",
      "Tape the joints after lunch, first coat of mud.",
      "Next day is the second coat, wider knife, feathered out.",
      "Sand with a light held sideways so you can see every flaw.",
      "Prime, then cut in and roll.",
      "Walk it with the super and hit the punch list.",
    ],
    wages: { start: 32000, median: 48000, experienced: 71000 },
    socCode: "47-2141",
    howYouGetIn: [
      "On-the-job training, paid. Many crews hire the week you ask.",
      "Two- to three-year apprenticeships exist and pay more at the end.",
      "Spray and industrial coating certifications raise your ceiling a lot.",
    ],
    before: [
      "Dust and repetition. Sanding is not glamorous work.",
      "Stilts and ladders, and lifting sheets of board.",
      "Respirator discipline. Protect your lungs at seventeen, not at forty.",
    ],
    becomes:
      "Finisher, then crew lead, then painting contractor — one of the easiest trades to own in.",
    related: ["flooring-tile", "insulation", "construction-carpentry"],
  },
  {
    slug: "insulation",
    name: "Insulation",
    group: "Building things that weren't there",
    image: mentorship,
    whatItIs:
      "You make buildings hold their temperature — batts, blown-in, spray foam, and air sealing. It's fast-paced production work with a small crew, and the energy side of it is growing every year.",
    day: [
      "Load the rig and hit the first house by 7:30.",
      "Air seal the penetrations first. That's the part that actually works.",
      "Batt the walls, cut clean, no compression.",
      "Second house is blown-in attic. Hose up the ladder, partner at the machine.",
      "Depth markers checked so the inspection passes the first time.",
      "Third stop is a foam job, full suit and supplied air.",
      "Clean the gun, log the sets, home before dark.",
    ],
    wages: { start: 33000, median: 49000, experienced: 73000 },
    socCode: "47-2131",
    howYouGetIn: [
      "On-the-job training, paid, from day one.",
      "Spray foam certification and BPI credentials add real money.",
      "Energy auditor certification opens a second career track.",
    ],
    before: [
      "Attics and crawlspaces. That's the office.",
      "Full PPE for foam work. Non-negotiable.",
      "Hot, itchy, and fast. Also short days when the crew is good.",
    ],
    becomes: "Crew lead, then energy auditor or insulation contractor.",
    related: ["roofing", "painting-drywall", "hvac-plumbing"],
  },
  {
    slug: "sign-awning-installation",
    name: "Sign & Awning Installation",
    group: "Building things that weren't there",
    image: welding,
    whatItIs:
      "You build, hang, and light the signs on the front of every business you drive past. It mixes fabrication, electrical, and crane or bucket work. Small crews, different site every day, and the result is visible from the road.",
    day: [
      "Load the channel letters and the pattern, check the permit is in the truck.",
      "Set up the bucket and cone off the storefront.",
      "Pattern goes on the wall, holes drilled, raceway anchored.",
      "Letters mounted one by one, wiring pulled into the raceway.",
      "Power tied in and the whole set tested at dusk if we can.",
      "Take down the bucket, sweep the walk.",
      "One service call on the way back — a burned-out transformer.",
    ],
    wages: { start: 34000, median: 46000, experienced: 70000 },
    socCode: "49-9096",
    howYouGetIn: [
      "On-the-job training, paid, with a sign shop.",
      "Aerial lift and crane certifications come early and matter.",
      "Low-voltage or electrical basics help you get to the top of the pay scale.",
    ],
    before: [
      "Heights in a bucket, over parking lots, with traffic.",
      "A driver's license; CDL later is a raise.",
      "Odd hours — some installs happen when the store is closed.",
    ],
    becomes: "Lead installer, then shop foreman, then your own sign service company.",
    related: ["welding-fabrication", "electrical", "fire-security-systems"],
  },
  {
    slug: "automotive-diesel",
    name: "Automotive & Diesel",
    group: "Machines and engines",
    image: automotive,
    whatItIs:
      "You diagnose and repair what moves — cars, trucks, fleets, equipment. Half the job is the scan tool and your head, half is your hands. You work in a bay with other techs and a service writer bringing you the next one.",
    day: [
      "Bay's open at 7. First ticket is an intermittent no-start.",
      "Scan it, pull freeze frame data, then go looking with the meter.",
      "Corroded ground strap. Cheap fix, an hour to find.",
      "Second ticket is a full brake job. Straightforward and it pays flat rate.",
      "Lunch in the break room with the other techs.",
      "Afternoon is a diesel with a regen problem. That one is all diagnostics.",
      "Write up findings, road test, park it out front.",
    ],
    wages: { start: 34000, median: 49670, experienced: 79000 },
    socCode: "49-3023",
    howYouGetIn: [
      "One to two years of trade school, or a dealership apprenticeship that pays you to learn.",
      "ASE certifications — each one raises your rate, and diesel pays more than light duty.",
      "Manufacturer training (Ford, Cat, Freightliner) once you're hired.",
    ],
    before: [
      "You buy your own hand tools over time. We cover your first box.",
      "Flat-rate pay means fast, correct work earns more. It takes a year to get quick.",
      "Grease, cold mornings, and heavy parts.",
    ],
    becomes:
      "Master tech, then shop foreman or fleet manager, then owner of an independent shop.",
    related: ["heavy-equipment-operation", "aviation-maintenance", "appliance-repair"],
  },
  {
    slug: "heavy-equipment-operation",
    name: "Heavy Equipment Operation",
    group: "Machines and engines",
    image: roofing,
    whatItIs:
      "You run the machines that move earth — excavators, dozers, loaders, graders. You cut grade to a survey stake and a laser, and you get good enough that the machine feels like your hands. Site work, roads, utilities, pads.",
    day: [
      "Walk the machine before I start it. Fluids, tracks, greasing points.",
      "Grade stakes are set, so I know where dirt goes before I move any.",
      "Cut and load trucks through the morning, one every few minutes.",
      "Radio with the foreman about where the next lift goes.",
      "Lunch in the cab or on the tailgate.",
      "Afternoon is fine grade with the laser on the pad.",
      "Fuel up, grease it, park it where it needs to be at 6 a.m.",
    ],
    wages: { start: 38000, median: 59000, experienced: 90000 },
    socCode: "47-2073",
    howYouGetIn: [
      "Three- to four-year apprenticeship (Operating Engineers), paid, or a training school of a few weeks.",
      "CDL is a strong add and often required to move iron.",
      "Most operators start as a laborer on the crew and move into the seat.",
    ],
    before: [
      "Long days, early starts, mud, and dust.",
      "You'll spend a season on the ground before anyone hands you a machine.",
      "Situational awareness. People work around your bucket.",
    ],
    becomes: "Operator, then grade foreman, then site superintendent or your own dirt company.",
    related: ["masonry-concrete", "automotive-diesel", "construction-carpentry"],
  },
  {
    slug: "aviation-maintenance",
    name: "Aviation & Aircraft Maintenance",
    group: "Machines and engines",
    image: automotive,
    whatItIs:
      "You inspect, repair, and sign off on aircraft. Everything is by the manual, everything is documented, and your signature carries weight. Hangar work with a team, on a schedule that ends with an airplane flying.",
    day: [
      "Shift brief at 6. Tail numbers and what's open on each.",
      "Start on a scheduled inspection with the task cards in hand.",
      "Panels off, inspect, torque check, document each step.",
      "Found a chafed line. Write it up, get the part, replace to spec.",
      "Lunch, then engine run-up with the lead on the ramp.",
      "Everything logged in the maintenance record. No shortcuts, ever.",
      "Aircraft released. It's in the air before I leave.",
    ],
    wages: { start: 45000, median: 79140, experienced: 112000 },
    socCode: "49-3011",
    howYouGetIn: [
      "An FAA-approved A&P school, typically 18 to 24 months.",
      "Or 30 months of documented experience, then the FAA exams.",
      "The Mustard Seed covers tuition and the written, oral, and practical exam fees.",
    ],
    before: [
      "Paperwork discipline. In aviation, the documentation is the job.",
      "Shift work — a lot of maintenance happens overnight.",
      "Drug testing and a background check are standard.",
    ],
    becomes: "A&P, then Inspection Authorization, then lead, then director of maintenance.",
    related: ["automotive-diesel", "welding-fabrication", "electrical"],
  },
  {
    slug: "solar-renewable-energy",
    name: "Solar & Renewable Energy",
    group: "Power and connection",
    image: roofing,
    whatItIs:
      "You mount and wire systems that make power on-site — rooftop residential, commercial arrays, and storage. Half racking and mechanical, half electrical. Crews are small, jobs finish quickly, and the industry is still growing.",
    day: [
      "Layout on the roof first thing, marking rafters.",
      "Flashings and mounts go in, sealed properly, one at a time.",
      "Rails, then modules. Two of us passing panels up.",
      "Lunch under the truck's shade.",
      "Afternoon is DC wiring, then the inverter and disconnects.",
      "Label everything the inspector will want to see.",
      "Commission the system and show the homeowner the app.",
    ],
    wages: { start: 36000, median: 51860, experienced: 76000 },
    socCode: "47-2231",
    howYouGetIn: [
      "On-the-job training, paid, starting as an installer.",
      "NABCEP certification is the credential that raises your rate.",
      "An electrical apprenticeship alongside it doubles your options.",
    ],
    before: [
      "Roofs and heat, same as roofing.",
      "Lifting panels all day with a partner.",
      "Electrical safety on DC systems — it's live in the daylight.",
    ],
    becomes: "Lead installer, then NABCEP-certified designer, then project manager or owner.",
    related: ["electrical", "roofing", "telecommunications-cabling"],
  },
  {
    slug: "telecommunications-cabling",
    name: "Telecommunications & Cabling",
    group: "Power and connection",
    image: electrical,
    whatItIs:
      "You install the physical network — copper, fiber, racks, and the terminations that make it all pass a test. Data centers, hospitals, schools, and new buildings. Clean work, indoors more often than not, and the testing is objective.",
    day: [
      "Cable pull day. Set the reels and the pull string in the morning.",
      "Above the ceiling with a fish tape, station to station.",
      "Dress the cable into the rack — the neatness is graded, honestly.",
      "Punch down and terminate after lunch.",
      "Fiber splicing on the backbone with the fusion splicer.",
      "Certify every run with the tester. It passes or I redo it.",
      "Print the test report and hand it to the customer.",
    ],
    wages: { start: 36000, median: 61000, experienced: 92000 },
    socCode: "49-9052",
    howYouGetIn: [
      "On-the-job training, paid, or a short certificate program.",
      "BICSI and fiber-optic certifications drive your pay.",
      "Low-voltage license depending on the state and scope.",
    ],
    before: [
      "Ladders, ceilings, and confined spaces.",
      "Meticulous work — sloppy cable is visible forever.",
      "Some outside plant work is in weather and in trenches.",
    ],
    becomes: "Fiber tech, then RCDD designer or project manager for a network contractor.",
    related: ["electrical", "fire-security-systems", "solar-renewable-energy"],
  },
  {
    slug: "landscaping-irrigation",
    name: "Landscaping & Irrigation",
    group: "Property and grounds",
    image: mentorship,
    whatItIs:
      "You build and maintain the outside of properties — plantings, hardscape, drainage, and irrigation systems that have to work without anyone thinking about them. Outdoors every day, on a crew, and the results are immediate.",
    day: [
      "Shop at 6:30. Load the trailer and check the route.",
      "First property is maintenance — mow, edge, blow, out in an hour.",
      "Second is an install: bed prep, plants set, mulch.",
      "Irrigation zone isn't firing. Dig up the valve and find the bad solenoid.",
      "Swap it, backfill, run all zones from the controller.",
      "Lunch on the tailgate.",
      "Back at the shop by 4, blow out the trailer, sharpen blades.",
    ],
    wages: { start: 30000, median: 38000, experienced: 60000 },
    socCode: "37-3011",
    howYouGetIn: [
      "Hired and trained on the job, usually the same week you ask.",
      "Irrigation and pesticide-applicator licenses move you up fast.",
      "Landscape design or horticulture certificates open the higher-paying side.",
    ],
    before: [
      "Heat, early starts, and physical work all day.",
      "The maintenance side pays less than the install and irrigation side. Aim there.",
      "A driver's license and eventually a trailer you can back up.",
    ],
    becomes:
      "Crew lead, then irrigation tech or account manager, then your own company — this trade has the lowest cost of entry to ownership on the list.",
    related: ["pool-spa-service", "masonry-concrete", "pest-control"],
  },
  {
    slug: "pool-spa-service",
    name: "Pool & Spa Service",
    group: "Property and grounds",
    image: mentorship,
    whatItIs:
      "You keep water clean and equipment running — pumps, heaters, filters, automation, and chemistry. Route work in your own truck, mostly residential, and the technical side (equipment and automation) is where the money is.",
    day: [
      "Route of fifteen stops loaded on the phone by 7.",
      "Test water, brush, skim, adjust chemistry, log it.",
      "Fourth stop has a pump that's whining. Bearings.",
      "Order the motor, schedule the repair for Thursday.",
      "Lunch between stops.",
      "Afternoon is a heater diagnostic — gas, ignition, flame sensor.",
      "Last stop is an automation setup with the homeowner watching.",
    ],
    wages: { start: 31000, median: 45000, experienced: 68000 },
    socCode: "49-9071",
    howYouGetIn: [
      "On-the-job training, paid, from your first week.",
      "CPO (Certified Pool Operator) certification early — we pay for it.",
      "Equipment and electrical training is what separates a route tech from a service tech.",
    ],
    before: [
      "Sun, chemicals, and heavy jugs.",
      "Seasonal in some markets. Georgia runs most of the year.",
      "Customers' backyards, dogs, and gates. People skills matter.",
    ],
    becomes: "Service tech, then repair specialist, then route owner with techs under you.",
    related: ["landscaping-irrigation", "hvac-plumbing", "electrical"],
  },
  {
    slug: "pest-control",
    name: "Pest Control",
    group: "Property and grounds",
    image: mentorship,
    whatItIs:
      "You inspect structures and treat them — termites, rodents, ants, mosquitoes, and wildlife. It's part biology, part construction knowledge, part customer trust. Your own route, your own truck, and steady recurring work.",
    day: [
      "Truck's stocked and I'm on the road by 7:30.",
      "First is a termite inspection. Crawlspace, flashlight, probe.",
      "Found damaged sill. Photos, diagram, and an honest conversation.",
      "Three recurring services after that. Perimeter and interior.",
      "Lunch, then a rodent exclusion job — sealing entry points.",
      "That one is really carpentry with a purpose.",
      "Log every application and chemical used. State requires it.",
    ],
    wages: { start: 32000, median: 45000, experienced: 66000 },
    socCode: "37-2021",
    howYouGetIn: [
      "Hired and trained, paid, then licensed by the state.",
      "Georgia requires a certified applicator license by category.",
      "Termite and wildlife categories pay the most.",
    ],
    before: [
      "Crawlspaces, attics, insects, and the occasional snake.",
      "Chemical safety and record-keeping discipline.",
      "A clean driving record and a professional way of talking to homeowners.",
    ],
    becomes: "Certified operator, then branch manager, then your own pest company.",
    related: ["landscaping-irrigation", "insulation", "appliance-repair"],
  },
  {
    slug: "locksmithing",
    name: "Locksmithing",
    group: "Property and grounds",
    image: automotive,
    whatItIs:
      "You control who gets into what — locks, safes, automotive keys, and electronic access systems. It's precise, quiet, mostly independent work, and the electronic access side is growing quickly in commercial buildings.",
    day: [
      "Shop opens at 8. Two rekeys waiting on the bench.",
      "Pin the cylinders, cut the keys, test them twice.",
      "Mobile call: car lockout across town, in and out in fifteen minutes.",
      "Back for a commercial job — installing an exit device on a fire door.",
      "That one has code requirements you don't get wrong.",
      "Afternoon is programming key fobs and an access control panel.",
      "Close out tickets, order cores, lock up.",
    ],
    wages: { start: 32000, median: 48000, experienced: 71000 },
    socCode: "49-9094",
    howYouGetIn: [
      "Apprenticeship with a shop, or a certificate program of a few months.",
      "ALOA certifications step your pay up as you add them.",
      "Georgia background check and licensing to work commercially.",
    ],
    before: [
      "Clean background check, always. This trade requires trust.",
      "Fine motor patience — pinning a cylinder is small work.",
      "Some on-call and lockout work at night.",
    ],
    becomes:
      "Certified locksmith, then access-control installer for commercial buildings, then shop owner.",
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
