<template>
  <!-- listen to click on outer-carousel only .self -->
  <div>
    <div class="module-overlay" @click.self="closeCarousel"></div>
    <!-- pull out inner container -->
    <div class="inner-carousel-container">
      <button class="carousel-button left" @click="prevButton">
        <img src="../assets/left-arrow.png" alt="left arrow" />
      </button>
      <div class="carousel-slider-container">
        <ul class="carousel-slider">
          <li class="carousel-slide">
            <img :src="currentElement.href" :alt="currentElement.alt" />
          </li>
        </ul>
      </div>
      <button class="carousel-button right" @click="nextButton">
        <img src="../assets/right-arrow.png" alt="right arrow" />
      </button>

      <div class="carousel-nav">
        <button
          v-for="(slide, idx) in productImages"
          :key="idx"
          class="carousel-indicator"
          :class="{'current-slide': currentElIndex === idx}"
          @click="showSlide(idx)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
// can write script to toggle display none on click on the outer-carousel
export default {
  name: 'Carousel',
  props: {
    productImages: Array
  },
  data() {
    return {
      currentElIndex: 0
    };
  },
  computed: {
    currentElement() {
      return this.productImages[this.currentElIndex];
    }
  },
  methods: {
    nextButton() {
      if (this.currentElIndex + 1 === this.productImages.length) {
        this.currentElIndex = 0;
      } else {
        this.currentElIndex++;
      }
    },
    prevButton() {
      if (this.currentElIndex - 1 < 0) {
        this.currentElIndex = this.productImages.length - 1;
      } else {
        this.currentElIndex--;
      }
    },
    showSlide(indicatorIndex) {
      // when clicked show the slide with passed in idx
      this.currentElIndex = indicatorIndex;
    },
    closeCarousel() {
      this.$emit('closeCarousel');
    }
  }
};
</script>

<style scoped>
.module-overlay {
  background-color: salmon;
  /* opacity: 0.5; */
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.carousel-button {
  position: absolute;
  /* putting the top of the bottom in the middle */
  top: 50%;
  /* the transform and the translate the middle of the button */
  transform: translateY(-50%);
  width: 12px;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.carousel-button.left {
  left: -40px;
}

.carousel-button.right {
  right: 40px;
}

.carousel-button img {
  width: 12px;
}

.carousel-slider-container {
  background-color: lightgreen;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.carousel-slider {
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
  height: 100%;
  transition: transform 250ms ease-in;
}

.carousel-slide {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}

.inner-carousel-container {
  position: absolute;
  top: 60px;
  left: calc(50% - 200px);
  height: 600px;
  width: 400px;
  margin: 0 auto;
  z-index: 9001;
}

.carousel-nav {
  display: flex;
  justify-content: center;
  padding: 10px 0;
}

.carousel-indicator {
  border: 0;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background: rgba(0, 0, 0, 0.3);
  margin: 0 12px;
  cursor: pointer;
}

.carousel-indicator.current-slide {
  background: rgba(0, 0, 0, 0.75);
}

.is-hidden {
  display: none;
}
</style>