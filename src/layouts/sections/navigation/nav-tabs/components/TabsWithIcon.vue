<script setup></script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-lg-6 mx-auto">
          <div class="nav-wrapper position-relative end-0">
            <ul class="nav nav-pills nav-fill p-1" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center active"
                  data-bs-toggle="tab"
                  href="#profile-tabs-icons"
                  role="tab"
                  aria-controls="preview"
                  aria-selected="true"
                >
                  <i class="material-icons text-sm me-2">person</i> My Profile
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center"
                  data-bs-toggle="tab"
                  href="#dashboard-tabs-icons"
                  role="tab"
                  aria-controls="code"
                  aria-selected="false"
                >
                  <i class="material-icons text-sm me-2">dashboard</i> Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
