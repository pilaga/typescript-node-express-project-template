import { Router } from 'express';
import { createExample, deleteExample, getExamples, getExample, updateExample } from '../controllers/exampleController';

const router = Router();

//operations supported for example
router.post('/', createExample);
router.get('/', getExamples);
router.get('/:id', getExample);
router.patch('/:id', updateExample);
router.delete('/:id', deleteExample);

export default router;