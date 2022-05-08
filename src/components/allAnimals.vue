<template>
  <v-container class="container">
    <div class="pb-5 text-center">
      <label> <input v-model="is_done" type="radio" :value-type="Boolean" /> Semua </label>

      <label>
        <input v-model="is_done" type="radio" :value="true" />
        Selesai
      </label>

      <label>
        <input v-model="is_done" type="radio" :value="false" />
        Belum Selesai
      </label>
    </div>
    <h1>
      <router-link to="/">Home Page</router-link>
    </h1>
    <h1>
      <router-link to="animal">See Animal</router-link>
    </h1>
    <div class="content">
      <v-row justify="center" align="center">
        <v-col v-for="animal in animals" :key="animal.id" cols="12" md="4">
          <v-card height="200px text-center" class="card ma-2" @click="onClick">
            <v-img class="img ma-auto" :class="isDone" contain height="200px" :src="require(`../assets/img/${animal.img}`)" />
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped>
.active {
  filter: brightness(0%);
}

.container {
  width: 70%;
}
.card {
  transition: 0.5s ease-out;
  position: relative;
  overflow: hidden;
}
.card:hover {
  background-color: rgb(170, 170, 170);
  transition: 0.5s;
  transform: scale(1.05);
}

.tes:hover {
  background-color: black;
}
</style>

<script>
import gql from "graphql-tag";
export default {
  name: "AllAnimals",

  data: () => ({
    is_done: false,
    active: true,
  }),
  methods: {
    onClick() {
      alert("mantap");
    },
  },
  computed: {
    isDone: function () {
      return this.is_done ? "" : "active";
    },
  },
  apollo: {
    animals: {
      query() {
        return gql`
          query animals($is_done: Boolean) {
            animals(where: { is_done: { _eq: $is_done } }) {
              name
              is_done
              img
            }
          }
        `;
      },
      variables() {
        return {
          is_done: this.is_done,
        };
      },
    },
  },
};
</script>
