<template>
  <section>
    <p>채팅 방</p>
    <ul>

    </ul>
    <input type="text" />
    <button>추가</button>
  </section>
</template>

<script>
export default {
    name: "Chat",
    props: [
      "roomId"
    ],
    data() {
        return {
            isConnected: false
        }
    }
}
</script>

<style>

</style>
