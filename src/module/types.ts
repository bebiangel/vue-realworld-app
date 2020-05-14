export interface IUser {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
}

export interface IProfile {
    username: string;
    bio: string;
    image: string;
    following: boolean;
}

export interface IArticle {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: 0;
    author: {
        username: string;
        bio: string;
        image: string;
        following: boolean;
    };
}

export interface IComment {
    id: number;
    createdAt: string;
    updatedAt: string;
    body: string;
    author: {
        username: string;
        bio: string;
        image: string;
        following: boolean;
    }
}

export interface ITags {
    tags: string[];
}

export interface IStatus {
    errors: {
        body: string[];
    }

}

export interface IAuthor {
    username: string;
    bio: string;
    image: string;
    following: boolean;
}

export interface IUserForUpdate {
    email?: string
    username?: string
    bio?: string
    password?: string
    image?: string
}

export interface IUserSubmit {
    email: string;
    password: string;
}

export interface IUserResponse {
    user: IUser;
}

export interface IProfileResponse {
    profile: IProfile;
}

export interface IArticlesResponse {
    articles?: ( IArticle )[] | null;
    articlesCount: number;
}


export interface IArticleResponse {
    article?: IArticle;
}

