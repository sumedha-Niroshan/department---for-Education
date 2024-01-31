import express from 'express';
import {testUser} from '../controllers/user.controller.js'

const router = express.Router();


router.get('/user' ,testUser )


export default router;