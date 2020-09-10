<template>
  <b-container>
    <b-row>
      <b-col cols="6" class="d-flex justify-content-center">
        <div class="time d-flex justify-content-between">
          <NumberSegment :num="hFirst" :color="color" />
          <NumberSegment :num="hSecond" :color="color" />
        </div>
        <div class="secondsDot">
          <DotsSegment :visibility="visibilityDot" :color="color" />
        </div>
        <div class="time d-flex justify-content-between">
          <NumberSegment :num="0" :color="color" />
          <NumberSegment :num="mSecond" :color="color" />
        </div>
        <div class="secondsDot">
          <DotsSegment :visibility="visibilityDot" :color="color" />
        </div>
        <div class="time d-flex justify-content-between">
          <NumberSegment :num="sFirst" :color="color" />
          <NumberSegment :num="sSecond" :color="color" />
        </div>
      </b-col>
      <b-col cols="6">
        2
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import NumberSegment from '@/components/clockSegmentations/NumberSegment'
import DotsSegment from '@/components/clockSegmentations/DotsSegment'

export default {
  name: 'MainPage',
  components: {
    DotsSegment,
    NumberSegment
  },
  data () {
    return {
      hFirst: 0,
      hSecond: 0,
      mFirst: 0,
      mSecond: 0,
      sFirst: 0,
      sSecond: 0,
      color: 'silver',
      visibilityDot: true
    }
  },
  mounted () {
    setInterval(() => { this.visibilityDot = false }, 500)
    this.generateTime()
  },
  methods: {
    generateTime () {
      const date = new Date()
      this.setHour(this.trimNumberBySingleNumber(date.getHours()))
      this.setMinute(this.trimNumberBySingleNumber(date.getMinutes()))
      this.setSecond(this.trimNumberBySingleNumber(date.getSeconds()))
      this.visibilityDot = true
      setTimeout(this.generateTime, 1000)
    },
    trimNumberBySingleNumber (number) {
      const numbers = number.toString().split('')
      if (numbers.length === 1) {
        numbers.unshift('0')
      }
      return numbers
    },
    setHour (numbers) {
      this.hFirst = Number(numbers[0])
      this.hSecond = Number(numbers[1])
    },
    setMinute (numbers) {
      this.mFirst = Number(numbers[0])
      this.mSecond = Number(numbers[1])
    },
    setSecond (numbers) {
      this.sFirst = Number(numbers[0])
      this.sSecond = Number(numbers[1])
    }
  }
}
</script>

<style scoped>
  .time{
    height: 45px;
    width: 60px;
  }

  .secondsDot {
    margin: 0 10px;
    width: 30px;
    height: 100%;
  }
</style>
