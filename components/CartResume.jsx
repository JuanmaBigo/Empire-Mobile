import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useState, useEffect, useFocusEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import apiUrl from '../configHost'

export default function CartResume() {
    const [data, setData] = useState()
    let url = `${apiUrl}items`
    let token = AsyncStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    useFocusEffect(
        () => {
            axios.get(url, headers)
                 .then(response => setData(response.data.item))
        }, [])

        console.log(data)

    return ( 
        <View style={styles.cartContainer}>
            <Text style={styles.cartTitle}>RESUME</Text>
            <Image 
            source = {require ("../assets/image/custome-car.png")} 
            style={{
                height: "25%",
                aspectRatio: 1,
                position: "relative",
                alignSelf: 'center'
                
                }}
            />
            <View style={styles.resumeCont}> 
            <View style={styles.titleContainer}>
                <Text style={styles.subTitle}> BASE </Text>
            <View style={styles.productCont}>
                <Text style={styles.textDescription}>Name Car</Text>
                <Text style={styles.textDescription}>price</Text>
            </View>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.subTitle}> COLOR </Text>
            <View style={styles.productCont}>
                <Text style={styles.textDescription}>Name Color</Text>
                <Text style={styles.textDescription}>price</Text>
            </View>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.subTitle}> RIM </Text>
            <View style={styles.productCont}>
                <Text style={styles.textDescription}>Name Rim</Text>
                <Text style={styles.textDescription}>price</Text>
            </View>
            </View>
            </View>
            <View style={styles.totals}>
                <View style={styles.totalscontainer}>
                <Text style={styles.totalTitle}>TOTAL</Text>
                <Text style={styles.textDescription}>price</Text>
                </View>
                <View style={styles.totalscontainer}>
                <Text style={styles.reservationTitle}>RESERVATION</Text>
                <Text style={styles.textDescription}>price</Text>
                </View>
            </View>
        </View>
    
             )
    
    }
        const styles = StyleSheet.create({
            cartContainer: {
                flex: 1, 
                width: '100%',
                height: '100%',  
                backgroundColor: 'black',
                alignItems: 'stretch',
                padding: 20,
            },
            cartTitle: {
                fontSize: 35,
                color: '#ffffff',
                marginTop: 70,
                textAlign: 'center'
            },
            resumeCont: {
                display: 'flex',
                gap: 3,
                marginBottom: 40
            },
            titleContainer: {
                marginTop: 30
            },
           subTitle: {
               color: '#ffffff',
               fontSize: 19,
               fontWeight: 'bold',
           },
           productCont: {
            border: '#ffffff',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5
           },
           textDescription: {
            color: '#ffffff',
            fontSize: '18',
           },
           totals: {
            gap: 8
           },
           totalscontainer:{
            border: '#ffffff',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5
           },
           totalTitle: {
            fontSize: 22,
            fontWeight: 'bold',
            color: '#ffffff'
           },
           reservationTitle: {
            fontSize: 22,
            fontWeight: 'bold',
            color: '#ffffff'
           },   
            })