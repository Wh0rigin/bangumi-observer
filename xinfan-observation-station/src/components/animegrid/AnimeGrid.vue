<template>
    <div class="container">
        <modal-component ref="modalRef" @sendData="handleDataFromChild"></modal-component>
        <div ref="captureDiv">
            <h1>个人动画生涯爱好表</h1>

            <div class="content">
                <anime-grid-item v-for="(item, index) in tags" :key="index" :title="item.tagName" :imgurl="item.imgUrl"
                    @click="openModal(index)" />
            </div>

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
            <!-- <button @click="capture()">保存为图片</button> -->
            <button @click="addExample()">添加示例</button>
        </div>
        <div class="attention" v-if="isModal == true">若输入框被隐藏重新点击即可出现</div>
        <!-- <canvas ref="screenshot" style="display: none;"></canvas> -->
        <word-cloud :words="words" />
    </div>
</template>

<script>
import AnimeGridItem from '@/components/animegrid/AnimeGridItem.vue'
import ModalComponent from '@/components/animegrid/ModalWidget.vue';
import WordCloud from '@/components/common/WordCloud.vue'
import html2canvas from 'html2canvas';
// import Vue from 'vue';
// import { reactive,toRefs } from 'vue';
export default {
    name: 'AnimeGrid',
    components: {
        AnimeGridItem,
        'modal-component': ModalComponent,
        WordCloud,
    },
    // props: {
    // },
    data() {
        return {
            tags: [],
            inputValue: '',
            isModal: false,
            curIndex: 0,
            words:[]
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
        handleDataFromChild(img_src,title) {
            // console.log(data);
            // Vue.set(this.tags, this.curIndex, { ...this.tags[this.curIndex], imgUrl: data });
            // this.$set(this.tags, this.curIndex, { ...this.tags[this.curIndex], imgUrl: data });
            // this.tags[this.curIndex].imgUrl = data;
            // this.$forceUpdate(); 
            // triggerRef(this.tags)
            this.words.push({"text":title})
            this.tags[this.curIndex].imgUrl = img_src;
        },
        capture() {
            const captureDiv = this.$refs.captureDiv;
            if (window.ClipboardItem) {
                html2canvas(captureDiv, {
                    // backgroundColor: null,//画出来的图片有白色的边框,不要可设置背景为透明色（null）
                    useCORS: true,//支持图片跨域
                    scale: 1,//设置放大的倍数
                    allowTaint: true,
                }).then(canvas => {
                    // 将canvas转换为blob类型
                    canvas.toBlob(blob => {
                        // 创建一个图像剪贴板项
                        const item = new window.ClipboardItem({ 'image/png': blob })
                        // 使用Clipboard API将图片写入剪贴板
                        navigator.clipboard.write([item]).then(() => {
                            console.log('Screenshot copied to clipboard')
                        }).catch(error => {
                            console.error('Failed to copy screenshot to clipboard: ', error)
                        })
                    })
                })
            } else {
                console.error('This browser does not support ClipboardItem.')
            }
        },
        addExample(){
            this.tags.push({ tagName: '最喜欢的热血动画', imgUrl: '' });
            this.tags.push({ tagName: '最喜欢的恋爱动画', imgUrl: '' });
            this.tags.push({ tagName: '最喜欢的智斗动画', imgUrl: '' });
            this.tags.push({ tagName: '最喜欢的异世界动画', imgUrl: '' });
            this.tags.push({ tagName: '最喜欢的搞笑动画', imgUrl: '' });
            this.tags.push({ tagName: '最喜欢的原创动画', imgUrl: '' });
            this.tags.push({ tagName: '最喜欢的音乐动画', imgUrl: '' });
            this.tags.push({ tagName: '最喜欢的治愈动画', imgUrl: '' });
        }
        // capture() {
        //     // const captureDiv = this.$refs.captureDiv;
        //     // const canvas = this.$refs.screenshot;
        //     // if (!canvas) {
        //     //     console.error("Canvas element not found.");
        //     //     return;
        //     // }
        //     // const ctx = canvas.getContext('2d');
        //     // // 将 div 内容绘制到 canvas 上
        //     // // 创建一个图像对象
        //     // const image = new Image();
        //     // image.src = captureDiv.toDataURL('image/png');

        //     // // 将图像对象绘制到 canvas 上
        //     // ctx.clearRect(0, 0, canvas.width, canvas.height);
        //     // ctx.drawImage(image, 0, 0, captureDiv.offsetWidth, captureDiv.offsetHeight);
        //     // console.log(captureDiv.offsetWidth);
        //     // console.log(captureDiv.offsetHeight);
        //     // console.log(image)
        //     // // // 获取截图的数据 URL
        //     // const screenshotDataURL = canvas.toDataURL('image/png');
        //     // // // 这里可以使用截图的数据，例如保存到服务器或者展示在页面上
        //     // console.log('Screenshot Data URL:', screenshotDataURL);
        //     // // // 你可以将截图显示在页面上
        //     // // const screenshotImage = new Image();
        //     // // screenshotImage.src = screenshotDataURL;
        //     // // document.body.appendChild(screenshotImage);


        //     // // 创建一个临时的 Canvas 元素
        //     // const tempCanvas = document.createElement('canvas');
        //     // const tempCtx = tempCanvas.getContext('2d');

        //     // // 设置临时 Canvas 尺寸和 div 尺寸一致
        //     // tempCanvas.width = captureDiv.offsetWidth;
        //     // tempCanvas.height = captureDiv.offsetHeight;

        //     // // 将 div 内容绘制到临时 Canvas 上
        //     // tempCtx.drawWindow(window, 0, 0, captureDiv.offsetWidth, captureDiv.offsetHeight, 'rgb(255,255,255)');

        //     // // 获取截图的数据 URL
        //     // const screenshotDataURL = tempCanvas.toDataURL('image/png');

        //     // // 这里可以使用截图的数据，例如保存到服务器或者展示在页面上
        //     // console.log('Screenshot Data URL:', screenshotDataURL);

        //     // // 你可以将截图显示在页面上
        //     // const screenshotImage = new Image();
        //     // screenshotImage.src = screenshotDataURL;
        //     // document.body.appendChild(screenshotImage);
        // },
        // async capture() {
        //     const captureDiv = this.$refs.captureDiv;
        //     const canvas = this.$refs.screenshot;

        //     if (!canvas) {
        //         console.error("Canvas element not found.");
        //         return;
        //     }

        //     // 使用 html2canvas 将 captureDiv 转换为 Canvas
        //     // const canvasDataUrl = await html2canvas(captureDiv, { useCORS: true });

        //     // // 设置 Canvas 元素的内容为转换后的数据
        //     // const ctx = canvas.getContext('2d');
        //     // ctx.clearRect(0, 0, canvas.width, canvas.height);
        //     // const img = new Image();
        //     // img.src = canvasDataUrl;
        //     // ctx.drawImage(img, 0, 0);

        //     // // 获取截图的数据 URL
        //     // const screenshotDataURL = canvas.toDataURL('image/png');

        //     // // 这里可以使用截图的数据，例如保存到服务器或者展示在页面上
        //     // console.log('Screenshot Data URL:', screenshotDataURL);

        //     // // 你可以将截图显示在页面上
        //     // const screenshotImage = new Image();
        //     // screenshotImage.src = screenshotDataURL;
        //     // document.body.appendChild(screenshotImage);
        // },
    },
}

</script>

<style scoped>
.container {
    width: 1170px;
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

