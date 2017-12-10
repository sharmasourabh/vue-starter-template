<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body has-text-centered">
        <p class="title">
          Vue Starter Template
        </p>
        <p class="subtitle">
          Everything you need to
          <strong>create a website</strong> with Vuejs and Bulma
        </p>
      </div>
    </section>
    <p class="has-text-centered">There are six columns below</p>
    <div class="columns has-text-centered">
      <div class="column">
        <a class="is-link">1</a>
      </div>
      <div class="column">
        <p class="bd-notification is-info">2</p>
      </div>
      <div class="column">
        <p class="bd-notification is-success">3</p>
      </div>
      <div class="column">
        <p class="bd-notification is-warning">4</p>
      </div>
      <div class="column">
        <p class="bd-notification is-danger">5</p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'homecontent vue'
    };
  }
};
</script>
