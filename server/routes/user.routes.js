import { Router } from "express";
import * as userController from "../controllers/user.controller.js"


const router = Router()


router.post('/', userController.crearUser)

router.get("/", userController.obtenerUsers)

router.get("/:id", userController.obtenerUserPorId)

router.delete("/:id", userController.eliminarUserPorId)

router.put("/:id", userController.actualizarUserPorId)

export default router