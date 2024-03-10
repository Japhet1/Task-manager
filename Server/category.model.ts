import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  category: string,
}

const categorySchema: Schema = new Schema({
  category: { type: String, required: true },
}, {timestamps: true});

const CategoryModel = mongoose.model<ICategory>('Category', categorySchema);

export default CategoryModel;
