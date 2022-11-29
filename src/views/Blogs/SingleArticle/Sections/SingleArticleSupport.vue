<script setup>
//Vue Material Kit 2 Pro components
import MaterialSocialButton from "../../../../components/MaterialSocialButton.vue";
</script>
<template>
  <div class="py-lg-5 py-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h4 class="mb-1">Thank you for your support!</h4>
          <p class="lead mb-0">Delivering the best products</p>
        </div>
        <div
          class="col-lg-6 mt-lg-0 mt-4 d-lg-flex align-items-center justify-content-end"
        >
          <MaterialSocialButton
            color="twitter"
            component="twitter"
            label="Twitter"
            route="javascript:;"
          />
          <MaterialSocialButton
            color="facebook"
            component="facebook-square"
            label="Facebook"
            route="javascript:;"
          />
          <MaterialSocialButton
            color="tumblr"
            component="tumblr"
            label="Tumblr"
            route="javascript:;"
          />
          <MaterialSocialButton
            color="dribbble"
            component="dribbble"
            label="Dribbble"
            route="javascript:;"
          />
        </div>
      </div>
    </div>
  </div>
</template>
