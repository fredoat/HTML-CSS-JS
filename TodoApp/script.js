const inputField = document.querySelector('#inputField');
const addTodoButton = document.querySelector('#addTodoButton');
const todoList = document.querySelector("#todoList");


addTodoButton.addEventListener('click', () => {

    if (inputField.value === '') {

        e.preventDefault()
    }

    let createdDiv = document.createElement('div');
    let paragraph = document.createElement('p');
    let deletebutton = document.createElement('b');
    let deleteAllButton = document.createElement('b');

    createdDiv.classList.add('createdDiv');
    paragraph.classList.add('paragraph');
    deletebutton.classList.add('deleteButton');
    deleteAllButton.classList.add('deleteAllButton')

    paragraph.innerText = inputField.value;
    deletebutton.innerText = '-'
    deleteAllButton.innerText = "Delete All"

    createdDiv.appendChild(paragraph);
    createdDiv.appendChild(deletebutton);

    todoList.appendChild(createdDiv)
    //todoList.appendChild(deleteAllButton)

    inputField.value = ''


    deletebutton.addEventListener('click', () => {
        createdDiv.remove()
    })

    deleteAllButton.addEventListener('click', () => {
        const p = createdDiv.
            p.remove()
    })


})


