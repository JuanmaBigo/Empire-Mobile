import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Video } from "expo-av";
import { ImageBackground } from 'react-native';


export default function Hero() {
    const navigation = useNavigation();
    function handleNavigate(){
        navigation.navigate('Home')
    }

    return (
        <View style={{ flex: 1, height: '100%', width: '100%' }}>
            <Video
                source={require('../assets/video/home.mp4')}
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
            <ImageBackground source={require('../assets/image/logo.png')} style={{ position: 'absolute', height: 250, top: 250, alignSelf: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center',opacity:0.5 }}>
                <Text style={{color: '#fff', fontSize: 55, marginLeft: -7}}>EMPIRE</Text>
            </ImageBackground>
            <TouchableOpacity onPress={handleNavigate} style={{ position: 'absolute', bottom: 150, backgroundColor: '#fff', alignSelf: 'center', elevation: 3 }}>
                <Text style={{ fontSize: 20, fontWeight: 500, paddingVertical: 5, paddingHorizontal:10, paddingHorizontal: 10, letterSpacing: 0.7 }}>LIVE YOUR EXPERIENCE</Text>
            </TouchableOpacity>
        </View>
    )
}


