<template>
    <div class="container">
        <modal-component ref="modalRef" @sendData="handleDataFromChild"></modal-component>
        <h1>个人动画生涯爱好表</h1>

        <div class="content">
            <anime-grid-item v-for="(item, index) in tags" :key="index" :title="item.tagName" :imgurl="item.imgUrl"
                @click="openModal(index)" />
        </div>

        <div class="footer">
            <div class="wrapper" @click="activate()">
                <div class="input-data" v-if="isModal == false">
                    <input type="text" v-model="inputValue" @keyup.enter="addTag()" required>
                    <div class="underline"></div>
                    <label>请输入要添加的Tag,如:最喜欢的热血动画</label>
                </div>
            </div>
            <button @click="addTag()">添加Tag</button>
        </div>
        <div class="attention" v-if="isModal == true">若输入框被隐藏重新点击即可出现</div>
    </div>
</template>

<script>
import AnimeGridItem from '@/components/animegrid/AnimeGridItem.vue'
import ModalComponent from '@/components/animegrid/ModalWidget.vue';
// import Vue from 'vue';
// import { reactive,toRefs } from 'vue';
export default {
    name: 'AnimeGrid',
    components: {
        AnimeGridItem,
        'modal-component': ModalComponent,
    },
    // props: {
    // },
    data() {
        return {
            tags: [],
            inputValue: '',
            isModal: false,
            curIndex: 0
        }
    },
    methods: {
        addTag() {
            if (this.inputValue == '') {
                console.log(this.tags);
                return
            }
            this.tags.push({ tagName: this.inputValue, imgUrl: '' })
            this.inputValue = ''
        },
        openModal(index) {
            this.$refs.modalRef.openModal();
            this.isModal = true
            this.curIndex = index
            // console.log('click');
        },
        activate() {
            this.isModal = false
        },
        handleDataFromChild(data) {
            // console.log(data);
            // Vue.set(this.tags, this.curIndex, { ...this.tags[this.curIndex], imgUrl: data });
            // this.$set(this.tags, this.curIndex, { ...this.tags[this.curIndex], imgUrl: data });
            // this.tags[this.curIndex].imgUrl = data;
            // this.$forceUpdate(); 
            // triggerRef(this.tags)
            this.tags[this.curIndex].imgUrl = data;
        }
    }
}
</script>

<style scoped>
.container {
    width: 1200px;
}

.wrapper {
    width: 450px;
    background-color: #fff;
    padding: 40px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}


.footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 5px;
}

/* 基本按钮样式 */
button {
    margin: 0 0 0 10px;
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border: 2px solid #3498db;
    border-radius: 5px;
    color: #3498db;
    background-color: #fff;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

/* 悬停时的样式 */
button:hover {
    background-color: #3498db;
    color: #fff;
}

/* 按下时的样式 */
button:active {
    background-color: #2980b9;
    border-color: #2980b9;
    color: #fff;
}


.wrapper .input-data {
    position: relative;
    width: 100%;
    height: 40px;
}

.wrapper .input-data input {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 17px;
    border-bottom: 2px solid #c0c0c0;
}

.wrapper .input-data input:focus~label,
.wrapper .input-data input:valid~label {
    transform: translateY(-35px);
    font-size: 15px;
    color: #2c6fdb;
}

.wrapper .input-data label {
    position: absolute;
    bottom: 10px;
    left: 0px;
    color: #808080;
    pointer-events: none;
}

.content {
    display: flex;
    flex-wrap: wrap;
}

.item {
    flex: 0 0 200px;
    /* 设置子项的基本大小 */
    margin: 10px;
    /* 设置子项之间的间距 */
    height: 100px;
    /* 设置子项的高度 */
}

.attention {
    font-size: 10px;
    text-align: left;
    color: #c0c0c0;
    text-align: center;
}
</style>

