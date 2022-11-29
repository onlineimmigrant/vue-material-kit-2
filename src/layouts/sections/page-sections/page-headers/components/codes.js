/* eslint-disable no-useless-escape */
export const header1Code = `<setup>
//Vue Material Kit 2 Pro components
import MaterialButton from "@/components/MaterialButton.vue";
<\/script>
<template>

  <header>
    <nav class="navbar navbar-expand-lg navbar-dark navbar-absolute bg-transparent shadow-none" >
      <div class="container">
        <a class="navbar-brand text-white" href="javascript:;">Material Design</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-header-2"
          aria-controls="navbar-header-2"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-header-2">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item"><RouterLink class="nav-link text-white" to="#"> Home </RouterLink></li>
            <li class="nav-item">
              <RouterLink class="nav-link text-white" to="#">About Us</RouterLink></li>
            <li class="nav-item">
              <RouterLink class="nav-link text-white" to="#">Contact Us</RouterLink></li>
          </ul>
          <ul class="nav navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link text-white"
                href="https://twitter.com/CreativeTim">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white mx-2"
                href="https://www.facebook.com/CreativeTim">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white"
                href="https://www.instagram.com/CreativeTimOfficial">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="page-header min-vh-100"
      :style="{
        backgroundImage: 'url(https://images.unsplash.com/photo-1520769945061-0a448c463865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
      }"
      loading="lazy">
      <span class="mask bg-gradient-dark opacity-5"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
            <h1 class="text-white mb-4">Material Kit</h1>
            <p class="text-white opacity-8 lead pe-5 me-5">
              The time is now for it be okay to be great. People in this world
              shun people for being nice.
            </p>
            <div class="buttons">
              <MaterialButton color="white" class="mt-4"
                >Get Started</MaterialButton>
              <MaterialButton color="none" class="text-white shadow-none mt-4"
                >Read more</MaterialButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>`;

export const header2Code = `<script setup>
import { onMounted } from "vue";

//Vue Material Kit 2 Pro components
import MaterialButton from "@/components/MaterialButton.vue";

//typed.js
import Typed from "typed.js";

//hook
onMounted(() => {
  if (document.getElementById("typed")) {
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
});
</script>
<template>
//  START HEADER 2 w/ waves and typed text

  <header class="position-relative">
    <nav
      class="navbar navbar-expand-lg navbar-dark navbar-absolute bg-transparent shadow-none"
    >
      <div class="container">
        <a class="navbar-brand text-white" href="javascript:;"
          >Material Design</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-header-2"
          aria-controls="navbar-header-2"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-header-2">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link text-white" href="javascript:;"> Home </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="javascript:;"> About Us </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="javascript:;">
                Contact Us
              </a>
            </li>
          </ul>

          <ul class="nav navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link text-white"
                href="https://twitter.com/CreativeTim"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white mx-2"
                href="https://www.facebook.com/CreativeTim"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white"
                href="https://www.instagram.com/CreativeTimOfficial"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div
      class="page-header min-vh-100"
      style="background-image: url('@/assets/img/bg9.jpg')"
      loading="lazy"
    >
      <span class="mask bg-gradient-info opacity-4"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 text-center mx-auto">
            <h1 class="text-white">
              Our company mission is to lead the
              <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h1>web development</h1>
              <h1>mobile development</h1>
              <h1>web design</h1>
            </div>
            <p class="lead text-white text-center pe-5 mt-4">
              The time is now for it to be okay to be great. People in this
              world shun people for being great. For being a bright color.
            </p>
            <br />
            <div class="buttons text-center">
            <MaterialButton color="white">Contact Us</MaterialButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
//   END HEADER 2 w/ waves and typed text
</template>
`;
export const header3Code = `<script setup>
//Vue Material Kit 2 Pro components
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
  <header>
    <nav
      class="navbar navbar-expand-lg navbar-absolute navbar-transparent navbar-dark shadow-none"
    >
      <div class="container">
        <a class="navbar-brand text-white" href="javascript:;"
          >Material Design</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-header-3"
          aria-controls="navbar-header-3"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-header-3">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link" href="javascript:;"> Home </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:;"> About Us </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:;"> Contact Us </a>
            </li>
          </ul>

          <ul class="nav navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="https://twitter.com/CreativeTim">
                <MaterialButton color="white" class="mb-0"
                  >Buy Now</MaterialButton
                >
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div
      class="page-header min-vh-100"
      :style="{ backgroundImage: 'url(@/assets/img/bg0.jpg)' }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-4"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-sm-9 text-center mx-auto">
            <h1 class="text-white mb-4">Work with an amazing</h1>
            <p class="lead text-white mb-sm-6 mb-4">
              We’re constantly trying to express ourselves and actualize our
              dreams. If you have the opportunity to play this game. If you have
              the opportunity to play this game.
            </p>
            <p class="text-white h6 text-uppercase mb-4">connect with us on:</p>

            <div class="d-flex justify-content-center">
              <a href="javascript:;"
                ><i class="fab fa-facebook text-white me-5"></i
              ></a>
              <a href="javascript:;"
                ><i class="fab fa-instagram text-white me-5"></i
              ></a>
              <a href="javascript:;"
                ><i class="fab fa-twitter text-white me-5"></i
              ></a>
              <a href="javascript:;"
                ><i class="fab fa-google-plus text-white"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- END HEADER 3 w/ image on background -->
</template>

`;
