<template>
    <section>
        <p>로그인 화면인건가</p>
        <a href="/#/">돌아가자</a>
        <input type="email" v-model="email" id="signinEmail" placeholder="아이디"/>
        <input type="password" v-model="password" id="signinPassword" placeholder="비밀번호"/>
        <button id="LoginButton" @click="signin(email, password)">로그인!</button>
    </section>
</template>

<script>
export default {
  name: 'Signin',
  data() {
      return {
            email: "",
            password: ""
      }
  },
  methods: {
    checkForm(email, password) {
      if (email && password)
        return true
      return false
    },
    signin(email, password) {
      if(!this.checkForm(email, password))
        return false

      const baseURI = 'https://tstserv.herokuapp.com'
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
    signupSuccessed(session) {
      this.$session.start()
      this.$session.set('session', session)
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
