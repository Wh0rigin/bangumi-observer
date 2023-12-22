<template>
    <div class="container">
        <aside class="sidebar">

            <CalendarView :year="year" :month="month" :day="day"></CalendarView>
            <p class="sidebar-btn" @click="changePage('/bangumi')">
                动画咨询</p>
            <p class="sidebar-btn sidebar-btn-now" @click="changePage('/mad')">
                动画二创</p>
            <p class="sidebar-btn" @click="changePage('/music')">
                动画音乐</p>
            <p class="sidebar-btn" @click="changePage('/chat')">
                初音助手</p>
            <p class="sidebar-btn" @click="changePage('/rss')">
                RSS订阅</p>
            <p class="sidebar-btn " @click="changePage('/atom')">
                Atom订阅</p>
        </aside>
        <div class="content-wrap">
            <bilibili-player :aid="aid" :cid="cid" :key="aid" />
            <div class="recommend">
                <bilibili-card v-for="(item, index) in correlations" :key="index" :item="correlations[index]"
                    @click="changeVideo(index)" />
            </div>


        </div>
    </div>
</template>
  
<script>

import CalendarView from '../components/bangumi/CalendarView.vue';
import BilibiliPlayer from '../components/bilibili/BilibiliPlayer.vue'
import BilibiliCard from '../components/bilibili/BilibiliCard.vue'

import { bilibilirecommend } from '../mock/bilibilirecommend.js'
import { recommend } from '../api/bilibili/recommend.js'
import { useRouter } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'


export default {
    name: 'VideoPage',
    components: {
        CalendarView,
        BilibiliPlayer,
        BilibiliCard
    },
    data() {
        return {
            router: null,
            correlations: [],
            aid: '3905466',
            cid: '296371069',
            year: 2023,
            month: 12,
            day: 10,
        }
    },
    methods: {
        changePage(url) {
            this.router.push(url)
        },
        async getRecommends() {
            try {
                const response = await recommend({ 'aid': this.aid })
                this.correlations = response.data
                console.log('correlations:' + this.correlations);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        changeVideo(index) {
            this.aid = this.correlations[index]["aid"];
            this.cid = this.correlations[index]["cid"];
        }
    },
    mounted() {
        this.router = useRouter();
        this.correlations = bilibilirecommend["data"]
    },

}
</script>
  
<style scoped>
* {
    transition: all 0.2s ease;
    /* 添加过渡效果，持续时间为0.2秒，缓动函数为ease */
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

    /* display: flex; */

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

.recommend {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
}
</style>
  