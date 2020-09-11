<template>
  <div class="verticalSegment" :style="{'background-color': visibility ? color : 'transparent'}" />
</template>

<script>
export default {
  name: 'VerticalSegment',
  props: {
    visibility: {
      type: Boolean,
      required: true,
      default: true
    },
    color: {
      type: String,
      default: 'green'
    }
  }
}
</script>

<style scoped>
  .verticalSegment {
    height: 100%;
    width: 20%;
  }
</style>
