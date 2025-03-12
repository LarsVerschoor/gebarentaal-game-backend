const fs = require("fs").promises;
const path = require("path");

const modelController = {
    getAll: async (req, res) => {
        try {

            const modelsDir = path.join(__dirname, "../models"); // Adjust path if needed
            const files = await fs.readdir(modelsDir);

            // Filter only JSON files
            const jsonFiles = files.filter(file => file.endsWith(".json"));

            // Read and parse all JSON files
            const jsonData = await Promise.all(
                jsonFiles.map(async (file) => {
                    const filePath = path.join(modelsDir, file);
                    const data = await fs.readFile(filePath, "utf-8");
                    return JSON.parse(data);
                })
            );

            res.json(jsonData); // Send all JSON data as response

        } catch (error) {
            console.error("Error reading JSON files:", error);
            res.status(500).json({error: "Failed to load JSON files"});
        }
    },

    get: async (req, res) => {
        try {
            const filename = req.params.id; // Get filename from URL parameter

            if (!filename) {
                return res.status(400).json({error: "Filename is required"});
            }

            const modelsDir = path.join(__dirname, "../models"); // Adjust path if needed
            const filePath = path.join(modelsDir, filename);

            // Check if file exists and is a JSON file
            if (!filename.endsWith(".json")) {
                return res.status(400).json({error: "Only JSON files are allowed"});
            }

            const data = await fs.readFile(filePath, "utf-8");
            const jsonData = JSON.parse(data);

            res.json(jsonData); // Send JSON data as response

        } catch (error) {
            console.error("Error reading JSON file:", error);
            res.status(404).json({error: "JSON file not found"});
        }

    }
};

module.exports = modelController;
