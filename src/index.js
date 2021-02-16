import React from 'react'

import Router from './routes'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import DefaultStatusBar from './components/StatusBar'

import { View } from 'react-native'

export default function App() {
  return (
    <View style={{flex: 1}}>
       <DefaultStatusBar backgroundColor="#f9a825" barStyle="light-content" />
        <SafeAreaProvider>
            <Router/>
        </SafeAreaProvider>  
    </View>
  )
}