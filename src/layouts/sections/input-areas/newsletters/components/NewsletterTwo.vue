<script setup>
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
