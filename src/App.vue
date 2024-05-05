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

import AppleiPhone12 from "./assets/Apple-iPhone-12.png";
import AppleiPhoneXr from "./assets/Apple-iPhone-Xr.png";
import Realme8Pro from "./assets/Realme-8-Pro.png";
import SamsungGalaxyA72 from "./assets/Samsung-Galaxy-A72.png";
import SamsungGalaxyS21 from "./assets/Samsung-Galaxy-S21.png";
import XiaomiMi11Lite from "./assets/Xiaomi-Mi-11-Lite.png";

export default {
  components: { Header, ItemCompare, ItemFeature },
  data() {
    return {
      PHONES: [
        {
          model: "Apple iPhone 12",
          img: AppleiPhone12,
          manufacturer: "Apple",
          year: 2020,
          diagonal: "6,1",
          country: "Китай",
          meomory: "128 GB",
          refreshrate: "60 Гц",
          NFC: false,
          ESIM: true,
          wirelesscharger: true,
          price: "81990 ₽",
        },
        {
          model: "Xiaomi Mi 11 Lite",
          img: XiaomiMi11Lite,
          manufacturer: "Xiaomi",
          year: 2021,
          diagonal: "6,55",
          country: "Китай",
          meomory: "128 GB",
          refreshrate: "90 Гц",
          NFC: true,
          ESIM: true,
          wirelesscharger: false,
          price: "27490 ₽",
        },
        {
          model: "Samsung Galaxy A72",
          img: SamsungGalaxyA72,
          manufacturer: "Samsung",
          year: 2021,
          diagonal: "6,7",
          country: "Вьетнам",
          meomory: "128 GB",
          refreshrate: "90 Гц",
          NFC: true,
          ESIM: false,
          wirelesscharger: true,
          price: "32890 ₽",
        },
        {
          model: "Samsung Galaxy S21",
          img: SamsungGalaxyS21,
          manufacturer: "Samsung",
          year: 2021,
          diagonal: "6,2",
          country: "Китай",
          meomory: "128 GB",
          refreshrate: "90 Гц",
          NFC: true,
          ESIM: false,
          wirelesscharger: true,
          price: "41990 ₽",
        },
        {
          model: "Apple iPhone Xr",
          img: AppleiPhoneXr,
          manufacturer: "Apple",
          year: 2021,
          diagonal: "6,1",
          country: "Вьетнам",
          meomory: "128 GB",
          refreshrate: "90 Гц",
          NFC: false,
          ESIM: true,
          wirelesscharger: true,
          price: "55000 ₽",
        },
        {
          model: "Realme 8 Pro",
          img: Realme8Pro,
          manufacturer: "OPPO",
          year: 2021,
          diagonal: "6,4",
          country: "Китай",
          meomory: "128 GB",
          refreshrate: "60 Гц",
          NFC: true,
          ESIM: false,
          wirelesscharger: false,
          price: "19990 ₽",
        },
      ] as phone[],
      currentItem: 3,
      showDiference: false,
    };
  },
  methods: {
    isolateFeatureData(feature: String) {
      return this.filterData(this.PHONES).shown.map(
        (phone) => phone[`${feature}`]
      );
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
