const { Router } = require('express');
const {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  // pizza product
  createPizzaProduct,
  getPizzaProducts,
  updatePizzaProduct,
  deletePizzaProduct,
} = require('../controller/product_ctr');
const requireAdmin = require('../middleware/tokenChecker');

const productRouter = Router();

/**
 * @swagger
 * /add_product:
 *   post:
 *     summary: Add a new product
 *     tags: [Product]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Product added
 */
productRouter.post('/add_product', requireAdmin, createProduct);
/**
 * @swagger
 * /get_all_products:
 *   get:
 *     summary: Get all products
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: List of products
 */
productRouter.get('/get_all_products', getAllProducts);
/**
 * @swagger
 * /get_one_product/{id}:
 *   get:
 *     summary: Get one product by ID
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product details
 */
productRouter.get('/get_one_product/:id', getOneProduct);
/**
 * @swagger
 * /update_product/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Product]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product updated
 */
productRouter.put('/update_product/:id', requireAdmin, updateProduct);
/**
 * @swagger
 * /delete_product/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Product]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted
 */
productRouter.delete('/delete_product/:id', requireAdmin, deleteProduct);
///////////////// pizzaProduct
/**
 * @swagger
 * /add_pizza_product:
 *   post:
 *     summary: Add a new pizza product
 *     tags: [PizzaProduct]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Pizza product added
 */
productRouter.post('/add_pizza_product', requireAdmin, createPizzaProduct);
/**
 * @swagger
 * /get_pizza_products/{id}:
 *   get:
 *     summary: Get pizza products by ID
 *     tags: [PizzaProduct]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of pizza products
 */
productRouter.get('/get_pizza_products/:id', getPizzaProducts);
/**
 * @swagger
 * /update_pizza_product:
 *   put:
 *     summary: Update a pizza product
 *     tags: [PizzaProduct]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Pizza product updated
 */
productRouter.put('/update_pizza_product', requireAdmin, updatePizzaProduct);
/**
 * @swagger
 * /delete_pizza_product:
 *   delete:
 *     summary: Delete a pizza product
 *     tags: [PizzaProduct]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Pizza product deleted
 */
productRouter.delete('/delete_pizza_product', requireAdmin, deletePizzaProduct);

module.exports = productRouter;
