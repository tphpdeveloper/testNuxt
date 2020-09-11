<template>
  <b-container>
    <header><Header /></header>
    <nav><Menu /></nav>
    <Nuxt />
  </b-container>
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
  background-attachment: fixed;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
<script>
import Header from '@/components/Client/Header/Header'
import Menu from '@/components/Client/Header/Menu'
export default {
  components: { Menu, Header }
}
</script>
