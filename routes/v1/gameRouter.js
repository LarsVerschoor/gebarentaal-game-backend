import { Router } from "express";
const gameRouter = new Router();

gameRouter.get('/login', async (req, res) =>{
    // const id = req.params.id;
    // const word = await
})

gameRouter.get('/logout', async (req, res) =>{
    // const id = req.params.id;
    // const word = await
})

gameRouter.options('/character/:id', async (req, res) =>{
    const id = req.params.id;
    const character = await Character.findById(id);
    // const word = await
})

gameRouter.get('/character/:id', async (req, res) =>{
    const id = req.params.id;
    const character = await Character.findById(id);
    // const word = await
})

gameRouter.post('/character/:id', async (req, res) =>{
    const id = req.params.id;
    const character = await Character.findById(id);
    // const word = await
})

gameRouter.put('/character/:id', async (req, res) =>{
    const id = req.params.id;
    const character = await Character.findById(id);
    // const word = await
})

gameRouter.delete('/character/:id', async (req, res) =>{
    const id = req.params.id;
    const character = await Character.findById(id);
    // const word = await
})
gameRouter.get('/public/model', async (req, res) =>{
    const id = req.params.id;
    // const word = await
})
export default gameRouter;