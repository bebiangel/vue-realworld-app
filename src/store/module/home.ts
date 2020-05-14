import { ArticlesService, TagsService } from "@/common/api-service";
import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import store from "@/store";

export interface IHomeState {
    tags: string[];
    articles: any[];
    isLoading: boolean;
    articlesCount: number;
}

@Module({
    namespaced: true,
    name: 'Profile',
    store,
    dynamic: true,
})
class Home extends VuexModule implements IHomeState {
    articles: any[] = [];
    articlesCount: number = 0;
    isLoading: boolean = false;
    tags: string[] = [];

    @Action
    fetchArticles(params: any) {
        this.FETCH_START();
        return ArticlesService.query(params.type, params.filters)
            .then(({ data }) => {
                this.FETCH_END(data);
            })
            .catch(error => {
                throw new Error(error);
            });
    }

    @Action
    fetchTags() {
        return TagsService.get()
            .then(({ data }) => {
                this.SET_TAGS(data.tags);
            })
            .catch(error => {
                throw new Error(error);
            });
    }

    @Mutation
    FETCH_START() {
        this.isLoading = true;
    }

    @Mutation
    FETCH_END({ articles, articlesCount }: IHomeState) {
        this.articles = articles;
        this.articlesCount = articlesCount;
        this.isLoading = false;
    }

    @Mutation
    SET_TAGS(tags: string[]) {
        this.tags = tags;
    }

    @Mutation
    UPDATE_ARTICLE_IN_LIST(state: IHomeState, data: any) {
        this.articles = state.articles.map(article => {
            if (article.slug !== data.slug) {
                return article;
            }
            // We could just return data, but it seems dangerous to
            // mix the results of different api calls, so we
            // protect ourselves by copying the information.
            article.favorited = data.favorited;
            article.favoritesCount = data.favoritesCount;
            return article;
        });
    }
}

const HomeModule = getModule(Home);
export default HomeModule;
