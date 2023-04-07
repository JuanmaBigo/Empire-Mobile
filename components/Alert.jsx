import React, { useState } from 'react'

import { View } from 'react-native'
import TouchableOpacity from 'react-native-gesture-handler'
import TextStyled from './TextStyled'
import Ionicons from '@expo/vector-icons';



export default function Alert({ message, alert }) {
    console.log(message, alert)

    return (
        <View>
            {alert ?
                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10, padding: 20, paddingBottom: 30, backgroundColor: '#4338CA', position: 'absolute', bottom: 400 }} >
                    <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 50, alignSelf: 'flex-end', backgroundColor: 'white', marginBottom: 20, width: 30, height: 30 }} onPress={() => alert = false}>
                        <Ionicons name='close-outline' size={30} color="#fff" />
                    </TouchableOpacity>
                    <TextStyled props={{ color: '#fff', fontSize: 17, fontFamily: 'Regular' }} content={'hola'} />
                </View > : null}
        </View>

    )
}
