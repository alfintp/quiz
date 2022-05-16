<template>
  <div class="bg">
    <v-container class="container">
      <div class="content">
        <!-- Restart Modal -->
        <v-dialog v-model="dialogRestart" width="500">
          <v-card>
            <v-card-title color="green" class="text-h5 justify-center green darken-1"> THE GAME HAS BEEN RESTARTED </v-card-title>

            <v-img height="700px" contain src="../assets/rat/spon.png"></v-img>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialogRestart = false"> PLAY AGAIN </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- end of Restart Modal -->
        <div class="title text-center"><h1>ZoonimaL</h1></div>
        <div class="menu d-flex justify-end">
          <!-- <h2 class="ml-2">Found : {{ animalz.length }} / {{ animals.length }}</h2> -->
          <v-btn color="orange mr-2" @click="restart">restart</v-btn>
        </div>
        <div v-if="$apollo.loading">Loading...</div>

        <v-row justify="center" class="mt-1" align="center">
          <v-col v-for="(animal, index) in animals" :key="index" cols="12" md="4">
            <v-card height="200px text-center" class="card ma-2 py-4" @click="toDetail(`${index}`)">
              <v-img v-if="animal.is_done == true" class="img ma-auto" contain height="200px" :src="require(`../assets/img/${animal.img}`)" />
              <v-img v-else class="img ma-auto active" contain height="200px" :src="require(`../assets/img/${animal.img}`)" />
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
  background-color: rgba(235, 235, 235, 0.5);
  border-radius: 25%;
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
    dialogRestart: false,
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
      subscribeToMore: {
        document: gql`
          subscription MySubscription {
            animals {
              id
              name
              is_done
              img
            }
          }
        `,
        updateQuery: (previousResult, { subscriptionData }) => {
          console.log(previousResult);
          console.log(subscriptionData);
          return {
            animals: subscriptionData.data.animals,
          };
        },
      },
    },

    // length bernilai true
    animalz: {
      query() {
        return gql`
          query animalz {
            animals: animals(where: { is_done: { _eq: true } }) {
              id
            }
          }
        `;
      },

      update: (data) => data.animals,
    },
  },
  methods: {
    toDetail(id) {
      this.$router.push({ path: `/zoonimal/${id}` });
    },

    restart() {
      this.$apollo.mutate({
        mutation: gql`
          mutation {
            update_animals(_set: { is_done: false }, where: { is_done: { _eq: true } }) {
              affected_rows
            }
          }
        `,
      });
      this.dialogRestart = true;
    },
  },
};
</script>
