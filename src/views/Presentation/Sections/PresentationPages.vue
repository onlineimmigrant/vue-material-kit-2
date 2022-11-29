<script setup>
import ExampleCard from "../Components/ExampleCard.vue";
import MaterialBadge from "../../../components/MaterialBadge.vue";

// images
import imgPricing from "@/assets/img/pricing.png";
import imgFAQ from "@/assets/img/faq.png";
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="row text-center my-sm-5 mt-5">
          <div class="col-lg-6 mx-auto">
            <MaterialBadge color="success" class="mb-3"
              >Boost creativity</MaterialBadge
            >
            <h2 class="">With our coded pages</h2>
            <p class="lead">
              The easiest way to get started is to use one of our <br />
              pre-built example pages.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8">
          <div class="row mt-4">
            <div class="col-md-4">
              <ExampleCard
                class="shadow-lg"
                title="Coworking Page"
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/coworking.jpg"
                route="coworking"
              />
            </div>
            <div class="col-md-4 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="Rental Page"
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/rental.jpg"
                route="rental"
              />
            </div>
            <div class="col-md-4 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="About Us Page"
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/about-us.jpg"
                route="about"
              />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-4 mt-md-0 mt-5">
              <ExampleCard
                classes="mt-5"
                title="Pricing Page"
                :image="imgPricing"
                route="pricing"
              />
            </div>
            <div class="col-md-4 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="Help Center"
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/help-center.jpg"
                route="helpcenter"
              />
            </div>
            <div class="col-md-4 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="Contact Us Page"
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/contact.jpg"
                route="contactus"
              />
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-md-4 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="FAQ Page"
                :image="imgFAQ"
                route="faq"
              />
            </div>
            <div class="col-md-4 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="Privacy Page"
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/privacy.jpg"
                route="privacy"
              />
            </div>
            <div class="col-md-4 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="Desktop App Page"
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/desktop.jpg"
                route="desktop-app"
              />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-4 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="Single Article Blog"
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/single-article.jpg"
                route="single-article"
              />
            </div>
            <div class="col-md-4 mt-md-0 mt-5">
              <ExampleCard
                classes="shadow-lg"
                title="Author Blog Page"
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/author.jpg"
                route="author"
              />
            </div>
            <div class="col-md-4 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="Virtual Reality"
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/virtual-reality.jpg"
                route="virtual-reality"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3 mx-auto mt-md-0 mt-5">
          <div class="position-sticky" style="top: 100px !important">
            <h4 class="">
              Presentation Pages for Company, Landing Pages, Blogs and Support
            </h4>
            <h6 class="text-secondary">
              These is just a small selection of the multiple possibitilies you
              have. Focus on the business, not on the design.
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
