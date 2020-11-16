function validateExercise21() {
  let btn = document.querySelector("#submit_btn");
  let form = document.getElementById("contact-form");

  let clickEvent = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  let cancelled = btn.dispatchEvent(clickEvent);

  if (cancelled) {
    if (
      form.lastElementChild.nodeName !== "P" ||
      form.lastElementChild.textContent.length === 0 ||
      form.lastElementChild.previousElementSibling.nodeName !== "P" ||
      form.lastElementChild.previousElementSibling.textContent.length === 0
    ) {
      log(21, false);
    } else {
      log(21, true);
    }
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
