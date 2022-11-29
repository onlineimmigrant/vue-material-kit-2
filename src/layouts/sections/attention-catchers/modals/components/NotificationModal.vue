<script setup>
//Vue Material Kit 2 Pro components
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
  <div class="container py-7">
    <div class="row mt-2 flex justify-content-center">
      <div class="col-sm-3 col-6 ms-8">
        <!-- Button trigger modal -->
        <MaterialButton
          variant="gradient"
          color="danger"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalNotification"
        >
          Launch demo modal
        </MaterialButton>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModalNotification"
          tabindex="-1"
          aria-labelledby="exampleModalNotification"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-danger modal-dialog-centered modal-"
            role="document"
          >
            <div class="modal-content bg-gradient-danger">
              <div class="modal-header border-0">
                <h6
                  class="modal-title text-white"
                  id="modal-title-notification"
                >
                  Your attention is required
                </h6>
                <MaterialButton
                  color="none"
                  class="btn-link text-white my-1"
                  data-bs-dismiss="modal"
                >
                  <i class="fas fa-times"></i>
                </MaterialButton>
              </div>
              <hr class="horizontal light mt-0" />
              <div class="modal-body">
                <div class="py-3 text-center text-white">
                  <i class="material-icons text-3xl">notifications_active</i>
                  <h4 class="heading mt-4 text-white">You should read this!</h4>
                  <p class="text-white opacity-8">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
              <hr class="horizontal light mb-0" />
              <div class="modal-footer justify-content-between border-0">
                <MaterialButton
                  variant="contained"
                  color="white"
                  class="my-1"
                  data-bs-dismiss="modal"
                >
                  Ok, Got it
                </MaterialButton>
                <MaterialButton
                  color="none"
                  class="btn-link text-white my-1"
                  data-bs-dismiss="modal"
                >
                  Close
                </MaterialButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
