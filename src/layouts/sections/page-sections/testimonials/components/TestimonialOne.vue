<script setup>
// example component
import DefaultReviewCard from "@/examples/cards/reviewCards/DefaultReviewCard.vue";

// images
import team1 from "@/assets/img/marie.jpg";
import team2 from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
// logos
import logoApple from "@/assets/img/logos/gray-logos/logo-apple.svg";
import logoFacebook from "@/assets/img/logos/gray-logos/logo-facebook.svg";
import logoBehance from "@/assets/img/logos/gray-logos/logo-behance.svg";
import logoSpotify from "@/assets/img/logos/gray-logos/logo-spotify.svg";
import logoCoinbase from "@/assets/img/logos/gray-logos/logo-coinbase.svg";
import logoPinterest from "@/assets/img/logos/gray-logos/logo-pinterest.svg";
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h2 class="mb-3">Think about us</h2>
          <p>
            That’s the main thing people are controlled by! Thoughts - their
            perception of themselves!
          </p>
        </div>
      </div>
      <div class="row mt-6">
        <DefaultReviewCard
          :image="team1"
          name="Mathew Glock"
          date="5 min read"
          review='"If you have the opportunity to play this game of life you need
                to appreciate every moment."'
          :rating="4"
        />
        <DefaultReviewCard
          class="ms-md-auto"
          color="bg-gradient-success"
          :image="team2"
          name="Mathew Glock"
          date="Posted on 28 February"
          review='"If you have the opportunity to play this game of life you need
                to appreciate every moment."'
          :rating="3"
        />
        <DefaultReviewCard
          :image="team3"
          name="Mathew Glock"
          date="5 min read"
          review='"If you have the opportunity to play this game of life you need
                to appreciate every moment."'
          :rating="5.0"
        />
      </div>
      <hr class="horizontal dark my-5" />
      <div class="row">
        <div class="col-lg-2 col-6">
          <img class="w-100 opacity-6" :src="logoApple" alt="Logo" />
        </div>
        <div class="col-lg-2 col-6">
          <img class="w-100 opacity-6" :src="logoFacebook" alt="Logo" />
        </div>
        <div class="col-lg-2 col-6">
          <img class="w-100 opacity-6" :src="logoBehance" alt="Logo" />
        </div>
        <div class="col-lg-2 col-6">
          <img class="w-100 opacity-6" :src="logoSpotify" alt="Logo" />
        </div>
        <div class="col-lg-2 col-6">
          <img class="w-100 opacity-6" :src="logoCoinbase" alt="Logo" />
        </div>
        <div class="col-lg-2 col-6">
          <img class="w-100 opacity-6" :src="logoPinterest" alt="Logo" />
        </div>
      </div>
    </div>
  </section>
</template>
