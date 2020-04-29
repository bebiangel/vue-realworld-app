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

                    <form v-on:submit.prevent="onLogin(email, password)">
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
    export default {
        name: "Login",
        data() {
            return {
                email: "",
                password: "",

            }
        },
        methods: {
            onLogin(email, password) {
                this.$http.post('/users/login', {
                    user: { email, password }
                })
                    .then(res => console.log(res));
            }
        }
    }
</script>

<style scoped>

</style>
