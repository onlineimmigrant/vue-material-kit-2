<script setup>
// example component
import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";

// images
import backImage from "@/assets/img/examples/city.jpg";
import emma from "@/assets/img/team-5.jpg";
import william from "@/assets/img/bruce-mars.jpg";
import ivana from "@/assets/img/ivana-squares.jpg";
import marquez from "@/assets/img/ivana-square.jpg";
</script>
<template>
  <section
    class="py-7 position-relative"
    :style="{
      backgroundImage: `url(${backImage})`,
      backgroundSize: 'cover',
    }"
  >
    <span class="mask bg-gradient-dark"></span>
    <div class="container position-relative mb-4">
      <div class="row">
        <div class="col-md-6 mb-5">
          <div
            class="icon icon-shape icon-md bg-gradient-info shadow-info mb-3 text-center"
          >
            <i class="material-icons opacity-10">people</i>
          </div>
          <h3 class="text-white z-index-1 position-relative">
            The Executive Team
          </h3>
          <p class="text-white opacity-8">
            There’s nothing I really wanted to do in life that I wasn’t able to
            get good at. That’s my skill.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4"
            :image="emma"
            :profile="{ name: 'Emma Roberts', link: 'javascript:;' }"
            :position="{ label: 'UI Designer', color: 'info' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="william"
            :profile="{ name: 'William Pearce', link: 'javascript:;' }"
            :position="{ label: 'Boss', color: 'info' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art."
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            :image="ivana"
            :profile="{ name: 'Ivana Flow', link: 'javascript:;' }"
            :position="{ label: 'Athlete', color: 'info' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="marquez"
            :profile="{ name: 'Marquez Garcia', link: 'javascript:;' }"
            :position="{ label: 'JS Developer', color: 'info' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art."
          />
        </div>
      </div>
    </div>
  </section>
</template>
