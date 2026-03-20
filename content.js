// === KONFIG (odpowiednik #define) ===
const INITIAL_INTERVAL = 100; // ms
const INTERVAL = 500;         // ms

let found = false;

function changeSolvedCount() {
  const el = document.querySelector(".infos.puzzle p strong");

  if (el) {
    el.textContent = "9999";
    return true;
  }

  return false;
}

// szybkie sprawdzanie na start
let interval = setInterval(() => {
  if (changeSolvedCount()) {
    found = true;

    clearInterval(interval);

    // wolniejsze sprawdzanie po znalezieniu
    interval = setInterval(() => {
      changeSolvedCount();
    }, INTERVAL);
  }
}, INITIAL_INTERVAL);