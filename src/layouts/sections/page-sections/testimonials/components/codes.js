export const testimonial1Code = `<script setup>
// example component
import DefaultReviewCard from "@/examples/cards/reviewCards/DefaultReviewCard.vue";

// images
import team1 from "@/assets/img/marie.jpg";
import team2 from "/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
// logos
import logoApple from "@/assets/img/logos/gray-logos/logo-apple.svg";
import logoFacebook from "@/assets/img/logos/gray-logos/logo-facebook.svg";
import logoBehance from "@/assets/img/logos/gray-logos/logo-behance.svg";
import logoSpotify from "@/assets/img/logos/gray-logos/logo-spotify.svg";
import logoCoinbase from "@/assets/img/logos/gray-logos/logo-coinbase.svg";
import logoPinterest from "@/assets/img/logos/gray-logos/logo-pinterest.svg";
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h2 class="mb-3">Think about us</h2>
          <p>
            That’s the main thing people are controlled by! Thoughts - their
            perception of themselves!
          </p>
        </div>
      </div>
      <div class="row mt-6">
        <DefaultReviewCard
          :image="team1"
          name="Mathew Glock"
          date="5 min read"
          review='"If you have the opportunity to play this game of life you need
                to appreciate every moment."'
          :rating="4.0"
        />
        <DefaultReviewCard
          class="ms-md-auto"
          :image="team2"
          name="Mathew Glock"
          date="Posted on 28 February"
          review='"If you have the opportunity to play this game of life you need
                to appreciate every moment."'
          :rating="3.0"
        />
        <DefaultReviewCard
          :image="team3"
          name="Mathew Glock"
          date="5 min read"
          review='"If you have the opportunity to play this game of life you need
                to appreciate every moment."'
          :rating="5.0"
        />
      </div>
      <hr class="horizontal dark my-5" />
      <div class="row">
        <div class="col-lg-2 col-6">
          <img class="w-100 opacity-6" :src="logoApple" alt="Logo" />
        </div>
        <div class="col-lg-2 col-6">
          <img class="w-100 opacity-6" :src="logoFacebook" alt="Logo" />
        </div>
        <div class="col-lg-2 col-6">
          <img class="w-100 opacity-6" :src="logoBehance" alt="Logo" />
        </div>
        <div class="col-lg-2 col-6">
          <img class="w-100 opacity-6" :src="logoSpotify" alt="Logo" />
        </div>
        <div class="col-lg-2 col-6">
          <img class="w-100 opacity-6" :src="logoCoinbase" alt="Logo" />
        </div>
        <div class="col-lg-2 col-6">
          <img class="w-100 opacity-6" :src="logoPinterest" alt="Logo" />
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const testimonial2Code = `<script setup>
// example component
import ComplexReviewCard from "@/examples/cards/reviewCards/ComplexReviewCard.vue";

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
`;

export const testimonial3Code = `<script setup>
// example components
import MaterialBadge from "@/components/MaterialBadge.vue";
import SimpleReviewCard from "@/examples/cards/reviewCards/SimpleReviewCard.vue";

// images
import oliviaHarper from "@/assets/img/team-2.jpg";
import simonLauren from "@/assets/img/team-3.jpg";
import lucianEurel from "@/assets/img/team-4.jpg";
</script>
<template>
  <section
    class="py-3 bg-gradient-dark position-relative overflow-hidden mx-n5"
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
          <h5 class="text-white font-weight-light">
            If you’re selected for them you’ll also get three tickets,
            opportunity to access Investor Office Hours and Mentor Hours and
            much more all for free.
          </h5>
        </div>
      </div>
      <div class="row mt-8 px-4">
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
`;
