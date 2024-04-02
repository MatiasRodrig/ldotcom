import { Router } from "express";
import * as postContrllers from "../controllers/posts.controllers.js"

const router = Router()

router.post('/', postContrllers.crearPost)

router.get('/', postContrllers.obtenerPosts)

router.get('/:_id', postContrllers.obtenerPostPorId)

router.delete('/:_id', postContrllers.eliminarPostPorId)

router.put('/:_id', postContrllers.actualizarPostPorId)


export default router;