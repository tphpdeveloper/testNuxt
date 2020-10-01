<template>
  <b-container>
    <b-row>
      <b-col class="header_column" md="4">
        logo
      </b-col>
      <b-col class="header_column" md="4">
        <Clock />
      </b-col>
      <b-col class="header_column" md="4">
        current timezone
      </b-col>
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

<style scoped lang="scss">

  @import "~/assets/scss/variables";

  .header_column {
    text-align: center;
    padding: 5px 10px;
    border-left: 1px solid $headerBorderColor;
  }
  .header_column:last-child {
    border-right: 1px solid $headerBorderColor;
  }
</style>
