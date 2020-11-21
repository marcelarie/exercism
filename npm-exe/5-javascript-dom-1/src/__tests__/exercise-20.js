function validateExercise20() {
  let list = document.querySelector(".list-container");
  let btn = document.querySelector("#add_last_names");

  list.innerHTML = `<li data-lastname="perez">ana</li>
  <li data-lastname="smith">alex</li>
  <li data-lastname="jonsibal">mark</li>
  <li data-lastname="park">john</li>
  <li data-lastname="tilt">andrew</li>`;

  let clickEvent = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  btn.dispatchEvent(clickEvent);

  let names = [
    "ana perez",
    "alex smith",
    "mark jonsibal",
    "john park",
    "andrew tilt",
  ];

  let allGood = true;

  for (let i = 0; i < list.children.length; i++) {
    if (
      list.children[i].getAttribute("data-lastname") ||
      list.children[i].textContent !== names[i]
    ) {
      allGood = false;
    }
  }

  allGood ? log(20, true) : log(20, false);
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
