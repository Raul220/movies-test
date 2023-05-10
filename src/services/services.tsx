export const loadMovies = async (variables: IGetFilmsVariables) => {
  let response
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${variables.api_key}`;

  try {
    response = await fetch(url, {
      method: "GET"
    })

    if(response.status === 200) {
    } else {
      throw new Error('Error cargando las películas');
    }
  } catch (e) {
    console.log(e)
  }
  return response;
};
