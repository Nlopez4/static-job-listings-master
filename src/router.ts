import {Router} from 'express';
const path = require('path');
const router = Router()

router.get('/jobs', (req, res) => {
    res.sendFile(path.join(__dirname, 'app/jobs.html'));
})
router.get('/jobs/:id', () => {})

export default router