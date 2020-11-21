function validateExercise04() {
  let element = document.querySelector(".weekday-item--primary");

  if (element) {
    if (
      element.style.textDecoration === "underline" &&
      element.style.fontSize === "24px" &&
      element.style.paddingTop === "12px" &&
      element.style.paddingBottom === "12px"
    ) {
      log(4, true);
    } else {
      log(4, false);
    }
  } else {
    log(4, false);
  }
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
