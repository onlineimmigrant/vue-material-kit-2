<script setup>
//Vue Material Kit 2 Pro components
import MaterialButton from "../../../../components/MaterialButton.vue";
</script>
<template>
  <section class="py-lg-7">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto text-center mb-5">
          <h2>Best no-tricks pricing</h2>
          <p class="lead">
            If you're not satisfied, contact us within the first 30 days and
            we'll send you a full refund.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="card">
          <div class="row">
            <div class="col-lg-8">
              <div class="card-body">
                <h3 class="text-dark">Lifetime Membership</h3>
                <p class="font-weight-normal">
                  You have Free Unlimited Updates and Premium Support on each
                  package. You also have 30 days to request a refund.
                </p>
                <div class="row mt-5 mb-2">
                  <div class="col-lg-3 col-12">
                    <h6 class="text-dark tet-uppercase">What's included</h6>
                  </div>
                  <div class="col-6">
                    <hr class="horizontal dark" />
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12 ps-0">
                    <div class="d-flex align-items-center p-2">
                      <i class="material-icons text-dark font-weight-bold"
                        >done</i
                      >
                      <span class="ps-2">Private code access</span>
                    </div>
                    <div class="d-flex align-items-center p-2">
                      <i class="material-icons text-dark font-weight-bold"
                        >done</i
                      >
                      <span class="ps-2">Free entry to all repositories</span>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12 ps-sm-2 ps-0">
                    <div class="d-flex align-items-center p-2">
                      <i class="material-icons text-dark font-weight-bold"
                        >done</i
                      >
                      <span class="ps-2">Pro member accounts</span>
                    </div>
                    <div class="d-flex align-items-center p-2">
                      <i class="material-icons text-dark font-weight-bold"
                        >done</i
                      >
                      <span class="ps-2">Support team full assist</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 my-auto">
              <div class="card-body text-center">
                <h6 class="mt-sm-4 mt-0 mb-0">Pay once, own it forever</h6>
                <h1 class="mt-0"><small>$</small>399</h1>
                <MaterialButton
                  variant="gradient"
                  color="success"
                  size="lg"
                  class="mt-2"
                  >Get Access</MaterialButton
                >

                <p class="text-sm font-weight-normal">
                  Get a free sample (20MB)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
