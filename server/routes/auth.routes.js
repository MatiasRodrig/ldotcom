import { Router } from 'express'
import * as authController from "../controllers/auth.controller.js"
import * as verifyRegistro from '../middlewares/verifySignUp.js'

const router = Router()


router.post('/registro', [verifyRegistro.checkDuplicateUsername, verifyRegistro.checkRoleExistence], authController.registro)

router.post('/login', authController.logueo)


export default router;