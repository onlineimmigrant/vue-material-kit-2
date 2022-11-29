<script setup>
// example component
import SimpleInfoPricingCard from "@/examples/cards/pricingCards/SimpleInfoPricingCard.vue";

// image
import patternLines from "@/assets/img/shapes/pattern-lines.svg";
</script>
<template>
  <section class="py-2 bg-gray-200">
    <div class="container pt-5">
      <div class="row">
        <div
          class="col-lg-4 col-md-10 d-flex justify-content-center flex-column"
        >
          <h3 class="mt-3">Choose a plan for your next project</h3>
          <p class="lead">
            You have Free Unlimited Updates and Premium Support on each package.
            You also have 20 days to request a refund.
          </p>
          <div class="nav-wrapper me-auto mt-4 mb-5 mb-lg-0">
            <ul
              class="nav nav-pills nav-fill shadow p-1"
              id="tabs-pricing"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link mb-sm-3 mb-md-0 active"
                  id="tabs-iconpricing-tab-1"
                  data-bs-toggle="tab"
                  href="#personal"
                  role="tab"
                  aria-controls="tabs-pricing-tab-1"
                  aria-selected="true"
                >
                  Freelancer
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mb-sm-3 mb-md-0"
                  id="tabs-iconpricing-tab-2"
                  data-bs-toggle="tab"
                  href="#commercial"
                  role="tab"
                  aria-controls="tabs-pricing-tab-2"
                  aria-selected="false"
                >
                  Startup
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-7 col-md-12 ms-lg-auto me-lg-auto">
          <div class="tab-content tab-space">
            <div class="tab-pane active" id="personal">
              <div class="row">
                <div class="col-md-6">
                  <SimpleInfoPricingCard
                    variant="fill"
                    color="white"
                    title="Standard"
                    :price="{
                      currency: '$',
                      amount: '25',
                      charged: 'per month',
                    }"
                    :specifications="[
                      '<b>20GB <span>File Storage</span>',
                      '<b>15</b> <span>Users</span>',
                      '<b>False</b> <span>Support</span>',
                    ]"
                    :action="{
                      color: 'bg-gradient-success',
                      label: 'Request a demo',
                    }"
                  />
                </div>
                <div class="col-md-6">
                  <SimpleInfoPricingCard
                    variant="gradient"
                    color="success"
                    :image="patternLines"
                    title="Standard"
                    :price="{
                      currency: '$',
                      amount: '59',
                      charged: 'per month',
                    }"
                    :specifications="[
                      '<b>50GB <span>File Storage</span>',
                      '<b>100</b> <span>Users</span>',
                      '<b>Premium</b> <span>Support</span>',
                    ]"
                    :action="{
                      color: 'btn-white',
                      label: 'Request a demo',
                    }"
                  />
                </div>
              </div>
            </div>
            <div class="tab-pane" id="commercial">
              <div class="row">
                <div class="col-md-6">
                  <SimpleInfoPricingCard
                    variant="fill"
                    color="white"
                    title="Gold"
                    :price="{
                      currency: '$',
                      amount: '100',
                      charged: 'per month',
                    }"
                    :specifications="[
                      '<b>200GB <span>File Storage</span>',
                      '<b>Unlimited</b> <span>Users</span>',
                      '<b>Premium</b> <span>Support</span>',
                    ]"
                    :action="{
                      color: 'bg-gradient-success',
                      label: 'Request a demo',
                    }"
                  />
                </div>
                <div class="col-md-6">
                  <SimpleInfoPricingCard
                    variant="gradient"
                    color="success"
                    :image="patternLines"
                    title="Standard"
                    :price="{
                      currency: '$',
                      amount: '135',
                      charged: 'per month',
                    }"
                    :specifications="[
                      '<b>500GB <span>File Storage</span>',
                      '<b>Unlimited</b> <span>Users</span>',
                      '<b>No time</b> <span>Tracking</span>',
                    ]"
                    :action="{
                      color: 'btn-white',
                      label: 'Request a demo',
                    }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
