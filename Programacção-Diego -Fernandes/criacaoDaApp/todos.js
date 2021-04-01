
var app=document.getElementById('app');
var listElement= app.querySelector("ul");
var inputElement=app.querySelector("input");
var buttonElement=app.querySelector("button");


var todos = [
    "Fazer café",
    "Estudar JavaScript",
    "Acessar comunidade da Rocketseat"
];


function renderTodos(){
    listElement.innerHTML=" ";
    for (todo of todos){
        var todoElement=document.createElement("li");
        var todoText=document.createTextNode(todo);

        var linkElement= document.createElement("a");
        var linkTex=document.createTextNode("Excluir");
        linkElement.setAttribute("href","#");
        



        
        linkElement.appendChild(linkTex);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        
        listElement.appendChild(todoElement);
    }
}

renderTodos();


function addTodo(){
    var todoText=inputElement.value;
    todos.push(todoText);
    inputElement.value="";
    renderTodos();   
}

buttonElement.onclick=addTodo;


