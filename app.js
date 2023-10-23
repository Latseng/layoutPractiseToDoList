let addButton = document.querySelector(".add-btn");
let toDo = document.querySelector(".todo");
let addText = document.querySelector(".add-item");

//新增待辦事項
addButton.addEventListener("click", () => {
  let newList = document.createElement("li");
  let newEditButton = document.createElement("button");
  let newDeleteButton = document.createElement("button");
  let newEditIcon = document.createElement("i");
  let newDeleteIcon = document.createElement("i");
  newList.classList.add("item");
  newEditButton.classList.add("edit-btn");
  newDeleteButton.classList.add("delete-btn");
  newEditIcon.classList.add("fas");
  newEditIcon.classList.add("fa-edit");
  newEditIcon.classList.add("edit-icon");
  newDeleteIcon.classList.add("fas");
  newDeleteIcon.classList.add("fa-trash");
  newDeleteIcon.classList.add("trash-icon");
  newList.textContent = addText.value;
  toDo.appendChild(newList);
  newList.appendChild(newEditButton);
  newList.appendChild(newDeleteButton);
  newEditButton.appendChild(newEditIcon);
  newDeleteButton.appendChild(newDeleteIcon);
});

const lis = document.querySelector(".todo").querySelectorAll(".item");

lis.forEach((li) => {
  const deleteItem = li.querySelector(".delete-btn");

  deleteItem.addEventListener("click", () => {
    li.remove();
  });
});

lis.forEach((li) => {
  const editItem = li.querySelector(".edit-btn");

  editItem.addEventListener("click", () => {
    let newItem = li.value;
    document.querySelector(".add-item").value = newItem.text;
  });
});
