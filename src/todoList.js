import TimeTransfer from "./timeTransfer.js";
import Todo from "./Todo.js" 
export const timeTransfer = new TimeTransfer();
export default class TodoList{
constructor(){
    this.todoList= [];
}

add(todoContent){ 
    this.todoList.push(new Todo(todoContent));
    return Promise.resolve(this.todoList[this.todoList.length-1]);
    }

get length(){
    return this.todoList.length;
}

queryToDo(id){
  return Promise.resolve(this.todoList.find((todo)=>{
    return todo.id == id}));
}

queryToDos(){
    return Promise.resolve(this.todoList);
}

delete(id){
    return Promise.resolve(this.todoList = this.todoList.filter((todo)=>{
        return todo.id != id;}))
}


}


