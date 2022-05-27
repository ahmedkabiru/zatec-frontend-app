import React from "react";

const  Joke = ({joke}) =>{
    return (

        <div className="alert alert-primary" role="alert">
            {
                joke ? (
                        <h4>{joke.value}</h4>
                    ) :
                    (
                        <h1>No Joke</h1>
                    )

            }
        </div>

    )
}

export default Joke