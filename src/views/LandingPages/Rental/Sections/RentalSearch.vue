<script setup>
import { onMounted, ref } from "vue";

//deps
import flatPickr from "vue-flatpickr-component";
import Choices from "choices.js";

//Vue Material Kit 2 Pro components
import MaterialButton from "../../../../components/MaterialButton.vue";

//hooks
const date = ref("");
onMounted(() => {
  if (document.getElementById("choices-button")) {
    let from = document.getElementById("choices-button");
    // eslint-disable-next-line no-unused-vars
    const example = new Choices(from, {
      removeItemButton: true,
      allowHTML: true,
    });
  }

  if (document.getElementById("choices-remove-button")) {
    let to = document.getElementById("choices-remove-button");
    // eslint-disable-next-line no-unused-vars
    const example = new Choices(to, {
      removeItemButton: true,
      allowHTML: true,
    });
  }
});
</script>
<template>
  <div class="container">
    <div class="row border-radius-md pb-4 p-3 mx-sm-0 mx-1 position-relative">
      <div class="col-lg-3 mt-lg-n2 mt-2">
        <label class="ms-0">Leave From</label>
        <select class="form-control" name="choices-button" id="choices-button">
          <option value="Choice 1" selected="">Brazil</option>
          <option value="Choice 2">Bucharest</option>
          <option value="Choice 3">London</option>
          <option value="Choice 4">USA</option>
        </select>
      </div>
      <div class="col-lg-3 mt-lg-n2 mt-2">
        <label class="ms-0">To</label>
        <select
          class="form-control"
          name="choices-remove-button"
          id="choices-remove-button"
        >
          <option value="Choice 1" selected="">Italy</option>
          <option value="Choice 2">Spain</option>
          <option value="Choice 3">Denmark</option>
          <option value="Choice 4">Poland</option>
        </select>
      </div>
      <div class="col-lg-3 mt-lg-n2 mt-2">
        <label class="ms-0">Depart</label>
        <div class="input-group input-group-static">
          <span class="input-group-text"><i class="fas fa-calendar"></i></span>
          <flatPickr
            v-model="date"
            class="form-control datetimepicker"
            placeholder="Please select date"
            :config="{
              allowInput: true,
              altInput: true,
            }"
          />
        </div>
      </div>
      <div class="col-lg-3 mt-lg-n2 mt-2">
        <label>&nbsp;</label>
        <MaterialButton variant="gradient" color="success" fullWidth
          >Search</MaterialButton
        >
      </div>
    </div>
  </div>
</template>
