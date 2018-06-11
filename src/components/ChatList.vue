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
    },
    methods: {
        getSession () {
            return this.$session.get('session')
        }
    },
    created() {
        if (!this.$session.exist)
            this.$router.push('/SigninPlease')
        this.session = this.getSession()
    }
}
</script>

<style>

</style>