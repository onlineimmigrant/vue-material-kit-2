<script setup>
//Vue Material Kit 2 Pro components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// image
import image from "@/assets/img/examples/blog2.jpg";
</script>
<template>
  <section class="py-7 mt-1 mt-4">
    <div class="container-fluid px-0">
      <div class="row justify-content-center text-center">
        <div class="col-12 position-relative">
          <div class="row bg-gray-100 bottom-0 py-7">
            <div class="col-xl-6 text-start ms-auto">
              <h4>Be the first to see the news</h4>
              <p class="mb-4">
                Your company may not be in the software business, but
                eventually, a software company will be in your business.
              </p>
              <div class="row">
                <div class="col-sm-5">
                  <MaterialInput
                    class="input-group-outline"
                    :label="{ text: 'Email Here', class: 'form-label' }"
                    inputClass="mb-sm-0 mb-2"
                  />
                </div>
                <div class="col-sm-4 ps-0">
                  <MaterialButton
                    variant="gradient"
                    color="warning"
                    class="mb-0 h-100 position-relative z-index-2"
                    >Subscribe</MaterialButton
                  >
                </div>
              </div>
            </div>

            <div class="col-xl-4 position-relative">
              <img
                class="w-100 max-width-300 border-radius-lg mt-n10 d-lg-block d-none shadow-xl"
                :src="image"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
