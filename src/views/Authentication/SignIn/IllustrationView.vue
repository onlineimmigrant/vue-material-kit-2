<script setup>
import { onMounted } from "vue";

//example component
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";

//Vue Material Kit 2 Pro components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";

//image
import illustration from "@/assets/img/illustrations/illustration-signin.jpg";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar :sticky="true" />
      </div>
    </div>
  </div>
  <div class="page-header min-vh-100">
    <div class="container">
      <div class="row">
        <div
          class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column"
        >
          <div
            class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
            :style="{
              backgroundImage: `url(${illustration})`,
              backgroundSize: 'cover',
            }"
            loading="lazy"
          ></div>
        </div>
        <div
          class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5"
        >
          <div class="card card-plain">
            <div class="card-header text-center">
              <h4 class="font-weight-bolder">Sign In</h4>
              <p class="mb-0">Enter your email and password to sign in</p>
            </div>
            <div class="card-body mt-2">
              <form role="form">
                <MaterialInput
                  id="email"
                  class="input-group-outline mb-3"
                  :label="{ class: 'form-label' }"
                  type="email"
                  placeholder="Email"
                />
                <MaterialInput
                  id="password"
                  class="input-group-outline mb-3"
                  :label="{ class: 'form-label' }"
                  type="password"
                  placeholder="Password"
                />
                <MaterialSwitch
                  class="d-flex align-items-center mb-3"
                  id="rememberMe"
                  labelClass="mb-0 ms-3"
                  >Remember me</MaterialSwitch
                >
                <div class="text-center">
                  <MaterialButton
                    class="mt-3 mb-0"
                    size="lg"
                    variant="gradient"
                    color="success"
                    fullWidth
                    >Sign in</MaterialButton
                  >
                </div>
              </form>
            </div>
            <div class="card-footer text-center pt-0 px-lg-2 px-1">
              <p class="mb-4 text-sm mx-auto">
                Don't have an account?
                <a
                  href="javascript:;"
                  class="text-success text-gradient font-weight-bold"
                  >Sign up</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
