import { Router } from 'express'

const router = Router()


router.post('/register', (req, res) => {
    res.send('<h1>Registro</h1>')
})

router.post('/login', (req, res) => {
    res.send('<h1>Login</h1>')
})


export default router;