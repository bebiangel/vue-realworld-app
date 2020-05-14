import { ArticlesService, CommentsService } from "@/common/api-service";
import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import store from "@/store";

export interface ISettingsState {
    article: any;
    comments: any[];
}

@Module({
    namespaced: true,
    name: 'Settings',
    store,
    dynamic: true,
})
class Settings extends VuexModule implements ISettingsState {
    //
    article: any = {};
    comments: any[] = [];

    @Action
    fetchArticle(articleSlug: any) {
        return ArticlesService.get(articleSlug)
            .then(({ data }) => {
                this.SET_ARTICLE(data.article);
            })
            .catch(error => {
                throw new Error(error);
            });
    }

    @Action
    fetchComments(articleSlug: any) {
        return CommentsService.get(articleSlug)
            .then(({ data }) => {
                this.SET_COMMENTS(data.comments);
            })
            .catch(error => {
                throw new Error(error);
            });
    }

    @Mutation
    SET_ARTICLE(article: any) {
        this.article = article;
    }

    @Mutation
    SET_COMMENTS(comments: any) {
        this.comments = comments;
    }
}

const SettingsModule = getModule(Settings)
export default SettingsModule;
