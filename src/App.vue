<template>
  <div class="border-b-[1px] border-[#A6A5A9]">
    <Header />
  </div>
  <ItemCompare
    :data="filterData(PHONES)"
    :currentItem="currentItem"
    @setItem="setCurrentItem"
    @togleFilter="togleShowDifference"
    @switchItems="handleSwitchItems"
  />
  <div class="bg-[#f4f9fc] pb-12">
    <ItemFeature
      v-for="feature in PHONE_FEATURES"
      :title="feature.translation"
      :showDiference="showDiference"
      :data="isolateFeatureData(`${feature.name}`)"
    />
    <hr
      class="w-[90%] md:w-[80%] lg:[w-70%] m-auto border-[1px] border-t-[#CDCFD2]"
    />
  </div>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import ItemCompare from "./components/ItemCompare.vue";
import ItemFeature from "./components/ItemFeature.vue";
import { phone } from "./types/types.ts";
import { PHONES, PHONE_FEATURES } from "./data/db.ts";

export default {
  components: { Header, ItemCompare, ItemFeature },
  data() {
    return {
      PHONE_FEATURES,
      PHONES,
      currentItem: 3,
      showDiference: false,
    };
  },
  methods: {
    isolateFeatureData(feature: string): (string | number | boolean)[] {
      return this.filterData(this.PHONES).shown.map((phone) => phone[feature]);
    },
    setCurrentItem(item: number) {
      this.currentItem = item;
    },
    filterData(data: phone[]) {
      return {
        shown: data.slice(0, this.currentItem),
        hidden: data.slice(this.currentItem),
      };
    },
    togleShowDifference() {
      this.showDiference = !this.showDiference;
    },
    handleSwitchItems(item1: phone, item2: phone) {
      let bufferData = this.PHONES as phone[];
      const i1 = bufferData.findIndex((elem) => elem.model === item1.model);
      const i2 = bufferData.findIndex((elem) => elem.model === item2.model);
      bufferData[i1] = item2;
      bufferData[i2] = item1;
      this.PHONES = bufferData;
    },
  },
};
</script>

<style></style>
