import React from 'react'
import{Form,Col,Row,Container,Pagination,Stack} from 'react-bootstrap'
import {MdOutlineEmojiEmotions} from 'react-icons/md'
import picture4 from '../img/images2.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide ,View,Text} from 'swiper/react';

import Avatar from '@mui/material/Avatar';

// Import Swiper styles
import 'swiper/css';
import './section.css';


export default function () {
  return (
    <div>
       <br/><br/><br/><br/>
      
      <section className="container">
            <div className='main row grid-template-columns'>
            <div className='ime col-lg-3'><img src='working.jpg' alt="" /><br/>
               </div>
                <div className='part' >
                    <br/>
                   <h1>شایسته ترین لذت را به هر حال ارائه می دهد</h1>
                   <p>خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن 
                    زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است</p>
                    <Container>
                        <Row style={{ width: '30rem' ,display:"flex",paddingLeft:'400px',justifyContent:'space-between' }}>
                           <Col>
                           <i className="tagi" ><img src="icons8-turtle-48.png" alt="" /></i>
                              <span>65</span>
                              <p>مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم.</p></Col>
                              <Col style={{marginRight:'90px'}}>
                           <i><img src="icons8-note-64.png" alt="" /></i>
                              <span>85</span>
                              <p>پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و
                                 آنها را حقیر می شمارد</p></Col>
                        </Row>
                        <Row style={{ width: '30rem' ,display:"flex",paddingLeft:'400px',justifyContent:'space-between' }}>
                           <Col >
                           <i><img src="icons8-history-50.png" alt="" /></i>
                              <span>35</span>
                              <p>سال ها تجربه یا
                                 اجازه دهید به دنبال نوعی مزیت باشد</p></Col>
                              <Col style={{marginRight:'90px'}}>
                           <i><img src="icons8-medal-and-certificate-folder-100.png" alt="" /></i>
                              <span>20</span>
                              <p>جوایز درد دردناک تر است در زمانی دیگر که هیچکس
                                 او را متهم نمی کند و هیچ وقت او را متهم نمی کند</p></Col>
                        </Row>
                    </Container>
                   
                       
                  

                </div>
                

            </div>

        </section>
       <section className="manParent">
      <div className='background'
       style={{ backgroundImage:`url(${picture4})`,
       color:'yellow', backgroundRepeat: 'no-repeat', 
       backgroundSize: 'cover',textAlign: 'justify' }}>
      <div>

      <Stack direction="row" spacing={2} className='stack'>
         <br/>
             <Avatar className='avator' alt="Remy Sharp" src="testimonials-4.jpg" sx={{ width: 56, height: 56 }} />
      </Stack>
        <h2  style={{marginLeft:'670px',paddingTop:'20px'}}>
           جان لارسون
         </h2>
         <p style={{marginLeft:'680px',paddingTop:'10px'}}>کارآفرین</p>
       <p  style={{margin:'3px 100px',width:'1300px',direction:'rtl'}}>
                  چه کسی برخی از مواردی را که من خواهم خواند ، مطمئن بودم که برخی از آنها به موقع عفو ما به دلیل تقصیر زایمان تقصیر خواهند آمد ، تقصیر او نیست  من می خوانم که او می آید ، تقصیر خواهد بود چیزی جز                  </p>
   
      </div>

    </div>
          
  
       </section>
       



    </div>
  )
}
