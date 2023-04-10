import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Vehicles() {
    const navigation = useNavigation();
    function handleNavigate() {
        // navigation.navigate('Contact Us')
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/image/vehicles-bg.jpg')} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.sectionBtnMuseumTour}>
                    <Animatable.View animation="slideInDown" duration={2000} style={{ backgroundColor: 'black', marginTop: 200, height: 40, width: 150, paddingTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={handleNavigate} style={styles.touchableOpacity}>
                            <Text style={{ color: 'white', fontSize: 20, marginTop: -18, fontWeight: 'bold', textTransform: 'uppercase' }}>SHOW ALL</Text>
                        </TouchableOpacity>
                    </Animatable.View>

                </View>
                <View style={styles.titlesMuseumPage}>
                    <Image
                        source={require('../assets/image/title-empire-vehicles.png')}
                        style={styles.empireMuseumPageImg}
                        resizeMode="contain"
                    />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    sectionBtnMuseumTour: {
        width: '100%',
        alignItems: 'center',
    },
    titlesMuseumPage: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -700,
    },
    artAndCultureImg: {
        width: '80%',
        height: 30,
        marginLeft: '5%',
    },
    empireMuseumPageImg: {
        width: '90%',
        height: 150,
        marginRight: '1%',
    },
});
