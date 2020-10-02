<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <b-card no-body>
          <b-tabs pills card class="card-header-my">
            <b-tab title="Tab 1" active>
              <b-card-text>Tab contents 1</b-card-text>
            </b-tab>
            <b-tab title="Tab 2">
              <b-card-text>Tab contents 2</b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  name: 'MainPage'
}
</script>

<style scoped>
.card {
  background-color: transparent;
  border: none;
}
</style>
