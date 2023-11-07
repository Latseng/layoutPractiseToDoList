const toDo = document.querySelector(".todo");
const addText = document.querySelector(".add-item");

//新增待辦事項列
const addButton = document.querySelector(".add-btn");
addButton.addEventListener("click", () => {
  const newList = document.createElement("li");
  newList.classList.add("item");
  toDo.appendChild(newList);

  const newP = document.createElement("p");
  newP.classList.add("text");
  newP.textContent = addText.value;
  newList.appendChild(newP);

  const newEditButton = document.createElement("button");
  newEditButton.classList.add("edit-btn");
  newList.appendChild(newEditButton);

  const newEditIcon = document.createElement("i");
  newEditIcon.classList.add("fas");
  newEditIcon.classList.add("fa-edit");
  newEditIcon.classList.add("edit-icon");
  newEditButton.appendChild(newEditIcon);

  const newDeleteButton = document.createElement("button");
  newDeleteButton.classList.add("delete-btn");
  const newDeleteIcon = document.createElement("i");
  newDeleteIcon.classList.add("fas");
  newDeleteIcon.classList.add("fa-trash");
  newDeleteIcon.classList.add("trash-icon");
  newDeleteButton.appendChild(newDeleteIcon);
  newList.appendChild(newDeleteButton);

  //edit 事件
  newEditButton.addEventListener("click", () => {
    const newInput = document.createElement("input");
    newInput.classList.add("item");
    toDo.appendChild(newInput);
    newList.classList.remove("item");
    newList.classList.add("none");
    newInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        newP.textContent = newInput.value;
        newInput.classList.remove("item");
        newInput.classList.add("none");
        newList.classList.remove("none");
        newList.classList.add("item");
      }
    });
  });

  //delete 事件
  newDeleteButton.addEventListener("click", () => {
    newList.classList.add("remove");
    newList.addEventListener("transitionend", () => {
      newList.remove();
    });
  });
  addText.value = "";
});

//製作編輯按鈕
const editItem = document.querySelectorAll(".edit-btn");
editItem.forEach((edit) => {
  edit.addEventListener("click", (e) => {
    const newText = prompt("請輸入新的記事：");
    e.target.parentElement.parentElement.querySelector(".text").textContent =
      newText;
  });
});

//製作刪除項目按鈕
const deleteItem = document.querySelectorAll(".delete-btn");
deleteItem.forEach((trash) => {
  trash.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.classList.add("remove");
  });
  const list = trash.parentElement.parentElement;
  list.addEventListener("transitionend", (e) => {
    e.target.remove();
  });
});
