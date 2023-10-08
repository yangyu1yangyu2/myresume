import React from 'react'
import bdro from './Bdrop.module.css'
import  ReactDOM  from 'react-dom'



const  backdropRoot=document.getElementById('backdrop-root')

const Backdrop = (props) => {
  return ReactDOM.createPortal (<div className={bdro.Bdrop}>
     { props.children}
    </div>,backdropRoot) 
}

export default Backdrop

