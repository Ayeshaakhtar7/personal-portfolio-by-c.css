
import React from 'react'

const Skill = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
     <div data-aos="zoom-in-up">
      <h2 className='text-4xl md:text-5xl'>Technologies I Work With</h2>
      <p className='text-gray-500pt-2'>
        I have a solid foundation in web development,specializing in HTML,CSS,& Javascript.
      </p>
     </div>
     <div>
      <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
        <div className='space-y-2'>
          <h2 data-aos="zoom-in-up">Typescript</h2>
          <h2 data-aos="zoom-in-up">React.js</h2>
          <h2 data-aos="zoom-in-up">Next.js</h2>
        </div>
        <div className='space-y-2'>
          <h2 data-aos="zoom-in-up">Tailwind</h2>
          <h2 data-aos="zoom-in-up">CSS</h2>
          <h2 data-aos="zoom-in-up">Node.js</h2>
         
        </div>
      </div>
     </div>
      </div>   
      <br/>
      <p>"I’ve worked with diverse teams to deliver custom web apps, from eCommerce sites to SaaS platforms.
     My goal is to create web applications that are not only functional but also intuitive and user-friendly.
 If you're looking for a developer who can handle everything from UI to database design, 
 I’d love to help bring your project to life."</p>
    </div>
  )
}

export default Skill