<template>
    <section>
        <input type="text" v-model="pin"/>
        <button>확인</button>
    </section>
</template>

<script>
export default {
    name: "CheckPin",
    data() {
        return {
            pin: null
        }
    },
    methods: {
        checkPin() {
            const baseURI = 'https://tstserv.herokuapp.com/'
            this.$http.post(`${baseURI}/login`, {
                params: {
                    email: email,
                    password: password
                }
            })
            .then((result) => {
                let data = result.data
                this.signupSuccessed(data.session)
            })
            .catch((err) => {
                alert(err)
            })            
        },
        successed() {

        },
        failed() {

        }
    }
}
</script>

<style>

</style>
