export interface NewsResponse {
    counts: number;
    news: {
        date: string;
        owner: {
            avatar: string;
            country: string;
            full_name: string;
            _id: string;
        }
        pictures: {
            likes: Array<string>;
            url: string;
            views: Array<string>;
            _id: string;
        }[];
        _id: string;
        _buttonText?: string;
    }[];
}

export interface NewItem {
    date: string;
    owner: {
        avatar: string;
        country: string;
        full_name: string;
        _id: string;
    }
    pictures: {
        likes: Array<string>;
        url: string;
        views: Array<string>;
        _id: string;
    }[];
    _id: string;
    _buttonText?: string;
}

export interface Picture {
    likes: Array<string>;
    url: string;
    views: Array<string>;
    _id: string;
}

