<template>
  <div class="border-b-[1px] border-[#A6A5A9]">
    <Header />
  </div>
  <ItemCompare :data="store.filteredData" />
  <div class="bg-[#f4f9fc] pb-12">
    <ItemFeature
      v-for="feature in store.features"
      :title="feature.translation"
      :data="store.isolateFeatureData(`${feature.name}`)"
    />
    <hr class="w-[90%] md:w-[80%] lg:[w-70%] m-auto border-t-[#CDCFD2]" />
  </div>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import ItemCompare from "./components/ItemCompare.vue";
import ItemFeature from "./components/ItemFeature.vue";
import { useStore } from "./stores/store.ts";

export default {
  components: { Header, ItemCompare, ItemFeature },
  data() {
    return {
      store: useStore(),
    };
  },
};
</script>

<style></style>
