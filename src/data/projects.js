// ─────────────────────────────────────────────────────────────
// Add or edit projects here. Each entry becomes one card in the
// gallery. To add a new project later, copy an object below,
// give it a new id, and drop your media file into /public/projects/
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    id: "prj_09",
    code: "PRJ_00",
    timecode: "00:00:06:02",
    title: "Candies",
    type: "Brand Identity",
    year: "2026",
    category: "design",
    blurb: "Identity for a home bakery in Cuajimalpa, Mexico City — same pink, different attitude.",
    tags: ["Branding", "Packaging", "Typography"],
    media: "/projects/candies-poster.jpg",
    mediaType: "image",
    caseStudy: {
      problem:
        "Candies has been baking out of the house since 2014, and already had a white-and-pink logo — but it read as childish and competed with the product itself. It needed to feel elegant without losing the pink the customers already recognize.",
      research:
        "Kept the pink and stripped weight from everything else: a light, widely-spaced Garamond, a single weight, and a fixed ratio across every piece — 70% white, 20% blush, 10% pink.",
      solution:
        "A system that holds up the same on a 20cm box, a 45mm stamp, and a storefront awning, and that lets the cake stay the most eye-catching part of the piece. In use since 2026 at the Francisco Villa 21 location.",
      sections: [
        {
          title: "Brand Identity",
          images: [
            { src: "/projects/candies-case-study/identity-01-logotype.jpg", caption: "The primary logotype — a light, high-contrast Garamond with wide spacing and no ornament." },
            { src: "/projects/candies-case-study/identity-02-versions.jpg", caption: "Primary, vertical, monogram, and negative versions for different placements." },
            { src: "/projects/candies-case-study/identity-03-usage-rules.jpg", caption: "Clear space and minimum size — and what never to do to the mark." },
            { src: "/projects/candies-case-study/identity-04-color.jpg", caption: "Pink, blush, bone, and cacao — kept to a fixed 70/20/10 ratio across every piece." },
            { src: "/projects/candies-case-study/identity-05-typography.jpg", caption: "Cormorant Garamond for warmth, Jost for anything functional — both kept light." },
            { src: "/projects/candies-case-study/identity-06-voice.jpg", caption: "What the brand says and doesn't say, plus the tagline: \"Hecho en casa, desde 2014.\"" },
            { src: "/projects/candies-case-study/identity-07-applications-overview.jpg", caption: "How the system holds across box sizes, the stamp, signage, menu, and business card." },
          ],
        },
        {
          title: "Storefront",
          images: [
            { src: "/projects/candies-case-study/storefront-toldo-photo.jpg", caption: "The awning — a plain pink canopy, logo and lema in white, nothing else competing for attention." },
          ],
        },
        {
          title: "Individual Box — 12cm",
          images: [
            { src: "/projects/candies-case-study/individual-01-box-render.jpg", caption: "Closed, it reads almost entirely white — the brand stays quiet on purpose." },
            { src: "/projects/candies-case-study/individual-02-diecut.jpg", caption: "Die-cut plan, ready to hand to a printer." },
            { src: "/projects/candies-case-study/individual-03-specs.jpg", caption: "Print specifications — stock, ink, minimum sizes, and what never to do." },
          ],
        },
        {
          title: "Large Box — 20cm",
          images: [
            { src: "/projects/candies-case-study/large-01-box-render.jpg", caption: "The only piece that carries a ribbon — reserved for full cakes." },
            { src: "/projects/candies-case-study/large-02-diecut.jpg", caption: "Die-cut plan for the large box." },
            { src: "/projects/candies-case-study/large-03-specs.jpg", caption: "Print specifications, including reinforcement for heavier cakes." },
          ],
        },
        {
          title: "Papelería",
          images: [
            { src: "/projects/candies-case-study/papeleria-carta-photo.jpg", caption: "The counter menu, shot on-site — full price list organized by category." },
            { src: "/projects/candies-case-study/papeleria-flyer-photo.jpg", caption: "A neighborhood flyer for local delivery, built on the same grid as the menu." },
            { src: "/projects/candies-case-study/papeleria-tarjeta-photo.jpg", caption: "The business card, front and back — 90×50mm." },
          ],
        },
        {
          title: "Deliverables",
          images: [
            { src: "/projects/candies-case-study/closing-deliverables.jpg", caption: "What was handed off: brand manual, packaging system, papelería, and logo files." },
          ],
        },
      ],
    },
    link: "",
  },
  {
    id: "prj_08",
    code: "PRJ_00",
    timecode: "00:00:12:04",
    title: "Basher — Basurto Herrera Consultores",
    type: "Web Design",
    year: "2026",
    category: "design",
    blurb: "Bilingual website for a Mexican accounting and audit firm — built from scratch, no template.",
    tags: ["Web Design", "Bilingual", "Branding"],
    media: "/projects/basher-poster.jpg",
    mediaType: "image",
    caseStudy: {
      liveUrl: "https://basher.mx/",
      problem:
        "Basurto Herrera Consultores, a Mexico City accounting and audit firm with over 30 years of experience, never had a website — new clients came entirely through referrals. In a field where people quietly research a firm online before ever picking up the phone, that's real credibility going unseen.",
      research:
        "I talked directly with the firm to figure out what actually sets it apart from bigger competitors: it isn't more services, it's that the lead partner is personally involved in every engagement instead of handing clients off to junior staff. I built the whole site around that one differentiator rather than the generic \"we do audits and taxes\" copy most accounting sites default to.",
      solution:
        "A bilingual (English/Spanish) site — home, about, services, careers, contact — built from scratch in HTML, CSS, and JavaScript, no template. Structured around 30+ years of experience, direct partner involvement, and specific industry expertise, designed to read as established and trustworthy rather than like a stock accounting-firm site.",
      sections: [
        {
          title: "Pages",
          images: [
            { src: "/projects/basher-case-study/01-home.jpg", caption: "Home — leads with the firm's positioning and a direct look at the lead partner's involvement." },
            { src: "/projects/basher-case-study/02-about.jpg", caption: "About — the firm's mission, vision, values, and sector experience." },
            { src: "/projects/basher-case-study/03-services.jpg", caption: "Services — audit, tax compliance, and accounting advisory, laid out as an expandable list." },
            { src: "/projects/basher-case-study/04-careers.jpg", caption: "Careers page for the firm's hiring." },
            { src: "/projects/basher-case-study/05-contact.jpg", caption: "Contact — direct line to the partner, not a generic inbox." },
          ],
        },
      ],
    },
    link: "",
  },
  {
    id: "prj_02",
    code: "PRJ_01",
    timecode: "00:01:08:03",
    title: "OEIL",
    type: "Brand Design",
    year: "2025",
    category: "design",
    blurb:
      "Visual identity and campaign design exploring optical, minimal typography and layout systems.",
    tags: ["Branding", "Editorial"],
    media: "/projects/oeil.mp4",
    mediaType: "video",
    poster: "/projects/oeil-poster.jpg",
    caseStudy: {
      problem:
        "The eyewear space is stacked with brands that have way more marketing muscle than a project like this — Warby Parker, LensCrafters, Specsavers. I wanted OEIL to hold its own next to them without pretending to be a big-budget agency job, and without falling into the generic \"clean sans-serif plus a circle\" look so much of the industry leans on.",
      research:
        "I started by actually pricing out what OEIL's competitors charge — Specsavers, Warby Parker, LensCrafters, the independent boutiques — and mapped where OEIL could sit that felt honest: not the cheapest, not the most expensive, but the one that looks like it belongs in a nicer store than its price tag suggests. Before touching a computer, I sketched a full page of logo ideas by hand first — the bad ideas come out faster on paper, which leaves more room to find the good one digitally.",
      solution:
        "The wordmark I landed on is basically two letters shaped like glasses — \"oe\" — which let me split the brand into three lines (Sport, Classic, Essentials) without needing three separate logos. Same mark, same colors, just recontextualized depending on which shelf it's sitting on.",
      sections: [
        {
          title: "Brand Identity",
          images: [
            { src: "/projects/oeil-case-study/01-brand-cover.png", caption: "The primary logo, with the little icon pattern I built to give the brand some texture beyond just the wordmark." },
            { src: "/projects/oeil-case-study/02-brand-colors.png", caption: "Golden Sand, Ivory Sand, Soft Ivory — warm, not clinical, which is rare for an optical brand." },
            { src: "/projects/oeil-case-study/04-logo-variations.png", caption: "Primary, secondary, logomark-only, and wordmark-only — whatever the placement calls for." },
            { src: "/projects/oeil-case-study/07-brand-architecture.png", caption: "How the same mark stretches across Sport, Classic, and Essentials without losing itself." },
            { src: "/projects/oeil-case-study/08-favicons.png", caption: "Testing the mark all the way down to a 16px favicon — if it survives that, it survives anything." },
          ],
        },
        {
          title: "Design Process",
          images: [
            { src: "/projects/oeil-case-study/03-design-rationale.png", caption: "The hand-sketched page that came before any of this was digital." },
            { src: "/projects/oeil-case-study/05-market-graph.png", caption: "The pricing research I did to figure out where OEIL should actually sit against the competition." },
          ],
        },
        {
          title: "Applications",
          images: [
            { src: "/projects/oeil-case-study/06-corporate-stationary.png", caption: "Business card and letterhead — the boring-but-necessary stuff every brand needs." },
            { src: "/projects/oeil-case-study/09-brand-kit.png", caption: "Packaging, poster, and apparel — seeing the brand outside of a screen." },
          ],
        },
      ],
    },
    link: "",
  },
  {
    id: "prj_03",
    code: "PRJ_02",
    timecode: "00:02:41:19",
    title: "Apple — Sustainability Report",
    type: "Editorial Redesign",
    year: "2025",
    category: "design",
    blurb:
      "Self-directed redesign of Apple's Environmental Progress Report — grid, type, and data visualization.",
    tags: ["Editorial", "Layout", "Data Viz"],
    media: "/projects/apple-sustainability-cover.mp4",
    mediaType: "video",
    poster: "/projects/apple-sustainability-poster.jpg",
    caseStudy: {
      problem:
        "Apple actually publishes a huge amount of real sustainability data every year, but it lives inside a long report built for investors, not somewhere a normal person would ever scroll through. I wanted to see what that same information would look like if it were built for Instagram instead of a boardroom.",
      research:
        "I didn't want to make up numbers just to make the campaign look good, so I pulled real figures straight from Apple's own environmental reporting — Daisy the robot disassembling 200 iPhones an hour, 1.2 million a year, 36 different iPhone models, 100% renewable electricity across their facilities, fully recycled aluminum in the MacBook Air. Everything you see here is a real Apple stat, just designed differently than Apple designed it.",
      solution:
        "Instead of one static report, I split the same content into a stack of formats that actually match how people consume things now: a short cover video, a set of square feed posts, a full Instagram Highlights sequence people could actually tap through, and even physical pieces like a bus stop ad and a t-shirt — treating the report less like a document and more like a small campaign.",
      sections: [
        {
          title: "Social Media Posts",
          images: [
            { src: "/projects/apple-sustainability/social-01-meet-daisy.jpg", caption: "Introducing Daisy — Apple's actual recycling robot, made for a feed post instead of a press release." },
            { src: "/projects/apple-sustainability/social-02-recycled-refined.jpg", caption: "The MacBook Air and Apple Watch are made with 100% recycled aluminum — a real Apple stat, framed as a headline." },
            { src: "/projects/apple-sustainability/social-03-powered-by-sun.jpg", caption: "Apple Park's rooftop solar array, doing double duty as the visual for the renewable energy message." },
          ],
        },
        {
          title: "Collaterals",
          images: [
            { src: "/projects/apple-sustainability/collateral-tshirt.jpg", caption: "What the campaign looks like off-screen — a t-shirt mockup." },
            { src: "/projects/apple-sustainability/collateral-bus-stop-ad.jpg", caption: "A bus stop ad, because sustainability messaging shouldn't only live on a phone." },
          ],
        },
        {
          title: "Instagram Highlights — Sustainability Report",
          images: [
            { src: "/projects/apple-sustainability/ig-01-designed-for-tomorrow.jpg", caption: "The cover slide for the Highlights sequence." },
            { src: "/projects/apple-sustainability/ig-02-tim-cook-quote.jpg", caption: "Closing on an actual Tim Cook quote, to end on Apple's own voice." },
            { src: "/projects/apple-sustainability/ig-03-our-mission.jpg", caption: "The mission, stripped down to three lines." },
            { src: "/projects/apple-sustainability/ig-04-daisy-recovers.jpg", caption: "What Daisy is actually doing — pulling reusable materials out of old iPhones." },
            { src: "/projects/apple-sustainability/ig-05-stats.jpg", caption: "200 an hour, 1.2 million a year, 36 models — the numbers that made this project worth doing." },
            { src: "/projects/apple-sustainability/ig-06-recycled-refined.jpg", caption: "The recycled aluminum stat again, reformatted for a story instead of a feed post." },
            { src: "/projects/apple-sustainability/ig-07-renewable-electricity.jpg", caption: "100% renewable electricity across Apple's facilities." },
            { src: "/projects/apple-sustainability/ig-08-meet-daisy-hello.jpg", caption: "A second Daisy intro, built for the story format specifically." },
            { src: "/projects/apple-sustainability/ig-09-carbon-neutral.jpg", caption: "The last slide — Apple's actual carbon-neutral-by-2030 goal." },
          ],
        },
      ],
    },
    link: "",
  },
  {
    id: "prj_06",
    code: "PRJ_05",
    timecode: "00:04:19:11",
    title: "House of Knifes — Warehouse Sale",
    type: "Motion Graphics",
    year: "2026",
    category: "motion",
    blurb: "Vertical promo edit for a warehouse sale — built for social, sharp typographic reveals.",
    tags: ["Motion", "Social", "Vertical"],
    media: "/projects/house-of-knifes-warehouse-sale.mp4",
    mediaType: "video",
    poster: "/projects/house-of-knifes-poster.jpg",
    orientation: "vertical",
    caseStudy: {
      problem:
        "I came across House of Knifes' warehouse sale video while scrolling Instagram, and it stopped me for the wrong reason — the editing was flat and forgettable, just a few logos and captions slapped over a talking-head clip. Turns out the guy on camera is the actual owner, editing his own promos, which explains why the content itself was fine but the presentation wasn't doing it any favors.",
      research:
        "Instead of reshooting anything, I looked at what he'd already filmed and thought about how kinetic typography — text that moves in sync with what's being said — could make the same message land harder without needing new footage. It's a technique built for exactly this kind of talking-head content, since it gives the eye something to follow beyond just a face on screen.",
      solution:
        "I rebuilt the edit around kinetic type: pulled out the key lines — the sale, the discount, the categories — and animated them in rhythm with his voice instead of leaving them as static captions. Same video, same message, but built to actually stop someone mid-scroll instead of blending into the feed.",
      sections: [
        {
          title: "Before & After",
          layout: "compare",
          images: [
            {
              src: "/projects/house-of-knifes-case-study/before-original.mp4",
              type: "video",
              poster: "/projects/house-of-knifes-case-study/before-poster.jpg",
              orientation: "vertical",
              caption: "Before — the original raw selfie video, shot and posted as-is.",
            },
            {
              src: "/projects/house-of-knifes-warehouse-sale.mp4",
              type: "video",
              poster: "/projects/house-of-knifes-poster.jpg",
              orientation: "vertical",
              caption: "After — my edit, rebuilt around typography and pacing.",
            },
          ],
        },
      ],
    },
    link: "",
  },
  {
    id: "prj_07",
    code: "PRJ_06",
    timecode: "00:04:51:18",
    title: "Compass Card — TransLink",
    type: "Motion Graphics",
    year: "2026",
    category: "motion",
    blurb: "Flat 2D explainer piece for Vancouver's TransLink Compass Card — personal practice project.",
    tags: ["Motion", "Explainer", "Flat 2D"],
    media: "/projects/compass-card.mp4",
    mediaType: "video",
    poster: "/projects/compass-card-poster.jpg",
    link: "",
  },
  // {
  //   id: "prj_08",
  //   code: "PRJ_07",
  //   timecode: "00:04:00:00",
  //   title: "New Project Name",
  //   type: "Motion Graphics",
  //   year: "2026",
  //   category: "motion", // or "design"
  //   blurb: "One or two sentences on the project.",
  //   tags: ["Motion", "Brand"],
  //   media: "/projects/your-file.mp4",
  //   mediaType: "video", // or "image"
  //   link: "",
  // },
];
