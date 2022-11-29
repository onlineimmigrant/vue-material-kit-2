<script setup>
const data = [
  {
    icon: "credit_card",
    title: "Global payments in a single integration",
    items: ["120+ global currenices", "Global payment"],
  },
  {
    icon: "support_agent",
    title: "24/7 email, phone and chat support",
    items: ["24/7 support", "Fast responses"],
  },
  {
    icon: "biotech",
    title: "Working with the latest technologies",
    items: ["Custom apps", "Best technologies"],
  },
  {
    icon: "bolt",
    title: "Fast and secure payments over the world",
    items: ["Full time access", "Transparent transactions"],
  },
  {
    icon: "receipt_long",
    title: "Financial reconciliation and reporting",
    items: ["5.000+ archives", "Real-time reporting"],
  },
  {
    icon: "group",
    title: "Developer platform and third-party integrations",
    items: ["Over 100 extensions", "Developer Dashboard"],
  },
];
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <h3>Read More About Us</h3>
          <p class="font-weight-normal">
            Pain is what we go through as we become older. We get insulted by
            others, lose trust for those others. We get back stabbed by friends.
            It becomes harder for us to give others a hand.
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div
          class="col-md-4"
          v-for="{ icon, title, items } of data"
          :key="title"
        >
          <div class="p-3 text-start ps-0">
            <i class="material-icons text-gradient text-success text-3xl">{{
              icon
            }}</i>
            <h5 class="mt-3 mb-4 font-weight-bolder">
              {{ title }}
            </h5>
            <div class="p-3 d-flex px-0 py-1" v-for="item of items" :key="item">
              <i class="material-icons text-success font-weight-bold">done</i>
              <div class="ps-3">
                <span class="text-sm font-weight-bold">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
