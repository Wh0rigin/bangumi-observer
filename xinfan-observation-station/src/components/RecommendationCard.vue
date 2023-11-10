<template>
    <div class="recommendation-card">
      <div class="card-image">
        <img :src="anime.image" alt="Anime Image">
      </div>
      <div class="card-details">
        <h2>{{ anime.name }}</h2>
        <p>{{ anime.description }}</p>
        <p>季度: {{ anime.season }}</p>
        <p>类型: {{ anime.genre }}</p>
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
  /* Add your styling here */
  .recommendation-card {
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
  }
  </style>