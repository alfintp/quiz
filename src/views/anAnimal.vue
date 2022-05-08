<template>
  <v-container class="container">
    <v-card class="card text-center">
      <v-flex class="d-flex justify-end">
        <router-link style="text-decoration: none; color: inherit" to="zoonimal">
          <v-icon size="40px" class="close" color="#ff0000"> mdi-close-box </v-icon>
        </router-link>
      </v-flex>
      <!-- v-if -->
      <span v-if="animals[idList].is_done == true">
        <h1 class="text my-3 true">{{ animals[idList].name.toUpperCase() }}</h1>

        <v-img :src="require(`../assets/img/${animals[idList].img}`)" contain height="400px" class="mt-5 mb-5 imgt" alt="animal" />
        <v-form disabled class="mx-5">
          <v-row class="justify-center mb-5">
            <v-col cols="12" md="8">
              <v-btn class="justify-end mt-5" disabled>GOOD</v-btn>
            </v-col>
          </v-row>
        </v-form></span
      >

      <!-- v-else -->
      <span v-else>
        <h1 class="text my-3" :class="created">{{ trickyName }}</h1>

        <v-img :src="require(`../assets/img/${animals[idList].img}`)" contain height="400px" class="img mt-5 mb-5" alt="animal" />
        <v-form class="mx-5">
          <v-row class="justify-center mb-5">
            <v-col cols="12" md="8">
              <v-text-field v-model="answer" :rules="nameRules" :counter="animals[idList].name.length" label="What animal is that " required></v-text-field>
              <v-btn
                class="justify-end"
                @click="
                  created();
                  test();
                "
                :disabled="cnt > 1"
                color="orange"
                >HINT</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </span>
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
.true {
  letter-spacing: 15px;
}
.imgt {
  height: 400px;
}
.img {
  filter: brightness(0%);
  transition: 1s ease-out;
  transition-delay: 1s;
  height: 400px;
}
.img:hover {
  filter: brightness(100%);
  transition: 2s;
  transition-delay: 1s;
}
</style>

<script>
import gql from "graphql-tag";

export default {
  name: "anAnimal",

  data: () => ({
    disableBtnFlag: false,
    cnt: 1,
    answer: "",
    newWord: "",
    newImg: "",
    trickyName: "",
    nameRules: [(v) => !!v || "Answer is required"],
  }),

  methods: {
    test: function () {
      if (!this.disableBtnFlag) {
        this.disableBtnFlag = true;
        // something to do
        this.cnt = ++this.cnt;
      }
    },
    getRandomWord() {
      {
        this.newWord = this.animals[this.idList].name.toUpperCase();

        this.trickyName = this.scramble(this.newWord.split(""));
      }
    },
    scramble(arr) {
      let trick = arr.sort();
      trick = trick.reverse();
      return trick.join(" - ");
    },
    created() {
      this.getRandomWord();
    },
  },
  computed: {
    idList() {
      return this.$route.params.id;
    },
  },
  apollo: {
    animals: {
      query() {
        return gql`
          query animals {
            animals {
              id
              name
              img
              is_done
            }
          }
        `;
      },
    },
  },
};
</script>
