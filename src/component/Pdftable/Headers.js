import React from 'react';

import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'column',
    marginLeft:50,
    flexGrow: 9,
   
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  name: {
    fontSize: 24,
  marginLeft:50,
    fontFamily: 'Lato Bold',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
    fontFamily: 'Lato',
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },

});

const  Headers= () => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>Lebenslauf</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link href="yang.yu@rwth-aachen.de" style={styles.link}>
        luke@theforce.com
      </Link>
    </View>
  </View>
);

export default Headers;