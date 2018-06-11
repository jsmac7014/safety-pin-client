<template>
  <section>
    <p>로그인</p>
    <form>
      <input type="email" v-model="email" id="signinEmail" placeholder="아이디"/>
      <input type="password" v-model="password" id="signinPassword" placeholder="비밀번호"/>
      <button id="LoginButton" @click="signin(email, password)">로그인!</button>
    </form>
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

      this.signinMethod(this.session, email, password)
      
      //test
      this.signupSuccessed("testSession");
    },
    signinMethod(session, email, password) {
        const baseURI = 'https://letscoding.kr:8888/api/v1'
        this.$http.post(`${baseURI}/account/t/login`, {
          session: this.session,
          email: this.email,
          password: this.password
        })
        .then((result) => {
          alert(result)
        })
        .catch((err) => {
          alert(err)
        })
    },
    signupSuccessed(session) {
      this.$session.start()
      this.$session.set('session', session)
      this.$router.push('/')
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
