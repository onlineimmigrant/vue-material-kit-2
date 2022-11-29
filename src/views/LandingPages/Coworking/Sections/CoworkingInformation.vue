<script setup>
// example component
import SimpleInfoCard from "../../../../examples/cards/infoCards/SimpleInfoCard.vue";
</script>
<template>
  <section class="py-md-7">
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-md-4 ms-md-auto me-md-4">
          <SimpleInfoCard
            color="success"
            icon="payment"
            title="Modular Components"
            description="The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue
                whatever."
          />
          <SimpleInfoCard
            class="mt-6"
            icon="insights"
            title="Great Features"
            description="People are so scared to lose that they don't even try. Like, one
                thing people can't say is that I'm not trying, and I'm not
                trying my hardest."
          />
        </div>
        <div class="col-md-4 me-md-auto ms-md-4">
          <SimpleInfoCard
            icon="access_alarms"
            title="Awesome Support"
            description="The time is now for it to be okay to be great. People in this
                world shun people for being great. For being a bright color.
                What else could rust?"
          />
          <SimpleInfoCard
            class="mt-6"
            icon="sentiment_satisfied"
            title="Modern Interface"
            description="If everything I did failed - which it doesn't, it actually
                succeeds - just the fact that I'm willing to fail is an
                inspiration."
          />
        </div>
      </div>
    </div>
  </section>
</template>
