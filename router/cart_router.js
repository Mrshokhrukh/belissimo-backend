const { Router } = require('express');
const { cart, getCarts, deleteCart } = require('../controller/cart_ctr');
const requireAdmin = require('../middleware/tokenChecker');

const cartRouter = Router();

/**
 * @swagger
 * /add_cart:
 *   post:
 *     summary: Add a new cart
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Cart added
 */
cartRouter.post('/add_cart', requireAdmin, cart);
/**
 * @swagger
 * /get_cart:
 *   get:
 *     summary: Get all carts
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of carts
 */
cartRouter.get('/get_cart', requireAdmin, getCarts);
/**
 * @swagger
 * /delete_cart/{id}:
 *   delete:
 *     summary: Delete a cart by ID
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cart deleted
 */
cartRouter.delete('/delete_cart/:id', requireAdmin, deleteCart);

module.exports = cartRouter;
