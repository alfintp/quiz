<template>
  <v-dialog transition="dialog-top-transition" max-width="700">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="green" class="tutorial" v-bind="attrs" v-on="on">How To Play</v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="#BABD42" dark>Welcome to ZoonimaL Champ !</v-toolbar>
        <h1 class="text-center mt-2 tutor">TUTORIAL</h1>
        <div class="d-flex justify-center align-stretch mt-3">
          <div class="text-center col">
            <img src="../assets/rat/hellow.png" class="" alt="hellow" width="200px" />
          </div>
          <div class="text-start">
            <p>
              <v-icon size="40px" class="close" color="#82954B"> mdi-numeric-1-box </v-icon>
              <span class="mr-3">Choose animal you want to find by clicking the card</span>
            </p>
            <p>
              <v-icon size="40px" class="close" color="#82954B"> mdi-numeric-2-box </v-icon>
              <span class="mr-3">Need clue? click <span class="font-weight-bold">Hint</span> button and <span class="font-weight-bold">Hover</span> cursor to the animal</span>
            </p>
            <p>
              <v-icon size="40px" class="close" color="#82954B"> mdi-numeric-3-box </v-icon>
              <span class="mr-3">Guess the animal </span>
            </p>
            <p>
              <v-icon size="40px" class="close" color="#82954B"> mdi-numeric-4-box </v-icon>
              <span class="mr-3">Happy hunting, Good Luck Champ</span>
            </p>
          </div>
        </div>

        <v-card-actions class="justify-end">
          <v-btn plain color="#82954B" @click="dialog.value = false">GOT IT CAPT</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>
.tutor {
  font-family: "Montserrat";
  letter-spacing: 3px;
}
</style>

<script>
export default {
  name: "howToPlay",

  data: () => ({}),
};
</script>
