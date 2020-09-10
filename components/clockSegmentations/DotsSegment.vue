<template>
  <div class="dotsSegment d-flex flex-column justify-content-center align-items-center">
    <DotSegment :visibility="visibility" :color="color" />
    <DotSegment :visibility="visibility" :color="color" />
  </div>
</template>

<script>
import DotSegment from '@/components/clockSegmentations/Segments/DotSegment'
export default {
  name: 'DotsSegment',
  components: { DotSegment },
  props: {
    color: {
      type: String,
      default: 'green'
    },
    visibility: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
  .dotsSegment {
    height: 100%;
    width: 100%;
  }
  .dotsSegment > div:first-child {
    margin-bottom: 20%;
  }
</style>
