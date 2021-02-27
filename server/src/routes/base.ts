import express from 'express';
const router = express.Router();

router.get('/getuser', (req, res) => {
    res.send(req.user);
});

export default router;