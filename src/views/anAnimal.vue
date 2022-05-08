<template>
  <v-container class="container">
    <v-card class="card text-center">
      <v-flex class="d-flex justify-end">
        <router-link style="text-decoration: none; color: inherit" to="zoonimal">
          <v-icon size="40px" class="close" color="#ff0000"> mdi-close-box </v-icon>
        </router-link>
      </v-flex>
      <v-btn @click="randoSequence">wawa</v-btn>
      <h1 class="text my-3">{{ animal }}</h1>
      <v-img src="../assets/img/mouse.png" contain height="400px" class="img mt-5 mb-5" alt="animal" />
      <v-form class="mx-5">
        <v-row class="justify-center mb-5">
          <v-col cols="12" md="8">
            <v-text-field v-model="answer" :rules="nameRules" :counter="this.animal.length" label="What animal is that " required></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<style scoped>
.container {
  width: 50%;
}

.card {
  margin-top: 3%;
  position: relative;
  overflow: hidden;
}
.close {
}
.img {
  height: 400px;
}
</style>

<script>
export default {
  name: "anAnimal",

  data: () => ({
    answer: "",
    animal: "mouse",
    nameRules: [(v) => !!v || "Answer is required"],
  }),

  methods: {
    shuffleWord(str) {
      str
        .split("")
        .sort(function () {
          return 0.5 - Math.random();
        })
        .join("");
    },
  },
};
</script>
