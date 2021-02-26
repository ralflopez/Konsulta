import express from 'express';
import passport from 'passport';
import { frontend_url } from '../index';
const router = express.Router();

// GOOGLE
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
    // Successful authentication, redirect home.
    res.redirect(frontend_url);
});

// LOGOUT
router.get('/logout', function (req: any, res: any){
    req.session.destroy(function (err: any) {
        res.status(200).send(frontend_url);
    });
});

export default router;