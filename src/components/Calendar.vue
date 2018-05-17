<template>
  <section id="calendar">
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
      }
    }
  },
  methods: {
// :(
  }
}
</script>

<style scoped>
  @import '~fullcalendar/dist/fullcalendar.css';
</style>
