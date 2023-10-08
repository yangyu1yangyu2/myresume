import React from 'react'
import { Table, Image } from 'antd';
import photo from '../image/photo.JPG'
//import html2canvas from 'html2canvas';
//import jsPDF from 'jspdf';



const columns = [
    {
      title: '  ',
      fontSize: 24,
      align: "center" ,
      dataIndex: 'name',
      width:60,
    
      
    },
    {
      title: ' ',
      dataIndex: 'age',
      width:120,
      render: (text) => <>
      <p style={{marginLeft:10}}>{text.split("  ")[0]}</p>
      <p style={{marginLeft:20}}>{text.split("  ")[1]}</p>
      <p style={{marginLeft:20}}>{text.split("  ")[3]}</p>
      <p style={{marginLeft:20}}>{text.split("  ")[4]}</p>
      <p style={{marginLeft:20}}>{text.split("  ")[5]}</p>
      <p style={{marginLeft:20}}>{text.split("  ")[6]}</p>
      <p style={{marginLeft:20}}>{text.split("  ")[7]}</p>
      <p style={{marginLeft:20}}>{text.split("  ")[8]}</p>
      <p>{text.split("  ")[9]}</p>
      </>,

    },
    /*{
      title: 'Address',
      dataIndex: 'address',
      width: 600,
      render: (text) => <>
      <p>{text.split("  ")[0]}</p>
      <p>{text.split("  ")[1]}</p>
      </>,
      
    },*/
    { title: '',
    dataIndex: 'photo', 
    width:100, 
    onCell: (_, rowKey) => {
        if (rowKey === 1) {
          return {
            rowSpan: 4,
          };}
          if (rowKey === 2) {
            return {
              rowSpan: 0,
            };}
            if (rowKey === 3) {
                return {
                  rowSpan: 0,
                };}
                if (rowKey === 4) {
                    return {
                      rowSpan: 0,
                    };}
                    
                else{ return {
                    rowSpan: 1,
                  };}
        
        },
        render: (value, record, rowKey) => {
            if (rowKey === 1 && record.key<6 ) {
              return (
                <Image
                style={{ marginLeft: 80 }}
                  preview={false}
                  width={250}
                 
           //src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
           //src="/image/photo.JPG"
           src={photo}
                />
              );
              
            }

            else{ return( ' ')}



},     
},   
    
  ];










  const data = [
    {
        key: '1',
        name: 'Name',
        age: ' Yang Yu',
      
        
                  
                  
      },
    {
      key: '2',
      name: 'Staatsangehörigkeit',
      age: 'P. R. China',
     // photo: 'test ',
      //address: 'New York No. 1 Lake Park  New York No.  . 1 Lake Park &nsbNew York No.     1 Lake Park &nsbNew York No. 1 Lake Park &nsb',
                
                
    },
    {
      key: '3',
      name: 'Familienstand',
      age: 'Verheiratet, 1 Kind',
     photo: 'test ',
      //address: 'London No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Anschrift',
      age: 'Am Weihbusch 6   47906 Kempen',
     photo: 'test ',
      //address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '5',
      name: 'Mobil',
      age: '+49 176 4518 6468',
      photo: 'test ',
      //address: 'London No. 2 Lake Park',
    },
   {
        key: '6',
        name: <p style={{fontSize: 14}}>BERUFSERFAHRUNG</p>,
        age: '   ',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '7',
        name: '02/2018 - heute',
        age: 'Entwicklerin QlikView/SAP Schönmackers Umweltdienste GmbH & Co. KG    . SAP UI5/ABAP/Odata  . Unterstützung bei Implementierung des SAP-Systems  . Erstellung von Apps für SAP Fiori  . Erstellung von Auswertungen in QlikView  . Administration QlikView  . Datenanalyse',
       // photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '8',
        name: '12/2013 - 03/2015',
        age: ' Akadmische Hilfskraft in der Getriebeentwicklung  . FEV GmbH in Aachen zur Projektunterstützung durch Algorythmenentwicklung',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '9',
        name: '01/2011 - 01/2012',
        age: ' Business Management Assistant Huawei Technologie Düsseldorf GmbH  . Organisation von Schulungen für das Solution Sales & Marketing Dept.  . Kundenkontakt/Bearbeitung von Anfragen an den Vizepräsidenten der Western European Solution Sales & Marketing  . Organisation und Teilnahme an Meeting zur Informationsbeschaffung für den Vizepräsidenten ',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '10',
        name: '11/2007 - 03/2009',
        age: 'Studentisch Hilfskraft  Institut für Werkstoffe der Elektrotechnik',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '11',
        name: '09/1997 - 01/2001',
        age: 'Projektmanagement  CITIC Australia Trading Limited, Peking Office  . Import/Export von Rohstoffen/Lebensmitteln/etc.  . Marketing für Produkte',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '13',
        name: <p style={{fontSize: 16}}>WEITERBILDUNG</p>,
        age: '   ',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '14',
        name: '11/2015 - 04/2016',
        age: 'C#-Programmierung bis Expertenniveau, Automatisie-rung mit SIMATIC S7, Ablaufsteuerung, Bussysteme und Prozessvisualisierung mit WinCC flexible, TIA-Portal',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '15',
        name: <p style={{fontSize: 16}}>STUDIUM</p>,
        age: ' ',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '16',
        name: '10/2003 - 09/2009',
        age: ' Universität RWTH Aachen  Studiengang: Elektrotechnik und Elektronik  Abschluss: Diplomingenieurin',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '17',
        name: '02/2009 - 09/2009',
        age: ' Diplomarbeit: Institut für Elektrische Maschinen der RWTH Aachen  Thema: Regelung eines Magnetschwebesystems für Aufzüge  Erstellen eines Modells  Programmierung/ Simulation der Regelungstechnik  Anwendung der Simulationsergebnisse auf das Modell',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '18',
        name: '10/2007 - 03/2008',
        age: ' Projekt  Thema: Sensor zur Messung der relativen Luftfeuchte  . Schaltungen entwickeln  . Programmieren mit Mikrocontroller C',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '19',
        name: '11/2007 - 03/2008',
        age: ' Projekt  Thema: Bildverarbeitung  . Algorithmen erarbeitet   . Programmieren mit OpenCV',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '20',
        name: '09/1993 - 07/1997',
        age: ' Zhejiang University  Studiengang: Chemical Engineering  Abschluss: Bachelor',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '21',
        name: <p style={{fontSize: 16}}>PRAKTIKUM</p>,
        age: ' ',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '22',
        name: '03/2008 - 07/2008',
        age: 'Praktikum  Robert Bosch GmbH  Tätigkeiten: Entwicklung von Komponenten der Systeme Antiblockiersystem(ABS),  Elektronisches Stabilitätsprogramm(ESP)',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '23',
        name: <p style={{fontSize: 16}}>COMPUTER-KENNTNISSE</p>,
        age: ' ',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '24',
        name: 'Sehr Gute Kenntnisse',
        age: 'Javascript+Html+CSS, React, NodeJS, AJAX, SAP UI5, SAP ABAP, QlikView, C/C++/C#, JQuery,SQL/MYSql, Matlab/Simulink, ASP, MS Office, SPS',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '25',
        name: <p style={{fontSize: 16}}>SPRACHEN</p>,
        age: ' ',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '26',
        name: 'Muttersprache',
        age: 'Chinesisch',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '27',
        name: 'Fließend',
        age: 'Deutsch',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
      {
        key: '28',
        name: 'Gute Kenntnisse',
        age: 'Englisch',
       //photo: 'test ',
        //address: 'London No. 2 Lake Park',
      },
  ];
  //const onChange = (pagination, filters, sorter, extra) => {
   // console.log('params', pagination, filters, sorter, extra);
  //};

const Lebenslauf = () => {
 /*const download = () => {
    const element = document.getElementById('lbst');  // 这个dom元素是要导出的pdf的div容器
    const w = element.offsetWidth;  // 获得该容器的宽
    const h = element.offsetHeight;  // 获得该容器的高
    const offsetTop = element.offsetTop; // 获得该容器到文档顶部的距离  
    const offsetLeft = element.offsetLeft; // 获得该容器到文档最左的距离
    const canvas = document.createElement('canvas');
    let abs = 0;
    const win_i = document.body.clientWidth; // 获得当前可视窗口的宽度（不包含滚动条）
    const win_o = window.innerWidth; // 获得当前窗口的宽度（包含滚动条）
    if(win_o > win_i){
      abs = (win_o - win_i) / 2; // 获得滚动条宽度的一半
    }
    canvas.width = w * 2; // 将画布宽&&高放大两倍
    canvas.height = h;
    
    const context = canvas.getContext('2d');
    context.scale(2, 2);
    context.translate(-offsetLeft - abs, -offsetTop);
    html2canvas(element, {
      allowTaint: true,
      scale: 2 // 提升画面质量，但是会增加文件大小
    }).then( canvas => {
      const contentWidth = canvas.width;
      const contentHeight = canvas.height;
      // 一页pdf显示html页面生成的canvas高度
      const pageHeight = contentWidth / 592.28 * 841.89;
      //const pageHeight =contentHeight;
      // 未生成pdf的html页面高度
      const leftHeight = contentHeight;
      //if(leftHeight>pageHeight){leftHeight=-1}
      // 页面偏移
      const position = 0;
      // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
      const imgWidth = 595.28;
      const imgHeight = 592.28 / contentWidth * contentHeight;
      
      const pageDate = canvas.toDataURL('image/jpeg', 1.0);
      
      const pdf = new jsPDF('', 'pt', 'a4');
      // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面的高度（841.89）
      // 当内容未超过pdf一页显示的范围，无需分页
      if(leftHeight < pageHeight) {
        pdf.addImage(pageDate,'JPEG', 0, position, imgWidth, imgHeight);
      }else { // 分页
        while (leftHeight > 0){
            pdf.addImage(pageDate, 'JPEG', 0, position, imgWidth, imgHeight) 
            leftHeight -= pageHeight;
            position -= 841.89;
            // 避免添加空白页
            if(leftHeight > 0){
              pdf.addPage()
            }
        }
      
      }
       pdf.save('LebenslauffürYangYu.pdf');    
    })
      
  }
    // 这里默认横向没有滚动条的情况，因为offset.left()，有无滚动条的时候存在差值，因此translate的时候，要把这个差值去掉
   /* html2canvas(element, {
      allowTaint: true,
      scale: 2 // 提升画面质量，但是会增加文件大小
    }).then( canvas => {
      const contentWidth = canvas.width;
      const contentHeight = canvas.height;
      // 一页pdf显示html页面生成的canvas高度
      const pageHeight = contentWidth / 592.28 * 841.89;
      // 未生成pdf的html页面高度
      const leftHeight = contentHeight;
      // 页面偏移
      const position = 0;
      // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
      const imgWidth = 595.28;
      const imgHeight = 592.28 / contentWidth * contentHeight;
      
      const pageDate = canvas.toDataURL('image/jpeg', 1.0);
      
      const pdf = new jsPDF('', 'pt', 'a4');
      // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面的高度（841.89）
      // 当内容未超过pdf一页显示的范围，无需分页
      if(leftHeight < pageHeight) {
        pdf.addImage(pageDate,'JPEG', 0, position, imgWidth, imgHeight);
      }else { // 分页
        while (leftHeight > 0){
            pdf.addImage(pageDate, 'JPEG', 0, position, imgWidth, imgHeight) 
            leftHeight -= pageHeight;
            position -= 841.89;
            // 避免添加空白页
            if(leftHeight > 0){
              pdf.addPage()
            }
        }
      }*/
      
     

  return (
    <>
    <div >
   
     <Table   style={{fontSize:16}}
   
   rowKey={(record) => record.key}
   pagination={{defaultPageSize: 10}}
    columns={columns}
    
    /*expandable={{
      expandedRowRender: (record) => (
        <p
          style={{
            margin: 0,
          }}
        >
         'London No. 2 Lake Park'
        </p>
      ),
      rowExpandable: (record) => record.name !== 'Not Expandable',
    }}
    <div>
    <PDFDownloadLink document={< MyDocument/>} fileName="Lebenslauf-YangYu.pdf">
      Download/Lebenslauf.PDF
    </PDFDownloadLink>
  </div>
    */
    dataSource={data}
    size="small"
  />
  </div>
  

    </>
  )
}

export default Lebenslauf