<template>
  <section class="py-6">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-lg-4 mx-auto">
          <div class="nav-wrapper position-relative end-0">
            <ul class="nav nav-pills nav-fill flex-column p-1" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-0 py-1 active"
                  data-bs-toggle="tab"
                  href="#profile-tabs-vertical"
                  role="tab"
                  aria-controls="preview"
                  aria-selected="true"
                >
                  My Profile
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-0 py-1"
                  data-bs-toggle="tab"
                  href="#dashboard-tabs-vertical"
                  role="tab"
                  aria-controls="code"
                  aria-selected="false"
                >
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-0 py-1"
                  data-bs-toggle="tab"
                  href="#payments-tabs-vertical"
                  role="tab"
                  aria-controls="code"
                  aria-selected="false"
                >
                  Payments
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
