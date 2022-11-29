<script setup>
import { onMounted, onUnmounted } from "vue";

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("privacy");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("privacy");
  body.classList.remove("bg-gray-200");
});
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar :sticky="true" />
      </div>
    </div>
  </div>
  <section class="pt-3 pt-md-5 pb-md-5 pt-lg-9 mt-8 mt-md-7 mt-lg-0">
    <div class="container">
      <div class="col-12 mx-auto pb-5">
        <div class="card shadow-lg">
          <div
            class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent"
          >
            <div class="bg-gradient-dark shadow-dark border-radius-lg p-4">
              <h3 class="text-white mb-0">Privacy & Policy</h3>
              <p class="text-white opacity-8 mb-0">
                Last modified: Sept 01 2021
              </p>
            </div>
          </div>
          <div class="card-body p-5 pt-0">
            <h5 class="mt-5 mb-3">Introduction</h5>
            At Creative Tim, accessible
            <a href="https://www.creative-tim.com/">here</a>, one of our main
            priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by Website Name and how we use it. <br /><br />
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us through email at
            hello@creative-tim.com
            <br /><br />
            This privacy policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in
            <a href="https://www.creative-tim.com/">Creative Tim</a>. This
            policy is not applicable to any information collected offline or via
            channels other than this website.
            <h5 class="mt-5 mb-3">Managing Your Information</h5>
            <p>
              Unless otherwise stated, Creative Tim and/or its licensors own the
              intellectual property rights for all material on Creative Tim. All
              intellectual property rights are reserved. You may access this
              from Creative Tim for your own personal use subjected to
              restrictions set in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul>
              <li>Republish material from Creative Tim</li>
              <li>Sell, rent or sub-license material from Creative Tim</li>
              <li>Reproduce, duplicate or copy material from Creative Tim</li>
              <li>Redistribute content from Creative Tim</li>
            </ul>
            <p>
              This Agreement shall begin on the date hereof. Our Terms and
              Conditions were created with the help of the
              <a href="https://www.creative-tim.com"
                >Terms And Conditions Generator</a
              >
              and the
              <a href="https://www.creative-tim.com">Privacy Policy Generator</a
              >.
            </p>
            <p>
              Parts of this website offer an opportunity for users to post and
              exchange opinions and information in certain areas of the website.
              Creative Tim does not filter, edit, publish or review Comments
              prior to their presence on the website. Comments do not reflect
              the views and opinions of Creative Tim,its agents and/or
              affiliates. Comments reflect the views and opinions of the person
              who post their views and opinions. To the extent permitted by
              applicable laws, Creative Tim shall not be liable for the Comments
              or for any liability, damages or expenses caused and/or suffered
              as a result of any use of and/or posting of and/or appearance of
              the Comments on this website.
            </p>
            <p>
              Creative Tim reserves the right to monitor all Comments and to
              remove any Comments which can be considered inappropriate,
              offensive or causes breach of these Terms and Conditions.
            </p>
            <h5 class="mt-5 mb-3">Security</h5>
            We shall not be hold responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that is rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene or criminal, or
            which infringes, otherwise violates, or advocates the infringement
            or other violation of, any third party rights.
          </div>
        </div>
      </div>
    </div>
  </section>
  <DefaultFooter />
</template>
