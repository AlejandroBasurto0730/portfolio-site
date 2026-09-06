// Only decode/play a thumbnail video while its card is actually visible on
// screen — this still avoids wasting resources on off-screen videos, but
// does not cap how many can play simultaneously.

export function requestPlay(el) {
  if (!el) return Promise.resolve();
  const playPromise = el.play();
  if (playPromise && typeof playPromise.catch === "function") {
    return playPromise.catch(() => {});
  }
  return Promise.resolve();
}

export function releasePlay(el) {
  if (!el) return;
  el.pause();
}
