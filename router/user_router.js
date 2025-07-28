const { Router } = require("express");
const { register, login, verifyCode } = require("../controller/user_ctr");

const userRouter = Router();

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     responses:
 *       200:
 *         description: User registered
 */
userRouter.post("/register", register);
/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     tags: [User]
 *     responses:
 *       200:
 *         description: User logged in
 */
userRouter.post("/login", login);
/**
 * @swagger
 * /verify_code:
 *   post:
 *     summary: Verify user code
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Code verified
 */
userRouter.post("/verify_code", verifyCode);

module.exports = userRouter;
// userRouter.post("/verify_code", verifyCode);
// module.exports = userRouter;
