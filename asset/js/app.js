//ui variables!!!!!!

const taskInput = document.querySelector('#task'); //the task input text field

const form = document.querySelector('#task-form'); //The form at the top

const filter = document.querySelector('#filter'); //the task filter text field

const taskList = document.querySelector('.collection'); //The ul

const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button

//Event

form.addEventListener("submit", addNewTask);

clearBtn.addEventListener("click", clearAllTasks);

// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit 
form.addEventListener('submit', addNewTask);

// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);

//   Filter Task 
filter.addEventListener('keyup', filterTasks);











// Remove task event [event delegation]
taskList.addEventListener('click', removeTask);





//event handler
function addNewTask(e) {
    if (taskInput.value === "") {
        taskInput.style.borderColor = "red";
        alert('enter task');
        return;
    }
    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to ul 
    taskList.appendChild(li);
    //make the input empty
    taskInput.value = "";

    e.preventDefault(); //disable form submission
}





// Clear Task Function definition 
function clearAllTasks() {
    taskList.innerHTML = '';

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    alert("Clear tasks ....");

}




function filterTasks(e) {

    var userinput = document.getElementById("#filter").value.forEach(userinput => {

        if (userinput.querySelectorAll('.collection-item') === -1) {

            return null;
        } else {
            document.querySelectorAll('.collection-item') = userinput;
            userinput = 'block';
        }

    });


    /* var userinput = document.getElementsByName("filter")
      var asignuserinput = userinput;

      const lielements = document.querySelectorAll('.collection-item')

      h.forEach(lielements => {
          if (lielements.userinput = lielements.indexOf(asignuserinput)) {
              console.log(lielements.indexOf(userinput));
          } else {
              console.log("error");
          }
      });*/
}





function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            e.target.parentElement.parentElement.remove();
        }

    }


}