<template>
  <div class="messages">
    <h1>留言板</h1>
    <div class="form">
        <input v-model="username" type="text" id="username" placeholder="用户名">
        <textarea v-model="message" id="message" rows="10" cols="30" placeholder=留言内容></textarea>
        <button id="submitBtn" @click="submit">留言</button>
    </div>
    <div id="messageBoard">
        <div v-for="(item, index) in messages" :key="index" class="message">
                <div class="message-info">
                    <div class="info">
                        <img src="../../assets/logo.png" alt="" width="50px" height="50px">
                        <strong>{{item.username}}</strong>
                    </div>
                    <span>发布于:{{item.date}}</span>
                </div>
            <div class="content">{{item.message}}</div>
        </div>
  </div>
  </div>
  
</template>

<script>
export default {
    data(){
        return {
            messages:[],
            username:'',
            message:'',
        };
    },
    methods:{
        submit(){
            if(this.message == ''){
                alert('请输入留言内容')
                return
            }

            const now = new Date()
            this.messages.push({'username':this.username == ''?'匿名':this.username,'message':this.message,'date':now.getFullYear()+'年'+(now.getMonth()+1)+"月"+now.getDate()+'日'+' '+now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()})
            this.message = ''
            this.username = ''
        },
    }
}
</script>

<style scoped>
    .messages {
        margin-top: 100px;
        width: 950px;
        padding: 50px 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color:grgb(243, 243, 243);  
        border-radius: 20px;
        box-shadow: 0 10px 30px #00000020;
    }

    .form{
        display: flex;
        justify-content: center;
        position: relative;
        flex-direction: column;
        width: 100%;
        padding-bottom: 70px;
    }

    input:focus,textarea:focus{
        outline: none;
    }

    input,textarea{
        border: none;
        color: #000;
        background-color: rgb(238, 238, 238);
        margin-bottom: 40px;
        font: 900 40px '';
        border-radius: 10px;
        padding: 30px;
    }

    #username{
        height: 90px;
    }

    #message{
        height: 200px;
    }
    .messages h1{
        width: 100%;
        text-align: left;
        margin-bottom: 70px;
        font-size: 100px;
        background-image: linear-gradient(135deg,#667eea 0%,#764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: 10px;
    }
    #submitBtn{
        position: absolute;
        right:0;
        bottom: 0;
        background-image: linear-gradient(90deg,#e0c3fc 0%,#8ec5fc 100%);
        border: none;
        font-size: 30px;
        width: 200px;
        height: 70px;
        border-radius: 50px;
    }

    #messageBoard{
        width: 100%;
        text-align: left;
    }

    @keyframes messageFadeIn {
        to {
            opacity: 1;
        }
    }
        
    .message{
        width: 100%;
        margin: 10px;
        padding: 10px;
        opacity: 0;
        animation: messageFadeIn 0.5s ease forwards;
        background-image: linear-gradient(90deg,#8ec5fc 0%,#e0c3fc 100%);
        background-color: #fff;
        margin: 70px 0;
        border-radius: 10px;
        box-shadow: 0 10px 20px #00000026;
        text-shadow: 0px 0px 20px #fff;
    }

    .message-info{
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 36px;
        position: relative;
    }

    .info{
        transform: translateY(-30px);
    }

    .info img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 10px #fff solid;
    }

    strong{
        position: absolute;
        width: 800px;
        letter-spacing: 3px;
        top: 70px;
        left:170px;
    }

    .message-info span{
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .content{
        font-size: 36px;
        margin: 30px;
        width: 95%;

    }
</style>