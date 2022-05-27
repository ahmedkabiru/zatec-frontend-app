import {Button, Col, Container, Form, FormControl, Row} from 'react-bootstrap';
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

const NavBarComponent = () => {
     const [query, setQuery] = useState('')

     const navigate = useNavigate();

     const handleOnSubmit= (query, e) => {
         e.preventDefault()
         navigate("/search", { state: { query } });
     };

     const handleChange = (e) => {
         setQuery(e.target.value);
     };

    return (
            <Container className="p-3">
               <Row>
                   <Col><h3 align="left" className="header"><Link to ="/" style={{ textDecoration: 'none' }}>ZATEC APP</Link></h3></Col>
                   <Col>
                       <Form className="d-flex" onSubmit={(e)=>{
                           handleOnSubmit(query, e)
                       }}>
                           <FormControl
                               type="search"
                               placeholder="Search joke, people"
                               className="me-auto"
                               aria-label="Search"
                               value={query}
                               required
                               onChange={handleChange}
                           />
                           <Button type="submit" variant="outline-primary">Search</Button>
                       </Form>
                   </Col>
               </Row>
            </Container>

    );
}

export default NavBarComponent