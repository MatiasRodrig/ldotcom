import { Router } from "express";
import * as userController from "../controllers/user.controller.js"
import { schemaRegister } from "../schemas/auth.schema.js"
import schemaValidator from "../middlewares/schemaValidator.middleware.js"
import * as verifyRegistro from '../middlewares/verifySignUp.js'


const router = Router()


router.post('/', [verifyRegistro.checkDuplicateUsername, verifyRegistro.checkRoleExistence], schemaValidator(schemaRegister), userController.crearUser)

router.get("/", userController.obtenerUsers)

router.get("/:id", userController.obtenerUserPorId)

router.delete("/:id", userController.eliminarUserPorId)

router.put("/:id", userController.actualizarUserPorId)

export default router