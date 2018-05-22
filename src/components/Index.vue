<template>
    <section>     
        <p>메인</p>
        <div v-if="!signed">
            <button @click="replaceLink('/Signin')">
                로그인
            </button>
            <button @click="replaceLink('/Signup')">
                회원가입
            </button>
        </div>
        <div v-else>
            <button @click="signout()">
                로그아웃
            </button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Index',
    data() {
        return {
            signed: this.$session.exists()
        }
    },
    methods: {
        sayId() {
            if (this.$session.exists())
                alert(`${this.$session.get('jwt').userId}님 환영해요!`)
        },
        replaceLink(link) {
            this.$router.push(link)
        },
        signout() {
            this.$session.destroy()
            this.signed = this.$session.exists()
        }
    }
}
</script>

<style>

</style>