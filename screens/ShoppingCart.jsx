import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import {REACT_APP_URL} from '@env'
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Linking } from 'react-native';

export default function ShoppingCart() {
    const [loaded, setLoaded] = useState(false)
    const [data2, setData2] = useState()
    const [total, setTotal] = useState()

    let url = `${REACT_APP_URL}items`
    let urlP = `${REACT_APP_URL}payments`
      

    async function getData () {
        AsyncStorage.getItem('token')
            .then(res => {
                token = res;
            })
            
      let headers = { headers: { 'Authorization': `Bearer ${token}` } }
      try {
          let data = await axios.get(url, headers)
                                .then(res => data = (res.data))
                                setData2(data.item)
                                setTotal(data.total)
                                setLoaded(true)
                                
                            } catch (error) {
        console.log(error)
      }
    }
      useEffect(
        () => {
          getData()
        }, []
      )
    //   console.log(token)
    //   console.log(total)
    //   console.log(data2)
    
    const handleClick = async () => {
      let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let pay = {
          title: "Compra/Reservacion",
          description: "NA",
          image: "",
          price: total
        };
      
        if (token) {
          try {
            const response = await axios.post(urlP, pay, headers);
            if (response && response.data && response.data.response && response.data.response.body) {
              const puedeAbrir = await Linking.canOpenURL(response.data.response.body.init_point);
              if (puedeAbrir) {
                await Linking.openURL(response.data.response.body.init_point);
              }
            } else {
            }
          } catch (err) {
            console.log(err)
          }
        }
      };
     // En este ejemplo, estamos verificando que la respuesta tenga la estructura adecuada antes de intentar acceder a la propiedad init_point. Si la respuesta no tiene la estructura adecuada, mostramos un mensaje de error en la aplicación. Además, estamos capturando cualquier error que se produzca en la llamada a la API y mostrando un mensaje de error adecuado en la aplicación.
      
      

    return ( 

        <ScrollView style={{ backgroundColor: 'black', height: '100%', width: '100%' }}>
            <Text style={styles.cartTitle}>RESUME</Text>
            {loaded ? data2 && data2.map((item) => (
                <View >
                <Image 
                source = {{uri: item.rim_id.photo}}
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
                    <Text style={styles.textDescription}>{item.car_id.name}</Text>
                    <Text style={styles.textDescription}>{item.car_id.reservePrice}</Text>
                </View>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.subTitle}> COLOR </Text>
                <View style={styles.productCont}>
                    <Text style={styles.textDescription}>{item.color_id.name}</Text>
                    <Text style={styles.textDescription}>{item.color_id.price_color}</Text>
                </View>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.subTitle}> RIM </Text>
                <View style={styles.productCont}>
                    <Text style={styles.textDescriptionItem}> {item.rim_id.name} </Text>
                    <Text style={styles.textDescription}>{item.rim_id.price_rim}</Text>
                </View>
                </View>
                </View>
                <View style={styles.totals}>
                    <View style={styles.totalscontainer}>
                    <Text style={styles.totalTitle}>TOTAL</Text>
                    <Text style={styles.textDescription}>{item.car_id.price + item.color_id.price_color + item.rim_id.price_rim}</Text>
                    </View>
                    <View style={styles.totalscontainer}>
                    <Text style={styles.reservationTitle}>RESERVATION</Text>
                    <Text style={styles.textDescription}>{item.car_id.reservePrice + item.color_id.price_color + item.rim_id.price_rim}</Text>
                    </View>
                </View>
            </View>
      )) : null} 
                    <View style={styles.payContainer}>
                    <Text style={styles.reservationTitle}>GO TO PAYMENT</Text>
                    <Text style={styles.textDescription}>{total}</Text>
                    </View>
            <TouchableOpacity onPress={handleClick}><Text style={{ position: 'relative', left:"10%", backgroundColor: 'white', width: "80%", height: 60, color: 'black', padding: 5, justifyContent: 'center', textAlign: 'center', fontSize: 25 }}>ADD TO CART</Text></TouchableOpacity>
        </ScrollView>
         )

}

const styles = StyleSheet.create({
    cartContainer: {  
        backgroundColor: 'black',
        padding: 20,
    },
    cartTitle: {
        fontSize: 35,
        color: '#ffffff',
        margin: 40,
        textAlign: 'center'
    },
    resumeCont: {
        display: 'flex',
        marginBottom: 40,
        marginTop: "10%",
    },
    titleContainer: {
        marginTop: 20
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
    fontSize: 18,
   },
   textDescriptionItem: {
    width: "60%",
    fontSize: 18,
    color: "#ffffff"
   },
   totals: {
    gap: 8,
    color: '#ffffff'
   },
   totalscontainer:{
    borderColor: '#ffffff',
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
   totalscontainer: {
    border: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
   },
   payContainer: {
    borderColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginBottom: "10%"

   },
    })