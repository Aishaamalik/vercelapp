import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OverviewReal = () => {
  return (

    <View style={styles.container}>
      <Text style={{color:'black'}}>Welcome to Overall1</Text>
    </View>
  )
}

export default OverviewReal

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})