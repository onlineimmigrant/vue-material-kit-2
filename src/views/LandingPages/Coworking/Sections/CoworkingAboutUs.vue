<script setup>
import AboutUsOption from "../Components/AboutUsOption.vue";
</script>
<template>
  <section class="py-sm-7 py-4">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <h3 class="mt-2">Read More About Us</h3>
          <p>
            Pain is what we go through as we become older. We get insulted by
            others, lose trust for those others. We get back stabbed by friends.
            It becomes harder for us to give others a hand.
          </p>
          <a href="javascript:;" class="text-success text-sm icon-move-right"
            >More about us
            <i class="fas fa-arrow-right text-xs ms-1"></i>
          </a>
        </div>
        <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0 ms-auto">
          <AboutUsOption
            icon="mediation"
            content="It becomes harder for us to give others a hand.<br />
            We get our heart broken by people we love."
          />
          <AboutUsOption
            icon="settings_overscan"
            content="As we live, our hearts turn colder.<br />
            Cause pain is what we go through as we become older."
          />

          <AboutUsOption
            icon="token"
            content="When we lose family over
            time. <br />
            What else could rust the heart more over time? Blackgold."
          />
        </div>
      </div>
    </div>
  </section>
</template>
