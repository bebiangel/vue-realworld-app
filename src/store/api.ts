import axios from 'axios';
import {
    IUser,
    IUserSubmit,
    IUserResponse,
    IProfileResponse,
    IArticlesResponse,
    IUserForUpdate,
    IProfile, IArticleResponse, IArticle
} from "@/module/types";


export const conduitApi = axios.create({
    baseURL: 'https://conduit.productionready.io/api',
});

export function setJWT(jwt: string) {
    conduitApi.defaults.headers.common['Authorization'] = `Token ${ jwt }`;
}

export function clearJWT() {
    delete conduitApi.defaults.headers.common['Authorization'];
}

export async function loginUser(user: IUserSubmit): Promise<IUser> {
    const response = await conduitApi.post('/users/login', {
        user,
    });
    return ( response.data as IUserResponse ).user;
}

export async function fetchProfile(username: string): Promise<IProfile> {
    const response = await conduitApi.get(`/profiles/${ username }`);
    return ( response.data as IProfileResponse ).profile;
}

export async function fetchUser(): Promise<IUser> {
    const response = await conduitApi.get('/user')
    return ( response.data as IUserResponse ).user
}

export async function getGlobalFeed() {
    const response = await conduitApi.get('/articles');
    return response.data as IArticlesResponse;
}

export async function fetchArticle(slug: string | number): Promise<IArticleResponse> {
    const response = await conduitApi.get(`/articles/${ slug }`);
    return (response.data as IArticleResponse);
}

export async function updateUser(user: IUserForUpdate): Promise<IUser> {
    const response = await conduitApi.put('/user', user)
    return ( response.data as IUserResponse ).user
}
