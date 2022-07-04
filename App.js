import React from 'react'

import {
  View,
  Text,
} from 'react-native'

import {
  NativeRouter
} from 'react-router-native'

import Main from './src/components/Main'


export default function App () {
  return (
      <NativeRouter>
        <Main />
      </NativeRouter>
    
    
    )
}