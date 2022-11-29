<script setup>
import { onMounted } from "vue";

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

//Vue Material Kit 2 Pro components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <DefaultNavbar
    transparent
    :action="{
      color: 'btn-white',
      route: 'https://www.creative-tim.com/product/vue-material-kit-pro',
      label: 'Buy Now',
    }"
  />
  <Header>
    <div
      class="page-header align-items-start min-height-300 m-3 border-radius-xl"
      :style="{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80)',
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
    </div>
  </Header>
  <div class="container mb-4">
    <div class="row mt-lg-n12 mt-md-n12 mt-n12 justify-content-center">
      <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
        <div class="card mt-8">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
              class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1 text-center py-4"
            >
              <h4 class="font-weight-bolder text-white mt-1">Sign In</h4>
              <p class="mb-1 text-sm text-white">
                Enter your email and password to Sign In
              </p>
            </div>
          </div>
          <div class="card-body">
            <form role="form" class="text-start">
              <MaterialInput
                id="email"
                class="input-group-static mb-4"
                label="Email"
                type="email"
                placeholder="john@email.com"
              />
              <MaterialInput
                id="password"
                class="input-group-static mb-4"
                label="Password"
                type="password"
                placeholder="•••••••••••••"
              />
              <MaterialSwitch
                class="d-flex align-items-center mb-3"
                id="rememberMe"
                labelClass="mb-0 ms-3"
                checked
                >Remember me</MaterialSwitch
              >
              <div class="text-center">
                <MaterialButton
                  class="mt-3 mb-0"
                  variant="gradient"
                  color="dark"
                  fullWidth
                  >Sign in</MaterialButton
                >
              </div>
            </form>
          </div>
          <div class="card-footer text-center pt-0 px-lg-2 px-1">
            <p class="mb-4 text-sm mx-auto">
              Don't have an account?
              <RouterLink
                :to="{ name: 'signup-cover' }"
                class="text-success text-gradient font-weight-bold"
                >Sign up</RouterLink
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
