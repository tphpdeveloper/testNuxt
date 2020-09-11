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
    background-color: whitesmoke;
    padding: 10px 0;
    text-align: center;
  }
</style>
