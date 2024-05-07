<template>
  <div
    v-show="!showDiference || (showDiference && !compareItems())"
    :title="title"
    class="relative py-8 w-[90%] md:w-[80%] lg:[w-70%] m-auto border-t-[1px] border-[#CDCFD2] flex justify-evenly md:justify-between items-center gap-4 h-[6rem]"
  >
    <p
      class="bg-[#f4f9fc] md:w-auto font-normal text-center md:text-left rounded-md absolute left-[50%] md:left-0 md:translate-x-0 -translate-x-[50%] -top-[14px] md:top-0 md:border-0 border-[1px] md:p-0 py-1 px-2 text-[10px] md:text-base md:relative md:text-normal basis-[75px] md:basis-[200px] text-[#A4A9B9] md:font-semibold uppercase grow-0 shrink-0"
    >
      {{ title }}
    </p>
    <div v-for="item in data" class="basis-[16%] grow-0">
      <svg
        v-if="item === true"
        class="m-auto"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM9.01982 12.9508L16.7961 5.17451L18.7334 7.11161L9.01982 16.8255L3.2667 11.0722L5.20408 9.13514L9.01982 12.9508Z"
          fill="#36935B"
        />
      </svg>
      <svg
        v-else-if="item === false"
        class="m-auto"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM8.75981 11.0304L4 15.7888L6.2734 18.0629L11.0338 13.3038L15.7266 17.9952L18 15.7211L13.3079 11.0304L17.9979 6.34168L15.7245 4.06764L11.0338 8.75697L6.27549 3.99996L4.00209 6.274L8.75981 11.0304Z"
          fill="#EF4058"
        />
      </svg>
      <p
        v-else
        class="font-semibold text-[12px] md:text-sm lg:text-base text-center"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";

export default {
  name: "ItemFeature",
  props: {
    title: {
      required: true,
      type: String as PropType<string>,
    },
    data: {
      required: true,
      type: Array as PropType<(string | number | boolean)[]>,
    },
    showDiference: {
      required: true,
      type: Boolean as PropType<boolean>,
    },
  },
  methods: {
    compareItems(): boolean {
      return this.data.every(
        (item: string | number | boolean) => item === this.data[0]
      );
    },
  },
};
</script>

<style></style>
