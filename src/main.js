import App from "./App.vue";
import router from "./router";
import Vue from "vue";
import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import vuetify from "./plugins/vuetify";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { split } from "apollo-link";

Vue.config.productionTip = false;

const httpLink = createHttpLink({
  uri: "https://vocal-crab-44.hasura.app/v1/graphql",
});

const wsLink = new WebSocketLink({
  uri: "wss://vocal-crab-44.hasura.app/v1/graphql",
  options: {
    reconnect: true,
  },
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  httpLink
);

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
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
