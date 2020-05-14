<template>
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
                v-bind:to="{path:'articles/' + this.slug}">
            <h1>{{article.title}}</h1>K
            <p>{{article.description}}</p>
            <span>Read more...</span>
        </router-link>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { IArticle } from "@/module/types";


    @Component
    export default class ArticlePreview extends Vue {
        //
        @Prop() private article!: IArticle;

        get slug() {
            return this.article.slug;
        }
    }
</script>

<style scoped>

</style>
