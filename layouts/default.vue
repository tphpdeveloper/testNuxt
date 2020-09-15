<template>
  <div>
    <header>
      <b-container>
        <Header />
      </b-container>
    </header>
    <!--    <nav><Menu /></nav>-->
    <Nuxt />
  </div>
</template>

<style>
html, body {
    height: 100vh;
}

body {
  background-image: url("~static/img/time.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

header {
  padding-top: 1px;
}
</style>

<script>
import Header from '@/components/Client/Header/Header'
import Menu from '@/components/Client/Header/Menu'
export default {
  components: { Menu, Header }
}
</script>
