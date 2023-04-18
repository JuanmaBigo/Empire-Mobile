import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Service() {
    const navigation = useNavigation();
    function handleNavigate() {
        navigation.navigate('ContactUs')
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/image/services-bg.jpg')} style={{ width: '100%', height: '100%', display: 'flex',  alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={styles.titlesMuseumPage}>
                    <Image
                        source={require('../assets/image/contact-us-text.png')}
                        style={styles.empireMuseumPageImg}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.sectionBtnMuseumTour}>
                    <Animatable.View animation="slideInDown" duration={2000} style={{ backgroundColor: 'white', marginTop: 200, height: 40, width: 150, paddingTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={handleNavigate} style={styles.touchableOpacity}>
                            <Text style={{ color: 'black', fontSize: 20, marginTop: -18, fontWeight: 'bold', textTransform: 'uppercase' }}>CONTACT US</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
    },
    sectionBtnMuseumTour: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 150,
    },
    titlesMuseumPage: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
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
