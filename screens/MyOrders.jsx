import { View, Text } from 'react-native'
import React from 'react'
import CardUser from '../components/CardUser'


export default function MyOrders() {
  return (
    <View style={{marginTop:40}}>
        <View style={{width: '70%',height: '8%', marginLeft: 60, marginTop: 20, backgroundColor: 'black', display: 'flex', alignItems: 'center'}}>
            <Text style={{marginTop: 15, fontSize: 25, color: 'white'}}>MY ORDERS</Text>
        </View>
        <CardUser />
    </View>
  )
}