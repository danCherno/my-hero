import { HeroModel } from "../../model/heroes/HeroModel";

export async function addHero(req: any, res: any) {
    try {
        const { name, imageUrl } = req.body;

        if (!name || !imageUrl) {
            throw new Error('Please fill all fields');
        }

        await HeroModel.create({
            name,
            imageUrl,
        })
        
        return res.status(201).send({ message: "User registered successfully" });

    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}