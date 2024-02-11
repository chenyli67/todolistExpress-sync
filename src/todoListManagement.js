import TodoList from './todoList.js'
const CONTENT_EMPTY_EXCEPTION = "The todo content can't be empty";
const ID_EMPTY_EXCEPTION = "The id can't be empty";
const TODO_NOT_FOUND = "Can't find the todo";
const todoList =  new TodoList();

export default class todoListManagement{

 addToDoList(req,res) {
    if(req.body.content === undefined || req.body.content === null ){
        res.status(400).send(CONTENT_EMPTY_EXCEPTION);
    }
    todoList.add(req.body.content,(todo)=>{
        res.send(todo);
    });
}

queryToDo(req,res){
    if(req.params.id ===undefined || req.params.id === null){

        res.status(400).send(ID_EMPTY_EXCEPTION);
    }
    todoList.queryToDo(req.params.id,(todo)=>{
    if(JSON.stringify(todo)===undefined){
        res.status(404).send(TODO_NOT_FOUND);
    }
    res.send(todo);
    });
}

queryToDos(req,res){
     todoList.queryToDos((todos)=>{
    if(JSON.stringify(todos)=="[]"){
        res.send(TODO_NOT_FOUND);
    }
    res.send(todos);
    });
}

remove(req,res){
    if(req.params.id ===undefined || req.params.id === null){
        res.status(400).send(ID_EMPTY_EXCEPTION);
    }
    todoList.queryToDo(req.params.id,(todo)=>{
        if(todo){
            todoList.delete(req.params.id,(todos)=>{
                res.send(todos);
            });
        }else{
            res.status(404).send(TODO_NOT_FOUND);
        }
    });
}

modify(req,res){
    if(req.body.id===undefined || req.body.id ===null){
        res.status(400).send(ID_EMPTY_EXCEPTION)
    }
    const toDoId = req.body.id;
     todoList.queryToDo(toDoId,(originalToDo)=>{
    if(originalToDo){
        if(req.body.content!=undefined && req.body.content!=null){
            originalToDo.modifyContent(req.body.content);};
        if(req.body.isDone !=undefined && (req.body.isDone!=null)){
            originalToDo.done(req.body.isDone)};
                res.send(originalToDo);
    }else{
        res.status(404).send(TODO_NOT_FOUND);}
    });
}
}


