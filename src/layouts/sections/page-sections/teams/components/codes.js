export const team1Code = `<script setup>
// example component
import TransparentTeamCard from "@/examples/cards/teamCards/TransparentTeamCard.vue";

// images
import image1 from "@/assets/img/bruce-mars.jpg";
import image2 from "@/assets/img/team-3.jpg";
import image3 from "@/assets/img/team-4.jpg";
</script>
<template>
  <section class="p-5">
    <div class="container">
      <div class="row">
        <div class="col-md-7 mb-5">
          <div
            class="icon icon-shape icon-md bg-gradient-success shadow text-center mb-3"
          >
            <i class="material-icons opacity-10">supervisor_account</i>
          </div>
          <h3>Our Awesome Team</h3>
          <p>
            This is the paragraph where you can write more details about your
            team. Keep you user engaged by providing meaningful information.
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
          <TransparentTeamCard
            :image="image1"
            name="Alec Thompson"
            position="CEO / Co-Founder"
            description="And I love you like Kanye loves Kanye. We need to restart the
                human foundation."
            :socials="[
              { component: 'twitter', route: 'javascript:;' },
              { component: 'dribbble', route: 'javascript:;' },
              { component: 'linkedin', route: 'javascript:;' },
            ]"
          />
        </div>
        <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
          <TransparentTeamCard
            :image="image2"
            name="Alec Thompson"
            position="CEO / Co-Founder"
            description="And I love you like Kanye loves Kanye. We need to restart the
                human foundation."
            :socials="[
              { component: 'twitter', route: 'javascript:;' },
              { component: 'dribbble', route: 'javascript:;' },
              { component: 'linkedin', route: 'javascript:;' },
            ]"
          />
        </div>
        <div class="col-lg-4 col-md-6 mx-md-auto mt-md-0 mt-5">
          <TransparentTeamCard
            :image="image3"
            name="Alec Thompson"
            position="CEO / Co-Founder"
            description="And I love you like Kanye loves Kanye. We need to restart the
                human foundation."
            :socials="[
              { component: 'twitter', route: 'javascript:;' },
              { component: 'dribbble', route: 'javascript:;' },
              { component: 'linkedin', route: 'javascript:;' },
            ]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const team2Code = `<script setup>
// example component
import HorizontalTeamCard from "../../../../examples/cards/teamCards/HorizontalTeamCard.vue";

// images
import emma from "@/assets/img/team-5.jpg";
import william from "@/assets/img/bruce-mars.jpg";
import ivana from "@/assets/img/ivana-squares.jpg";
import marquez from "@/assets/img/ivana-square.jpg";
</script>
<template>
  <section class="pb-5 position-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">
            The Executive Team
          </h3>
          <p class="text-white opacity-8 mb-0">
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
`;
