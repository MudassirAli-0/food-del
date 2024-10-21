import express from 'express'
import { loginUser, regesterUser } from '../controllers/UserControlers.js'


const userRoutes = express.Router();


userRoutes.post('/register', regesterUser);
userRoutes.post('/login', loginUser)

export default userRoutes;
