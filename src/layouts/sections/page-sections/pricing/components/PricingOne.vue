<script setup>
// example component
import MiniPricingCard from "@/examples/cards/pricingCards/MiniPricingCard.vue";

//Vue Material Kit 2 Pro components
import MaterialBadge from "@/components/MaterialBadge.vue";
</script>
<template>
  <section class="py-3">
    <div class="bg-gradient-success">
      <div class="container pb-lg-9 pb-7 pt-7 postion-relative z-index-2">
        <div class="row">
          <div class="col-md-8 mx-auto text-center">
            <MaterialBadge variant="gradient" color="dark" class="mb-2"
              >Pricing</MaterialBadge
            >
            <h3 class="text-white">See our pricing</h3>
            <p class="text-white">
              You have Free Unlimited Updates and Premium Support on each
              package.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-n8">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 mb-lg-auto mb-4 my-auto p-md-0 ms-auto">
            <MiniPricingCard
              title="Starter"
              :price="{ currency: '$', amount: '199' }"
              :specifications="[
                'Complete documentation',
                'Working materials in Sketch',
                '500MB cloud storage',
                'Lite support',
              ]"
            />
          </div>

          <div class="col-lg-3 p-md-0 mb-lg-auto mb-4 z-index-2">
            <MiniPricingCard
              title="Pro"
              :price="{ currency: '$', amount: '299' }"
              :specifications="[
                'Complete documentation',
                'Working materials in Sketch',
                '100GB cloud storage',
                '500 team members',
                'Premium support',
              ]"
              :action="{
                class: 'btn-icon d-block mb-0 icon-move-right',
                color: 'success',
                label: `Try Pro <i class='fas fa-arrow-right ms-2' aria-hidden='true'></i>`,
              }"
            />
          </div>
          <div class="col-lg-3 mb-lg-auto mb-4 my-auto p-md-0 me-auto">
            <MiniPricingCard
              class="border-radius-top-start-lg-0 border-radius-bottom-start-lg-0"
              title="Premium"
              :price="{ currency: '$', amount: '399' }"
              :specifications="[
                'Complete documentation',
                'Working materials in Sketch',
                '2GB cloud storage',
                'Premium support',
              ]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
