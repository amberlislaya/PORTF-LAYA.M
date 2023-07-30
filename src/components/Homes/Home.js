import React from 'react';
import "./Home.css";
import homes from "../pic/amber.png";
// import skill1 from "../pic/skill1.png";
// import skill2 from "../pic/skill2.png";
// import skill3 from "../pic/skill3.png"
import { Typewriter } from 'react-simple-typewriter'

import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedin,
  FaYoutubeSquare,
  FaGithubAlt,
  FaDribbble,
  FaInstagram,
} from 'react-icons/fa';


const Home = () => {

  return (
<>
<section className='homes' id='home'>
 <div className='container f_flex top'>
 <div className='left top'>
 <h3>BIENVENIDO A MI MUNDO</h3>
 <h1>
 Hola, Soy <span>Amberlis Laya</span>
 </h1>
 <h2>
 <span><Typewriter
  words={[' DEVELOPER FRONTEND.', ' FULL STACK DEVELOPMENT ']}
  loop
  cursor
  cursorStyle='|'
  typeSpeed={70}
  deleteSpeed={50}
  delaySpeed={1000}
/>
</span>
</h2>

<p>Hello! I am a passionate Frontend programmer with a young and curious spirit, eager to learn and excel in the world of technology. Born in Venezuela and currently based in Argentina, I have a multicultural perspective that enriches my approach to web development.

I firmly believe that collaboration and teamwork are the key to achieving extraordinary results. <br/> <br/> I am always excited to participate in innovative and challenging projects that allow me to grow as a professional and contribute my passion for programming. My motto is "learn, create, grow".

Thanks for visiting my portfolio! I am open to new opportunities and collaborations, so do not hesitate to contact me. Together, we can take the user experience to a new level and create impactful solutions in the digital world.

I hope to hear from you soon!

Amberlis Laya Madera
</p>

<div className="homes_btn d_flex">
<div className='col_1'>
<h4>ENCUENTRAME</h4>

<div className="button">
<button className='btn_shadow'> 
 <a href='https://wa.me/+5491122781197'><FaWhatsapp className='info__icon'/></a>
 </button>

 <button className='btn_shadow'> 
 <a  href="https://facebook.com/amberlis.laya.9" className='fab'>
  <FaFacebookF/>
</a>
 </button>

 <button className='btn_shadow'> 
 <a href="https://www.instagram.com/soyamberlis/" className='fab'>
  <FaInstagram/>
</a>
 </button>

 <button className='btn_shadow'> 
 <a href="https://linkedin.com/in/amberlis-laya-m" className='fab'>
<FaLinkedin/>
</a>
 </button>

 <button className='btn_shadow'>
<a href="https://www.youtube.com/@laya.developer/featured" className="fab" >
  <FaYoutubeSquare/>
</a>
</button>
<button className='btn_shadow'>
<a href="https://portfolio-amberlislaya.netlify.app/" className="fab" >
	<FaDribbble/>
</a>
</button>
<button className='btn_shadow'>
<a href="https://github.com/amberlislaya" className="fab" >
  <FaGithubAlt/>
</a>
</button>

</div>
</div>

{/* <div className='col_1'>
 <h4>MEJOR HABILIDAD EN</h4>
 <button className='btn_shadow'> 
 <img src={skill1} alt=""/>
 </button>

 <button className='btn_shadow'> 
 <img src={skill2} alt=""/>
 </button>

 <button className='btn_shadow'> 
 <img src={skill3} alt=""/>
 </button>
</div> */}
</div>
</div>

<div className='right'>
<div className='right_img'>
<img src={homes} alt=''/>
</div>
</div>
</div>
 </section>
</>

)
}

export default Home;
