import { Router } from 'express';
import CategoryController from './category.controller';
import authenticateToken from './user.middleware';

const router: Router = Router();
router.use(authenticateToken)

router.get('/', CategoryController.getAllCategories);
router.post('/', CategoryController.createCategory);
router.put('/:id', CategoryController.updateCategory);
router.delete('/:id', CategoryController.deleteCategory);

export default router;