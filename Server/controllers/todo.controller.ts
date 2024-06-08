import { Request, Response } from 'express';
import TodoModel, { ITodo } from '../models/todo.model';
import mongoose from 'mongoose';

declare module 'express-serve-static-core' {
  interface Request {
    user?: {
      _id: string;
      // Add other user properties if needed
    };
  }
}

class TodoController {
  public static async getAllTodos(req: Request, res: Response): Promise<void> {
    try {
      const todos: ITodo[] = await TodoModel.find().sort({ createdAt: -1 });
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public static async createTodo(req: Request, res: Response): Promise<void> {
    const { date, todo, description, status, category, assigned } = req.body;
    const emptyFields: string[] = [];

    if (!assigned) emptyFields.push('assigned');
    if (!todo) emptyFields.push('task');
    if (!description) emptyFields.push('description');
    if (!category) emptyFields.push('category');
    
    if (emptyFields.length > 0) {
      res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
      return;
    }

    try {
      const user_id = req.user?._id;
      const newTodo: ITodo = new TodoModel({ date, todo, description, status, category, assigned, user_id });
      const savedTodo: ITodo = await newTodo.save();
      res.status(201).json(savedTodo);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public static async updateTodo(req: Request, res: Response): Promise<void> {
    const { date, todo, description, status, category, assigned } = req.body;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ error: 'No such task' });
      return;
    }

    try {
      const updatedTodo: ITodo | null = await TodoModel.findByIdAndUpdate(
        id, 
        { date, todo, description, status, category, assigned, user_id: req.user?._id }, 
        { new: true }
      ).lean();
      
      if (!updatedTodo) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }

      res.status(200).json(updatedTodo);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public static async deleteTodo(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ error: 'No such task' });
      return;
    }

    try {
      const deletedTodo: ITodo | null = await TodoModel.findByIdAndDelete(id).lean();

      if (!deletedTodo) {
        res.status(404).json({ error: 'Task not found' });
        return;
      }

      res.status(200).json(deletedTodo);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default TodoController;
