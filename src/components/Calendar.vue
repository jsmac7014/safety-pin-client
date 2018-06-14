<template>
  <section id="calendar">
    <p>방문 일정</p>
    <FullCalendar :events="events" :selectable=false :config="config" ></FullCalendar>
    <requestmentList />
  </section>
</template>

<script>
import { FullCalendar } from 'vue-full-calendar'
import requestmentList from '@/components/requestmentList.vue'

export default {
  name: 'Calendar',
  components: {
    FullCalendar,
    requestmentList
  },
  data () {
    return {
      events: [
        {
          title  : '방진혁 부모님',
          start  : '2018-05-17T12:30:00',
          end : '2018-05-17T13:30:00',
          allDay : false,
        },
      ],
      config: {
        defaultView: 'month',
        locale: 'ko',
        header: {
          left: 'prev,next',
          center: 'title',
          right: 'today'
        },
      },
      session: null
    }
  },
  methods: {
    loadCalendar(session) {
      const baseURI = 'https://letscoding.kr:8888/api/v1'
      this.$http.get(`${baseURI}`, {
        params: {
          "session": this.session
        }
      })
      .then((result) => {
        this.events = result.data.calendar
      }) 
      .catch((err) => {
        alert(err)
      })
    },
    getSession () {
      return this.$session.get('session')
    },
  },
  created() {
    if (!this.$session.exist)
      this.$router.push('/SigninPlease')
    this.session = this.getSession()
    //this.loadCalendar(this.session)
    // setInterval(() => {
    //   this.loadRequestment()
    // }, 5000)
  }
}
</script>

<style scoped>
  @import '~fullcalendar/dist/fullcalendar.css';
</style>
