interface IMovie {
    id: number;
    poster_path: string | null;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    title: string;
}

interface IGetMoviesVariables {
    api_key: string
    page: number
}

interface IGetMoviesResponse {
    results: IMovie[]
    total_pages: number
    total_results: number
    page: number
}