<template>
    <div>
        <Chat v-if="false" :roomId="undefined"/>
        <p>hello this is chat</p>
    </div>
</template>

<script>
import Chat from '@/components/Chat'

export default {
    name: "ChatList",
    components: {
        Chat
    },
    methods: {
        getSession () {
            return this.$session.get('session')
        }
    },
    created() {
        if (!this.$session.exists())
            this.$router.push('/SigninPlease')
        this.session = this.getSession()
    }
}
</script>

<style>

</style>