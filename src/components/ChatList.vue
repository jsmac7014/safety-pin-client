<template>
    <div>
        <Chat v-if="false" :roomId="undefined"/>
    </div>
</template>

<script>
import Chat from '@/components/Chat'

export default {
    name: "ChatList",
    components: {
        Chat
    }
}
</script>

<style>

</style>