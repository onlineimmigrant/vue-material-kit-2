<script setup>
//Vue Material Kit 2 Pro components
import MaterialBadge from "@/components/MaterialBadge.vue";

// images
import bg1 from "@/assets/img/bg.jpg";
import bg2 from "@/assets/img/examples/content-1.jpg";
import bg3 from "@/assets/img/examples/content-2.jpg";
import bg4 from "@/assets/img/examples/content-3.jpg";
import bg5 from "@/assets/img/examples/content-4.jpg";
import bg6 from "@/assets/img/examples/content-5.jpg";
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-8 mx-auto text-center mb-5">
          <MaterialBadge color="success" class="mb-2">
            Co-working</MaterialBadge
          >
          <h2>Explore our places in London</h2>
          <p>
            If you can’t decide, the answer is no. If two equally difficult
            paths, choose the one more painful in the short term (pain avoidance
            is creating an illusion of equality).
          </p>
        </div>
      </div>
      <div class="row min-vh-25">
        <div class="col-sm-4 col-5 mb-sm-0 mb-3">
          <div
            :style="{ backgroundImage: `url(${bg1})` }"
            class="w-100 h-100 border-radius-lg shadow bg-cover"
          ></div>
        </div>
        <div class="col-sm-3 col-7 mb-sm-0 mb-3">
          <div
            :style="{ backgroundImage: `url(${bg2})` }"
            class="w-100 h-100 border-radius-lg bg-cover"
          ></div>
        </div>
        <div class="col-sm-5 mb-sm-0 mb-3">
          <div
            :style="{ backgroundImage: `url(${bg3})` }"
            class="w-100 h-100 border-radius-lg shadow bg-cover"
          ></div>
        </div>
      </div>
      <div class="row min-vh-25 mt-4">
        <div class="col-sm-3 col-7 mb-sm-0 mb-3">
          <div
            :style="{ backgroundImage: `url(${bg4})` }"
            class="w-100 h-100 border-radius-lg shadow bg-cover"
          ></div>
        </div>
        <div class="col-sm-5 col-5 mb-sm-0 mb-3">
          <div
            :style="{ backgroundImage: `url(${bg5})` }"
            class="w-100 h-100 border-radius-lg shadow bg-cover"
          ></div>
        </div>
        <div class="col-sm-4 mb-sm-0 mb-3">
          <div
            :style="{ backgroundImage: `url(${bg6})` }"
            class="w-100 h-100 border-radius-lg shadow bg-cover"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
