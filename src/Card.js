import React from 'react';

const Card = ({name, email, id}) => {
<<<<<<< HEAD
    //const {name, email, id} = props;
=======
	//const {name, email, id} = props;
>>>>>>> dd7e32aa60b1d96caa00844d266ca325be3daf81
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