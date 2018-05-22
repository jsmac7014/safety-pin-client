<template>
  <section>
    <p>회원가입</p>
    <form>
      <input type="email" v-model="email" placeholder="아이디" id="signupEmail"/>
      <input type="password" v-model="password" placeholder="비밀번호" id="singupPassword"/>
      <button id="signupButton" @click="signup(email, password)">가입!</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      email: "",
      password: "",
      name: "",
      classNumber: "",
      intro: ""
    }
  },
  methods: {
    checkForm(email, password) {
      if (email && password)
        return true
      return false
    },
    signup(email, password) {
      if(!this.checkForm(email, password))
        return false

      const baseURI = 'https://tstserv.herokuapp.com'
      this.$http.post(`${baseURI}/register`, {
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
