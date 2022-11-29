<script setup>
// faq collapse
import FaqCollapse from "../../../LandingPages/Rental/Components/FaqCollapse.vue";
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-10 mx-auto">
          <div class="card">
            <div
              class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent"
            >
              <div
                class="bg-gradient-danger shadow-danger border-radius-lg p-4"
              >
                <h4 class="text-white mb-0">Frequently Asked Questions</h4>
                <p class="text-white opacity-8 mb-0">
                  Last modified: Sept 07 2021
                </p>
              </div>
            </div>
            <div class="accordion p-3" id="accordionFAQ">
              <FaqCollapse
                accordionId="accordionFAQ"
                question="How do I order?"
                faqId="faq1"
              >
                We’re not always in the position that we want to be at. We’re
                constantly growing. We’re constantly making mistakes. We’re
                constantly trying to express ourselves and actualize our dreams.
                If you have the opportunity to play this game of life you need
                to appreciate every moment. A lot of people don’t appreciate the
                moment until it’s passed.
              </FaqCollapse>

              <FaqCollapse
                accordionId="accordionFAQ"
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
                accordionId="accordionFAQ"
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
                accordionId="accordionFAQ"
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
                accordionId="accordionFAQ"
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
