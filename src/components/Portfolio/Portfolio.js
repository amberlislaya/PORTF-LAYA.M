import React from 'react';
import Portfolio_data from './Portfolio_data';
import Card from './Card';
import "./Portfolio.css";

const Portfolio = () => {

    return (

<> 
<section className="Portfolio top" id='portfolio'> 
<div className="container">
<div className='heading text-center'>
	<h4>VISITA MI PORTAFOLIO</h4>
	<h1>Mi Portafolio</h1>
</div>

<div className='content grid'>
	{Portfolio_data.map((value, index) => {
		return <Card key={index} 
		image={value.image} 
		category={value.category} 
		totalLike={value.totalLike} 
		title={value.title} />
})}

</div>	
</div>   
</section> 
</>
)
}

export default Portfolio;


