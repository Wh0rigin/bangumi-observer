const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function scrapeWebsite(url) {
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  };

  try {
    // 发送网络请求获取HTML内容
    const response = await axios.get(url, { headers });
    const $ = cheerio.load(response.data);

    const posts = $('.post-body');
    const result = [];

    posts.each((_, post) => {
      const futureIntroList = $(post).find('.future_intro');

      futureIntroList.each((index, intro) => {
        const title = $(intro).text().trim();
        const items = [];

        let nextElement = $(intro).next();

        while (nextElement && nextElement.prop('tagName') !== 'P' && !nextElement.hasClass('future_intro')) {
          if (nextElement.prop('tagName') === 'DIV' && nextElement.find('td.future_title_').length > 0) {
            const futureTitle = nextElement.find('td.future_title_').text().trim();
            const futureDate = nextElement.find('p[class^="future_date"]').text().trim();
            const futureType = nextElement.find('p[class^="future_type_"]').text().trim();
            const imgUrl = nextElement.find('img').attr('src');

            const item = {
              future_title: futureTitle,
              future_date: futureDate,
              future_type: futureType,
              img_url: imgUrl,
            };

            items.push(item);
          }

          nextElement = nextElement.next();
        }

        result.push({ title, items });
      });
    });

    return result;
  } catch (error) {
    console.error('Error:', error.message);
    return [];
  }
}

const url = 'https://yuc.wiki/new/';

scrapeWebsite(url)
  .then((data) => {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync('output.json', jsonData, 'utf-8');
    console.log('done');
  })
  .catch((error) => console.error('Error:', error.message));
