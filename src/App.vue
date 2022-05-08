<template>
  <v-app>
    <v-app-bar app elevation="0" class="bar" color="gray">
      <v-subheader>
        <img src="./assets/logo/logo.png" width="100px" alt="logo" />
        <h1 class="subheader">ZoonimaL</h1></v-subheader
      >
    </v-app-bar>

    <v-main class="main">
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
#app {
  background-size: cover;
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
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
