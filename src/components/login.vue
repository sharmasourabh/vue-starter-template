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
                <input class="input is-rounded" type="email" placeholder="Email" v-model="params.email" v-validate="{ required: true, email: true }" Name="params.email" data-vv-as="email">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
                <span class="icon is-small is-right is-danger" v-show="errors.has('params.email')">
                  <i v-show="errors.has('params.email')" class="fa fa-warning"></i>
                </span>
                <span class="help is-danger" v-show="errors.has('params.email')">{{ errors.first('params.email') }}</span>
                <span class="icon is-small is-right" v-show="fields['params.email'] && fields['params.email'].valid">
                  <i class="fa fa-check"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input class="input" type="password" placeholder="Password" v-model="params.password" v-validate="{ required: true }" Name="params.password" data-vv-as="password">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
                <span class="icon is-small is-right is-danger" v-show="errors.has('params.password')">
                  <i v-show="errors.has('params.password')" class="fa fa-warning"></i>
                </span>
                <span class="help is-danger" v-show="errors.has('params.password')">{{ errors.first('params.password') }}</span>
                <span class="icon is-small is-right" v-show="fields['params.password'] && fields['params.password'].valid">
                  <i class="fa fa-check"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <span class="help is-danger" v-show="error">{{ error }}</span>
                <button class="button is-success" :class="{'is-loading': isloading}" @click="login" :disabled="errors.any() || !isFormValid">
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
    ]),
    isFormValid() {
      return this.params.email && this.params.password;
    }
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