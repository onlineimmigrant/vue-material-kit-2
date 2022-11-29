export const application1Code = `<script setup>
// example component
import ColoredBackgroundCard from "@/examples/cards/backgroundCards/ColoredbackgroundCard.vue";
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-8 text-center mx-auto">
          <p
            class="mb-1 text-gradient text-primary font-weight-bold text-uppercase"
          >
            Our Work
          </p>
          <h3>Some of our awesome projects - 3</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <ColoredBackgroundCard
            color="dark"
            image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg"
            label="Productivity"
            title="Search and Discover!"
            description="Don&#39;t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design."
            :action="{ variant: 'fill', color: 'white', label: 'Get Started' }"
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <ColoredBackgroundCard
            color="dark"
            image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/toboshar.jpg"
            label="Design"
            title="Find music and play it!"
            description="As we live, our hearts turn colder. Cause pain is what we go
                  through as we become older. We get insulted by others, lose
                  trust for those others."
            :action="{ variant: 'fill', color: 'white', label: 'Get Started' }"
          />
        </div>
        <div class="col-lg-4 col-md-6 mx-md-auto">
          <ColoredBackgroundCard
            color="dark"
            image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/umbrellas.jpg"
            label="Support"
            title="Check bugs and fix!"
            description="If you have the opportunity to play this game of life you need
                  to appreciate every moment. A lot of people don’t appreciate
                  the moment until it’s passed."
            :action="{ variant: 'fill', color: 'white', label: 'Get Started' }"
          />
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const application2Code = `<script setup>
// example component
import DefaultBackgroundCard from "@/examples/cards/backgroundCards/DefaultBackgroundCard.vue";

// local component
import ListItem from "@/views/Support/HelpCenter/Components/ListItem.vue";

// images
import bg1 from "@/assets/img/examples/color1.jpg";
import bg2 from "@/assets/img/examples/color3.jpg";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-10 ms-auto me-auto text-center">
          <div class="p-3 info-hover-warning">
            <div
              class="icon icon-shape bg-gradient-success shadow icon-shape-circle text-success"
            >
              <i class="fa fa-cogs"></i>
            </div>
          </div>
          <h3 class="mt-4">How To Handle Them</h3>
          <p>
            We’re constantly trying to express ourselves and actualize our
            dreams. Don't stop.
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4 ms-auto my-auto">
          <DefaultBackgroundCard
            :image="bg1"
            label="Website visitors"
            title="The Best Productivity Apps on Market"
            description="As we live, our hearts turn colder. Cause pain is what we go
                  through as we become older. We get insulted by others, lose
                  trust for those others."
          />
        </div>
        <div class="col-md-5 me-auto my-auto ms-md-5">
          <ListItem title="1. Listen to Social Conversations">
            Gain access to the demographics, psychographics, and location of
            unique people who are interested and talk about your brand.
          </ListItem>
          <ListItem title="2. Performance Analyze">
            Gain access to the demographics, psychographics, and location of
            unique people who are interested and talk about your brand.
          </ListItem>
          <ListItem title="3. Social Conversions">
            Track actions taken on your website that originated from social, and
            understand the impact on your bottom line.
          </ListItem>
        </div>
      </div>
      <hr class="horizontal dark my-sm-6 my-3 mx-7" />
      <div class="row">
        <div class="col-md-5 ms-auto my-auto">
          <ListItem title="1. Always In Sync">
            No matter where you are, Trello stays in sync across all of your
            devices.
          </ListItem>
          <ListItem title="2. Work With Any Team">
            Whether it’s for work or even the next family vacation, Trello helps
            your team.
          </ListItem>
          <ListItem title="3. A Productivity Platform">
            Integrate the apps your team already uses directly into your
            workflow.
          </ListItem>
        </div>
        <div class="col-md-4 me-auto my-auto ms-md-5">
          <DefaultBackgroundCard
            :image="bg2"
            label="Social activities"
            title="Working on Wallstreet is Not So Easy"
            description="There’s nothing I really wanted to do in life that I wasn’t
                  able to get good at. I’m not really specifically talented at
                  anything except for the ability to learn."
          />
        </div>
      </div>
    </div>
  </section>
</template>
`;
