<script setup>
// slider lib
import Slider from "@vueform/slider";
</script>
<template>
  <section class="py-7 mt-4">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-lg-6 mx-auto">
          <Slider :value="[30, 80]" />
          <br />
          <Slider :value="50" :tooltips="false" />
        </div>
      </div>
    </div>
  </section>
</template>
<!-- slider style -->
<style src="@vueform/slider/themes/default.css"></style>
