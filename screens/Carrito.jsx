import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import imgclose from '../assets/image/close2.png'


export default function Carrito() {
  return (
    <View>
            <Image source={require('../assets/image/cardpng.jpg')} style={{ width: '90%', height: '20%', objectFit: 'contain', marginTop: 30, marginLeft: 20}} />
        <View style={styles.container}>
        <View style={styles.card1}>
            <Text style={styles.title}>RESUME</Text>
            <TouchableOpacity style={styles.closeButton}>
                <Image source={imgclose} style={styles.closeIcon} />
            </TouchableOpacity>
        </View>
        <View style={styles.card}>
            <Text style={styles.subtitle}>BASE</Text>
            <Text style={styles.description}>Lamborghini Revuelto</Text>
            <Text style={styles.price}>$500.000</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.subtitle}>COLOR</Text>
            <Text style={styles.description}>Arancio Borealis</Text>
            <Text style={styles.price}>$5.000</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.subtitle}>RIM SELECTION</Text>
            <Text style={styles.description}>Rims Aesir graphite grey</Text>
        <View>
            <Text style={styles.price}>$7.500</Text>
        </View>
        </View>
        <View style={styles.card}>
            <Text style={styles.subtitle}>TOTAL</Text>
            <Text style={styles.price}>$512.500</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.subtitle}>RESERVATION</Text>
            <Text style={styles.price}>$45.000</Text>
        </View>
        </View>
        <View style={styles.containerprice}>
            <View >
                <Text style={styles.subtitle}>RESERVATION</Text>
            </View>
            <View style={styles.card1}>
                <Text style={styles.subtitle}>TOTAL</Text>
                <Text style={styles.price}>$75.000</Text>
            </View>
        </View>
        <View style={styles.containerbtn}>
        <TouchableOpacity style={styles.payButton}>
            <Text style={styles.subtitle}>MAKE PAYMENT</Text>
        </TouchableOpacity>
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
    closeButton: {
      backgroundColor: '#fff',
      padding: 5,
      borderRadius: 20,
    },
    closeIcon: {
      width: 20,
      height: 20,
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
  