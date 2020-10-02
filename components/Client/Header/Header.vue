<template>
  <b-container>
    <b-row>
      <b-col class="header_column d-flex align-items-center justify-content-center" md="4">
        logo
      </b-col>
      <b-col class="header_column d-flex align-items-center justify-content-center" md="4">
        <Clock color="#fff" />
      </b-col>
      <b-col class="header_column d-flex align-items-center justify-content-center" md="4">
        {{ timeZone }}
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Clock from '@/components/Helpers/ClockSegmentations/Clock'
export default {
  name: 'Header',
  components: { Clock },
  data () {
    return {
      timeZone: ''
    }
  },
  mounted () {
    const minutes = (new Date()).getTimezoneOffset()
    let hour = 0
    if (minutes > 0 || minutes < 0) {
      hour = (minutes / 60) * -1
      hour = (minutes < 0) ? `+${hour}` : hour
    }
    this.timeZone = `GMT ${hour}`
  }
}
</script>

<style scoped lang="scss">

  @import "~/assets/scss/variables";

  .header_column {
    padding: 5px 10px;
    border-left: 1px solid $headerBorderColor;
    color: #fff;
  }
  .header_column:last-child {
    border-right: 1px solid $headerBorderColor;
  }

</style>
