import TodoList from './todoList.js'
import Todo from './Todo.js'
const todoList =  new TodoList();

export default class todoListManagement{

 addToDoList(req,res) {
    if(req.body.content === undefined || req.body.content === null ){
        res.status(400).send("The todo content can't be empty")
        return;
    }
    var todo = todoList.add(req.body.content);
    res.send(todo);
}

queryToDo(req,res){
    if(req.params.id ===undefined || req.params.id === null){
        res.status(400).send("The id can't be empty");
    }
    var todo = todoList.queryToDo(req.params.id);
    console.log(JSON.stringify(todo));
    if(JSON.stringify(todo)===undefined){
        res.status(404).send("can't find the todo,please check the id");
    }
    res.send(todo);
}

queryToDos(req,res){
    var todos = todoList.queryToDos();
    console.log(todos);
        if(JSON.stringify(todos)=="[]"){
        res.send("There is no have todo");
    }
    res.send(todos);
}
remove(req,res){
    if(req.params.id ===undefined || req.params.id === null){
        res.status(400).send("The id can't be empty");
    }
    var todo = todoList.queryToDo(req.params.id);
    if(todo){
        res.send(todoList.delete(req.params.id));
    }else{
        res.status(404).send("can't find the todo,please check the id");
    }
}
modify(req,res){
    console.log('开始更新操作');
    if(req.body.id===undefined || req.body.id ===null){
        res.status(400).send("please check the todo id")
    }
    const toDoId = req.body.id;
    console.log(toDoId);
    var originalToDo = todoList.queryToDo(toDoId);
    console.log(originalToDo)
    if(originalToDo){
        if(req.body.content!=undefined && req.body.content!=null){
            originalToDo.modifyContent(req.body.content);
        }
        if(req.body.isDone !=undefined && (req.body.isDone!=null)){
            originalToDo.done(req.body.isDone);
        }
        res.send(originalToDo);
        console.log(todoList);
    }else{
        res.status(404).send("can't find the todo,please check the id")}
    }
}


