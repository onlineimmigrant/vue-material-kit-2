<script setup>
import { onMounted } from "vue";

//Vue Material Kit 2 Pro components
import MaterialButton from "@/components/MaterialButton.vue";

//types.js
import Typed from "typed.js";

//image
import backgroundImage from "@/assets/img/bg9.jpg";

onMounted(() => {
  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
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
      :style="{ backgroundImage: `url(${backgroundImage})` }"
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
</template>
