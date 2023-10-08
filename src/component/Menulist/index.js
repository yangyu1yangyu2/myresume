import React, {useEffect, useState } from 'react'
import Menulstitem from '../Menulistitem';
//import Home from '../../component/Home/index'

import { NavLink,Link } from "react-router-dom";
import {useSelector} from "react-redux";
//import { setnewreg,Pruefregname,Pruefregemail,setnewisreg } from '../Store/reduce/rereduce';
//import{seteinloguser as seteinloguser, setleinloguser, setisvisible} from '../Store/reduce/einlogreduce';
import {
    HomeOutlined,
    
    DesktopOutlined,
    
  } from '@ant-design/icons';
  import {  Menu } from 'antd';
//import SizeContext from 'antd/es/config-provider/SizeContext';

  function getItem(label, key, icon, children, type) {
    return ( {
      key,
      icon,
      children,
      label: <NavLink to={type} >{label}</NavLink>,
      type,
    } );
  }
  


function createitem (target){

target.map(item=>{
 
if(!item.children){ 
   item.label=<Link to={item.type}>{item.label}</Link>}

  

else{
  
  
  createitem(item.children) }
  return item
}

 
)


}

const item1=[getItem('Home', '1', < HomeOutlined />, [], 'home')]



  const items = [
     getItem('Home', '1', < HomeOutlined />, [], 'home'),
    getItem('Lebenslauf', '2', <DesktopOutlined />, [], 'lebenslauf'),
    
    //getItem('testmeus', '3', <ContainerOutlined />),
    //getItem('Katalog', 'sub1', <MailOutlined />, [
     // getItem('Kleid', '5'),
     // getItem('Bücher', '6'),
      //getItem('Option 7', '7'),
      //getItem('Option 8', '8'),
    //]),
   // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
     // getItem('Option 9', '9'),
      //getItem('Option 10', '10'),
     // getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    //]),
  ];
  
  
  
  const Menulist=()=>{ 
    const[menuitem, setmenuitem]=useState([])
    const userlog=useSelector(state=>state.einlog)
  //  const regi= useSelector(state=>state.register)
  // var hi=regi.reg[0].useName
 //  const dispatch=useDispatch()
  // const[newMenulistitem, setnewMenulistitem]=useState([])
    //console.log(Menulstitem)
    //var newMenulistitem=[]
    /*useEffect(()=>{
      
       console.log("here is useeffect"+ " "+userlog.usereinlog)
       
      
    if(userlog.usereinlog){console.log('i am false')
                           newMenulistitem=[...Menulstitem]} 
                          else{ console.log('i am true')
                          const newobj=[{label: 'Home', 
                          key: '1', 
                          icon: <HomeOutlined />, 
                          children: '', 
                          type: '/home'
                        
                        }]
                        newMenulistitem.push(newobj[0])                       
                           //newMenulistitem.label=Menulstitem[0].label
                           // newMenulistitem.children=Menulstitem[0].children
                           
                            //newMenulistitem.key=Menulstitem[0].key
                            

                          }
                         
                         // console.log(newMenulistitem)
                         createitem(newMenulistitem)

                           
  
    },[userlog.usereinlog])*/
    
    
    useEffect(()=>{ userlog.usereinlog? setmenuitem([...items]):setmenuitem([...item1])},[userlog.usereinlog])
            

   // const homehandler=( )=>{ console.log('here ist homeclick');dispatch(seteinloguser(false)); dispatch(setleinloguser(false));dispatch(setisvisible(false));}

      createitem(Menulstitem)
  
 

 //console.log(Menulstitem)

 
 
    return(
<div style={{
          width: 256,
          
        }}>

<div style={{ marginTop: '80px'}}></div>
   
   <Menu  style={{fontSize:'24px'}}
          defaultSelectedKeys={['1']}
          /*defaultOpenKeys={['sub1']}*/
         /* onClick={homehandler.bind(item1,'1')}*/
          mode="inline"
          theme="dark"
          //inlineCollapsed={false}
         // items={userlog.usereinlog?Menulstitem:item1 }
        
          /*items={items.map((it)=>{if(!children){
          
          


          }})}*/
          items={menuitem}
         
        />
       

</div>

  )





}


export default Menulist;