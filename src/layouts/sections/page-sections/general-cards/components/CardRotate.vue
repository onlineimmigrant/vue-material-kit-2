<script setup>
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
