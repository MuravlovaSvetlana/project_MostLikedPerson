export interface Winners {
    count: number;
    winners: {
        challenge_id: string;
        member_id: {
            challenge_id: string;
            exposure_value: number;
            images: {
                glories: Array<string>;
                image_basic: {
                    likes: Array<string>;
                    url: string;
                    views: Array<string>;
                    _id: string;
                }
                votes: number;
                _id: string;
            }[];
            level: {
                curent_level: number;
                votes_to_next_level: number;
            };
            points: number;
            submited_time: string;
            total_votes: number;
            user_id: {
                avatar: string;
                full_name: string;
                _id: string;
            };
            __v: number;
            _id: string;
        };
        public_user_id: string;
        submited_time: string;
        __v: number;
        _id: string;
    }[];
};

export interface Winner {
    challenge_id: string;
        member_id: {
            challenge_id: string;
            exposure_value: number;
            images: {
                glories: Array<string>;
                image_basic: {
                    likes: Array<string>;
                    url: string;
                    views: Array<string>;
                    _id: string;
                }
                votes: number;
                _id: string;
            }[];
            level: {
                curent_level: number;
                votes_to_next_level: number;
            };
            points: number;
            submited_time: string;
            total_votes: number;
            user_id: {
                avatar: string;
                full_name: string;
                _id: string;
            };
            __v: number;
            _id: string;
        };
    public_user_id: string;
    submited_time: string;
    __v: number;
    _id: string;
}
