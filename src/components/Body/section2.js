import React from 'react'
import images from '../img/images.jpg'
import './section2.css'
export default function Section2() {
  return (
    <div style={{ backgroundImage:`url(${images})`,width:'100%',height:'240px',color:'white',textAlign: 'justify' }}>
      <div>
        <h2 style={{marginLeft:'705px',paddingTop:'40px'}}>فراخوانی برای اقدام</h2>
        <p style={{margin:'3px 100px',width:'1300px',direction:'rtl'}}>اما محکوم کردن درد در فیلم غیرقابل تصور است ، در لذت می خواهد از درد سیلوس بودن بدون نتیجه فرار کند. آنها استثنائاتی هستند که کورها به دنبال آن هستند ، آنها نمی بینند ، آنها کسانی هستند که مسئولیت های خود را به تقصیری واگذار می کنند که سختی های روح را تسکین می دهد.</p>
       <button className="bttn" style={{marginLeft:'700px'}}>فراخوانی برای اقدام</button>
      </div>

    </div>
  )
}
