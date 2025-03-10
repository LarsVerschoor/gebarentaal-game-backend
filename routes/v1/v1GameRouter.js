import { Router } from "express";

const v1GameRouter = new Router();

v1GameRouter.get('/words/:id', async (req, res) =>{
    const id = req.params.id;
    // const word = await
})

// OPTIONS voor root
// v1GameRouter.options('/', async (req, res) => {
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//     res.setHeader("Allow", "GET, POST, OPTIONS");
//     res.status(204).send();
// });
//
// // OPTIONS voor specifieke ID
// v1GameRouter.options('/:id', async (req, res) => {
//     res.setHeader("Access-Control-Allow-Methods", "GET, DELETE, PUT, OPTIONS");
//     res.setHeader("Allow", "GET, DELETE, PUT, OPTIONS");
//     res.status(204).send();
// });
//
// // GET alle games
// v1GameRouter.get('/', async (req, res) => {
//     try {
//         const games = await Game.find({});
//         res.status(200).json({
//             items: games.map(game => ({
//                 ...game.toJSON(),
//                 _links: {
//                     self: { href: `${process.env.SERVER_URL}/games/${game._id}` },
//                 },
//             })),
//             _links: {
//                 self: { href: `${process.env.SERVER_URL}/games` },
//             },
//         });
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching games", error: error.message });
//     }
// });
//
// // GET game op ID
// v1GameRouter.get('/:id', async (req, res) => {
//     const id = req.params.id;
//     try {
//         const game = await Game.findById(id);
//         if (!game) {
//             return res.status(404).json({ message: "Game not found" });
//         }
//         res.status(200).json({
//             ...game.toJSON(),
//             _links: {
//                 self: { href: `${process.env.SERVER_URL}/games/${id}` },
//                 collection: { href: `${process.env.SERVER_URL}/games` },
//             },
//         });
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching game", error: error.message });
//     }
// });
//
// // DELETE game op ID
// v1GameRouter.delete('/:id', async (req, res) => {
//     const id = req.params.id;
//     try {
//         const game = await Game.findById(id);
//         if (!game) {
//             return res.status(404).json({ message: "Game not found" });
//         }
//         await game.deleteOne();
//         res.status(204).send();
//     } catch (error) {
//         res.status(500).json({ message: "Error deleting game", error: error.message });
//     }
// });
//
// // PUT (update) game op ID
// v1GameRouter.put('/:id', async (req, res) => {
//     const id = req.params.id;
//     try {
//         const updatedGame = await Game.findByIdAndUpdate(
//             id,
//             {
//                 title: req.body.title,
//                 description: req.body.description,
//                 developer: req.body.developer,
//             },
//             { new: true, runValidators: true }
//         );
//         if (!updatedGame) {
//             return res.status(404).json({ message: "Game not found" });
//         }
//         res.status(200).json({
//             ...updatedGame.toJSON(),
//             _links: {
//                 self: { href: `${process.env.SERVER_URL}/games/${id}` },
//                 collection: { href: `${process.env.SERVER_URL}/games` },
//             },
//         });
//     } catch (error) {
//         res.status(400).json({ message: "Error updating game", error: error.message });
//     }
// });
//
// // POST nieuwe game
// v1GameRouter.post('/', async (req, res) => {
//     const { title, description, developer } = req.body;
//     try {
//         const game = new Game({ title, description, developer });
//         await game.save();
//         res.status(201).json({
//             message: "Game created successfully",
//             game: {
//                 ...game.toJSON(),
//                 _links: {
//                     self: { href: `${process.env.SERVER_URL}/games/${game._id}` },
//                     collection: { href: `${process.env.SERVER_URL}/games` },
//                 },
//             },
//         });
//     } catch (error) {
//         res.status(400).json({ message: "Error creating game", error: error.message });
//     }
// });
//
// // POST seed games
// v1GameRouter.post('/seed', async (req, res) => {
//     try {
//         const games = [];
//         for (let i = 0; i < 10; i++) {
//             const game = new Game({
//                 title: faker.lorem.slug(),
//                 description: faker.lorem.text(),
//                 developer: faker.person.fullName(),
//             });
//             games.push(game.save());
//         }
//         await Promise.all(games);
//         res.status(201).json({ message: "Games seeded successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Error seeding games", error: error.message });
//     }
// });
//
// // DELETE alle games
// v1GameRouter.delete('/seed', async (req, res) => {
//     try {
//         await Game.deleteMany({});
//         res.status(200).json({ message: "All games have been deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Error deleting games", error: error.message });
//     }
// });





export default v1GameRouter;