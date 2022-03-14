<template>
  <div class="container">
    <div>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <p>{{ counter + player }}</p>
    <button @click="onClick">Cool Test Click Me!</button>
  </div>
</template>

<script>
export default {
  data() {
    return { testInput: 20 };
  },
  computed: {
    counter() {
      return this.testInput + 50;
    },
    player() {
      return this.testInput;
    },
  },
  methods: {
    onClick() {
      this.testInput += 1;
    },

    
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
