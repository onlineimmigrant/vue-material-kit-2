export const simpleModalCode = `<script setup>
//Vue Material Kit 2 Pro components
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
  <div class="container py-7">
    <div class="row mt-5">
      <div class="col-sm-3 col-6 mx-auto">
        <!-- Button trigger modal -->
        <MaterialButton
          variant="gradient"
          color="success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal">
          Launch demo modal
        </MaterialButton>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Your modal title
                </h5>
                <MaterialButton
                  color="none"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close">
                </MaterialButton>
              </div>
              <div class="modal-body">
                Society has put up so many boundaries, so many limitations on
                what’s right and wrong that it’s almost impossible to get a pure
                thought out.
                <br /><br />
                It’s like a little kid, a little boy, looking at colors, and no
                one told him what colors are good, before somebody tells you you
                shouldn’t like pink because that’s for girls, or you’d instantly
                become a gay two-year-old.
              </div>
              <div class="modal-footer justify-content-between">
                <MaterialButton
                  variant="gradient"
                  color="dark"
                  data-bs-dismiss="modal">
                  Close
                </MaterialButton>
                <MaterialButton variant="gradient" color="success" class="mb-0">
                  Save changes
                </MaterialButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`;

export const notificationModalCode = `<script setup>
//Vue Material Kit 2 Pro components
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
  <div class="container py-7">
    <div class="row mt-5">
      <div class="col-sm-3 col-6 mx-auto">
        <!-- Button trigger modal -->
        <MaterialButton
          variant="gradient"
          color="danger"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalNotification">
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
                  data-bs-dismiss="modal">
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
                  color="none"
                  class="text-white my-1"
                  data-bs-dismiss="modal">
                  Ok, Got it
                </MaterialButton>
                <MaterialButton
                  color="none"
                  class="btn-link text-white my-1"
                  data-bs-dismiss="modal">
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
`;
