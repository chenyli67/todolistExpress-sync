import express from 'express'
import todoListManagement from './src/todoListManagement.js'
var todoList = new todoListManagement();


const router = express.Router()

router.route('/todos').post(todoList.addToDoList);
router.route('/todos/:id').get(todoList.queryToDo);
router.route('/todos').get(todoList.queryToDos);
router.route('/todos/:id').delete(todoList.remove);
router.route('/todos').put(todoList.modify);


export { router }