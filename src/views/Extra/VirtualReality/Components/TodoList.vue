<script setup>
defineProps({
  todos: {
    type: Array,
    required: true,
    time: String,
    title: String,
    platform: String,
  },
});
</script>
<template>
  <div class="card move-on-hover overflow-hidden">
    <div class="card-body">
      <template v-for="({ time, title, platform }, index) of todos" :key="time">
        <div class="d-flex">
          <h6 class="mb-0 me-3">{{ time }}</h6>
          <h6 class="mb-0">
            {{ title }}
            <small class="text-secondary font-weight-normal d-block mt-1">
              {{ platform }}
            </small>
          </h6>
        </div>
        <hr v-if="index !== todos.length - 1" class="horizontal dark" />
      </template>
    </div>
    <a
      href="javascript:;"
      class="bg-gray-100 w-100 text-center py-1"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title="Show More"
    >
      <i class="material-icons text-primary">expand_more</i>
    </a>
  </div>
</template>
