<template>
    <div class="container">
        <aside class="sidebar">
            <CalendarView :year="year" :month="month" :day="day"></CalendarView>
            <p class="sidebar-btn" @click="changePage('/bangumi')">
                动画咨询</p>
            <p class="sidebar-btn" @click="changePage('/mad')">
                动画二创</p>
            <p class="sidebar-btn" @click="changePage('/music')">
                动画音乐</p>
            <p class="sidebar-btn" @click="changePage('/chat')">
                初音助手</p>
            <p class="sidebar-btn sidebar-btn-now" @click="changePage('/rss')">
                RSS订阅</p>
            <p class="sidebar-btn " @click="changePage('/atom')">
                Atom订阅</p>
        </aside>
        <div class="content-wrap">
            <h1><svg t="1703243927110" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4220" width="200" height="200"><path d="M42.666667 853.333333a128 128 0 1 1 256 0 128 128 0 0 1-256 0z m938.666666 128h-178.773333c0-418.986667-340.906667-759.893333-759.893333-759.893333V42.666667c517.546667 0 938.666667 421.12 938.666666 938.666666z m-298.666666 0h-182.826667c0-252.074667-205.098667-457.130667-457.173333-457.130666V341.333333c352.896 0 640 287.104 640 640z" fill="#EE802F" p-id="4221"></path></svg>RSS订阅</h1>
            <div v-for="(item, index) in history" :key="index" class="message">
                <div class="message-info">
                    <div class="info">
                        <strong>{{ item.sayer }}</strong>
                    </div>
                </div>
                <div class="content">{{ item.text }}</div>
            </div>
            <div class="recommand">
                <div class="wrapper">
                    <div class="input-data">
                        <input type="text" v-model="inputValue" @keyup.enter="rssSubscribe" required>
                        <div class="underline"></div>
                        <label>Input</label>
                    </div>
                    <p class="example">BGM最新博客:https://bgm.tv/feed/blog/anime</p>
                    <p class="example">字幕发布站:https://bbs.acgrip.com/forum.php?mod=rss&fid=37&auth=0</p>
                    <p class="example">漫猫动画资源站:https://www.comicat.org/rss.xml</p>
                </div>
                
            </div>
            <div>{{warning}}</div>
            <div class="father">
                <div class="son">标题</div>
                <div class="son">URL</div>
                <div class="son">发布日期</div>
            </div>
            <my-list v-for="(item, index) in updates" :contents="Object.values(item)" :urlIndex="1" :key="index"/>
        </div>
    </div>
</template>
  
<script>

import CalendarView from '../components/bangumi/CalendarView.vue'
import { useRouter } from 'vue-router'
import {getMessage} from '@/api/rss/proxyAPI.js'
import MyList from '@/components/common/MyList.vue'
// import {getAnswer} from '../api/chat/chatAPI.js'
// import HelloWorld from './components/HelloWorld.vue'


export default {
    name: 'RssSubscribePage',
    components: {
        CalendarView,
        MyList
    },
    data() {
        return {
            router: null,
            year: 2023,
            month: 12,
            day: 10,
            inputValue: '',
            updates: [],
            warning: ''
        }
    },
    methods: {
        changePage(url) {
            this.router.push(url)
        },
        async rssSubscribe(){
            try{
                const response = await getMessage({"rssurl":this.inputValue})
                if(response.data.code == 200){
                    this.updates = response.data.data
                    console.log(this.updates)
                    this.warning = ''
                }else{
                    this.warning = '找不到耶'
                }
                this.inputValue = '';
            }catch(error){
                this.warning = '找不到耶'
            }
        }
    },
    mounted() {
        this.router = useRouter();
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

.example{
    font-size: 10px;
    text-align: left;
    color: #c0c0c0;
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


.wrapper {
    width: 450px;
    background-color: #fff;
    padding: 40px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.wrapper .input-data {
    position: relative;
    width: 100%;
    height: 40px;
}

.wrapper .input-data input {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 17px;
    border-bottom: 2px solid #c0c0c0;
}

.wrapper .input-data input:focus~label,
.wrapper .input-data input:valid~label {
    transform: translateY(-35px);
    font-size: 15px;
    color: #2c6fdb;
}

.wrapper .input-data label {
    position: absolute;
    bottom: 10px;
    left: 0px;
    color: #808080;
    pointer-events: none;
}


.content {
    font-size: 36px;
    margin: 30px;
    width: 95%;
}

.father {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #dbdbdb;
    justify-content: space-between;
    text-decoration: none;
    color: black;
    padding: 10px;
}

.son {
    width: 400px;
    text-align: center;
}

</style>
  