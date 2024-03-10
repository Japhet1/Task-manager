import { Request, Response } from 'express';
import CategoryModel, { ICategory } from './category.model';

class CategoryController {
  public static async getAllCategories(req: Request, res: Response): Promise<void> {
    try {
      const categories: ICategory[] = await CategoryModel.find();
      res.status(200).json({ categories });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public static async createCategory(req: Request, res: Response): Promise<void> {
    const { category } = req.body;
    try {
      const newCategory: ICategory = new CategoryModel({ category });
      const savedCategory: ICategory = await newCategory.save();
      res.status(201).json({ category: savedCategory });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public static async updateCategory(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { completed } = req.body;
  
    try {
      const updatedCategory = await CategoryModel
        .findByIdAndUpdate(id, { completed }, { new: true })
        .lean() as ICategory;
  
      if (!updatedCategory) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }
  
      res.status(200).json({ todo: updatedCategory });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  public static async deleteCategory(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
  
    try {
      const deletedCategory = await CategoryModel
        .findByIdAndDelete(id)
        .lean() as ICategory;
  
      if (!deletedCategory) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }
  
      res.status(200).json({ message: 'Todo deleted successfully', category: deletedCategory });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  
}

export default CategoryController;
