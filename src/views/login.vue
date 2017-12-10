<template>
  <div>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column container is-6">
            <div class="block">
              <p class="title is-5">Login</p>
            </div>
            <div class="field">
              <label class="label">Enter your email and password to login.</label>
              <p class="control has-icons-left has-icons-right">
                <input class="input is-rounded" type="email" placeholder="Email">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fa fa-check"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <button class="button is-success">
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--         <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <nav class="panel">
            <p class="panel-heading">
              Checklist
            </p>
            <div class="panel-block">
              <form>
                <input class="input" type="text" />
              </form>
            </div>
            <label class="panel-checkbox">
              <input class="checkbox" type="checkbox"> Remember me Remember me Remember me Remember me Remember me Remember me
            </label>
            <div class="panel-block">
              <button class="button is-primary is-outlined is-fullwidth">
                Finish all, close list
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'login vue'
    };
  }
};
</script>