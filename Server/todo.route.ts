import { Router } from 'express';
import TodoController from './todo.controller';
import authenticateToken from './auth.middleware';

const router: Router = Router();

// router.get('/', authenticateToken, TodoController.getAllTodos);
// router.post('/', authenticateToken, TodoController.createTodo);
// router.put('/:id', authenticateToken, TodoController.updateTodo);
// router.delete('/:id', authenticateToken, TodoController.deleteTodo);
router.get('/', TodoController.getAllTodos);
router.post('/', TodoController.createTodo);
router.put('/:id', TodoController.updateTodo);
router.delete('/:id', TodoController.deleteTodo);

export default router;
