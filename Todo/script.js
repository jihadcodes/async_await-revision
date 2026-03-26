let inputTask = document.querySelector('#inputTask');
let addBtn = document.querySelector('.addBtn');

addBtn.addEventListener('click', function() {
   let value = inputTask.value;
    if (value) {
        console.log(value );
    }
    else { 
         alert('Please enter a task');
    }
});