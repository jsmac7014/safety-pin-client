<template>
  <section>
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
            isConnected: false,
            socketMessage: ''
        }
    },
    // sockets: {
    //     connect() {
    //         this.isConnected = true;
    //     },

    //     disconnect() {
    //         this.isConnected = false;
    //     },

    //     // Fired when the server sends something on the "messageChannel" channel.
    //     messageChannel(data) {
    //         this.socketMessage = data
    //     }
    // }, 
    // methods: {
    //     pingServer() {
    //         //this.$socket.emit('pingServer', 'PING!')
    //     }
    // }
}
</script>

<style>

</style>
