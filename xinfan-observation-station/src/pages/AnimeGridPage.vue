<template>
    <div class="container">
        <div id="floatButton" @click="returnMainPage()">返回</div>
        <div class="content-wrap">
            <anime-grid />

        </div>

    </div>
</template>
  
<script lang="ts" setup>

import { useRouter } from 'vue-router'
import AnimeGrid from '@/components/animegrid/AnimeGrid.vue'
import { onMounted } from 'vue';

// import {getAnswer} from '../api/chat/chatAPI.js'
// import HelloWorld from './components/HelloWorld.vue'


let router = null;

const returnMainPage = function () {
    router.push('/bamgumi')
}

onMounted(()=>{
    router = useRouter();
});

//----选项式----把lang和setup去掉稍稍改一下就可以用//
// export default {
//     name: 'AnimeGridPage',
//     components: {
//         AnimeGrid,

//     },
//     data() {
//         return {
//             router: null,
//         }
//     },
//     methods: {
//         returnMainPage(){
//             this.router.push('/bangumi')
//         }
//     },
//     mounted() {
//         this.router = useRouter();
//     },
// }
</script>
  
<style scoped>
* {
    transition: all 0.2s ease;
    /* 添加过渡效果，持续时间为0.2秒，缓动函数为ease */
}


.container {
    display: block;
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
  