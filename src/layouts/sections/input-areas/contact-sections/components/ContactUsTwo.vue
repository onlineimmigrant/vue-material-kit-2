<script setup>
//Vue Material Kit 2 Pro components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// image
import bgImage from "@/assets/img/examples/blog4.jpg";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card overflow-hidden">
            <div class="row">
              <div class="col-lg-7">
                <form class="p-3" id="contact-form" method="post">
                  <div class="card-header px-4 py-sm-5 py-3">
                    <h2>Say Hi!</h2>
                    <p class="lead">We&#39;d like to talk with you.</p>
                  </div>
                  <div class="card-body pt-1">
                    <div class="row">
                      <div class="col-md-12 pe-2 mb-3">
                        <MaterialInput
                          class="input-group-static"
                          label="My name is"
                          type="text"
                          placeholder="Full Name"
                        />
                      </div>

                      <div class="col-md-12 pe-2 mb-3">
                        <MaterialInput
                          class="input-group-static"
                          label="I&#39;m looking for"
                          type="text"
                          placeholder="What you love"
                        />
                      </div>

                      <div class="col-md-12 pe-2 mb-3">
                        <MaterialTextArea
                          id="message"
                          class="input-group-static mb-0"
                          :rows="6"
                          placeholder="I want to say that..."
                          >Your message</MaterialTextArea
                        >
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 text-end ms-auto">
                        <MaterialButton
                          type="submit"
                          variant="gradient"
                          color="success"
                          class="mb-0"
                          >Send Message</MaterialButton
                        >
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div
                class="col-lg-5 position-relative bg-cover px-0"
                :style="{
                  backgroundImage: `url(${bgImage})`,
                }"
              >
                <div
                  class="z-index-2 text-center d-flex h-100 w-100 d-flex m-auto justify-content-center"
                >
                  <div class="mask bg-gradient-success opacity-9"></div>
                  <div class="p-5 position-relative text-start my-auto">
                    <h3 class="text-white">Contact Information</h3>
                    <p class="text-white opacity-8 mb-4">
                      Fill up the form and our Team will get back to you within
                      24 hours.
                    </p>
                    <div class="d-flex p-2 text-white">
                      <i class="material-icons text-sm">call</i>
                      <span class="text-sm opacity-8 ps-3"
                        >(+40) 772 100 200</span
                      >
                    </div>
                    <div class="d-flex p-2 text-white">
                      <i class="material-icons text-sm">email</i>
                      <span class="text-sm opacity-8 ps-3"
                        >hello@creative-tim.com</span
                      >
                    </div>
                    <div class="d-flex p-2 text-white">
                      <i class="material-icons text-sm">location_on</i>
                      <span class="text-sm opacity-8 ps-3"
                        >Dyonisie Wolf Bucharest, RO 010458</span
                      >
                    </div>
                    <div class="mt-4">
                      <MaterialSocialButton
                        color="none"
                        type="button"
                        class="btn-link text-white btn-lg mb-0"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Log in with Facebook"
                        component="facebook"
                        route="javascript:;"
                        iconOnly
                      />
                      <MaterialSocialButton
                        color="none"
                        type="button"
                        class="btn-link text-white btn-lg mb-0"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Log in with Twitter"
                        component="twitter"
                        route="javascript:;"
                        iconOnly
                      />
                      <MaterialSocialButton
                        color="none"
                        type="button"
                        class="btn-link text-white btn-lg mb-0"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Log in with Dribbble"
                        component="dribbble"
                        route="javascript:;"
                        iconOnly
                      />
                      <MaterialSocialButton
                        color="none"
                        type="button"
                        class="btn-link text-white btn-lg mb-0"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Log in with Instagram"
                        component="instagram"
                        route="javascript:;"
                        iconOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
