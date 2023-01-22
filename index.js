let todoLish = document.getElementById("todoList");
let todoListBody = document.getElementById("todoListBody");
let finishedList = document.getElementById("finishedList");
let newTodo = document.getElementById("newTodo");
let addTodo = document.getElementById("addTodo");
let search = document.getElementById("search");

addTodo.addEventListener("click", function(e){
    let appendValue = `
    <tr>
        <td class="data"><span>${newTodo.value}</span></td>
        <td class="finished"><input type="checkbox"></td>
        <td class="close"><span>X</span></td>
    </tr>
    `;
    todoListBody.innerHTML += appendValue;
})

todoLish.addEventListener("click", function(e){
    if (e.target.type === "checkbox" && e.target.checked === true){
        finishedList.append(e.target.parentNode.parentNode);
    }else if (e.target.parentNode.classList.contains("close")){
        e.target.parentNode.parentNode.remove();
    }else if (e.target.parentNode.classList.contains("data")){
        e.target.innerText = newTodo.value;
    }

})

finishedList.addEventListener("click", function(e){
    if (e.target.type === "checkbox" && e.target.checked === false){
        todoLish.append(e.target.parentNode.parentNode);
    }else if (e.target.parentNode.classList.contains("close")){
        e.target.parentNode.parentNode.remove();
    }

})

search.addEventListener("keyup", function(e){
    for(let i = 0; i < todoListBody.querySelectorAll("tr").length ; i++){
        let tableRows = todoListBody.querySelectorAll("tr")[i].children[0];
        if( tableRows.textContent.toLowerCase().indexOf(search.value.toLowerCase()) > -1 && search.value != " "){
            tableRows.parentNode.style.display = "block";
        }else{
            tableRows.parentNode.style.display = "none";
        }
    }
})