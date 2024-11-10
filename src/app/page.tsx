
 
import Image from "next/image";

  export const metadata= {
    title:Home
  }

export default function Home() {
  return (
   <div>
      <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/pic.png)] bg-left lg:bg-[10%] bg-cover'
   style={{backgroundSize:"35%",backgroundPosition:"left 100px top 100px"}} >
     
    
  

    <div className='container grid lg:grid-colos-2 h-[calc(100vh-60px)'>
      <div className='hidden lg:black'></div>
      <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items center'>
        <div>
          <p data-aos="zoom-in-up">I'am </p>
          <p data-aos="zoom-in-up">Ayesha</p>
          <p data-aos="zoom-in-up">Rana</p>
  


 
        </div>
      </div>
    </div>
    </div>
    
  <p className="text-semibold">"Hi, I’m Ayesha Rana, a Full Stack Web Developer"
 I specialize in building robust, scalable web applications from front-end design to back-end functionality."</p>
   </div>
  );
}

