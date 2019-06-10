export interface PictureInfo {
  comments: Array<string>;
  create_date: string;
  description: string;
  glories: Array<string>;
  is_deleted: boolean;
  likes: Array<string>;
  owner: {
      avatar: string;
      city: string;
      full_name: string;
      _id: string;
  }
  title: string;
  total_votes: number;
  url: string;
  views: Array<string>;
  _id: string;
}

export interface CarouselContext {
  $implicit: string;
  info: {
    ownerName: string;
    likes: number;
    views: number;
  };
  controller: {
    next: () => void;
    prev: () => void;
  };
  }

  export interface Challenge{
  awards: number;
  background: string;
  challenge_name: string;
  end_date: string;
  is_active: boolean;
  is_closed: boolean;
  last_picture: string;
  start_date: string;
  votes: number;
  _id: string;
}