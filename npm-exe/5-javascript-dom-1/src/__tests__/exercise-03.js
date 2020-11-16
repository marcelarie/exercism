function validateExercise03() {
  let elements = document.getElementsByClassName("weekday-item");

  if (elements) {
    let allGood = true;

    for (let element of elements) {
      if (
        element.style.fontWeight !== "bold" ||
        element.style.fontSize !== "24px"
      ) {
        allGood = false;
      }
    }

    allGood ? log(3, true) : log(3, false);
  } else {
    log(3, false);
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
