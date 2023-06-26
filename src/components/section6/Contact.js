import React from 'react'
import { useState } from 'react'
import{Col,Row,Container, Button} from 'react-bootstrap'
import './contact.css';

export default function Contact () {
 
    const [latitude, setLatitude] = useState(35.805328);
    const [longitude, setLongitude] = useState(51.403651);
  
   

  return (
    <div>
        <br/><br/>
        <p className='teamP'>تماس با ما </p>< hr/>
        <h2 className='head'>باما تماس بگیرید</h2>
        <br/><br/>
        <div className='team'>
            
        </div>
        <div>
      
             <img className='map' src="location.png" alt="" />
    </div>
    <div>
    <Container>
      <br/><br/>
                 <Row     style={{ width: '59rem' ,display:"flex",
                        paddingLeft:'400px',justifyContent:'space-around',fontSize:12 }}>
                       <Col sm>
                              <input style={{padding:'10px 20px',direction:"rtl"}} type="text" placeholder='ایمیل' />
                       </Col >
                       <Col sm >
                              <input style={{padding:'10px 20px',direction:"rtl"}} type="text" placeholder='نام' />
                       </Col>    
                       <Col sm style={{direction:"rtl",display:"flex",paddingTop:0}}>
                               <div className='iconText' style={{padding:'0 10px',direction:"rtl",display:"flex"}}>
                                 <Col><i className='iconImg'><img src="icons8-location-50.png" alt="" /></i>
                                 </Col>
                                 <Col  style={{padding:0,direction:"rtl",marginTop:0,marginBottom:3}}> 
                                      <h4>مکان:</h4>
                                      <p>تهران خیابان آزادی</p>
                               </Col>
                                     
                               </div>
                        
                           
                              
                       </Col>
                 </Row>

                 <Row     style={{ width: '59rem' ,display:"flex",
                        paddingLeft:'400px',justifyContent:'space-around',fontSize:12,marginTop:3,marginBottom:3 }}>
                       <Col sm={8} style={{direction:"rtl",marginLeft:'530px'}}>
                              <input style={{position: 'absolute',
width: 520,
height: 34,direction:"rtl",textAlign:"right"}}
                               type="text" placeholder='عنوان' />
                       </Col >
                       
                       <Col sm={4}style={{direction:"rtl",display:"flex",paddingTop:0}}>
                               <div className='iconText' style={{direction:"rtl",display:"inline-flex",marginTop:0,marginBottom:8,padding:'1% 2px'}}>
                                 <Col ><i className='iconImg'><img src="icons8-letter-50.png" alt="" /></i>
                                 </Col>
                                 <Col style={{padding:0,direction:"rtl",marginTop:0,marginBottom:3}}> <h4>ایمیل:</h4>
                                     <p>info@example.com</p>
                               </Col>
                                     
                               </div>
                        
                           
                              
                       </Col>
                 </Row>
                 <Row     style={{ width: '59rem' ,display:"flex",
                        paddingLeft:'400px',justifyContent:'space-around',fontSize:12,marginTop:3,marginBottom:3 }}>
                       <Col sm={8}>
                              <textarea cols="69" rows="6"></textarea>
                       </Col >
                       
                       <Col sm={4}style={{direction:"rtl",display:"flex",paddingTop:0}}>
                               <div className='iconText' style={{direction:"rtl",display:"inline-flex",marginTop:0,marginBottom:8,padding:'1% 2px'}}>
                                 <Col ><i className='iconImgMobile'><img src="icons8-phone-24.png" alt="" /></i>
                                 </Col>
                                 <Col style={{padding:0,direction:"rtl",marginTop:0,marginBottom:3,marginLeft:70}}> <h4>شماره تماس:</h4>
                                      <p>0123467889</p>
                               </Col>
                               
                                     
                               </div>
                        
                           
                              
                       </Col>
                 </Row>
                 <Button style={{background:"rgb(188, 188, 20)",padding:"10px 20px",
                 marginLeft:460,border:'none',borderRadius:"6px"}}>ارسال پیام</Button>
     </Container>
    </div>

                     

    </div>
  )
}
