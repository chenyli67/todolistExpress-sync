import TimeTransfer from "./timeTransfer.js";
import Todo from "./Todo.js" 
export const timeTransfer = new TimeTransfer();
export default class TodoList{
constructor(){
    this.todoList= [];
}

add(todoContent,callback){ 
    this.todoList.push(new Todo(todoContent));
   var todo = this.todoList[this.todoList.length-1];
   callback(todo);

}

get length(){
    return this.todoList.length;
}

queryToDo(id,callback){
   var todo = this.todoList.find((todo)=>{
        return todo.id == id;
   });
   callback(todo);
}

queryToDos(callback){
    callback(this.todoList);
}

delete(id,callback){
     this.todoList = this.todoList.filter((todo)=>{
        return todo.id != id;
    });
    callback(this.todoList);
}

}


