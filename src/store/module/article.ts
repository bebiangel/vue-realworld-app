import { getModule, Module, MutationAction, VuexModule, } from 'vuex-module-decorators';
import store from '@/store';
import * as api from '@/store/api';
import { IArticle } from "@/module/types";

type FeedType = 'global' | 'user';

@Module({
    dynamic: true,
    namespaced: true,
    name: 'article',
    store,
})
class ArticlesModule extends VuexModule {
    feed: IArticle[] = [];

    @MutationAction
    async refreshFeed(feedType: FeedType) {
        const globalFeed = await api.getGlobalFeed();
        return {
            feed: globalFeed.articles,
        };
    }
}

export default getModule(ArticlesModule);
