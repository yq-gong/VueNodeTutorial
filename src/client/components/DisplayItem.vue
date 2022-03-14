<template>
  <div class="board">
    <div class="header">
      <a
        href="/"
        data-testid="brand-logo"
        class="btui-c-link btui-c-link--primary bgui-c-header__brand-logo-link"
        rel=""
        ><h4>RentalCars.com</h4>
      </a>
    </div>
    <br />

    <table class="table table-hover">
      <thead>
        <tr>
          <td>ID</td>
          <td>Item Name</td>
          <td>Item Price</td>
          <td>Actions</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in items" :key="item._id">
          <td>{{ item._id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <router-link
              :to="{ name: 'EditItem', params: { id: item._id } }"
              class="btn btn-primary"
              >Edit</router-link
            >
          </td>
          <td>
            <button class="btn btn-danger" v-on:click="deleteItem(item._id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },

  created: function () {
    this.fetchItems();
  },

  methods: {
    fetchItems() {
      let uri = "http://localhost:4000/items";
      this.axios.get(uri).then((response) => {
        this.items = response.data;
      });
    },
    deleteItem(id) {
      let uri = "http://localhost:4000/items/delete/" + id;
      this.items.splice(id, 1);
      this.axios.get(uri);
    },
  },
};
</script>

<style scoped="scss">
</style>
