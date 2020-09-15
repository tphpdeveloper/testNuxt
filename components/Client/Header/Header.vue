<template>
  <div class="parentHeader">
    <Clock />
  </div>
</template>

<script>
import Clock from '@/components/Helpers/ClockSegmentations/Clock'
export default {
  name: 'Header',
  components: { Clock }
}
</script>

<style scoped>
  .parentHeader {
    margin: 15px 0;
    padding: 10px 0;
    text-align: center;
  }
</style>
