<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Login</h1>
                    <p class="text-xs-center">
                        <router-link to="/signup">
                            New account?
                        </router-link>
                    </p>
                    <ul class="error-messages" v-if="loginError">
                        <li>{{ loginError }}</li>
                    </ul>
                    <form v-on:submit.prevent="onLogin">
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg"
                                   type="text"
                                   placeholder="Email"
                                   v-model="email">
                        </fieldset>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg"
                                   type="password"
                                   placeholder="Password"
                                   v-model="password">
                        </fieldset>
                        <button class="btn btn-lg btn-primary pull-xs-right">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import AuthModule from '@/store/module/auth'

    @Component({})
    export default class Login extends Vue {
        //
        email = '';
        password = '';

        private async onLogin() {

            // this.$store
            //     .dispatch(LOGIN, { email, password })
            //     .then(() => this.$router.push({ name: "home" }));
            await AuthModule.login({
                email: this.email,
                password: this.password
            })

        }

        // ...mapState({
        //                 errors: state => state.auth.errors
        //             })
        get loginError() {
            return '';
        }
    }

</script>

<style scoped>

</style>
