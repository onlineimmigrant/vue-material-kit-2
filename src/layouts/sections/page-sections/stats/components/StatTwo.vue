<script setup>
// example component
import DefaultCounterCard from "@/examples/cards/counterCards/DefaultCounterCard.vue";
</script>
<template>
  <section class="py-10" id="count-stats">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-3">
          <DefaultCounterCard
            color="info"
            title="Projects"
            description="Of “high-performing” level are led by a certified project manager"
            :count="323"
            :duration="3000"
          />
        </div>
        <div class="col-md-3">
          <DefaultCounterCard
            color="info"
            title="Hours"
            description="That meets quality standards required by our users"
            :count="500"
            suffix="+"
            :duration="3000"
          />
        </div>
        <div class="col-md-3">
          <DefaultCounterCard
            color="info"
            title="Support"
            description="Actively engage team members that finishes on time"
            :count="24"
            suffix="/7"
            :duration="3000"
          />
        </div>
      </div>
    </div>
  </section>
</template>
