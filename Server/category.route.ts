import { Router } from 'express';
import CategoryController from './category.controller';

const router: Router = Router();

router.get('/', CategoryController.getAllCategories);
router.post('/', CategoryController.createCategory);
router.put('/:id', CategoryController.updateCategory);
router.delete('/:id', CategoryController.deleteCategory);

export default router;