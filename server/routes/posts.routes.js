import { Router } from "express";
import * as postContrllers from "../controllers/posts.controller.js"
import schemaPost  from "../schemas/posts.schema.js"
import schemaValidator from "../middlewares/schemaValidator.middleware.js"
import { authJWT } from "../middlewares/authjwt.js";

const router = Router()

router.post('/', authJWT, schemaValidator(schemaPost), postContrllers.crearPost)

router.get('/', postContrllers.obtenerPosts)

router.get('/:_id', postContrllers.obtenerPostPorId)

router.delete('/:_id', authJWT, postContrllers.eliminarPostPorId)

router.put('/:_id', authJWT, postContrllers.actualizarPostPorId)


export default router;