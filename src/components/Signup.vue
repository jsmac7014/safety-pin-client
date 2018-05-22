<template>
  <section class="form-container">
    <section class="logo">
      <h1>회원가입</h1>
    </section>
    <section class="login-form">
      <form>
        <!-- <input type="email" v-model="email" id="signinEmail" placeholder="아이디"/> -->
        <!-- <input type="password" v-model="password" id="signinPassword" placeholder="비밀번호"/> -->
        <vs-input vs-type="text" v-model="name" vs-placeholder="Name" />                
        <vs-input vs-type="email" v-model="email" id="signupEmail" vs-placeholder="Email" />
        <vs-input vs-type="password" v-model="password" id="signuPassword" vs-placeholder="Password"></vs-input>
        <vs-button id="signupButton" @click="signup(email, password)">회원가입</vs-button>
      </form>
    </section>
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

<style scoped>
  *{
    font-family: 'Nanum Gothic', sans-serif;
  }
  .form-container{  
    width:100%;
    min-height: 100vh;
    overflow: auto;
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#2682FF;
  }
  .logo{
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .logo img{
    width: 120px;
  }
  .logo h1{
    color: #fff;  
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    font-weight: 300;
  }
  .login-form{  
    margin:5px;
    min-height: 250px;
    width: 400px;
    height: 250px;
    border-radius: 5px;
    background-color: #fff;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(148,148,148,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(148,148,148,1);
    box-shadow: 0px 0px 5px 0px rgba(148,148,148,1);
  }
  form{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .con-input{
    width: 80%!important;    
    margin: 5px!important;
  }
  .vs-btn{
    width: 80%!important;
  }
  @media screen and (max-width: 420px){
    .login-form{
      width: 350px;
    }
  }
</style>
