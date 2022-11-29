<script setup>
// example component
import SimplePricingCard from "../../../../examples/cards/pricingCards/SimplePricingCard.vue";
</script>
<template>
  <section class="py-md-7">
    <div class="container">
      <div class="row">
        <div class="col-md-8 mx-auto text-center">
          <h3>Pick the best plan for you</h3>
          <p>
            You have Free Unlimited Updates and Premium Support on each package.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-md-10 col-12 mx-auto text-center">
          <div class="nav-wrapper mt-5">
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
                  href="#tabs-pricing-tab-1"
                  role="tab"
                  aria-selected="true"
                >
                  Annual
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mb-0"
                  id="tabs-iconpricing-tab-2"
                  data-bs-toggle="tab"
                  href="#tabs-pricing-tab-2"
                  role="tab"
                  aria-selected="false"
                >
                  Monthly
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <SimplePricingCard
          title="Starter"
          description="Free access for 2 members"
          :price="{ currency: '$', amount: '199' }"
          :action="{
            route: '/',
            label: 'Buy now',
            color: 'bg-gradient-dark',
          }"
          :specifications="[
            'Complete documentation',
            'Working materials in Sketch',
          ]"
        />
        <SimplePricingCard
          title="Pro"
          description="Free access for 30 members"
          :price="{ currency: '$', amount: '299' }"
          :action="{
            route: '/',
            label: 'Buy now',
            color: 'bg-gradient-dark',
          }"
          :specifications="[
            'Complete documentation',
            'Working materials in Sketch',
            '2GB cloud storage',
          ]"
        />

        <SimplePricingCard
          color="bg-gradient-dark"
          title="Premium"
          description="Free access for 200 members"
          :price="499"
          :action="{ route: '', label: 'Buy now', color: 'btn-white' }"
          :specifications="[
            'Complete documentation',
            'Working materials in Sketch',
            '2GB cloud storage',
            '100 team members',
          ]"
        />

        <SimplePricingCard
          title="Enterprise"
          description="Free access for all members"
          :price="{ currency: '$', amount: '899' }"
          :action="{
            route: '/',
            label: 'Buy now',
            color: 'bg-gradient-dark',
          }"
          :specifications="[
            'Complete documentation',
            'Working materials in Sketch',
            '100GB cloud storage',
            '500 team members',
            'Premium support',
          ]"
        />
      </div>
    </div>
  </section>
</template>
