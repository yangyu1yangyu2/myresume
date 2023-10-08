import React from 'react'
import {
  HomeOutlined,
  AppstoreOutlined,
 
  DesktopOutlined,
  MailOutlined,
  
} from '@ant-design/icons';

const Menulstitem =[
{label: 'Home', 
  key: '1', 
  icon: <HomeOutlined />, 
  children: '', 
  type: '/home'

},

{label: 'About', 
  key: '2', 
  icon: <DesktopOutlined />, 
  children: '', 
  type:'/about'

},
{label: 'Katalog', 
  key: 'sub1',
  icon: <MailOutlined />, 
  children:[
    {label: 'Kleid', 
    key: '5',
    children: '',
  type:'/kleid'},
    {label: 'Bücher', 
    key: '6',
    children: '',
  type:'/bücher'}

  ], 
  type:''

},
{label: 'Bereichtigung/Admin', 
  key: 'sub2', 
  icon: <AppstoreOutlined />,
  children:[
    {label: 'UserAdmin', 
    key: '7'},
    {label: 'RoleAdmin', 
    key: '8'}

  ], 
  type: ''

}


]

export default Menulstitem;