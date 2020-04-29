<template>
    <div class="home-page">

        <div class="banner">
            <div class="container">
                <h1 class="logo-font">conduit</h1>
                <p>A place to share your knowledge.</p>
            </div>
        </div>

        <div class="container page">
            <div class="row">

                <div class="col-md-9">
                    <div class="feed-toggle">
                        <ul class="nav nav-pills outline-active">
                            <li class="nav-item">
                                <a class="nav-link disabled" href="">Your Feed</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="">Global Feed</a>
                            </li>
                        </ul>
                    </div>

                    <template v-for="(article) in articles">
                        <div v-bind:key="article.slug" class="article-preview">
                            <div class="article-meta">
                                <a href="profile.html">
                                    <img v-bind:src="article.author.image"/>
                                </a>
                                <div class="info">
                                    <a href="" class="author">{{article.author.username}}</a>
                                    <span class="date">January 20th</span>
                                </div>
                                <button class="btn btn-outline-primary btn-sm pull-xs-right">
                                    <i class="ion-heart"></i> {{article.favoritesCount}}
                                </button>
                            </div>
                            <router-link
                                    class="preview-link"
                                    to="/:article.slug">
                                <h1>{{article.title}}</h1>
                                <p>{{article.description}}</p>
                                <span>Read more...</span>
                            </router-link>
                        </div>
                    </template>

                    <TagList/>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import TagList from '@/components/TagList';

    export default {
        name: 'Home',
        components: {
            TagList
        },
        data() {
            return {
                articles: [],
            }
        },
        methods: {
            getArticles() {
                this.$http.get('/articles')
                    .then(res => {
                        console.log(res.data);
                        this.articles = res.data.articles;
                    })
            }
        },
        created() {
            return this.getArticles();
        },
        computed: {}
    }
</script>
