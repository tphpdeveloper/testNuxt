<template>
  <b-container>
    <b-row>
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">
              Link
            </b-nav-item>
            <b-nav-item href="#">
              Disabled
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">
                EN
              </b-dropdown-item>
              <b-dropdown-item href="#">
                ES
              </b-dropdown-item>
              <b-dropdown-item href="#">
                RU
              </b-dropdown-item>
              <b-dropdown-item href="#">
                FA
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">
                Profile
              </b-dropdown-item>
              <b-dropdown-item href="#">
                Sign Out
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>
  .navbar {
    width: 100%;
  }

  .nav-item {
    border: 2px solid transparent;
    margin-right: 10px;
    transition: border linear 0.5s;
  }

  .nav-item:hover {
    border: 2px solid #fff;
  }

  .nav-item:last-child {
    margin-right: 0;
  }

  .nav-link {
    padding: 5px 10px!important;
  }
</style>
