<template>
  <div>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column container is-6">
            <div class="block">
              <p class="title is-5">Login {{ $store.state.count }}, count is {{ evenOrOdd }}</p>
            </div>
            <div class="field">
              <label class="label">Enter your email and password to login.</label>
              <p class="control has-icons-left has-icons-right">
                <input class="input is-rounded" type="email" placeholder="Email" v-model="params.email">
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
                <input class="input" type="password" placeholder="Password" v-model="params.password">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <button class="button is-success" :class="{'is-loading': isloading}" @click="login">
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import auth from '../auth';

// const url = 'http://localhost:3000/auth/token';
export default {
  data() {
    return {
      msg: 'login vue',
      params: {
        email: '',
        password: ''
      },
      isloading: false,
      error: '',
    };
  },
  computed: {
    ...mapGetters([
      'evenOrOdd'
    ])
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement'
    ]),
    login() {
      const creds = {
        email: this.params.email,
        password: this.params.password
      };
      this.isloading = true;
      auth.login(this, creds);
      this.increment();
    }
  }
};
</script>