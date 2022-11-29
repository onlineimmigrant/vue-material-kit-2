<script setup>
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
