import React from 'react';

//const Card = (props) =>
function Card(props)
{
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='Robo' src={`https://robohash.org/${props.id}?200x200`} width='200' height='200' />
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>


		</div>

	);
}

export default Card;