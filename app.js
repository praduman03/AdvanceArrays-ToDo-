var toDo=[]

var input=document.getElementById("input");

var button=document.getElementById("button");

var toDos=document.getElementById("todolist");

button.onclick = addTasks;

function addTasks(){
    toDo.push(input.value);
    input.value="";
    displayList();
}

function displayList(){
    toDos.innerHTML=" ";
    toDo.forEach(function(item,index){
        toDos.innerHTML+="<li>" + item + "<a onclick='edit(" + index + ")'>Edit></a>" + "<a onclick='deleteTask("+ index + ")'>&times &nbsp | </a></li>" ;
        
    })
}
function deleteTask(index){
    toDo.splice(index,1);
    displayList();
}

function edit(index){
    var updatedTask=prompt("Kindly update the task here");
    toDo.splice(index,1,updatedTask);
    displayList();

}