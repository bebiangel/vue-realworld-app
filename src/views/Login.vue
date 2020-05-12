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

                    <form v-on:submit.prevent="onLogin()">
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

<script>
    import { Vue, Component } from 'vue-property-decorator';
    import user from '../store/module/user';

    @Component
    export default class extends Vue {
        email = "";
        password = "";

        onLogin() {
            user.login({
                email: this.email,
                password: this.password
            });
        }
    }


</script>

<style scoped>

</style>
