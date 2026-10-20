// Decoding many <video> elements at once is what makes scrolling janky,
// especially on phones. Keep at most MAX playing; when a new one asks to
// play, the one that has been playing longest is paused (it keeps showing
// its last frame / poster, so nothing visibly breaks).

const touch = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;
const MAX = touch ? 2 : 3;
const playing = [];

export function requestPlay(el) {
  if (!el) return Promise.resolve();
  const i = playing.indexOf(el);
  if (i !== -1) playing.splice(i, 1);
  playing.push(el);
  while (playing.length > MAX) {
    const old = playing.shift();
    old.pause();
  }
  const p = el.play();
  return p && typeof p.catch === "function" ? p.catch(() => {}) : Promise.resolve();
}

export function releasePlay(el) {
  if (!el) return;
  const i = playing.indexOf(el);
  if (i !== -1) playing.splice(i, 1);
  el.pause();
}
