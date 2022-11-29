<script setup>
//Vue Material Kit 2 Pro components
import MaterialPagination from "@/components/MaterialPagination.vue";
import MaterialPaginationItem from "@/components/MaterialPaginationItem.vue";
</script>
<template>
  <section class="py-4">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-lg-4 mx-auto">
          <MaterialPagination size="sm" class="m-4 ms-auto">
            <MaterialPaginationItem prev />
            <MaterialPaginationItem label="1" />
            <MaterialPaginationItem label="2" active />
            <MaterialPaginationItem label="3" />
            <MaterialPaginationItem label="4" />
            <MaterialPaginationItem label="5" />
            <MaterialPaginationItem next />
          </MaterialPagination>

          <MaterialPagination size="md" class="m-4 ms-auto">
            <MaterialPaginationItem prev />
            <MaterialPaginationItem label="1" />
            <MaterialPaginationItem label="2" active />
            <MaterialPaginationItem label="3" />
            <MaterialPaginationItem label="4" />
            <MaterialPaginationItem label="5" />
            <MaterialPaginationItem next />
          </MaterialPagination>

          <MaterialPagination size="lg" class="m-4 ms-auto">
            <MaterialPaginationItem prev />
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
