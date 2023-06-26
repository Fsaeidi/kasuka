import React from 'react';
import MainBody from './components/Body/Section1';
import Nav from './components/navBar/Nav';
import LogoBar from'./components/logobar/LogoBar'
import Support from './components/support/Support';
import List from './components/box-header/List';
import './App.css';
import Section2 from './components/Body/section2';
import Section3 from './components/pictures section/Section3';
import Section4 from './components/section4/Section4';
import Team from './components/section5/Team';
import Contact from './components/section6/Contact'
import Footer from './components/footer/Footer';
function App() {

  const bar=[
    {id:1,img:'client-1.png'},
    {id:2,img:'client-2.png'},
    {id:3,img:'client-5.png'}
  ]
  return (

    <div >
      <div >
            <Nav/>
      </div>
      <div>
        <MainBody/>
      </div>


      <div className="logoo">
       <LogoBar {...bar[0]}/>
       <LogoBar {...bar[1]}/>
       <LogoBar {...bar[2]}/>
       <LogoBar {...bar[0]}/>
       <LogoBar {...bar[1]}/>
       <LogoBar {...bar[2]}/>
       <LogoBar {...bar[2]}/>
  
       </div>
       <div>
       <Support></Support>
      
       </div>
       <div>
       <Section2></Section2>
       </div>
       <div>
        <Section3/>
       </div>
        <div>
           <Section4/>
        </div>
        <div><Team/></div>
        <div><Contact/></div>
        <br/>
        <div><Footer/></div>
      </div>
  

  );
}

export default App;
