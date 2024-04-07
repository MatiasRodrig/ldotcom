import { Router } from 'express'
import * as authController from "../controllers/auth.controller.js"

const router = Router()


router.post('/registro', authController.registro)

router.post('/login', (req, res) => {
    res.send('<h1>Login</h1>')
})


export default router;