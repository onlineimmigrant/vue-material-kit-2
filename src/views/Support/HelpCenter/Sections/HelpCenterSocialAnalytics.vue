<script setup>
// example component
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center pb-4">
          <h4 class="text-gradient text-success">Social Analytics</h4>
          <h2>Turn your idea into a startup</h2>
          <p class="lead">
            We’re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play
          </p>
        </div>
      </div>
      <div class="row mt-4">
        <DefaultInfoCard
          class="p-3 text-center"
          col="col-lg-4 col-md-6"
          :icon="{ component: 'groups', color: 'success', size: '5xl' }"
          :title="{ text: 'Check our team', class: 'mt-2' }"
          :description="{
            class: 'mb-0',
            text: 'We get insulted by others, lose trust for those others. We get back here to follow my dreams',
          }"
        />
        <DefaultInfoCard
          class="p-3 text-center"
          col="col-lg-4 col-md-6"
          :icon="{ component: 'support_agent', color: 'success', size: '5xl' }"
          :title="{ text: 'Support 24/7', class: 'mt-2' }"
          :description="{
            class: 'mb-0',
            text: 'We get insulted by others, lose trust for those others. We get back here to follow my dreams',
          }"
        />
        <DefaultInfoCard
          class="p-3 text-center"
          col="col-lg-4 col-md-6 mx-md-auto"
          :icon="{ component: 'update', color: 'success', size: '5xl' }"
          :title="{ text: 'Unlimited revisions', class: 'mt-2' }"
          :description="{
            class: 'mb-0',
            text: 'We get insulted by others, lose trust for those others. We get back here to follow my dreams',
          }"
        />
      </div>
    </div>
  </section>
</template>
