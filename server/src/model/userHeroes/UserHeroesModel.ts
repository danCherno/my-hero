import {Schema, model} from 'mongoose';

export const UserHeroesSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    heroId:{
        type: Schema.Types.ObjectId,
        ref: 'Hero'
    }
})

export const UserHeroesModel = model("Hero", UserHeroesSchema); // the connection to the DB collection