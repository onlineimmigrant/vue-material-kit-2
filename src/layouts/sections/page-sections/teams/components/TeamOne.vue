<script setup>
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
