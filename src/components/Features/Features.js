import React from 'react';
import Card from './Card';
import data from "./FeaturesApi";
import "./Features.css";


const Features = () => {
  return (
<>
<section className='features top' id='features'>
<div className='container'>
<div className='heading'>
  <h4>Características</h4>
  <h1>Lo que hago</h1>
<div className="content grid">
  {data.map((val,index)=>{
    return <Card key={index} image={val.image} title={val.title} desc={val.desc}/>
  })}

</div>
</div>
</div>     
</section>   
</>

)
}

export default Features
