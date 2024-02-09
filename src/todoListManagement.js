import TodoList from './todoList.js'
const todoList =  new TodoList();
const BODY_EMPTY_EXCEPTION = "The body can not be empty";
const ID_EMPTY_EXCEPTION="The id can't be empty";
const TODO_NOT_FOUND = "Can't find the todo";
export default class todoListManagement{

 async addToDoList(req,res) {
    try{
    if(req.body.content === undefined || req.body.content === null ){
        throw BODY_EMPTY_EXCEPTION;}
    var todo = await  todoList.add(req.body.content);
    res.send(todo);
    }catch(err){
        res.status(404).send(err);
    }
}

async queryToDo(req,res){
    try{
        if(req.params.id ===undefined || req.params.id === null){
            throw ID_EMPTY_EXCEPTION;
        }
        var todo =  await todoList.queryToDo(req.params.id);
        if(JSON.stringify(todo)===undefined){
            throw TODO_NOT_FOUND;
        }
        res.send(todo);
    }catch(err){
        res.send(err);
    }
}

async queryToDos(req,res){
    try{
        var todos =await  todoList.queryToDos();
        if(JSON.stringify(todos)=="[]"){
            throw TODO_NOT_FOUND;
        }
        res.send(todos);
    }catch(err){
        res.send(err);
    }
       
}

 async remove(req,res){
    try{
        if(req.params.id ===undefined || req.params.id === null){
           throw ID_EMPTY_EXCEPTION;
        }
        var todo = await todoList.queryToDo(req.params.id);
        if(todo){
            res.send(await todoList.delete(req.params.id));
        }else{
            throw TODO_NOT_FOUND;
        }
    }catch(err){
        res.send(err);
    }
}


async modify(req,res){
    try{
        if(req.body.id===undefined || req.body.id ===null){
           throw ID_EMPTY_EXCEPTION;
        }
        var originalToDo =await todoList.queryToDo(req.body.id);
        if(originalToDo){
            originalToDo.modifyStatusAndContent(req.body.content,req.body.isDone)
            res.send(originalToDo);
        }else{
            throw TODO_NOT_FOUND;
        }
    }catch(err){
        res.send(err);
    }
}

}

    