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

.card-header-my >>> .card-header {
  background-color: transparent;
}

.card-header-my >>> .nav-item {
  border: 2px solid transparent;
  padding: 5px 10px;
  transition: border linear .5s;
  margin-right: 10px;
}
.card-header-my >>> .nav-item:hover {
  border: 2px solid #fff;
}

.card-header-my >>> .nav-item:last-child {
  margin-right: 0;
}
.card-header-my >>> .nav-link {
  background-color: transparent;
  padding: 0;
  color: #fff;
}

.card-header-my >>> .nav-link {
  background-color: transparent;
  padding: 0;
  color: #fff;
}

</style>
