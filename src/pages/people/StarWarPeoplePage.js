import React, {useEffect, useState} from "react";
import useAxios from "../../helpers/useFetch";
import NavBarComponent from "../../components/NavBarComponent";
import {Alert, Container, Spinner} from "react-bootstrap";
import People from "../../components/People";


const StarWarPeoplePage = () =>{

    const {response, loading, error} = useAxios(
        {
            method  : 'get',
            url : '/swapi/people'
        }
    );

    const [people, setPeople] = useState([])

    useEffect(() => {
        if (response !== null) {
            setPeople(response.results);
        }
    }, [response]);


    return(
    <div>
            <NavBarComponent/>
            <h3 align="center">Star Wars People</h3>
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
                        people?.length > 0   ? (
                                <>
                                    <div className="py-4">
                                        <div className="container">
                                            <div className="row hidden-md-up">
                                                {
                                                    people.map((people) => (
                                                        <People person={people}/>
                                                    ))

                                                }
                                            </div>
                                        </div>
                                    </div>
                                </>

                            ):
                            (
                                <Alert variant="info">No Record</Alert>
                            )
                    )
                }
            </>
            </Container>

    </div>
    )



};

export default StarWarPeoplePage;