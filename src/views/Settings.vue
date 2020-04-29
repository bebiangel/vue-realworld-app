<template>
    <div class="settings-page">
        <div class="container page">
            <div class="row">

                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Your Settings</h1>

                    <form>
                        <fieldset>
                            <fieldset class="form-group">
                                <input class="form-control"
                                       type="text"
                                       placeholder="URL of profile picture"
                                       v-model="picture"
                                >
                            </fieldset>
                            <fieldset class="form-group">
                                <input class="form-control form-control-lg"
                                       type="text"
                                       placeholder="Your Name"
                                       v-model="username"
                                >
                            </fieldset>
                            <fieldset class="form-group">
                                <textarea class="form-control form-control-lg"
                                          rows="8"
                                          placeholder="Short bio about you"
                                          v-model="bio"
                                />
                            </fieldset>
                            <fieldset class="form-group">
                                <input class="form-control form-control-lg"
                                       type="text"
                                       placeholder="Email"
                                       v-model="email"
                                >
                            </fieldset>
                            <fieldset class="form-group">
                                <input class="form-control form-control-lg"
                                       type="password"
                                       placeholder="Password"
                                       v-model="password"
                                >
                            </fieldset>
                            <button class="btn btn-lg btn-primary pull-xs-right">
                                Update Settings
                            </button>
                        </fieldset>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Settings",
        data() {
            return {
                picture: '',
                username: '',
                bio: '',
                email: '',
                password: '',
            }

        },
        methods: {
            onSetting() {
                this.$http.put('/api/user', {
                    user: {
                        email: this.email,
                        bio: this.bio,
                        image: this.image
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
