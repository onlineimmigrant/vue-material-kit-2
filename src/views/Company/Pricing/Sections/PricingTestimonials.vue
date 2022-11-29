<script setup>
// example component
import ComplexReviewCard from "../../../../examples/cards/reviewCards/ComplexReviewCard.vue";

// images
import review1 from "@/assets/img/examples/clem-onojegaw.jpg";
import review2 from "@/assets/img/examples/studio-3.jpg";
import logoSlack from "@/assets/img/logos/small-logos/logo-slack.svg";
import logoGoogle from "@/assets/img//logos/medium-logos/logo-google.svg";
</script>
<template>
  <section class="py-7 position-relative">
    <div
      id="carousel-testimonial-pricing"
      class="carousel slide carousel-team"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container">
            <ComplexReviewCard
              :image="review1"
              title=" Excelent payment service. You guys are the best!"
              review='"Let the brain, muscles, nerves, every part of your body,
                    be full of that idea, and just leave every other idea alone.
                    This is the way to success."'
              :author="{
                logo: logoSlack,
                name: 'Mathew Glock',
                role: 'Marketing Manager - Slack',
              }"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <ComplexReviewCard
              :image="review2"
              title=" Awesome services! Fast and secure."
              review='"Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status."'
              :author="{
                logo: logoGoogle,
                name: 'Ivana Goerge',
                role: 'CFO - Google',
              }"
            />
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev text-dark text-lg"
        href="#carousel-testimonial-pricing"
        role="button"
        data-bs-slide="prev"
      >
        <i class="fas fa-chevron-left"></i>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next text-dark text-lg"
        href="#carousel-testimonial-pricing"
        role="button"
        data-bs-slide="next"
      >
        <i class="fas fa-chevron-right"></i>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>
</template>
