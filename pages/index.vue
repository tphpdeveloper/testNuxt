<template>
  <b-container>
    <b-row>
      <b-col cols="6">
        <Clock />
      </b-col>
      <b-col cols="6">
        2
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import Clock from '~/components/clockSegmentations/Clock'

export default {
  name: 'MainPage',
  components: {
    Clock
  }
}
</script>

<style scoped>

</style>
