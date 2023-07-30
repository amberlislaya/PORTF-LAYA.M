import React from 'react'
import Card from "./Card"
import "./Resume.css"
import ResumeApi from "./ResumeApi"

const Resume = () => {
  return (
<>
<section className='Resume' id='resume'>
<div className='container top'>
<div className='heading text-center'>
<h4>1+ AÑOS DE EXPERIENCIA</h4>
<h1>Mi Resumen</h1>
</div>

<div className='content-section mtop d_flex'>
<div className='left'>
<div className='heading'>
<h4>2005-2023</h4>
<h1>Educacion</h1>
</div>

<div className='content'>
{ResumeApi.map((val,id) => {
if(val.category === "education"){
return <Card key ={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />;

}
})}

</div>
</div>
<div className='left'>
<div className='heading'>
  <h4>2011-2023</h4>
  <h1>Experiencia Laboral</h1>
</div>

<div className='content'>
{ResumeApi.map((val, index) => {
if (val.category === "experience") {
  return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
}
})}


</div>
</div>
</div>
</div>
</section>
</>
)
}

export default Resume;