<template>
    <div class="card">
        <div class="image-container">
            <img :src="imgurl" alt="还没选择番剧哦">
        </div>
        <hr class="divider">
        <div class="title">
            <h2>{{title}}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name:"AnimeGridItem",
    props: {
        title: String,
        imgurl: String
    }
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    width: 250px;
    /* 设置卡片的最大宽度 */
    margin: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* 添加阴影效果 */
}

.image-container {
    overflow: hidden;
}

img {
    width: 250px;
    height: 250px;
    display: block;
    object-fit: cover; /* 确保图像填充整个容器 */
}

.divider {
    margin: 10px 0;
    border: none;
    border-top: 1px solid #ddd;
    /* 横线颜色 */
}

.title {
    padding: 10px;
    text-align: center;
}
</style>

