//import logo from './logo.svg';
import React from 'react';
import {useSelector} from "react-redux";
//import { Provider } from 'react-redux'; 
//import Authform from './component/Authform';
//import Menulist from './component/Menulist'
import Layouts from './component/Layout';
//import { Table } from 'antd';

//import a from './App.module.css';
import Lebenslauf from './component/Lebenslauf/Lebenslauf';
//import Backdrop from './component/Backdrop';

import Home from './component/Home/index';
import About from './component/About/index'

import {Routes,Route } from "react-router-dom";

const App = () => {
  const userlog=useSelector(state=>state.einlog)

 /* const drawCavas=(ref)=>{if(ref){ref.width=200;ref.height=100;
  const ctx=ref.getContext('2d');
  ctx.clearRect(0,0,200,100);
  ctx.fillStyle='yellow#';
  ctx.fillRect(0,0,200,100);

}}*/
 
  return (
   // <canvas ref={drawCavas} />
    <Layouts >

    
          <Routes>
                  <Route path={'/'}  element= {<Home/>}/>
                  <Route path={'/myresume'}  element= {<Home/>}/>
                  <Route path={'home' } element= {<Home/>}/>
                  <Route path={'lebenslauf'}  element= {userlog.usereinlog? userlog.userleinlog? <Lebenslauf/>:<About/>:null}/>
              </Routes>
     
     

    </Layouts>
    
  );
};

export default App;