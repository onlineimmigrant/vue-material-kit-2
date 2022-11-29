export const content1Code = ``;

export const content2Code = `<script setup>
//Vue Material Kit 2 Pro components
import MaterialBadge from "@/components/MaterialBadge.vue";
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialAvatar from "@/components/MaterialAvatar.vue";
// image
import profilePic from "@/assets/img/team-2.jpg";
</script>
<template>
  <section class="py-10">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 ms-auto me-auto">
          <div class="row">
            <div class="col-md-6 my-auto">
              <div>
                <MaterialBadge color="success" size="sm"
                  >Photography</MaterialBadge
                >
                <MaterialBadge color="success" size="sm" class="mx-1"
                  >Stories</MaterialBadge
                >
                <MaterialBadge color="success" size="sm">Castle</MaterialBadge>
              </div>
            </div>
            <div class="col-md-6">
              <MaterialSocialButton
                class="mb-0 mt-md-0 mt-4 float-md-end"
                route="javascript:;"
                color="pinterest"
                component="pinteresst"
                label="232"
              />
              <MaterialSocialButton
                class="mb-0 mt-md-0 mt-4 float-md-end"
                route="javascript:;"
                color="twitter"
                component="twitter"
                label="910"
              />
              <MaterialSocialButton
                class="mb-0 mt-md-0 mt-4 float-md-end"
                route="javascript:;"
                color="facebook"
                component="facebook"
                label="872"
              />
            </div>
          </div>

          <hr class="dark horizontal" />

          <div class="d-flex">
            <div>
              <a href="javascript:;">
                <div class="position-relative">
                  <MaterialAvatar
                    :image="profilePic"
                    size="xxl"
                    borderRadius="xl"
                  />
                </div>
              </a>
            </div>
            <div class="ms-4 my-auto">
              <h5>Alec Thompson</h5>
              <p class="text-sm mb-0">
                I&#39;ve been trying to figure out the bed design for the master
                bedroom at our Hidden Hills compound...I like good music from
                Youtube.
              </p>
            </div>
            <div class="my-auto d-md-block d-none ms-2">
              <MaterialButton variant="fill" color="dark" class="pull-end mb-0"
                >Follow</MaterialButton
              >
            </div>
          </div>
          <div class="my-auto d-md-none d-block ms-2">
            <MaterialButton variant="fill" color="dark" class="mt-3"
              >Follow</MaterialButton
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
`;
