import React, {useEffect, useState} from "react";
import useAxios from "../../helpers/useFetch";

import {Link} from "react-router-dom";
import NavBarComponent from "../../components/NavBarComponent";
import {Alert, Container, Row, Spinner} from "react-bootstrap";

const JokesCategoryPage = () =>{

    const {response, loading, error} = useAxios(
        {
            method  : 'get',
            url : '/chuck/categories'
        }
    );
    const [data, setData] = useState([])

    useEffect(() => {
        if (response !== null) {
            setData(response);
        }
    }, [response]);

    return (
        <React.Fragment>
            <NavBarComponent/>
            <Container className="w-50 p-1">
                <Row  align = "center">
                    <h3>Categories</h3>
                    <>
                        {loading &&   <Spinner animation="border"/> }
                    </>
                    <>
                        {error   &&  <Alert variant="danger">{error.message}</Alert> }
                    </>
                    <>
                        { !loading && !error  &&
                            (
                                data.length > 0   ? (
                                        <>
                                            <div className="list-group">
                                                {
                                                    data.map((category, index) => (
                                                        <button type="button" class="list-group-item list-group-item-action"
                                                                key={index}>
                                                            <Link to={`/jokes/categories/${category}`}>{category.toUpperCase()}</Link>
                                                        </button>
                                                    ))

                                                }
                                            </div>
                                        </>

                                    ) :
                                    (
                                        <Alert variant="info">No Record</Alert>
                                    )
                            )
                        }
                    </>
                </Row>
            </Container>
        </React.Fragment>
    )



}

export default JokesCategoryPage