import { Router } from "express";
import * as postContrllers from "../controllers/posts.controller.js"
import schemaPost  from "../schemas/posts.schema.js"
import schemaValidator from "../middlewares/schemaValidator.middleware.js"

const router = Router()

router.post('/', schemaValidator(schemaPost), postContrllers.crearPost)

router.get('/', postContrllers.obtenerPosts)

router.get('/:_id', postContrllers.obtenerPostPorId)

router.delete('/:_id', postContrllers.eliminarPostPorId)

router.put('/:_id', postContrllers.actualizarPostPorId)


export default router;