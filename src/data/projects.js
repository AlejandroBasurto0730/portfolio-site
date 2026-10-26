// ─────────────────────────────────────────────────────────────
// Add or edit projects here. Each entry becomes one card in the
// gallery. To add a new project later, copy an object below,
// give it a new id, and drop your media file into /public/projects/
// ─────────────────────────────────────────────────────────────

// The project shown in the Hero as "Featured project". It's excluded
// from the Selected Work grid below so it doesn't appear twice —
// change this id to feature a different project.
export const FEATURED_PROJECT_ID = "prj_08";

export const projects = [
  {
    id: "prj_08",
    code: "PRJ_00",
    timecode: "00:00:12:04",
    title: "Basher — Basurto Herrera Consultores",
    type: "Brand Identity & Web Design",
    year: "2026",
    category: "design",
    blurb: "Full brand identity and bilingual website for a Mexican accounting and audit firm — built from scratch, no template.",
    tags: ["Brand Identity", "Web Design", "Bilingual"],
    media: "/projects/basher.mp4",
    mediaType: "video",
    poster: "/projects/basher-poster.jpg",
    caseStudy: {
      liveUrl: "https://basher.mx/",
      problem:
        "Basurto Herrera Consultores, a Mexico City accounting and audit firm with over 30 years of experience, never had a visual identity or a website — new clients came entirely through referrals. In a field where people quietly research a firm online before ever picking up the phone, that's real credibility going unseen.",
      research:
        "I talked directly with the firm to figure out what actually sets it apart from bigger competitors: it isn't more services, it's that the lead partner is personally involved in every engagement instead of handing clients off to junior staff. The symbol I landed on reflects that directly — two faceted planes (structure and rigor) protecting a single point (the exact figure, the precise decision).",
      solution:
        "A full identity system — logo, color, typography, stationery, signage, and presentation templates — plus a bilingual (English/Spanish) site built from scratch in HTML, CSS, and JavaScript, no template. Everything built around 30+ years of experience and direct partner involvement, designed to read as established and trustworthy rather than like a stock accounting-firm brand.",
      sections: [
        {
          title: "Brand Strategy",
          images: [
            { src: "/projects/basher-identity/strategy-01-firm-mission-vision.jpg", caption: "The firm, mission, and vision — what I built the rest of the identity around." },
            { src: "/projects/basher-identity/strategy-02-symbol-concept.jpg", caption: "The symbol's logic: faceted planes for structure, a single point for the exact figure that matters." },
          ],
        },
        {
          title: "Logo System",
          images: [
            { src: "/projects/basher-identity/logo-01-construction-grid.jpg", caption: "Construction grid — how the mark is actually built, not just drawn." },
            { src: "/projects/basher-identity/logo-02-primary.jpg", caption: "The primary logotype." },
            { src: "/projects/basher-identity/logo-03-clear-space.jpg", caption: "Minimum clear space, keyed to the symbol's own dot." },
            { src: "/projects/basher-identity/logo-04-negative-icon.jpg", caption: "Negative version and the standalone app icon." },
          ],
        },
        {
          title: "Color & Typography",
          images: [
            { src: "/projects/basher-identity/identity-01-color.jpg", caption: "Basher Blue, Mist Blue, Basher Black, and Deep Blue — with full CMYK/RGB/hex specs." },
            { src: "/projects/basher-identity/identity-02-typography.jpg", caption: "Plus Jakarta Sans across every weight the brand actually uses." },
            { src: "/projects/basher-identity/identity-03-pattern-message.jpg", caption: "A pattern built from the symbol, paired with the line that sums up the firm: \"Sus cifras, revisadas por quien firma.\"" },
          ],
        },
        {
          title: "Stationery",
          images: [
            { src: "/projects/basher-identity/stationery-01-business-card.jpg", caption: "Business card, front and back." },
            { src: "/projects/basher-identity/stationery-02-envelope.jpg", caption: "Envelope, using the pattern as a restrained accent instead of covering the whole piece." },
          ],
        },
        {
          title: "Applications",
          images: [
            { src: "/projects/basher-identity/applications-01-billboard.jpg", caption: "Billboard concept — \"Certeza fiscal. Sin intermediarios. Directo con el socio.\"" },
            { src: "/projects/basher-identity/applications-02-signage.jpg", caption: "Exterior signage mockup." },
            { src: "/projects/basher-identity/applications-03-presentation.jpg", caption: "A presentation template, built for the firm's own seminars and client talks." },
            { src: "/projects/basher-identity/applications-04-laptop.jpg", caption: "The identity carried straight into the website itself." },
          ],
        },
        {
          title: "Website Pages",
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
    id: "prj_09",
    code: "PRJ_00",
    timecode: "00:00:06:02",
    title: "Candies",
    type: "Brand Identity",
    year: "2026",
    category: "design",
    blurb: "Identity for a home bakery in Cuajimalpa, Mexico City — same pink, different attitude.",
    tags: ["Branding", "Packaging", "Typography"],
    media: "/projects/candies.mp4",
    mediaType: "video",
    poster: "/projects/candies-poster.jpg",
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
    id: "prj_11",
    code: "PRJ_CM",
    timecode: "00:00:12:00",
    title: "Crowe MacKay",
    type: "Social & Web Content",
    year: "2025",
    category: "design",
    blurb: "Social graphics, staff web profiles and a weekly newsletter for a national professional services firm, made as the in-house designer on the marketing team.",
    tags: ["Social Media", "Sitecore", "Newsletter", "Corporate"],
    media: "/projects/crowe-mackay/master-series-intro.mp4",
    mediaType: "video",
    poster: "/projects/crowe-mackay/master-series-intro-poster.jpg",
    link: "",
    caseStudy: {
      problem:
        "A national firm with offices across Canada needed a steady flow of on-brand content: promotions, welcomes, leadership quotes and community numbers, plus up-to-date staff pages and a weekly industry newsletter.",
      research:
        "Everything had to live inside Crowe's existing brand system, so the work was about layout, hierarchy and speed: reusable templates for announcements, with the person's photo and name as the focus.",
      solution:
        "Social graphics for Instagram and LinkedIn; updated staff profile pages on crowe.com in Sitecore; the Automotive Weekly newsletter in Mailchimp; the animated intro for a Crowe Master Series interview video (the first five seconds of the video; the interview itself was not mine); a campus recruiting carousel; and design support to my supervisor on another video that I did not edit.",
      sections: [
        {
          title: "Animated social posts",
          images: [
            { src: "/projects/crowe-mackay/anim-new-partners.mp4", type: "video", poster: "/projects/crowe-mackay/anim-new-partners-poster.jpg", caption: "Four new partners announced in one animated post, one card per person." },
            { src: "/projects/crowe-mackay/anim-promoted-managers.mp4", type: "video", poster: "/projects/crowe-mackay/anim-promoted-managers-poster.jpg", caption: "Newly promoted managers, Calgary office: a title card followed by each manager." },
            { src: "/projects/crowe-mackay/anim-ceo-quote.mp4", type: "video", poster: "/projects/crowe-mackay/anim-ceo-quote-poster.jpg", caption: "The CEO quote card from the static set, animated for the feed." },
          ],
        },
        {
          title: "Social graphics",
          images: [
            { src: "/projects/crowe-mackay/01-ceo.jpg", caption: "Leadership quote card for the firm's CEO, set inside the Crowe brand template." },
            { src: "/projects/crowe-mackay/02-impact.jpg", caption: "Community-impact numbers turned into a single, scannable layout." },
            { src: "/projects/crowe-mackay/03-lunar.jpg", caption: "Seasonal greeting for Lunar New Year." },
            { src: "/projects/crowe-mackay/04-congrats.jpg", caption: "Welcome and congratulations card for the Vancouver office." },
            { src: "/projects/crowe-mackay/05-promoted.jpg", caption: "Promotion announcement for the Calgary office, opening card." },
            { src: "/projects/crowe-mackay/06-manager.jpg", caption: "Individual manager card from the same promotion series." },
          ],
        },
        {
          title: "Campus recruiting",
          images: [
            { src: "/projects/crowe-mackay/07-students.jpg", caption: "Cover for the student recruiting carousel, with the hashtag and a swipe prompt." },
            { src: "/projects/crowe-mackay/08-vancouver.jpg", caption: "Vancouver: three events, each with venue, date and time in a fixed three-line pattern." },
            { src: "/projects/crowe-mackay/09-kelowna.jpg", caption: "Kelowna: the same layout with two events, so the set reads as one system." },
            { src: "/projects/crowe-mackay/10-edmonton.jpg", caption: "Edmonton: time zone changes to MST, everything else stays locked." },
            { src: "/projects/crowe-mackay/11-calgary.jpg", caption: "Calgary: closing card of the carousel." },
          ],
        },
      ],
      liveUrl: "https://www.crowe.com/ca/crowemackay/insights/automotive-weekly",
    },
  },
  {
    id: "prj_02",
    code: "PRJ_01",
    timecode: "00:01:08:03",
    title: "OEIL",
    type: "Brand Guidelines",
    year: "2025",
    category: "design",
    blurb:
      "A 25-page brand guidelines system for an optometry boutique in East Vancouver: concept, voice, colour, logo, typography and every touchpoint.",
    tags: ["Branding", "Guidelines"],
    media: "/projects/oeil.mp4",
    mediaType: "video",
    poster: "/projects/oeil-poster.jpg",
    caseStudy: {
      problem:
        "The eyewear space is stacked with brands that have way more marketing muscle than a project like this — Warby Parker, LensCrafters, Specsavers. I wanted OEIL to hold its own next to them without pretending to be a big-budget agency job, and without falling into the generic \"clean sans-serif plus a circle\" look so much of the industry leans on.",
      research:
        "I started by actually pricing out what OEIL's competitors charge — Specsavers, Warby Parker, LensCrafters, the independent boutiques — and mapped where OEIL could sit that felt honest: not the cheapest, not the most expensive, but the one that looks like it belongs in a nicer store than its price tag suggests. Before touching a computer, I sketched a full page of logo ideas by hand first — the bad ideas come out faster on paper, which leaves more room to find the good one digitally.",
      solution:
        "The mark isolates the \"œ\" at the heart of the name, and it reads twice: two round letters looking back at you like a pair of eyes, or a pair of glasses seen from the front. That one mark lets the brand split into three lines (Sport, Classic, Essentials) without three separate logos, and I documented all of it in a full brand guidelines book: voice, colour, construction, typography, imagery and applications.",
      pdfUrl: "/projects/OEIL_Brand_Guidelines.pdf",
      sections: [
        {
          title: "Brand Story & Voice",
          images: [
            { src: "/projects/oeil-guidelines/01.jpg", caption: "The cover: premium eyewear design at an honest price, for an optometry boutique in Vancouver's East Village." },
            { src: "/projects/oeil-guidelines/03.jpg", caption: "The neighbourhood the brand is built around — Hastings–Sunrise, local, diverse and vibrant." },
            { src: "/projects/oeil-guidelines/04.jpg", caption: "Mission, vision and the founding story: great glasses without giving up style or affordability." },
            { src: "/projects/oeil-guidelines/05.jpg", caption: "How OEIL speaks — warm, refined, honest and expert — with examples of what to say and what to avoid." },
          ],
        },
        {
          title: "Audience",
          images: [
            { src: "/projects/oeil-guidelines/06.jpg", caption: "Three customer personas the brand is designed for." },
            { src: "/projects/oeil-guidelines/07.jpg", caption: "The core audience: people aged 24–48 who want eyewear with personality at a fair price." },
          ],
        },
        {
          title: "Identity System",
          images: [
            { src: "/projects/oeil-guidelines/08.jpg", caption: "Golden Sand, Ivory Sand, Soft Ivory and Espresso — warm, not clinical, with HEX, RGB, CMYK and HSB values." },
            { src: "/projects/oeil-guidelines/09.jpg", caption: "The concept: the \"œ\" reads twice, as a pair of eyes and as a pair of glasses. Early pencil sketches included." },
            { src: "/projects/oeil-guidelines/10.jpg", caption: "The logo family: primary, secondary, logomark and wordmark, plus colour and one-colour versions." },
            { src: "/projects/oeil-guidelines/11.jpg", caption: "Logo construction: everything is built on one module taken from the letters themselves." },
            { src: "/projects/oeil-guidelines/12.jpg", caption: "Minimum sizes and specifications for print and screen." },
            { src: "/projects/oeil-guidelines/13.jpg", caption: "Clear space and misuse: give the mark room to breathe and never alter it." },
            { src: "/projects/oeil-guidelines/14.jpg", caption: "Poppins as the single brand typeface, with weights and a type hierarchy." },
            { src: "/projects/oeil-guidelines/15.jpg", caption: "Photography direction: bright, warm and honest, with do's and don'ts." },
          ],
        },
        {
          title: "Strategy & Architecture",
          images: [
            { src: "/projects/oeil-guidelines/16.jpg", caption: "Market positioning: about 69% less than the average independent boutique, priced against Specsavers, Warby Parker and LensCrafters." },
            { src: "/projects/oeil-guidelines/17.jpg", caption: "The team structure of a small boutique: two optometrists, front of house and eyewear specialists." },
            { src: "/projects/oeil-guidelines/19.jpg", caption: "One house, three collections: Sport, Classic and Essentials share the same mark." },
          ],
        },
        {
          title: "Applications",
          images: [
            { src: "/projects/oeil-guidelines/18.jpg", caption: "Corporate stationery: business card and letterhead on Soft Ivory or Espresso." },
            { src: "/projects/oeil-guidelines/20.jpg", caption: "Digital and favicons: tested from 180 px down to 16 px." },
            { src: "/projects/oeil-guidelines/21.jpg", caption: "Social media: three rotating templates — statement, moment, product." },
            { src: "/projects/oeil-guidelines/22.jpg", caption: "Storefront and window graphics." },
            { src: "/projects/oeil-guidelines/23.jpg", caption: "Packaging: the pick-up moment — bag, case and cleaning cloth." },
            { src: "/projects/oeil-guidelines/24.jpg", caption: "Every touchpoint across the customer journey, from discovery to pick-up." },
            { src: "/projects/oeil-guidelines/25.jpg", caption: "Merchandise: the illustration and tagline on apparel." },
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
    title: "House of Knives — Warehouse Sale",
    type: "Motion Graphics",
    year: "2026",
    category: "motion",
    blurb: "Vertical promo edit for a warehouse sale — built for social, sharp typographic reveals.",
    tags: ["Motion", "Social", "Vertical"],
    media: "/projects/hok-warehouse-thumb.mp4",
    mediaType: "video",
    poster: "/projects/hok-warehouse-thumb-poster.jpg",
    orientation: "vertical",
    caseStudy: {
      problem:
        "I came across House of Knives' warehouse sale video while scrolling Instagram, and it stopped me for the wrong reason — the editing was flat and forgettable, just a few logos and captions slapped over a talking-head clip. Turns out the guy on camera is the actual owner, editing his own promos, which explains why the content itself was fine but the presentation wasn't doing it any favors.",
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
    id: "prj_10",
    code: "PRJ_05B",
    timecode: "00:04:34:07",
    title: "House of Knives × Wüsthof — Social Series",
    type: "Motion Graphics",
    year: "2026",
    category: "motion",
    blurb: "Five vertical product videos for House of Knives' Wüsthof collaboration — same kinetic-type system, built for a running content series.",
    tags: ["Motion", "Social", "Vertical", "Branded Content"],
    media: "/projects/wusthof-series-thumb.mp4",
    mediaType: "video",
    poster: "/projects/wusthof-series-thumb-poster.jpg",
    orientation: "vertical",
    caseStudy: {
      problem:
        "After the warehouse sale edit, House of Knives came back with a batch of raw talking-head clips for their Wüsthof collaboration — five short product and education pieces, each meant to carry its own hook. The footage was solid, but on its own it was just another knife demo in a feed full of them.",
      research:
        "Rather than treat each clip as a one-off, I built them as a series: the same kinetic-type system from the warehouse sale edit, reused and made consistent — same type rhythm, same reveal timing, same red/yellow accent pulled from the brand — so the five posts read as one recognizable run instead of five disconnected videos.",
      solution:
        "Each video gets its own punchy hook typed out in sync with the host's voice — the bolster question, the 7th-generation claim, the dishwasher test, the forged range, the santoku — built to work as a stand-alone post or stacked together as a campaign.",
      sections: [
        {
          title: "The Series",
          images: [
            {
              src: "/projects/house-of-knifes-case-study/wusthof-01-bolster.mp4",
              type: "video",
              poster: "/projects/house-of-knifes-case-study/wusthof-01-bolster-poster.jpg",
              orientation: "vertical",
              caption: "Why did Wüsthof remove the bolster?",
            },
            {
              src: "/projects/house-of-knifes-case-study/wusthof-02-seventh-gen.mp4",
              type: "video",
              poster: "/projects/house-of-knifes-case-study/wusthof-02-seventh-gen-poster.jpg",
              orientation: "vertical",
              caption: "The 7th generation of Wüsthof.",
            },
            {
              src: "/projects/house-of-knifes-case-study/wusthof-03-dishwasher.mp4",
              type: "video",
              poster: "/projects/house-of-knifes-case-study/wusthof-03-dishwasher-poster.jpg",
              orientation: "vertical",
              caption: "Wüsthof tested this in the dishwasher.",
            },
            {
              src: "/projects/house-of-knifes-case-study/wusthof-04-forged.mp4",
              type: "video",
              poster: "/projects/house-of-knifes-case-study/wusthof-04-forged-poster.jpg",
              orientation: "vertical",
              caption: "A forged Wüsthof for every kitchen.",
            },
            {
              src: "/projects/house-of-knifes-case-study/wusthof-05-santoku.mp4",
              type: "video",
              poster: "/projects/house-of-knifes-case-study/wusthof-05-santoku-poster.jpg",
              orientation: "vertical",
              caption: "A santoku you can rock-chop.",
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
    media: "/projects/compass-card-thumb.mp4",
    mediaType: "video",
    poster: "/projects/compass-card-thumb-poster.jpg",
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
