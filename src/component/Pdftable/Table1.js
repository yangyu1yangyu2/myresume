import React from 'react';
import {  Text, View,  StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    
    title: {
      fontSize: 18,
      marginBottom: 10,
      textAlign: 'center'
    },
    image: {
      width: '100%',
      height: 150,
      marginTop:30,
      marginBottom: 10,
      borderRadius: 5
    },
    table: {
      marginTop: 30,
        marginBottom: 10,
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
  const  Tables1= () => (
  <View style={styles.table}>

        <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.tableCell}>12/2013 - 03/2015</Text>
            </View>
            <View style={styles.tableCell}>
              <Text >Akadmische Hilfskraft in der Getriebeentwicklung</Text>
              <Text>. FEV GmbH in Aachen zur Projektunterstützung durchAlgorythmenentwicklung </Text>
              
               </View>
          </View>
            
            
            <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.tableCell}>01/2011 - 01/2012</Text>
            </View>
            <View style={styles.tableCell}>
              <Text >Business Management Assistant Huawei Technologie Düsseldorf GmbH</Text>
              <Text> . Organisation von Schulungen für das Solution Sales & Marketing Dept.</Text>
              <Text >. Organisation und Teilnahme an Meeting zur Informationsbeschaffung für den Vizepräsidenten </Text>
             
             
              
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.tableCell}>11/2007 - 03/2009</Text>
            </View>
            <View style={styles.tableCell}>
              <Text >Studentisch Hilfskraft</Text>
              <Text> . Institut für Werkstoffe der Elektrotechnik</Text>
              <Text >. Organisation und Teilnahme an Meeting zur Informationsbeschaffung für den Vizepräsidenten  </Text>
              <Text>. Organisation von Schulungen für das Solution Sales & Marketing Dept.</Text>
              
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.tableCell}>11/2007 - 03/2009</Text>
            </View>
            <View style={styles.tableCell}>
              <Text >Studentisch Hilfskraft</Text>
              <Text> . Institut für Werkstoffe der Elektrotechnik</Text>
                        
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.tableCell}>09/1997 - 01/2001</Text>
            </View>
            <View style={styles.tableCell}>
              <Text >Projektmanagement</Text>
              <Text> CITIC Australia Trading Limited, Peking Office</Text>
              <Text> . Marketing für Produkte</Text>
                        
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>WEITERBILDUNG</Text>
            </View>
            </View>
    
            <View style={styles.tableRow}>
            </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.tableCell}>11/2015 - 04/2016</Text>
            </View>
            <View style={styles.tableCell}>
              <Text >C#-Programmierung bis Expertenniveau, Automatisie-rung mit SIMATIC S7, Ablaufsteuerung, Bussysteme und</Text>
             
              <Text >Prozessvisualisierung mit WinCC flexible, TIA-Portal </Text>
              
              
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>STUDIUM</Text>
            </View>
            </View>
    
            <View style={styles.tableRow}>
            </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.tableCell}>10/2003 - 09/2009</Text>
            </View>
            <View style={styles.tableCell}>
              <Text >Universität RWTH Aachen</Text>
              <Text>  Studiengang: Elektrotechnik und Elektronik</Text>
                           
              
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.tableCell}>02/2009 - 09/2009</Text>
            </View>
            <View style={styles.tableCell}>
              <Text >Diplomarbeit: Institut für Elektrische Maschinen der RWTH Aachen</Text>
              <Text>  Thema: Regelung eines Magnetschwebesystems für Aufzüge</Text>
              <Text>  .Programmierung/ Simulation der Regelungstechnik</Text>   
              <Text>  .Anwendung der Simulationsergebnisse auf das Modell</Text>             
              
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.tableCell}>10/2007 - 03/2008</Text>
            </View>
            <View style={styles.tableCell}>
              <Text >Projekt</Text>
              <Text>  Thema: Sensor zur Messung der relativen Luftfeuchte</Text>
              <Text>  . Programmieren mit Mikrocontroller C</Text>   
                         
              
            </View>
            </View>
            <View style={styles.tableRow}>
             <View style={styles.tableCell}>
              <Text style={styles.tableCell}>11/2007 - 03/2008</Text>
             </View>
             <View style={styles.tableCell}>
              <Text >Projekt</Text>
              <Text> Thema: Bildverarbeitung</Text>
              <Text>  . Programmieren mit OpenCV</Text>   
                        
            </View>
            </View>
            <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.tableCell}>11/2007 - 03/2008</Text>
            </View>
            <View style={styles.tableCell}>
              <Text >Projekt</Text>
              <Text> Thema: Bildverarbeitung</Text>
              <Text>  . Programmieren mit OpenCV</Text>   
                         
              
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.tableCell}>09/1993 - 07/1997</Text>
            </View>
            <View style={styles.tableCell}>
              <Text >Zhejiang University</Text>
              <Text> Studiengang: Chemical Engineering </Text>
               
                         
              
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>PRAKTIKUM</Text>
            </View>
            </View>
    
            <View style={styles.tableRow}>
            </View>
            <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.tableCell}>03/2008 - 07/2008</Text>
            </View>
            <View style={styles.tableCell}>
              <Text >Praktikum</Text>
              <Text> Robert Bosch GmbH </Text>
              <Text> . Elektronisches Stabilitätsprogramm(ESP)</Text>
               
                         
              
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>COMPUTER-KENNTNISSE</Text>
            </View>
            </View>
    
            <View style={styles.tableRow}>
            </View>
            <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.tableCell}>Sehr Gute Kenntnisse</Text>
            </View>
            <View style={styles.tableCell}>
              <Text >Javascript+Html+CSS, React, NodeJS, AJAX, SAP UI5, SAP ABAP, QlikView, C/C++/C#, JQuery, SQL/MYSql, Matlab/Simulink, ASP, MS Office, SPS</Text>
              
              
               
                         
              
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>SPRACHEN</Text>
            </View>
            </View>
            <View style={styles.tableRow}>
            </View>
            <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.tableCell}>Muttersprache</Text>
            </View>
            <View style={styles.tableCell}>
              <Text >Chinesisch</Text>
              
               
                         
              
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.tableCell}>Fließend</Text>
            </View>
            <View style={styles.tableCell}>
              <Text >Deutsch</Text>
              
               
                         
              
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.tableCell}>Gute Kenntnisse</Text>
            </View>
            <View style={styles.tableCell}>
              <Text >Englisch</Text>
              
               
                         
              
            </View>
          </View>
          </View>
       
          
        

            
        
  )
  export default Tables1;
