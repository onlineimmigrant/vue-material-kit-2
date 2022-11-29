<script setup>
//Vue Material Kit 2 Pro components
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
  <section
    class="my-10 py-5 bg-gradient-dark position-relative"
    :style="{
      backgroundImage:
        'url(https://images.unsplash.com/photo-1533563906091-fdfdffc3e3c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)',
    }"
  >
    <span class="mask bg-gradient-dark opacity-8"></span>
    <div class="container position-relative z-index-2">
      <div class="row">
        <div class="col-lg-5 col-md-8 m-auto text-start">
          <h5 class="text-white mb-lg-0 mb-5">
            For being a bright color. For standing out. But the time is now to
            be okay to be the greatest you.
          </h5>
        </div>
        <div class="col-lg-6 m-auto">
          <div class="row">
            <div class="col-sm-4 col-6 ps-sm-0 ms-auto">
              <MaterialButton
                class="mb-0 ms-lg-3 ms-sm-2 mb-sm-0 mb-2 me-auto d-block"
                variant="gradient"
                color="warning"
                fullWidth
              >
                Start Now
              </MaterialButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
