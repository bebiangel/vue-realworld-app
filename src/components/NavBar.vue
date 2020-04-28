<template>
    <nav class="navbar navbar-light">
        <div class="container">
            <router-link
                    class="navbar-brand"
                    :to="{name:'home'}">
                conduit
            </router-link>
            <ul class="nav navbar-nav pull-xs-right">
                <li class="nav-item">
                    <router-link
                            class="nav-link"
                            active-class="active"
                            exact
                            :to="{name:'home'}"
                    >
                        Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                            class="nav-link"
                            active-class="active"
                            exact
                            :to="{name:'new', path:'/new'}"
                    >
                        <i class="ion-compose"/>&nbsp;New Post
                    </router-link>

                </li>
                <li class="nav-item">
                    <router-link
                            class="nav-link"
                            active-class="active"
                            exact
                            :to="{name:'settings', path:'/settings'}"
                    >
                        <i class="ion-gear-a"/>&nbsp;Settings
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                            class="nav-link"
                            active-class="active"
                            exact
                            :to="{name:'signup', path:'/signup'}">
                        Sign up
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>

</style>
