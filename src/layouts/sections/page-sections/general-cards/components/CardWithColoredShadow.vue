<script setup>
// example component
import TransparentBlogCard from "@/examples/cards/blogCards/TransparentBlogCard.vue";
// images
import image from "@/assets/img/products/product-1-min.jpg";
</script>
<template>
  <section class="py-4">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-6 mx-auto">
          <TransparentBlogCard
            class="mt-4"
            :image="image"
            title="MateLabs mixes machine learning with IFTTT"
            description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
            :action="{
              label: 'Read more',
              route: '/',
              color: 'success',
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>
