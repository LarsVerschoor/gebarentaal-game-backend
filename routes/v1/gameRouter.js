import { Router } from "express";

const gameRouter = new Router();

gameRouter.get('/words/:id', async (req, res) =>{
    const id = req.params.id;
    // const word = await
})
export default gameRouter;