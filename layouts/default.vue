<template>
  <div>
    <header>
      <b-container fluid>
        <Header />
      </b-container>
    </header>
    <nav><Menu /></nav>
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
