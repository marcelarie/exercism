function validateExercise08() {
  let btn = document.getElementById("add-new");
  let list = document.querySelector(".list-container");

  list.innerHTML = `<li class="weekday-item">Monday</li>
  <li class="weekday-item">Tuesday</li>
  <li class="weekday-item">Wednesday</li>
  <li class="weekday-item">Thursday</li>`;

  let clickEvent = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  btn.dispatchEvent(clickEvent);
  btn.dispatchEvent(clickEvent);
  btn.dispatchEvent(clickEvent);

  if (
    !list.lastElementChild.textContent.includes("Friday") ||
    list.lastElementChild.previousElementSibling.textContent.includes(
      "Friday"
    ) ||
    !list.lastElementChild.classList.contains("weekday-item")
  ) {
    log(8, false);
  } else {
    log(8, true);
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
