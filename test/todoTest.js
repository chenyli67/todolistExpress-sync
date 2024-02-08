import { expect  } from 'chai';
import ToDo from '../src/Todo.js'
import { describe } from 'mocha';
describe('ToDo List', ()=> {
  describe('Modify',()=>{
    it('should modify isDone status successfully',()=>{
      //given
      var todo = new ToDo('测试修改');
      console.log(todo);
      //when
      todo.done();
       //then
       expect(todo.isDone).to.equal(true);
       expect(todo.content).to.equal('测试修改')
    });
    it('should modify content successfully',()=>{
        //given
        var todo = new ToDo('测试修改');
        console.log(todo);
        //when
        todo.modifyContent('新内容');
         //then
        expect(todo.content).to.equal('新内容')
      });

  });
});
