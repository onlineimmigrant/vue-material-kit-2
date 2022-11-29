export const logoArea1Code = `<script setup>
// images
import logoCoinbase from "@/assets/img/logos/gray-logos/logo-coinbase.svg";
import logoNasa from "@/assets/img/logos/gray-logos/logo-nasa.svg";
import logoNetflix from "@/assets/img/logos/gray-logos/logo-netflix.svg";
import logoPinterest from "@/assets/img/logos/gray-logos/logo-pinterest.svg";
import logoSpotify from "@/assets/img/logos/gray-logos/logo-spotify.svg";
import logoVodafone from "@/assets/img/logos/gray-logos/logo-vodafone.svg";
</script>
<template>
  <div class="py-7">
    <div class="container">
      <div class="row">
        <div class="col-8 mx-auto text-center">
          <h6 class="opacity-5">More than 50+ brands trust Soft</h6>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <img class="w-100 opacity-9" :src="logoCoinbase" alt="logo" />
        </div>
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <img class="w-100 opacity-9" :src="logoNasa" alt="logo" />
        </div>
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <img class="w-100 opacity-9" :src="logoNetflix" alt="logo" />
        </div>
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <img class="w-100 opacity-9" :src="logoPinterest" alt="logo" />
        </div>
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <img class="w-100 opacity-9" :src="logoSpotify" alt="logo" />
        </div>
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <img class="w-100 opacity-9" :src="logoVodafone" alt="logo" />
        </div>
      </div>
    </div>
  </div>
</template>
`;

export const logoArea2Code = `<script setup>
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
          :rating="4.0"
        />
        <DefaultReviewCard
          class="ms-md-auto"
          color="bg-gradient-success"
          :image="team2"
          name="Mathew Glock"
          date="Posted on 28 February"
          review='"If you have the opportunity to play this game of life you need
                to appreciate every moment."'
          :rating="3.0"
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
`;

export const logoArea3Code = `<script setup>
// logos
import logoCoinbase from "@/assets/img/logos/medium-logos/logo-coinbase.svg";
import logoNasa from "@/assets/img/logos/medium-logos/logo-nasa.svg";
import logoNetflix from "@/assets/img/logos/medium-logos/logo-netflix.svg";
import logoPinterest from "@/assets/img/logos/medium-logos/logo-pinterest.svg";
import logoSpotify from "@/assets/img/logos/medium-logos/logo-spotify.svg";
import logoVodafone from "@/assets/img/logos/medium-logos/logo-vodafone.svg";
</script>
<template>
  <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-8 mx-auto text-center">
          <h3 class="font-weight-bolder">
            More than 500 brands trust Material
          </h3>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <img class="w-100 opacity-9" :src="logoCoinbase" alt="logo" />
        </div>
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <img class="w-100 opacity-9" :src="logoNasa" alt="logo" />
        </div>
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <img class="w-100 opacity-9" :src="logoNetflix" alt="logo" />
        </div>
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <img class="w-100 opacity-9" :src="logoPinterest" alt="logo" />
        </div>
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <img class="w-100 opacity-9" :src="logoSpotify" alt="logo" />
        </div>
        <div class="col-lg-2 col-md-4 col-6 mb-4">
          <img class="w-100 opacity-9" :src="logoVodafone" alt="logo" />
        </div>
      </div>
    </div>
  </div>
</template>
`;
