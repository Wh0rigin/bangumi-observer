# 新番观测站

#### 介绍
Web前端期末大作业

#### 软件架构
软件架构说明
* 前端Vue项目
* flask代理服务器(可选)
* express代理服务器(可选)
* js爬虫->yuc(可选)
* py爬虫->yuc(可选)

#### 文件目录
```bash
|----- .gitee #可无视
|----- .gitignore   # git进行版本控制时忽略的文件
|----- atom-js      # atom解析
|----- bride-backend-py # flask代理服务器（不再维护）
|----- doc  #存一些文档，如
|----- output.json
|----- proxy-backend-js
|----- README.md
|----- rss-js
|----- web-scraper-js
|----- xinfan-observation-station
|----- 基于Vue技术的新番观测站开发.doc
|----- 基于Vue技术的新番观测站开发.pdf

5 个文件      4,807,676 字节
10 个目录 17,823,059,968 可用字节
```


#### 功能点详情
* 周更动画 （Bangumi周更信息获取）
* 番剧索引 （Bangumi搜索）
* 番剧卫星 （爬虫）
* 动画二创 （哔哩哔哩播放器）
* 动画音乐 （网易云音乐播放器，动态每日歌单，直接从网易api获取）
* 初音助手 （大语言模型:gpt式问答）
* rss订阅 （解析rss文件）
* atom订阅 （解析atom）
* 动态个人动画生涯喜好表与喜好词云生成（Bangumi搜索）

#### 可复用自定义组件
* 词云生成 '@compontents/common/WordCloud.vue'
* 动态调节List '@compontents/common/WhoList.vue'
* 动态个人动画生涯喜好表 '@compontents/animegrid/AnimeGrid.vue'
* 拟态框 '@compontents/animegrid/ModalWidget.vue'
* 哔哩哔哩播放器 '@compontents/bilibili/BilibliPlayer.vue'
* 网易云音乐播放器 '@compontents/music163/MusicPlayer.vue'
* 折线图 '@compontents/bangumi/LineChart.vue'
* 轮播图 '@compontents/bangumi/CarouselView.vue'

#### 使用说明

1. npm install
2. npm run serve(启动)

#### TODO
* js->ts
* 选项式->组合式

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

