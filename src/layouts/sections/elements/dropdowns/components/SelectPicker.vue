<!-- eslint-disable no-unused-vars -->
<script setup>
import { onMounted } from "vue";

// choices js
import Choices from "choices.js";

// hook
onMounted(() => {
  if (document.getElementById("choice-button")) {
    var element = document.getElementById("choice-button");
    const example = new Choices(element, {
      searchEnabled: false,
      allowHTML: true,
    });
  }
});
</script>
<template>
  <div class="container p-5">
    <div class="row">
      <div class="col-3 mx-auto">
        <select
          class="form-control"
          name="choice-button"
          id="choice-button"
          placeholder="Language"
        >
          <option value="Choice 1" selected>Brazil</option>
          <option value="Choice 2">Bucharest</option>
          <option value="Choice 3">London</option>
          <option value="Choice 4">Washington</option>
        </select>
      </div>
    </div>
  </div>
</template>
