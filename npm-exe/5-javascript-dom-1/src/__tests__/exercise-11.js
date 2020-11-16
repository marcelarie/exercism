function validateExercise11() {
  let btn = document.getElementById("add_element");
  let list = document.querySelector(".list-container");

  if (list) {
    list.innerHTML = `<li class="weekday-item">Tuesday</li>
    <li class="weekday-item">Wednesday</li>
    <li class="weekday-item">Thursday</li>
    <li class="weekday-item">Friday</li>`;

    let clickEvent = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    btn.dispatchEvent(clickEvent);
    btn.dispatchEvent(clickEvent);

    if (
      !list.firstElementChild.textContent.includes("Monday") ||
      !list.firstElementChild.classList.contains("weekday-item") ||
      list.firstElementChild.nextElementSibling.textContent.includes("Monday")
    ) {
      log(11, false);
    } else {
      log(11, true);
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
