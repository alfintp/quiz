<template>
  <div class="wrapper">
    <section class="welcome">
      <v-row justify="center" align="center">
        <v-col class="content-image text-center" cols="12" md="6">
          <img src="../assets/rat/spoon.png" class="rat" width="524px" />
        </v-col>
        <v-col class="content-title text-start" cols="12" md="6">
          <div class="title-wrapper">
            <h1>ZoonimaL</h1>
            <div class="desc">
              <h4 class="mb-6">Many animals disappeared in the zoo, find them all and become a hero</h4>

              <div class="d-flex justify-space-between">
                <router-link style="text-decoration: none; color: inherit" to="zoonimal">
                  <v-btn color="orange"><span>LET'S GO</span> </v-btn>
                </router-link>

                <!-- DIALOG -->
                <howToPlay></howToPlay>
              </div>
            </div>

            <!-- DIALOG -->
          </div>
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<script>
import howToPlay from "../components/howToPlay";

export default {
  name: "ZoonimaL",

  components: {
    howToPlay,
  },
  mounted: function () {
    document.title = "ZoonimaL";
  },
};
</script>
<style scoped>
howToPlay .tutorial {
  height: 200px;
}

.wrapper {
  height: 910px;
}

.welcome {
  height: 917px;
  margin: 0;
  padding: 0;
  background-color: #ffef82;
}

.rat {
  filter: brightness(0%);
  transition: 1s ease-out;
  transition-delay: 1s;
  box-shadow: black;
}
.rat:hover {
  filter: brightness(100%);
  transition: 1s;
}

.title-wrapper {
  width: 550px;
}

.title-wrapper h1 {
  font-size: 100px;
  padding-bottom: 60px;
  font-family: "Irish Grover", cursive;
  color: brown;
  letter-spacing: 10px;
}

.desc h4 {
  font-family: "Montserrat";
  font-size: 38px;
}
</style>
