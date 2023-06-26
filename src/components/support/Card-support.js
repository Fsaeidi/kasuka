import React from 'react'
import {Card} from 'react-bootstrap';

import { FaBeer  } from "react-icons/fa";
export default function CardSupport({img,header,text}) {

  
  return (
    
         <div >
<Card >
          <div style={{ width: '18rem'  ,marginLeft:"30px",border:"1px solid",padding:"40px" ,display:'flex'}}>
          <Card.Body>
      <Card.Img variant="top" src={img}/>
        <Card.Title>  <h2>{header} </h2></Card.Title>
        <Card.Text>
       {text}
        </Card.Text>
      
      </Card.Body>
          </div>

      
    </Card>
    

      
        
        
    </div>
  )
}
