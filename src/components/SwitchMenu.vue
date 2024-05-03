<template>
  <div class="flex flex-col gap-2 items-center" :title="model">
    <div class="relative">
      <img
        class="w-[2.5rem] md:w-[5rem]"
        :src="'/src/assets/' + img"
        :alt="model"
      />
      <div
        v-show="isModalOpened"
        class="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.05)] z-40"
        @click.self="isModalOpened = !isModalOpened"
      >
        <div
          v-show="isModalOpened"
          :class="`absolute flex flex-col gap-2 p-6 h-[30%] w-[80%] sm:h-[336px] sm:w-[400px] top-[20%] left-[50%] -translate-x-[50%] md:translate-x-0
          ${calculatePosition(
            index
          )} bg-white z-50 border-[1px] border-[#f4f9fc] rounded-md shadow-xl overflow-y-scroll`"
        >
          <input
            v-model="filterquary"
            type="text.toString()"
            placeholder="Поиск"
            class="py-2 px-4 border-2 w-full rounded-md text-xl"
          />
          <div
            v-for="scrollitem in filterSerch(data.hidden, filterquary)"
            @click="handleModalClick(scrollitem, item)"
            class="flex gap-4 items-center hover:bg-gray-100 transition-all cursor-pointer p-2 rounded-md"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0909 4.54548H3.10384L6.09735 1.55191C6.45238 1.19694 6.45238 0.621302 6.09735 0.266272C5.74239 -0.0887575 5.16675 -0.0887575 4.81172 0.266272L0.266272 4.81172C-0.0887575 5.16669 -0.0887575 5.74233 0.266272 6.09735L4.81172 10.6428C4.98923 10.8203 5.2219 10.9091 5.45457 10.9091C5.68723 10.9091 5.9199 10.8203 6.09735 10.6428C6.45238 10.2878 6.45238 9.7122 6.09735 9.35717L3.10384 6.36366H19.0909C19.593 6.36366 20 5.95663 20 5.45457C20 4.95251 19.593 4.54548 19.0909 4.54548Z"
                fill="#36935B"
              />
              <path
                d="M15.1883 9.35717C14.8333 9.0022 14.2576 9.0022 13.9026 9.35717C13.5476 9.71214 13.5476 10.2878 13.9026 10.6428L16.8962 13.6364H0.90912C0.40706 13.6364 3.02863e-05 14.0434 3.02863e-05 14.5455C3.02863e-05 15.0475 0.40706 15.4546 0.90912 15.4546H16.8962L13.9027 18.4481C13.5476 18.8031 13.5476 19.3787 13.9027 19.7338C14.0801 19.9112 14.3128 20 14.5455 20C14.7781 20 15.0108 19.9112 15.1883 19.7337L19.7337 15.1883C20.0887 14.8333 20.0887 14.2576 19.7337 13.9026L15.1883 9.35717Z"
                fill="#36935B"
              />
            </svg>
            <img
              class="w-[2.5rem]"
              :src="'/src/assets/' + scrollitem.img"
              :alt="scrollitem.model"
            />
            <p>{{ scrollitem.model }}</p>
          </div>
        </div>
      </div>
      <button
        @click="isModalOpened = !isModalOpened"
        class="absolute -right-[75%] md:-right-[65%] top-[60%]"
        v-show="data.hidden.length !== 0"
      >
        <svg
          width="30"
          height="27"
          viewBox="0 0 30 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.375 10.125L15 18.5625L5.625 10.125"
            stroke="#0D5ADC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <p class="text-[12px] md:text-sm lg:text-lg text-center">
      {{ model }}
    </p>
  </div>
</template>

<script lang="ts">
import { phone } from "../types/phone";

export default {
  props: ["data", "img", "model", "item", "index"],
  name: "SwitchMenu",
  methods: {
    filterSerch(data: phone[], value: string) {
      return data.filter((item) =>
        item.model.toLowerCase().includes(value.toLowerCase())
      );
    },
    handleModalClick(item1: phone, item2: phone) {
      this.$emit("switchItems", item1, item2);
      this.isModalOpened = !this.isModalOpened;
    },
    calculatePosition(index: number): string {
      if (this.data.shown.length === 6) return "";
      if (this.data.shown.length === 5) {
        switch (index) {
          case 0:
            return "md:left-[15%]";
          case 1:
            return "md:left-[30%]";
          case 2:
            return "md:left-[45%]";
          case 3:
            return "md:left-[60%]";
          case 4:
            return "md:left-[75%]";
        }
      }
      if (this.data.shown.length === 4) {
        switch (index) {
          case 0:
            return "md:left-[20%]";
          case 1:
            return "md:left-[35%]";
          case 2:
            return "md:left-[55%]";
          case 3:
            return "md:left-[75%]";
        }
      }
      if (this.data.shown.length === 3) {
        switch (index) {
          case 0:
            return "md:left-[25%]";
          case 1:
            return "md:left-[50%]";
          case 2:
            return "md:left-[75%]";
        }
      }
      if (this.data.shown.length === 2) {
        switch (index) {
          case 0:
            return "md:left-[40%]";
          case 1:
            return "md:left-[75%]";
        }
      }
      return "md:left-[50%]";
    },
  },
  data() {
    return {
      isModalOpened: false,
      filterquary: "",
    };
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 1.2rem;
}
::-webkit-scrollbar-track {
  background-color: white;
  border-radius: 100vw;
}
::-webkit-scrollbar-thumb {
  background-color: #e3e3e3;
  border-radius: 100vw;
  border: 0.3rem white solid;
}
</style>
