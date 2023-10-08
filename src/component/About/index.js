import React  from 'react'
import ab from './About.module.css'
//import { calculateNewValue } from '@testing-library/user-event/dist/utils'

//function run(){
    //var left=0
    //var timer
   // left=setInterval(() => {left-=10; 100)
    //return left


//}
const About = () => {

   // var left=10
    //var timer
    //timer=setInterval(() => {left-=10},100)
   
 //useEffect(()=>{setInterval(() => {left-=10; console.log(left)},100)},[])


    
 



  return (
    <div className={ab.a}>
       <div className={ab.b}>
         <h2> Hier finden Sie nicht meinen Lebenslauf</h2>
         <span>Bitte benutzen Sie die Anmeldeinformationen, die ich Ihnen in meiner Bewerbung mitgeteilt habe.</span>

       </div>
        <div className={ab.c}>
         
         <div className={ab.d} style={{top:-100+'px',right:120+'px'}}></div>
          <div className={ab.d }  ></div>
           <div className={ab.d} ></div>
            <div className={ab.d} ></div>
            <div className={ab.e}  ></div>


        </div>
      
    </div>
  )
}

export default About
