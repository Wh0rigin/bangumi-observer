<template>
    <div class="container">
        <div id="floatButton" @click="toGrid()">个人动画生涯喜好表 =></div>
        <aside class="sidebar">
            <p class="input-box"><input class="input" v-model="inputValue" placeholder="输入番组搜索" @focus="inputUsing"
                    @blur="inputDisfocus" /><svg @click="inputSearch" :class="{ 'display ': isClassActive }"
                    t="1699634206494" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5224"
                    id="mx_n_1699634206495" width="200" height="200">
                    <path
                        d="M955.069071 864.311021 740.015134 649.258107c-3.752464-3.751441-8.841366-5.860475-14.149255-5.860475-5.306866 0-10.395768 2.108011-14.149255 5.860475l-16.692171 16.692171-38.34226-38.34226c53.03796-59.810201 85.298711-138.442072 85.298711-224.478588 0-186.774871-151.952784-338.727655-338.727655-338.727655S64.527642 216.35456 64.527642 403.12943c0 186.775894 151.952784 338.728678 338.727655 338.728678 86.36909 0 165.276231-32.510438 225.170343-85.913718l38.303374 38.303374-17.34504 17.34504c-7.812943 7.813966-7.812943 20.48352 0 28.297486l215.051891 215.052914c3.753487 3.751441 8.841366 5.860475 14.149255 5.860475 5.306866 0 10.395768-2.108011 14.149255-5.860475l62.334697-62.334697C962.883037 884.794541 962.883037 872.124987 955.069071 864.311021zM104.546078 403.12943c0-164.709319 133.9999-298.709219 298.709219-298.709219s298.709219 133.9999 298.709219 298.709219S567.964616 701.839673 403.255297 701.839673 104.546078 567.838749 104.546078 403.12943zM878.585119 912.496463 691.829691 725.741036l34.036187-34.036187 186.755428 186.755428L878.585119 912.496463z"
                        fill="#2c2c2c" p-id="5225"></path>
                </svg></p>
            <CalendarView :year="year" :month="month" :day="day"></CalendarView>
            <p :class="{ 'sidebar-btn-now': page == 'BgmCalendar' }" class="sidebar-btn" @click="changePage('BgmCalendar')">
                每日新番</p>
            <p :class="{ 'sidebar-btn-now': page == 'BgmSatellite' }" class="sidebar-btn"
                @click="changePage('BgmSatellite')">番剧卫星
            </p>
            <p :class="{ 'sidebar-btn-now': page == 'BgmRecommended' }" class="sidebar-btn"
                @click="changePage('BgmRecommended')">
                编剧推荐</p>
            <p class="sidebar-btn" @click="changePage('AnimeVideo')">动画二创</p>
            <p class="sidebar-btn" @click="changePage('AnimeMusic')">动画音乐</p>
            <p class="sidebar-btn" @click="changePage('Chat')">初音助手</p>
            <p class="sidebar-btn" @click="changePage('RSS')">
                RSS订阅</p>
            <p class="sidebar-btn " @click="changePage('ATOM')">
                Atom订阅</p>
            <p :class="{ 'sidebar-btn-now': page == 'WebsiteInfo' }" class="sidebar-btn" @click="changePage('WebsiteInfo')">
                网页详情</p>
            <p :class="{ 'sidebar-btn-now': page == 'AboutMe' }" class="sidebar-btn" @click="changePage('AboutMe')">关于我们</p>
        </aside>
        <div class="content-wrap">

            <div v-if="page == 'BgmCalendar'">
                <BgmCalendar></BgmCalendar>
            </div>


            <div v-if="page == 'BgmRecommended'">
                <CarouselView></CarouselView>
                <h2>番剧推荐</h2>
                <div class="recommand">
                    <RecommendationCard v-for="(item, index) in animes" :key="index" :anime="item"></RecommendationCard>
                </div>
            </div>

            <div v-if="page == 'SearchPage'">
                <h2>搜索结果</h2>
                <div class="recommand">
                    <BgmCard v-for="(item, index) in searchResult" :key="index" :name="item.name_cn || item.name"
                        :rating="item.rating && item.rating.score" :ratingCount="item.rating && item.rating.total"
                        :imageSrc="item.images && item.images.large" :firstPlay="item.air_date"
                        :doing="item.collection && item.collection.doing" :url="item.url"></BgmCard>
                </div>
            </div>

            <div v-if="page == 'WebsiteInfo'">
                <LineChart :data="chartData" :xAxisLabels="xAxisLabels"></LineChart>
                <h1>为什么选用Vue?</h1>
                <img src="../assets/why_vue.png" />
                <h2>以动画名命名版本号，是动画爱好者的宝藏</h2>
            </div>

            <div v-if="page == 'AboutMe'">
                <h2>组长：胡佳俊</h2>
                <h3>组员：张高远</h3>
                <h4><a href="https://gitee.com/sakeSensei/xinfan-observation-station">项目已开源</a></h4>
                <MessageBoard></MessageBoard>
            </div>

            <div v-if="page == 'BgmSatellite'">
                <future-bgm-group />
            </div>

        </div>
    </div>
</template>
  
<script>
import BgmCalendar from '../components/bangumi/BgmCalendar.vue';
import CalendarView from '../components/bangumi/CalendarView.vue';
import CarouselView from '../components/bangumi/CarouselView.vue'
import RecommendationCard from '../components/bangumi/RecommendationCard'
import { recommandedMock } from '../mock/recommandedAnime.js'
import LineChart from "@/components/bangumi/LineChart.vue";
import MessageBoard from '../components/bangumi/MessageBoard.vue';

import { search } from '../api/bangumi/search.js'
import BgmCard from '../components/bangumi/BgmCard.vue';
import FutureBgmGroup from '../components/bangumi/FutureBgmGroup.vue';
import { useRouter } from 'vue-router'

// import { useWebSocket } from 'vue-native-websocket';
export default {
    name: 'BangumiPage',
    components: {
        BgmCalendar,
        CalendarView,
        CarouselView,
        RecommendationCard,
        BgmCard,
        LineChart,
        MessageBoard,
        FutureBgmGroup
    },
    data() {
        return {
            router: null,
            year: 2023,
            month: 12,
            day: 10,
            hour: 0,
            minute: 0,
            second: 0,
            isClassActive: true,
            inputValue: '',
            page: 'BgmCalendar',
            animes: [],
            searchResult: [],
            chartData: [5, 3, 2, 1, 3, 2, 1],
            xAxisLabels: ['00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00'],
            socket: null,
            timestamp: ''
        }
    },
    mounted() {
        // this.socket = useWebSocket('ws://localhost:5000');
        // this.socket.value.onmessage = (event) => {
        //     this.message = event.data;
        //     console.log(this.message);
        // };
        this.socket = new WebSocket('ws://localhost:5000');
        // 监听WebSocket打开事件
        this.socket.addEventListener('open', () => {
            console.log('WebSocket连接已打开');
        });

        // 监听WebSocket消息事件
        this.socket.addEventListener('message', (event) => {
            const data = JSON.parse(event.data);
            this.timestamp = data.timestamp;
            this.getTime();
        });

        // 监听WebSocket关闭事件
        this.socket.addEventListener('close', () => {
            console.log('WebSocket连接已关闭');
        });

        // 监听WebSocket错误事件
        this.socket.addEventListener('error', (event) => {
            console.error('WebSocket连接发生错误', event);
        });


        this.router = useRouter();
        
        this.animes = recommandedMock;
        this.xAxisLabels = []
        for (let i = 0; i < 7; i++) {
            let cursec = this.second - 3 * (6 - i);
            let curmin = this.minute;
            let curhour = this.hour;
            if (cursec < 0) {
                curmin = this.minute - 1
                cursec += 60
                if (curmin < 0) {
                    curhour = curhour - 1 < 0 ? 23 : curhour - 1
                    curmin += 60;
                }
            }
            this.xAxisLabels.push(`${curhour}:${curmin}:${cursec}`)
        }
        this.timer = setInterval(() => {
            this.updateChartData();
        }, 3000);
        // console.log(this.animes);
    },
    beforeUnmount() {
        // 在组件销毁前清除定时器
        clearInterval(this.timer);
        if (this.socket) {
            this.socket.close();
        }
        // this.socket.value.onclose = () => {
        //     console.log('WebSocket disconnected');
        // };
    },
    // watch: {
    //     chartData: {
    //         handler(newChartData) {
    //             // 在 chartData 变化时进行一些操作
    //             console.log('Chart Data Updated:', newChartData);
    //         },
    //         deep: true // 深度监听数组内部的变化
    //     }
    // },
    methods: {
        updateChartData() {
            // for (let i = 0; i < this.chartData.length; i++) {
            //     this.chartData[i] = Math.floor(Math.random() * 100);
            // }
            // this.getTime()
            this.chartData.shift();
            this.chartData.push(Math.floor(Math.random() * 5) + 1);
            this.xAxisLabels.shift();
            this.xAxisLabels.push(`${this.hour}:${this.minute}:${this.second}`)
            // console.log(this.chartData)
        },
        getTime() {
            const date = new Date(this.timestamp);
            this.year = date.getFullYear();
            this.month = date.getMonth() + 1;
            this.day = date.getDate();
            this.hour = date.getHours();
            this.minute = date.getMinutes();
            this.second = date.getSeconds();
            // console.log(this.day);
        },
        inputUsing() {
            this.isClassActive = false
        },
        inputDisfocus() {
            this.isClassActive = true
        },
        changePage(cur) {
            switch (cur) {
                case 'AnimeVideo':
                    this.router.push('/mad');
                    break;
                case 'AnimeMusic':
                    this.router.push('/music');
                    break;
                case 'Chat':
                    this.router.push('/chat');
                    break;
                case 'RSS':
                    this.router.push('/rss')
                    break;
                case 'ATOM':
                    this.router.push('/atom')
                    break;
                default:
                    this.page = cur;
            }
        },
        async inputSearch() {
            try {
                this.page = 'SearchPage';
                const response = await search(this.inputValue, { 'type': 2, 'responseGroup': 'large' })
                console.log(response.data.list)
                this.searchResult = response.data.list
                this.inputValue = '';
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        toGrid() {
            this.router.push('/animegrid')
        }
    },
    // created() {
    //   setTimeout(() => {
    //     window.L2Dwidget.init({
    //       pluginRootPath: '../src/assets/live2dw',
    //       pluginJsPath: 'lib/',
    //       pluginModelPath: 'live2d-widget-model-koharu/assets/',
    //       tagMode: false,
    //       debug: false,
    //       model: { jsonPath: '../src/assets/live2dw/live2d-widget-model-koharu/assets/koharu.model.json' },
    //       display: { position: 'left', width: 150, height: 300 },
    //       mobile: { show: true },
    //       log: false
    //     })
    //   }, 1000)
    // }
}
</script>
  
<style scoped>
* {
    transition: all 0.2s ease;
    /* 添加过渡效果，持续时间为0.2秒，缓动函数为ease */
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #555555;
    cursor: url('../assets/miku/default.cur'), default;
}

.container {
    display: block;
}

.sidebar {
    background: #fff;
    bottom: 0;
    position: fixed;

    top: 0;
    overflow: hidden;
}

@media (max-width: 1819px) {
    .sidebar {
        display: none;
    }
}

.sidebar-btn {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: skyblue;
    /* 设置按钮背景颜色为深蓝色 */
    color: white;
    /* 设置按钮文字颜色为白色 */
    text-align: left;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.2s;
    /* 添加过渡效果 */
}

.sidebar-btn-now {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #2980b9;
    /* 设置按钮背景颜色为深蓝色 */
    color: white;
    /* 设置按钮文字颜色为白色 */
    text-align: left;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.2s;
    /* 添加过渡效果 */
}

/* 按钮悬停效果 */
.sidebar-btn:hover {
    background-color: #2c3e50;
    /* 鼠标悬停时的按钮背景颜色为深灰色 */
    transform: scale(1.05);
    /* 鼠标悬停时按钮放大1.1倍 */
}

.content-wrap {
    /* 添加一些通用的样式，例如设置最大宽度、居中等 */
    max-width: 1200px;

    box-sizing: border-box;
    /* 设置最大宽度 */
    margin: 0 auto 2px auto;
    /* 顶部为0，底部为2px，左右自动，使左右边距相等 */
    /* 居中显示，auto 可以使左右边距相等 */

    /* 可以根据需要添加其他样式，例如内边距、边框等 */
    padding: 20px;
    /* 设置内边距 */
    border: 1px solid #ccc;
    /* 添加边框 */
    background-color: white;
}

.input-box {
    position: relative;
}

.input {
    width: 100px;
    height: 38px;
    font-size: 14px;
    padding: 0 40px 0 20px;
    border: 1px solid #eee;
    border-radius: 40px;
    transition: width 0.5s;
    transition-delay: 0.1s;
}

.input-box svg {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 4px;
    right: 50px;
}

.input:focus {
    width: 180px;
    outline: none;
    box-shadow: none;
    transition-delay: 0;
}


.display {
    opacity: 0;
    /* 初始不透明度为 1 */
    transition: opacity 1s ease-in-out;
}

.recommand {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
}


#floatButton {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 10px;
    /* 圆角半径 */
    font-size: 14px;
    /* 调整字体大小 */
    padding: 10px;
    /* 调整内边距 */
    cursor: pointer;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    white-space: nowrap;
    /* 防止文本换行 */
    transition: background 0.3s ease;
    /* 添加背景颜色的过渡效果 */
}

#floatButton:hover {
    background: linear-gradient(to right, #3498db, #ff9ff4);
    /* 添加渐变效果，可以根据需要调整颜色 */
}
</style>
  