const inputBox = document.querySelector("#inputBox");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#lists")

function addList () {
  if(inputBox.value == " ") {
    alert("To'ldiring!!!")
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    list.appendChild(li)

  }

  inputBox.value = " "
}





