export const feature1Code = `<script setup>
import AboutUsOption from "@/views/LandingPages/Coworking/Components/AboutUsOption.vue";
</script>
<template>
  <section class="py-9">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 my-auto">
          <h3>Read More About Us</h3>
          <p class="pe-5">
            Pain is what we go through as we become older. We get insulted by
            others, lose trust for those others. We get back stabbed by friends.
            It becomes harder for us to give others a hand.
          </p>
          <a href="javascript:;" class="text-success icon-move-right"
            >More about us
            <i class="fas fa-arrow-right text-sm ms-1"></i>
          </a>
        </div>
        <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
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
`;

export const feature2Code = `<script setup>
// example components
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "../../../../examples/cards/blogCards/CenteredBlogCard.vue";
</script>
<template>
  <section class="py-6">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard
              color="info"
              icon="public"
              title="Fully integrated"
              description="We get insulted by others, lose trust for those We get back
                  freezes"
            />
            <DefaultInfoCard
              color="info"
              icon="payments"
              title="Payments functionality"
              description="We get insulted by others, lose trust for those We get back
                  freezes"
            />
          </div>
          <div class="row justify-content-start mt-4">
            <DefaultInfoCard
              color="info"
              icon="apps"
              title="Prebuilt components"
              description="We get insulted by others, lose trust for those We get back
                  freezes"
            />
            <DefaultInfoCard
              color="info"
              icon="3p"
              title="Improved platform"
              description="We get insulted by others, lose trust for those We get back
                  freezes"
            />
          </div>
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-4">
          <CenteredBlogCard
            image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            title="Get insights on Search"
            description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
          />
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const feature3Code = `<script setup>
// example component
import SimpleInfoCard from "@/examples/cards/infoCards/SimpleInfoCard.vue";
</script>
<template>
  <section class="py-6">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center pb-4">
          <h2>Turn your idea into a startup</h2>
          <p class="lead">
            We’re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <SimpleInfoCard
            direction="text-center"
            class="p-3"
            color="primary"
            icon="person"
            title="Check our team"
            description="People in this world shun people for being great. For being a bright color. For standing out."
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <SimpleInfoCard
            direction="text-center"
            class="p-3"
            color="success"
            icon="support_agent"
            title="Support 24/7"
            description="We get insulted by others, lose trust for those others. We get
              back here to follow my dreams"
          />
        </div>
        <div class="col-lg-4 col-md-6 mx-md-auto">
          <SimpleInfoCard
            direction="text-center"
            class="p-3"
            color="warning"
            icon="update"
            title="Unlimited revisions"
            description="The time is now to be okay to be the greatest you. Would you
              believe in what you believe in?"
          />
        </div>
      </div>
    </div>
  </section>
</template>
`;
