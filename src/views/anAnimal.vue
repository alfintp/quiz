<template>
  <div class="bg">
    <v-container class="container">
      <v-card class="card text-center">
        <v-flex class="d-flex justify-end">
          <router-link style="text-decoration: none; color: inherit" to="/zoonimal">
            <v-icon size="40px" class="close" color="#ff0000"> mdi-close-box </v-icon>
          </router-link>
        </v-flex>
        <!-- v-if done -->
        <span v-if="animals[idList].is_done == true">
          <h1 class="text my-3 true">{{ animals[idList].name.toUpperCase() }}</h1>
          <v-img :src="require(`../assets/img/${animals[idList].img}`)" contain height="400px" class="mt-5 mb-5 imgt" alt="animal" />
          <v-form disabled class="mx-5">
            <v-row class="justify-center mb-5">
              <v-col cols="12" md="8" class="pt-10 pb-3">
                <v-btn class="justify-end mt-5" disabled>GOOD</v-btn>
              </v-col>
            </v-row>
          </v-form></span
        >

        <!-- v-else not done -->
        <span v-else>
          <h1 class="text my-3 trick" :class="created">{{ trickyName }}</h1>

          <v-img :src="require(`../assets/img/${animals[idList].img}`)" contain height="400px" class="img mt-5 mb-5" alt="animal" />
          <v-form class="mx-5" onsubmit="return false">
            <v-row class="justify-center mb-5">
              <v-col cols="12" md="8">
                <v-text-field
                  v-on:keyup.enter="notification"
                  oninput="this.value = this.value.toUpperCase()"
                  v-model="answer"
                  class="isian justify-center"
                  :counter="animals[idList].name.length"
                  label="What animal is that "
                  required
                ></v-text-field>

                <div class="d-flex justify-space-between mt-4">
                  <v-btn
                    class="justify-end"
                    @click="
                      created();
                      count();
                    "
                    :disabled="cnt > 1"
                    color="orange"
                    >HINT</v-btn
                  >
                  <v-btn @click="notification" type="button" color="#82954B">Guess</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-form>
        </span>
        <!-- prevnext -->
        <div class="d-flex justify-space-between mt-4">
          <v-btn @click="prev" color="#">Prev</v-btn>
          <v-btn @click="next" color="#">Next</v-btn>
        </div>
        <!-- end of prevnext -->
        <!--Empty Modal -->
        <v-dialog v-model="dialogEmpty" width="500">
          <v-card>
            <v-card-title color="red" class="text-h5 justify-center red darken-1"> AAAAAAA, TYPE SOMETHING ! </v-card-title>

            <v-img height="700px" contain src="../assets/rat/cheese.png"></v-img>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="dialogEmpty = false"> TRY AGAIN </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!--end of Empty Modal -->
        <!-- Wrong Modal -->
        <v-dialog v-model="dialogWrong" width="500">
          <v-card>
            <v-card-title color="red" class="text-h5 justify-center red darken-1"> AAAAAAA, WRONG ANSWER ! </v-card-title>

            <v-img height="700px" contain src="../assets/rat/cheese.png"></v-img>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="dialogWrong = false"> TRY AGAIN </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- end of Wrong Modal -->
        <!--  True Modal -->
        <v-dialog v-model="dialogTrue" width="500">
          <v-card>
            <v-card-title class="text-h5 justify-center blue darken-1">GOOD JOB BUDDIES</v-card-title>

            <v-img height="700px" contain src="../assets/rat/okay.png"></v-img>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color=" blue darken-1" text @click="dialogTrue = false"> OKAY </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- end of True Modal -->
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
.bg {
  height: 905px;
  background-color: #ffef82;
}
.isian {
  padding: 15px 25px;
  border-width: calc(var(--border-width) * 1px);
  border-style: solid;
  border-radius: 10px;
}

.container {
  width: 50%;
}
h1 {
  font-family: "Montserrat";
}
.card {
  margin-top: 10%;
  position: relative;
  overflow: hidden;
  background-color: rgba(235, 235, 235, 0.5);
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
    dialogWrong: false,
    dialogTrue: false,
    dialogEmpty: false,
  }),

  methods: {
    count() {
      if (!this.disableBtnFlag) {
        this.disableBtnFlag = true;
        this.cnt = ++this.cnt;
      }
    },
    correctAnswer(id) {
      this.$apollo.mutate({
        mutation: gql`
          mutation ($id: Int!) {
            update_animals_by_pk(pk_columns: { id: $id }, _set: { is_done: true }) {
              id
              is_done
              name
            }
          }
        `,
        variables: { id },
      });
    },

    notification() {
      if (!this.answer) {
        this.answer = "";

        return (this.dialogEmpty = true);
      } else if ((this.answer.length != 0) & (this.answer != this.animals[this.idList].name.toUpperCase())) {
        this.answer = "";

        return (this.dialogWrong = true);
      } else {
        this.correctAnswer(this.animals[this.idList].id);
        this.answer = "";
        return (this.dialogTrue = true);
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

    prev() {
      var x = this.$route.params.id;

      if (x == 0) {
        this.$router.push({ path: `/zoonimal/${this.animals.length - 1}` });
      } else {
        x--;
        this.$router.push({ path: `/zoonimal/${x}` });
      }
      this.disableBtnFlag = false;
      this.cnt = 1;
      this.trickyName = "";

      this.answer = "";
    },
    next() {
      var x = this.$route.params.id;

      if (x == this.animals.length - 1) {
        this.$router.push({ path: `/zoonimal/0` });
      } else {
        x++;
        this.$router.push({ path: `/zoonimal/${x}` });
      }
      this.disableBtnFlag = false;
      this.cnt = 1;
      this.trickyName = "";
      this.answer = "";
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
