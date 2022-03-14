<template>
  <div>
    <h3>Let's find you the best car!</h3>
    <input :placeholder="placeHolder" />
    <button>Search</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      placeHolder: "Pick-up Location",
    };
  },
};
</script>
