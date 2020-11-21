function validateExercise17() {
  let btn = document.getElementById("change_classes");

  let mouseOverEvent = new MouseEvent("mouseover", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  btn.dispatchEvent(mouseOverEvent);

  if (!btn.classList.contains("hovered")) {
    return log(17, false);
  }

  let mouseOutEvent = new MouseEvent("mouseout", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  btn.dispatchEvent(mouseOutEvent);

  if (btn.classList.contains("hovered")) {
    return log(17, false);
  }

  log(17, true);
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
