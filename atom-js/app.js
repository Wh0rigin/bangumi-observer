const axios = require("axios");
const parseString = require("xml2js").parseString;

// 用于获取Atom feed的函数
function fetchAtomFeed(url, callback) {
    axios
        .get(url)
        .then((response) => {
            callback(response.data);
        })
        .catch((error) => {
            console.error("Error fetching Atom feed:", error);
        });
}

// 解析Atom feed的函数
function parseAtomFeed(xmlData) {
    parseString(xmlData, { explicitArray: false }, (err, result) => {
        if (err) {
            console.error("Error parsing Atom feed:", err);
            return;
        }

        // 提取所需的信息
        const entries = result.feed.entry;

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
            atomFeedRssCallbacks.push({
                title: title,
                link: link,
                published: published,
                updated: updated,
            });
        }
        console.log(atomFeedRssCallbacks);
    });
}

var atomFeedRssCallbacks = [];
// 调用fetchAtomFeed函数，并在获取到数据后调用parseAtomFeed函数
const atomFeedURL = "http://yuc.wiki/atom.xml";
fetchAtomFeed(atomFeedURL, parseAtomFeed);
