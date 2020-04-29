<template>
    <nav class="navbar navbar-light">
        <div class="container">
            <router-link
                    class="navbar-brand"
                    exact
                    to="/">
                conduit
            </router-link>
            <ul class="nav navbar-nav pull-xs-right">
                <li class="nav-item">
                    <router-link
                            class="nav-link"
                            active-class="active"
                            exact
                            to="/"
                    >
                        Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                            class="nav-link"
                            active-class="active"
                            to='/new'
                    >
                        <i class="ion-compose"/>&nbsp;New Post
                    </router-link>

                </li>
                <li class="nav-item">
                    <router-link
                            class="nav-link"
                            active-class="active"
                            to='/settings'
                    >
                        <i class="ion-gear-a"/>&nbsp;Settings
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                            class="nav-link"
                            active-class="active"
                            to='/login'>
                        Login
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                            class="nav-link"
                            active-class="active"
                            to='/signup'>
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
