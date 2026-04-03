let inputTask = document.querySelector("#inputTask");
let addBtn = document.querySelector(".addBtn");
let todoContainer = document.querySelector(".todoContainer");

let API = "https://69cf43d7a4647a9fc67535e6.mockapi.io/api/v1/todos";

addBtn.addEventListener("click", function () {
  let value = inputTask.value;
  if (value) {
    console.log(value);
  } else {
    alert("Please enter a task");
  }
});

async function fetchData() {
  let response = await fetch(API);
  let data = await response.json();
  console.log(data);
  

  data.forEach(obj => {
    let div = document.createElement("div");
    div.className = 'todo'
    div.innerHTML = `
            <p>${obj.text}</p>
            <div>
              <button class="editBtn">Edit</button>
              <button class="deleteBtn">Delete</button>
            </div>
            `; todoContainer.append(div);
  });
 
}

fetchData();
