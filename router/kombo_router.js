const {Router} = require("express")
const requireAdmin = require("../middleware/tokenChecker")
const { addKombo, updateKombo, deleteKombo } = require("../controller/kombo_ctr")

const komboRouter = Router()

/**
 * @swagger
 * /add_kombo:
 *   post:
 *     summary: Add a new kombo
 *     tags: [Kombo]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Kombo added
 */
komboRouter.post("/add_kombo", requireAdmin, addKombo)
/**
 * @swagger
 * /update_kombo/{id}:
 *   put:
 *     summary: Update a kombo by ID
 *     tags: [Kombo]
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
 *         description: Kombo updated
 */
komboRouter.put("/update_kombo/:id", requireAdmin, updateKombo)
/**
 * @swagger
 * /delete_kombo/{id}:
 *   delete:
 *     summary: Delete a kombo by ID
 *     tags: [Kombo]
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
 *         description: Kombo deleted
 */
komboRouter.delete("/delete_kombo/:id", requireAdmin, deleteKombo)

module.exports = komboRouter