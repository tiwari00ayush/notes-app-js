const createBtn = document.querySelector(".create-btn");
const notesContainer = document.querySelector(".notes-container");
const inputBox = document.querySelector(".input-box");

createBtn.addEventListener("click", function () {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const i = document.createElement("i");
  div.className = "note";
  i.className = "fa-solid fa-trash dlt-btn";
  p.setAttribute("contenteditable", "true");
  p.className = "input-box";
  div.appendChild(p);
  div.append(i);
  notesContainer.insertBefore(div, notesContainer.firstChild);

  i.addEventListener("click", function () {
    div.remove();
  });
});
