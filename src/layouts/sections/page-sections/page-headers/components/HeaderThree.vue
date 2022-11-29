<script setup>
//Vue Material Kit 2 Pro components
import MaterialButton from "@/components/MaterialButton.vue";

// image
import bgImage from "@/assets/img/bg0.jpg";
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
      :style="{ backgroundImage: `url(${bgImage})` }"
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
