import React, { useState} from 'react'
import "./Contact.css"
import contact1 from "../pic/contact1.png"

import {
  FaFacebookF,
  FaLinkedin,
  FaYoutubeSquare,
  FaGithubAlt,
  FaDribbble,
  FaInstagram,
} from 'react-icons/fa';

const Contact = () => {

const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
})



const InputEvent= (event) =>{
const {name,value} = event.target

setData((preVal)=>{
     return {   
...preVal,
[name]: value,
}
})
}

const formSubmit = (event)=>{
    event.preventDefault()
    alert(
   `My name is ${data.fullname}.
    My Phone Number is ${data.phone}.
    My email address is ${data.email}.
    My Subject on ${data.subject}.
    Here is my message I want to say: ${data.message}
    `)
}
  return (

<div>
<section className='Contact' id='contact'>
<div className='container top'>
<div className='heading text-center'>
<h4>CONTACTO</h4>
<h1>Contáctame</h1>
</div>

<div className='content d_flex'>
<div className='left'>
<div className='box box_shodow'>
<div className='img'>
<img src={contact1} alt=''/>
</div>

<div className='details'>
<h1>Información de Contacto</h1>
<p>Estoy disponible Full Time.
Contáctame a través de:</p>
<br/>
<p>Teléfono: +5491122781197</p>
<p>Email: laya.playapps@gmail.com</p> <br/>
<span>Sigueme</span>

<div className='button f_flex'>
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
</div>
</div>
<div className='right box_shadow'>
<form onSubmit={formSubmit}>
<div className='f_flex'/>
<div className='input row'>
<span>NOMBRE</span>
<input type='text' name='fullname' value={data.fullname} onChange={InputEvent}/>
</div>
<div className='input row'>
<span>TELEFONO</span>
<input type='phone' name='phone' value={data.phone} onChange={InputEvent}/>
</div>
<div className='input'>
<span>EMAIL</span>
<input type='email' name='email' value={data.email} onChange={InputEvent}/>
</div>
<div className='input'>
<span>SUBJECT</span>
<input type='text' name='subject' value={data.subject} onChange={InputEvent}/>
</div>
<div className='input'>
<span>MENSAJE</span>
<textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
</div>
<button className='btn_shadow'><i className='fas fa-long-arrow-right'></i>
ENVIAR
</button>
</form>
</div>


</div>
</div>

</section>

</div>

)
}

export default Contact;