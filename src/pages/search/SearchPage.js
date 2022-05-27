import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import useAxios from "../../helpers/useFetch";
import NavBarComponent from "../../components/NavBarComponent";
import {Alert, Container, Spinner} from "react-bootstrap";
import People from "../../components/People";
import Joke from "../../components/Joke";


const SearchPage = () =>{

    const location = useLocation();

    const [searchResult, setSearchResult] = useState([])

    const query = location.state.query;

    const {response, loading, error} = useAxios(
        {
            method  : 'get',
            url : `/search?query=${query}`
        }
    );

    useEffect(() => {
        if (response !== null) {
            setSearchResult(response);
        }
    }, [response]);

    return (
        <>
            <NavBarComponent/>
            <h3 align="center">Search Result for {query}</h3>
            <Container className="p-2">
                <>
                    {loading &&   <Spinner animation="border"/> }
                </>
                <>
                    {error   &&  <Alert variant="danger">{error.message}</Alert> }
                </>
                <>
                    { !loading && !error  &&
                        (
                            searchResult.data ? (
                                <>
                                        {
                                            searchResult.metaData.apiType === "SWAPI_API" ?
                                                <div className="py-4">
                                                    <div className="container">
                                                        <div className="row hidden-md-up">
                                                            {
                                                                searchResult.data.results.map((people) => (
                                                                    <People person={people}/>
                                                                ))

                                                            }
                                                        </div>
                                                    </div>
                                                </div> :
                                                searchResult.data.result.map((joke) => (
                                                    <Joke joke={joke}/>
                                                ))
                                        }
                                </>

                                ):
                                (
                                    <Alert variant="info">Search not found</Alert>
                                )
                        )
                    }
                </>
            </Container>
        </>
    )

}


export default SearchPage;