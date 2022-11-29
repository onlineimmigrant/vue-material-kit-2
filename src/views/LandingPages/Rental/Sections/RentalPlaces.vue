<script setup>
// example component
import SimpleBookingCard from "../../../../examples/cards/bookingCards/SimpleBookingCard.vue";

//Vue Material Kit 2 Pro components
import MaterialPagination from "@/components/MaterialPagination.vue";
import MaterialPaginationItem from "@/components/MaterialPaginationItem.vue";

// images
import image1 from "@/assets/img/products/product-2-min.jpg";
import image2 from "@/assets/img/products/product-1-min.jpg";
import image3 from "@/assets/img/products/product-3-min.jpg";
import image4 from "@/assets/img/products/product-5-min.jpg";
import image5 from "@/assets/img/products/product-6-min.jpg";
import image6 from "@/assets/img/products/product-7-min.jpg";
</script>
<template>
  <section class="pt-7 pb-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <SimpleBookingCard
            class="mt-5 mt-md-0"
            :image="image1"
            categories="Entire Apartment • 3 Guests • 2 Beds"
            title="Lovely and cosy apartment"
            description="Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward."
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <SimpleBookingCard
            class="mt-5 mt-md-0"
            :image="image2"
            categories="Private Room • 1 Guest • 1 Sofa"
            title="Single room in the center of the city"
            description="As Uber works through a huge amount of internal management turmoil, the company is also consolidating more of its international business."
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <SimpleBookingCard
            class="mt-5 mt-lg-0"
            :image="image3"
            categories="Entire Apartment • 2 Guest • 2 Beds"
            title="Independent house bedroom kitchen"
            description="Music is something that every person has his or her own specific opinion about. Different people have different taste, and various types of music."
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <SimpleBookingCard
            class="mt-5"
            :image="image4"
            categories="Entire Apartment • 2 Guest • 1 Bed"
            title="Zen Gateway with pool and garden"
            description="Fast forward, rewind and more, without having to first invoke a specific skill, or even press a button on their remote."
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <SimpleBookingCard
            class="mt-5"
            :image="image5"
            categories="Entire Flat • 8 Guest • 3 Rooms"
            title="Cheapest hotels for a luxury vacation"
            description="Today, the company announced it will be combining its rides-on-demand business and UberEATS."
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <SimpleBookingCard
            class="mt-5"
            :image="image6"
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
