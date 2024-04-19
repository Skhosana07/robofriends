import React from "react";//we need this import for our program to understand JSX


const Card = (props) => {
    const {name, email, id} = props 
    return(

    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
        <img src={`https://robohash.org/set_set3/${id}?size=200x200`} alt="Profile Image"/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
    )
}

export default Card;