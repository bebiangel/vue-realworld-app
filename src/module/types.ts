export interface User {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
}

export interface Profile {
    username: string;
    bio: string;
    image: string;
    following: boolean;
}

export interface Article {
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
    }
}

export interface Comment {
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

export interface Tags {
    tags: string[];
}

export interface Status {
    errors: {
        body: string[];
    }

}
