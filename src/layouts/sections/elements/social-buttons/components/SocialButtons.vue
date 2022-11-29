<script setup>
//Vue Material Kit 2 Pro components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row justify-space-between text-center py-2">
        <div class="col-12 mx-auto">
          <MaterialSocialButton
            color="facebook"
            component="facebook"
            label="Facebook"
          />
          <MaterialSocialButton
            color="twitter"
            component="twitter"
            label="Twitter"
          />
          <MaterialSocialButton
            color="instagram"
            component="instagram"
            label="Instagram"
          />
          <MaterialSocialButton
            color="github"
            component="github"
            label="github"
          />
          <MaterialSocialButton
            color="pinterest"
            component="pinterest"
            label="Pinterest"
          />
          <MaterialSocialButton
            color="youtube"
            component="youtube"
            label="Youtube"
          />
          <MaterialSocialButton
            color="vimeo"
            component="vimeo-v"
            label="Vimeo"
          />
          <MaterialSocialButton color="slack" component="slack" label="Slack" />
          <MaterialSocialButton
            color="dribbble"
            component="dribbble"
            label="Dribbble"
          />
          <MaterialSocialButton
            color="reddit"
            component="reddit"
            label="Reddit"
          />
          <MaterialSocialButton
            color="tumblr"
            component="tumblr"
            label="Tumblr"
          />
          <MaterialSocialButton
            color="linkedin"
            component="linkedin"
            label="Linkedin"
          />
        </div>
      </div>
    </div>
  </section>
</template>
