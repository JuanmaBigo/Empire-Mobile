import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'

export default function Confim() {
  return (
    <View style={{ flex: 1, width: '100%', height: '100%', alignItems: 'center' }}>
    <ImageBackground source={require('../assets/image/contact.png')} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
        <Image source={require('../assets/image/titlecontact.png')} style={{ width: '90%', height: '30%', objectFit: 'contain', marginTop: 30 }} />
        <Text style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff', padding: 10, textAlign: 'center', fontSize: 30, marginTop: 150, fontWeight: 'bold', textTransform: 'uppercase' }}>
          Thank you for contacting, shortly, an advisor will contact you.
        </Text>
    </ImageBackground>
</View>
  )
}