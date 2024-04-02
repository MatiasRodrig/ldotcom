import { Router } from "express";
import * as userController from "../controllers/user.controller.js"
import { schemaRegister } from "../schemas/auth.schema.js"
import  schemaValidator  from "../middlewares/schemaValidator.middleware.js"



const router = Router()


router.post('/', schemaValidator(schemaRegister), userController.crearUser)

router.get("/", userController.obtenerUsers)

router.get("/:id", userController.obtenerUserPorId)

router.delete("/:id", userController.eliminarUserPorId)

router.put("/:id", userController.actualizarUserPorId)

export default router