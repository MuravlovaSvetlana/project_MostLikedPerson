export interface UploadSelfies {
    counts: number;
    images: {
        create_date: string;
        glories: Array<string>;
        likes: Array<string>;
        url: string;
        views: Array<string>;
        _id: string;
    }[]; 
}

export interface User {
    avatar: string;
    city: string;
    country: string;
    cover: string;
    date_of_birth_day: number;
    date_of_birth_month: number;
    date_of_birth_year: number;
    email: string;
    email_is_active: boolean;
    email_on_comments: boolean;
    email_on_comments_reply: boolean;
    email_on_every_challenge: boolean;
    email_on_likes: boolean;
    email_on_new_challenges_once_week: boolean;
    email_on_new_followers: boolean;
    email_weekly_articles: boolean;
    favourites: Array<string>;
    followers: Array<string>;
    followings: Array<string>;
    full_name: string
    gender_orientation: string;
    glories: [];
    is_blocked: boolean;
    is_deactivated: boolean;
    is_deleted: boolean
    last_login_date: string;
    last_name: string;
    my_images: Array<string>;
    nickname: string;
    paypal_id: string;
    phone: string;
    rank: {
        curent_rank: number;
        expert_picks: number;
        levels: Array<number>;
        next_rank: string;
        points: number;
    };
    register_date: string;
    register_ip: string;
    type: string;
    vote_power: number;
    _id: string;
}

export interface Favourites {
    counts: number;
    images: {
        create_date: string;
        glories: Array<string>;
        likes: Array<string>;
        url: string;
        views: Array<string>;
        _id: string;
    }[];
}

export interface FavouriteImg {
    create_date: string;
    glories: Array<string>;
    likes: Array<string>;
    url: string;
    views: Array<string>;
    _id: string;
}

export interface Followers {
    counts: number;
    users: {
        avatar: string;
        city: string;
        cover: string; 
        full_name:string; 
        _id: string;
        _buttonText?: string;
    } [];
}

export interface Follower {
    avatar: string;
    city: string;
    cover: string; 
    full_name:string; 
    _id: string;
    _buttonText?: string;
}

