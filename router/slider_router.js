const Router = require('express');
const requireAdmin = require('../middleware/tokenChecker');
const {
  createSlide,
  getSlides,
  updateSlide,
  deleteSlide,
} = require('../controller/slider-ctr');

const slideRouter = Router();

/**
 * @swagger
 * /create_slide:
 *   post:
 *     summary: Create a new slide
 *     tags: [Slider]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Slide created
 */
slideRouter.post('/create_slide', requireAdmin, createSlide);
/**
 * @swagger
 * /get_slides:
 *   get:
 *     summary: Get all slides
 *     tags: [Slider]
 *     responses:
 *       200:
 *         description: List of slides
 */
slideRouter.get('/get_slides', getSlides);
/**
 * @swagger
 * /update_slide/{id}:
 *   put:
 *     summary: Update a slide by ID
 *     tags: [Slider]
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
 *         description: Slide updated
 */
slideRouter.put('/update_slide/:id', requireAdmin, updateSlide);
/**
 * @swagger
 * /delete_slide/{id}:
 *   delete:
 *     summary: Delete a slide by ID
 *     tags: [Slider]
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
 *         description: Slide deleted
 */
slideRouter.delete('/delete_slide/:id', requireAdmin, deleteSlide);

module.exports = slideRouter;
