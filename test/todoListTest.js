import { expect  } from 'chai';
import TodoList from '../src/todoList.js'
import { describe } from 'mocha';
describe('ToDo List', ()=> {
  describe('Add',  ()=> {
    it('should add a todo to todolist successfully', ()=> {
      //given
      var todoList = new TodoList();
      //when
       var todo = todoList.add('测试add方法');
       console.log(todo);
      //then
      expect(todoList.length).to.equal(1);
      expect(todo.content).to.equal('测试add方法');
      expect(todo.createAt).to.exist;
      expect(todo.isDone).to.be.false;
});
    it('should add 2 todos to todolist successfully', ()=> {
      //given
      var todoList = new TodoList();
      //when
       var todo = todoList.add('测试add方法1');
       var todo2 =todoList.add('测试add方法2');
      //then
      expect(todoList.length).to.equal(2);
      expect(todo.content).to.equal('测试add方法1');
      expect(todo.createAt).to.exist;
      expect(todo.isDone).to.be.false;
      expect(todo2.content).to.equal('测试add方法2');
      expect(todo2.createAt).to.exist;
      expect(todo2.isDone).to.be.false;
       });

  });
  describe('Get',()=>{
    it('should find todo with id successfully',()=>{
      //given
      var todoListObject = new TodoList();
      todoListObject.todoList = [{"id": 1,"content": "测试查询单个todo","createAt": "2024-02-04 14:32:25","updateAt": null,"isDone": false
    }];
      //when
       var todo = todoListObject.queryToDo(1);
       console.log(todo);
       //then
       expect(todo.content).to.equal("测试查询单个todo");
       expect(todo.isDone).to.equal(false);
       expect(todo.createAt).not.to.be.null;
      })
  });

  describe('Get',()=>{
    it('should find all todos successfully',()=>{
      //given
      var todoListObject = new TodoList();
      todoListObject.todoList = [{"id": 1,"content": "测试查询所有todo1","createAt": "2024-02-04 14:32:25","updateAt": null,"isDone": false
    },{"id": "2","content": "测试查询所有todo2","createAt": "2024-02-04 15:54:48","updateAt": null,"isDone": true}];
      //when
       var todos = todoListObject.queryToDos();

      //then
       expect(todos.length).to.equal(2);
       expect(todos[0].isDone).to.equal(false);
       expect(todos[0].content).to.equal('测试查询所有todo1');
       expect(todos[1].isDone).to.equal(true);
       expect(todos[1].content).to.equal('测试查询所有todo2');
       })
  });
  describe('Delete',()=>{
    it('should delete  todo with id successfully',()=>{
      //given
      var todoListObject = new TodoList();
      todoListObject.todoList = [{"id": 1,"content": "测试删除todo1","createAt": "2024-02-04 14:32:25","updateAt": null,"isDone": false
    },{"id": "2","content": "测试删除todo2","createAt": "2024-02-04 15:54:48","updateAt": null,"isDone": true}];
      //when
       var todos = todoListObject.delete(1);
       //then
       expect(todos.length).to.equal(1);
       expect(todos[0].isDone).to.equal(true);
       expect(todos[0].content).to.equal('测试删除todo2')
    })
  });
});
