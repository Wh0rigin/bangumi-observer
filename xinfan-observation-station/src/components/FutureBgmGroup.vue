<template>
    <div class="date-card" v-for="(item, index) in items" :key="index">
        <div class="date-title">{{ item.title }}</div>
        <div class="card-content">
            <FutureBgmCard
            v-for="(value, key) in item.items"
            :key="key"
            :name="value.future_title" 
            :type="value.future_type"
            :date="value.future_date"
            :imageSrc="value.img_url"
           />
        </div>
    </div>
</template>
  
<script>


import FutureBgmCard from './FutureBgmCard.vue';
import {futureAnimes} from '../mock/futureAnime.js'


export default {
    components: { FutureBgmCard },
    name: 'FutureBgmGroup',
    data() {
        return {
            items: [],
        };
    },
    mounted() {
        this.items = futureAnimes
        
    },
    methods: {
       
    }
}
</script>

<style scoped>
.date-card {
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
    text-align: center;
}

.flex-container {
    display: flex;
    flex-direction: column;
    /* 纵向排列子元素 */
}

.date-title {
    font-weight: bold;
    margin-bottom: 5px;
    background-image: linear-gradient(90deg,#e0c3fc 0%,#8ec5fc 100%);
}

.card-content {
    /* display: flex;
    justify-content: space-between; /* 或者使用 justify-content: space-around; 
    align-items: flex-start; /* 调整对齐方式 
    flex-wrap: wrap; 允许卡片换行 */
    display: flex;
    justify-content: center; /* 居中对齐 */
    /* justify-content: space-between; */
    flex-wrap: wrap; 
    /* align-items: flex-start;  */
    /* margin: -5px; 为了抵消 .card 的 margin，使得每行能够完整显示五个卡片 */
}


</style>
  







