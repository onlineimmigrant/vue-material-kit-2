export const pricing1Code = `<script setup>
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
                label: 'Try Pro <i class='fas fa-arrow-right ms-2' aria-hidden='true'></i>',
              }"
            />
          </div>
          <div class="col-lg-3 mb-lg-auto mb-4 my-auto p-md-0 me-auto">
            <MiniPricingCard
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
`;
export const pricing2Code = `<script setup>
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
`;
export const pricing3Code = `<script setup>
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
`;
