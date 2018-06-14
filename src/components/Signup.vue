<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height class="form-container">
        <v-layout align-center justify-center>
          <v-flex xs12 sm6 md3>
            <section>
              <section class="logo">
                <img src="./../assets/icon.png" alt="" srcset="">
                <h1>Safety PIN</h1>
              </section>
              <v-card class="login-form">
                <!-- <input type="email" v-model="email" id="signinEmail" placeholder="아이디"/> -->
                <!-- <input type="password" v-model="password" id="signinPassword" placeholder="비밀번호"/> -->
                <v-form>
                  <v-text-field v-model="name" label="이름" required></v-text-field>
                  <v-text-field v-model="email" label="E-mail" required></v-text-field>                  
                  <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
                  <v-btn color="info" flat @click="signup(email, password)">회원가입</v-btn>
                </v-form>
              </v-card>
            </section>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
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
    background-color:#2682FF;
  }
  .logo{
    height: 220px;
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
    padding: 15px; 
    background-color: #fff;
    color: #2682FF;
  }
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
