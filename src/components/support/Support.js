import {Card, Col,Row,Container} from 'react-bootstrap';

import { FaBeer  } from "react-icons/fa";
import CardSupport from './Card-support';

function Support() {
const data=[
  {img:"icons8-basketball-16.png",header:"لورم اپیسوم",text:"برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد"},
  {img:"1.png",header:"اما همانطور که مشاهده می کنید",text:"آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"},
  {img:"icons8-application-64.png",header:" دردهای بزرگ",text:"آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"}
]


    return ( 
      
      <div  >
      <br/>
     
      <Container style={{ width: '40rem',height:'50rem' ,paddingLeft:'100px',justifyContent:'space-between' }}>
        <div  style={{margin:'10px 20px',justifyContent:"right",width:'max-width',paddingLeft:"1000px"}}>
        <h4 style={{marginLeft:"250px"}}>خدمات
        </h4><hr style={{size:"8", width:"90%", color:"red"}}/>
        <h1 style={{marginRight:"1px",width:'max-content'}} ><p>خدمات مارا بررسی کنید</p>  </h1>
        </div>
    
      <Row style={{ width: '30rem' ,display:"flex",paddingLeft:'100px',justifyContent:'space-between' }}>
        <Col><CardSupport {...data[2]}/></Col>
        <Col xs={6}> <CardSupport {...data[1]}/></Col>
        <Col><CardSupport {...data[0]}/></Col>
      </Row>
      <br/><br/><br/>
      <Row style={{ width: '30rem' ,display:"flex",paddingLeft:'100px',justifyContent:'space-between' }}>
        <Col><CardSupport {...data[0]}/></Col>
        <Col xs={6}> <CardSupport {...data[1]}/></Col>
        <Col><CardSupport {...data[2]}/></Col>
      </Row>
     
    </Container>

    
   
    
      </div>
        
    
    
     );
}
 
export default Support;
