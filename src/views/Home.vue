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

                    <ArticlePreview
                            v-for="(article) in articles"
                            :article="article"
                            :key="article.slug"
                    />
                    <TagList/>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import TagList from '@/components/TagList';
    import ArticlePreview from '@/components/ArticlePreview'

    export default {
        name: 'Home',
        components: {
            TagList,
            ArticlePreview
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
    }
</script>
