import express from 'express'
import authMiddelWare from '../middelware/auth.js'
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from '../controllers/orderControlers.js'

const orderRouter = express.Router()

orderRouter.post('/place', authMiddelWare, placeOrder)
orderRouter.post('/verify', verifyOrder)
orderRouter.post('/userorders', authMiddelWare, userOrders)
orderRouter.get('/list',listOrders)
orderRouter.post('/status',updateStatus)

export default orderRouter;