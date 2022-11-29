<script setup>
import { onMounted, onUnmounted } from "vue";

// example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import SimpleFooter from "../../../examples/footers/SimpleFooter.vue";
import SimpleInfoCard from "../../../examples/cards/infoCards/SimpleInfoCard.vue";
import FaqCollapse from "../../LandingPages/Rental/Components/FaqCollapse.vue";

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("faq");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("faq");
  body.classList.remove("bg-gray-200");
});
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar :sticky="true" />
      </div>
    </div>
  </div>
  <section class="mt-10">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-4">
          <SimpleInfoCard
            class="p-3"
            :icon="{ component: 'description', color: 'success' }"
            title="Detailed Documentation"
            description="The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever."
            direction="text-center"
          />
        </div>
        <div class="col-md-4">
          <SimpleInfoCard
            class="p-3"
            :icon="{ component: 'support', color: 'success' }"
            title="Awesome Support"
            description="The time is now for it to be okay to be great. People in this
              world shun people for being great. I'm not trying, I'm not trying
              to do the best way."
            direction="text-center"
          />
        </div>
        <div class="col-md-4">
          <SimpleInfoCard
            class="p-3"
            :icon="{ component: 'grid_view', color: 'success' }"
            title="Styled Components"
            description="If you have the opportunity to play this game of life you need to
              appreciate every moment. A lot of people don’t appreciate the
              moment until it’s passed."
            direction="text-center"
          />
        </div>
      </div>
    </div>
  </section>
  <section class="pt-3 pt-md-5 pb-md-5 pb-lg-7">
    <div class="container">
      <div class="col-12 mx-auto">
        <div class="card shadow-lg">
          <div
            class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent"
          >
            <div
              class="bg-gradient-success shadow-success border-radius-lg p-4"
            >
              <h3 class="text-white mb-0">FAQ</h3>
              <p class="text-white opacity-8 mb-0">
                Last modified: Aug 30 2021
              </p>
            </div>
          </div>
          <div class="card-body p-sm-5 pt-0">
            <h5 class="my-4">Basics</h5>
            <div class="accordion" id="accordionBasic">
              <FaqCollapse
                accordionId="accordionBasic"
                question="How do I order?"
                faqId="faq1"
                open
              >
                We’re not always in the position that we want to be at. We’re
                constantly growing. We’re constantly making mistakes. We’re
                constantly trying to express ourselves and actualize our dreams.
                If you have the opportunity to play this game of life you need
                to appreciate every moment. A lot of people don’t appreciate the
                moment until it’s passed.
              </FaqCollapse>

              <FaqCollapse
                accordionId="accordionBasic"
                question="How can I make the payment?"
                faqId="faq2"
              >
                It really matters and then like it really doesn’t matter. What
                matters is the people who are sparked by it. And the people who
                are like offended by it, it doesn’t matter. Because it's about
                motivating the doers. Because I’m here to follow my dreams and
                inspire other people to follow their dreams, too.
                <br />
                We’re not always in the position that we want to be at. We’re
                constantly growing. We’re constantly making mistakes. We’re
                constantly trying to express ourselves and actualize our dreams.
                If you have the opportunity to play this game of life you need
                to appreciate every moment. A lot of people don’t appreciate the
                moment until it’s passed.
              </FaqCollapse>

              <FaqCollapse
                accordionId="accordionBasic"
                question="How much time does it take to receive the order?"
                faqId="faq3"
              >
                The time is now for it to be okay to be great. People in this
                world shun people for being great. For being a bright color. For
                standing out. But the time is now to be okay to be the greatest
                you. Would you believe in what you believe in, if you were the
                only one who believed it? If everything I did failed - which it
                doesn't, it actually succeeds - just the fact that I'm willing
                to fail is an inspiration. People are so scared to lose that
                they don't even try. Like, one thing people can't say is that
                I'm not trying, and I'm not trying my hardest, and I'm not
                trying to do the best way I know how.
              </FaqCollapse>

              <FaqCollapse
                accordionId="accordionBasic"
                question="Can I resell the products?"
                faqId="faq4"
              >
                I always felt like I could do anything. That’s the main thing
                people are controlled by! Thoughts- their perception of
                themselves! They're slowed down by their perception of
                themselves. If you're taught you can’t do anything, you won’t do
                anything. I was taught I could do everything.
                <br /><br />
                If everything I did failed - which it doesn't, it actually
                succeeds - just the fact that I'm willing to fail is an
                inspiration. People are so scared to lose that they don't even
                try. Like, one thing people can't say is that I'm not trying,
                and I'm not trying my hardest, and I'm not trying to do the best
                way I know how.
              </FaqCollapse>

              <FaqCollapse
                accordionId="accordionBasic"
                question="Where do I find the shipping details?"
                faqId="faq5"
              >
                There’s nothing I really wanted to do in life that I wasn’t able
                to get good at. That’s my skill. I’m not really specifically
                talented at anything except for the ability to learn. That’s
                what I do. That’s what I’m here for. Don’t be afraid to be wrong
                because you can’t learn anything from a compliment. I always
                felt like I could do anything. That’s the main thing people are
                controlled by! Thoughts- their perception of themselves! They're
                slowed down by their perception of themselves. If you're taught
                you can’t do anything, you won’t do anything. I was taught I
                could do everything.
              </FaqCollapse>
            </div>
            <h5 class="mt-5 mb-4">Account & Settings</h5>
            <div class="accordion" id="accordionAccount">
              <FaqCollapse
                accordionId="accordionAccount"
                question="How do I change my password?"
                faqId="changePassword"
              >
                Society has put up so many boundaries, so many limitations on
                what’s right and wrong that it’s almost impossible to get a pure
                thought out. It’s like a little kid, a little boy, looking at
                colors, and no one told him what colors are good, before
                somebody tells you you shouldn’t like pink because that’s for
                girls, or you’d instantly become a gay two-year-old.
              </FaqCollapse>

              <FaqCollapse
                accordionId="accordionAccount"
                question="How can I delete my account ?"
                faqId="deleteAccount"
              >
                Why would anyone pick blue over pink? Pink is obviously a better
                color. Everyone’s born confident, and everything’s taken away
                from you <br /><br />
                We’re not always in the position that we want to be at. We’re
                constantly growing. We’re constantly making mistakes.
              </FaqCollapse>

              <FaqCollapse
                accordionId="accordionAccount"
                question="How can I change account make account settings?"
                faqId="changeSettings"
              >
                People in this world shun people for being great. For being a
                bright color. We’re constantly trying to express ourselves and
                actualize our dreams. If you have the opportunity to play this
                game of life you need to appreciate every moment. A lot of
                people don’t appreciate the moment until it’s passed.
              </FaqCollapse>
              <FaqCollapse
                accordionId="accordionAccount"
                question="How to reset my password?"
                faqId="resetPassword"
              >
                What matters is the people who are sparked by it. And the people
                who are like offended by it, it doesn’t matter. Because it's
                about motivating the doers. Because I’m here to follow my dreams
                and inspire other people to follow their dreams, too. passed.
              </FaqCollapse>
            </div>
            <h5 class="mt-5 mb-4">Licenses</h5>
            <div class="accordion" id="accordionLicenses">
              <FaqCollapse
                accordionId="accordionLicenses"
                question="What are the differences between the licenses on the
                    website?"
                faqId="license"
              >
                We’re constantly trying to express ourselves and actualize our
                dreams. If you have the opportunity to play this game of life
                you need to appreciate every moment. A lot of people don’t
                appreciate the moment until it’s passed. The time is now for it
                to be okay to be great.
              </FaqCollapse>

              <FaqCollapse
                accordionId="accordionLicenses"
                question="Can I use a premium product in an open source project?"
                faqId="openSource"
              >
                People in this world shun people for being great. For being a
                bright color. For standing out. But the time is now to be okay
                to be the greatest you. Would you believe in what you believe
                in, if you were the only one who believed it? As we live, our
                hearts turn colder.
              </FaqCollapse>
              <FaqCollapse
                accordionId="accordionLicenses"
                question="Can I use my Freelancer/Startup License on an alias domain?"
                faqId="freelance"
              >
                Cause pain is what we go through as we become older. We get
                insulted by others, lose trust for those others. We get back
                stabbed by friends. It becomes harder for us to give others a
                hand. We get our heart broken by people we love, even that we
                give them all we have. Then we lose family over time. What else
                could rust the heart more over time? Blackgold.
              </FaqCollapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <SimpleFooter class="mt-6 md-mt-0" />
</template>
