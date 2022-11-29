<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div
    class="page-header min-vh-75"
    :style="{ backgroundImage: `url(${image})` }"
    loading="lazy"
  >
    <span class="mask bg-gradient-dark"></span>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 my-auto">
          <h4 class="text-white mb-0 fadeIn1 fadeInBottom">{{ label }}</h4>
          <h1 class="text-white fadeIn2 fadeInBottom">{{ title }}</h1>
          <p class="lead text-white opacity-8 fadeIn3 fadeInBottom">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
