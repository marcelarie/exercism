function validateExercise09() {
  let list = document.querySelector(".list-container");

  if (list === null) {
    console.log(
      `%c Please reload the page and execute the validateExercise09() function again.`,
      "color: #ff00bb; font-weight: bold;"
    );

    return;
  }

  if (list) {
    list.innerHTML = `<li class="weekday-item">Monday</li>
  <li class="weekday-item">Tuesday</li>
  <li class="weekday-item">Wednesday</li>
  <li class="weekday-item">Thursday</li>
  <li class="weekday-item">Friday</li>`;

    let clickEvent = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    list.dispatchEvent(clickEvent);

    let listIsStillThere = document.querySelector(".list-container");

    if (!listIsStillThere) {
      return logCustom();
    }

    list.children[0].dispatchEvent(clickEvent);
    list.children[2].dispatchEvent(clickEvent);

    if (
      list.children[0].textContent.includes("Monday") &&
      list.children[2].textContent.includes("Wednesday")
    ) {
      log(9, false);
    } else {
      log(9, true);
    }
  }
}

function exerciseNumber(n) {
  return n < 10 ? `0${n}` : n;
}

function logCustom() {
  console.group(
    `%c Exercise 09 is not finished yet!`,
    "color: #ff00bb; font-weight: bold;"
  );
  console.log(
    `%c The list should not be deleted on click.`,
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
