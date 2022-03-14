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
        @blur="textSuggestionControl"
        v-on:keyup="referralSuggestion(inputVal)"
        style="width: 60rem;height: 6rem;margin-bottom: 0px;line-height: 1.5; font-size: 2rem"
      />
      <button style="width: 12rem;height: 6rem;font-size: 2rem">Search</button>
    </div>
    <div v-show="textSuggestionState">
      <div class="my-input-suggestion" id="scrollContent1">
        <ul
          style="list-style:none;margin : 0;padding: 0;"
          id="ulScrollContent"
          :v-for="refSearch in referralSearch"
        >
          <li
            @click.self="setRefText(refSearch)"
            style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
          >
            {{ refSearch }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getSearchResponse } from "../../server/index";
import { getMockSearchResponse } from "../../server/mockResult";

export default {
  data() {
    return {
      placeHolder: "Pick-up Location",
      textSuggestionWidth: 30,
      referralSearchData: [],
      referralSearch: [],
      inputVal: "",
    };
  },
  methods: {
    setRefText(refSearch) {
      this.inputVal = refSearch;
      this.textSuggestionState = false;
    },
    async referralSuggestion(input) {
      if (!input.key === "Enter") {
        const response = await getSearchResponse(6, this.inputVal);
        this.referralSearchData = [
          ...Promise.resolve(response["results"]["docs"]),
        ];
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
    referralSearch() {
      if (this.referralSearchData.length > 0) {
        return this.referralSearchData.map(
          (item) =>
            `${item.name} - Country: ${item.country}, City: ${item.city}`
        );
      } else {
        const mockdata = getMockSearchResponse();
        return mockdata["results"]["docs"].map(
          (item) =>
            `${item.name} - Country: ${item.country}, City: ${item.city}`
        );
      }
    },
  },
};
</script>
