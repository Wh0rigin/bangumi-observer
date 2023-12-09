<template>
    <audio controls="controls" height="100" width="100">
        <source :src="url" type="audio/mp3" />
    </audio>
</template>
  
<script>
export default {
    name: 'MusicPlayer',
    props: {
        url: String
    },
    mounted(){
        
    },
    data(){
        return {
           
        }
    }
}
</script>

<style scoped>
</style>
  