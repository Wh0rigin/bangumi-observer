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
            <p class="sidebar-btn sidebar-btn-now" @click="changePage('/chat')">
                初音助手</p>
        </aside>
        <div class="content-wrap">
            <h1>初音助手</h1>
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
                        <input type="text" v-model="inputValue" @keyup.enter="sayWithMiku" required>
                        <div class="underline"></div>
                        <label>Input</label>
                    </div>
                </div>
                <img draggable="false"  src="../assets/miku_assistant.gif" style="width: 370px; height: 300px;" @click="sayWithMiku" />
            </div>
        </div>
    </div>
</template>
  
<script>

import CalendarView from '../components/bangumi/CalendarView.vue'
import { useRouter } from 'vue-router'

import { getAnswer } from '../api/chat/proxyAPI.js'
// import {getAnswer} from '../api/chat/chatAPI.js'
// import HelloWorld from './components/HelloWorld.vue'


export default {
    name: 'ChatPage',
    components: {
        CalendarView,

    },
    data() {
        return {
            router: null,
            year: 2023,
            month: 12,
            day: 10,
            inputValue: '',
            history: []
        }
    },
    methods: {
        changePage(url) {
            this.router.push(url)
        },
        async sayWithMiku() {
            this.history.push({ 'sayer': 'me', 'text': this.inputValue })
            // const response = await getAnswer({"model": "qwen-v1",    "input": {"prompt": this.inputValue},"parameters": {}})
            const response = await getAnswer({ 'question': this.inputValue })
            this.history.push({ 'sayer': 'miku', 'text': response.data.data.text })
            this.inputValue = ''
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

.messages {
    margin-top: 100px;
    width: 950px;
    padding: 50px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: grgb(243, 243, 243);
    border-radius: 20px;
    box-shadow: 0 10px 30px #00000020;
}

.form {
    display: flex;
    justify-content: center;
    position: relative;
    flex-direction: column;
    width: 100%;
    padding-bottom: 70px;
}


#username {
    height: 90px;
}

#message {
    height: 200px;
}

.messages h1 {
    width: 100%;
    text-align: left;
    margin-bottom: 70px;
    font-size: 100px;
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 10px;
}

#submitBtn {
    position: absolute;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(90deg, #e0c3fc 0%, #8ec5fc 100%);
    border: none;
    font-size: 30px;
    width: 200px;
    height: 70px;
    border-radius: 50px;
}

#messageBoard {
    width: 100%;
    text-align: left;
}

@keyframes messageFadeIn {
    to {
        opacity: 1;
    }
}

.message {
    width: 1000px;
    margin: 10px 50px;
    padding: 10px;
    opacity: 0;
    animation: messageFadeIn 0.5s ease forwards;
    background-image: linear-gradient(90deg, #8ec5fc 0%, #e0c3fc 100%);
    background-color: #fff;
   
    border-radius: 10px;
    box-shadow: 0 10px 20px #00000026;
    text-shadow: 0px 0px 20px #fff;
}

.message-info {
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 36px;
    position: relative;
}

.info {
    transform: translateY(-30px);
}

.info img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 10px #fff solid;
}

.message strong {
    top: 5px;
    position: absolute;
    width: 200px;
    letter-spacing: 3px;
    left: 10px;
}

.message-info span {
    position: absolute;
    right: 10px;
}

.content {
    font-size: 36px;
    margin: 30px;
    width: 95%;
}
</style>
  