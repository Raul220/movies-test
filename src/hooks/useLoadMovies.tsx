import { useEffect, useState } from "react"
import { loadMovies } from "../services/services"
import { error } from "console"

const useLoadMovies = () => {
    const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState<IMovie[]>([])

    useEffect(() => {
        setLoading(true)
        loadMovies({api_key: '8f781d70654b5a6f2fa69770d1d115a3'})
        .then(movies => {
            console.log(movies)
        })
        .catch(error)
        .finally(() => setLoading(false))
    }, [])
}

export default useLoadMovies