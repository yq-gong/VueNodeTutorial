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
// export default {
//   name: "app",
//   components: {},
//   data: function () {
//     return { myChart: {} };
//   },
//   methods: {
//     chartConstructor: function () {
//       const ctx = document.getElementById("myChart").getContext("2d");
//       const myChart = new Chart(ctx, {
//         type: "bar",
//         data: {
//           labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//           datasets: [
//             {
//               label: "# of Votes",
//               data: [12, 19, 3, 5, 2, 3],
//               backgroundColor: [
//                 "rgba(255, 99, 132, 0.2)",
//                 "rgba(54, 162, 235, 0.2)",
//                 "rgba(255, 206, 86, 0.2)",
//                 "rgba(75, 192, 192, 0.2)",
//                 "rgba(153, 102, 255, 0.2)",
//                 "rgba(255, 159, 64, 0.2)",
//               ],
//               borderColor: [
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(54, 162, 235, 1)",
//                 "rgba(255, 206, 86, 1)",
//                 "rgba(75, 192, 192, 1)",
//                 "rgba(153, 102, 255, 1)",
//                 "rgba(255, 159, 64, 1)",
//               ],
//               borderWidth: 1,
//             },
//           ],
//         },
//         options: {
//           scales: {
//             y: {
//               beginAtZero: true,
//             },
//           },
//         },
//       });
//     },
//   },
// };
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
