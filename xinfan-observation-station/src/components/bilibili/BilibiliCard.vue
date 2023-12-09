<template>
  <div class="card">
    <div class="photo">
        <img :src="item.pic" alt="" referrerpolicy="no-referrer">
    </div>
    <h1>{{ item.title }}</h1>
    <h2>MAD&AMV</h2>
    <p>{{ item.desc }}</p>
  </div>
</template>

<script>
export default {
    name: 'BilibiliCard',
    props: {
        item: Object,
    },
}
</script>

<style scoped>
    *
    {
        margin: 0;
        padding: 0;
    }
    .card{
        position: relative;
        width: 300px;
        height: 450px;
        margin: 20px;
        background-color: whitesmoke;
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;

        color: white;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
        flex-shrink: 0;
    }

    .card .photo img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card .photo{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 0%;
        overflow: hidden;
        transition: 0.5s;
    }

    .card:hover .photo{
        top: 30px;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    }

    .card .photo::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom,transparent 50%,#222);
    }

    .card h1{
        position: absolute;
        top: 370px;
        transition: 0.5s;
    }

    .card:hover h1{
        top: 170px;
        color: black;
    }

    .card h2{
        margin-top: 220px;
        width: 80%;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        font-size: 20px;
        text-align: center;
        margin-bottom: 20px;
        padding-bottom: 20px;
    }

    .card p {
        width: 90%;
        text-indent: 2px;
        font-size: 16px;
        margin-bottom: 15px;
        line-height: 30px;
    }

    .card:hover p{
        color: black;
    }

</style>