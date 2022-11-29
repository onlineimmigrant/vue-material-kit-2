export const CTA1Code = `<script setup>
//Vue Material Kit 2 Pro components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// image
import image from "@/assets/img/examples/blog2.jpg";
</script>
<template>
  <section class="py-7 mt-1">
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
                    >Subscribe</MaterialButton>
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
`;

export const CTA2Code = `<script setup>
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
`;

export const CTA3Code = `<script setup>
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
                fullWidth>
                Start Now
                </MaterialButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
`;
