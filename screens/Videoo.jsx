import { View, Text } from 'react-native'
import React from 'react'
import { Video } from 'expo-av'

export default function Videoo() {
    return (
        <View style={{width: '100%', height: '100%'}}>
            <Video
                source={{uri:'https://drive.google.com/uc?export=download&id=1Sibr0a4reOz_jjv4gqca5JdDP9qJrRXQ'}}
                style={{ flex: 1 }}
                rate={1.0}
                volume={0.0}
                isMuted={true}
                resizeMode="cover"
                shouldPlay
                isLooping
                useNativeControls={false}
                onError={(error) => console.log(error)}
            >
            </Video>
        </View>
    )
}

//
// https://drive.google.com/uc?export=download&id=<YOUR-ID-HERE>