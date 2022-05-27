import React, {useEffect, useState} from "react";
import useAxios from "../../helpers/useFetch";
import {useParams} from "react-router-dom";
import Joke from "../../components/Joke";
import NavBarComponent from "../../components/NavBarComponent";
import {Alert, Container, Spinner} from "react-bootstrap";

const  JokeDetails = (props) =>{

    let { category } = useParams();

    const {response, loading, error} = useAxios(
        {
            method  : 'get',
            url : `/chuck/random?category=${category}`
        }
    );

    const [joke, setJoke] =  useState([])

    useEffect(() => {
        if (response !== null) {
            setJoke(response);
        }
    }, [category, response]);

    return(
        <div className='App'>
            <NavBarComponent/>
            <Container className="p-3">
            <h2>Jokes</h2>
                <>
                    { loading &&   <Spinner animation="border"/> }
                </>
                <>
                    {error   &&  <Alert variant="danger">{error.message}</Alert> }
                </>
                { !loading && !error  && (
                    <>
                        {
                            <Joke joke={joke}/>
                        }
                    </>
                 )}
            </Container>
        </div>
   )
};


export  default  JokeDetails;