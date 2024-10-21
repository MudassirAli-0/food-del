import mongoose from 'mongoose'


export const connectDb = async()=>{
    await mongoose.connect('mongodb+srv://mudassir:123@cluster0.yxj8kws.mongodb.net/food-website').then(()=>{
        console.log('Db connected');
        
    })
}