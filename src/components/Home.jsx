import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TextInput } from "react-native";
import axios from 'axios';
import TableCoins from './TableCoins';

import { ThemeContext } from "../context/SuperContext.js";

const Home = () => {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState(''); 

  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
    setCoins(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  {/* <Text style={styles.h1}>{ theme }</Text> */}
  {/* <Text style={styles.h1}>{ theme }</Text> */}
  const { lang } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text>{lang}</Text>
      <View style={styles.lego1}>
        <Text style={styles.h1}>Cripto Now</Text>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={e=> setSearch(e)} 
        placeholder="Busca una Moneda"
        placeholderTextColor="#6495ed"
        keyboardType="default"
      />
      <TableCoins coins={coins} search={search}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: '100%',
    height: '100%',
  },

  lego1:{
    color: '#fff',
    padding: 10,
    marginVertical: 30,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  lego2:{
    backgroundColor: 'rgba(0, 0, 0, 1)',
    color: '#fff',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  
  h1:{
    fontWeight: 'bold',
    fontSize: 40,
    color: '#7869b5',
  },
  
  
  h2:{
    fontWeight: 'bold',
    fontSize: 24,
    color: '#b9ab8d',
    lineHeight: 30,
    marginVertical: 20,
  },
  
  p:{
    fontSize: 16,
    // fontWeight: 'ligth',
    color: '#d2991e',
    lineHeight: 22,
    marginVertical: 10,
    textAlign: 'justify',
  },
  page2:{
    backgroundColor: '#FFFFFF',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  
  tinyIcon: {
    width: 50,
    height: 50,
  },
  
  input: {
    height: 50,
    margin: 12,
    fontSize: 20,
    borderWidth: 2,
    borderColor: '#666',
    color: '#55f',
    paddingHorizontal: 10,
    borderRadius: 10,
    textDecorationLine: 'none',
    backgroundColor: 'rgba(0, 0, 100, 0.1)',
  },

});

export default Home;
