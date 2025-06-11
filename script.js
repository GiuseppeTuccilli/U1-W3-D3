const form = document.getElementById("task-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newtask = document.getElementById("item");
  console.log(newtask.value);

  const task = document.createElement("div");
  task.innerHTML = `
  <p onclick='done(event)' class='saved-text' >${newtask.value}</p>
  <button onclick='cancella(event)'class='canc-button'>ELIMINA</button>
  `;

  task.classList.add("list-component");

  const tasklist = document.getElementById("container");
  tasklist.appendChild(task);

  form.reset();
});

const done = function (e) {
  e.target.classList.add("done");
};

const cancella = function (e) {
  e.target.parentElement.remove();
};
