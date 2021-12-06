    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    // function fetch all 
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    // function see returned objects in console
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    // function to populate list
    //start of function
    const populateTodos = () => {


        //capture ol item into variable (getElementById)
        let todoList = document.getElementById('todo-list');

        // let todoTitle = "";

        for (i=0; i < arrayOfTodos.length; i++) {
    //start of loop
        //createText inside the li using the title property.
        // use createTextNode
        todoTitle = document.createTextNode(arrayOfTodos[i].title);

        // createElement to make new LI
        let todoItem = document.createElement("LI");
            if (arrayOfTodos[i].completed) {
                //add a class to li to make text green
                todoItem.classList.add("istrue");
            } else {
                todoItem.classList.add("isfalse");
            }
        //append the text to the new element
        todoItem.appendChild (todoTitle);
        // append the element to the ol element
        todoList.appendChild (todoItem);
    }
    //end loop
}
// end of function

// function to filter
const filterTodos = () => {

    // Capture the ol item into a variable (getElementById)
    let todoList = document.getElementById("todo-list");
  
    // Get the userID number from the input field in the html form
    const num = document.getElementById("number_input").value;
  
    // Filter the array 
    const arrayFilter = arrayOfTodos.filter(array => array.userId == num);
  
    //Loop through and display the results -- just like populateTodos
    for (let i = 0; i < arrayFilter.length; i++) {
      let todoItem = document.createElement("LI");
  
      // Uncomment the list item you want to display: Just the title, or a concatenated string with the User Id, Title, and Completed status
      //todoItem.innerHTML = arrayFilter[i].title;
      todoItem.innerHTML = "<b>User:</b> " + arrayFilter[i].userId + ",  <b>Title:</b> " + arrayFilter[i].title + ",  <b>Completed:</b> " + arrayFilter[i].completed;
      
      todoList.appendChild(todoItem);
    }
  }
  
// function for completed
const completedTodos = () => {
    // Capture the ol item into a variable (getElementById)
    let todoList = document.getElementById("todo-list");
  
    // Filter the array 
    const arrayFilter = arrayOfTodos.filter(array => array.completed === true);
  
    //Loop through and display the results -- just like populateTodos
    for (let i = 0; i < arrayFilter.length; i++) {
      let todoItem = document.createElement("LI");
  
      // Uncomment the list item you want to display: Just the title, or a concatenated string with the User Id, Title, and Completed status
      //todoItem.innerHTML = arrayFilter[i].title;
      todoItem.innerHTML = "<b>User:</b> " + arrayFilter[i].userId + ",  <b>Title:</b> " + arrayFilter[i].title + ",  <b>Completed:</b> " + arrayFilter[i].completed;
      
      todoList.appendChild(todoItem);
    }
  }
   
  //function for not completed   
  // Same function as completedTodos except array.completed === false
  const notCompletedTodos = () => {
    // Capture the ol item into a variable (getElementById)
    let todoList = document.getElementById("todo-list");
  
    // Filter the array 
    const arrayFilter = arrayOfTodos.filter(array => array.completed === false);
  
    //Loop through and display the results -- just like populateTodos
    for (let i = 0; i < arrayFilter.length; i++) {
      let todoItem = document.createElement("LI");
  
      // Uncomment the list item you want to display: Just the title, or a concatenated string with the User Id, Title, and Completed status
      //todoItem.innerHTML = arrayFilter[i].title;
      todoItem.innerHTML = "<b>User:</b> " + arrayFilter[i].userId + ",  <b>Title:</b> " + arrayFilter[i].title + ",  <b>Completed:</b> " + arrayFilter[i].completed;
      
      todoList.appendChild(todoItem);
    }
  }
  //function to reset
  //refer back to tic-tac-toe  
  const resetToDos = () => {
   
    // I want to get rid of the whole list, so I target the <ol> tag
    const listItems = document.getElementsByTagName("OL")
  
    // Loop through the list items and set the innerHTML to null
    for (i=0; i < listItems.length; i++) {
      listItems[i].innerHTML = null
    } 
  
  }


