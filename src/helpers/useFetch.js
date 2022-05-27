import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";

axios.defaults.baseURL = process.env["REACT_APP_BASE_URL"]

const useAxios = ({method, url, header = null, body = null}) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    const fetchData = useCallback(() => {
        axios[method](url, JSON.parse(header), JSON.parse(body))
            .then((res) => {
                setResponse(res.data);
            }).catch((err) => {
            setError(err);
        })
            .finally(() => {
                setLoading(false)
            })

    },[method, url, header, body]);

    useEffect(() => {
        fetchData();
    }, [fetchData] )

    return {response, error, loading}
};

export default useAxios;