<template>
  <div>
    <header><Header /></header>
    <b-container> <Nuxt /></b-container>
  </div>
</template>

<style>
html, body {
  height: 100%;
}

body {
  background-image: url("~static/img/time.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
<script>
import Header from '@/components/Client/Header/Header'
export default {
  components: { Header }
}
</script>
