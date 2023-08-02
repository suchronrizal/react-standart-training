import React from 'react'
import { Linkedin, Mail } from 'react-feather'

import rizal from '../../assets/img/rizal.png'

const Home = () => { 
  return (
    <section class="hero" id="hero">
      <main class="content">
        <div class="hero-content">
          <h3>Hi, I'm Rizal,</h3>
          <h1>
            <span>I'm Frontend Developer</span> &amp;
            <span>Web Design</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            quidem numquam molestias corporis porro. Dicta quisquam in quibusdam
            expedita iusto harum, maxime optio. Cupiditate quisquam odit,
            necessitatibus nihil repudiandae ab?
          </p>
          <div class="btn-icons">
            <a href="#"><Linkedin /></a>
            <a href="#"><Mail /></a>
          </div>
        </div>
        <div class="my-photo">
          <div class="variasi">&nbsp;</div>
          <img src={rizal} alt="" />
        </div>
      </main>
    </section>
  )
 }

 export default Home