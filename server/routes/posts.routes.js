import { Router } from "express";
import * as postContrllers from "../controllers/posts.controllers.js"

const router = Router()

router.post('/', postContrllers.crearPost)

router.get('/', postContrllers.obtenerPosts)

router.get('/:id', postContrllers.obtenerPostPorId)

router.delete('/:id', postContrllers.eliminarPostPorId)

router.put('/:id', postContrllers.actualizarPostPorId)


export default router;