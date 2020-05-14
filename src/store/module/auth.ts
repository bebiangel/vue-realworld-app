import ApiService from "@/common/api-service";
import JwtService from "@/common/jwt-service";
import { Action, MutationAction, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import store from "@/store";

export interface IAuthState {
    errors: any;
    user: any;
    isAuthenticated: boolean;
}

@Module({
    namespaced: true,
    name: 'Auth',
    store,
    dynamic: true,
})
class Auth extends VuexModule implements IAuthState {
    errors: any = {};
    isAuthenticated: boolean = !!JwtService.getToken();
    user: any = {};

    @MutationAction
    login(credentials: any) {
        return new Promise(resolve => {
            ApiService.post("users/login", { user: credentials })
                .then(({ data }) => {
                    this.SET_AUTH(data.user);
                    resolve(data);
                })
                .catch(({ response }) => {
                    this.SET_ERROR(response.data.errors);
                });
        });
    }

    @Action
    logout() {
        this.PURGE_AUTH();
    }

    @Action
    postUser(credentials: any) {
        return new Promise((resolve, reject) => {
            ApiService.post("users", { user: credentials })
                .then(({ data }) => {
                    this.SET_AUTH(data.user);
                    resolve(data);
                })
                .catch(({ response }) => {
                    this.SET_ERROR(response.data.errors);
                    reject(response);
                });
        });
    }

    @Action
    checkAuth() {
        if (JwtService.getToken()) {
            ApiService.setHeader();
            ApiService.get("user")
                .then(({ data }) => {
                    this.SET_AUTH(data.user);
                })
                .catch(({ response }) => {
                    this.SET_ERROR(response.data.errors);
                });
        } else {
            this.PURGE_AUTH();
        }
    }

    @Action
    updateUser(payload: any) {
        const { email, username, password, image, bio } = payload;
        const user = {
            email,
            username,
            bio,
            image
        };
        if (password) {
            // user.password = password;
        }

        return ApiService.put("user", user).then(({ data }) => {
            this.SET_AUTH(data.user);
            return data;
        });
    }

    @Mutation
    SET_ERROR(error: any) {
        this.errors = error;
    }

    @Mutation
    SET_AUTH(user: any) {
        this.isAuthenticated = true;
        this.user = user;
        this.errors = {};
        JwtService.saveToken(this.user.token);
    }

    @Mutation
    PURGE_AUTH() {
        this.isAuthenticated = false;
        this.user = {};
        this.errors = {};
        JwtService.destroyToken();
    }
}

const AuthModule = getModule(Auth);
export default AuthModule;
