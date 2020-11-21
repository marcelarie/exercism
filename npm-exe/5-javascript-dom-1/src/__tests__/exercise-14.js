function validateExercise14() {
  let btn = document.getElementById("add_list");
  let container = document.querySelector(".ex-wrapper");

  if (container) {
    container.innerHTML = "";

    let clickEvent = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    btn.dispatchEvent(clickEvent);
    btn.dispatchEvent(clickEvent);

    if (container.children.length < 1) {
      return log(14, false);
    }

    if (container.children.length > 1) {
      return logCustom();
    }

    if (!container.firstElementChild.classList.contains("list-container")) {
      return log(14, false);
    }

    if (container.firstElementChild.childElementCount !== 5) {
      return log(14, false);
    }

    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    for (let i = 0; i < container.firstElementChild.children.length; i++) {
      if (
        !container.firstElementChild.children[i].classList.contains(
          "weekday-item"
        ) ||
        container.firstElementChild.children[i].textContent !== days[i]
      ) {
        return log(14, false);
      }
    }

    log(14, true);
  }
}

function exerciseNumber(n) {
  return n < 10 ? `0${n}` : n;
}

function logCustom() {
  console.group(
    `%c Exercise 14 is not finished yet!`,
    "color: #ff00bb; font-weight: bold;"
  );
  console.log(
    `%c The list should only be added once.`,
    "color: #ff00bb; font-weight: bold;"
  );
  console.groupEnd();
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
