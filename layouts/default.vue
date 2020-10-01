<template>
  <div>
    <header>
      <b-container fluid>
        <Header />
      </b-container>
    </header>
    <!--    <Menu />-->
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/Client/Header/Header'
import Menu from '@/components/Client/Header/Menu'

export default {
  components: { Menu, Header }
}
</script>

<style scoped lang="scss">
  @import "~/assets/scss/variables.scss";
  .container-fluid {
    border-bottom: 1px solid $headerBorderColor;
  }
</style>
