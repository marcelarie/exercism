function validateExercise10() {
  let btn = document.getElementById("add_elements");
  let list = document.querySelector(".list-container");

  if (list) {
    list.innerHTML = `<li class="weekday-item">Monday</li>
    <li class="weekday-item">Tuesday</li>
    <li class="weekday-item">Wednesday</li>`;

    let clickEvent = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    btn.dispatchEvent(clickEvent);

    if (
      !list.lastElementChild.textContent.includes("Friday") ||
      !list.lastElementChild.classList.contains("weekday-item") ||
      !list.lastElementChild.previousElementSibling.textContent.includes(
        "Thursday"
      ) ||
      !list.lastElementChild.previousElementSibling.classList.contains(
        "weekday-item"
      )
    ) {
      log(10, false);
    } else {
      log(10, true);
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
