<template>
  <b-container>
    <b-row>
      <b-col class="header_column" md="4" />
      <b-col class="header_column" md="4">
        <Clock />
      </b-col>
      <b-col class="header_column" md="4" />
    </b-row>
  </b-container>
</template>

<script>
import Clock from '@/components/Helpers/ClockSegmentations/Clock'
export default {
  name: 'Header',
  components: { Clock }
}
</script>

<style scoped>
  .header_column {
    padding: 5px 10px;
    border-left: 1px solid rgba(255, 255, 255, .12);
  }
  .header_column:last-child {
    border-right: 1px solid rgba(255, 255, 255, .12);
  }
</style>
