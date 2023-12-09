const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/generate-text', async (req, res) => {
  try {
    const apiUrl = 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation';
    const requestData = {
      model: 'qwen-v1',
      input: {
        prompt: '你好'
      },
      parameters: {}
    };

    const response = await axios.post(apiUrl, requestData, {
      headers: {
        'Content-Type': 'application/json',
        // 如果需要在请求头中添加其他信息，可以在这里添加
      }
    });

    // 将 API 的响应转发给前端
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
