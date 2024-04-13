import mongoose, { Schema, Document } from 'mongoose';

export interface ITodo extends Document {
  //text: string;
  //completed: boolean;
  //id: number,
  date: Date
  todo: string,
  description: string,
  status: string,
  category: string,
  assigned: string,
  user_id: string
}

const todoSchema: Schema = new Schema({
  //text: { type: String, required: true },
  //completed: { type: Boolean, default: false },
  //id: { type: Number, require: true },
  date: { type: String },
  todo: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String },
  category: { type: String },
  assigned: { type: String, required: true },
  user_id: { type: String, required: true },
}, {timestamps: true});

const TodoModel = mongoose.model<ITodo>('Todo', todoSchema);

export default TodoModel;
