import { Request, Response } from 'express';
import TodoModel, { ITodo } from './todo.model';

class TodoController {
  public static async getAllTodos(req: Request, res: Response): Promise<void> {
    try {
      const todos: ITodo[] = await TodoModel.find();
      res.status(200).json({ todos });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public static async createTodo(req: Request, res: Response): Promise<void> {
    const { todo, description, completed, category, assigned } = req.body;
    try {
      const newTodo: ITodo = new TodoModel({ todo, description, completed, category, assigned });
      const savedTodo: ITodo = await newTodo.save();
      res.status(201).json({ todo: savedTodo });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public static async updateTodo(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { status } = req.body;
  
    try {
      const updatedTodo = await TodoModel
        .findByIdAndUpdate(id, { status }, { new: true })
        .lean() as ITodo;
  
      if (!updatedTodo) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }
  
      res.status(200).json({ todo: updatedTodo });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  public static async deleteTodo(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
  
    try {
      const deletedTodo = await TodoModel
        .findByIdAndDelete(id)
        .lean() as ITodo;
  
      if (!deletedTodo) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }
  
      res.status(200).json({ message: 'Todo deleted successfully', todo: deletedTodo });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  
}

export default TodoController;
