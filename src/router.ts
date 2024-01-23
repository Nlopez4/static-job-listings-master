import express from 'express'
import {Router} from 'express';
const path = require('path');
const router = Router()

router.use(express.static(path.join(__dirname, 'app')));
router.get('/jobs', (req, res) => {
    res.sendFile(path.join(__dirname, 'app/jobs.html'));
})
router.get('/jobs/:id', () => {})

export default router