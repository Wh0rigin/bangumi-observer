<template>
    <div class="aspect-ratio">
        <iframe :src="src" scrolling="no" border="0"
            frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
    </div>
</template>
  
<script>
export default {
    name: 'BilibiliPlayer',
    props: {
        aid: String,
        cid: String
    },
    mounted(){
        this.src = `https://player.bilibili.com/player.html?aid=${this.aid}&cid=${this.cid}&page=1`
    },
    data(){
        return {
            src:'',
        }
    }
}
</script>

<style scoped>
.aspect-ratio {
    position: relative;
    width: 1155px;
    height: 680px;
    /* padding-bottom: 75%; */
}

.aspect-ratio iframe {
    position: absolute;
    width: 1155px;
    height: 680px;
    left: 0;
    top: 0;
}
</style>
  