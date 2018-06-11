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
      info: ""
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

      this.signupMethod(this.session, email, password, classNumber, info)
    },
    signupSuccessed(session) {
      this.$session.start()
      this.$session.set('session', session)
      this.$router.push('/')
    },
    signupMethod(session, email, password, classNumber, info) {
      const baseURI = 'https://letscoding.kr:8888/api/v1'
      this.$http.post(`${baseURI}/account/t/register`, {
        session: this.session,
        email: this.email,
        password: this.password,
        class: this.classNumber,
        info: this.info
      })
      .then((result) => {

      })
      .catch((err) => {
        
      })
    },
    getSession () {
        return this.$session.get('session')
    }
  },
  created() {
    if (this.$session.exist)
      this.$router.push('/SignoutPlease')
    this.session = this.getSession()
  }
}
</script>

<style>

</style>
