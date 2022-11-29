<script setup>
// example component
import SimpleBlogCard from "../../../../examples/cards/blogCards/SimpleBlogCard.vue";

//Vue Material Kit 2 Pro components
import MaterialBadge from "../../../../components/MaterialBadge.vue";
</script>
<template>
  <section class="features-3 py-4">
    <div class="container">
      <div class="row text-center justify-content-center">
        <div class="col-lg-6">
          <MaterialBadge class="mb-2" color="success" rounded
            >Co-working</MaterialBadge
          >
          <h2>Explore our places in London</h2>
          <p>
            If you can’t decide, the answer is no. If two equally difficult
            paths, choose the one more painful in the short term (pain avoidance
            is creating an illusion of equality).
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4 mb-lg-0 mb-4">
          <SimpleBlogCard
            image="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            title="Campus 6"
            description="Website visitors today demand a frictionless user expericence.
                Applies to mobile applications too."
            :action="{ color: 'dark', label: 'Find more' }"
          />
          <SimpleBlogCard
            class="mt-5"
            image="https://images.unsplash.com/photo-1589884629108-3193400c7cc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            title="Virtual Office"
            description="If you’re more passionate about founding a business than the
                business itself, you can fall into."
          />
        </div>
        <div class="col-lg-4 mb-lg-0 mb-4">
          <SimpleBlogCard
            image="https://images.unsplash.com/photo-1498677231914-50deb6ba4217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            title="Cozy Spots"
            description="If you’re more passionate about founding a business than the
                business itself technology."
          />
          <SimpleBlogCard
            class="mt-5"
            image="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            title="Co-working Spaces"
            description="Smart money is just dumb money that’s been through a crash.
                Business than the business itself."
          />
        </div>
        <div class="col-lg-4">
          <SimpleBlogCard
            image="https://images.unsplash.com/photo-1587578932405-7c740a762f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            title="Home Office"
            description="Website visitors today demand a frictionless user expericence —
                especially when using search."
          />
          <SimpleBlogCard
            class="mt-5"
            image="https://images.unsplash.com/photo-1461988625982-7e46a099bf4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            title="Private Space"
            description="Technology is not only the thing that moves the human race
                forward, but it’s the only thing that has."
          />
        </div>
      </div>
    </div>
  </section>
</template>
