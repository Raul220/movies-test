interface IMovie {
    id: number;
    poster_path: string | null;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
}

interface IGetFilmsVariables {
    api_key: string;
}

interface IGetFilmsResponse {
    result?: IMovie[] | null;
    status: number;
}