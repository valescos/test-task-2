<template>
  <div class="relative flex flex-col items-center" :title="model">
    <div
      v-show="store.openedModalIndex === index"
      class="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.05)] z-40"
      @click.self="handleOverlayClick()"
    >
      <div
        v-show="store.openedModalIndex === index"
        :class="`absolute flex flex-col gap-2 p-6 max-h-[35%] w-[80%] sm:max-h-[360px] sm:w-[400px] top-[20%] sm:top-[38%] left-[50%] -translate-x-[50%] md:translate-x-0
          ${calculatePosition(
            index
          )} bg-white z-50 border-[1px] border-[#f4f9fc] rounded-md shadow-xl overflow-y-scroll`"
      >
        <ModalPicker :item="item" />
      </div>
    </div>
    <div class="relative flex flex-col items-center w-full">
      <img
        class="w-[2.2rem] md:w-[3rem] xl:w-[4rem] transition-all"
        :src="img"
        :alt="model"
      />
      <p class="text-[12px] md:text-sm lg:text-lg text-center pt-2">
        {{ model }}
      </p>
      <button
        @click="handleSwitchMenuClick(index)"
        class="lg:absolute top-[4rem] -right-2 xl:right-0 2xl:right-8 scale-75 sm:scale-100 transition-all"
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
  </div>
</template>

<script lang="ts">
import { phone, filteredPhones } from "../types/types";
import { PropType } from "vue";
import { useStore } from "../stores/store";
import ModalPicker from "./ModalPicker.vue";

export default {
  name: "SwitchMenu",
  components: { ModalPicker },
  data() {
    return {
      isModalOpened: false,
      filterquary: "",
      store: useStore(),
    };
  },
  props: {
    data: {
      required: true,
      type: Object as PropType<filteredPhones>,
    },
    img: {
      required: true,
      type: String as PropType<string>,
    },
    model: {
      required: true,
      type: String as PropType<string>,
    },
    item: {
      required: true,
      type: Object as PropType<phone>,
    },
    index: {
      required: true,
      type: Number as PropType<number>,
    },
  },
  methods: {
    handleOverlayClick() {
      this.store.filterquary = "";
      this.store.openedModalIndex = -1;
    },
    handleSwitchMenuClick(index: number) {
      this.store.openedModalIndex = index;
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
};
</script>

<style scoped>
@-moz-document url-prefix() {
  * {
    scrollbar-color: #e3e3e3 white;
    scrollbar-width: auto;
  }
}
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
