import React from "react";
import { DataTable, Avatar } from 'react-native-paper';
import { View, Text, Image, StyleSheet } from 'react-native';

const coinRow = ({ coin, index }) => {

  return (
    <DataTable.Row>
      <DataTable.Cell>
      <Avatar.Image
        size={30}
        source={{
          uri: coin.image,
        }}
      />
      </DataTable.Cell>
      <DataTable.Cell>{coin.name}</DataTable.Cell>
      <DataTable.Cell>{coin.current_price}</DataTable.Cell>
      <DataTable.Cell>{coin.price_change_percentage_24h}</DataTable.Cell>
    </DataTable.Row>
  );

};

const styles = StyleSheet.create({
  imageSmall: {
    width: 25,
    height: 25
  },

})


export default coinRow;