
<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <!-- 模态框内容 -->
      <h2>请选择番剧</h2>
      <p class="input-box"><input class="input" v-model="inputValue" placeholder="输入番组搜索" @keyup.enter="searchAnime()" />
      </p>
      <div v-if="searchError">搜索超时了请重试</div>
      <div class="scrollable-div">
        
        <div class="content">
          <bgm-card v-for="(item, index) in searchResult" :key="index" :name="item.name_cn || item.name"
            :rating="item.rating && item.rating.score" :ratingCount="item.rating && item.rating.total"
            :imageSrc="item.images && item.images.large" :firstPlay="item.air_date"
            :doing="item.collection && item.collection.doing" :url="item.url"
            @click="sendDataToParent(item.images && item.images.large, item.name_cn || item.name)" />
        </div>
      </div>

    </div>
  </div>
</template>
  
<script>
import { search } from '@/api/bangumi/search.js';
import BgmCard from './BgmCard';

export default {
  components: {
    BgmCard
  },
  data() {
    return {
      isVisible: false,
      inputValue: '',
      searchResult: [],
      searchError: false
    };
  },
  methods: {
    openModal() {
      this.isVisible = true;
      // console.log('visible')
    },
    closeModal() {
      this.searchResult = [];
      this.inputValue = '';
      this.isVisible = false;
    },
    async searchAnime() {
      this.searchError = false;
      try {
        const response = await search(this.inputValue, { 'type': 2, 'responseGroup': 'large' });
        // console.log(response.data.list)
        // return response.data.list;
        this.searchResult = response.data.list
      } catch (error) {
        console.error('搜索发生错误:', error.message);
        this.searchError = true;
        this.searchResult = []
        // throw error; // 抛出异常，以便上层代码能够捕获并处理
      }
    //   const response = await search(this.inputValue, { 'type': 2, 'responseGroup': 'large' })
    //   console.log(response.data.list)
    //   this.searchResult = response.data.list
    },
    sendDataToParent(imgSrc, title) {
      this.closeModal()
      // 传递数据给父组件
      // console.log("son:"+imgSrc);
      this.$emit('sendData', imgSrc, title);
    }
  },
};
</script>
  
<style scoped>
/* 模态框样式 */
.modal {
  /* display: none; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* 半透明背景 */
}

.modal-content {
  background-color: #fff;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  height: 80%;
}

.close {
  float: right;
  font-size: 24px;
  cursor: pointer;
}


.input-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.input {
  width: 100px;
  height: 38px;
  font-size: 14px;
  padding: 0 40px 0 20px;
  border: 1px solid #eee;
  border-radius: 40px;
  transition: width 0.5s;
  transition-delay: 0.1s;
}

.input-box svg {
  width: 30px;
  height: 30px;
  line-height: 30px;

}

.input:focus {
  width: 180px;
  outline: none;
  box-shadow: none;
  transition-delay: 0;
}

.content {
  display: flex;
  flex-wrap: wrap;
}

.scrollable-div {
  height: 500px;
  overflow: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
  