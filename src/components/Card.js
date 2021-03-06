// card component eka haduwa card list ekata iterate karanna
import React from 'react';

const Card = ({name, email, id}) => {
    //const {name, email, id} = props;
    return(
        <div className = 'tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?100x100` /*removed props.id */} />
            <div>
                <h2>{name}</h2> {/*<h2>{props.name}</h2>*/}
                <p>{email}</p>  {/*<p>{props.email}</p>*/}
            </div> 
        </div>
    );
}

export default Card;  