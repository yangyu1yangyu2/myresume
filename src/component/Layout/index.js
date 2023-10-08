import React,{useState} from 'react'
import { Breadcrumb, Button, Layout, theme } from 'antd';
import screenfull from 'screenfull';
import Icon, { FullscreenOutlined,FullscreenExitOutlined } from '@ant-design/icons';
import{seteinloguser, setleinloguser } from '../Store/reduce/einlogreduce';
import {useDispatch,useSelector} from "react-redux";
//import Home from '../../component/Home/index'
import Menulist from '../Menulist';
import {useNavigate } from "react-router-dom";
import h from "./header.module.css"
//import Lebenslauf from '../Lebenslauf/Lebenslauf';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from '../Pdftable';
const { Header, Content,  Sider, } = Layout;

const Layouts = (props) => {
  const userlog=useSelector(state=>state.einlog)
  const dispatch = useDispatch();
  const nav=useNavigate()
const [isfull, setisfull]=useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    
        <Layout>
          
          <Layout>
            <Sider width={256} >
              <Menulist />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb
          style={{
            margin: '10px 0',
          }}
        />
            
              
              <Header 
                      style={{
                       padding: 0,
                       background: colorBgContainer,
            
          }}>
             
            <div className={h.header}>
            {userlog.userleinlog? 
            <span style={{textAlign: 'center', fontSize: 22, marginRight:'680px' }}>  <PDFDownloadLink style={{ fontSize: 22, marginRight:'400px' }}document={< MyDocument/>} fileName="Lebenslauf-YangYu.pdf">
            Download/Lebenslauf.PDF
          </PDFDownloadLink>Lebenslauf </span>:null}
          
              <Button  size='small' onClick={()=>{screenfull.toggle(); setisfull(preState=>!preState)}}>
                <Icon component={isfull?FullscreenExitOutlined: FullscreenOutlined}/>
              </Button>
              {userlog.usereinlog?
              <Button type='link' onClick={()=>{localStorage.clear(); dispatch(seteinloguser(false)); dispatch(setleinloguser(false)); nav('home') }}>Logout</Button>:null}
             
              </div>
             
          </Header>
              <Content  
                style={{
                  padding: 4,
                  margin: 0,
                  minHeight: 280,
                  background: colorBgContainer,
                  height:'900px',
                }}
              >
                
                
                {props.children}
              </Content>
            </Layout>
          </Layout>
          
        </Layout>
      );
    };
  


export default Layouts