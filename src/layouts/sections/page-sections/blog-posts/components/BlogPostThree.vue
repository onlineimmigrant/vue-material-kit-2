<script setup>
// example component
import DefaultBlogCard from "@/examples/cards/blogCards/DefaultBlogCard.vue";

// images
import post1 from "@/assets/img/examples/color2.jpg";
import post2 from "@/assets/img/examples/color3.jpg";
import post3 from "@/assets/img/examples/color1.jpg";
import author1 from "@/assets/img/team-2.jpg";
import author2 from "@/assets/img/ivana-squares.jpg";
import author3 from "@/assets/img/marie.jpg";
</script>
<template>
  <section class="py-6">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-lg-0 mb-4">
          <DefaultBlogCard
            :image="post1"
            :category="{ color: 'success', label: 'House' }"
            title="Shared Coworking"
            description="Use border utilities to quickly style the border and
                border-radius of an element. Great for images, buttons."
            :author="{
              image: author1,
              name: 'Mathew Glock',
              date: 'Posted on 28 February',
            }"
          />
        </div>
        <div class="col-lg-4 mb-lg-0 mb-4">
          <DefaultBlogCard
            :image="post2"
            :category="{ color: 'info', label: 'House' }"
            title="Really Housekeeping"
            description="Use border utilities to quickly style the border and
                border-radius of an element. Great for images, buttons."
            :author="{
              image: author2,
              name: 'Mathew Glock',
              date: 'Posted on 28 February',
            }"
          />
        </div>
        <div class="col-lg-4 mb-lg-0 mb-4">
          <DefaultBlogCard
            :image="post3"
            :category="{ color: 'warning', label: 'House' }"
            title="Shared Coworking"
            description="Use border utilities to quickly style the border and
                border-radius of an element. Great for images, buttons."
            :author="{
              image: author3,
              name: 'Mathew Glock',
              date: 'Posted on 28 February',
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>
