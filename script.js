let sum = 0;

let todoList = document.querySelector(".todoList");
let addBtn = document.querySelector(".addBtn");
// let todoList = document.querySelector(".todoList");
let input = document.querySelector(".input");
let deleteBtn = document.querySelectorAll(".deleteBtn");

function addTask() {
  if (input.value === "") {
    alert("Please enter a task");
  } else {
    let newLi = document.createElement("li");
    newLi.innerHTML = `
                    <div class="todoName">
                        <input type="checkbox" name="todoText" id="${input.value}">
                        <label for="${input.value}">${input.value}</label>
                    </div>
                    <button class="deleteBtn">Delete</button>
                `;
    newLi.querySelector(".deleteBtn").addEventListener("click",function(){
        setTimeout(() => {
            newLi.remove();
        }, 100);
    })
    todoList.appendChild(newLi);
    input.value = "";
  }
}


