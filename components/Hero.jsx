import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Video } from "expo-av";


export default function Hero() {
    const navigation = useNavigation();

    return (
        <View style={{flex: 1}}>
            <Video
                source={require('../assets/video/autos.mp4')}
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
            <TouchableOpacity style={{position: 'absolute', bottom: 150, backgroundColor: '#fff', alignSelf: 'center', opacity: 0.8}}>
                <Text style={{fontSize: 20, fontWeight: 600, padding: 5, paddingHorizontal: 10}}>LIVE YOUR EXPERIENCE</Text>
            </TouchableOpacity>
        </View>
    )
}


