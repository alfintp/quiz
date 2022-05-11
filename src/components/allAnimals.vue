<template>
  <div class="bg">
    <v-container class="container">
      <div class="content">
        <div class="title text-center"><h1>ZoonimaL</h1></div>
        <div class="menu d-flex justify-space-between">
          <h2 class="ml-2">Found : y / x</h2>
          <v-btn color="orange mr-2" @click="restart">restart</v-btn>
        </div>
        <v-row justify="center" class="mt-1" align="center">
          <v-col v-for="(animal, index) in animals" :key="index" cols="12" md="4">
            <v-card height="200px text-center" class="card ma-2" @click="toDetail(`${index}`)">
              <v-img v-if="animal.is_done == true" class="img ma-auto" contain height="200px" :src="require(`../assets/img/${animal.img}`)" />
              <v-img v-else class="img ma-auto active" contain height="200px" :src="require(`../assets/img/${animal.img}`)" />
              <p>{{ animal.is_done }}</p>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.bg {
  background-color: #ffef82;
}
.active {
  filter: brightness(0%);
}
.title {
  margin-top: 40px;
}
.title h1 {
  font-size: 80px;
  font-family: "Irish Grover", cursive;
  color: brown;
  letter-spacing: 10px;
}
.menu {
  margin-top: 50px;
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
  background-color: #82954b;
  transition: 0.5s;
  transform: scale(1.05);
}
</style>

<script>
import gql from "graphql-tag";
export default {
  name: "AllAnimals",

  data: () => ({
    active: true,
    x: [1],
  }),
  apollo: {
    animals: {
      query() {
        return gql`
          query animals {
            animals {
              id
              name
              is_done
              img
            }
          }
        `;
      },
    },
  },
  methods: {
    toDetail(id) {
      this.$router.push({ path: `/zoonimal/${id}` });
    },
    restart() {
      alert("BELOM DISETTING :P");
    },
  },
};
</script>
