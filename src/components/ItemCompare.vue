<template>
  <div class="py-8 w-[90%] md:w-[80%] lg:[w-70%] m-auto">
    <div
      class="flex justify-between pb-12 flex-col md:flex-row gap-4 text-center md:text-left"
    >
      <h1 class="text-[#828286] text-5xl font-semibold">Смартфоны</h1>
      <div class="flex gap-2 text-[#0D5ADC] font-medium justify-center">
        <p>Отобразить товары:</p>
        <span
          v-for="item in showItems"
          class="cursor-pointer"
          @click="handleChoseCurrentItem(item)"
          :class="{ underline: currentItem === item }"
          >{{ item }}</span
        >
      </div>
    </div>
    <div
      class="relative flex justify-evenly md:justify-between items-end gap-4"
    >
      <div
        class="absolute w-full md:w-auto justify-center md:justify-start -top-10 md:relative md:top-0 flex gap-2 basis-[75px] md:basis-[200px] shrink-0 grow-0"
        title="Показать различия"
      >
        <input type="checkbox" id="compare_items" @change="handleChange" />
        <label
          for="compare_items"
          class="text-sm md:text-[16px] text-[#0D5ADC] line-clamp-1"
          >Показать различия</label
        >
      </div>
      <div
        v-for="(item, index) in data.shown"
        class="basis-[16%] grow-0 flex flex-col gap-2 self-start"
      >
        <SwitchMenu
          @switchItems="passSwitchItems"
          :index="index"
          :img="item.img"
          :model="item.model"
          :item="item"
          :data="data"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SwitchMenu from "./SwitchMenu.vue";
import { PropType } from "vue";
import { phone, filteredPhones } from "../types/phone";

export default {
  name: "ItemCompare",
  components: { SwitchMenu },
  props: {
    data: {
      required: true,
      type: Object as PropType<filteredPhones>,
    },
    currentItem: {
      required: true,
      type: Number as PropType<number>,
    },
  },
  data() {
    return {
      showItems: [2, 3, 4, 5, 6],
    };
  },
  methods: {
    handleChoseCurrentItem(item: number) {
      this.$emit("setItem", item);
    },
    handleChange() {
      this.$emit("togleFilter");
    },
    passSwitchItems(item1: phone, item2: phone) {
      this.$emit("switchItems", item1, item2);
    },
  },
};
</script>

<style></style>
