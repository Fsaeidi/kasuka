import React from 'react'
import './footer.css'
import { Col, Container, Row } from 'react-bootstrap'
export default function () {
  return (
    <div className="footer">
      
          
                 <Row style={{display:"flex",direction:"rtl",paddingRight:"10px",justifyContent:"space-evenly"}}>
                     <Col style={{margin:"2px 10px"}}>  <div className="logofooter">
                               <h1>KASUKA</h1>
                              <img  src="logo.png" alt="" />
                          </div>
                          <div className='contact'>
              <p>تهران خیابان آزادیر <br/>

تلفن: 01234567895 <br/>
ایمیل: info@example.com</p>
        </div>
        <div className="iconfoter" style={{color:"white",margin:"1px 1px",justifyContent:"space-around",width:"max-xontent"}}>
          <a  href="#"><img style={{width:'10%',height:'10%',background:"white",marginLeft:'7px',border:"1px solid #292929 ",color:"white" }} src="icons8-linkedin-24.png" alt="" /></a>
          <a href="#"><img style={{width:'10%',height:'10%',background:"white",marginLeft:'7px',border:"1px solid #292929 "}}  src="icons8-twitter-50.png" alt="" /></a>
          <a href="#"><img style={{width:'10%',background:"white",height:'10%',marginLeft:'7px'}}  src="icons8-facebook-50.png" alt="" /></a>
          <a href="#"><img style={{width:'10%',background:"white",height:'10%'}}  src="icons8-skype-24.png" alt="" /></a>
        </div>


                    </Col>
                     <Col>
                     <div className="parts">
            <h5>لینک های مفید
            </h5>
            <ul className="ul">
                <li>خانه</li>
                <li>درباره ما</li>
                <li>خدمات ما</li>
                <li>شرایط استفاده از خدمات</li>
                <li> 
             سیاست حفظ حریم خصوصی  </li>

            </ul>
        </div>
                     </Col>
                     <Col>  
                     <div className="parts">
                       <h5>خدمات ما</h5>
                      <ul className="ul">
                        <li>طراحی وب سایت</li>
                         <li>توسعه وب</li>
                        <li>مدیریت تولید</li>
                        <li>بازاریابی</li>
                       <li> 
                     طزاحی گرافیک</li>

                     </ul>
                   </div>
                  </Col>
                     <Col>
                         <h5>خبرنامه</h5>
                         <p>با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد بود</p>
                         <div style={{marginTop:20}}>
                           <input style={{height:"25px"}} type="text" />
                           <button style={{height:"30px"}}>دنبال کردن</button>
                          </div>
                         
                     </Col>
                 </Row>
         
     
   
       
        

    </div>
  )
}
