function validateExercise18() {
  let btn = document.getElementById("toggle_classes");

  btn.className = "";

  let clickEvent = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  btn.dispatchEvent(clickEvent);

  if (!btn.classList.contains("hovered")) {
    return log(18, false);
  }

  btn.dispatchEvent(clickEvent);

  if (btn.classList.contains("hovered")) {
    return log(18, false);
  }

  log(18, true);
}

function exerciseNumber(n) {
  return n < 10 ? `0${n}` : n;
}

function log(exercise, correct) {
  if (correct) {
    console.group(
      `%c Exercise ${exerciseNumber(exercise)}:`,
      "color: #02ff00; font-weight: bold;"
    );
    console.log(
      `%c Exercise ${exerciseNumber(exercise)} is correct! 🎉`,
      "color: #02ff00; font-weight: bold;"
    );
    console.groupEnd();
  } else {
    console.group(
      `%c Exercise ${exerciseNumber(exercise)}:`,
      "color: #ff00bb; font-weight: bold;"
    );
    console.log(
      `%c Exercise ${exerciseNumber(
        exercise
      )} is not finished yet! Keep going! 👨‍💻`,
      "color: #ff00bb; font-weight: bold;"
    );
    console.groupEnd();
  }
}
