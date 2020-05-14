<template>
    <div class="article-page">

        <div class="banner">
            <div class="container">

                <h1>{{article.title}}</h1>

                <div class="article-meta">
                    <a href=""><img v-bind:src="article.author.image"/></a>
                    <div class="info">
                        <a href="" class="author">{{article.author.username}}</a>
                        <span class="date">January 20th</span>
                    </div>
                    <button class="btn btn-sm btn-outline-secondary">
                        <i class="ion-plus-round"/>
                        &nbsp;
                        Follow {{article.author.username}} <span class="counter">(10)</span>
                    </button>
                    &nbsp;&nbsp;
                    <button class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart"/>
                        &nbsp;
                        Favorite Post <span class="counter">({{ article.favoritesCount }})</span>
                    </button>
                </div>

            </div>
        </div>

        <div class="container page">
            <div class="row article-content">
                <div class="col-md-12">
                    <p>
                        {{ article.title }}
                    </p>
                    <h2 id="introducing-ionic">{{article.description}}</h2>
                    <p>{{article.body}}</p>
                </div>
            </div>

            <hr/>

            <div class="article-actions">
                <div class="article-meta">
                    <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg"/></a>
                    <div class="info">
                        <a href="" class="author">Eric Simons</a>
                        <span class="date">January 20th</span>
                    </div>

                    <button class="btn btn-sm btn-outline-secondary">
                        <i class="ion-plus-round"></i>
                        &nbsp;
                        Follow Eric Simons <span class="counter">(10)</span>
                    </button>
                    &nbsp;
                    <button class="btn btn-sm btn-outline-primary">
                        <i class="ion-heart"></i>
                        &nbsp;
                        Favorite Post <span class="counter">(29)</span>
                    </button>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12 col-md-8 offset-md-2">
                    <form class="card comment-form">
                        <div class="card-block">
                            <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
                        </div>
                        <div class="card-footer">
                            <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img"/>
                            <button class="btn btn-sm btn-primary">
                                Post Comment
                            </button>
                        </div>
                    </form>
                    <Comments
                            v-for="(comment,index) in comments"
                            :key="index"
                            :comment="comment"
                    />
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import Comments from "@/components/Comments.vue";
    import { Component, Vue } from 'vue-property-decorator';
    import ArticleModule from "@/store/module/article";

    @Component({
        components: { Comments }
    })
    export default class Article extends Vue {
        //
        get article() {
            return ArticleModule.article;
        }

        get comments() {
            return ArticleModule.comments;
        }

        created() {
            this.getArticle();
            this.getComments();
        }

        async getArticle() {
            const { slug } = this.$route.params;
            await ArticleModule.getArticle(slug);
        }

        async getComments() {
            const { slug } = this.$route.params;
            await ArticleModule.getComments(slug);
        }
    }
</script>

<style scoped>

</style>
