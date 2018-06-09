<template>
  <section id="calendar">
    <p>방문 일정</p>
    <FullCalendar :events="events" :selectable=false :editable=false></FullCalendar>
    <ul>
      <li v-for="requestment in requestments" :key="requestment.id">
        {{requestment.id}}
        <button @click="accept(requestment.id)">수락</button>
        <button @click="ignore(requestment.id)">거절</button>
      </li>
    </ul>
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
          start  : '2018-05-17T12:30:00',
          end : '2018-05-17T13:30:00',
          allDay : false,
        },
      ],
      requestments: [{
        id:123456
      },
      {
        id:234567
      }],
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
    loadRequestment() {
      const baseURI = 'https://letscoding.kr:8888/api/v1'
      this.$http.get(`${baseURI}`, {
        params: {
          "session": this.session
        }
      })
      .then((result) => {
        if (result.data.request) {
          //append requestment components
          
        } else {

        }
      })
      .catch((err) => {
        alert(err)
      })
    },
    accept(id) {
      const baseURI = 'https://letscoding.kr:8888/api/v1'
      this.$http.get(`${baseURI}/pin/accept`, {
        params: {
          session: this.session,
          id: id
        }
      })
      .then((result) => {

      })
      .catch((err) => {
        alert(err)
      })
      this.removeItem(id);
    },
    ignore(id) {
      const baseURI = 'https://letscoding.kr:8888/api/v1'
      this.$http.get(`${baseURI}/pin/ignore`, {
        params: {
          session: this.session,
          id: id
        }
      })
      .then((result) => {

      })
      .catch((err) => {
        alert(err)
      })
      this.removeItem(id);
    },
    removeItem(id) {
      this.requestments.pop({
        id: id
      })
    },
    getSession () {
      return this.$session.get('session')
    }
  },
  created() {
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
