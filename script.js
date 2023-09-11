const createBtn = document.querySelector(".create-btn");
const notesContainer = document.querySelector(".notes-container");

const note = document.querySelector(".note");

createBtn.addEventListener("click", function () {
  const div = document.createElement("div");
  div.className = "note";

  const p = document.createElement("p");
  p.setAttribute("contenteditable", "true");
  p.className = "input-box";
  div.appendChild(p);

  const i = document.createElement("i");
  i.className = "fa-solid fa-trash dlt-btn";
  div.append(i);

  notesContainer.insertBefore(div, notesContainer.firstChild);

  //   saveData();
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "I") {
    console.log(1);
    e.target.parentElement.remove();
    saveData();
  } else {
    const inputBox = document.querySelectorAll(".input-box");
    inputBox.forEach((x) => {
      x.onkeyup = saveData;
    });
  }
});

// const dltBtn = document.querySelectorAll(".dlt-btn");

function saveData() {
  const data = notesContainer.innerHTML;
  localStorage.setItem("data", data);
}
function getData() {
  const data = localStorage.getItem("data");
  notesContainer.innerHTML = data;
}
getData();
