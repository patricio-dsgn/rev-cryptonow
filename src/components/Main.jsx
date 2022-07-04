import React, { useState, useEffect }  from 'react'
import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import { Provider } from 'react-native-paper';
import { NativeRouter, Switch, Route } from 'react-router-native';

import AppBar from './AppBar.jsx'

import Home from './Home.jsx'
import Info from './Info.jsx'

// const Context = React.createContext('default value')
import ButtonLang from './ButtonLang';
import ThemeContext from "../context/SuperContext.js";



const Main = () => {
  


  return (
    <SafeAreaView style={styles.full}>
      <ThemeContext>
        <ButtonLang/>
        <Switch>
          <Route path='/' exact><Home/></Route>
          <Route path='/info' exact><Info/></Route>
        </Switch>
        <AppBar/>
      </ThemeContext>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  full:{
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }

});
export default Main