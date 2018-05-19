<template>
  <section id="calendar">
    <FullCalendar :events="events" :selectable=false :editable=false></FullCalendar>
  </section>
</template>

<script>
import { FullCalendar } from 'vue-full-calendar'

export default {
  name: 'Calendar',
  components: {
    FullCalendar
  },
  data () {
    return {
      events: [
        {
          title  : '방진혁 부모님',
          teacherName : '짱짱 멋진 선생님',
          start  : '2018-05-17T12:30:00',
          end : '2018-05-17T13:30:00',
          allDay : false,
        },
      ]
    }
  },
  methods: {
    loadCalendar() {
      const baseURI = 'https://tstserv.herokuapp.com/'
      this.$http.get(`${baseURI}/master/calendar`)
      .then((result) => {
        this.events = result.data.calendar
      })
      .catch((err) => {
        alert(err)
      })
    }
  },
  created() {
    this.loadCalendar()
  }
}
</script>

<style scoped>
  @import '~fullcalendar/dist/fullcalendar.css';
</style>
