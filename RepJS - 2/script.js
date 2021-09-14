const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', () => {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    toDoContainer.appendChild(paragraph);
    paragraph.innerText = inputField.value;
    inputField.value = "";

    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', () => {
        toDoContainer.removeChild(paragraph)
        //OR paragraph.remove()//
    })
})