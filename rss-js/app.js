const axios = require("axios");
const parseString = require("xml2js").parseString;

// 用于获取RSS feed的函数
function fetchRSS(url, callback) {
    axios
        .get(url)
        .then((response) => {
            callback(response.data);
        })
        .catch((error) => {
            console.error("Error fetching RSS feed:", error);
        });
}

// 解析RSS feed的函数
function parseRSS(xmlData) {
    // console.log(xmlData);
    parseString(xmlData, { explicitArray: false }, (err, result) => {
        if (err) {
            console.error("Error parsing RSS feed:", err);
            return;
        }

        // 提取所需的信息
        const items = result.rss.channel.item;
        for (let i = 0; i < items.length; i++) {
            const title = items[i].title;
            const link = items[i].link;
            console.log("Title: " + title + ", Link: " + link);
        }
    });
}

// 调用fetchRSS函数，并在获取到数据后调用parseRSS函数
// const rssFeedURL = "https://bbs.acgrip.com/forum.php?mod=rss&fid=37&auth=0";
const rssFeedURL = "https://bgm.tv/feed/blog/anime";
fetchRSS(rssFeedURL, parseRSS);

// const Parser = require('rss-parser');
// const parser = new Parser();

// const rssFeedUrl = 'https://nyaa.si/?page=rss';

// parser.parseURL(rssFeedUrl)
//   .then((feed) => {
//     console.log('Feed Title:', feed.title);

//     feed.items.forEach((item) => {
//       console.log('Title:', item.title);
//       console.log('Pub Date:', item.pubDate);
//       console.log('Link:', item.link);
//       console.log('------------------------');
//     });
//   })
//   .catch((err) => {
//     console.error('Error fetching RSS feed:', err);
//   });
