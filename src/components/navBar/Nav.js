import './nav.css'
import Box from '../box-header/Box'


function Nav() {
    const x =true
    return(

<div>
<section className="section">
    <div className='nav'>
        <div className="btn">
           
            <button >ورود </button> 
            
            
        </div>
        <div className='list'>
           <ul className='ulList'>
               <li><a href="">خانه</a></li>
               <li><a href="">درباره ما</a></li>
               <li><a href="">خدمات</a></li>
               <li><a href="">نمونه کار</a></li>
               <li><a href="">تیم</a></li>
               <li><a href=""> لیست کشویی</a></li>
               <li><a href="">تماس با ما</a></li>
           </ul>
      
        </div>
        <div className="logo">
             <h1>KASUKA</h1>
             <img src="logo.png" alt="" />
        </div>
       
        <div className='sublist'></div>

       
        
    </div>

<br/><br/><br/><br/>
<div className='header'>
    <h1>راه حل های قدرتمند دیجیتال با
<br/> Kasuka</h1>
<h2>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</h2>
</div>
 <div className='box'>
    <div className='boxD'>
    <Box src="content.png" name="متن نمایشی"/>
    </div>

    <div className='boxD'>
    <Box src="database.png" name="اطلاعات ذخیره شده"/>
    </div>
    <div className='boxD'>
    <Box src='diagram.png' name='نمودار کیفی'/>
    </div>
    <div className='boxD'>
    <Box src='diagram.png' name={'نمودار کیفی'}/>
    </div>

 </div>
</section>
   

</div>

    )

}
export default Nav

