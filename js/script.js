//let editbutton;
//let deletebutton;
//let form;
//let todolist;
//let todoInputField;
//
//function onEditTodo () {
//    alert("I am editing");
//}
//
//function onDeleteTodo () {
//    alert("i am deleting");
//}
//
////
//function showtodoitem (todo) {
//    let li = document.createElement("li");
//    li.innerHTML = `
//    <div class="repeat">
//        <div>
//            <input class="todo__checkbox" type="checkbox" />
//            <span class="todo__text"> ${todo} </span>
//        </div>
//        <div class="todo__actions--wrapper">
//            <button id="edit_btn" class="todo__actions edit__btn">edit</button>
//            <button id="del_btn" class="todo__actions delete__btn">delete</button>
//        </div>
//    </div>
//    `;
//    li.classList.add("todo__section--todoItem");
// 
//    todolist.appendChild(li);
//}
///*function showtodoitem (todo) {
//    const todolistitem = `
//    <li class="todo__section--todoItem">
//            <div>
//              <input class="todo__checkbox" type="checkbox" />
//              <span class="todo__text"> ${todo} </span>
//              <div class="todo__actions--wrapper">
//                <button id="edit_btn" class="todo__actions edit__btn">edit</button>
//                <button id="del_btn" class="todo__actions delete__btn">delete</button>
//              </div>
//            </div>
//    </li>`
// ;
//
// todolist.innerHTML = todolistitem;
//    
//}*/
//
////add  a todo
//function ontodoform(event){
//    event.preventDefault();
//    const todoValue = todoInputField.value;
//    showtodoitem(todoValue)
//}
//
//
//
//
//function setup () {
//    editbutton = document.getElementById("edit_btn");
//    deletebutton = document.getElementById("del_btn");
//    form = document.getElementById("form");
//    todolist = document.getElementById("todo__list");
//    todoInputField = document.getElementById("todo__input");
//
//    form.addEventListener("submit", ontodoform);
//    editbutton.addEventListener("click", onEditTodo);
//    deletebutton.addEventListener("click", onDeleteTodo);
//}
//
//setup();
//get the button
//add a click eventlistener
//when eventlistener is fired change color
function changebackgroundcolor (){
    const maindiv = document.querySelector(".main")
    maindiv.style.backgroundColor = "yellow";
    //console.log("have been click")
}

function changethetext (){
    const maindivtwo = document.querySelector(".main2");
    //maindivtwo.textContent = 'I am div one';
    const content = document.getElementById('content');
    const content_b = document.getElementById('contenttwo');
    //you can also use inner html
    content.innerHTML = "I am div one";
    content_b.innerHTML = "I am div two;"

    //content.textContent = "I am div one";
    //content_b.textContent = "I am div two;"

    //console.log ("change text")
}

//const clickbutton = document.getElementById("clickbtn")
//clickbutton.addEventListener('click', changebackgroundcolor)

//const clicktochangebtn = document.getElementById("clicktochangetext");
//clicktochangebtn.addEventListener('click', changethetext);

//const listitem = document.getElementById("list");
//const listitemitself = listitem.querySelectorAll(".item")
//for (let list = 0; list < listitemitself.length; list++){
//    listitemitself[list].style.border = "1px solid black";
//    listitemitself[list].style.margin = "20px";
//}
//listitemitself[0].style.backgroundColor = "yellow"
//listitemitself[1].style.backgroundColor = "red"
//listitemitself[2].style.backgroundColor = "blue"
//listitemitself[3].style.backgroundColor = "pink"

const arr = ['red', 'blue', 'purple', 'green']
const itemGroup  = document.querySelectorAll(".item")
for (i=0; i<itemGroup.length; i++){
    itemGroup[i].style.border = "1px solid black"
    itemGroup[i].style.backgroundColor = arr[i]
}