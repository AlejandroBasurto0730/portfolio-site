// ─────────────────────────────────────────────────────────────
// Add or edit projects here. Each entry becomes one card in the
// gallery. To add a new project later, copy an object below,
// give it a new id, and drop your media file into /public/projects/
// ─────────────────────────────────────────────────────────────

export const projects = [
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
    id: "prj_04",
    code: "PRJ_03",
    timecode: "00:03:15:07",
    title: "Now Media",
    type: "Motion Graphics",
    year: "2026",
    category: "motion",
    blurb: "Logo reveal animation — kinetic type and light-trail effects built in After Effects.",
    tags: ["Motion", "Logo Reveal", "After Effects"],
    media: "/projects/now-media-reveal.mp4",
    mediaType: "video",
    poster: "/projects/now-media-poster.jpg",
    link: "",
  },
  {
    id: "prj_05",
    code: "PRJ_04",
    timecode: "00:03:47:02",
    title: "Alex Buda",
    type: "Motion Graphics",
    year: "2026",
    category: "motion",
    blurb: "Retro-futurist title card with a synthwave skyline and layered type treatment.",
    tags: ["Motion", "Title Card", "After Effects"],
    media: "/projects/alex-buda-title.mp4",
    mediaType: "video",
    poster: "/projects/alex-buda-poster.jpg",
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
        "House of Knifes had already filmed a promo for their warehouse sale, but it was a plain phone selfie video — a guy talking in the warehouse with a few logos and text slapped on top, no pacing, nothing that would make someone stop scrolling.",
      research:
        "I watched their existing video a few times to figure out what they actually needed to say — the sale, the discount, the categories on offer — then stripped that down to the handful of lines that mattered instead of the whole rambling clip.",
      solution:
        "Rebuilt it from scratch as a vertical, typography-led edit: sharp cuts, bold text reveals timed to the message, and a consistent visual rhythm instead of one static shot. Same information, but built to actually hold attention on Instagram and TikTok instead of just existing there.",
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
