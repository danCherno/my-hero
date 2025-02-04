import {Schema, model} from 'mongoose';

export const HeroSchema = new Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    imageUrl:{
        type:String,
    },
    rating:{
        type:Number,
        default: 0
    }
})

export const HeroModel = model("Hero", HeroSchema); // the connection to the DB collection