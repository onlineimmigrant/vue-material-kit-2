<script setup>
// example component
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="py-4 mt-6">
    <div class="container">
      <div class="row text-center">
        <DefaultInfoCard
          col="col-lg-3 col-md-6 mb-lg-0 mb-4"
          :icon="{ component: 'grid_view', size: '5xl', color: 'warning' }"
          title="Components"
          :description="{
            text: 'We get insulted by others, lose trust for those We get back.',
          }"
        />
        <DefaultInfoCard
          col="col-lg-3 col-md-6 mb-lg-0 mb-4"
          :icon="{ component: 'textsms', size: '5xl', color: 'warning' }"
          title="Mix & Match"
          :description="{
            text: 'We get insulted by others, lose trust for those We get back.',
          }"
        />
        <DefaultInfoCard
          col="col-lg-3 col-md-6 mb-lg-0 mb-4"
          :icon="{ component: 'palette', size: '5xl', color: 'warning' }"
          title="Design"
          :description="{
            text: 'We get insulted by others, lose trust for those We get back.',
          }"
        />
        <DefaultInfoCard
          col="col-lg-3 col-md-6 mb-lg-0 mb-4"
          :icon="{ component: 'card_giftcard', size: '5xl', color: 'warning' }"
          title="Payment"
          :description="{
            text: 'We get insulted by others, lose trust for those We get back.',
          }"
        />
      </div>
    </div>
  </section>
</template>
