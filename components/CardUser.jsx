import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function CardUser() {
  return (
    <View>
      <Image source={require('../assets/image/cardpng.jpg')} style={{ width: '95%', height: '40%', objectFit: 'contain', marginTop: 50, marginLeft: 10}} />
        <View style={styles.container}>
        <View style={styles.card1}>
            <Text style={styles.title}>REVUELTO</Text> 
        </View>
        <View style={styles.card}>
            <Text style={styles.subtitle}>COLOR</Text>
            <Text style={styles.description}>Arancio Borealis</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.subtitle}>RIM SELECTION</Text>
            <Text style={styles.description}>Rims Aesir graphite grey</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.title}>PENDING</Text>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 25,
      backgroundColor: 'black',
      width: '95%',
      marginLeft: 10,
    },
    card: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    card1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
    subtitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      
    },
    description: {
      fontSize: 16,
      color: '#888',
      flexWrap: 'wrap',
    },
    price: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white'
    },
    containerprice: {
        padding: 25,
        backgroundColor: 'black',
        width: '95%',
        marginLeft: 10,
        marginTop: 30,
      },
      payButton: {
        backgroundColor: 'black',
        color: 'white',
        marginTop: 30,
        height: 40,
        width: '70%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
      },
      containerbtn: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
      }
  });
  