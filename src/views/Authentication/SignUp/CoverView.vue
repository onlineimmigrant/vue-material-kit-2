<script setup>
import { onMounted } from "vue";

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import SimpleFooter from "@/examples/footers/SimpleFooter.vue";

//Vue Material Kit 2 Pro components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialCheckbox from "@/components/MaterialCheckbox.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <DefaultNavbar transparent />
  <div
    class="page-header align-items-start min-height-300 m-3 border-radius-xl bg-gray-200"
    :style="{
      backgroundImage:
        'url(https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
    loading="lazy"
  >
    <span class="mask bg-gradient-dark opacity-4"></span>
  </div>
  <div class="container">
    <div class="row mt-lg-n12 mt-md-n12 mt-n11 justify-content-center">
      <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
        <div class="card mt-8">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
              class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1 text-center py-4"
            >
              <h4 class="font-weight-bolder text-white mt-1">Join us today</h4>
              <p class="mb-1 text-white text-sm">
                Enter your email and password to register
              </p>
            </div>
          </div>
          <div class="card-body pb-3">
            <form role="form">
              <MaterialInput
                id="name"
                class="input-group-outline mb-3"
                :label="{ text: 'Name', class: 'form-label' }"
                type="text"
              />
              <MaterialInput
                id="email"
                class="input-group-outline mb-3"
                :label="{ text: 'Email', class: 'form-label' }"
                type="email"
              />
              <MaterialInput
                id="password"
                class="input-group-outline mb-3"
                :label="{ text: 'Password', class: 'form-label' }"
                type="password"
              />
              <MaterialCheckbox id="toc" checked>
                I agree the
                <a href="javascript:;" class="text-dark font-weight-bolder"
                  >Terms and Conditions</a
                >
              </MaterialCheckbox>
              <div class="text-center">
                <MaterialButton
                  class="my-4 mb-2"
                  variant="gradient"
                  color="success"
                  fullWidth
                  >Sign up</MaterialButton
                >
              </div>
            </form>
          </div>
          <div class="card-footer text-center pt-0 px-sm-4 px-1">
            <p class="mb-4 mx-auto">
              Already have an account?
              <a
                href="../../pages/sign-in/sign-in-cover.html"
                class="text-success text-gradient font-weight-bold"
                >Sign in</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SimpleFooter class="mt-4" />
</template>
