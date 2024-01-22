import {Router} from 'express';

const router = Router()

router.get('/jobs', (req, res) => {
    res.json({message: 'working from the jerrrrbs'})
})
router.get('/jobs/:id', () => {})

export default router