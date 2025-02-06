import jwt from 'jwt-simple';
import { HeroModel } from "../../model/heroes/HeroModel";
import { UserHeroesModel } from '../../model/userHeroes/UserHeroesModel';


export async function addHero(req: any, res: any) {
    try {
        const { name, imageUrl } = req.body;
        const {user} = req.cookies;
        const secret = process.env.SECRET_JWT;

        if(!secret){
            return res.status(500).send({error: "Internal server error (code 3566)"})
        }

        if(!user){
            return res.status(401).send({error: "User not logged in"})
        }
        const userDecoded = jwt.decode(user, secret)
        if(!userDecoded){
            return res.status(500).send({error: "Internal server error (code 3567)"})
        }

        if (!name || !imageUrl) {
            throw new Error('Please fill all fields');
        }

        const hero = await HeroModel.create({
            name,
            imageUrl,
        })

        await UserHeroesModel.create(
            {
                userId: userDecoded._id,
                heroId: hero._id,
            }
        )
        
        return res.status(201).send({ message: "User registered successfully" });

    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}