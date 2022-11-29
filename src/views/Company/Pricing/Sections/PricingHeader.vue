<script setup>
// example components
import Header from "../Components/Header.vue";
import FilledInfoCard from "../../../../examples/cards/infoCards/FilledInfoCard.vue";

// images
import bg from "@/assets/img/bg2.jpg";
import bg1 from "@/assets/img/bg.jpg";
import bg2 from "@/assets/img/dg1.jpg";
</script>
<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <Header
          :image="bg"
          label="Pricing Plans"
          title="Work with the rockets"
          description="Wealth creation is an evolutionarily recent positive-sum game.
                  Status is an old zero-sum game. Those attacking wealth
                  creation are often just seeking status."
        />
        <div class="card shadow-lg mt-n5 mx-4 mb-4">
          <div class="card-body">
            <div class="container-fluid px-0">
              <div class="row">
                <div class="col-lg-4 col-sm-6 mb-sm-0 mb-4">
                  <FilledInfoCard
                    class="p-4"
                    :color="{
                      background: 'bg-gradient-success',
                      text: 'white',
                    }"
                    :icon="{ component: 'shuffle', color: 'white' }"
                    title="Netflix's 'Shuffle Play' feature"
                    description="The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever."
                    :action="{
                      route: 'javascript:;',
                      label: { text: 'More about us', color: 'white' },
                    }"
                  />
                </div>
                <div class="col-lg-4 col-sm-6 px-lg-1">
                  <FilledInfoCard
                    class="p-4 h-100"
                    :color="{
                      background: 'bg-white',
                    }"
                    :icon="{ component: 'redeem', color: 'success' }"
                    title="Landbot closes $8M Series"
                    description="The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever."
                    :action="{
                      route: 'javascript:;',
                      label: { text: 'More about us' },
                    }"
                  />
                </div>
                <div class="col-lg-4 mt-lg-0 mt-4">
                  <FilledInfoCard
                    class="p-4 h-100"
                    :color="{
                      background: 'bg-white',
                    }"
                    :icon="{ component: 'bookmarks', color: 'success' }"
                    title="Brave web browser"
                    description="The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever."
                    :action="{
                      route: 'javascript:;',
                      label: { text: 'More about us' },
                    }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <Header
          :image="bg1"
          label="Our Team"
          title="Work with the best"
          description="Free people make free choices. Free choices mean you get
                  unequal outcomes. You can have freedom, or you can have equal
                  outcomes. You can’t have both."
        />
        <div class="card shadow-lg mt-n5 mx-4 mb-4">
          <div class="card-body">
            <div class="container-fluid px-0">
              <div class="row">
                <div class="col-lg-4 col-sm-6 mb-sm-0 mb-4">
                  <FilledInfoCard
                    class="p-4"
                    :color="{
                      background: 'bg-white',
                    }"
                    :icon="{ component: 'shuffle_on', color: 'success' }"
                    title="Netflix's 'Shuffle Play' feature"
                    description="The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever."
                    :action="{
                      route: 'javascript:;',
                      label: { text: 'More about us' },
                    }"
                  />
                </div>
                <div class="col-lg-4 col-sm-6 px-lg-1">
                  <FilledInfoCard
                    class="p-4"
                    :color="{
                      background: 'bg-gradient-success',
                      text: 'white',
                    }"
                    :icon="{ component: 'beenhere', color: 'white' }"
                    title="Landbot closes $8M Series"
                    description="The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever."
                    :action="{
                      route: 'javascript:;',
                      label: { text: 'More about us', color: 'white' },
                    }"
                  />
                </div>
                <div class="col-lg-4 mt-lg-0 mt-4">
                  <FilledInfoCard
                    class="p-4"
                    :color="{
                      background: 'bg-white',
                    }"
                    :icon="{ component: 'ballot', color: 'success' }"
                    title="Brave web browser"
                    description="The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever."
                    :action="{
                      route: 'javascript:;',
                      label: { text: 'Learn more' },
                    }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <Header
          :image="bg2"
          label="Office Places"
          title="Work from home"
          description="You’re spending time to save money when you should be spending
                  money to save time."
        />
        <div class="card shadow-lg mt-n5 mx-4 mb-4">
          <div class="card-body">
            <div class="container-fluid px-0">
              <div class="row">
                <div class="col-lg-4 col-sm-6 mb-sm-0 mb-4">
                  <FilledInfoCard
                    class="p-4 h-100"
                    :color="{
                      background: 'bg-white',
                    }"
                    :icon="{ component: 'tune', color: 'success' }"
                    title="Netflix's 'Shuffle Play' feature"
                    description="The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever."
                    :action="{
                      route: 'javascript:;',
                      label: { text: 'More about us' },
                    }"
                  />
                </div>
                <div class="col-lg-4 col-sm-6 px-lg-1">
                  <FilledInfoCard
                    class="p-4"
                    :color="{
                      background: 'bg-white',
                    }"
                    :icon="{
                      component: 'settings_suggest',
                      color: 'success',
                    }"
                    title="Landbot closes $8M Series"
                    description="The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever."
                    :action="{
                      route: 'javascript:;',
                      label: { text: 'More about us' },
                    }"
                  />
                </div>
                <div class="col-lg-4 mt-lg-0 mt-4">
                  <FilledInfoCard
                    class="p-4"
                    :color="{
                      background: 'bg-gradient-success',
                      text: 'white',
                    }"
                    :icon="{ component: 'compare', color: 'white' }"
                    title="Brave web browser"
                    description="The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever."
                    :action="{
                      route: 'javascript:;',
                      label: { text: 'More about us' },
                    }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="min-vh-75 position-absolute w-100 top-0">
      <a
        class="carousel-control-prev ms-0 ms-md-n5 mt-12 mb-n7 mt-md-0 mb-md-0"
        href="#carouselExampleControls"
        role="button"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon position-absolute bottom-50"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a
        class="carousel-control-next ms-0 ms-md-n5 mt-12 mb-n7 mt-md-0 mb-md-0"
        href="#carouselExampleControls"
        role="button"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon position-absolute bottom-50"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  </div>
</template>
