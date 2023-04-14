import { View, Text, Image, TouchableOpacity, ImageBackground, Animated,  } from 'react-native'
import carActions from '../store/Cars/Actions.js'
import  Constants  from 'expo-constants'
import { StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'


export default function Custom() {
const { get_car } = carActions
const route = useRoute();

// const carId = route.params.carId
const dispatch = useDispatch()
let car = useSelector(store => store.car)
console.log(car)

// useFocusEffect(React.useCallback(() => {
//     async function getData() {
//         try {
//             const value = await AsyncStorage.getItem('token');
//             getCar(value)
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     getData();
// }, []));

function getCar(token) {
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    dispatch(get_car({ _id: '64377af4968955ae96af8fa8' , headers: headers }))
}
useEffect( () => {
    getCar(token)
}, [token]);

    return (
        <View style={styles.container} >
            <View style={styles.titleContainer}>
            <Image
             source={require('../assets/image/text-customize.png')}
             style={styles.titleImg}
             resizeMode="contain"
            />   
            </View>
            {/* <View>
                {car.values((repo) => (<View key={repo.car_id}>
                    <Image source={require(repo.photo)} style={styles.carImg}/>
                     </View>) )}
            </View> */}
            <Image
            source={require('../assets/image/custome-car.png')}
            style={styles.carImg}
            resizeMode="contain"
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#1E1E1E",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    titleContainer: {
        width: "100%",
        height: "20%",
        display: "flex",
        marginTop: 20,
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 5

    },
    titleImg: {
        width: '80%',
        height: 150,
        marginRight: '1%'
    },
    carImg: {
        width: '100%',
 
    },
})