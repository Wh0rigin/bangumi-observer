<template>
    <div class="date-card" v-for="(item, index) in data" :key="index">
        <div class="date-title">{{ item.weekday.cn }}</div>
        <div class="card-content">
            <BgmCard
            v-for="(value, key) in item.items"
            :key="key"
            :name="value.name_cn || value.name" 
            :rating="value.rating && value.rating.score"
            :ratingCount="value.rating && value.rating.total"
            :imageSrc="value.images && value.images.large"
            :firstPlay="value.air_date"
            :doing="value.collection && value.collection.doing"
            :url="value.url"/>
        </div>
        <!-- 优先使用中文名，如果不存在则使用英文名-->
    </div>
</template>
  
<script>

import { calendar } from '@/api/bangumi/calendar.js'
import BgmCard from '../bangumi/BgmCard.vue';
// import axios from "axios";

export default {
    components: { BgmCard },
    name: 'BgmCalendar',
    data() {
        return {
            items: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            data: []
        };
    },
    mounted() {
        this.getDataFromCalendar();
    },
    methods: {
        async getDataFromCalendar() {
            try {
                const response = await calendar()
                // const data = await axios.get('https://api.bgm.tv/calendar');
                console.log(response.data);
                this.data = response.data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
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
  







