<script setup>
//Vue Material Kit 2 Pro components
import MaterialButton from "../../../../components/MaterialButton.vue";
</script>
<template>
  <div class="page-header min-vh-50 bg-gradient-dark"></div>
  <div
    class="bg-gradient-warning position-relative mx-xxl-8 mx-xl-4 mx-lg-3 mx-3 py-7 z-index-2 border-radius-xl mt-n12 overflow-hidden"
  >
    <img
      src="@/assets/img/shapes/pattern-lines.svg"
      alt="pattern-lines"
      class="position-absolute opacity-6 start-0 top-0 w-100"
      loading="lazy"
    />
    <div class="container position-relative">
      <div class="row justify-content-center align-items-center">
        <div
          class="col-lg-5 col-md-7 text-start py-sm-5 me-auto position-relative"
        >
          <div class="position-relative ms-4">
            <h2 class="text-white mt-sm-0">
              Start building your awesome application
            </h2>
            <p class="lead text-white mb-5">
              Elegance is the end result of hard work, not the starting point.
              Strive to make your work so invisible that the reader thinks they
              could have written what you published. Trusted by 5.000+ clients
              from all around the world.
            </p>
            <MaterialButton variant="gradient" color="dark"
              >Start Now</MaterialButton
            >
            <MaterialButton color="none" class="text-white">Read more</MaterialButton>
          </div>
        </div>
        <div class="col-lg-7 position-absolute start-50 end-0 me-n12 w-75">
          <img
            class="w-100 d-md-block d-none"
            src="@/assets/img/macbook-2.png"
            alt="macbook"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>
