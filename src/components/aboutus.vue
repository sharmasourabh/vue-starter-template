<template>
<div>
  <section class="section">
    <div class="container">
      <h1 class="title">About Us</h1>
      <h2 class="subtitle">
        Welcome {{ $route.params.id }}. A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2>
    </div>
  </section>
  <router-view></router-view>
</div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'aboutus vue'
    };
  }
};
</script>
