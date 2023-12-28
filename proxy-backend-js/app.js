const express = require("express");
const axios = require("axios");
const parseString = require("xml2js").parseString;
const app = express();
const port = 5000;
const cors = require("cors");
const util = require("util");
const parseStringAsync = util.promisify(parseString);

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

async function fetchRSS(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching RSS feed:", error);
        throw error;
    }
}

// 解析RSS feed的函数
async function parseRSS(xmlData) {
    return new Promise((resolve, reject) => {
        parseStringAsync(xmlData, { explicitArray: false }, (err, result) => {
            if (err) {
                console.error("Error parsing RSS feed:", err);
                reject(err);
                return;
            }

            // 提取所需的信息
            const items = result.rss.channel.item;
            const res = [];
            for (let i = 0; i < items.length; i++) {
                const title = items[i].title;
                const link = items[i].link;
                const pubDate = items[i].pubDate;
                res.push({ title: title, link: link, pubDate: pubDate });
            }

            resolve(res);
        });
    });
}

app.get("/rss", async (req, res) => {
    try {
        const rssFeedURL = req.query.rssurl;
        console.log("rssFeedURL:" + rssFeedURL);
        const xmlData = await fetchRSS(rssFeedURL);
        const data = await parseRSS(xmlData);
        console.log("data:" + data);
        res.status(200).json({ code: 200, data: data });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// 用于获取Atom feed的函数
async function fetchAtomFeed(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching Atom feed:", error);
        throw error;
    }
}

// 解析Atom feed的函数
async function parseAtomFeed(xmlData) {
    return new Promise((resolve, reject) => {
        parseStringAsync(xmlData, { explicitArray: false }, (err, result) => {
            if (err) {
                console.error("Error parsing Atom feed:", err);
                return;
            }

            // 提取所需的信息
            const entries = result.feed.entry;
            var res = [];
            for (let i = 0; i < entries.length; i++) {
                //   console.log(entries[i])
                const title = entries[i].title;
                const link = entries[i].link["$"].href;
                const updated = entries[i].updated;
                const published = entries[i].published;

                console.log(
                    "title: " +
                        title +
                        ", link: " +
                        link +
                        ",published:" +
                        published +
                        ",updated:" +
                        updated
                );
                res.push({
                    title: title,
                    link: link,
                    published: published,
                    updated: updated,
                });
            }
            resolve(res);
        });
    });
}
app.get("/atom", async (req, res) => {
    try {
        const atomFeedURL = req.query.atomurl;
        console.log("atomFeedURL:" + atomFeedURL);
        const xmlData = await fetchAtomFeed(atomFeedURL);
        const data = await parseAtomFeed(xmlData);
        console.log("data:" + data);
        res.status(200).json({ code: 200, data: data });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

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
        res.status(response.status).json({
            code: 200,
            data: response.data.output,
        });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
app.get("/playlist/detail", async (req, res) => {
    try {
        // 获取查询参数
        const id = req.query.id;
        const s = req.query.s;

        // 检查是否存在必要的参数
        if (!id || !s) {
            return res
                .status(400)
                .send("Missing required parameters: id and s");
        }

        // 构建代理请求的 URL
        const apiUrl = `https://music.163.com/api/v6/playlist/detail?id=${id}&s=${s}`;

        // 发送代理请求
        const response = await axios.get(apiUrl);

        // 将代理得到的响应发送给客户端
        res.json(response.data);
    } catch (error) {
        console.error("代理请求出错：", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
