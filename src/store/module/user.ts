import { Module, VuexModule, getModule, MutationAction } from 'vuex-module-decorators'
import { IProfile, IUser, IUserSubmit } from "@/module/types"
import store from '@/store';
import { loginUser } from '../api';

@Module({
    namespaced: true,
    name: 'user',
    store,
    dynamic: true,
})
class UserModule extends VuexModule {
    user: IUser | null = null;
    profile: IProfile | null = null;

    @MutationAction({ mutate: ['user'] })
    async login(userSubmit: IUserSubmit) {
        const user = await loginUser(userSubmit);
        return { user };
    }
}

export default getModule(UserModule);
