export const cardRaisedCode = `<script setup>
// example component
import RaisedBlogCard from "@/examples/cards/blogCards/RaisedBlogCard.vue";
</script>
<template>
  <section class="p-6">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-6 mx-auto">
          <RaisedBlogCard
            class="mt-4"
            image="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
            title="Material Kit"
            description="One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That's pretty impressive."
            :action="{
              label: 'More about us',
              route: '#',
              color: 'success',
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const cardImageInsideCode = `<script setup>
// example component
import DefaultBlogCard from "@/examples/cards/blogCards/DefaultBlogCard.vue";

// image
import postImage from "@/assets/img/annie-spratt.jpg";
import authorImage from "@/assets/img/marie.jpg";
</script>
<template>
  <section class="py-4">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-6 mx-auto">
          <DefaultBlogCard
            :image="postImage"
            :category="{ color: 'warning', label: 'Hub' }"
            title="Shared Coworking"
            description="Use border utilities to quickly style the border and
                border-radius of an element. Great for images, buttons."
            :author="{
              image: authorImage,
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

export const cardWithColoredShadowCode = `<script setup>
// example component
import TransparentBlogCard from "@/examples/cards/blogCards/TransparentBlogCard.vue";
// images
import image from "@/assets/img/products/product-1-min.jpg";
</script>
<template>
  <section class="py-4">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-6 mx-auto">
          <TransparentBlogCard
            class="mt-4"
            :image="image"
            title="MateLabs mixes machine learning with IFTTT"
            description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
            :action="{
              label: 'Read more',
              route: '/',
              color: 'success',
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const cardRotateCode = `<script setup>
// example compoents
import RotatingCard from "@/examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "@/examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "@/examples/cards/rotatingCards/RotatingCardBack.vue";
</script>
<template>
  <section class="py-4">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-6 mx-auto">
          <RotatingCard>
            <RotatingCardFront
              image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/toboshar.jpg"
              label="Music"
              title="Find music and play it!"
              description="Society has put up so many boundaries, so many limitations
                    on what’s right and wrong that it’s almost impossible to get
                    a pure thought out. It’s like a little kid, a little boy,
                    looking at colors, and no one told him what colors are good."
            />

            <RotatingCardBack
              image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/toboshar.jpg"
              title="Manage post"
              description="As an Admin, you have shortcuts to edit, view or delete the
                    posts."
              :action="[
                {
                  route: '/',
                  label: 'Edit',
                  color: 'white',
                },
                {
                  route: '/',
                  label: 'Share',
                  color: 'white',
                },
                {
                  route: '/',
                  label: 'Delete',
                  color: 'white',
                },
              ]"
            />
          </RotatingCard>
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const cardPricingCode = `<script setup>
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
`;
