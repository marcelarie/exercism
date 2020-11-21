function validateExercise16() {
  let btn = document.getElementById("replace_element");
  let container = document.querySelector(".list-container");

  if (container) {
    container.innerHTML = `<li class="weekday-item">Monday</li>
    <li class="weekday-item">Tuesday</li>
    <li class="weekday-item">Wednesday</li>
    <li class="weekday-item">Thursday</li>
    <li class="weekday-item">Friday</li>`;

    let clickEvent = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    btn.dispatchEvent(clickEvent);

    let tuesday = container.children[1];

    if (
      tuesday.textContent !== "REPLACED" ||
      tuesday.style.color !== "red" ||
      !tuesday.classList.contains("weekday-item")
    ) {
      log(16, false);
    } else {
      log(16, true);
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
