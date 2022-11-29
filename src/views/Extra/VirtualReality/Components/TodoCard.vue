<script setup>
import { computed } from "vue";
const props = defineProps({
  color: {
    validator(color) {
      return [
        "primary",
        "secondary",
        "success",
        "info",
        "light",
        "dark",
        "warning",
        "danger",
      ].includes(color);
    },
    default: "dark",
  },
  title: {
    type: String,
    default: "To Do",
  },
  todos: {
    type: Array,
    required: true,
  },
});
const getLength = computed(() => {
  return props.todos.length;
});
</script>
<template>
  <div class="card move-on-hover" :class="`bg-gradient-${props.color}`">
    <div class="card-body">
      <div class="d-flex">
        <h5 class="mb-0 text-white">{{ props.title }}</h5>
        <div class="ms-auto">
          <h1 class="text-white text-end mb-0 mt-n2">{{ getLength }}</h1>
          <p class="text-sm mb-0 text-white">items</p>
        </div>
      </div>
      <p
        v-for="(todo, index) of props.todos"
        :key="index"
        class="mb-0 text-white"
      >
        {{ todo }}
      </p>
    </div>
    <a
      href="javascript:;"
      class="w-100 text-center py-1"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title="Show More"
    >
      <i class="material-icons text-white">expand_more</i>
    </a>
  </div>
</template>
