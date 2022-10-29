// how do we select html elements in javascript
//if the html element has an id we can use
//const element = document.getElementById("idname")
//const elementTwo = document.querySelector("#id")
//const elementTwo = document.querySelector(".class")

//function enclosingfunction (paraone){
//
//	return function deletetodo () {
//		const buttonclick = paraone
//		const li = buttonclick.parentNode.parentNode.parentNode;
//		li.remove();
//	}
//}
const todoform = document.getElementById("form");
const todoSection = document.querySelector(".todo__section")

function edittodo (eventobject) {
	const editclick = eventobject.target;
	const editclickbutton = editclick.parentNode.parentNode.parentNode;
	const addButton = document.querySelector("#add");
	//console.log(editclickbutton);
	const todoToEdit = editclickbutton.querySelector(".todo__text");
	const inputfield = document.getElementById("todo__input");
	inputfield.value = todoToEdit.textContent;
	const updateBtn = document.createElement("button");
	updateBtn.textContent = "Update"
	updateBtn.classList.add("add__btn")
	todoSection.appendChild(updateBtn);
	addButton.classList.toggle("remove");
	updateBtn.addEventListener("click", () => {
		todoToEdit.textContent = inputfield.value;
		updateBtn.classList.toggle("remove");
		addButton.classList.toggle("remove")
	});
}



function addleventlistenertoedittodo () {
	const editbuttoncollection = document.querySelectorAll(".edit__btn");
	const editbutton = editbuttoncollection[editbuttoncollection.length - 1];
	editbutton.addEventListener('click', edittodo);
	//console.log(editbutton);
}

function deletetodo (eventobject) {
		//alert ("I am deleting")
	const buttonclick = eventobject.target;
	//console.log(buttonclick)
	const li = buttonclick.parentNode.parentNode.parentNode;
	li.remove();
}
function addlistenertoDeletebuttons () {
	const buttoncollection = document.querySelectorAll(".delete__btn")
	//console.log (buttoncollection);
	const lastbutton = buttoncollection[buttoncollection?.length - 1]
	lastbutton.addEventListener('click', deletetodo);
	//lastbutton.addEventListener("click", enclosingfunction(lastbutton))
}
function showtodoonthescreen (todo) {
	const listoftodolist = document.querySelector("#todo__list");
	const li = document.createElement("li");
	li.classList.add("todo__section--todoItem")
	li.innerHTML = `
	<div class="repeat">
        <div>
            <input class="todo__checkbox" type="checkbox" />
            <span class="todo__text"> ${todo} </span>
        </div>
        <div class="todo__actions--wrapper">
            <button id="edit_btn" class="todo__actions edit__btn">edit</button>
            <button id="del_btn" class="todo__actions delete__btn">delete</button>
        </div>
    </div>`;

	listoftodolist.appendChild(li);
	addlistenertoDeletebuttons();
	addleventlistenertoedittodo();
}


function todoformsubmithandler (eventobject) {
	eventobject.preventDefault();
	//console.log ("I would handle the form submit", e);
	const inputfield = document.getElementById("todo__input");
	const inputvalue = inputfield.value;
	//console.log(inputvalue);
	showtodoonthescreen(inputvalue);
	inputfield.value = "";
}

function clearbuttonfunction () {
	//
	const todoList = document.getElementById("todo__list");
	todoList.remove();
	window.location.reload();
}



todoform.addEventListener('submit', todoformsubmithandler);

const clearbutton = document.querySelector("#clear");
clearbutton.addEventListener ("click", clearbuttonfunction)