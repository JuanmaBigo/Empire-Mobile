import { View, Text } from 'react-native'
import React from 'react'

export default function VehicleDetails2(props) {
    id = props.route.params.id
    return (
        <View>
            <Text>{id}</Text>
        </View>
    )
}