<template>
  <!-- <div class="container">
    <aside class="sidebar">
      <p class="input-box"><input class="input" v-model="inputValue" placeholder="输入番组搜索" @focus="inputUsing"
          @blur="inputDisfocus" /><svg @click="inputSearch" :class="{ 'display ': isClassActive }" t="1699634206494"
          viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5224" id="mx_n_1699634206495"
          width="200" height="200">
          <path
            d="M955.069071 864.311021 740.015134 649.258107c-3.752464-3.751441-8.841366-5.860475-14.149255-5.860475-5.306866 0-10.395768 2.108011-14.149255 5.860475l-16.692171 16.692171-38.34226-38.34226c53.03796-59.810201 85.298711-138.442072 85.298711-224.478588 0-186.774871-151.952784-338.727655-338.727655-338.727655S64.527642 216.35456 64.527642 403.12943c0 186.775894 151.952784 338.728678 338.727655 338.728678 86.36909 0 165.276231-32.510438 225.170343-85.913718l38.303374 38.303374-17.34504 17.34504c-7.812943 7.813966-7.812943 20.48352 0 28.297486l215.051891 215.052914c3.753487 3.751441 8.841366 5.860475 14.149255 5.860475 5.306866 0 10.395768-2.108011 14.149255-5.860475l62.334697-62.334697C962.883037 884.794541 962.883037 872.124987 955.069071 864.311021zM104.546078 403.12943c0-164.709319 133.9999-298.709219 298.709219-298.709219s298.709219 133.9999 298.709219 298.709219S567.964616 701.839673 403.255297 701.839673 104.546078 567.838749 104.546078 403.12943zM878.585119 912.496463 691.829691 725.741036l34.036187-34.036187 186.755428 186.755428L878.585119 912.496463z"
            fill="#2c2c2c" p-id="5225"></path>
        </svg></p>
      <CalendarView :year="year" :month="month" :day="day"></CalendarView>
      <p :class="{ 'sidebar-btn-now': page == 'BgmCalendar' }" class="sidebar-btn" @click="changePage('BgmCalendar')">每日新番</p>
      <p :class="{ 'sidebar-btn-now': page == 'BgmSatellite' }" class="sidebar-btn" @click="changePage('BgmSatellite')">番剧卫星
      </p>
      <p :class="{ 'sidebar-btn-now': page == 'BgmRecommended' }" class="sidebar-btn" @click="changePage('BgmRecommended')">
        编剧推荐</p>
      <p :class="{ 'sidebar-btn-now': page == 'WebsiteInfo' }" class="sidebar-btn" @click="changePage('WebsiteInfo')">网页详情</p>
      <p :class="{ 'sidebar-btn-now': page == 'AboutMe' }" class="sidebar-btn" @click="changePage('AboutMe')">关于我们</p>
    </aside>
    <div class="content-wrap">

      <div v-if="page == 'BgmCalendar'">
        <BgmCalendar></BgmCalendar>
      </div>


      <div v-if="page == 'BgmRecommended'">
        <CarouselView></CarouselView>
        <h2>番剧推荐</h2>
        <div class="recommand">
          <RecommendationCard v-for="(item, index) in animes" :key="index" :anime="item"></RecommendationCard>
        </div>
      </div>

      <div v-if="page == 'SearchPage'">
        <h2>搜索结果</h2>
        <div class="recommand">
          <BgmCard v-for="(item, index) in searchResult" :key="index" :name="item.name_cn || item.name"
            :rating="item.rating && item.rating.score" :ratingCount="item.rating && item.rating.total"
            :imageSrc="item.images && item.images.large" :firstPlay="item.air_date"
            :doing="item.collection && item.collection.doing" :url="item.url"></BgmCard>
        </div>
      </div>

      <div v-if="page == 'WebsiteInfo'">
        <LineChart :data="chartData" :xAxisLabels="xAxisLabels"></LineChart>
      </div>

      <div v-if="page == 'AboutMe'">
        <h2>组长：胡佳俊</h2>
        <h3>组员：张高远</h3>
        <h4><a href="https://gitee.com/sakeSensei/xinfan-observation-station">项目已开源</a></h4>
        <MessageBoard></MessageBoard>
      </div>

      <div v-if="page == 'BgmSatellite'">
        <future-bgm-group />
      </div>

    </div>
  </div> -->
  <router-view></router-view>
</template>

<script>
// import BgmCalendar from './components/bangumi/BgmCalendar.vue';
// import CalendarView from './components/bangumi/CalendarView.vue';
// import CarouselView from './components/bangumi/CarouselView.vue'
// import RecommendationCard from './components/bangumi/RecommendationCard'
// import { recommandedMock } from './mock/recommandedAnime.js'
// import LineChart from "@/components/bangumi/LineChart.vue";
// import MessageBoard from './components/bangumi/MessageBoard.vue';

// import { search } from './api/bangumi/search.js'
// import BgmCard from './components/bangumi/BgmCard.vue';
// import FutureBgmGroup from './components/bangumi/FutureBgmGroup.vue';



export default {
  name: 'App',
  // components: {
  //   BgmCalendar,
  //   CalendarView,
  //   CarouselView,
  //   RecommendationCard,
  //   BgmCard,
  //   LineChart,
  //   MessageBoard,
  //   FutureBgmGroup
  // },
  data() {
    return {
      // year: 2023,
      // month: 12,
      // day: 10,
      // isClassActive: true,
      // inputValue: '',
      // page: 'BgmCalendar',
      // animes: [],
      // searchResult: [],
      // chartData: [10, 20, 30, 40, 50, 30, 25],
      // xAxisLabels: ['2023-11-10', '2023-11-11', '2023-11-12', '2023-11-13', '2023-11-14', '2023-11-15', '2023-11-16']
    }
  },
  mounted() {
    // this.getTime();
    // this.animes = recommandedMock;
    // console.log(this.animes);
  },
  methods: {
    // getTime() {
    //   const date = new Date()
    //   this.year = date.getFullYear();
    //   this.month = date.getMonth() + 1;
    //   this.day = date.getDate();
    // },
    // inputUsing() {
    //   this.isClassActive = false
    // },
    // inputDisfocus() {
    //   this.isClassActive = true
    // },
    // changePage(cur) {
    //   this.page = cur
    // },
    // async inputSearch() {
    //   try {
    //     this.page = 'SearchPage';
    //     const response = await search(this.inputValue, { 'type': 2, 'responseGroup': 'large' })
    //     console.log(response.data.list)
    //     this.searchResult = response.data.list
    //     this.inputValue = '';
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // }
  },
  // created() {
  //   setTimeout(() => {
  //     window.L2Dwidget.init({
  //       pluginRootPath: '../src/assets/live2dw',
  //       pluginJsPath: 'lib/',
  //       pluginModelPath: 'live2d-widget-model-koharu/assets/',
  //       tagMode: false,
  //       debug: false,
  //       model: { jsonPath: '../src/assets/live2dw/live2d-widget-model-koharu/assets/koharu.model.json' },
  //       display: { position: 'left', width: 150, height: 300 },
  //       mobile: { show: true },
  //       log: false
  //     })
  //   }, 1000)
  // }
}
</script>

<style>
* {
  transition: all 0.2s ease;
  /* 添加过渡效果，持续时间为0.2秒，缓动函数为ease */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #555555;
  cursor: url('./assets/miku/default.cur'), default;
}

.container {
  display: block;
}

.sidebar {
  background: #fff;
  bottom: 0;
  position: fixed;

  top: 0;
  overflow: hidden;
}

@media (max-width: 1819px) {
  .sidebar {
    display: none;
  }
}

.sidebar-btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: skyblue;
  /* 设置按钮背景颜色为深蓝色 */
  color: white;
  /* 设置按钮文字颜色为白色 */
  text-align: left;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s;
  /* 添加过渡效果 */
}

.sidebar-btn-now {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #2980b9;
  /* 设置按钮背景颜色为深蓝色 */
  color: white;
  /* 设置按钮文字颜色为白色 */
  text-align: left;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s;
  /* 添加过渡效果 */
}

/* 按钮悬停效果 */
.sidebar-btn:hover {
  background-color: #2c3e50;
  /* 鼠标悬停时的按钮背景颜色为深灰色 */
  transform: scale(1.05);
  /* 鼠标悬停时按钮放大1.1倍 */
}

.content-wrap {
  /* 添加一些通用的样式，例如设置最大宽度、居中等 */
  max-width: 1200px;

  box-sizing: border-box;
  /* 设置最大宽度 */
  margin: 0 auto 2px auto;
  /* 顶部为0，底部为2px，左右自动，使左右边距相等 */
  /* 居中显示，auto 可以使左右边距相等 */

  /* 可以根据需要添加其他样式，例如内边距、边框等 */
  padding: 20px;
  /* 设置内边距 */
  border: 1px solid #ccc;
  /* 添加边框 */
  background-color: white;
}

.input-box {
  position: relative;
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
  text-align: center;
  cursor: pointer;
  position: absolute;
  top: 4px;
  right: 50px;
}

.input:focus {
  width: 180px;
  outline: none;
  box-shadow: none;
  transition-delay: 0;
}


.display {
  opacity: 0;
  /* 初始不透明度为 1 */
  transition: opacity 1s ease-in-out;
}

.recommand {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
}</style>