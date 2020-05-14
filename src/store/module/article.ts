import { ArticlesService, CommentsService, FavoriteService } from "@/common/api-service";
import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { ActionContext } from "vuex";
import { IArticle } from "@/module/types";
import store from '@/store';

export interface IArticleState {
    article: IArticle;
    comments: string[];
}

@Module({
    namespaced: true,
    name: 'Article',
    store,
    dynamic: true,
})
class Article extends VuexModule implements IArticleState {
    //
    public article: IArticle = {
        slug: '',
        title: '',
        description: '',
        body: '',
        tagList: [],
        createdAt: '',
        updatedAt: '',
        favorited: false,
        favoritesCount: 0,
        author: {
            username: '',
            bio: '',
            image: '',
            following: false,
        },
    };
    public comments: string[] = [];

    //
    @Action
    async getArticle(articleSlug: string) {
        const { data } = await ArticlesService.get(articleSlug);
        this.SET_ARTICLE(data.article);
    }

    @Action
    async getComments(articleSlug: string) {
        const { data } = await CommentsService.get(articleSlug);
        this.SET_COMMENTS(data.comments);
        return data.comments;
    }

    @Action
    async postComment() {
        // await CommentsService.post(payload.slug, payload.comment);
        // await context.dispatch(FETCH_COMMENTS, payload.slug);
    }

    @Action
    async deleteComment() {
        // await CommentsService.destroy(payload.slug, payload.commentId);
        // await context.dispatch(FETCH_COMMENTS, payload.slug);
    }

    @Action
    async addFavorite(slug: string) {
        const { data } = await FavoriteService.add(slug);
        // context.commit(UPDATE_ARTICLE_IN_LIST, data.article, { root: true });
        // context.commit(SET_ARTICLE, data.article);
    }

    @Action
    async removeFavorite(slug: string) {
        const { data } = await FavoriteService.remove(slug);
        // Update list as well. This allows us to favorite an article in the Home view.
        // context.commit(UPDATE_ARTICLE_IN_LIST, data.article, { root: true });
        // context.commit(SET_ARTICLE, data.article);
    }


    @Action
    ARTICLE_PUBLISH(state: IArticleState) {
        return ArticlesService.create(state.article);
    }

    @Action
    ARTICLE_DELETE(slug: any) {
        return ArticlesService.destroy(slug);
    }

    @Action
    ARTICLE_EDIT(state: IArticleState) {
        return ArticlesService.update(state.article.slug, state.article);
    }

    @Action
    ARTICLE_EDIT_ADD_TAG(tag: any) {
        this.TAG_ADD(tag);
    }

    @Action
    ARTICLE_EDIT_REMOVE_TAG(tag: any) {
        this.TAG_REMOVE(tag);
    }

    @Action
    ARTICLE_RESET_STATE() {
        this.RESET_STATE();
    }

    @Mutation
    public SET_ARTICLE(article: any) {
        this.article = article
    }

    @Mutation
    public SET_COMMENTS(comments: any) {
        this.comments = comments;
    }

    @Mutation
    public TAG_ADD(tag: any) {
        this.article.tagList = this.article.tagList.concat([tag]);
    }

    @Mutation
    public TAG_REMOVE(tag: any) {
        this.article.tagList = this.article.tagList.filter(t => t !== tag);
    }

    @Mutation
    public RESET_STATE() {
        this.article = {
            slug: '',
            title: '',
            description: '',
            body: '',
            tagList: [],
            createdAt: '',
            updatedAt: '',
            favorited: false,
            favoritesCount: 0,
            author: {
                username: '',
                bio: '',
                image: '',
                following: false,
            },
        };
        this.comments = [];
    }
}

const ArticleModule = getModule(Article);
export default ArticleModule;
