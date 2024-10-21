import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRoutes from "./routes/UserRoutes.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;

// middelware
app.use(express.json());
app.use(cors());

//db connection
connectDb();

//api endpoints
app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'));
app.use('/api/user', userRoutes)
app.use("/api/cart", cartRouter)
app.use('/api/order', orderRouter)

app.get("/", (req, res) => {
  res.send("api working");
});

app.listen(port, () => {
  console.log("server is running on http://localhost:4000");
});
