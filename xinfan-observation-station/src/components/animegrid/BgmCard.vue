<template>
    <div class="card" :class="{ 'hovered': isHovered }" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <div class="image-container">
            <img :src="imageSrc" alt="Card Image" />
        </div>
        <div class="info-container">
            <h2>{{ name }}</h2>
            <p>评分: {{ rating }}/10</p>
            <p>评分人数: {{ ratingCount }}</p>
            <p>首播时间:{{ firstPlay }}</p>
            <p>有{{ doing }}人在看(仅BGM)</p>
        </div>
    </div>

</template>
  
<script>


export default {
    props: {
        imageSrc: String,
        name: String,
        rating: Number,
        ratingCount: Number,
        firstPlay: String,
        doing: String,
        url: String,
    },
    data() {
        return {
            isHovered: false,
        };
    },
    methods: {
        handleMouseEnter() {
            this.isHovered = true;
        },
        handleMouseLeave() {
            this.isHovered = false;
        },

    },

};
</script>
  
<style scoped>
.card {
    display: flex;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    width: 450px;
    height: 220px;
    margin: 20px 20px 5px 5px;
    /* flex: 1;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 5px; */

}

.image-container {
    flex: 1;
    max-width: 250px;
    position: relative;
    overflow: hidden;
}

.image-container:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
    pointer-events: none;
}

.image-container img {
    width: 180px;
    height: 100%;
    object-fit: fill;
}

.info-container {
    flex: 2;
    padding: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1;
    /* 设置 line-height 为 1，确保文字不会撑开容器 */
}

.info-container h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: transform 0.3s ease;
    /* 添加过渡效果，使滚动更平滑 */
}

.info-container:hover h2 {
    white-space: normal;
    overflow: hidden;
    /* 显示滚动条 */
    transform: translateX(-10%);
    /* 通过 transform 来实现水平滚动效果 */
}

.card.hovered {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
}


</style>