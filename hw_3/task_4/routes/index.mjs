//  З використанням роутерів та шаблонізаторів розробити інтернет магазин з такими сторінками:
// 1) about – як статична сторінка (розмістити у public)
// 2) сторінка додавання продукту (поки лише відображаємо поля для заповнення інформації)
// 3) сторінка відображення продуктів (у формі таблиці і списку)
// 4) головна – знаходяться посилання на сторінки about і products і addproducts

import {Router} from 'express';
import ProdController from '../controller/prodController.mjs';

const router = Router();

router.get('/products', ProdController.product);

router.get('/addproducts', (req, res) => {
  res.render('prodAdd', {
    title: 'Add Product',
  });
});

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
  });
});

export default router;
