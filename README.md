# Alejandro Basurto — Portfolio

React + Vite site. Dark theme, neon-yellow accent, timeline/scrubber nav as a
nod to motion graphics work.

## Run it locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Add or edit a project

Everything lives in one file: `src/data/projects.js`. Copy an existing
object, give it a new `id`, and fill in the fields. There's a commented-out
template at the bottom of the file ready to uncomment.

For each project:
1. Drop your image or video file into `public/projects/`
2. Set `media: "/projects/your-file.jpg"` (or `.mp4`)
3. Set `mediaType: "image"` or `"video"`

Videos autoplay muted on hover (desktop) — no extra work needed.

## Replace the placeholder images

`public/projects/duck-and-barrel.jpg`, `oeil.jpg`, and
`apple-sustainability.jpg` are solid-color placeholders right now. Just
overwrite them with your real images (same filenames, or update the paths in
`projects.js`).

`motion-reel.mp4` isn't included yet — add your reel export to
`public/projects/motion-reel.mp4` when ready.

## Edit text content

- **About**: `src/components/About.jsx`
- **Skills**: `src/components/Skills.jsx` (edit the `GROUPS` array)
- **Contact links**: `src/components/Contact.jsx` — swap the `#` placeholders
  for your real LinkedIn/Instagram URLs

## Deploy to Vercel

Same flow as the gym/diet app:

```bash
npm install -g vercel   # if you don't have it yet
vercel login
vercel                  # first deploy, follow the prompts
vercel --prod           # push to production URL
```

Or connect the project's GitHub repo to Vercel from vercel.com for
auto-deploys on every push.

<!-- trigger deploy -->
