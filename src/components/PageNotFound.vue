<template>
  <section class="not-found">
    <p>Page Not Found</p>
    <v-btn color="warning" large to="/">Go back</v-btn>
  </section>
</template>

<script>
export default {
    name: 'PageNotFound'
}
</script>
<style scoped>
  .not-found {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 3rem;
    color: #fff;
    background-color: tomato;
  }
</style>
