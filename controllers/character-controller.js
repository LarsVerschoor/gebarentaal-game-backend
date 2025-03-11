const {Character} = require('../database/models');
// const { options } = require('../routes/v1/v1GameRouter');

const characterController = {
    getAll: (req, res) => {
        res.json(Character.findAll());
    },
    getById: (req, res) => {

        const id = req.params.id
     
        res.status(204).send();
    },
    options: (req, res) => {
        res.setHeader("Access-Control-Allow-Methods" , "OPTIONS,GET")
        res.setHeader("Allow", "OPTIONS,GET");
        res.status(204).send();
    },
    addChar:(req, res) => {
        // let cocktial = new Cocktail({
        //     name: req.body.name,
        //     description: req.body.description,
        //     ingredients: req.body.ingredients
        // });
        // if (!cocktial.name || !cocktial.description || !cocktial.ingredients){
        //     return res.status(400).send("name, body & ingredients can't be empty")
        // } else {
        //     await cocktial.save()
        //     res.status(201).json({
        //         message: cocktial
        //     });
        // }

        let character = new Character({
            is_numeric: req.body.is_numeric,
            value: req.body.value,
            image_path: req.body.image_path,
            video_path: req.body.video_path
        });
        if (!character.is_numeric || 
            !character.value || 
            !character.image_path || 
            !character.video_path){
                return res.status(400).send("fields cannot be empty")
    
             } else {
            res.status(201).json({
                message: 'character created'
            })
         }
    }

}

module.exports = characterController;