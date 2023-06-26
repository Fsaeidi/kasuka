import React from 'react'
import { useState } from 'react'
import '../section5/team.css'
import { Card ,CardGroup,Row,Col} from 'react-bootstrap'
export default function Team() {
  
  const[images,setImages]=useState([
    {id:1,img:'team-1.jpg',name:"والتر وایت",job:"مدیر ارشد اجرایی"},
    {id:2,img:'team-2.jpg',name:"سارا جونسون",job:"مدیر تولید"},
    {id:3,img:'team-4.jpg',name:' اندرسون',job:"CTO"},
    {id:4,img:'team-3.jpg',name:"جپسون",job:" حسابدار"}
  ])
  const[icons,setIcons]=useState([
    {img:'icons8-twitter-30.png'},
    {img:'icons8-youtube-50.png'},
    {img:'icons8-linkedin-30.png'}
   
  ])
 const [isHovered, setIsHovered] = useState([
  {id: "", isHover: false }
  
 ]);
  return (
    <div>
        <br/><br/>
        <p className='teamP'>تیم </p>< hr/>
        <h2 className='head'>تیم ما را بررسی کنید</h2>
        <br/><br/>
        <div className='team'>
        <div  >
              

               </div >
                {images.map((image,idx)=>(
             <Row xs={1} md={4} className="g-4">
             
               <Col key={idx}
               onMouseLeave={() => setIsHovered({ id: "", isHover: false })}>
            <CardGroup style={{boxShadow:"5px 5px 5px lightgray"}}>
              <Card  style={{
                    width: "18rem",
                    display: "inline",
                    direction: "rtl",
                    position: "relative",
                  }}>
              <Card.Img 
              onMouseEnter={() =>
                setIsHovered({ id: idx, isHover: true })
              }
                variant="top" src={image.img} 
               
                 />
            {isHovered.isHover && isHovered.id == idx ? (
                    <div className="iconParent" style={{}}>
                      {icons.map((icon) => (
                        <img
                          style={{
                            width: "10%",
                            height: "10%",
                            marginBottom: "20px",
                          }}
                          src={icon.img}
                          alt=""
                        />
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                      <Card.Body>
                        <Card.Title> {image.name}</Card.Title>
                        <Card.Text>
                          {image.job} 
                        </Card.Text>
                        
                      </Card.Body>
                    </Card>
            </CardGroup>
                      
            </Col>
          {/* {Array.from({ length: 1 }).map((_, idx) => (
          
            ))} */}

    </Row>   
               ))}
               
               
        </div>
        
    </div>
  )
}
