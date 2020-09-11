<template>
  <div class="horizontalSegment" :style="{'background-color': visibility ? color : 'transparent'}" />
</template>

<script>
export default {
  name: 'HorizontalSegment',
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
.horizontalSegment {
  height: 100%;
  width: 60%;
}
</style>
