<template>
  <div id="app">
    <header>
      <!-- <router-link to="/">Main</router-link> -->
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      appName: "safety-pin"
    }
  }
}
</script>

<style>

</style>
