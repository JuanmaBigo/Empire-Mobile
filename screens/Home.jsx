import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    const navigation = useNavigation();

    function handleNavigateVehicles() {
        navigation.navigate('VEHICLES')
    }

    function handleNavigateArt() {
        navigation.navigate('ART & CULTURE')
    }
    function handleNavigateAI() {
        navigation.navigate('AI ENGINE')
    }

    return (
        <View style={{ flex: 1, height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <View style={{ flex: 1, width: '100%', height: '100%' }}>
                <TouchableOpacity onPress={handleNavigateVehicles} activeOpacity={0.8} style={{ width: '100%', height: '100%', }}>
                    <ImageBackground source={{ uri: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02.jpg' }} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.title}>VEHICLES</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, width: '100%', height: '100%', }}>
                <TouchableOpacity onPress={handleNavigateAI} activeOpacity={0.8} style={{ width: '100%', height: '100%', }}>
                    <ImageBackground source={{ uri: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/gateway-family/concept/2020_06/header_c.jpg' }} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={styles.title}>AI ENGINE</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, width: '100%', height: '100%', }}>
                <TouchableOpacity onPress={handleNavigateArt} activeOpacity={0.8} style={{ width: '100%', height: '100%', }}>
                    <ImageBackground source={{ uri: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/after_sales/service/after_sales_service_hb_1.jpg' }} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.title}>ART & CULTURE</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 50,
        fontWeight: 400,
        textShadowColor: 'black',
        textShadowRadius: 5,
        textShadowOffset: { width: 3, height: 3 },
    },
    artTitle: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 400,
        textShadowColor: 'black',
        textShadowRadius: 5,
        textShadowOffset: { width: 3, height: 3 },
    }
})
