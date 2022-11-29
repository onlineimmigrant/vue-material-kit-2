<script setup>
// example component
import DefaultPricingCard from "@/examples/cards/pricingCards/DefaultPricingCard.vue";
</script>
<template>
  <section class="py-3">
    <div class="bg-gradient-dark m-3 border-radius-xl">
      <div class="container pb-lg-9 pb-10 pt-7 postion-relative z-index-2">
        <div class="row">
          <div class="col-md-6 mx-auto text-center">
            <h3 class="text-white">See our pricing</h3>
            <p class="text-white">
              You have Free Unlimited Updates and Premium Support on each
              package.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-n10">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-4 col-md-6 col-7 mx-auto text-center">
            <div class="nav-wrapper mt-5 position-relative z-index-2">
              <ul
                class="nav nav-pills nav-fill flex-row p-1"
                id="tabs-pricing"
                role="tablist"
              >
                <li class="nav-item">
                  <a
                    class="nav-link mb-0 active"
                    id="tabs-iconpricing-tab-1"
                    data-bs-toggle="tab"
                    href="#monthly"
                    role="tab"
                    aria-controls="monthly"
                    aria-selected="true"
                  >
                    Monthly
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link mb-0"
                    id="tabs-iconpricing-tab-2"
                    data-bs-toggle="tab"
                    href="#annual"
                    role="tab"
                    aria-controls="annual"
                    aria-selected="false"
                  >
                    Annual
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="tab-content tab-space">
          <div class="tab-pane active" id="monthly">
            <div class="row">
              <div class="col-lg-4 mb-lg-0 mb-4">
                <DefaultPricingCard
                  :badge="{ color: 'light', label: 'Starter' }"
                  :price="{ currency: '$', amount: '59', charged: 'mo' }"
                  :specifications="[
                    { label: '2 team members', includes: true },
                    { label: '20GB Cloud storage', includes: true },
                    { label: 'Integration help', includes: true },
                    { label: 'Sketch Files', includes: false },
                    { label: 'API Access', includes: false },
                    { label: 'Complete documentation', includes: false },
                  ]"
                  :action="{
                    color: 'dark',
                    route: 'javascript:;',
                    label: 'Join',
                  }"
                />
              </div>
              <div class="col-lg-4 mb-lg-0 mb-4">
                <DefaultPricingCard
                  color="dark"
                  :badge="{ color: 'success', label: 'premium' }"
                  :price="{ currency: '$', amount: '89', charged: 'mo' }"
                  :specifications="[
                    { label: '10 team members', includes: true },
                    { label: '40GB Cloud storage', includes: true },
                    { label: 'Integration help', includes: true },
                    { label: 'Sketch Files', includes: true },
                    { label: 'API Access', includes: false },
                    { label: 'Complete documentation', includes: false },
                  ]"
                  :action="{
                    color: 'success',
                    route: 'javascript:;',
                    label: 'Try Premium',
                  }"
                  colored
                />
              </div>
              <div class="col-lg-4 mb-lg-0 mb-4">
                <DefaultPricingCard
                  :badge="{ color: 'light', label: 'Enterprise' }"
                  :price="{ currency: '$', amount: '99', charged: 'mo' }"
                  :specifications="[
                    { label: 'Unlimited team members', includes: true },
                    { label: '100GB Cloud storage', includes: true },
                    { label: 'Integration help', includes: true },
                    { label: 'Sketch Files', includes: true },
                    { label: 'API Access', includes: true },
                    { label: 'Complete documentation', includes: true },
                  ]"
                  :action="{
                    color: 'dark',
                    route: 'javascript:;',
                    label: 'Join',
                  }"
                />
              </div>
            </div>
          </div>
          <div class="tab-pane" id="annual">
            <div class="row">
              <div class="col-lg-4 mb-lg-0 mb-4">
                <DefaultPricingCard
                  :badge="{ color: 'light', label: 'Starter' }"
                  :price="{ currency: '$', amount: '119', charged: 'mo' }"
                  :specifications="[
                    { label: '2 team members', includes: true },
                    { label: '20GB Cloud storage', includes: true },
                    { label: 'Integration help', includes: false },
                    { label: 'Sketch Files', includes: false },
                    { label: 'API Access', includes: false },
                    { label: 'Complete documentation', includes: false },
                  ]"
                  :action="{
                    color: 'dark',
                    route: 'javascript:;',
                    label: 'Join',
                  }"
                />
              </div>
              <div class="col-lg-4 mb-lg-0 mb-4">
                <DefaultPricingCard
                  color="dark"
                  :badge="{ color: 'success', label: 'premium' }"
                  :price="{ currency: '$', amount: '159', charged: 'mo' }"
                  :specifications="[
                    { label: '10 team members', includes: true },
                    { label: '40GB Cloud storage', includes: true },
                    { label: 'Integration help', includes: true },
                    { label: 'Sketch Files', includes: true },
                    { label: 'API Access', includes: false },
                    { label: 'Complete documentation', includes: false },
                  ]"
                  :action="{
                    color: 'success',
                    route: 'javascript:;',
                    label: 'Try Premium',
                  }"
                  colored
                />
              </div>
              <div class="col-lg-4 mb-lg-0 mb-4">
                <DefaultPricingCard
                  :badge="{ color: 'light', label: 'Enterprise' }"
                  :price="{ currency: '$', amount: '399', charged: 'mo' }"
                  :specifications="[
                    { label: 'Unlimited team members', includes: true },
                    { label: '100GB Cloud storage', includes: true },
                    { label: 'Integration help', includes: true },
                    { label: 'Sketch Files', includes: true },
                    { label: 'API Access', includes: true },
                    { label: 'Complete documentation', includes: true },
                  ]"
                  :action="{
                    color: 'dark',
                    route: 'javascript:;',
                    label: 'Join',
                  }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
