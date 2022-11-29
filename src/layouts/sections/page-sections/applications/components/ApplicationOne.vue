<script setup>
// example component
import ColoredBackgroundCard from "@/examples/cards/backgroundCards/ColoredBackgroundCard.vue";
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-8 text-center mx-auto">
          <p
            class="mb-1 text-gradient text-primary font-weight-bold text-uppercase"
          >
            Our Work
          </p>
          <h3>Some of our awesome projects - 3</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <ColoredBackgroundCard
            color="dark"
            image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg"
            label="Productivity"
            title="Search and Discover!"
            description="Don&#39;t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design."
            :action="{
              variant: 'contained',
              color: 'white',
              label: 'Get Started',
            }"
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <ColoredBackgroundCard
            color="dark"
            image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/toboshar.jpg"
            label="Design"
            title="Find music and play it!"
            description="As we live, our hearts turn colder. Cause pain is what we go
                  through as we become older. We get insulted by others, lose
                  trust for those others."
            :action="{
              variant: 'contained',
              color: 'white',
              label: 'Get Started',
            }"
          />
        </div>
        <div class="col-lg-4 col-md-6 mx-md-auto">
          <ColoredBackgroundCard
            color="dark"
            image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/umbrellas.jpg"
            label="Support"
            title="Check bugs and fix!"
            description="If you have the opportunity to play this game of life you need
                  to appreciate every moment. A lot of people don’t appreciate
                  the moment until it’s passed."
            :action="{
              variant: 'contained',
              color: 'white',
              label: 'Get Started',
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>
