const express = require("express");
const axios = require("axios");
const app = express();
const port = 5000;
const cors = require('cors');

const { readYamlFile } = require("./utils/yaml.js"); // Import readYamlFile function



// Replace this with your actual token retrieval logic
const getTokenFromYaml = () => {
    try {
        const yamlData = readYamlFile("./config/token.yaml");

        if (yamlData && yamlData.token) {
            return yamlData.token;
        } else {
            console.error("Token not found in the YAML file.");
            return null;
        }
    } catch (err) {
        console.error("Error reading token.yaml:", err.message);
        return null;
    }
};

const token = getTokenFromYaml();
if (!token) {
    console.error("Unable to retrieve the token from token.yaml. Exiting.");
    process.exit(1);
}

// Set the API key for dashscope
bearerToken = token;
app.use(cors());

app.use(express.json());

// app.use(cors({
//   origin: 'http://localhost:8080',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }));


app.post("/call", async (req, res) => {
    try {
        const question = req.body.question;
        const apiUrl =
            "https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation";
        const requestData = {
            model: "qwen-v1",
            input: {
                prompt: question,
            },
            parameters: {},
        };

        const response = await axios.post(apiUrl, requestData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${bearerToken}`,

            },
        });

        // 将 API 的响应转发给前端
        res.status(response.status).json({'code':200,'data':response.data.output});
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
