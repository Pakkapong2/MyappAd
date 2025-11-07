import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import icon from '@/assets/images/glass.jpg'

const Index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={icon} style={styles.image} resizeMode="cover">
        <View style={styles.overlay}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to</Text>
            <Text style={styles.brand}>FocusOn.me</Text>
            <Text style={styles.subtitle}>Discover your perfect vision style 👓</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)', 
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textContainer: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
    alignItems: 'center',
  },
  title: {
    color: '#f5f5f5',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 5,
  },
  brand: {
    color: '#f4c542',
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#e0e0e0',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
})
