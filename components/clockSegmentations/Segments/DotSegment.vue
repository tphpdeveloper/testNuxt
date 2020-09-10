<template>
  <div
    ref="dotSegment"
    class="dotSegment"
    :style="{
      'background-color': visibility ? color : 'transparent',
      height: height}"
  />
</template>

<script>
export default {
  name: 'DotSegment',
  props: {
    color: {
      type: String,
      default: 'green'
    },
    visibility: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      height: 0
    }
  },
  mounted () {
    this.height = `${this.$refs.dotSegment.offsetWidth}px`
  }
}
</script>

<style scoped>
  .dotSegment {
    width: 60%;
  }
</style>
