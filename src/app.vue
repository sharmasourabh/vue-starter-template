<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="dropdown navigation">
      <div id="specialShadow" class="bd-special-shadow" style="opacity: 1; transform: scaleY(1);"></div>
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navBarMenu" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/">
            Home
          </a>
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
              <p class="control">
                <a class="button is-primary" href="/#/login">
                  <span class="icon">
                    <i class="fa fa-download"></i>
                  </span>
                  <span>Login</span>
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
    </nav>

    <router-view></router-view>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>
              <a href="https://github.com/sharmasourabh/vue-starter-template">Vue Starter Template</a>
            </strong> by
            <a href="https://www.twitter.com/sourabhhsharma">Sourabh Sharma</a>. Made with love in
            <span class="flag-icon flag-icon-in"></span>.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loader: false
    };
  }
};
</script>


<style lang="sass">

  @import "assets/style/app"

</style>