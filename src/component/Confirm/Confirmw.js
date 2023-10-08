import React from 'react'
import cir from './conf.module.css'
const Confirmw = (props) => {



  return (
    <div className={cir.modal}>
      <div className={ cir.ctext}><p>  Bitte korrigieren Sie Ihre Angaben.</p></div>
      
     { props.children}
      <div className={ cir.cbutton}><button onClick={props.confirmwhandler } className={cir.circle1}>X</button> </div>
    </div>
  )
}

export default Confirmw