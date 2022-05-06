<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <div class="d-flex align-center">
        <v-img alt="Logo" class="shrink mr-2 rounded-circle" contain src="../src/assets/bull.png" transition="scale-transition" width="40" />
      </div>
    </v-app-bar>

    <v-main class="main">
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
#app {
  background: url("./assets/main.jpg") no-repeat center center fixed !important;
  background-size: cover;
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
