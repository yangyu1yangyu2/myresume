
import { Button } from 'antd'
import  Icon, {EyeOutlined,  EyeInvisibleOutlined}from'@ant-design/icons'
//import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { setnewreg,Pruefregname,setnewisreg } from '../Store/reduce/rereduce';
import{seteinloguser , setleinloguser, setisvisible,setisimag} from '../Store/reduce/einlogreduce';
import Confirmw from '../Confirm/Confirmw';
import fw from './formw.module.css'

import Backdrop from '../Backdrop';
const Authform = () => {

  //const regdata = useSelector(state => state.register);
 const regi= useSelector(state=>state.register)
 const navigate=useNavigate()
 const userlog=useSelector(state=>state.einlog)

 var gleich=false
 
    const dispatch = useDispatch();

    const[islogin, setIslogin]=useState( false );
    const[isRegister, setIsregister]=useState( false );
   // const[reDetail, setreDetail]=useState({useName:'', passWord: '', email: '', islog: false});
    const[logp,setlogp]=useState({useName:'', passWord: ''});
    const[isvisiblec, setisvisiblec]=useState(false);
    const[usename, setusename]=useState("");
    const[usepassword, setusepassword]=useState("");
    const[useemail, setemail]=useState("");
    const[isSlash, setSlash]=useState(false);
   
     
    
    const elognamekeyup=(e)=>{

     //useeffect(()=>{console.log(userlog)},[userlog])
     
      setlogp({...logp, useName:e.target.value})
      setusename ( e.target.value);
      
    }

    const elogpasskeyup=(e)=>{
      setusepassword(e.target.value)
      setlogp({...logp, passWord:e.target.value})
    
    };
     //setusepassword(e.target.value);
    
    

    const elog=async()=>{
      
      gleich=false
      setisvisiblec(false)
      dispatch(setisvisible(false))
      if(logp.passWord==='555555' && logp.useName==='jobgeber')
          {//dispatch(seteinloguser(true)) 
            dispatch(setleinloguser(true))
            dispatch(seteinloguser(true))
            setIslogin(false)
          setusename("")
          setemail("")
         setusepassword("")
         navigate('/lebenslauf')
          dispatch(setisimag(true))
          }
        /*  localStorage.clear()
          try {const res= await axios(
            {
              method: 'post',
              url: 'http://localhost:3000/login',
              data: {
                 name: logp.useName,
                 pwd: logp.passWord
                }
             
        
            })
          
            if(res.status===200){ const data=await res.data.Data
            
            setTimeout(() => { console.log("this is post data for log",data)
              
            localStorage.setItem("token", data)}, 2000);
            
            
            }
          
          
          
          }catch(e){}*/
          /*if(localStorage.getItem("token") != " "){
            dispatch(seteinloguser(true)) 
            dispatch(setleinloguser(true))
            dispatch(seteinloguser(true))
            setIslogin(false)
          setusename("")
          setemail("")
         setusepassword("")
         navigate('/lebenslauf')
          dispatch(setisimag(true))
          }*/
     
      else{ gleich=regi.reg.find((element)=>{
        if((element.passWord===usepassword) && (element.useName===usename)){return true} else return false})
         if(gleich)
          {setIslogin(false)
          setusename("")
          setemail("")
         setusepassword("")
         dispatch(seteinloguser(true))
         dispatch(setleinloguser(false))
         navigate('/lebenslauf')
        // navigate('lebenslauf')
        dispatch(setisimag(true))
        
          
            //else{dispatch(seteinloguser(true))}}
          //setuserlog(prestate=>prestate=true)
          setisvisiblec(false)
          dispatch(setisvisible(false))
          //console.log('here is isvisible')
          //console.log(isvisiblec)
        
      }
       else{setisvisiblec(true);
        dispatch(setleinloguser(false))
        dispatch(seteinloguser(false))
      dispatch(setisvisible(true))
      
      }

     

     
         }
      
    
    
    }


    const eusenamekeyup=(e)=>{
       

      dispatch(setnewisreg(false))
      
     // setreDetail({...reDetail, useName:e.target.value})
      //dispatch(Pruefregname(e.target.value))
      setusename ( e.target.value);
     // console.log(e.target.value);
     

    }
    const eemailkeyup=(e)=>{

      dispatch(setnewisreg(false))
      //setreDetail({...reDetail, email:e.target.value})
     // dispatch(Pruefregemail(e.target.value))
      setemail(e.target.value)


    }
    const epasswordkeyup=(e)=>{
     // if(reDetail.useName !== "")
      //setreDetail({...reDetail, passWord:e.target.value})
      setusepassword(e.target.value);
    }
    
    const einlogonc=(e)=>{ 

     dispatch(Pruefregname(usename))
    
    

      let reg=/^[a-z]{2,7}$/i
      let regp=/^[0-9]{5,7}$/i

      const newredetail={useName:usename,passWord:usepassword,email:useemail}
      
      if(reg.test(usename)&&regp.test(usepassword))

    

    {   
      


      dispatch(setnewreg({...newredetail}))
    setIsregister(false)
    setusename("")
    setemail("")
   setusepassword("")
   setisvisiblec(false)
   dispatch(setisvisible(false))
   dispatch(setisimag(true))
   // console.log("here ist if")
      //console.log(isvisiblec)
    }

     //else{alert("register ist not richtig")}
    else {setisvisiblec(true);
      
      dispatch(setisvisible(true))
      
    }
   
    //const leervalue=[{useName:'', passWord: '', email: '', islog: false}]
    //setreDetail(...leervalue)
   
    }

    //useEffect(()=>{console.log(userlog)},[userlog])

    const confirmwhandler=()=>{
      setisvisiblec(false)
      dispatch(setisvisible(false))
      //const leervalue=[{useName:'', passWord: '', email: '', islog: false}]
      //setreDetail(...leervalue)
      setusename("")
    setemail("")
   setusepassword("")

    }
     

  return (
    <div>
        <div style={{marginLeft:50, marginTop:10}}>
       { !userlog.usereinlog? <Button type='link' style={{fontSize: 26, marginBottom:'20px'}} onClick={( e )=>{ e.preventDefault();setIslogin(true );setIsregister(false);dispatch(setisimag(false)) }}>{'Login'} </Button>:<p style={{fontSize:20, color:'gray'}}>Sie sind bereits angemeldet, Sie können sich abmelden</p>}
       { !userlog.usereinlog? <Button type='link' style={{fontSize: 26, marginLeft: 40, marginBottom:'20px'}} onClick={( e)=>{e.preventDefault();setIsregister(true);setIslogin(false);dispatch(setisimag(false)) }}>{'Registrieren'} </Button>:null}
        </div>
        <div>
          
            { islogin? <div className={fw.wrap}>
              
              <div className={fw.infor}></div>
              <form className={fw.form}>
             <div >
              <label style={{display:'inline-block', width:80, marginRight:20+"px"}}> Benutzernamen</label>
                <input  type='text' className={fw.input} onChange={elognamekeyup} value={usename} placeholder='Bitte Benutzernamen eingeben' />
             </div>
             <p style={{marginBottom:'20px',marginLeft:'80px', color: 'gray', marginTop: '0px'}}>Bitte Benutzernamen eingeben</p>
             <div >
             <label style={{display:'inline-block', width:80}}> Passwort</label>
             <input  className={fw.input} type={isSlash?'text':'password'}onChange={elogpasskeyup}  value={usepassword} placeholder='Bitte Passwort eingeben' ></input>
             
             <Button  size='small' onClick={()=>{setSlash(preState=>!preState)}}>
                <Icon component={isSlash? EyeOutlined : EyeInvisibleOutlined }/>
              </Button>
             </div>
             <div>
             <Button style={{marginTop: '30px'}} className={fw.btn} onClick={elog}> Login</Button>
             </div>

             </form></div>:null}
             { isRegister? 
             <div className={fw.wrap} >
              
             <div className={fw.infor}></div>
             
             
             <form className={fw.form}>
             <div >
              <label style={{display:'inline-block', width:100}}> Benutzernamen</label>
                <input type='text' className={fw.input} onChange={eusenamekeyup} value={usename} placeholder='Bitte Benutzernamen eingeben'/>
             </div>
             <p style={{marginBottom:'20px', marginTop: '0px'}}>Bitte 3-8 Kleinbuchstaben verwenden</p>
             <div>
             <label style={{display:'inline-block', width:80}}> Passwort</label>
             <input type='text'  className={fw.input} onChange={epasswordkeyup}  value={usepassword} placeholder='Bitte Passwort eingeben'/>
             </div>
             <p style={{marginBottom:'20px', marginTop: '0px'}}>Bitte 6 Ziffern verwenden</p>
             <div >
             <label style={{display:'inline-block', width:80}}> E-Mail</label>
             <input type='text'  className={fw.input} onChange={eemailkeyup}   value={useemail}      placeholder='Bitte E-Mailadresse eingeben'/>
             </div>
             <p style={{marginBottom:'20px', marginTop: '0px'}}>Optional</p>
             <div>
             <Button className={fw.btn} onClick={einlogonc}> Registrieren</Button>
             </div>

             </form></div>:null}

             {isvisiblec?<Backdrop><Confirmw  confirmwhandler={confirmwhandler}/></Backdrop>:null}
        </div>

    </div>
    
  )
}

export default Authform
