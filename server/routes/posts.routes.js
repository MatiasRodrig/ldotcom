import { Router } from "express";

const router = Router()


router.get('/posts', (req, res) => {
res.send([])
})

router.post('/posts', (req, res) => {
    res.send('Post creado')
})

router.delete('/posts', (req, res) => {
    res.send('Post borrado')
})

router.put('/posts', (req, res) => {
    res.send('Post actualizado')
})

router.get('/posts:id', (req, res) => {
    res.send('Post consultado')
})

export default router;