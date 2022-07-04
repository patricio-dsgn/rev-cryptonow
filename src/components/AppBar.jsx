import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'

import { Link, useLocation } from 'react-router-native'

const AppBar = () => {
  return (
    <View style={styles.AppBar}>
      <Link to={'/info'} style={styles.BtnA}>
        <Text>Información</Text>
      </Link>
      <Link to={'/'} style={styles.BtnA}>
        <Text>Datos</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({

  AppBar:{
    backgroundColor: '#200c4b',
    paddingVertical: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  BtnA:{
    backgroundColor: '#a4b918',
    paddingHorizontal: 30,
    paddingVertical: 5,
    margin:10,
    borderRadius: 10,
  }

  // text_test:{
  //   fontSize: 40,
  //   fontWeight: 'bold',
  //   color: 'white',
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
});


export default AppBar