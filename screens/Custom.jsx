import { View, Text, Image, TouchableOpacity, ImageBackground, Animated, } from 'react-native'
import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'

import modelActions from "../store/model/actions.js"
const { getOne } = modelActions


export default function Custom() {

    const dispatch = useDispatch()
    let car = useSelector(store => store.model.car)
    console.log(car)



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