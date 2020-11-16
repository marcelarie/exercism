function validateExercise07() {
  let removeFirstBtn = document.getElementById("remove_first_btn");
  let removeLastBtn = document.getElementById("remove_last_btn");
  let list = document.querySelector(".list-container");

  list.innerHTML = `<li data-testid="weekday-item-1" class="weekday-item">Monday</li>
  <li data-testid="weekday-item-2" class="weekday-item">Tuesday</li>
  <li data-testid="weekday-item-3" class="weekday-item">Wednesday</li>
  <li data-testid="weekday-item-4" class="weekday-item">Thursday</li>
  <li data-testid="weekday-item-5" class="weekday-item">Friday</li>
  <li data-testid="weekday-item-6" class="weekday-item">Saturday</li>
  <li data-testid="weekday-item-7" class="weekday-item">Sunday</li>`;

  let clickEvent = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  removeFirstBtn.dispatchEvent(clickEvent);
  removeLastBtn.dispatchEvent(clickEvent);

  if (
    list.firstElementChild.dataset.testid === "weekday-item-1" ||
    list.lastElementChild.dataset.testid === "weekday-item-7"
  ) {
    log(7, false);
  } else {
    log(7, true);
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
