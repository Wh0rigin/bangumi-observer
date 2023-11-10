<template>
    <div class="auto-carousel">
        <div class="slides" :style="{ transform: `translateX(${-currentIndex * 100}%)` }">
            <div v-for="(slide, index) in slides" :key="index" class="slide">
                <img :src="slide.image" alt="Slide">
            </div>
        </div>
        <button @click="prevSlide" class="nav-button prev">Previous</button>
        <button @click="nextSlide" class="nav-button next">Next</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            slides: [
                { image: 'https://lain.bgm.tv/pic/cover/c/a6/66/326_D8wjw.jpg' },
                { image: 'https://lain.bgm.tv/pic/cover/c/c2/4c/253_jJJj9.jpg' },
                { image: 'https://lain.bgm.tv/pic/cover/c/67/d1/876_dCfrd.jpg' },
                // Add more slides as needed
            ],
            currentIndex: 0,
            autoPlayInterval: 5000, // Set the interval for auto play in milliseconds
        };
    },
    methods: {
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        },
        startAutoPlay() {
            this.autoPlayTimer = setInterval(this.nextSlide, this.autoPlayInterval);
        },
        stopAutoPlay() {
            clearInterval(this.autoPlayTimer);
        },
    },
    mounted() {
        this.startAutoPlay();
    },
    beforeUnmount() {
        this.stopAutoPlay();
    },
};
</script>
  
<style scoped>
.auto-carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 600px;
    /* Adjust the maximum width as needed */
    margin: 0 auto;
}

.slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide {
    width: 100%;
    flex-shrink: 0;
}

.slide img {
    width: 500px;
    height: 600px;
    flex-shrink: 0;
}


.nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;
    cursor: pointer;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}
</style>
  