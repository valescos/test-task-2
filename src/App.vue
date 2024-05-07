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
      title="Производитель"
      :showDiference="showDiference"
      :data="isolateFeatureData('manufacturer')"
    />
    <ItemFeature
      title="год релиза"
      :showDiference="showDiference"
      :data="isolateFeatureData('year')"
    />
    <ItemFeature
      title="Диагональ экрана (дюйм)"
      :showDiference="showDiference"
      :data="isolateFeatureData('diagonal')"
    />
    <ItemFeature
      title="Страна-производитель"
      :showDiference="showDiference"
      :data="isolateFeatureData('country')"
    />
    <ItemFeature
      title="Объем памяти"
      :showDiference="showDiference"
      :data="isolateFeatureData('meomory')"
    />
    <ItemFeature
      title="Частота обновления экрана"
      :showDiference="showDiference"
      :data="isolateFeatureData('refreshrate')"
    />
    <ItemFeature
      title="NFC"
      :showDiference="showDiference"
      :data="isolateFeatureData('NFC')"
    />
    <ItemFeature
      title="Поддержка eSIM"
      :showDiference="showDiference"
      :data="isolateFeatureData('ESIM')"
    />
    <ItemFeature
      title="Поддержка беспроводной зарядки"
      :showDiference="showDiference"
      :data="isolateFeatureData('wirelesscharger')"
    />
    <ItemFeature
      title="Стоимость"
      :showDiference="showDiference"
      :data="isolateFeatureData('price')"
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
import { phone } from "./types/phone";
import { PHONES } from "./data/db.ts";

export default {
  components: { Header, ItemCompare, ItemFeature },
  data() {
    return {
      PHONES: PHONES,
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
