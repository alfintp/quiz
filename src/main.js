import App from "./App.vue";
import router from "./router";
import Vue from "vue";
import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import vuetify from "./plugins/vuetify";
import { loadScript } from "vue-plugin-load-script";
// import { WebSocketLink } from "apollo-link-ws";
// import { getMainDefinition } from "apollo-utilities";
loadScript("https://randojs.com/2.0.0.js");
const httpLink = createHttpLink({
  uri: "https://vocal-crab-44.hasura.app/v1/graphql",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  el: "#app",
  router,
  apolloProvider,
  vuetify,

  render: function (h) {
    return h(App);
  },
});
