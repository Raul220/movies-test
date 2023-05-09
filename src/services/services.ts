export const loadMovies = async () => {
  fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=8f781d70654b5a6f2fa69770d1d115a3",
    {
      method: "GET",
      headers: {
        api_key: `8f781d70654b5a6f2fa69770d1d115a3`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
};
