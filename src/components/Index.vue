<template>
    <section class="container">
        <nav class="top-nav">
            <!-- 클릭시 left-nav 표시 -->
            <vs-button vs-type="primary-flat" vs-icon="menu"></vs-button>
            <h1>SafetyPIN</h1>
        </nav>
        <section class="left-nav">
            <div class="divide">
                <vs-button vs-type="primary-filled" vs-icon="home"></vs-button>
                <vs-button vs-type="primary-flat" vs-icon="chat"></vs-button>
                <vs-button vs-type="primary-flat" vs-icon="calendar_today"></vs-button>
            </div>
            <div class="divide">
                <!-- 프로필 수정으로 가기 -->
                <vs-avatar />
                <vs-button @click="signout()" vs-type="danger-line-down" vs-icon="exit_to_app"></vs-button>
            </div>
        </section>
        <section class="main-container">
            <div class="contact card">
                <vs-list>
                    <vs-list-header vs-icon="contacts" vs-title="연락처" vs-color="success">
                    </vs-list-header>
                    <vs-input vs-icon="search" vs-placeholder="Search" v-model="value1" />
                    <vs-list-item vs-icon="person" vs-title="신재헌 학부모님" vs-subtitle="010-1234-1234">
                        <vs-button vs-type="warning-line-down" vs-icon="chat"></vs-button>
                    </vs-list-item>
                    <vs-list-item vs-icon="person" vs-title="신재헌 학부모님" vs-subtitle="010-1234-1234">
                        <vs-button vs-type="warning-line-down" vs-icon="chat"></vs-button>
                    </vs-list-item>
                    <vs-list-item vs-icon="person" vs-title="신재헌 학부모님" vs-subtitle="010-1234-1234">
                        <vs-button vs-type="warning-line-down" vs-icon="chat"></vs-button>
                    </vs-list-item>
                    <vs-list-item vs-icon="person" vs-title="신재헌 학부모님" vs-subtitle="010-1234-1234">
                        <vs-button vs-type="warning-line-down" vs-icon="chat"></vs-button>
                    </vs-list-item>
                    <vs-list-item vs-icon="person" vs-title="신재헌 학부모님" vs-subtitle="010-1234-1234">
                        <vs-button vs-type="warning-line-down" vs-icon="chat"></vs-button>
                    </vs-list-item>
                    <vs-list-item vs-icon="person" vs-title="신재헌 학부모님" vs-subtitle="010-1234-1234">
                        <vs-button vs-type="warning-line-down" vs-icon="chat"></vs-button>
                    </vs-list-item>
                    <vs-list-item vs-icon="person" vs-title="신재헌 학부모님" vs-subtitle="010-1234-1234">
                        <vs-button vs-type="warning-line-down" vs-icon="chat"></vs-button>
                    </vs-list-item>
                    <vs-list-item vs-icon="person" vs-title="신재헌 학부모님" vs-subtitle="010-1234-1234">
                        <vs-button vs-type="warning-line-down" vs-icon="chat"></vs-button>
                    </vs-list-item>
                    <vs-list-item vs-icon="person" vs-title="신재헌 학부모님" vs-subtitle="010-1234-1234">
                        <vs-button vs-type="warning-line-down" vs-icon="chat"></vs-button>
                    </vs-list-item>
                    <vs-list-item vs-icon="person" vs-title="신재헌 학부모님" vs-subtitle="010-1234-1234">
                        <vs-button vs-type="warning-line-down" vs-icon="chat"></vs-button>
                    </vs-list-item>
                </vs-list>
            </div>
            <div class="request card">
                <vs-list>
                    <vs-list-header vs-icon="insert_invitation" vs-title="방문요청" vs-color="primary"></vs-list-header>
                    <vs-list-item vs-title="신재헌 학부모님" vs-subtitle="2018년 4월 12일">
                        <vs-button vs-type="success-line-down" vs-icon="check"></vs-button>
                        <vs-button vs-type="danger-line-down" vs-icon="close"></vs-button>
                    </vs-list-item>
                    <vs-list-item vs-title="신재헌 학부모님" vs-subtitle="2018년 4월 12일">
                        <vs-button vs-type="success-line-down" vs-icon="check"></vs-button>
                        <vs-button vs-type="danger-line-down" vs-icon="close"></vs-button>
                    </vs-list-item>
                </vs-list>
            </div>
        </section>
        <!-- <div v-if="!signed">
            <button @click="replaceLink('/Signin')">
                로그인
            </button>
            <button @click="replaceLink('/Signup')">
                회원가입
            </button>
        </div> -->
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

<style scoped>
    *{
        font-family: 'Nanum Gothic', sans-serif;
    }
    .container{
        display: flex;
        flex-direction: row;
    }
    .top-nav{
        display: flex;
        align-items: center;
        color:#2682FF;         
        width: 100%;
        height: 60px;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(212,212,212,1);
        -moz-box-shadow: 0px 0px 5px 0px rgba(212,212,212,1);
        box-shadow: 0px 0px 5px 0px rgba(212,212,212,1);
    }
    .top-nav h1{
        text-align: center;        
    }
    .top-nav button{
        float: right;
    }
    .left-nav{
        width: 70px;
        height: 100vh;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(212,212,212,1);
        -moz-box-shadow: 0px 0px 5px 0px rgba(212,212,212,1);
        box-shadow: 0px 0px 5px 0px rgba(212,212,212,1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .divide{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .main-container{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        max-width: 90%;
    }
    .card{
        width: 400px;
        height: 500px!important;
        overflow-y: scroll;
        height: auto;
        margin: 10px;
        border-radius: 8px;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(212,212,212,1);
        -moz-box-shadow: 0px 0px 5px 0px rgba(212,212,212,1);
        box-shadow: 0px 0px 5px 0px rgba(212,212,212,1);
    }


    @media screen and (max-width:620px){
        .container{
            flex-direction: column;            
            
        }
        .left-nav{
            display: none;
        }
        .main-container{
            justify-content: center;
            margin: 0 auto;
        }
    }
    @media screen and (min-width:620px){
        .top-nav{
            display: none;
        }
    }
</style>