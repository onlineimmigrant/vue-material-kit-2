export const newsletterOneCode = `<script setup>
//Vue Material Kit 2 Pro components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 me-auto">
          <h4 class="title">Get Tips &amp; Tricks every Week!</h4>
          <p class="description">
            Join our newsletter and get news in your inbox every week!
          </p>
        </div>
        <div class="col-lg-6 d-flex justify-content-center flex-column ms-auto">
          <form method="" action="">
            <div class="row">
              <div class="col-sm-8">
                <MaterialInput
                  class="input-group-outline"
                  :label="{ text: 'Your Email...', class: 'form-label ' }"
                  type="text"
                />
              </div>
              <div class="col-sm-4 ps-0">
                <MaterialButton variant="gradient" color="success" fullWidth
                  >Subscribe</MaterialButton
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const newsletterTwoCode = `<script setup>
//Vue Material Kit 2 Pro components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
  <section class="py-9">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-lg-4">
          <div
            class="icon icon-shape icon-md bg-gradient-warning shadow-warning mx-auto text-center mb-4"
          >
            <i class="material-icons opacity-10">person</i>
          </div>
          <h3>Subscribe</h3>
          <p>
            This is the paragraph where you can write more details about your
            product.
          </p>
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-lg-6">
          <form method="" action="">
            <div class="row">
              <div class="col-sm-8">
                <MaterialInput
                  class="input-group-outline"
                  :label="{ text: 'Your Email...', class: 'form-label ' }"
                  type="email"
                />
              </div>
              <div class="col-sm-4 ps-0">
                <MaterialButton variant="gradient" color="warning" fullWidth
                  >Subscribe</MaterialButton
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
`;
