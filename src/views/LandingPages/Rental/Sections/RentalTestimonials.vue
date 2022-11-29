<script setup>
// example components
import MaterialBadge from "../../../../components/MaterialBadge.vue";
import SimpleReviewCard from "../../../../examples/cards/reviewCards/SimpleReviewCard.vue";

// images
import oliviaHarper from "@/assets/img/team-2.jpg";
import simonLauren from "@/assets/img/team-3.jpg";
import lucianEurel from "@/assets/img/team-4.jpg";
</script>
<template>
  <section
    class="py-3 mt-5 bg-gradient-dark position-relative overflow-hidden mx-n5"
  >
    <img
      src="@/assets/img/shapes/pattern-lines.svg"
      class="position-absolute opacity-2 w-100 top-0 d-md-block d-none"
      alt="avatar"
    />
    <div class="container pt-6 pb-5 position-relative z-index-3">
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <MaterialBadge color="white" class="text-dark mb-2"
            >Testimonials</MaterialBadge
          >
          <h2 class="text-white mb-3">Some thoughts from our clients</h2>
          <h5 class="text-white font-weight-light px-4 px-md-0">
            If you’re selected for them you’ll also get three tickets,
            opportunity to access Investor Office Hours and Mentor Hours and
            much more all for free.
          </h5>
        </div>
      </div>
      <div class="row mt-8 px-4 px-md-0">
        <div class="col-md-4 mb-md-0 mb-7">
          <SimpleReviewCard
            :image="oliviaHarper"
            name="Olivia Harper"
            username="oliviaharper"
            review="The connections you make at Web Summit are unparalleled, we met users all over the world."
          />
        </div>
        <div class="col-md-4 mb-md-0 mb-7">
          <SimpleReviewCard
            :image="simonLauren"
            name="Simon Lauren"
            username="simonlaurent"
            review="The networking at Web Summit is like no other European tech
                conference. Everything is amazing."
          />
        </div>
        <div class="col-md-4 mb-md-0 mb-7">
          <SimpleReviewCard
            :image="lucianEurel"
            name="Lucian Eurel"
            username="luciaeurel"
            review="Web Summit will increase your appetite, your inspiration, your
                motivation and your network."
          />
        </div>
      </div>
    </div>
  </section>
</template>
