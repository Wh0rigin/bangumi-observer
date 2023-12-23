<template>
    <a class="father"  target="_blank" :href="contents[urlIndex]">
        <a :href="contents[urlIndex]"  target="_blank" class="son" v-for="(item, index) in contents" :key="index">{{ item }}</a>
    </a>
</template>

<script>
export default {
    name: 'WhoList',
    props: {
        urlIndex: Number,
        contents: Array
    }
}
</script>

<style scoped>
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
    /* 适当设置容器的宽度 */
    white-space: nowrap;
    /* 防止文本换行 */
    overflow: hidden;
    /* 隐藏溢出的文本 */
    text-overflow: ellipsis;
    /* 显示省略号 */
}
a{
    text-decoration: none;
    color: black;
}
</style>