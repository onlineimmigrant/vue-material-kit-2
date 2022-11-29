export const blogPost1Code = `<script setup>
// example component
import ColoredBackgroundCard from "@/examples/cards/backgroundCards/ColoredBackgroundCard.vue";
import InfoBackgroundCard from "@/examples/cards/backgroundCards/InfoBackgroundCard.vue";
</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto">
          <div class="p-3 text-center mb-5">
            <div
              class="icon icon-shape icon-lg bg-gradient-success shadow mx-auto"
            >
              <i class="material-icons opacity-10">person</i>
            </div>
            <h2 class="mt-3">Check out what&#39;s new</h2>
            <p>
              We get insulted by others, lose trust for those others. We get
              back freezes every winter
            </p>
          </div>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-lg-4 col-md-6">
          <ColoredBackgroundCard
            color="success"
            image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/indian.jpg"
            label="Landscape"
            title="Nature's Light"
            description="It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it."
          />
        </div>
        <div class="col-lg-4 col-md-6 d-flex flex-column">
          <InfoBackgroundCard
            color="dark"
            image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/indian.jpg"
            icon="import_contacts"
            title="Cultural"
            label="257 Spots"
          />
          <InfoBackgroundCard
            class="mt-4"
            image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/greece.jpg"
            icon="volunteer_activism"
            title="Popularity"
            label="363 spots"
          />
        </div>
        <div class="col-lg-4 col-md-6 d-flex flex-column">
          <InfoBackgroundCard
            image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/city.jpg"
            icon="festival"
            title="Modern Life"
            label="117 spots"
          />
          <InfoBackgroundCard
            class="mt-4"
            image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/laught.jpg"
            icon="theater_comedy"
            title="Good Vibes"
            label="215 spots"
          />
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const blogPost2Code = `<script setup>
// example  component
import SimpleBookingCard from "@/examples/cards/bookingCards/SimpleBookingCard.vue";

//Vue Material Kit 2 Pro components
import MaterialPagination from "@/components/MaterialPagination.vue";
import MaterialPaginationItem from "@/components/MaterialPaginationItem.vue";

// images
import product1 from "@/assets/img/products/product-2-min.jpg";
import product2 from "@/assets/img/products/product-1-min.jpg";
import product3 from "@/assets/img/products/product-3-min.jpg";
import product4 from "@/assets/img/products/product-5-min.jpg";
import product5 from "@/assets/img/products/product-6-min.jpg";
import product6 from "@/assets/img/products/product-7-min.jpg";
</script>
<template>
  <section class="pt-5 pb-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <SimpleBookingCard
            class="mt-5 mt-md-0"
            :image="product1"
            categories="Entire Apartment • 3 Guests • 2 Beds"
            title="Lovely and cosy apartment"
            description="Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward."
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <SimpleBookingCard
            class="mt-5 mt-md-0"
            :image="product2"
            categories="Private Room • 1 Guest • 1 Sofa"
            title="Single room in the center of the city"
            description="As Uber works through a huge amount of internal management turmoil, the company is also consolidating more of its international business."
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <SimpleBookingCard
            class="mt-5 mt-lg-0"
            :image="product3"
            categories="Entire Apartment • 2 Guest • 2 Beds"
            title="Independent house bedroom kitchen"
            description="Music is something that every person has his or her own specific opinion about. Different people have different taste, and various types of music."
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <SimpleBookingCard
            class="mt-5"
            :image="product4"
            categories="Entire Apartment • 2 Guest • 1 Bed"
            title="Zen Gateway with pool and garden"
            description="Fast forward, rewind and more, without having to first invoke a specific skill, or even press a button on their remote."
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <SimpleBookingCard
            class="mt-5"
            :image="product5"
            categories="Entire Flat • 8 Guest • 3 Rooms"
            title="Cheapest hotels for a luxury vacation"
            description="Today, the company announced it will be combining its rides-on-demand business and UberEATS."
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <SimpleBookingCard
            class="mt-5"
            :image="product6"
            categories="Entire Apartment • 2 Guest • 1 Bed"
            title="Cozy Double Room Near Station"
            description="Different people have different taste, and various types of music have many ways of leaving an impact on someone."
          />
        </div>
        <div class="col-sm-7 ms-auto text-end">
          <MaterialPagination class="mt-4">
            <MaterialPaginationItem prev class="ms-auto" />
            <MaterialPaginationItem label="1" />
            <MaterialPaginationItem label="2" active />
            <MaterialPaginationItem label="3" />
            <MaterialPaginationItem label="4" />
            <MaterialPaginationItem label="5" />
            <MaterialPaginationItem next />
          </MaterialPagination>
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const blogPost3Code = `<script setup>
// example component
import DefaultBlogCard from "../../../../examples/cards/blogCards/DefaultBlogCard.vue";

// images
import post1 from "@/assets/img/examples/color2.jpg";
import post2 from "@/assets/img/examples/color3.jpg";
import post3 from "@/assets/img/examples/color1.jpg";
import author1 from "@/assets/img/team-2.jpg";
import author2 from "@/assets/img/ivana-squares.jpg";
import author3 from "@/assets/img/marie.jpg";
</script>
<template>
  <section class="py-6">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-lg-0 mb-4">
          <DefaultBlogCard
            :image="post1"
            :category="{ color: 'success', label: 'House' }"
            title="Shared Coworking"
            description="Use border utilities to quickly style the border and
                border-radius of an element. Great for images, buttons."
            :author="{
              image: author1,
              name: 'Mathew Glock',
              date: 'Posted on 28 February',
            }"
          />
        </div>
        <div class="col-lg-4 mb-lg-0 mb-4">
          <DefaultBlogCard
            :image="post2"
            :category="{ color: 'info', label: 'House' }"
            title="Really Housekeeping"
            description="Use border utilities to quickly style the border and
                border-radius of an element. Great for images, buttons."
            :author="{
              image: author2,
              name: 'Mathew Glock',
              date: 'Posted on 28 February',
            }"
          />
        </div>
        <div class="col-lg-4 mb-lg-0 mb-4">
          <DefaultBlogCard
            :image="post3"
            :category="{ color: 'warning', label: 'House' }"
            title="Shared Coworking"
            description="Use border utilities to quickly style the border and
                border-radius of an element. Great for images, buttons."
            :author="{
              image: author3,
              name: 'Mathew Glock',
              date: 'Posted on 28 February',
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const blogPost4Code = `<script setup>
// example component
import SimpleBackgroundCard from "../../../../../examples/cards/backgroundCards/SimpleBackgroundCard.vue";

// images
import blog1 from "@/assets/img/examples/blog1.jpg";
import blog2 from "@/assets/img/examples/blog2.jpg";
import blog3 from "@/assets/img/examples/blog3.jpg";
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mt-4">Build something great</h3>
          <p>
            We&#39;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play this game of life you
            need to appreciate every moment.
          </p>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-4 mb-lg-0 mb-4">
          <SimpleBackgroundCard
            route="javascript:;"
            :image="blog1"
            title="Search and Discovery"
            description="Website visitors today demand a frictionless user expericence
                  — especially when using search. Because of the hight standards
                  we tend to offer."
          />
        </div>
        <div class="col-lg-4 mb-lg-0 mb-4">
          <SimpleBackgroundCard
            :image="blog2"
            title="Last visits in US"
            description="Wealth creation is an evolutionarily recent positive-sum game.
                  Status is an old zero-sum game. Those attacking wealth
                  creation are often just seeking status."
          />
        </div>
        <div class="col-lg-4">
          <SimpleBackgroundCard
            :image="blog3"
            title="Grow in a beautiful area"
            description="Free people make free choices. Free choices mean you get
                  unequal outcomes. You can have freedom, or you can have equal
                  outcomes. You can&#39;t have both."
          />
        </div>
      </div>
    </div>
  </section>
</template>
`;
