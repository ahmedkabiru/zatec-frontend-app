import React from "react";
import {useNavigate} from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent";
import {Alert, Button, Col, Container, Row, Stack} from "react-bootstrap";

const HomePage = ()  => {
    const navigate = useNavigate()
    return(
        <div>
            <NavBarComponent/>
            <Container className="p-4">
                <Row className="p-5" align = "center">
                    <Alert>

                        <Col>
                            <Stack gap={2} className="col-md-5" >
                                <Button onClick={() => navigate("/jokes/categories")}  variant="outline-primary" size="lg">CHUCK NORRIS JOKES CATEGORIES</Button>
                                <Button onClick={() => navigate("/starwar/people")}   variant="outline-primary" size="lg">STAR WAR PEOPLE</Button>
                            </Stack>
                        </Col>

                    </Alert>
                </Row>
            </Container>

        </div>

    );

}

export default HomePage;