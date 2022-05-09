<template>
  <v-app>
    <v-app-bar app elevation="0" justify-center class="bar justify-center" color="#BABD42">
      <v-subheader @click="home">
        <img src="./assets/logo/logo.png" width="100px" alt="logo" />
        <h1 class="subheader">ZoonimaL</h1></v-subheader
      >
      <v-spacer></v-spacer>
      <howToPlay class="aw"></howToPlay>
    </v-app-bar>

    <v-main class="main">
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
.aw {
  margin-right: 2000px;
}
.subheader {
  color: #1c996d;
}

h1 {
  font-family: "Montserrat";
}
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"), url(https://fonts.googleapis.com/css?family=Montserrat) format("truetype");
}
</style>
<script>
import howToPlay from "./components/howToPlay.vue";
export default {
  name: "App",
  components: {
    howToPlay,
  },
  data: () => ({
    //
  }),
  methods: {
    home() {
      this.$router.push({
        name: "LandingPage",
      });
    },
  },
};
</script>
