<template>
  <div id="app">
    <router-view class="card"/>
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
  body {
    margin: 0;
  }
</style>
