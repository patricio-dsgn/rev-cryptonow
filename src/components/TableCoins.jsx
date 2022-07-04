import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState, useEffect } from 'react'
import { DataTable } from 'react-native-paper';

import CoinRow from './CoinRow';

const titles = ['Icono', 'Moneda', 'Precio', 'Variación'];

const TableCoins = ({coins, search}) => {

  const filteredCoins = coins.filter((coin) =>
    coin.name.toString().toLowerCase().includes(search.toString().toLowerCase()) |
    coin.symbol.toString().toLowerCase().includes(search.toString().toLowerCase())
  );

  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          {
            titles.map((title, index) => (
            <DataTable.Title key={index}>{title}</DataTable.Title>
          ))
          }
        </DataTable.Header>
        <ScrollView>
          {filteredCoins.map((coin, index) => (
            <CoinRow coin={coin} key={index} index={index+1}/>
            ))
          }
        </ScrollView>
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    borderColor: '#000000',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
  },
  table_header: {
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
})

export default TableCoins;