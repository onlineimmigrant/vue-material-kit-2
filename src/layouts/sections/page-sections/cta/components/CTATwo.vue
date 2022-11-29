<script setup>
//Vue Material Kit 2 Pro components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";
</script>
<template>
  <div class="py-11">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h4 class="mb-1">Thank you for your support!</h4>
          <p class="lead mb-0">We deliver the best web products</p>
        </div>
        <div class="col-lg-6 d-flex align-items-center">
          <MaterialSocialButton
            route="javascript:;"
            component="twitter"
            color="twitter"
            label="Twitter"
          />
          <MaterialSocialButton
            route="javascript:;"
            component="facebook-square"
            color="facebook"
            label="Facebook"
          />
          <MaterialSocialButton
            route="javascript:;"
            component="tumblr"
            color="tumblr"
            label="Tumblr"
          />
          <MaterialSocialButton
            route="javascript:;"
            component="dribbble"
            color="dribbble"
            label="Dribbble"
          />
        </div>
      </div>
    </div>
  </div>
</template>
