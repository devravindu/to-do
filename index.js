const inputBox = document.getElementById("input-box");
// const btnAdd = document.getElementById("btn_add");
const listContainer = document.getElementById("list-container");

// Add a task by clicking Add button
function addTask() {
  if (inputBox.value === "") {
    document.querySelector("h3").style.display = "block";
  } else {
    document.querySelector("h3").style.display = "none";
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
// Add a task by Enter
document
  .getElementById("input-box")
  .addEventListener("keypress", function (event) {
    enterTask(event.key);
  });

function enterTask(key) {
  if (key === "Enter") {
    addTask();
  }
}

//Add the task to the list
document
  .querySelector("#list-container")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveData();
    }
  });

//save the progress in local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

