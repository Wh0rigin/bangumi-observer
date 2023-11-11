import urllib.request
from bs4 import BeautifulSoup
import json
import re


def scrape_website(url):
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
    
    # 发送网络请求获取HTML内容
    req = urllib.request.Request(url, headers=headers)
    response = urllib.request.urlopen(req)
    soup = BeautifulSoup(response.read(), 'html.parser')

    posts = soup.find_all(class_='post-body')
    result = []

    for post in posts:
        future_intro_list = post.find_all(class_='future_intro')

        for index, intro in enumerate(future_intro_list):
            title = intro.text.strip()
            items = []

            # Find the next sibling of the current future_intro
            next_element = intro.find_next_sibling()
            # Loop until the next future_intro or the end of the post-body
            while next_element and next_element.name != 'p' and 'future_intro' not in next_element.get('class', []):
            
                if next_element.name == 'div'and next_element.find('td',class_='future_title_') is not None:
                    future_title = next_element.find('td',class_='future_title_').text.strip()
                    future_date = next_element.find('p',class_=re.compile('^future_date')).text.strip()
                    future_type = next_element.find('p',class_=re.compile('^future_type_')).text.strip()
                    img_url = next_element.find('img')['src']

                    item = {
                        'future_title': future_title,
                        'future_date': future_date,
                        'future_type': future_type,
                        'img_url': img_url
                    }

                    items.append(item)

                next_element = next_element.find_next_sibling()

            result.append({'title': title, 'items': items})

    return result

if __name__ == "__main__":
    url = 'https://yuc.wiki/new/'
    data = scrape_website(url)

    with open('output.json', 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=2)
    print('done')
