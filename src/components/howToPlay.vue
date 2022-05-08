<template>
  <v-dialog transition="dialog-top-transition" max-width="700">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" class="ml-4" v-bind="attrs" v-on="on">How To Play</v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="primary" dark>Welcome to ZoonimaL Champ !</v-toolbar>
        <h1 class="text-center mt-2">TUTORIAL</h1>
        <div class="d-flex justify-center align-stretch mt-3">
          <div class="text-center col">
            <img src="../assets/rat/hellow.png" class="" alt="hellow" width="200px" />
          </div>
          <div class="text-start">
            <p>
              <v-icon size="40px" class="close" color="#ff0000"> mdi-numeric-1-box </v-icon>
              <span class="mr-3">Choose animal you want to find by clicking the card</span>
            </p>
            <p>
              <v-icon size="40px" class="close" color="#ff0000"> mdi-numeric-2-box </v-icon>
              <span class="mr-3">Need clue? click <span class="font-weight-bold">Hint</span> button and <span class="font-weight-bold">Hover</span> cursor to the animal</span>
            </p>
            <p>
              <v-icon size="40px" class="close" color="#ff0000"> mdi-numeric-3-box </v-icon>
              <span class="mr-3">Guess the animal </span>
            </p>
            <p>
              <v-icon size="40px" class="close" color="#ff0000"> mdi-numeric-4-box </v-icon>
              <span class="mr-3">Happy hunting, Good Luck Champ</span>
            </p>
          </div>
        </div>

        <!-- <v-row justify="center" class="modal-wrapper mt-3" align="center">
          <v-col class="text-center col">
            <img src="../assets/rat/hellow.png" class="" alt="hellow" width="200px" />
          </v-col>
          <v-col class="text-start col"
            ><v-card-text>
              <v-icon size="40px" class="close" color="#ff0000"> mdi-numeric-1-box </v-icon>
              <span>Choose card you want to find</span>
            </v-card-text></v-col
          >
        </v-row> -->

        <v-card-actions class="justify-end">
          <v-btn text @click="dialog.value = false">GOT IT CAPT</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped></style>

<script>
export default {
  name: "howToPlay",

  data: () => ({}),
};
</script>
