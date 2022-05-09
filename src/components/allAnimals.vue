<template>
  <div class="bg">
    <v-container class="container">
      <div class="content">
        <v-row justify="center" align="center">
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
      this.$router.push(id);
    },
  },
  computed: {
    //   isDone: function () {
    //     for (let i = 0; i < this.animals.length; i++) {
    //       return this.animals[i].is_done ? "active" : "";
    //     }
    //     return this.animals.is_done;
    //   },
    // },
  },
};
</script>
