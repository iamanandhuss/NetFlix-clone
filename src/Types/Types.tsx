type Category = {
  title: string;

  type?:
    | "trending"
    | "popular"
    | "top_rated"
    | "upcoming"
    | "now_playing";

  genre?:
    | "ml"
    | "en"
    | "hi"
    | "ta"
    | "ko"
    | "ja"
    | "fr";

  genreId?:
    | 28
    | 12
    | 16
    | 35
    | 80
    | 27
    | 10749
    | 878
    | 53
    | 99;

  sort?:
    | "popularity.desc"
    | "release_date.desc"
    | "vote_average.desc";
};
export type { Category };