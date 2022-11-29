<script setup>
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
