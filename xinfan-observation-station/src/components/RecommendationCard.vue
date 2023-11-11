<template>
    <div class="container">
        <div class="card">
            <div class="imgBx">
                <img :src="anime.image" alt="Anime Image">
            </div>
            <div class="content">
                <h2>{{ anime.name }}</h2>
                <p class="description">{{ anime.description }}</p>
                <p>季度: {{ anime.season }}</p>
                <p>类型: {{ anime.genre }}</p>
            </div>
        </div>

    </div>
</template>
  
<script>
export default {
    props: {
        anime: {
            type: Object,
            required: true
        }
    }
};
</script>
  
<style scoped>
/* .recommendation-card {
    display: flex;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
  }
  
  .card-image {
    flex: 1;
  }
  
  .card-image img {
    width: 100%;
    height: auto;
  }
  
  .card-details {
    flex: 2;
    padding: 10px;
  }
  
  .card-details h2 {
    margin-top: 0;
  } */


  *{
    margin: 0;
    padding: 0;
    font-family: 'Poppins',sans-serif;
  }
  /* .container{
    position: relative;
    width: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
  } */
  .container .card{
    position: relative;
    max-width: 300px;
    height: 215px;
    background: #fff;
    margin: 30px 10px;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0,0,0,0.5);
    transition: 0.3s ease-in-out;
  }

  .container .card:hover{
    height: 420px;
  }

  .container .card .imgBx{
    position: relative;
    width: 260px;
    height: 260px;
    top: -60px;
    background-color: #fff;
    left: 20px;
    z-index: 1;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  }

  .container .card .imgBx img{
    max-width: 100%;
    border-radius: 4px;
  }

.container .card .content{
    position: relative;
    margin-top: -140px;
    padding: 10px 15px;
    text-align: center;
    color: #111;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;
}

.container .card:hover .content{
    visibility: visible;
    opacity: 1;
    margin-top: -40px;
    transition-delay: 0.3s;
}

.container .card:hover .content .description{
    display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3; /* 指定显示的行数 */
}

.container .card .content .description{
    display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3; /* 指定显示的行数 */
}

</style>