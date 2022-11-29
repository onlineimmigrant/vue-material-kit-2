<script setup>
import { onMounted } from "vue";

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import SimpleFooter from "@/examples/footers/SimpleFooter.vue";

//Vue Material Kit 2 Pro components
import MaterialInput from "@/components/MaterialInput.vue";
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
      label: 'Buy Now',
      route: 'https://www.creative-tim.com/product/vue-material-kit-pro',
      color: 'bg-gradient-dark',
    }"
  />
  <div
    class="page-header align-items-start min-vh-50 m-3 border-radius-lg"
    :style="{
      backgroundImage:
        'url(https://images.unsplash.com/photo-1497996541515-6549b145cd90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)',
    }"
    loading="lazy"
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
  </div>
  <div class="container mb-4">
    <div class="row mt-lg-n12 mt-md-n12 mt-n12 justify-content-center">
      <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
        <div class="card mt-8">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
              class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1 text-center py-4"
            >
              <h3 class="font-weight-bolder text-white">Reset Password</h3>
              <p class="mb-0 text-sm text-white">
                You will receive an e-mail in maximum 60 seconds
              </p>
            </div>
          </div>
          <div class="card-body py-4">
            <form role="form">
              <MaterialInput
                class="input-group-static mb-4"
                type="email"
                label="Email"
                placeholder="john@email.com"
              />

              <div class="text-center">
                <MaterialButton
                  class="mt-4 mb-0"
                  variant="gradient"
                  color="success"
                  fullWidth
                  >Reset</MaterialButton
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SimpleFooter class="footer position-absolute bottom-2 py-2 w-100" />
</template>
