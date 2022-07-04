import React, {useContext} from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ThemeContext } from "../context/SuperContext.js";


const ButtonLang = () => {

  const { setLang } = useContext(ThemeContext);

  return (
    <View style={styles.miniNav}>
      <Text
        style={styles.btn2}
        onPress={() => setLang('es')}
      >
      Español
      </Text>
      <Text
        style={styles.btn2}
        onPress={() => setLang('en')}
      >
      English
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  btn2: {
    backgroundColor: 'rgba(0,100,100,0.5)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    margin: 8,
    borderRadius: 6,
    overflow: 'hidden',
  },
  miniNav: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,100,200,0.5)',
    width: '100%',
  },
})


export default ButtonLang;
