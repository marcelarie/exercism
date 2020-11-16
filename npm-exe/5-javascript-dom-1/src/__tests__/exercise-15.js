function validateExercise15() {
  let btn = document.getElementById("clone_list");
  let container = document.querySelector(".ex-wrapper");

  if (container) {
    container.innerHTML = `<ul class="list-container">
    <li class="weekday-item">Monday</li>
    <li class="weekday-item">Tuesday</li>
    <li class="weekday-item">Wednesday</li>
    <li class="weekday-item">Thursday</li>
    <li class="weekday-item">Friday</li>
  </ul>`;

    let clickEvent = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    btn.dispatchEvent(clickEvent);

    if (container.children.length !== 2) {
      return log(15, false);
    }

    if (container.children[1].id !== "new_list") {
      return log(15, false);
    }

    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    for (let i = 0; i < container.lastElementChild.children.length; i++) {
      if (
        !container.lastElementChild.children[i].classList.contains(
          "weekday-item"
        ) ||
        container.lastElementChild.children[i].textContent !== days[i]
      ) {
        return log(15, false);
      }
    }

    log(15, true);
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
