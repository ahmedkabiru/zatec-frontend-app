import React from "react";
import {Card} from "react-bootstrap";

const  People = ({person}) =>{
    return (
     <>
         <div className="col-md-3">
         <Card  border="primary" style={{ width: '18rem' }}>
             <Card.Body>
                 <Card.Title>  {person.name}</Card.Title>
                 <Card.Text>
                     <p className="card-text"><b>Height:</b> {person.height}</p>
                     <p className="card-text"><b>Hair color:</b> {person.hair_color}</p>
                     <p className="card-text"><b>Eye color:</b> {person.eye_color}</p>
                     <p className="card-text"><b>Skin color:</b> {person.skin_color}</p>
                     <p className="card-text"><b>Birth year:</b> {person.birth_year}</p>
                     <p className="card-text"><b>Gender:</b> {person.gender}</p>
                 </Card.Text>
             </Card.Body>
         </Card>
             <p></p>
         </div>
     </>
    )
}

export default People