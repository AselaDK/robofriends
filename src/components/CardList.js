//card component tika iterate karannai haduwe

import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	//const cardComponent = 
	return(
		<div>
			{
				robots.map((user, i) => {
					return (
						<Card 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email} 
						/>
					);
				//returning each by mapping
				})
			}
			{//cardComponent
			}
			{// mapped card component returned
			}
		</div>
	/*
	copied from indez.js to get all the details as an array o give rendering to index.js back
	*/ 
	);
}

export default CardList;	//exporting card list to render by index.js
// then we have to access the robot details by giving 'props'
