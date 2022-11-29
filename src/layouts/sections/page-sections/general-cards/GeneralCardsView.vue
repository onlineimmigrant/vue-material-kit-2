<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// General Cards page components
import CardRaised from "./components/CardRaised.vue";
import CardImageInside from "./components/CardImageInside.vue";
import CardWithColoredShadow from "./components/CardWithColoredShadow.vue";
import CardRotate from "./components/CardRotate.vue";
import CardPricing from "./components/CardPricing.vue";

// General Cards page components codes
import {
  cardRaisedCode,
  cardImageInsideCode,
  cardWithColoredShadowCode,
  cardRotateCode,
  cardPricingCode,
} from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="General Cards"
    :breadcrumb="[
      { label: 'Page Sections', route: '#' },
      { label: 'General Cards' },
    ]"
  >
    <View title="Card raised" :code="cardRaisedCode" id="card-raised">
      <CardRaised />
    </View>

    <View
      title="Card image inside"
      :code="cardImageInsideCode"
      id="card-image-inside"
    >
      <CardImageInside />
    </View>

    <View
      title="Card with colored shadow"
      :code="cardWithColoredShadowCode"
      id="card-blur-animation"
    >
      <CardWithColoredShadow />
    </View>

    <View
      title="Card rotate"
      :code="cardRotateCode"
      id="card-rotate"
      height="600"
    >
      <CardRotate />
    </View>

    <View title="Card pricing" :code="cardPricingCode" id="card-pricing">
      <CardPricing />
    </View>
  </BaseLayout>
</template>
