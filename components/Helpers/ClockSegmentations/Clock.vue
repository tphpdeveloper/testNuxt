<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="time d-flex justify-content-between">
      <NumberSegment :num="hFirst" :color="color" />
      <NumberSegment :num="hSecond" :color="color" />
    </div>
    <div class="secondsDot">
      <DotsSegment :visibility="visibilityDot" :color="color" />
    </div>
    <div class="time d-flex justify-content-between">
      <NumberSegment :num="mFirst" :color="color" />
      <NumberSegment :num="mSecond" :color="color" />
    </div>
    <div class="secondsDot">
      <DotsSegment :visibility="visibilityDot" :color="color" />
    </div>
    <div class="time d-flex justify-content-between">
      <NumberSegment :num="sFirst" :color="color" />
      <NumberSegment :num="sSecond" :color="color" />
    </div>
  </div>
</template>

<script>

import NumberSegment from '@/components/Helpers/ClockSegmentations/NumberSegment'
import DotsSegment from '@/components/Helpers/ClockSegmentations/DotsSegment'

export default {
  name: 'Clock',
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
    async generateTime () {
      const date = await new Date()
      this.setHour(this.splitNumbersByNumber(date.getHours()))
      this.setMinute(this.splitNumbersByNumber(date.getMinutes()))
      this.setSecond(this.splitNumbersByNumber(date.getSeconds()))
      this.visibilityDot = true
      setTimeout(this.generateTime, 1000)
    },
    splitNumbersByNumber (number) {
      const numbers = number.toString().split('')
      if (Number(numbers.length) === 1) {
        numbers.unshift(0)
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
  width: 60px;
}

.secondsDot {
  margin: 0 10px;
  width: 14px;
}

.time, .secondsDot {
  height: 45px;
}
</style>
