import ApiService from "@/common/api-service";
import { ActionContext } from "vuex";
import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import store from "@/store";

export interface IProfileState {
    errors: any;
    profile: any;
}

@Module({
    namespaced: true,
    name: 'Profile',
    store,
    dynamic: true,
})
class Profile extends VuexModule implements IProfileState {
    errors: any;
    profile: any;

    @Action
    fetchProfile(payload: any) {
        const { username } = payload;
        return ApiService.get("profiles", username)
            .then(({ data }) => {
                this.SET_PROFILE(data.profile);
                return data;
            })
            .catch(() => {
                // #todo SET_ERROR cannot work in multiple states
                // context.commit(SET_ERROR, response.data.errors)
            });
    }

    @Action
    fetchProfileFollow(payload: any) {
        const { username } = payload;
        return ApiService.post(`profiles/${ username }/follow`)
            .then(({ data }) => {
                this.SET_PROFILE(data.profile);
                return data;
            })
            .catch(() => {
                // #todo SET_ERROR cannot work in multiple states
                // context.commit(SET_ERROR, response.data.errors)
            });
    }

    @Action
    fetchProfileUnFollow(payload: any) {
        const { username } = payload;
        return ApiService.delete(`profiles/${ username }/follow`)
            .then(({ data }) => {
                this.SET_PROFILE(data.profile);
                return data;
            })
            .catch(() => {
                // #todo SET_ERROR cannot work in multiple states
                // context.commit(SET_ERROR, response.data.errors)
            });
    }

    @Mutation
    SET_PROFILE(profile: any) {
        this.profile = profile;
        this.errors = {};
    }
}

const ProfileModule = getModule(Profile);
export default ProfileModule;
