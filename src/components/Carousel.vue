<template>
  <div class="module-overlay-container">
    <div class="module-overlay" @click="closeCarousel"></div>
    <!-- pull out inner container -->
    <div class="inner-carousel-container">
      <button class="close-button" aria-label="close button" @click="closeCarousel">&#215;</button>
      <button class="carousel-button left" aria-label="previous slide" @click="prevButton">
        <img src="../assets/left-arrow.png" alt="left arrow" />
      </button>
      <div class="carousel-slider-container">
        <ul class="carousel-slider">
          <li class="carousel-slide">
            <img class="carousel-slide-img" :src="currentElement.href" :alt="currentElement.alt" />
          </li>
        </ul>
      </div>
      <button class="carousel-button right" aria-label="next slide" @click="nextButton">
        <img src="../assets/right-arrow.png" alt="right arrow" />
      </button>

      <div class="carousel-nav">
        <div class="carousel-nav-overlay"></div>
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
      this.$emit('closeCarousel', this.currentElement);
    }
  }
};
</script>

<style scoped>
.module-overlay {
  background-color: #000000;
  opacity: 0.65;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.carousel-nav-overlay {
  z-index: 0;
  background-color: #000000;
  opacity: 0.35;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: -2px;
}

.carousel-button {
  position: absolute;
  /* putting the top of the bottom in the middle */
  top: 50%;
  /* the transform and the translate the middle of the button */
  transform: translateY(-50%);
  z-index: 2;
  width: 27px;
  border: 0;
  background: #ffffff;
  border-radius: 50%;
  text-align: center;
  opacity: 0.7;
  cursor: pointer;
}

.carousel-button.left {
  left: 9px;
}

.carousel-button.right {
  right: 9px;
}

.carousel-button img {
  width: 12px;
}

.carousel-slider-container {
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
  top: 70px;
  left: 8px;
  height: 363px;
  width: 95%;
  margin: 0 auto;
  z-index: 1;
  margin-top: 15%;
}

.carousel-nav {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  position: absolute;
  bottom: 2px;
  width: 100%;
}

.carousel-indicator {
  border: 0;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background: transparent;
  margin: 0 12px;
  cursor: pointer;
  z-index: 3;
  border: 1px solid #ffffff;
}

.carousel-indicator.current-slide {
  background: #ffffff;
}

.is-hidden {
  display: none;
}

.close-button {
  position: absolute;
  /* putting the top of the bottom in the middle */
  right: 0;
  top: 0;
  z-index: 2;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-size: 30px;
  font-weight: bold;
  color: rgb(105, 105, 105);
}

@media (min-width: 480px) {
  .inner-carousel-container {
    top: 140px;
    left: calc(50% - 186px);
  }
}

@media (min-width: 768px) {
  .inner-carousel-container {
    position: absolute;
    top: 140px;
    height: 363px;
    width: 363px;
    margin: 0 auto;
    z-index: 1;
    margin-top: 15%;
  }
}

.carousel-slide-img {
  transition: opacity 0.5s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>