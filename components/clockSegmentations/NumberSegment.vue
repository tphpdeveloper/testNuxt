<template>
  <div class="parentSegment ">
    <b-row class="heightRowHorizontal">
      <b-col cols="12" class="d-flex justify-content-center heightColHorizontal">
        <HorizontalSegment :visibility="section.top" :color="color" />
      </b-col>
    </b-row>
    <b-row class="heightRowVertical">
      <b-col cols="12" class="d-flex justify-content-between heightColVertical">
        <VerticalSegment :visibility="section.topLeft" :color="color" />
        <VerticalSegment :visibility="section.topRight" :color="color" />
      </b-col>
    </b-row>
    <b-row class="heightRowHorizontal">
      <b-col cols="12" class="d-flex justify-content-center heightColHorizontal">
        <HorizontalSegment :visibility="section.center" :color="color" />
      </b-col>
    </b-row>
    <b-row class="heightRowVertical">
      <b-col cols="12" class="d-flex justify-content-between heightColVertical">
        <VerticalSegment :visibility="section.bottomLeft" :color="color" />
        <VerticalSegment :visibility="section.bottomRight" :color="color" />
      </b-col>
    </b-row>
    <b-row class="heightRowHorizontal">
      <b-col cols="12" class="d-flex justify-content-center heightColHorizontal">
        <HorizontalSegment :visibility="section.bottom" :color="color" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import VerticalSegment from '@/components/clockSegmentations/Segments/VerticalSegment'
import HorizontalSegment from '@/components/clockSegmentations/Segments/HorizontalSegment'
export default {
  name: 'NumberSegment',
  components: { HorizontalSegment, VerticalSegment },
  props: {
    num: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: 'green'
    }
  },
  data () {
    return {
      section: {},
      defaultSection: {
        top: true,
        topLeft: true,
        topRight: true,
        center: true,
        bottomLeft: true,
        bottomRight: true,
        bottom: true
      }
    }
  },
  watch: {
    num () {
      // eslint-disable-next-line
      // console.log('parent', this.num)
      switch (this.num) {
        case 0:
          this.section = Object.assign({}, this.defaultSection)
          this.section.center = false
          break
        case 1:
          this.section = Object.assign({}, this.defaultSection)
          this.section.top = false
          this.section.topLeft = false
          this.section.center = false
          this.section.bottomLeft = false
          this.section.bottom = false
          break
        case 2:
          this.section = Object.assign({}, this.defaultSection)
          this.section.topLeft = false
          this.section.bottomRight = false
          break
        case 3:
          this.section = Object.assign({}, this.defaultSection)
          this.section.topLeft = false
          this.section.bottomLeft = false
          break
        case 4:
          this.section = Object.assign({}, this.defaultSection)
          this.section.top = false
          this.section.bottomLeft = false
          this.section.bottom = false
          break
        case 5:
          this.section = Object.assign({}, this.defaultSection)
          this.section.topRight = false
          this.section.bottomLeft = false
          break
        case 6:
          this.section = Object.assign({}, this.defaultSection)
          this.section.topRight = false
          break
        case 7:
          this.section = Object.assign({}, this.defaultSection)
          this.section.topLeft = false
          this.section.center = false
          this.section.bottomLeft = false
          this.section.bottom = false
          break
        case 8:
          this.section = Object.assign({}, this.defaultSection)
          break
        case 9:
          this.section = Object.assign({}, this.defaultSection)
          this.section.bottomLeft = false
          break
      }
    }
  }
}
</script>

<style scoped>
  .parentSegment {
    height: 100%;
    width: 40%;
  }

  .heightRowHorizontal {
    height: 10%;
  }

  .heightColHorizontal {
    height: 100%;
  }

  .heightRowVertical {
    height: 35%;
  }

  .heightColVertical {
    height: 100%;
  }

</style>
