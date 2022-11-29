<script setup>
import { onMounted } from "vue";
//Vue Material Kit 2 Pro components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";
// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <section class="py-sm-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 mx-auto text-center">
          <div class="ms-3 mb-md-5">
            <h3>We are here for you</h3>
            <p>For further questions, including partnership opportunities</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="card card-plain">
            <form id="contact-form" method="post" autocomplete="off">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <MaterialInput
                      class="input-group-static mb-4"
                      type="text"
                      label="Full Name"
                    />
                  </div>
                  <div class="col-md-6 ps-md-2">
                    <MaterialInput
                      class="input-group-static mb-4"
                      type="email"
                      label="Email"
                    />
                  </div>
                </div>
                <div class="form-group mb-4 mt-md-0 mt-4">
                  <MaterialTextArea
                    class="input-group-static mb-4"
                    id="message"
                    placeholder="Describe your problem in at least 250 characters"
                    :rows="6"
                    >What can we help you?</MaterialTextArea
                  >
                </div>
                <div class="row">
                  <div class="col-md-12 text-center">
                    <MaterialButton
                      type="submit"
                      variant="gradient"
                      color="dark"
                      class="mt-4"
                      >Send Message</MaterialButton
                    >
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
