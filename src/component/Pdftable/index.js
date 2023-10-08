import React from 'react';
import { Page,  View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';
import photo from '../image/photo.JPG'

import Tables from './Tables';
import Tables1 from './Table1';


// 创建样式
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
   
    padding: 1
  },
  section: {
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
  
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center'
  },
  containerh: {
    flexDirection: 'row',
    borderBottomWidth: 10,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
  },
  detailColumnh: {
    
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  nameh: {
    borderBottomWidth: 10,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
    fontSize: 24,
    marginBottom: 10,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'Lato Bold',
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 250': {
      flexDirection: 'column',
    },
  },
 
  image: {
   marginTop:40,
    marginBottom: 10,
    height:250
    
  },
  rightColumn: {
    flexDirection: 'column',
    width: 170,
    marginTop:30,
    paddingTop: 30,
    paddingLeft: 10,
    '@media max-width: 250': {
      width: '100%',
      Height:250,
      paddingLeft: 10,
    },
   
    alignItems: 'flex-end',
    justifySelf: 'flex-end',
  },
  table: {
    width: '100%',
    marginBottom: 10,
    paddingTop: 30,
    marginTop:50,
    marginRight:30,
    marginLeft:0
  },

  table1:
  {flex: 1,
  paddingTop: 30,
  paddingHorizontal: 30,
  '@media max-width: 400': {
    paddingTop: 10,
    paddingLeft: 0,
  },
},
  tableRow: {
    flexDirection: 'row',
   
    padding: 5
  },
  
  tableCell: {
   
    
    flex: 1,
    padding: 0,
    fontSize: 14,
    flexDirection: "column" 
  },  

  tableCell2: {
    fontSize: 14,
   
    
  },
  tableCell1: {
    tableCellrowspan: 4   
    
  },
  
  
    
  });

  Font.register({
    family: 'Open Sans',
    src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
  });
  
  Font.register({
    family: 'Lato',
    src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
  });
  
  Font.register({
    family: 'Lato Italic',
    src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
  });
  
  Font.register({
    family: 'Lato Bold',
    src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
  });
  

// 创建pdf文档
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
    
      <Tables />   
         
        <View style={styles.rightColumnColumn}>
        <Image
          src={photo}
          style={styles.image}
        />
       </View>    
    </Page>
    <Page size="A4" style={styles.page}>
      <Tables1/>
    </Page>
  </Document>
);

export default MyDocument;


