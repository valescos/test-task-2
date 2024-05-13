<template>
  <div class="relative flex flex-col items-center" :title="model">
    <div
      v-show="store.openedModalIndex === index"
      class="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.05)] z-40"
      @click.self="handleOverlayClick()"
    >
      <div
        v-show="store.openedModalIndex === index"
        :class="`fixed top-[40%] left-[50%] -translate-x-[50%] w-[80%] sm:w-[60%] px-auto max-h-[326px] md:hidden flex flex-col gap-2 p-6 bg-white z-50 border-[1px] border-[#f4f9fc] rounded-md shadow-xl overflow-y-scroll`"
      >
        <ModalPicker :item="item" />
      </div>
    </div>
    <div
      v-show="store.openedModalIndex === index"
      :class="`hidden md:flex absolute top-[65%] max-h-[326px] md:max-h-[426px] md:w-[286px]  flex-col gap-2 p-6 bg-white z-50 border-[1px] border-[#f4f9fc] rounded-md shadow-xl overflow-y-scroll`"
    >
      <ModalPicker :item="item" />
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
