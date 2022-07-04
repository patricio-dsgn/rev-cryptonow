import React, {useContext} from "react";
import { View, Text, ScrollView, StyleSheet, ImageBackground, Image, FlatList } from "react-native";

import DATA from "../data/infoCripto.js"

const imageBg = { uri: "http://idd.cl/libs/gif/bg3.gif" };

const Info = () => {
  

  const renderItem = ({ item, index }) => {
    return(
      <View key={index} style={styles.lego2}>
        <Image style={styles.tinyIcon} source={{ uri: item.image}}/>
        <Text style={styles.h2}>{item.title}</Text>
        {item.text.map( (p,i)=> (
          <View key={i}>
            <Text style={styles.p}>{p}</Text>
            <Text> </Text>
          </View>
        ))}
      </View>
  )};


  return (
    <ImageBackground source={imageBg} style={styles.image}>
      
      <View style={styles.container}>
        <View style={styles.lego1}>
          <Text style={styles.h1}>Información</Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </ImageBackground>
  )
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
  
});

export default Info;