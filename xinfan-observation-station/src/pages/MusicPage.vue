<template>
    <div class="container">
        <aside class="sidebar">
            <CalendarView :year="year" :month="month" :day="day"></CalendarView>
            <p class="sidebar-btn" @click="changePage('/bangumi')">
                动画咨询</p>
            <p class="sidebar-btn" @click="changePage('/mad')">
                动画二创</p>
            <p class="sidebar-btn sidebar-btn-now" @click="changePage('/music')">
                动画音乐</p>
            <p class="sidebar-btn" @click="changePage('/chat')">
                初音助手</p>
            <p class="sidebar-btn" @click="changePage('/rss')">
                RSS订阅</p>
            <p class="sidebar-btn " @click="changePage('/atom')">
                Atom订阅</p>
        </aside>
        <div class="content-wrap">
            <music-player :url="url" :key="url" :name="name" :pic="pic" />
            <h1>二次元合辑 | 为你定制的二次元必听曲</h1>
            <div class="recommand">
                <music-card v-for="(item, index) in tracks" @click="changeMusic(index)" :key="index" :name="item.name"
                    :ar="item.ar[0].name" :al="item.al.name" :imageSrc="item.al.picUrl" />
            </div>
        </div>
    </div>
</template>
  
<script>
import MusicCard from '../components/music163/MusicCard.vue'
import CalendarView from '../components/bangumi/CalendarView.vue'
import MusicPlayer from '../components/music163/MusicPlayer.vue'
import { useRouter } from 'vue-router'

import { detail } from '../api/music163/musicGroup.js'
import { songUrl } from '../api/music163/music.js'
// import HelloWorld from './components/HelloWorld.vue'


export default {
    name: 'MusicPage',
    components: {
        CalendarView,
        MusicCard,
        MusicPlayer
    },
    data() {
        return {
            router: null,
            year: 2023,
            month: 12,
            day: 10,
            musicGroupId: '8410145201',
            s: '0',
            tracks: [],
            url: 'http://m701.music.126.net/20231209203803/669789f87cb443e7bbdebd639216e0de/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/23170415660/7953/a3af/bc93/90c7d94026523949ea0bfdd92fdbaeb3.mp3',
            name: '请点歌',
            pic: null
        }
    },
    methods: {
        changePage(url) {
            this.router.push(url)
        },
        async detail() {
            try {
                const response = await detail({ 'id': this.musicGroupId, 's': this.s })
                // console.log(response);
                this.tracks = response.data.playlist.tracks
                // console.log('tracks:'+this.tracks);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        async getUrl(id) {
            try {
                const response = await songUrl({ 'id': id })
                console.log(response);
                this.url = response.data.data[0].url

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        changeMusic(index) {
            this.name = this.tracks[index].name
            this.pic = this.tracks[index].al.picUrl
            this.getUrl(this.tracks[index].id)
        }
    },
    mounted() {
        this.router = useRouter();
        this.detail()
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
</style>
  