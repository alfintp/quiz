<template>
  <div class="wrapper">
    <section class="welcome">
      <v-row justify="center" align="center">
        <v-col class="content-image text-center" cols="12" md="6">
          <img src="../assets/rat/spoon.png" class="rat" width="524px" />
        </v-col>
        <v-col class="content-title text-start" cols="12" md="6">
          <div class="title-wrapper">
            <h1 class="mb-6">ZoonimaL</h1>
            <h4 class="mb-6">Many animals disappeared in the zoo, find them all and become a hero</h4>
            <router-link style="text-decoration: none; color: inherit" to="zoonimal">
              <v-btn color="orange"><span>LET'S GO </span> </v-btn>
            </router-link>
            <v-btn class="ml-4" color="blue"><span>HOW TO PLAY </span> </v-btn>
          </div>
        </v-col>
      </v-row>
    </section>
    <div class="detail">
      <h1>
        <router-link to="zoonimal">Play Game</router-link>
      </h1>
      <h1>
        <router-link to="animal">See Animal</router-link>
      </h1>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: white;
  height: 3000px;
}

.welcome {
  height: 904px;
  margin: 0;
  padding: 0;
  background-image: url(../assets/bg/main.jpg);
}
.content-image {
  /* background-color: yellow; */
}
.rat {
  filter: brightness(0%);
  transition: 1s ease-out;
  transition-delay: 1s;
}
.rat:hover {
  filter: brightness(100%);
  transition: 1s;
}
.content-title {
  /* background-color: goldenrod; */
}
.title-wrapper {
  width: 300px;
}
.title-wrapper h1 {
  font-size: 70px;
  color: brown;
}
.title-wrapper h4 {
  font-size: 30px;
}
.detail {
  background-color: aqua;
}
</style>
