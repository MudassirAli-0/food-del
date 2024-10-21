import express from 'express'

import { addToCart, removeToCart, getCart } from '../controllers/cartControlers.js'
import authMiddelWare from '../middelware/auth.js'

const cartRouter = express.Router()

cartRouter.post('/add',authMiddelWare, addToCart)
cartRouter.post('/remove',authMiddelWare, removeToCart)
cartRouter.post('/get',authMiddelWare, getCart)


export default cartRouter;