<template>
  <div id="app">
    <nav id="navbar" class="navbar">
      <div id="specialShadow" class="bd-special-shadow" style="opacity: 1; transform: scaleY(1);"></div>
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="./assets/img/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </a>
          <div id="navBarBurger" class="navbar-burger burger" data-target="navBarMenu" v-on:click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navBarMenu" class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
          <div class="navbar-start">
            <router-link class="navbar-item" to="/" exact>
              Home
            </router-link>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="/documentation/overview/start/">
                Menu
              </a>
              <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="/documentation/overview/start/">
                  Overview
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                  Modifiers
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                  Columns
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                  Layout
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                  Form
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                  Elements
                </a>
                <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                  Components
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control" v-if="!isUserLoggedIn">
                  <a class="button is-primary" href="/#/login">
                    <span class="icon">
                      <i class="fa fa-sign-in"></i>
                    </span>
                    <span>Login</span>
                  </a>
                </p>
                <p class="control" v-if="isUserLoggedIn">
                  <a class="button is-primary" @click="logout()">
                    <span class="icon">
                      <i class="fa fa-sign-out"></i>
                    </span>                    
                    <span>Logout</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-link" href="/#/aboutus">
                    <span>About Us</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <router-view></router-view>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>
              <a href="https://github.com/sharmasourabh/vue-starter-template">Vue Starter Template</a>
            </strong> by
            <a href="https://www.twitter.com/sourabhhsharma">Sourabh Sharma</a>. Made with ❤ in
            <span class="flag-icon flag-icon-in"></span>.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import auth from './auth';

export default {
  data() {
    return {
      // user: auth.user,
      showNav: false
    };
  },

  computed: {
    ...mapGetters([
      'isUserLoggedIn'
    ])
  },

  methods: {
    logout() {
      auth.logout(this);
    }
  }
};
</script>


<style lang="sass">

  @import "assets/style/app"

</style>