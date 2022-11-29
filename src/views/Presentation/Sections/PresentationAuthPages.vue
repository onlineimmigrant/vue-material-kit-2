<script setup>
import ExampleCard from "../Components/ExampleCard.vue";

import imgSigninCover from "@/assets/img/signin-cover.png";
import imgSignupCover from "@/assets/img/signup-cover.png";
</script>
<template>
  <section class="mt-lg-10 pb-4 bg-gradient-dark position-relative mx-n3">
    <img
      src="@/assets/img/shapes/pattern-lines.svg"
      loading="lazy"
      alt="pattern-lines"
      class="position-absolute start-0 top-md-0 w-100 opacity-6"
    />
    <div class="container">
      <div class="row">
        <div class="col-lg-4 my-auto pt-4">
          <h2 class="mb-4 text-white">Account Pages for beautiful webapps</h2>
          <p class="text-white opacity-8">
            We created many examples for pages like Signup, Signin, Forgot
            Password, 2FA Authentification and so on. Just choose between a
            Basic Design, an illustration or a cover and you are good to go!
          </p>
          <div class="buttons">
            <RouterLink
              :to="{ name: 'signin-cover' }"
              target="_blank"
              class="btn bg-gradient-success mt-4"
              >View Pages</RouterLink
            >
            <RouterLink
              :to="{ name: 'signup-cover' }"
              target="_blank"
              class="btn text-white shadow-none mt-4"
              >View Signup Pages</RouterLink
            >
          </div>
        </div>
        <div class="col-lg-8 ps-5 pe-0">
          <div class="row mt-6">
            <div class="col-lg-4 col-6">
              <ExampleCard
                class="p-1 mt-4"
                :image="imgSigninCover"
                route="signin-cover"
              />
            </div>
            <div class="col-lg-4 col-6">
              <ExampleCard
                class="mt-4"
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/account/reset-cover.jpg"
                route="reset-cover"
              />
            </div>
            <div class="col-lg-4 col-6 d-lg-block d-none">
              <ExampleCard
                class="mt-4"
                :image="imgSignupCover"
                route="signup-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
