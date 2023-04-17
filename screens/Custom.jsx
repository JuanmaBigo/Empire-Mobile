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
        <View  >
        <Text></Text>
        </View>
    )
}

