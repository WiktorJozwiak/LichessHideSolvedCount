let alreadyChanged = false;

function changeSolvedCount() {
  if (alreadyChanged) return;

  const el = document.querySelector(".infos.puzzle p strong");

  if (el) {
    el.textContent = "9999";
    alreadyChanged = true; // 🔥 tylko raz!
  }
}

// próbuj co 500ms aż znajdzie (lekko i bezpiecznie)
const interval = setInterval(() => {
  changeSolvedCount();

  if (alreadyChanged) {
    clearInterval(interval);
  }
}, 500);