import axios from 'axios'

export async function getMovies(variables: IGetMoviesVariables) {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${variables.api_key}&page=${variables.page}`
    let response: IGetMoviesResponse = { page: 1, results: [], total_pages: 0, total_results: 0 };
    await axios.get(url)
    .then(res => {
        console.log(res)
        response = res.data;
    })
    .catch(e=> console.log(e));
    return response;    
}