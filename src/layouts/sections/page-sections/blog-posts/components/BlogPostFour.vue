<script setup>
// example component
import SimpleBackgroundCard from "../../../../../examples/cards/backgroundCards/SimpleBackgroundCard.vue";

// images
import blog1 from "@/assets/img/examples/blog1.jpg";
import blog2 from "@/assets/img/examples/blog2.jpg";
import blog3 from "@/assets/img/examples/blog3.jpg";
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mt-4">Build something great</h3>
          <p>
            We&#39;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play this game of life you
            need to appreciate every moment.
          </p>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-4 mb-lg-0 mb-4">
          <SimpleBackgroundCard
            route="javascript:;"
            :image="blog1"
            title="Search and Discovery"
            description="Website visitors today demand a frictionless user expericence
                  — especially when using search. Because of the hight standards
                  we tend to offer."
          />
        </div>
        <div class="col-lg-4 mb-lg-0 mb-4">
          <SimpleBackgroundCard
            :image="blog2"
            title="Last visits in US"
            description="Wealth creation is an evolutionarily recent positive-sum game.
                  Status is an old zero-sum game. Those attacking wealth
                  creation are often just seeking status."
          />
        </div>
        <div class="col-lg-4">
          <SimpleBackgroundCard
            :image="blog3"
            title="Grow in a beautiful area"
            description="Free people make free choices. Free choices mean you get
                  unequal outcomes. You can have freedom, or you can have equal
                  outcomes. You can&#39;t have both."
          />
        </div>
      </div>
    </div>
  </section>
</template>
