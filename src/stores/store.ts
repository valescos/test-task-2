import { defineStore } from "pinia";
import { PHONES, PHONE_FEATURES } from "../data/db";
import { phone, filteredPhones } from "../types/types";

export const useStore = defineStore("phonesStore", {
  state: () => ({
    shownItemsNumber: 3,
    phones: PHONES,
    features: PHONE_FEATURES,
    showDiference: false,
  }),
  getters: {
    filteredData(): filteredPhones {
      return {
        shown: this.phones.slice(0, this.shownItemsNumber),
        hidden: this.phones.slice(this.shownItemsNumber),
      };
    },
  },
  actions: {
    switchItems(item1: phone, item2: phone) {
      let bufferData = this.phones;
      const i1 = bufferData.findIndex((elem) => elem.model === item1.model);
      const i2 = bufferData.findIndex((elem) => elem.model === item2.model);
      bufferData[i1] = item2;
      bufferData[i2] = item1;
      this.phones = bufferData;
    },
    setCurrentItem(itemsNumber: number) {
      this.shownItemsNumber = itemsNumber;
    },
    isolateFeatureData(feature: string): (string | number | boolean)[] {
      return this.filteredData.shown.map((phone) => phone[feature]);
    },
    togleShowDifference() {
      this.showDiference = !this.showDiference;
    },
  },
});
