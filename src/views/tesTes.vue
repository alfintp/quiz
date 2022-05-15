<script>
import gql from "graphql-tag";
export default {
  name: "AllAnimals",

  data: () => ({}),
  apollo: {
    true: {
      query() {
        return gql`
          query true {
            animals(where: { is_done: { _eq: true } }) {
              id
            }
          }
        `;
      },
    },
    // true: {
    //   query() {
    //     return gql`
    //       query true {
    //         animals(where: { is_done: { _eq: true } }) {
    //           id
    //         }
    //       }
    //     `;
    //   },
    // },
  },
};
</script>
<template>
  <div>
    <h1>tes</h1>
    {{ animals }}
  </div>
</template>
