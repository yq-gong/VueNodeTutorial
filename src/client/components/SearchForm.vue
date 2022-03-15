<template>
  <div>
    <div class="top">
      <h3>Let's find you the best car!</h3>
      <input
        :placeholder="placeHolder"
        type="text"
        class="my-input"
        ref="textSuggestionRef"
        v-model="inputVal"
        @input="referralSuggestion"
        style="width: 60rem;height: 6rem;margin-bottom: 0px;line-height: 1.5; font-size: 2rem"
      />
      <button style="width: 12rem;height: 6rem;font-size: 2rem">Search</button>
    </div>
    <div :v-show="textSuggestionState">
      <div class="my-input-suggestion" id="scrollContent1">
        <ul
          id="ulScrollContent"
          v-for="(suggestion, index) in completedSuggestions"
          :key="index"
        >
          <li
            style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis; width: 60rem;height: 6rem;margin-bottom: 0px;line-height: 1.5; font-size: 2rem"
          >
            {{ suggestion }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getSearchResponse } from "../../server/index";

export default {
  data() {
    return {
      placeHolder: "Pick-up Location",
      textSuggestionWidth: 30,
      allResponseData: [],
      inputVal: "",
      completedSuggestions: [],
    };
  },

  methods: {
    setRefText(suggestion) {
      this.inputVal = suggestion;
      this.textSuggestionState = false;
    },

    async referralSuggestion(e) {
      try {
        const response = await getSearchResponse(6, this.inputVal);
        this.allResponseData = response.data.results.docs;
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    textSuggestionState() {
      return !!(
        this.inputVal &&
        this.inputVal !== this.placeHolder &&
        this.inputVal.length > 1
      );
    },
  },
  watch: {
    allResponseData(newVal, oldVal) {
      if (newVal !== oldVal && newVal.length) {
        this.completedSuggestions = this.allResponseData.map((item) => {
          const resultName = item.name;
          const country = item.country === undefined ? "-" : item.country;
          const city = item.city === undefined ? "-" : item.city;
          return `${resultName} - Country: ${country} ; City: ${city}`;
        });
      }
    },
  },
};
</script>
