<template>
    <div class="left">
        <h1 v-if="name">{{ name }}</h1>
        <img class="reflected-img" v-if="pic" :src="pic" />
        <div class="right">
            <audio controls="controls" height="100" width="100">
                <source :src="url" type="audio/mp3" />
            </audio>
        </div>
    </div>

    <img src="../../assets/miku_singing.gif" />
</template>
  
<script>
export default {
    name: 'MusicPlayer',
    props: {
        url: String,
        name: String,
        pic: String,
    },
    mounted() {

    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.left {
    display: inline-block;
}

.left img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    display: inline-block;
}

/* 添加倒影效果 */
.reflected-img {
    position: relative;
    width: 300px;
    /* 设置图片宽度 */
}

.reflected-img img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 8px;
    /* 设置图片圆角 */
}

.reflected-img::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8));
    /* 设置倒影效果 */
    transform: scaleY(-1);
    /* 垂直翻转 */
    transform-origin: 50% 0;
    /* 设置翻转的中心点 */
    border-radius: 8px;
    /* 设置倒影的圆角，保持与图片一致 */
}

audio {
    width: 300px;
    /* 设置播放器宽度 */
    margin: 20px;
    /* 设置外边距 */
    border: 1px solid #ccc;
    /* 设置边框样式 */
    border-radius: 5px;
    /* 设置边框圆角 */
    background-color: #f5f5f5;
    /* 设置背景颜色 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    /* 设置阴影效果 */
}

audio::-webkit-media-controls {
    background-color: #f5f5f5;
    /* 设置媒体控制条背景颜色 */
}

audio::-webkit-media-controls-play-button {
    color: #333;
    /* 设置播放按钮颜色 */
}

audio::-webkit-media-controls-volume-slider {
    display: none;
    /* 隐藏音量控制条 */
}</style>
  