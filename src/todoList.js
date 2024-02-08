import TimeTransfer from "./timeTransfer.js";
import Todo from "./Todo.js" 
export const timeTransfer = new TimeTransfer();
export default class TodoList{
constructor(){
    this.todoList= [];
}

add(todoContent){ 
    this.todoList.push(new Todo(todoContent));
    return this.todoList[this.todoList.length-1];
}

get length(){
    return this.todoList.length;
}

queryToDo(id){
   return this.todoList.find((todo)=>{
        return todo.id == id;
   });
}

queryToDos(){
    return this.todoList;
}

delete(id){
    return this.todoList = this.todoList.filter((todo)=>{
        return todo.id != id;
    })
}

// modify(id,newContent){
//     return Object.assign(this.todoList[id-1],newContent);
// }
}


