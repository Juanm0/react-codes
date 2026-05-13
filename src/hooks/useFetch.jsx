import { useEffect, useState } from "react"

export const useFetch = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((res) => setData(error))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, [url])

    return { data, loading, error }
}
