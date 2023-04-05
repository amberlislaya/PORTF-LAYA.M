import React from 'react';
import "./Home.css";
import homes from "../pic/amber.png";
import skill1 from "../pic/skill1.png";
import skill2 from "../pic/skill2.png";
import skill3 from "../pic/skill3.png"
import { Typewriter } from 'react-simple-typewriter'


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
a <span><Typewriter
  words={[' Codificadora profesional.', ' FULL STACK DEVELOPMENT ']}
  loop
  cursor
  cursorStyle='|'
  typeSpeed={70}
  deleteSpeed={50}
  delaySpeed={1000}
/>
</span>
</h2>

<p>Lorem,
njecjnschjbhbchjbdchjsbhbchhhbehdeybcsdhcbvghwcbhscvghscb
cnjewhduwhjdbhbcvsydgvghscvgscvghvcgabxjaxbhjbxhqbdxhj
cmkjhdjhghdvhvdtqwvgsvcgbcjhdbfuyhidjknfjkufhjfnsbndsjfhdoialchnak
</p>

<div className="homes_btn d_flex">
<div className='col_1'>
<h4>ENCUENTRAME</h4>

<div className="button">
 <button className='btn_shadow'> 
 <i className='fab fa-facebook-f'></i>
 </button>

 <button className='btn_shadow'> 
 <i className='fab fa-instagram'></i>
 </button>

 <button className='btn_shadow'> 
 <i className='fab fa-linkedin-in'></i>
 </button>
</div>
</div>

<div className='col_1'>
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
</div>
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
