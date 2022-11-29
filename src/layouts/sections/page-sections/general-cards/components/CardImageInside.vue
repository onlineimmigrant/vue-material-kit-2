<script setup>
// example component
import DefaultBlogCard from "@/examples/cards/blogCards/DefaultBlogCard.vue";

// image
import postImage from "@/assets/img/annie-spratt.jpg";
import authorImage from "@/assets/img/marie.jpg";
</script>
<template>
  <section class="py-4">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-6 mx-auto">
          <DefaultBlogCard
            :image="postImage"
            :category="{ color: 'warning', label: 'Hub' }"
            title="Shared Coworking"
            description="Use border utilities to quickly style the border and
                border-radius of an element. Great for images, buttons."
            :author="{
              image: authorImage,
              name: 'Mathew Glock',
              date: 'Posted on 28 February',
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>
