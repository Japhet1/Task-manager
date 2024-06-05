import { Request, Response } from 'express';
import TodoModel, { ITodo } from '../models/todo.model';
import mongoose from 'mongoose';

class TodoController {
  public static async getAllTodos(req: Request, res: Response): Promise<void> {
    try {
      //const user_id = req.user._id;
      //console.log(user_id)
      const todos: ITodo[] = await TodoModel.find().sort({ createdAt: -1 });
      res.status(200).json( todos );
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public static async createTodo(req: Request, res: Response): Promise<void> {
    const { date, todo, description, status, category, assigned } = req.body;
    const emptyFields: string[] = [];

    if (!assigned) {
        emptyFields.push('assigned');
    }
    if (!todo) {
        emptyFields.push('task');
    }
    if (!description) {
        emptyFields.push('description');
    }
    if (!category) {
        emptyFields.push('category');
  }
    if (emptyFields.length > 0) {
        res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
    }
    try {
      const user_id = req.user._id;
      const newTodo: ITodo = new TodoModel({ date, todo, description, status, category, assigned, user_id });
      const savedTodo: ITodo = await newTodo.save();
      res.status(201).json( savedTodo );
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public static async updateTodo(req: Request, res: Response): Promise<void> {
    const user_id = req.user._id;
    const { date, todo, description, status, category, assigned } = req.body;
    const { id } = req.params;
    //const { status } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ error: 'No such task' });
    }
    try {
      // const updatedTodo = await TodoModel.findByIdAndUpdate(id, { date, todo, description, status, category, assigned, user_id }, { new: true }).lean() as ITodo;
      const updatedTodo: ITodo | null = await TodoModel.findOneAndUpdate({ _id: id }, {
        ...req.body
      });
      if (!updatedTodo) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }
  
      res.status(200).json( updatedTodo );
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
      //const deletedTodo = await TodoModel.findByIdAndDelete(id).lean() as ITodo;
      const deletedTodo: ITodo | null = await TodoModel.findOneAndDelete({ _id: id });
      if (!deletedTodo) {
        res.status(404).json({ error: 'Taask not found' });
        return;
      }
  
      res.status(200).json(deletedTodo);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  
}

export default TodoController;


