<template>
    <div class="left">
        <h1 v-if="name">{{ name }}</h1>
        <img v-if="pic" :src="pic" />
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

.right{

}
</style>
  