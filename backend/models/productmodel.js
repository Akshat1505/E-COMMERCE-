import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{type: String , required: true},
    desc:{type: String , required: true},
    price:{type: Number , required: true},
    image:{type: Array , required: true},
    Category:{type: String , required: true},
    subCategory:{type: String , required: true},
    Sizes:{type: Array , required: true},
    bestSeller:{type: Boolean },
    date:{type: Number, required: true },

})