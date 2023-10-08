import React from 'react';
import { Text, View,  StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        backgroundColor: 'white',
        borderRadius: 5
      },
    
    title: {
      fontSize: 22,
      marginLeft:100,
      marginBottom: 10,
      textAlign: 'center'
    },
    image: {
      width: '100%',
      height: 150,
      marginBottom: 10,
      borderRadius: 5
    },
    table: {
      marginTop: 30,
      marginBottom: 1,
      flex: 1,
      
      },
      
    
    tableRow: {
      flexDirection: 'row',
      marginBottom: 1,
      
      padding: 5
    },
    tableCell: {
       
      flex: 1,
      padding: 5,
      
    }
  });
  const  Tables= () => (
    
  <View style={styles.table}>

<View style={[styles.tableRow, {marginLeft:100},{fontSize:22}]}>
            <View style={styles.tableCell}>
              <Text>Lebenslauf</Text>
            </View>
            </View>
            <View style={styles.tableRow}>
            </View>
            <View style={styles.tableRow}>
            </View>



          <View style={styles.tableRow} >
          <View style={styles.tableCell}>
             <Text  > Name </Text>
        </View>
            <View style={styles.tableCell}>
              <Text  >Yang Yu  </Text>
            </View>
           
           
           
          </View>
          
          <View style={styles.tableRow} >
          <View style={styles.tableCell}>
              <Text >Staatangehörigkeit</Text>
            </View>
           < View style={styles.tableCell}>
              <Text  >P. R. China</Text>
            </View>
           
            
            </View>
            <View  style={styles.tableRow}key="3">
            <View style={styles.tableCell}>
              <Text  >Familienstand</Text>
            </View>
            <View style={styles.tableCell}>
              <Text >Verheiratet, 1 Kind</Text>
            </View>
            
            </View>
            <View style={styles.tableRow}key="4">
            <View style={styles.tableCell}>
              <Text >Anschrift</Text>
            </View>
            <View style={styles.tableCell}>
            
              <Text >Am Weihbusch 6 </Text>
              <Text >47906 Kempen</Text>
           
            </View>
            
            </View>
            <View style={styles.tableRow}key="5">
            <View style={styles.tableCell}>
              <Text >Mobil</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>017645186468</Text>
            </View>
            
            </View>
           
            <View style={styles.tableRow}>
            </View>
            <View style={styles.tableRow}>
            </View>
            <View style={styles.tableRow}>
            </View>
            <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>BERUFSERFAHRUNG</Text>
            </View>
            </View>
            <View style={styles.tableRow}>
            </View>
            <View style={styles.tableRow}>
            </View>
       <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text >02/2018-heute</Text>
            </View>
            <View style={[styles.tableCell, {width:400}]}>
              <Text style={[styles.tableCell, {width:400}]}>Entwicklerin QlikView/SAP </Text>
              <Text >  </Text>
              <Text style={[styles.tableCell, {width:400}]}>Schönmackers Umweltdienste GmbH & Co. KG</Text>
              <Text >  </Text>
              <Text style={[styles.tableCell, {width:400}]}>. Unterstützung bei Implementierung  </Text>
              <Text >  </Text>
              <Text style={[styles.tableCell, {width:400}]}> des SAP-Systems</Text>
              <Text >  </Text>
              <Text style={[styles.tableCell, {width:400}]}>. Erstellung von Apps für SAP Fiori</Text>
              <Text >  </Text>
              <Text style={[styles.tableCell, {width:400}]}>. Erstellung von Auswertungen in QlikView</Text>
              <Text >  </Text>
              <Text style={[styles.tableCell, {width:400}]}>. Administration QlikView</Text>
              <Text >  </Text>
              <Text style={[styles.tableCell, {width:400}]}> . Datenanalyse</Text>
            </View>
            </View>
                
          </View>
       

            
        
  )
  export default Tables;
