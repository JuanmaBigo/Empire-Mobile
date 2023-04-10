import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function ArtAndCulture() {
    const navigation = useNavigation();
    function handleNavigate(){
        navigation.navigate('TourMuseum')
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/2023/01_23/hero/museo_23_hero_01_m.jpg' }} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.sectionBtnMuseumTour}>
                    <Animatable.View animation="slideInDown" duration={2000} style={{ backgroundColor: 'black', height: 40, width: 150, paddingTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={handleNavigate} style={styles.touchableOpacity}>
                            <Text style={{ color: 'white', fontSize: 20,marginTop:-18, fontWeight: 'bold', textTransform: 'uppercase' }}>VIRTUAL TOUR</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
                <View style={styles.titlesMuseumPage}>
                    <Image
                        source={require('../assets/image/artAndculture.png')}
                        style={styles.artAndCultureImg}
                        resizeMode="contain"
                    />
                    <Image
                        source={require('../assets/image/titleMuseum.png')}
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
        marginTop: '80%',
    },
    artAndCultureImg: {
        width: '80%',
        height: 30,
        marginLeft: '5%',
    },
    empireMuseumPageImg: {
        width: '90%',
        height: 150,
        marginRight: '5%',
    },
});
