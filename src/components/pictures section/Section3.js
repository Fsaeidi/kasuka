import React from 'react'
import './section-3.css';

export default function Section3() {


    const pics=[
       {id:1,img:"logo.jpg"},
       {id:2,img:'portfolio-4.jpg'},
       {id:3,img:'portfolio-5.jpg'}
    ]
  return (
    <div className=" pic" >
      <div className="i">
      <div className="pic1"><img src="portfolio-1.jpg" alt="" /></div>
         <div className="pic3"><img src="portfolio-3.jpg" alt="" /></div>
    
         <div className=" pic4"><img src="portfolio-4.jpg" alt="" /></div>
      </div>
      
      <div className="i">
        <div className="pic2"><img src="portfolio-5.jpg" alt="" /></div>
         <div className="pic3"><img src="portfolio-2.jpg" alt="" /></div>
         <div className=" pic5"><img src="portfolio-9.jpg" alt="" /></div>
         </div>
      <div>
        <div className='i'>
        <div className="pic6"><img src="portfolio-8.jpg" alt="" /></div>
        
        </div>

      <div class="container text-center">
 
</div>
      </div>
       
     
    </div>
  )
}
