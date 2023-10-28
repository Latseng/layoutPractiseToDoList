let toDo = document.querySelector(".todo");
let addText = document.querySelector(".add-item");

//新增待辦事項列
let addButton = document.querySelector(".add-btn");
addButton.addEventListener("click", () => {
  let newList = document.createElement("li");
  newList.classList.add("item");
  toDo.appendChild(newList);

  let newP = document.createElement("p");
  newP.classList.add("text");
  newP.textContent = addText.value;
  newList.appendChild(newP);

  let newEditButton = document.createElement("button");
  newEditButton.classList.add("edit-btn");
  newList.appendChild(newEditButton);

  let newEditIcon = document.createElement("i");
  newEditIcon.classList.add("fas");
  newEditIcon.classList.add("fa-edit");
  newEditIcon.classList.add("edit-icon");
  newEditButton.appendChild(newEditIcon);

  let newDeleteButton = document.createElement("button");
  newDeleteButton.classList.add("delete-btn");
  let newDeleteIcon = document.createElement("i");
  newDeleteIcon.classList.add("fas");
  newDeleteIcon.classList.add("fa-trash");
  newDeleteIcon.classList.add("trash-icon");
  newDeleteButton.appendChild(newDeleteIcon);
  newList.appendChild(newDeleteButton);

  const editItem = document.querySelectorAll(".edit-btn");
  editItem.forEach((edit) => {
    edit.addEventListener("click", (e) => {
      const newText = prompt("請輸入新的記事：");
      e.target.parentElement.parentElement.querySelector(".text").textContent =
        newText;
    });
  });

  newDeleteButton.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.classList.add("remove");
    let list = e.target.parentElement.parentElement;
    list.addEventListener("trasitionend", (e) => {
      e.target.remove();
    });
  });
  newList.style.animation = "scaleUp 0.5s ease forwards";
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
let deleteItem = document.querySelectorAll(".delete-btn");
deleteItem.forEach((trash) => {
  trash.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.classList.add("remove");
  });
  let list = trash.parentElement.parentElement;
  list.addEventListener("transitionend", (e) => {
    e.target.remove();
  });
});
