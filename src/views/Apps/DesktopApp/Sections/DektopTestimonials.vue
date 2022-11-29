<script setup>
//example component
import MiniReviewCard from "../../../../examples/cards/reviewCards/MiniReviewCard.vue";

//images
import review1 from "@/assets/img/team-3.jpg";
import review2 from "@/assets/img/marie.jpg";
import review3 from "@/assets/img/team-2.jpg";
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h2 class="text-gradient text-warning mb-0">What random people</h2>
          <h2 class="mb-3">Think about us</h2>
          <p>
            That’s the main thing people are controlled by! Thoughts- their
            perception of themselves!
          </p>
        </div>
      </div>
      <div class="row mt-6">
        <div class="col-lg-4 col-md-8">
          <MiniReviewCard
            review='"If you have the opportunity to play this game of life you need
                to appreciate every moment."'
            :rating="4"
            :author="{
              image: review1,
              name: 'Mathew Glock',
              date: '5 min read',
            }"
          />
        </div>
        <div class="col-lg-4 col-md-8 ms-md-auto">
          <MiniReviewCard
            variant="gradient"
            color="warning"
            review='"If you have the opportunity to play this game of life you need
                to appreciate every moment."'
            :rating="3"
            :author="{
              image: review2,
              name: 'Mathew Glock',
              date: 'Posted on 28 February',
            }"
          />
        </div>
        <div class="col-lg-4 col-md-8">
          <MiniReviewCard
            review='"If you have the opportunity to play this game of life you need
                to appreciate every moment."'
            :rating="5"
            :author="{
              image: review3,
              name: 'Mathew Glock',
              date: '5 min read',
            }"
          />
        </div>
      </div>
      <hr class="my-5" />
      <div class="row">
        <div class="col-lg-2 col-md-4 col-6">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-apple.svg"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-facebook.svg"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-behance.svg"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-spotify.svg"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-coinbase.svg"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-pinterest.svg"
            alt="Logo"
          />
        </div>
      </div>
    </div>
  </section>
</template>
