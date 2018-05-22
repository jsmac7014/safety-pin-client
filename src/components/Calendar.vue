<template>
  <section id="calendar">
    <p>방문 일정</p>
    <FullCalendar :events="events" :selectable=false :editable=false></FullCalendar>
    <!-- <AcceptRequestment :message="message"/> -->
  </section>
</template>

<script>
import { FullCalendar } from 'vue-full-calendar'
import AcceptRequestment from '@/components/acceptRequestment'

export default {
  name: 'Calendar',
  components: {
    FullCalendar,
    AcceptRequestment
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
      message: {
        text: "제 상담을 받아주시겄나요?"
      },
      session: null
    }
  },
  methods: {
    loadCalendar(session) {
      const baseURI = 'https://tstserv.herokuapp.com'
      this.$http.get(`${baseURI}/calendar`, {
        params: {
          "session": session
        }
      })
      .then((result) => {
        this.events = result.data.calendar
      })
      .catch((err) => {
        alert(err)
      })
    },
    loadRequestment() {
      const baseURI = 'https://tstserv.herokuapp.com'
      this.$http.get(`${baseURI}/request`, {
        params: {
          "session": session
        }
      })
      .then((result) => {
        if (result.data.request) {

        } else {

        }
      })
      .catch((err) => {
        alert(err)
      })
    },
    getSession () {
      return this.$session.get('session')
    }
  },
  created() {
    this.session = this.getSession()
    this.loadCalendar(this.session)
    setInterval(() => {
      this.loadRequestment()
    }, 5000)
  }
}
</script>

<style scoped>
  @import '~fullcalendar/dist/fullcalendar.css';
</style>
