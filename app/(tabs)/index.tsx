import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'expo-image'
import icon from '@/assets/images/glass.jpg'

const index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
      source={icon}
      style={styles.images}
      >
      <Text style={styles.text}>Welcome to the best, unrivaled website.</Text>
      <Text style={styles.text}>...</Text>
      <Text style={styles.text}>FocusOn.me</Text>
      </ImageBackground>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  text:{
    color: 'black',
    fontSize: 42,
    fontWeight:'bold',
    textAlign:'center',
  },
  images:{
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode:'cover',
    justifyContent:'center',
  }
}) 