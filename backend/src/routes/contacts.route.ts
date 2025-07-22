import { Hono } from 'hono';
import { ContactController } from '../controllers/contacts.controller.ts';
import { validate } from '../middlewares/validate.ts';
import { contactSchema } from '../validators/contact.schema.ts';

const router = new Hono();
const controller = new ContactController();

router.post('/', validate(contactSchema), (c) => controller.create(c));
router.get('/', (c) => controller.list(c));
router.get('/:id', (c) => controller.getById(c));
router.patch('/:id', (c) => controller.update(c));
router.delete('/:id', (c) => controller.delete(c));

export default router;