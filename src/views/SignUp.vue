<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Sign up</h1>
                    <p class="text-xs-center">
                        <a href="">Have an account?</a>
                    </p>

                    <ul class="error-messages">
                        <li>That email is already taken</li>
                    </ul>

                    <form v-on:submit.prevent="onSignUp(username, email, password)">
                        <fieldset class="form-group">
                            <input
                                    class="form-control form-control-lg"
                                    type="text"
                                    placeholder="Your Name"
                                    v-model="username"
                            >
                        </fieldset>
                        <fieldset class="form-group">
                            <input
                                    class="form-control form-control-lg"
                                    type="text"
                                    placeholder="Email"
                                    v-model="email"
                            >
                        </fieldset>
                        <fieldset class="form-group">
                            <input
                                    class="form-control form-control-lg"
                                    type="password"
                                    placeholder="Password"
                                    v-model="password"
                            >
                        </fieldset>
                        <button class="btn btn-lg btn-primary pull-xs-right">
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SignUp",
        data() {
            return {
                username: '',
                email: '',
                password: '',
            }
        },
        methods: {
            onSignUp(username, email, password) {
                this.$http.post('/api/users', {
                    user: {
                        username, email, password
                    }
                })
                    .then(res => console.log(res))
            }
        }
    }
</script>

<style scoped>

</style>
