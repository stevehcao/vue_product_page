<template>
  <div class="outer-carousel-container">
    <!-- button -->
    <!-- might have to have another wrapper for modal content!!! -->
    <div class="inner-carousel-container">
      <button class="carousel-button left">
        <img src="../assets/left-arrow.png" alt="left arrow" />
      </button>
      <div class="carousel-slider-container">
        <!-- in ul loop through images and create the li for each -->
        <ul class="carousel-slider">
          <li class="carousel-slide" v-for="(image, idx) in productImages" :key="idx">
            <img class="carousel-img" :src="image.href" :alt="image.alt" />
          </li>
        </ul>
      </div>
      <button class="carousel-button right" @click="nextButton">
        <img src="../assets/right-arrow.png" alt="right arrow" />
      </button>

      <div class="carousel-nav">
        <button v-for="(slide, idx) in productImages" :key="idx" class="carousel-indicator"></button>
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
  methods: {
    nextButton(evt) {
      console.log('evt: ', evt);
      // move to next slide
      // add slide index?
    },
    prevButton() {

    }
  }
};

// const outerContainer = document.querySelector('.outer-carousel-container');
// console.log('outerContainer: ', outerContainer);
console.log("hello");
// window.onclick = function(event) {
//   console.log('outerContainer: ', this);
//   console.log('event.target: ', event.target);
//   if (event.target == outerContainer) {
//     outerContainer.style.display = 'none';
//   }
// };
</script>

<style scoped>
.outer-carousel-container {
  background-color: lightblue;
  /* if absolute can take it out of frame BUT will mess everything else up */
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
  position: relative;
  height: 600px;
  width: 80%;
  margin: 0 auto;
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