function validateExercise06() {
  let lis = document.querySelectorAll(".weekday-item:nth-child(odd)");

  let allGood = true;

  lis.forEach((liElement) => {
    if (
      liElement.style.backgroundColor !== "azure" ||
      liElement.style.fontWeight !== "bold"
    ) {
      allGood = false;
    }
  });

  allGood ? log(6, true) : log(6, false);
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
