<script setup>
//Vue Material Kit 2 Pro components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8 mx-auto text-center">
          <div class="ms-3 mb-md-5">
            <h3>Contact us</h3>
            <p>
              For further questions, including partnership opportunities, please
              email hello@creative-tim.com or contact using our contact form.
            </p>
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
                      class="input-group-outline mb-4"
                      :label="{ text: 'Full Name...', class: 'form-label ' }"
                      type="text"
                    />
                  </div>
                  <div class="col-md-6 ps-md-2">
                    <MaterialInput
                      class="input-group-outline"
                      :label="{ text: 'Email', class: 'form-label ' }"
                      type="email"
                    />
                  </div>
                </div>
                <MaterialTextArea
                  id="message"
                  class="input-group-outline mb-4 mt-md-0 mt-4"
                  labelClass="form-label"
                  :rows="6"
                  >What can we help you?</MaterialTextArea
                >
                <div class="row">
                  <div class="col-md-12 text-center">
                    <MaterialButton
                      type="submit"
                      variant="gradient"
                      color="success"
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
