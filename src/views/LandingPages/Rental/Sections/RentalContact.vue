<script setup>
//Vue Material Kit 2 Pro components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
  <div class="min-vh-90">
    <img
      class="w-50 position-absolute end-0 border-radius-top-start-lg"
      src="https://images.unsplash.com/photo-1539803442075-48618f39bb3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=963&q=80"
      alt="lakeHouse"
      loading="lazy"
    />
    <div class="container">
      <div class="row mt-8">
        <div class="col-lg-7 d-flex justify-content-center flex-column">
          <div
            class="card card-body d-flex justify-content-center shadow-lg p-sm-5 blur align-items-center"
          >
            <h3 class="text-center">Contact us</h3>
            <form id="contact-form" method="post" autocomplete="off">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <MaterialInput
                      class="input-group-static"
                      label="First Name"
                      placeholder="eg. Michael"
                    />
                  </div>
                  <div class="col-md-6 ps-2 mt-4 mt-md-0">
                    <MaterialInput
                      class="input-group-static"
                      label="Last Name"
                      placeholder="eg. Prior"
                    />
                  </div>
                </div>
                <div class="mb-4 mt-4">
                  <MaterialInput
                    class="input-group-static"
                    label="Email Address"
                    placeholder="eg. material@design.com"
                  />
                </div>
                <MaterialTextArea id="message" class="input-group-static mb-4"
                  >Your Message</MaterialTextArea
                >

                <div class="row">
                  <div class="col-md-12">
                    <MaterialSwitch class="mb-4" id="toc" checked
                      >I agree to the
                      <a href="javascript:;" class="text-dark"
                        ><u>Terms and Conditions</u></a
                      >.</MaterialSwitch
                    >
                  </div>
                  <div class="col-md-12">
                    <MaterialButton
                      type="submit"
                      variant="gradient"
                      color="dark"
                      fullWidth
                      >Send Message
                    </MaterialButton>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
