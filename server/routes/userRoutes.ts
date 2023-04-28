import express from 'express';
import userController from '../controllers/userController.ts';
import authController from '../controllers/authController.ts';

const router = express.Router();

router.post('/signup', authController.signUp);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export default router;
