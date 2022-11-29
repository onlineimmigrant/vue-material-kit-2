<script setup>
// example component
import SimplePricingCard from "@/examples/cards/pricingCards/SimplePricingCard.vue";
</script>
<template>
  <section class="py-6">
    <div class="container">
      <div class="row justify-space-between py-2">
        <SimplePricingCard
          col="col-6 mx-auto"
          color="bg-gradient-dark"
          title="Premium"
          description="Free access for 200 members"
          :price="499"
          :action="{ route: '', label: 'Buy now', color: 'btn-white' }"
          :specifications="[
            'Complete documentation',
            'Working materials in Sketch',
            '2GB cloud storage',
            '100 team members',
          ]"
        />
      </div>
    </div>
  </section>
</template>
