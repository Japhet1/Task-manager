import mongoose, { Schema, Document } from 'mongoose';

export interface ITodo extends Document {
  //text: string;
  //completed: boolean;
  //id: number,
  todo: string,
  description: string,
  status: string,
  category: string,
  assigned: string
}

const todoSchema: Schema = new Schema({
  //text: { type: String, required: true },
  //completed: { type: Boolean, default: false },
  //id: { type: Number, require: true },
  todo: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String },
  category: { type: String, required: true },
  assigned: { type: String, required: true },
}, {timestamps: true});

const TodoModel = mongoose.model<ITodo>('Todo', todoSchema);

export default TodoModel;
