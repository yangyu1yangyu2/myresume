import React,{ useRef} from 'react'
import ho from'./home.module.css'
import Authform from '../Authform'
//import About from '../About'

//import{seteinloguser , setleinloguser, setisvisible as setisvisible} from '../Store/reduce/einlogreduce';
import {useSelector} from "react-redux";

export default function Test (){
 
  const userlog=useSelector(state=>state.einlog)
const left=useRef()
const imgl=useRef()
const right=useRef()

var index=0


function position(){
imgl.current.style.left=(index*-100)+"%"


}
function add(){
  if(index>=2)
  {index=0}
  else index++
}
function desc(){
if(index<1){index=2}
else index--
}

/*useEffect(()=>{
time=setInterval(() => {
  index++
  desc()
  add()
  position()
}, 3000);}

)*/


const  cleft=()=>{ desc(); position(); }
const cright=()=>{add(); position();}







  return (<>
    <div style={{marginLeft: '500px',  marginTop: '30px'}}><h2 style={{color: 'dodgerblue', fontSize:26 }}>Willkommen auf meiner Lebenslaufseite</h2></div>



    <div className={ho.div1}style={{marginLeft: '20px',  marginTop: '80px',marginBottom:'600px'}}> <p style={{marginLeft: '20px', marginRight:'20px', marginTop: '40px',fontSize:18}}>Dies ist eine einfache Seite, mit der mein Lebenslauf mit dem React Framework angezeigt werden kann.</p>
    <p style={{marginLeft: 20, marginRight:'20px', fontSize:18}}>Auf Github können nur statische Webseiten bereitgestellt werden. Ich verwende daher RTK zur Datenverwaltung.(Im Entwicklungsmodus verwende ich Nodejs Express, um die Daten zu verwalten)</p>
    <p style={{marginLeft: 20,  marginRight:'20px',fontSize:18}}>Sie können sich auf der Seite registrieren oder einloggen. Allerdings wird Ihnen mein Lebenslauf nur angezeigt, wenn Sie sich mit den Benutzerdaten anmelden, die ich Ihnen in meiner Bewerbung habe zukommen lassen. Ihre Registrierungsinformationen werden nach dem Schließen der Seite nicht gespeichert</p>
    <p style={{marginLeft: 20, marginRight:'20px', fontSize:18}}>Nach der Anmeldung mit den mitgeteilten Daten können Sie meinen Lebenslauf anschauen. Unten rechts finden Sie Pfeile um vor oder zurück zu blättern.</p>
    <p style={{marginLeft: 20, marginRight:'20px', fontSize:18}}>Nachdem Sie meinen Lebenslauf durchgesehen haben, klicken Sie bitte auf die Schaltfläche „Logout“ in der oberen rechten Ecke des Fensters. Sie können auch auf das Symbol zum Vergrößern und Verkleinern in der oberen rechten Ecke klicken, um meinen Lebenslauf im Vollbildmodus zu durchsuchen.</p>
    <p style={{marginLeft: 20, marginRight:'20px', fontSize:18}}>Unten rechts finden Sie Beispielbilder der jeweiligen Seite. Das erste Bild zeigt die Seite, die erscheint, nachdem Sie sich neu registriert und danach angemeldet haben. Das zweite Bild zeigt die Seite, die meinen Lebenslauf enthält. Das letzte Bild zeigt ein Codebeispiel.</p>
    

    </div>
    <div style={{display:'inline-block', marginLeft:'50px',marginTop: '60px'}}>
   
   <Authform/>
    
   
    </div>  
    {userlog.isimag?  <div className={ho.shell} style={{marginTop: '250px', marginLeft:'700px',
     width:'600px',
      height: '300px',



}}>
         <ul className={ho.images} ref={imgl}>
           <li className={ho.img}></li>
           <li className={ho.img}></li>
           <li className={ho.img}></li>

         </ul>
         <ul className={ho.miniimg}>
           <li className={ho.min} style={{width: '30px', height: '30px'}} onClick={()=>{index=0;position();}}> </li>
           <li className={ho.min} style={{width: '30px', height: '30px'}} onClick={()=>{index=1;position();} }></li>
           <li className={ho.min} style={{width: '30px', height: '30px'}} onClick={()=>{index=2;position();}}></li>

         </ul>
     <div className={ho.button} >
      <div className={ho.buttonleft} style={{fontSize:36}}  ref={left} onClick={cleft}>《</div> 
      <div className={ho.buttonright} style={{fontSize:36}}  ref={right} onClick={cright}> 》</div> 
      </div>
    </div>:null}
</>

  )
}

