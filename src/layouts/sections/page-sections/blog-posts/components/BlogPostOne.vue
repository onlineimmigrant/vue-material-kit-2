<script setup>
// example component
import ColoredBackgroundCard from "@/examples/cards/backgroundCards/ColoredBackgroundCard.vue";
import InfoBackgroundCard from "@/examples/cards/backgroundCards/InfoBackgroundCard.vue";
</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto">
          <div class="p-3 text-center mb-5">
            <div
              class="icon icon-shape icon-lg bg-gradient-success shadow mx-auto"
            >
              <i class="material-icons opacity-10">person</i>
            </div>
            <h2 class="mt-3">Check out what&#39;s new</h2>
            <p>
              We get insulted by others, lose trust for those others. We get
              back freezes every winter
            </p>
          </div>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-lg-4 col-md-6">
          <ColoredBackgroundCard
            color="success"
            image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/indian.jpg"
            label="Landscape"
            title="Nature's Light"
            description="It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it."
          />
        </div>
        <div class="col-lg-4 col-md-6 d-flex flex-column">
          <InfoBackgroundCard
            color="dark"
            image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/indian.jpg"
            icon="import_contacts"
            title="Cultural"
            label="257 Spots"
          />
          <InfoBackgroundCard
            class="mt-4"
            image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/greece.jpg"
            icon="volunteer_activism"
            title="Popularity"
            label="363 spots"
          />
        </div>
        <div class="col-lg-4 col-md-6 d-flex flex-column">
          <InfoBackgroundCard
            image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/city.jpg"
            icon="festival"
            title="Modern Life"
            label="117 spots"
          />
          <InfoBackgroundCard
            class="mt-4"
            image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/laught.jpg"
            icon="theater_comedy"
            title="Good Vibes"
            label="215 spots"
          />
        </div>
      </div>
    </div>
  </section>
</template>
